(ns omchaya.structure
  (:require [cljs.core.async :as async :refer [>! <! alts! chan sliding-buffer put! close!]]
            [om.core :as om]
            [omchaya.components.ankha-container :as ankha-container]
            [omchaya.components.app :as app]
            [omchaya.components.audio-players :as audio]
            [omchaya.components.draggable-window :as draggable]
            [omchaya.components.key-queue :as keyq]
            [omchaya.components.main-area :as main-area]
            [omchaya.components.navbar :as navbar]
            [omchaya.components.sidebar :as sidebar]
            [omchaya.utils :as utils]
            [sablono.core :as html :refer-macros [html]]))

(defn trans-current-user [{:keys [users current-user-email] :as values}]
  (assoc values
    :user (get users current-user-email)))

(defn trans-people-widget [{:keys [channels selected-channel
                                   users search-filter]}]
  {:channel-users-emails (get-in channels [selected-channel :users])
   :search-filter search-filter
   :users users})

(defn trans-playlist-widget [{:keys [channels selected-channel
                                     users search-filter]}]
  {:player (get-in channels [selected-channel :player])
   :selected-channel selected-channel
   :search-filter search-filter})

(defn trans-playlist-action-widget [{:keys [channels selected-channel
                                     users search-filter]}]
  {:player (get-in channels [selected-channel :player])
   :selected-channel selected-channel})

(defn trans-media-widget [{:keys [channels selected-channel search-filter]}]
  {:media (get-in channels [selected-channel :media])
   :search-filter search-filter})

(defn trans-audio-players [{:keys [audio-settings selected-channel channels] :as values}]
  {:selected-channel selected-channel
   :audio-settings audio-settings
   :players (mapv (fn [[channel-id channel]]
                    {:source-url (get-in channel [:player :source-url])
                     :sfx (:sfx channel)
                     :id channel-id}) channels)})

(defn trans-inspector-window [{:keys [inspector-path name window] :as values}]
  {:title (str "Data inspector: " (pr-str inspector-path))
   :name name
   :window window})

(defn trans-ankha-inspector [{:keys [app inspector-path]}]
  {:inspected (get-in app inspector-path)})

(defn trans-activities-list [{:keys [channels selected-channel] :as values}]
  (assoc values
    :activities (get-in channels [selected-channel :activities])))

