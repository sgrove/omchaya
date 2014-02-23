// Compiled by ClojureScript 0.0-2156
goog.provide('omchaya.commands');
goog.require('cljs.core');
goog.require('omchaya.useful');
goog.require('cljs.core.async');
goog.require('omchaya.components.app');
goog.require('omchaya.utils');
goog.require('cljs.core.async');
goog.require('omchaya.api.mock');
goog.require('omchaya.useful');
goog.require('omchaya.mock_data');
goog.require('omchaya.useful');
goog.require('om.dom');
goog.require('om.core');
goog.require('clojure.string');
goog.require('omchaya.api.mock');
goog.require('omchaya.datetime');
goog.require('om.core');
goog.require('omchaya.mock_data');
goog.require('omchaya.datetime');
goog.require('clojure.string');
goog.require('omchaya.components.app');
goog.require('omchaya.utils');
goog.require('om.dom');
goog.require('dommy.core');
goog.require('cljs.core.async');
goog.require('dommy.core');
omchaya.commands.handle_maybe_command = (function (){var method_table__4261__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4262__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var method_cache__4263__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4264__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4265__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$553,cljs.core.get_global_hierarchy());return (new cljs.core.MultiFn("handle-maybe-command",(function (target,activity,state){return cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$347.cljs$core$IFn$_invoke$arity$1(activity),/ |\n/));
}),cljs.core.constant$keyword$308,hierarchy__4265__auto__,method_table__4261__auto__,prefer_table__4262__auto__,method_cache__4263__auto__,cached_hierarchy__4264__auto__));
})();
omchaya.commands.handle_maybe_command.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$308,(function (target,activity,state){return null;
}));
omchaya.commands.handle_maybe_command.cljs$core$IMultiFn$_add_method$arity$3(null,"/play",(function (target,activity,state){var controls_ch = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$370,cljs.core.constant$keyword$432], null));var temp__4092__auto___20949 = (function (){var or__3403__auto__ = (function (){var G__20948 = cljs.core.constant$keyword$347.cljs$core$IFn$_invoke$arity$1(activity);var G__20948__$1 = (((G__20948 == null))?null:clojure.string.split.cljs$core$IFn$_invoke$arity$2(G__20948,/ /));var G__20948__$2 = (((G__20948__$1 == null))?null:cljs.core.second(G__20948__$1));var G__20948__$3 = (((G__20948__$2 == null))?null:cljs.core.first(cljs.core.re_find(/http.*\.(mp3|mp4|ogg|wav)/,G__20948__$2)));return G__20948__$3;
})();if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{var x = cljs.core.constant$keyword$347.cljs$core$IFn$_invoke$arity$1(activity);var x__$1 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(x,/ /);var x__$2 = cljs.core.second(x__$1);var x__$3 = cljs.core.some(cljs.core.PersistentHashSet.fromArray([x__$2], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ding","alert"], null));var x__$4 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, ["ding","/assets/audio/ding.wav","alert","/assets/audio/threetone-alert.wav"], null),x__$3);return x__$4;
}
})();if(cljs.core.truth_(temp__4092__auto___20949))
{var url_20950 = temp__4092__auto___20949;cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(controls_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$554,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url_20950,cljs.core.constant$keyword$367.cljs$core$IFn$_invoke$arity$1(state)], null)], null));
} else
{}
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(controls_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$506,cljs.core.constant$keyword$348.cljs$core$IFn$_invoke$arity$1(activity)], null));
}));
omchaya.commands.handle_maybe_command.cljs$core$IMultiFn$_add_method$arity$3(null,"/stop",(function (target,activity,state){var controls_ch = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$370,cljs.core.constant$keyword$432], null));return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(controls_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$504,cljs.core.constant$keyword$348.cljs$core$IFn$_invoke$arity$1(activity)], null));
}));
omchaya.commands.handle_maybe_command.cljs$core$IMultiFn$_add_method$arity$3(null,"/pause",(function (target,activity,state){var controls_ch = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$370,cljs.core.constant$keyword$432], null));return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(controls_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$504,cljs.core.constant$keyword$348.cljs$core$IFn$_invoke$arity$1(activity)], null));
}));
omchaya.commands.handle_maybe_command.cljs$core$IMultiFn$_add_method$arity$3(null,"/queue",(function (target,activity,state){var controls_ch = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$370,cljs.core.constant$keyword$432], null));var temp__4092__auto__ = cljs.core.first(cljs.core.re_find(/http.*\.(mp3|mp4|ogg|wav)/,cljs.core.second(clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$347.cljs$core$IFn$_invoke$arity$1(activity),/ |\n/))));if(cljs.core.truth_(temp__4092__auto__))
{var url = temp__4092__auto__;return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(controls_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$555,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$348.cljs$core$IFn$_invoke$arity$1(activity),url], null)], null));
} else
{return null;
}
}));
omchaya.commands.handle_maybe_command.cljs$core$IMultiFn$_add_method$arity$3(null,"/mute",(function (target,activity,state){var controls_ch = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$370,cljs.core.constant$keyword$432], null));return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(controls_ch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$556], null));
}));
omchaya.commands.handle_maybe_command.cljs$core$IMultiFn$_add_method$arity$3(null,"/unmute",(function (target,activity,state){var controls_ch = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$370,cljs.core.constant$keyword$432], null));return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(controls_ch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$557], null));
}));
