(ns omchaya.mock-data
  (:require [omchaya.utils :as utils]))

(def user-emails
  ["sean@bushi.do" "nb@bushi.do" "sacha@bushi.do"])

(defn random-message [channel-id & [at-now?]]
  (let [at (if at-now?
             (js/Date.)
             (as-> (js/Date.) x
                   (.getTime x)
                   (- x (rand-int (* 1000 60 24 60)))
                   (js/Date. x)))]
    {:created_at at
     :author (rand-nth user-emails)
     :content (rand-nth ["deployed with ruby on...?"
                         "ha, dat stuff works"
                         "Random content"
                         "Heh, :+1:"
                         "Wow, :exclamation:"
                         "@sgrove Ok, let's do this!"
                         "/queue http://mp3.tom7.org/t7es/2008/t7es_msiegler.mp3"
                         "/queue http://mp3.tom7.org/t7es/2008/t7es_goog.mp3"
                         "/queue http://mp3.tom7.org/t7es/2008/t7es_petrolatum.mp3"
                         "/queue http://mp3.tom7.org/t7es/2009/t7es-sans-pellegrino.mp3"
                         "/queue http://mp3.tom7.org/t7es/2008/t7es_rt2i.mp3"
                         "/queue http://mp3.tom7.org/t7es/2007/tom7=rutgers.mp3"
                         "/queue https://dl.dropboxusercontent.com/u/412963/11%20Charlotte.mp3"
                         "/queue https://dl.dropboxusercontent.com/u/412963/Golf%20Clap.mp3"
                         "/queue https://dl.dropboxusercontent.com/u/412963/cheer.mp3"
                         "/queue https://dl.dropboxusercontent.com/u/412963/Why%20This%20Kolaveri%20Di%20Full%20Song%20Promo%20Video%20in%20HD%20-%20.mp3"
                         "Someone checkout http://www.youtube.com/watch?v=zN7I2zeLZwo"
                         ":bomb: http://www.youtube.com/watch?v=zN7I2zeLZwo"
                         "@sacha Be careful with that"
                         "Hey @nb - I got you something nice... (not really)"])
     :channel-id channel-id}))

(defn random-title []
  (rand-nth ["Background"
             "A dark place"
             "한국어"
             "Zork lovers"
             "The War Room"
             "Emotional Trance"
             "8 out of 10 cats"
             "Was it something I said?"
             "Example"]))

(def media
  [{:src "/system/attachments/files/000/000/098/original/call-centre-woman.jpg?1392265218"
    :name "call-centre-woman.jpg"}
   {:src "/system/attachments/files/000/000/098/original/design.pdf?1392265218"
    :name "design.pdf"}
   {:src "/system/attachments/files/000/000/098/original/example.mp3?1392265218"
    :name "example.mp3"}])

(defn random-channel [order & [title]]
  (let [title (or title (random-title))]
    {:id (utils/safe-sel title)
     :order order
     :title title
     :selected false
     :users (take (inc (rand-int (count user-emails))) (shuffle user-emails))
     :activities (vec
                  (sort-by :created_at (repeatedly 50 ;;(inc (rand-int 50))
                                                   #(random-message (utils/safe-sel title)))))
     :media (vec
             (take (inc (rand-int 0))
                   (shuffle media)))
     :sfx {:source-url nil}
     :player {:source-url "https://dl.dropboxusercontent.com/u/412963/Why%20This%20Kolaveri%20Di%20Full%20Song%20Promo%20Video%20in%20HD%20-%20.mp3"
              :playing-order -1
              :state :playing
              :loading false
              :playlist []}}))

(defn initial-state [comms]
  (let [channels (into {} (map (comp (juxt :id identity) random-channel) (range 0 0)))]
    {:audio {:volume 100
             :muted true}
     :windows {:window-inspector {:open false}}
     :settings {:message-limit 50
                :forms {:search {:focused false}
                        :user-message {:focused false}}
                :menus {:user-menu {:open false}}
                :sidebar {:left {:open false}
                          :right {:open false}}
                :inspector {:path [:users]}}
     :selected-channel "1"
     :channels (as-> channels ch
                     (assoc ch "1" (-> (random-channel 1 "Lobby")
                                       (assoc :id "1")))
                     (update-in ch ["1"] assoc :selected true))
     :users {"sean@bushi.do" {:full-name "Sean Grove"
                              :email "sean@bushi.do"
                              :username "sgrove"}
             "nb@bushi.do" {:full-name "Nathan Broadbent"
                            :email "nb@bushi.do"
                            :username "nb"}
             "sacha@bushi.do" {:full-name "Sacha Greif"
                               :email "sacha@bushi.do"
                               :username "sacha"}}
     :current-user-email "sean@bushi.do"
     :comms comms}))
