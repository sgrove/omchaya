(ns omchaya.mock-data
  (:require [omchaya.utils :as utils]))

(def user-emails
  ["sean@bushi.do" "nb@bushi.do" "sacha@bushi.do"])

(defn random-message [channel-id]
  (let [at (as-> (js/Date.) x
                 (.getTime x)
                 (- x (rand-int (* 1000 60 24 60)))
                 (js/Date. x))]
    {:created_at at
     :author (rand-nth user-emails)
     :content (rand-nth ["deployed with ruby on...?"
                         "ha, dat stuff works"
                         "Random content"
                         "@sgrove how're you?"
                         "@sacha Be careful with that"
                         "Hey @nb - I got you something nice... (not really)"])
     :channel-id channel-id}))

(defn random-title []
  (rand-nth ["Background"
             "A dark place"
             "한국어"
             "Zork lovers"]))

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
                  (sort-by :created_at (repeatedly (inc (rand-int 10))
                                                   #(random-message (utils/safe-sel title)))))
     :media (vec
             (take (inc (rand-int 10))
                   (shuffle media)))}))

(defn initial-state [comms]
  (let [channels (as-> (map (comp (juxt :id identity) random-channel) (range 2 8)) ch
                       (into {} ch))]
    {:settings {:message-limit 3
                :forms {:search {:focused false}
                        :user-message {:focused false}}
                :menus {:user-menu {:open false}}}
     :selected-channel "lobby"
     :channels (as-> channels ch
                     (assoc ch "lobby" (random-channel 1 "Lobby"))
                     (update-in ch ["lobby"] assoc :selected true))
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
