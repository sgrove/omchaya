// Compiled by ClojureScript 0.0-2156
goog.provide('omchaya.components.history_player');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('omchaya.utils');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('sablono.core');
goog.require('om.core');
goog.require('clojure.string');
goog.require('om.core');
goog.require('clojure.string');
goog.require('omchaya.utils');
goog.require('goog.events.EventType');
goog.require('cljs.core.async');
goog.require('goog.events');
omchaya.components.history_player.local_dragging_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
omchaya.components.history_player.listen = (function listen(el,type){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();goog.events.listen(el,type,(function (p1__20977_SHARP_){if(cljs.core.truth_(cljs.core.deref(omchaya.components.history_player.local_dragging_QMARK_)))
{p1__20977_SHARP_.preventDefault();
} else
{}
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,p1__20977_SHARP_);
}));
return out;
});
omchaya.components.history_player.player_step = (function (){var method_table__4261__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4262__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var method_cache__4263__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4264__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4265__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$553,cljs.core.get_global_hierarchy());return (new cljs.core.MultiFn("player-step",(function (format_version,active_step_number,step_number,step){return format_version;
}),cljs.core.constant$keyword$308,hierarchy__4265__auto__,method_table__4261__auto__,prefer_table__4262__auto__,method_cache__4263__auto__,cached_hierarchy__4264__auto__));
})();
omchaya.components.history_player.player_step.cljs$core$IMultiFn$_add_method$arity$3(null,1,(function (format_version,active_step_number,comm,step_number,step){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$558,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$407,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_step_number,step_number))?"active":null),cljs.core.constant$keyword$440,(function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$559,step_number], null));
}),cljs.core.constant$keyword$332,{"cursor": "pointer"}], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([step], 0))], null);
}));
omchaya.components.history_player.playlist_entry = (function playlist_entry(comm,replay_number,replay){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$560,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$440,(function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$561,replay_number], null));
}),cljs.core.constant$keyword$332,{"cursor": "pointer"}], null),(function (){var or__3403__auto__ = cljs.core.constant$keyword$349.cljs$core$IFn$_invoke$arity$1(replay);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return "No name for recording";
}
})()], null);
});
omchaya.components.history_player.player = (function player(app,owner){if(typeof omchaya.components.history_player.t21059 !== 'undefined')
{} else
{
/**
* @constructor
*/
omchaya.components.history_player.t21059 = (function (owner,app,player,meta21060){
this.owner = owner;
this.app = app;
this.player = player;
this.meta21060 = meta21060;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
omchaya.components.history_player.t21059.cljs$lang$type = true;
omchaya.components.history_player.t21059.cljs$lang$ctorStr = "omchaya.components.history-player/t21059";
omchaya.components.history_player.t21059.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write(writer__3971__auto__,"omchaya.components.history-player/t21059");
});
omchaya.components.history_player.t21059.prototype.om$core$IRender$ = true;
omchaya.components.history_player.t21059.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return sablono.interpreter.interpret((function (){var comm = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$562,cljs.core.constant$keyword$563], null));var drag_comm = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$562,cljs.core.constant$keyword$564], null));var replays = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$565,cljs.core.constant$keyword$566], null));var queued_replay = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$565,cljs.core.constant$keyword$567], null));var map__21062 = queued_replay;var map__21062__$1 = ((cljs.core.seq_QMARK_(map__21062))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21062):map__21062);var active_step = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21062__$1,cljs.core.constant$keyword$568);var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21062__$1,cljs.core.constant$keyword$569);var format_version = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21062__$1,cljs.core.constant$keyword$570);return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$571,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$332,(function (){var temp__4092__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$350,cljs.core.constant$keyword$572], null));if(cljs.core.truth_(temp__4092__auto__))
{var pos = temp__4092__auto__;return {"left": cljs.core.first(pos), "top": cljs.core.last(pos), "position": "fixed"};
} else
{return null;
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$573,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$574,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$332,cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$576,(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$350,cljs.core.constant$keyword$579], null)))?"#050":"#500"),cljs.core.constant$keyword$577,"white",cljs.core.constant$keyword$578,"center"], null)], 0))),cljs.core.constant$keyword$575,(function (p1__20978_SHARP_){cljs.core.reset_BANG_(omchaya.components.history_player.local_dragging_QMARK_,true);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(drag_comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$580,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20978_SHARP_.clientX,p1__20978_SHARP_.clientY], null)], null));
})], null)], 0)),"[History Player]"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$581,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$582,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$583,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$440,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$361.cljs$core$IFn$_invoke$arity$1(self__.app),cljs.core.constant$keyword$364))?(function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$584], null));
}):(function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$585], null));
}))], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$361.cljs$core$IFn$_invoke$arity$1(self__.app),cljs.core.constant$keyword$364))?cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY," Pause"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$503], null)):cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY," Play"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$505], null)))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$582,(cljs.core.truth_(queued_replay)?[cljs.core.str("Recording format v"),cljs.core.str(format_version),cljs.core.str(", recorded on "),cljs.core.str(cljs.core.constant$keyword$345.cljs$core$IFn$_invoke$arity$1(queued_replay))].join(''):[cljs.core.str("No recording loaded")].join(''))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$581,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$582,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$586,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$587,"Replays"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(omchaya.components.history_player.playlist_entry,comm),cljs.core.range.cljs$core$IFn$_invoke$arity$0(),replays)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$588,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$589,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$587,"Steps"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(omchaya.components.history_player.player_step,format_version,active_step,comm),cljs.core.range.cljs$core$IFn$_invoke$arity$0(),history)], null)], null)], null)], null);
})());
});
omchaya.components.history_player.t21059.prototype.om$core$IWillMount$ = true;
omchaya.components.history_player.t21059.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var mouse_move_chan = cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (e){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY], null);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [omchaya.components.history_player.listen(window,"mousemove")], null));var mouse_up_chan = cljs.core.async.map.cljs$core$IFn$_invoke$arity$2(((function (mouse_move_chan){
return (function (e){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY], null);
});})(mouse_move_chan))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [omchaya.components.history_player.listen(window,"mouseup")], null));var comm = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$562,cljs.core.constant$keyword$564], null));var c__5524__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_21109){var state_val_21110 = (state_21109[1]);if((state_val_21110 === 1))
{var state_21109__$1 = state_21109;var statearr_21111_21139 = state_21109__$1;(statearr_21111_21139[2] = null);
(statearr_21111_21139[1] = 2);
return cljs.core.constant$keyword$318;
} else
{if((state_val_21110 === 2))
{var state_21109__$1 = state_21109;if(true)
{var statearr_21112_21140 = state_21109__$1;(statearr_21112_21140[1] = 4);
} else
{var statearr_21113_21141 = state_21109__$1;(statearr_21113_21141[1] = 5);
}
return cljs.core.constant$keyword$318;
} else
{if((state_val_21110 === 3))
{var inst_21107 = (state_21109[2]);var state_21109__$1 = state_21109;return cljs.core.async.impl.ioc_helpers.return_chan(state_21109__$1,inst_21107);
} else
{if((state_val_21110 === 4))
{var inst_21070 = [mouse_move_chan,mouse_up_chan];var inst_21071 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_21070,null));var state_21109__$1 = state_21109;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_21109__$1,7,inst_21071);
} else
{if((state_val_21110 === 5))
{var state_21109__$1 = state_21109;var statearr_21114_21142 = state_21109__$1;(statearr_21114_21142[2] = null);
(statearr_21114_21142[1] = 6);
return cljs.core.constant$keyword$318;
} else
{if((state_val_21110 === 6))
{var inst_21105 = (state_21109[2]);var state_21109__$1 = state_21109;var statearr_21115_21143 = state_21109__$1;(statearr_21115_21143[2] = inst_21105);
(statearr_21115_21143[1] = 3);
return cljs.core.constant$keyword$318;
} else
{if((state_val_21110 === 7))
{var inst_21075 = (state_21109[7]);var inst_21073 = (state_21109[8]);var inst_21073__$1 = (state_21109[2]);var inst_21074 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21073__$1,0,null);var inst_21075__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21073__$1,1,null);var inst_21076 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_21075__$1,mouse_move_chan);var state_21109__$1 = (function (){var statearr_21116 = state_21109;(statearr_21116[7] = inst_21075__$1);
(statearr_21116[8] = inst_21073__$1);
(statearr_21116[9] = inst_21074);
return statearr_21116;
})();if(inst_21076)
{var statearr_21117_21144 = state_21109__$1;(statearr_21117_21144[1] = 8);
} else
{var statearr_21118_21145 = state_21109__$1;(statearr_21118_21145[1] = 9);
}
return cljs.core.constant$keyword$318;
} else
{if((state_val_21110 === 8))
{var inst_21073 = (state_21109[8]);var inst_21079 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21073,0,null);var inst_21080 = [cljs.core.constant$keyword$590,inst_21079];var inst_21081 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_21080,null));var inst_21082 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,inst_21081);var state_21109__$1 = state_21109;var statearr_21119_21146 = state_21109__$1;(statearr_21119_21146[2] = inst_21082);
(statearr_21119_21146[1] = 10);
return cljs.core.constant$keyword$318;
} else
{if((state_val_21110 === 9))
{var inst_21075 = (state_21109[7]);var inst_21084 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_21075,mouse_up_chan);var state_21109__$1 = state_21109;if(inst_21084)
{var statearr_21120_21147 = state_21109__$1;(statearr_21120_21147[1] = 11);
} else
{var statearr_21121_21148 = state_21109__$1;(statearr_21121_21148[1] = 12);
}
return cljs.core.constant$keyword$318;
} else
{if((state_val_21110 === 10))
{var inst_21101 = (state_21109[2]);var state_21109__$1 = (function (){var statearr_21122 = state_21109;(statearr_21122[10] = inst_21101);
return statearr_21122;
})();var statearr_21123_21149 = state_21109__$1;(statearr_21123_21149[2] = null);
(statearr_21123_21149[1] = 2);
return cljs.core.constant$keyword$318;
} else
{if((state_val_21110 === 11))
{var inst_21073 = (state_21109[8]);var inst_21087 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21073,0,null);var inst_21088 = [cljs.core.constant$keyword$591,inst_21087];var inst_21089 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_21088,null));var inst_21090 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,inst_21089);var inst_21091 = cljs.core.reset_BANG_(omchaya.components.history_player.local_dragging_QMARK_,false);var state_21109__$1 = (function (){var statearr_21124 = state_21109;(statearr_21124[11] = inst_21090);
return statearr_21124;
})();var statearr_21125_21150 = state_21109__$1;(statearr_21125_21150[2] = inst_21091);
(statearr_21125_21150[1] = 13);
return cljs.core.constant$keyword$318;
} else
{if((state_val_21110 === 12))
{var inst_21075 = (state_21109[7]);var inst_21093 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_21075,cljs.core.constant$keyword$308);var state_21109__$1 = state_21109;if(inst_21093)
{var statearr_21126_21151 = state_21109__$1;(statearr_21126_21151[1] = 14);
} else
{var statearr_21127_21152 = state_21109__$1;(statearr_21127_21152[1] = 15);
}
return cljs.core.constant$keyword$318;
} else
{if((state_val_21110 === 13))
{var inst_21099 = (state_21109[2]);var state_21109__$1 = state_21109;var statearr_21128_21153 = state_21109__$1;(statearr_21128_21153[2] = inst_21099);
(statearr_21128_21153[1] = 10);
return cljs.core.constant$keyword$318;
} else
{if((state_val_21110 === 14))
{var inst_21074 = (state_21109[9]);var state_21109__$1 = state_21109;var statearr_21129_21154 = state_21109__$1;(statearr_21129_21154[2] = inst_21074);
(statearr_21129_21154[1] = 16);
return cljs.core.constant$keyword$318;
} else
{if((state_val_21110 === 15))
{var state_21109__$1 = state_21109;var statearr_21130_21155 = state_21109__$1;(statearr_21130_21155[2] = null);
(statearr_21130_21155[1] = 16);
return cljs.core.constant$keyword$318;
} else
{if((state_val_21110 === 16))
{var inst_21097 = (state_21109[2]);var state_21109__$1 = state_21109;var statearr_21131_21156 = state_21109__$1;(statearr_21131_21156[2] = inst_21097);
(statearr_21131_21156[1] = 13);
return cljs.core.constant$keyword$318;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_21135 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21135[0] = state_machine__5510__auto__);
(statearr_21135[1] = 1);
return statearr_21135;
});
var state_machine__5510__auto____1 = (function (state_21109){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__(state_21109);if(cljs.core.keyword_identical_QMARK_(result__5512__auto__,cljs.core.constant$keyword$318))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e21136){if((e21136 instanceof Object))
{var ex__5513__auto__ = e21136;var statearr_21137_21157 = state_21109;(statearr_21137_21157[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21109);
return cljs.core.constant$keyword$318;
} else
{if(cljs.core.constant$keyword$307)
{throw e21136;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5511__auto__,cljs.core.constant$keyword$318))
{{
var G__21158 = state_21109;
state_21109 = G__21158;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_21109){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_21109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_21138 = (f__5525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5525__auto__.cljs$core$IFn$_invoke$arity$0() : f__5525__auto__.call(null));(statearr_21138[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto__);
return statearr_21138;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5526__auto__);
}));
return c__5524__auto__;
});
omchaya.components.history_player.t21059.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21061){var self__ = this;
var _21061__$1 = this;return self__.meta21060;
});
omchaya.components.history_player.t21059.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21061,meta21060__$1){var self__ = this;
var _21061__$1 = this;return (new omchaya.components.history_player.t21059(self__.owner,self__.app,self__.player,meta21060__$1));
});
omchaya.components.history_player.__GT_t21059 = (function __GT_t21059(owner__$1,app__$1,player__$1,meta21060){return (new omchaya.components.history_player.t21059(owner__$1,app__$1,player__$1,meta21060));
});
}
return (new omchaya.components.history_player.t21059(owner,app,player,null));
});
