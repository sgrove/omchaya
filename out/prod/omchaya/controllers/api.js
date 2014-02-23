// Compiled by ClojureScript 0.0-2156
goog.provide('omchaya.controllers.api');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
omchaya.controllers.api.append_activity_to_channel = (function append_activity_to_channel(state,channel_id,activity){return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$368,channel_id,cljs.core.constant$keyword$354], null),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.sort_by,cljs.core.constant$keyword$345),cljs.core.conj),activity);
});
omchaya.controllers.api.drop_old_activity_from_channel = (function drop_old_activity_from_channel(state,channel_id,message_limit){return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$368,channel_id,cljs.core.constant$keyword$354], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.take_last,message_limit));
});
omchaya.controllers.api.api_event = (function (){var method_table__4261__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4262__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var method_cache__4263__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4264__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4265__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$553,cljs.core.get_global_hierarchy());return (new cljs.core.MultiFn("api-event",(function (target,message,args,state){return message;
}),cljs.core.constant$keyword$308,hierarchy__4265__auto__,method_table__4261__auto__,prefer_table__4262__auto__,method_cache__4263__auto__,cached_hierarchy__4264__auto__));
})();
omchaya.controllers.api.api_event.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$387,(function (target,message,activity,state){var message_limit = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$366,cljs.core.constant$keyword$373], null));return omchaya.controllers.api.drop_old_activity_from_channel(omchaya.controllers.api.append_activity_to_channel(state,cljs.core.constant$keyword$348.cljs$core$IFn$_invoke$arity$1(activity),activity),cljs.core.constant$keyword$348.cljs$core$IFn$_invoke$arity$1(activity),message_limit);
}));
omchaya.controllers.api.api_event.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$388,(function (target,message,channel_id,state){return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$368], null),cljs.core.dissoc,channel_id);
}));
