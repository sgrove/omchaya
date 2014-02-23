// Compiled by ClojureScript 0.0-2156
goog.provide('omchaya.controllers.post_api');
goog.require('cljs.core');
goog.require('omchaya.useful');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('omchaya.ui');
goog.require('omchaya.commands');
goog.require('omchaya.useful');
goog.require('omchaya.useful');
goog.require('clojure.string');
goog.require('omchaya.commands');
goog.require('omchaya.ui');
goog.require('clojure.string');
goog.require('cljs.core.async');
omchaya.controllers.post_api.notify_if_mentioned_BANG_ = (function notify_if_mentioned_BANG_(activity,state){var current_user = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",1125482874),new cljs.core.Keyword(null,"current-user-email","current-user-email",4091392864).cljs$core$IFn$_invoke$arity$1(state)], null));var comm = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",1108747865),new cljs.core.Keyword(null,"controls","controls",4741937704)], null));if(cljs.core.truth_((function (){var and__3391__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"email","email",1110523662).cljs$core$IFn$_invoke$arity$1(current_user),new cljs.core.Keyword(null,"author","author",3902543101).cljs$core$IFn$_invoke$arity$1(activity));if(and__3391__auto__)
{return omchaya.useful.ffilter.call(null,(function (piece){var vec__11147 = cljs.core.re_find.call(null,/(.*)@(\w+)(.*)/,piece);var _ = cljs.core.nth.call(null,vec__11147,0,null);var pre = cljs.core.nth.call(null,vec__11147,1,null);var username = cljs.core.nth.call(null,vec__11147,2,null);var post = cljs.core.nth.call(null,vec__11147,3,null);return cljs.core._EQ_.call(null,username,new cljs.core.Keyword(null,"username","username",748190792).cljs$core$IFn$_invoke$arity$1(current_user));
}),clojure.string.split.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(activity),/ /));
} else
{return and__3391__auto__;
}
})()))
{return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-user-mentioned","current-user-mentioned",1125795533),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [activity,"/assets/audio/threetone-alert.wav"], null)], null));
} else
{return null;
}
});
omchaya.controllers.post_api.post_api_event_BANG_ = (function (){var method_table__4261__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4262__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4263__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4264__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4265__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("post-api-event!",(function (target,message,previous_state,current_state){return message;
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__4265__auto__,method_table__4261__auto__,prefer_table__4262__auto__,method_cache__4263__auto__,cached_hierarchy__4264__auto__));
})();
cljs.core._add_method.call(null,omchaya.controllers.post_api.post_api_event_BANG_,new cljs.core.Keyword(null,"default","default",2558708147),(function (target,message,previous_state,current_state){return null;
}));
cljs.core._add_method.call(null,omchaya.controllers.post_api.post_api_event_BANG_,new cljs.core.Keyword(null,"channel-activity-received","channel-activity-received",3517943815),(function (target,message,activity,previous_state,current_state){omchaya.commands.handle_maybe_command.call(null,target,activity,current_state);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"channel-id","channel-id",3378014615).cljs$core$IFn$_invoke$arity$1(activity),new cljs.core.Keyword(null,"selected-channel","selected-channel",2473753411).cljs$core$IFn$_invoke$arity$1(current_state)))
{setTimeout((function (){return omchaya.ui.scroll_to_latest_message_when_appropriate_BANG_.call(null,target,new cljs.core.Keyword(null,"channel-id","channel-id",3378014615).cljs$core$IFn$_invoke$arity$1(activity));
}),35);
if(cljs.core.truth_((function (){var or__3403__auto__ = new cljs.core.Keyword(null,"live?","live?",1116889157).cljs$core$IFn$_invoke$arity$1(activity);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return true;
}
})()))
{return omchaya.controllers.post_api.notify_if_mentioned_BANG_.call(null,activity,current_state);
} else
{return null;
}
} else
{return null;
}
}));

//# sourceMappingURL=post_api.js.map