(def coms
  {:root
   {:com app/app
    :default-data {}
    :paths {:sidebars [:path [:settings :sidebar]]}
    :transformer identity
    :children [{:com draggable/draggable-window
                :paths {:inspector-path [:path [:settings :inspector :path]]
                        :name [:value :window-inspector]
                        :window [:path [:windows :window-inspector]]}
                :transformer trans-inspector-window
                :children [{:com ankha-container/ankha-container
                            :paths {:app [:path []]
                                    :inspector-path [:path [:settings :inspector :path]]}
                            :transformer trans-ankha-inspector}]}
               {:com keyq/keyboard-handler
                :paths {:key-map [:path [:settings :key-bindings :app]]}
                :transformer identity}
               {:com audio/players
                :paths {:audio-settings   [:path [:audio]]
                        :selected-channel [:path [:selected-channel]]
                        :channels         [:path [:channels]]
                        :id               [:path [:selected-channel]]}
                :transformer trans-audio-players}
               {:com sidebar/sidebar
                :paths {}
                :transformer identity
                :children [{:com sidebar/titled-menu
                            :paths {:menu-opened? [:path [:settings :menus :user-menu :open]]}
                            :transformer identity
                            :children [{:com sidebar/current-user
                                        :paths {:users [:path [:users]]
                                                :current-user-email [:path [:current-user-email]]}
                                        :transformer trans-current-user}
                                       {:com sidebar/menu-item
                                        :paths {:text [:value "Edit Account"]
                                                :message [:value :settings-opened]}
                                        :transformer identity}
                                       {:com sidebar/menu-item
                                        :paths {:text [:value "Logout"]
                                                :message [:value :user-logged-out]}
                                        :transformer identity}
                                       {:com sidebar/menu-item
                                        :paths {:text [:value "Help"]
                                                :message [:value :help-opened]}
                                        :transformer identity}
                                       {:com sidebar/menu-item
                                        :paths {:text [:value "About Omchaya"]
                                                :message [:value :about-opened]}
                                        :transformer identity}]}
                           {:com sidebar/widget
                            :paths {:title [:value "People"]
                                    :icon  [:value "/assets/images/people_icon.png"]}
                            :transformer identity
                            :children [{:com sidebar/people-widget
                                        :paths {:selected-channel [:path [:selected-channel]]
                                                :channels         [:path [:channels]]
                                                :users            [:path [:users]]
                                                :settings         [:path [:settings]]
                                                :search-filter    [:path [:settings :forms :search :value]]}
                                        :transformer trans-people-widget}]}
                           {:com sidebar/widget
                            :paths {:title [:value "Playlist"]
                                    :icon  [:value "/assets/images/video_icon.png"]}
                            :transformer identity
                            :children [{:com sidebar/playlist-widget
                                        :paths {:selected-channel [:path [:selected-channel]]
                                                :channels         [:path [:channels]]
                                                :search-filter    [:path [:settings :forms :search :value]]}
                                        :transformer trans-playlist-widget}
                                       {:com sidebar/playlist-action-widget
                                        :paths {:selected-channel [:path [:selected-channel]]
                                                :channels         [:path [:channels]]
                                                :search-filter    [:path [:settings :forms :search :value]]}
                                        :transformer trans-playlist-action-widget}]}
                           {:com sidebar/widget
                            :paths {:title [:value "Media"]
                                    :icon  [:value "/assets/images/media_icon.png"]}
                            :transformer identity
                            :children [{:com sidebar/media-widget
                                        :paths {:selected-channel [:path [:selected-channel]]
                                                :channels         [:path [:channels]]
                                                :search-filter    [:path [:settings :forms :search :value]]}
                                        :transformer trans-media-widget}
                                       {:com sidebar/media-action-widget
                                        :paths {:channel-id [:path [:selected-channel]]}
                                        :transformer identity}]}]}
               {:com main-area/main-area
                :paths {:selected-channel   [:path [:selected-channel]]}
                :transformer identity
                :children [{:com main-area/activities-list
                            :paths {:search-filter      [:path [:settings :forms :search :value]]
                                    :selected-channel   [:path [:selected-channel]]
                                    :channels           [:path [:channels]]
                                    :current-user-email [:path [:current-user-email]]
                                    :users              [:path [:users]]}
                            :transformer trans-activities-list}
                           {:com main-area/chatbox
                            :paths {:input-focused? [:path [:settings :forms :user-message :focused]]
                                    :input-value    [:path [:settings :forms :user-message :value]]}
                            :transformer identity}]}
               {:com navbar/navbar
                :paths {:channels [:path [:channels]]
                        :settings [:path [:settings]]}
                :transformer identity}]}})

