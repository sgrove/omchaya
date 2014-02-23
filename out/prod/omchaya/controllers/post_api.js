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
omchaya.controllers.post_api.notify_if_mentioned_BANG_ = (function notify_if_mentioned_BANG_(activity,state){var current_user = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$351,cljs.core.constant$keyword$369.cljs$core$IFn$_invoke$arity$1(state)], null));var comm = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$370,cljs.core.constant$keyword$432], null));if(cljs.core.truth_((function (){var and__3391__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$385.cljs$core$IFn$_invoke$arity$1(current_user),cljs.core.constant$keyword$346.cljs$core$IFn$_invoke$arity$1(activity));if(and__3391__auto__)
{return (omchaya.useful.ffilter.cljs$core$IFn$_invoke$arity$2 ? omchaya.useful.ffilter.cljs$core$IFn$_invoke$arity$2((function (piece){var vec__21446 = cljs.core.re_find(/(.*)@(\w+)(.*)/,piece);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21446,0,null);var pre = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21446,1,null);var username = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21446,2,null);var post = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21446,3,null);return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(username,cljs.core.constant$keyword$386.cljs$core$IFn$_invoke$arity$1(current_user));
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$347.cljs$core$IFn$_invoke$arity$1(activity),/ /)) : omchaya.useful.ffilter.call(null,(function (piece){var vec__21446 = cljs.core.re_find(/(.*)@(\w+)(.*)/,piece);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21446,0,null);var pre = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21446,1,null);var username = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21446,2,null);var post = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21446,3,null);return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(username,cljs.core.constant$keyword$386.cljs$core$IFn$_invoke$arity$1(current_user));
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$347.cljs$core$IFn$_invoke$arity$1(activity),/ /)));
} else
{return and__3391__auto__;
}
})()))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$592,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [activity,"/assets/audio/threetone-alert.wav"], null)], null));
} else
{return null;
}
});
omchaya.controllers.post_api.post_api_event_BANG_ = (function (){var method_table__4261__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4262__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var method_cache__4263__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4264__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4265__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$553,cljs.core.get_global_hierarchy());return (new cljs.core.MultiFn("post-api-event!",(function (target,message,previous_state,current_state){return message;
}),cljs.core.constant$keyword$308,hierarchy__4265__auto__,method_table__4261__auto__,prefer_table__4262__auto__,method_cache__4263__auto__,cached_hierarchy__4264__auto__));
})();
omchaya.controllers.post_api.post_api_event_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$308,(function (target,message,previous_state,current_state){return null;
}));
omchaya.controllers.post_api.post_api_event_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$387,(function (target,message,activity,previous_state,current_state){(omchaya.commands.handle_maybe_command.cljs$core$IFn$_invoke$arity$3 ? omchaya.commands.handle_maybe_command.cljs$core$IFn$_invoke$arity$3(target,activity,current_state) : omchaya.commands.handle_maybe_command.call(null,target,activity,current_state));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$348.cljs$core$IFn$_invoke$arity$1(activity),cljs.core.constant$keyword$367.cljs$core$IFn$_invoke$arity$1(current_state)))
{setTimeout((function (){return omchaya.ui.scroll_to_latest_message_when_appropriate_BANG_(target,cljs.core.constant$keyword$348.cljs$core$IFn$_invoke$arity$1(activity));
}),35);
if(cljs.core.truth_((function (){var or__3403__auto__ = cljs.core.constant$keyword$596.cljs$core$IFn$_invoke$arity$1(activity);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return true;
}
})()))
{return omchaya.controllers.post_api.notify_if_mentioned_BANG_(activity,current_state);
} else
{return null;
}
} else
{return null;
}
}));
