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
                         "/queue http://mp3.tom7.org/t7es/2013/beverage-voucher.mp3"
                         "/queue http://mp3.tom7.org/t7es/2013/beverage-voucher.mp3"
                         "/queue http://mp3.tom7.org/t7es/2013/aspinwall.mp3"
                         "/queue http://mp3.tom7.org/t7es/2013/an-negotiation.mp3"
                         "/queue http://mp3.tom7.org/t7es/2013/iced-coffee.mp3"
                         "/queue http://mp3.tom7.org/t7es/http://pointone.spacebar.org/cgi-bin/point-one-hurts.zip"
                         "/queue http://mp3.tom7.org/t7es/2013/antietam.mp3"
                         "/queue http://mp3.tom7.org/t7es/2012/t7es-large-dark.mp3"
                         "/queue http://mp3.tom7.org/t7es/2011/polypoidipsia.mp3"
                         "/queue http://mp3.tom7.org/t7es/2011/dil-pe-mat-le-yaars-revenge.mp3"
                         "/queue http://mp3.tom7.org/t7es/2011/t7es-i-have-a-dram.mp3"
                         "/queue http://mp3.tom7.org/t7es/2010/olimex.mp3"
                         "/queue http://mp3.tom7.org/t7es/2010/opera-pro.mp3"
                         "/queue http://mp3.tom7.org/t7es/2010/omision.mp3"
                         "/queue http://mp3.tom7.org/t7es/2010/0-day-weekend.mp3"
                         "/queue http://mp3.tom7.org/t7es/http://hockey.spacebar.org/circus.mp3"
                         "/queue http://mp3.tom7.org/t7es/http://hockey.spacebar.org/unlucky.mp3"
                         "/queue http://mp3.tom7.org/t7es/2010/disco-very.mp3"
                         "/queue http://mp3.tom7.org/t7es/2010/disco-very-underground-bathroom-complex.mp3"
                         "/queue http://mp3.tom7.org/t7es/2010/disco-very-dance-c.mp3"
                         "/queue http://mp3.tom7.org/t7es/2010/around-the-world.mp3"
                         "/queue http://mp3.tom7.org/t7es/2009/t7es-alaplantine.mp3"
                         "/queue http://mp3.tom7.org/t7es/2009/t7es-alaplantine.mp3"
                         "/queue http://mp3.tom7.org/t7es/2009/t7es-death-row-candyland.mp3"
                         "/queue http://mp3.tom7.org/t7es/2009/t7es-zurich.mp3"
                         "/queue http://mp3.tom7.org/t7es/2009/t7es-style-color-robins-egg.mp3"
                         "/queue http://mp3.tom7.org/t7es/2008/t7es_gnocci-dokie.mp3"
                         "/queue http://mp3.tom7.org/t7es/2008/t7es_many-happy-returns.mp3"
                         "/queue http://mp3.tom7.org/t7es/2008/t7es_msiegler.mp3"
                         "/queue http://mp3.tom7.org/t7es/2008/t7es_goog.mp3"
                         "/queue http://mp3.tom7.org/t7es/2008/t7es_petrolatum.mp3"
                         "/queue http://mp3.tom7.org/t7es/2008/t7es_updn.mp3"
                         "/queue http://mp3.tom7.org/t7es/2009/t7es-sans-pellegrino.mp3"
                         "/queue http://mp3.tom7.org/t7es/2008/t7es_rt2i.mp3"
                         "/queue http://mp3.tom7.org/t7es/2007/tom7=rutgers.mp3"
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
                   (shuffle media)))
     :sfx {:source-url nil}
     :player {:source-url "https://dl.dropboxusercontent.com/u/412963/Why%20This%20Kolaveri%20Di%20Full%20Song%20Promo%20Video%20in%20HD%20-%20.mp3"
              :playing-order 0
              :state :playing
              :loading false
              :playlist (take 2 (shuffle [{:order 3 :src "https://dl.dropboxusercontent.com/u/412963/11%20Charlotte.mp3"}
                                          {:order 2 :src "https://dl.dropboxusercontent.com/u/412963/Golf%20Clap.mp3"}
                                          {:order 0 :src "https://dl.dropboxusercontent.com/u/412963/cheer.mp3"}
                                          {:order 1 :src "https://dl.dropboxusercontent.com/u/412963/Why%20This%20Kolaveri%20Di%20Full%20Song%20Promo%20Video%20in%20HD%20-%20.mp3"}]))}}))

(defn initial-state [comms]
  (let [channels (as-> (map (comp (juxt :id identity) random-channel) (range 2 8)) ch
                       (into {} ch))]
    {:audio {:volume 100
             :muted true}
     :settings {:message-limit 50
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
