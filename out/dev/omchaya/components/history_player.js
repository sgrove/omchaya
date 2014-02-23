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
omchaya.components.history_player.local_dragging_QMARK_ = cljs.core.atom.call(null,false);
omchaya.components.history_player.listen = (function listen(el,type){var out = cljs.core.async.chan.call(null);goog.events.listen(el,type,(function (p1__10678_SHARP_){if(cljs.core.truth_(cljs.core.deref.call(null,omchaya.components.history_player.local_dragging_QMARK_)))
{p1__10678_SHARP_.preventDefault();
} else
{}
return cljs.core.async.put_BANG_.call(null,out,p1__10678_SHARP_);
}));
return out;
});
omchaya.components.history_player.player_step = (function (){var method_table__4261__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4262__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4263__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4264__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4265__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("player-step",(function (format_version,active_step_number,step_number,step){return format_version;
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__4265__auto__,method_table__4261__auto__,prefer_table__4262__auto__,method_cache__4263__auto__,cached_hierarchy__4264__auto__));
})();
cljs.core._add_method.call(null,omchaya.components.history_player.player_step,1,(function (format_version,active_step_number,comm,step_number,step){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.replay-step","div.replay-step",2291439239),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",1004015509),((cljs.core._EQ_.call(null,active_step_number,step_number))?"active":null),new cljs.core.Keyword(null,"on-click","on-click",1416542092),(function (){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"step-selected","step-selected",3543353326),step_number], null));
}),new cljs.core.Keyword(null,"style","style",1123684643),{"cursor": "pointer"}], null),cljs.core.pr_str.call(null,step)], null);
}));
omchaya.components.history_player.playlist_entry = (function playlist_entry(comm,replay_number,replay){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.playlist-entry","div.playlist-entry",3364629286),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1416542092),(function (){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replay-selected","replay-selected",760550707),replay_number], null));
}),new cljs.core.Keyword(null,"style","style",1123684643),{"cursor": "pointer"}], null),(function (){var or__3403__auto__ = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(replay);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return "No name for recording";
}
})()], null);
});
omchaya.components.history_player.player = (function player(app,owner){if(typeof omchaya.components.history_player.t10760 !== 'undefined')
{} else
{
/**
* @constructor
*/
omchaya.components.history_player.t10760 = (function (owner,app,player,meta10761){
this.owner = owner;
this.app = app;
this.player = player;
this.meta10761 = meta10761;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
omchaya.components.history_player.t10760.cljs$lang$type = true;
omchaya.components.history_player.t10760.cljs$lang$ctorStr = "omchaya.components.history-player/t10760";
omchaya.components.history_player.t10760.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"omchaya.components.history-player/t10760");
});
omchaya.components.history_player.t10760.prototype.om$core$IRender$ = true;
omchaya.components.history_player.t10760.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return sablono.interpreter.interpret.call(null,(function (){var comm = cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-comms","player-comms",3952961645),new cljs.core.Keyword(null,"player-control","player-control",3655689699)], null));var drag_comm = cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-comms","player-comms",3952961645),new cljs.core.Keyword(null,"player-drag","player-drag",1524386834)], null));var replays = cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replays","replays",2108401886),new cljs.core.Keyword(null,"replay-list","replay-list",2022921782)], null));var queued_replay = cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replays","replays",2108401886),new cljs.core.Keyword(null,"queued-replay","queued-replay",2482676979)], null));var map__10763 = queued_replay;var map__10763__$1 = ((cljs.core.seq_QMARK_.call(null,map__10763))?cljs.core.apply.call(null,cljs.core.hash_map,map__10763):map__10763);var active_step = cljs.core.get.call(null,map__10763__$1,new cljs.core.Keyword(null,"active-step","active-step",4211347621));var history = cljs.core.get.call(null,map__10763__$1,new cljs.core.Keyword(null,"history","history",1940838406));var format_version = cljs.core.get.call(null,map__10763__$1,new cljs.core.Keyword(null,"format_version","format_version",3631466498));return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.history-player","div.history-player",3648865449),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),(function (){var temp__4092__auto__ = cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",4323118675),new cljs.core.Keyword(null,"position","position",1761709211)], null));if(cljs.core.truth_(temp__4092__auto__))
{var pos = temp__4092__auto__;return {"left": cljs.core.first.call(null,pos), "top": cljs.core.last.call(null,pos), "position": "fixed"};
} else
{return null;
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.modal-header","div.row.modal-header",3055554672),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-12","div.col-lg-12",4751944571),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",1123684643),cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",1619226998),(cljs.core.truth_(cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",4323118675),new cljs.core.Keyword(null,"dragging?","dragging?",709673026)], null)))?"#050":"#500"),new cljs.core.Keyword(null,"color","color",1108746965),"white",new cljs.core.Keyword(null,"text-align","text-align",1760136663),"center"], null))),new cljs.core.Keyword(null,"onMouseDown","onMouseDown",1569008442),(function (p1__10679_SHARP_){cljs.core.reset_BANG_.call(null,omchaya.components.history_player.local_dragging_QMARK_,true);
return cljs.core.async.put_BANG_.call(null,drag_comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history-player-grabbed","history-player-grabbed",1379847572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10679_SHARP_.clientX,p1__10679_SHARP_.clientY], null)], null));
})], null)),"[History Player]"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",2686478959),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-4","div.col-lg-4",1688675518),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",3931183780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1416542092),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"state","state",1123661827).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.Keyword(null,"playing","playing",520340384)))?(function (){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-stopped","player-stopped",819827283)], null));
}):(function (){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-started","player-started",806961415)], null));
}))], null),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"state","state",1123661827).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.Keyword(null,"playing","playing",520340384)))?cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY," Pause"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-pause","i.fa.fa-pause",3144543140)], null)):cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY," Play"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-play","i.fa.fa-play",4546327786)], null)))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-4","div.col-lg-4",1688675518),(cljs.core.truth_(queued_replay)?[cljs.core.str("Recording format v"),cljs.core.str(format_version),cljs.core.str(", recorded on "),cljs.core.str(new cljs.core.Keyword(null,"created_at","created_at",2383584348).cljs$core$IFn$_invoke$arity$1(queued_replay))].join(''):[cljs.core.str("No recording loaded")].join(''))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",2686478959),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-4","div.col-lg-4",1688675518),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.playlist-entries","div.playlist-entries",907861700),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",1013907518),"Replays"], null),cljs.core.map.call(null,cljs.core.partial.call(null,omchaya.components.history_player.playlist_entry,comm),cljs.core.range.call(null),replays)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-8","div.col-lg-8",1688675522),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.playlist-steps","div.playlist-steps",3377722843),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",1013907518),"Steps"], null),cljs.core.map.call(null,cljs.core.partial.call(null,omchaya.components.history_player.player_step,format_version,active_step,comm),cljs.core.range.call(null),history)], null)], null)], null)], null);
})());
});
omchaya.components.history_player.t10760.prototype.om$core$IWillMount$ = true;
omchaya.components.history_player.t10760.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var mouse_move_chan = cljs.core.async.map.call(null,(function (e){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY], null);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [omchaya.components.history_player.listen.call(null,window,"mousemove")], null));var mouse_up_chan = cljs.core.async.map.call(null,((function (mouse_move_chan){
return (function (e){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY], null);
});})(mouse_move_chan))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [omchaya.components.history_player.listen.call(null,window,"mouseup")], null));var comm = cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-comms","player-comms",3952961645),new cljs.core.Keyword(null,"player-drag","player-drag",1524386834)], null));var c__5524__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_10810){var state_val_10811 = (state_10810[1]);if((state_val_10811 === 1))
{var state_10810__$1 = state_10810;var statearr_10812_10840 = state_10810__$1;(statearr_10812_10840[2] = null);
(statearr_10812_10840[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10811 === 2))
{var state_10810__$1 = state_10810;if(true)
{var statearr_10813_10841 = state_10810__$1;(statearr_10813_10841[1] = 4);
} else
{var statearr_10814_10842 = state_10810__$1;(statearr_10814_10842[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10811 === 3))
{var inst_10808 = (state_10810[2]);var state_10810__$1 = state_10810;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10810__$1,inst_10808);
} else
{if((state_val_10811 === 4))
{var inst_10771 = [mouse_move_chan,mouse_up_chan];var inst_10772 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10771,null));var state_10810__$1 = state_10810;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_10810__$1,7,inst_10772);
} else
{if((state_val_10811 === 5))
{var state_10810__$1 = state_10810;var statearr_10815_10843 = state_10810__$1;(statearr_10815_10843[2] = null);
(statearr_10815_10843[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10811 === 6))
{var inst_10806 = (state_10810[2]);var state_10810__$1 = state_10810;var statearr_10816_10844 = state_10810__$1;(statearr_10816_10844[2] = inst_10806);
(statearr_10816_10844[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10811 === 7))
{var inst_10774 = (state_10810[7]);var inst_10776 = (state_10810[8]);var inst_10774__$1 = (state_10810[2]);var inst_10775 = cljs.core.nth.call(null,inst_10774__$1,0,null);var inst_10776__$1 = cljs.core.nth.call(null,inst_10774__$1,1,null);var inst_10777 = cljs.core._EQ_.call(null,inst_10776__$1,mouse_move_chan);var state_10810__$1 = (function (){var statearr_10817 = state_10810;(statearr_10817[7] = inst_10774__$1);
(statearr_10817[9] = inst_10775);
(statearr_10817[8] = inst_10776__$1);
return statearr_10817;
})();if(inst_10777)
{var statearr_10818_10845 = state_10810__$1;(statearr_10818_10845[1] = 8);
} else
{var statearr_10819_10846 = state_10810__$1;(statearr_10819_10846[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10811 === 8))
{var inst_10774 = (state_10810[7]);var inst_10780 = cljs.core.nth.call(null,inst_10774,0,null);var inst_10781 = [new cljs.core.Keyword(null,"mouse-moved","mouse-moved",753447677),inst_10780];var inst_10782 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10781,null));var inst_10783 = cljs.core.async.put_BANG_.call(null,comm,inst_10782);var state_10810__$1 = state_10810;var statearr_10820_10847 = state_10810__$1;(statearr_10820_10847[2] = inst_10783);
(statearr_10820_10847[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10811 === 9))
{var inst_10776 = (state_10810[8]);var inst_10785 = cljs.core._EQ_.call(null,inst_10776,mouse_up_chan);var state_10810__$1 = state_10810;if(inst_10785)
{var statearr_10821_10848 = state_10810__$1;(statearr_10821_10848[1] = 11);
} else
{var statearr_10822_10849 = state_10810__$1;(statearr_10822_10849[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10811 === 10))
{var inst_10802 = (state_10810[2]);var state_10810__$1 = (function (){var statearr_10823 = state_10810;(statearr_10823[10] = inst_10802);
return statearr_10823;
})();var statearr_10824_10850 = state_10810__$1;(statearr_10824_10850[2] = null);
(statearr_10824_10850[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10811 === 11))
{var inst_10774 = (state_10810[7]);var inst_10788 = cljs.core.nth.call(null,inst_10774,0,null);var inst_10789 = [new cljs.core.Keyword(null,"history-player-released","history-player-released",3129319138),inst_10788];var inst_10790 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10789,null));var inst_10791 = cljs.core.async.put_BANG_.call(null,comm,inst_10790);var inst_10792 = cljs.core.reset_BANG_.call(null,omchaya.components.history_player.local_dragging_QMARK_,false);var state_10810__$1 = (function (){var statearr_10825 = state_10810;(statearr_10825[11] = inst_10791);
return statearr_10825;
})();var statearr_10826_10851 = state_10810__$1;(statearr_10826_10851[2] = inst_10792);
(statearr_10826_10851[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10811 === 12))
{var inst_10776 = (state_10810[8]);var inst_10794 = cljs.core._EQ_.call(null,inst_10776,new cljs.core.Keyword(null,"default","default",2558708147));var state_10810__$1 = state_10810;if(inst_10794)
{var statearr_10827_10852 = state_10810__$1;(statearr_10827_10852[1] = 14);
} else
{var statearr_10828_10853 = state_10810__$1;(statearr_10828_10853[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10811 === 13))
{var inst_10800 = (state_10810[2]);var state_10810__$1 = state_10810;var statearr_10829_10854 = state_10810__$1;(statearr_10829_10854[2] = inst_10800);
(statearr_10829_10854[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10811 === 14))
{var inst_10775 = (state_10810[9]);var state_10810__$1 = state_10810;var statearr_10830_10855 = state_10810__$1;(statearr_10830_10855[2] = inst_10775);
(statearr_10830_10855[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10811 === 15))
{var state_10810__$1 = state_10810;var statearr_10831_10856 = state_10810__$1;(statearr_10831_10856[2] = null);
(statearr_10831_10856[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10811 === 16))
{var inst_10798 = (state_10810[2]);var state_10810__$1 = state_10810;var statearr_10832_10857 = state_10810__$1;(statearr_10832_10857[2] = inst_10798);
(statearr_10832_10857[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
var state_machine__5510__auto____0 = (function (){var statearr_10836 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10836[0] = state_machine__5510__auto__);
(statearr_10836[1] = 1);
return statearr_10836;
});
var state_machine__5510__auto____1 = (function (state_10810){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_10810);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e10837){if((e10837 instanceof Object))
{var ex__5513__auto__ = e10837;var statearr_10838_10858 = state_10810;(statearr_10838_10858[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10810);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10837;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10859 = state_10810;
state_10810 = G__10859;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_10810){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_10810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_10839 = f__5525__auto__.call(null);(statearr_10839[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto__);
return statearr_10839;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5526__auto__);
}));
return c__5524__auto__;
});
omchaya.components.history_player.t10760.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10762){var self__ = this;
var _10762__$1 = this;return self__.meta10761;
});
omchaya.components.history_player.t10760.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10762,meta10761__$1){var self__ = this;
var _10762__$1 = this;return (new omchaya.components.history_player.t10760(self__.owner,self__.app,self__.player,meta10761__$1));
});
omchaya.components.history_player.__GT_t10760 = (function __GT_t10760(owner__$1,app__$1,player__$1,meta10761){return (new omchaya.components.history_player.t10760(owner__$1,app__$1,player__$1,meta10761));
});
}
return (new omchaya.components.history_player.t10760(owner,app,player,null));
});

//# sourceMappingURL=history_player.js.map