(comment
  ;; What would this look like if it were more hiccup-ish?
  [:app/app {:default-data {}
             :paths {:sidebars [:path [:settings :sidebar]]}
             :transformer identity}
   [:draggable/draggable-window {:paths {:inspector-path [:path [:settings :inspector :path]]
                                         :name [:value :window-inspector]
                                         :window [:path [:windows :window-inspector]]}
                                 :transformer trans-inspector-window}
    [:ankha-container/ankha-container {:paths {:app [:path []]
                                               :inspector-path [:path [:settings :inspector :path]]}
                                       :transformer trans-ankha-inspector}]]
   [:keyq/keyboard-handler {:paths {:key-map [:path [:settings :key-bindings :app]]}
                            :transformer identity}]
   [:audio/players {:paths {:audio-settings   [:path [:audio]]
                            :selected-channel [:path [:selected-channel]]
                            :channels         [:path [:channels]]
                            :id               [:path [:selected-channel]]}
                    :transformer trans-audio-players}]
   [:sidebar/sidebar {:paths {}
                      :transformer identity}
    [:sidebar/titled-menu {:paths {:menu-opened? [:path [:settings :menus :user-menu :open]]}
                           :transformer identity}
     [:sidebar/current-user {:paths {:users [:path [:users]]
                                     :current-user-email [:path [:current-user-email]]}
                             :transformer trans-current-user}]
     [:sidebar/menu-item {:paths {:text [:value "Edit Account"]
                                  :message [:value :settings-opened]}
                          :transformer identity}]
     [:sidebar/menu-item {:paths {:text [:value "Logout"]
                                  :message [:value :user-logged-out]}
                          :transformer identity}]
     [:sidebar/menu-item {:paths {:text [:value "Help"]
                                  :message [:value :help-opened]}
                          :transformer identity}]
     [:sidebar/menu-item {:paths {:text [:value "About Omchaya"]
                                  :message [:value :about-opened]}
                          :transformer identity}]]
    [:sidebar/widget {:paths {:title [:value "People"]
                              :icon  [:value "/assets/images/people_icon.png"]}
                      :transformer identity}
     [:sidebar/people-widget {:paths {:selected-channel [:path [:selected-channel]]
                                      :channels         [:path [:channels]]
                                      :users            [:path [:users]]
                                      :settings         [:path [:settings]]
                                      :search-filter    [:path [:settings :forms :search :value]]}
                              :transformer trans-people-widget}]]
    [:sidebar/widget {:paths {:title [:value "Playlist"]
                              :icon  [:value "/assets/images/video_icon.png"]}
                      :transformer identity}
     [:sidebar/playlist-widget {:paths {:selected-channel [:path [:selected-channel]]
                                        :channels         [:path [:channels]]
                                        :search-filter    [:path [:settings :forms :search :value]]}
                                :transformer trans-playlist-widget}]
     [:sidebar/playlist-action-widget {:paths {:selected-channel [:path [:selected-channel]]
                                               :channels         [:path [:channels]]
                                               :search-filter    [:path [:settings :forms :search :value]]}
                                       :transformer trans-playlist-action-widget}]]
    [:sidebar/widget {:paths {:title [:value "Media"]
                              :icon  [:value "/assets/images/media_icon.png"]}
                      :transformer identity}
     [:sidebar/media-widget {:paths {:selected-channel [:path [:selected-channel]]
                                     :channels         [:path [:channels]]
                                     :search-filter    [:path [:settings :forms :search :value]]}
                             :transformer trans-media-widget}]
     [:sidebar/media-action-widget {:paths {:channel-id [:path [:selected-channel]]}
                                    :transformer identity}]]]
   [:main-area/main-area {:paths {:selected-channel   [:path [:selected-channel]]}
                          :transformer identity}
    [:main-area/activities-list {:paths {:search-filter      [:path [:settings :forms :search :value]]
                                         :selected-channel   [:path [:selected-channel]]
                                         :channels           [:path [:channels]]
                                         :current-user-email [:path [:current-user-email]]
                                         :users              [:path [:users]]}
                                 :transformer trans-activities-list}]
    [:main-area/chatbox {:paths {:input-focused? [:path [:settings :forms :user-message :focused]]
                                 :input-value    [:path [:settings :forms :user-message :value]]}
                         :transformer identity}]]
   [:navbar/navbar {:paths {:channels [:path [:channels]]
                            :settings [:path [:settings]]}
                    :transformer identity}]]
  ;; What would it look like if it were more JSX-ish?
  <app.app paths={:sidebars [:path [:settings sidebar]]}>
    <draggable.draggable-window paths={:inspector-path [:path [:settings inspector path]]
                                       :name   [:value window-inspector]
                                       :window [:path [:windows window-inspector]]}
                                transformer=trans-inspector-window>
      <ankha-container.ankha-container paths={:app [:path []]
                                              inspector-path [:path [:settings inspector path]]}
                                       transformer=trans-ankha-inspector>
      </ankha-container.ankha-container>
    </draggable.draggable-window>
    <keyq.keyboard-handler paths={:key-map [:path [:settings key-bindings app]]}>
    </keyq.keyboard-handler>
    <audio.players paths={:audio-settings   [:path [:audio]]
                          :selected-channel [:path [:selected-channel]]
                          :channels         [:path [:channels]]
                          :id               [:path [:selected-channel]]}
                   transformer=trans-audio-players>
    </audio.players>
    <sidebar.sidebar paths={}>
      <sidebar.titled-menu paths={:menu-opened? [:path [:settings menus user-menu open]]}>
        <sidebar.current-user paths={:users [:path [:users]]
                                     :current-user-email [:path [:current-user-email]]}
                              transformer=trans-current-user>
        </sidebar.current-user>
        <sidebar.menu-item paths={:text [:value "Edit Account"]
                                  :message [:value settings-opened]}>
        </sidebar.menu-item>
        <sidebar.menu-item paths={:text [:value "Logout"]
                                  :message [:value user-logged-out]}>
        </sidebar.menu-item>
        <sidebar.menu-item paths={:text [:value "Help"]
                                  :message [:value help-opened]}>
        </sidebar.menu-item>
        <sidebar.menu-item paths={:text [:value "About Omchaya"]
                                  :message [:value about-opened]}>
        </sidebar.menu-item>
      </sidebar.titled-menu>
      <sidebar.widget paths={:title [:value "People"]
                             :icon  [:value "/assets/images/people_icon.png"]}>
        <sidebar.people-widget paths={:selected-channel [:path [:selected-channel]]
                                      :channels         [:path [:channels]]
                                      :users            [:path [:users]]
                                      :settings         [:path [:settings]]
                                      :search-filter    [:path [:settings forms search value]]}
                               transformer=trans-people-widget>
        </sidebar.people-widget>
      </sidebar.widget>
      <sidebar.widget paths={:title [:value "Playlist"]
                             :icon  [:value "/assets/images/video_icon.png"]}>
        <sidebar.playlist-widget paths={:selected-channel [:path [:selected-channel]]
                                        :channels         [:path [:channels]]
                                        :search-filter    [:path [:settings forms search value]]}
                                 transformer=trans-playlist-widget>
        </sidebar.playlist-widget>
        <sidebar.playlist-action-widget paths={:selected-channel [:path [:selected-channel]]
                                               :channels         [:path [:channels]]
                                               :search-filter    [:path [:settings forms search value]]}
                                        transformer=trans-playlist-action-widget>
        </sidebar.playlist-action-widget>
      </sidebar.widget>
      <sidebar.widget paths={:title [:value "Media"]
                             :icon  [:value "/assets/images/media_icon.png"]}>
        <sidebar.media-widget paths={:selected-channel [:path [:selected-channel]]
                                     :channels         [:path [:channels]]
                                     :search-filter    [:path [:settings forms search value]]}
                              transformer=trans-media-widget>
        </sidebar.media-widget>
        <sidebar.media-action-widget paths={:channel-id [:path [:selected-channel]]}>
        </sidebar.media-action-widget>
      </sidebar.widget>
    </sidebar.sidebar>
    <main-area.main-area paths={:selected-channel [:path [:selected-channel]]}>
      <main-area.activities-list paths={:search-filter      [:path [:settings forms search value]]
                                        :selected-channel   [:path [:selected-channel]]
                                        :channels           [:path [:channels]]
                                        :current-user-email [:path [:current-user-email]]
                                        :users              [:path [:users]]}
                                 transformer=trans-activities-list>
      </main-area.activities-list>
      <main-area.chatbox paths={:input-focused? [:path [:settings forms user-message focused]]
                                :input-value    [:path [:settings forms user-message value]]}>
      </main-area.chatbox>
    </main-area.main-area>
    <navbar.navbar paths={:channels [:path [:channels]]
                          :settings [:path [:settings]]}>
    </navbar.navbar>
  </app.app>)
