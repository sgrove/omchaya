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
omchaya.commands.handle_maybe_command = (function (){var method_table__4261__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4262__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4263__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4264__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4265__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("handle-maybe-command",(function (target,activity,state){return cljs.core.first.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(activity),/ |\n/));
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__4265__auto__,method_table__4261__auto__,prefer_table__4262__auto__,method_cache__4263__auto__,cached_hierarchy__4264__auto__));
})();
cljs.core._add_method.call(null,omchaya.commands.handle_maybe_command,new cljs.core.Keyword(null,"default","default",2558708147),(function (target,activity,state){return null;
}));
cljs.core._add_method.call(null,omchaya.commands.handle_maybe_command,"/play",(function (target,activity,state){var controls_ch = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",1108747865),new cljs.core.Keyword(null,"controls","controls",4741937704)], null));var temp__4092__auto___10369 = (function (){var or__3403__auto__ = (function (){var G__10368 = new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(activity);var G__10368__$1 = (((G__10368 == null))?null:clojure.string.split.call(null,G__10368,/ /));var G__10368__$2 = (((G__10368__$1 == null))?null:cljs.core.second.call(null,G__10368__$1));var G__10368__$3 = (((G__10368__$2 == null))?null:cljs.core.first.call(null,cljs.core.re_find.call(null,/http.*\.(mp3|mp4|ogg|wav)/,G__10368__$2)));return G__10368__$3;
})();if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{var x = new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(activity);var x__$1 = clojure.string.split.call(null,x,/ /);var x__$2 = cljs.core.second.call(null,x__$1);var x__$3 = cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([x__$2], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ding","alert"], null));var x__$4 = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 2, ["ding","/assets/audio/ding.wav","alert","/assets/audio/threetone-alert.wav"], null),x__$3);return x__$4;
}
})();if(cljs.core.truth_(temp__4092__auto___10369))
{var url_10370 = temp__4092__auto___10369;cljs.core.async.put_BANG_.call(null,controls_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-player-source-updated","audio-player-source-updated",2679762480),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url_10370,new cljs.core.Keyword(null,"selected-channel","selected-channel",2473753411).cljs$core$IFn$_invoke$arity$1(state)], null)], null));
} else
{}
return cljs.core.async.put_BANG_.call(null,controls_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-player-started","audio-player-started",1807969246),new cljs.core.Keyword(null,"channel-id","channel-id",3378014615).cljs$core$IFn$_invoke$arity$1(activity)], null));
}));
cljs.core._add_method.call(null,omchaya.commands.handle_maybe_command,"/stop",(function (target,activity,state){var controls_ch = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",1108747865),new cljs.core.Keyword(null,"controls","controls",4741937704)], null));return cljs.core.async.put_BANG_.call(null,controls_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-player-stopped","audio-player-stopped",1820835114),new cljs.core.Keyword(null,"channel-id","channel-id",3378014615).cljs$core$IFn$_invoke$arity$1(activity)], null));
}));
cljs.core._add_method.call(null,omchaya.commands.handle_maybe_command,"/pause",(function (target,activity,state){var controls_ch = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",1108747865),new cljs.core.Keyword(null,"controls","controls",4741937704)], null));return cljs.core.async.put_BANG_.call(null,controls_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-player-stopped","audio-player-stopped",1820835114),new cljs.core.Keyword(null,"channel-id","channel-id",3378014615).cljs$core$IFn$_invoke$arity$1(activity)], null));
}));
cljs.core._add_method.call(null,omchaya.commands.handle_maybe_command,"/queue",(function (target,activity,state){var controls_ch = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",1108747865),new cljs.core.Keyword(null,"controls","controls",4741937704)], null));var temp__4092__auto__ = cljs.core.first.call(null,cljs.core.re_find.call(null,/http.*\.(mp3|mp4|ogg|wav)/,cljs.core.second.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"content","content",1965434859).cljs$core$IFn$_invoke$arity$1(activity),/ |\n/))));if(cljs.core.truth_(temp__4092__auto__))
{var url = temp__4092__auto__;return cljs.core.async.put_BANG_.call(null,controls_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playlist-entry-queued","playlist-entry-queued",1714422459),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channel-id","channel-id",3378014615).cljs$core$IFn$_invoke$arity$1(activity),url], null)], null));
} else
{return null;
}
}));
cljs.core._add_method.call(null,omchaya.commands.handle_maybe_command,"/mute",(function (target,activity,state){var controls_ch = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",1108747865),new cljs.core.Keyword(null,"controls","controls",4741937704)], null));return cljs.core.async.put_BANG_.call(null,controls_ch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-player-muted","audio-player-muted",4718730120)], null));
}));
cljs.core._add_method.call(null,omchaya.commands.handle_maybe_command,"/unmute",(function (target,activity,state){var controls_ch = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",1108747865),new cljs.core.Keyword(null,"controls","controls",4741937704)], null));return cljs.core.async.put_BANG_.call(null,controls_ch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-player-unmuted","audio-player-unmuted",3422373327)], null));
}));

//# sourceMappingURL=commands.js.map