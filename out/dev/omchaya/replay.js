// Compiled by ClojureScript 0.0-2156
goog.provide('omchaya.replay');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('omchaya.utils');
goog.require('cljs.core.async');
goog.require('omchaya.components.history_player');
goog.require('cljs.reader');
goog.require('om.core');
goog.require('om.core');
goog.require('omchaya.utils');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('omchaya.components.history_player');
omchaya.replay.replay_history_step_BANG_ = (function (){var method_table__4261__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4262__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4263__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4264__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4265__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("replay-history-step!",(function (channels_map,format_version,step,player_control_ch){return format_version;
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__4265__auto__,method_table__4261__auto__,prefer_table__4262__auto__,method_cache__4263__auto__,cached_hierarchy__4264__auto__));
})();
omchaya.replay.player_control_ch = cljs.core.async.chan.call(null);
omchaya.replay.player_drag_ch = cljs.core.async.chan.call(null);
omchaya.replay.api_ch = cljs.core.async.chan.call(null);
omchaya.replay.initial_player_state = (function initial_player_state(app_comms,player_comms){return cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"replays","replays",2108401886),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"replay-list","replay-list",2022921782),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"queued-replay","queued-replay",2482676979),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active-step","active-step",4211347621),0,new cljs.core.Keyword(null,"format_version","format_version",3631466498),1], null)], null),new cljs.core.Keyword(null,"player","player",4323118675),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",1761709211),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [16,16], null),new cljs.core.Keyword(null,"offset","offset",4289091589),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null)], null),new cljs.core.Keyword(null,"player-comms","player-comms",3952961645),player_comms,new cljs.core.Keyword(null,"app-comms","app-comms",1410062253),app_comms,new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.Keyword(null,"stopped","stopped",3424552255)], null));
});
cljs.core._add_method.call(null,omchaya.replay.replay_history_step_BANG_,1,(function (channels_map,format_version,step,player_control_ch){var c__5524__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_11787){var state_val_11788 = (state_11787[1]);if((state_val_11788 === 5))
{var inst_11785 = (state_11787[2]);var state_11787__$1 = state_11787;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11787__$1,inst_11785);
} else
{if((state_val_11788 === 4))
{var state_11787__$1 = state_11787;var statearr_11789_11803 = state_11787__$1;(statearr_11789_11803[2] = null);
(statearr_11789_11803[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11788 === 3))
{var inst_11777 = (state_11787[7]);var inst_11773 = (state_11787[8]);var inst_11772 = (state_11787[9]);var inst_11779 = cljs.core.pr_str.call(null,inst_11772);var inst_11780 = cljs.core.pr_str.call(null,inst_11773);var inst_11781 = console.log(inst_11779," : ",inst_11780);var inst_11782 = cljs.core.async.put_BANG_.call(null,inst_11777,inst_11773);var state_11787__$1 = (function (){var statearr_11790 = state_11787;(statearr_11790[10] = inst_11781);
return statearr_11790;
})();var statearr_11791_11804 = state_11787__$1;(statearr_11791_11804[2] = inst_11782);
(statearr_11791_11804[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11788 === 2))
{var inst_11777 = (state_11787[7]);var inst_11772 = (state_11787[9]);var inst_11771 = (state_11787[11]);var inst_11776 = (state_11787[2]);var inst_11777__$1 = cljs.core.get.call(null,inst_11771,inst_11772);var state_11787__$1 = (function (){var statearr_11792 = state_11787;(statearr_11792[12] = inst_11776);
(statearr_11792[7] = inst_11777__$1);
return statearr_11792;
})();if(cljs.core.truth_(inst_11777__$1))
{var statearr_11793_11805 = state_11787__$1;(statearr_11793_11805[1] = 3);
} else
{var statearr_11794_11806 = state_11787__$1;(statearr_11794_11806[1] = 4);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11788 === 1))
{var inst_11771 = cljs.core.dissoc.call(null,channels_map,new cljs.core.Keyword(null,"error","error",1110689146));var inst_11772 = cljs.core.first.call(null,step);var inst_11773 = cljs.core.last.call(null,step);var inst_11774 = cljs.core.async.timeout.call(null,1000);var state_11787__$1 = (function (){var statearr_11795 = state_11787;(statearr_11795[8] = inst_11773);
(statearr_11795[9] = inst_11772);
(statearr_11795[11] = inst_11771);
return statearr_11795;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11787__$1,2,inst_11774);
} else
{return null;
}
}
}
}
}
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_11799 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11799[0] = state_machine__5510__auto__);
(statearr_11799[1] = 1);
return statearr_11799;
});
var state_machine__5510__auto____1 = (function (state_11787){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_11787);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e11800){if((e11800 instanceof Object))
{var ex__5513__auto__ = e11800;var statearr_11801_11807 = state_11787;(statearr_11801_11807[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11787);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11800;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11808 = state_11787;
state_11787 = G__11808;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_11787){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_11787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_11802 = f__5525__auto__.call(null);(statearr_11802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto__);
return statearr_11802;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5526__auto__);
}));
return c__5524__auto__;
}));
omchaya.replay.player_control_event = (function (){var method_table__4261__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4262__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4263__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4264__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4265__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("player-control-event",(function (message,args,state){return message;
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__4265__auto__,method_table__4261__auto__,prefer_table__4262__auto__,method_cache__4263__auto__,cached_hierarchy__4264__auto__));
})();
cljs.core._add_method.call(null,omchaya.replay.player_control_event,new cljs.core.Keyword(null,"default","default",2558708147),(function (message,data,player_state){return console.log("No message handler for ",cljs.core.pr_str.call(null,message));
}));
cljs.core._add_method.call(null,omchaya.replay.player_control_event,new cljs.core.Keyword(null,"player-started","player-started",806961415),(function (message,data,player_state){return cljs.core.assoc.call(null,player_state,new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.Keyword(null,"playing","playing",520340384));
}));
cljs.core._add_method.call(null,omchaya.replay.player_control_event,new cljs.core.Keyword(null,"player-stopped","player-stopped",819827283),(function (message,data,player_state){return cljs.core.assoc.call(null,player_state,new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.Keyword(null,"stopped","stopped",3424552255));
}));
cljs.core._add_method.call(null,omchaya.replay.player_control_event,new cljs.core.Keyword(null,"step-selected","step-selected",3543353326),(function (message,data,player_state){return cljs.core.assoc_in.call(null,player_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replays","replays",2108401886),new cljs.core.Keyword(null,"queued-replay","queued-replay",2482676979),new cljs.core.Keyword(null,"active-step","active-step",4211347621)], null),data);
}));
cljs.core._add_method.call(null,omchaya.replay.player_control_event,new cljs.core.Keyword(null,"replay-selected","replay-selected",760550707),(function (message,data,player_state){return cljs.core.assoc_in.call(null,player_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replays","replays",2108401886),new cljs.core.Keyword(null,"queued-replay","queued-replay",2482676979)], null),cljs.core.nth.call(null,cljs.core.get_in.call(null,player_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replays","replays",2108401886),new cljs.core.Keyword(null,"replay-list","replay-list",2022921782)], null)),data));
}));
omchaya.replay.player_drag_event = (function (){var method_table__4261__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4262__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4263__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4264__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4265__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("player-drag-event",(function (message,args,state){return message;
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__4265__auto__,method_table__4261__auto__,prefer_table__4262__auto__,method_cache__4263__auto__,cached_hierarchy__4264__auto__));
})();
cljs.core._add_method.call(null,omchaya.replay.player_drag_event,new cljs.core.Keyword(null,"history-player-grabbed","history-player-grabbed",1379847572),(function (message,initial_mouse_pos,player_state){var vec__11809 = initial_mouse_pos;var mx = cljs.core.nth.call(null,vec__11809,0,null);var my = cljs.core.nth.call(null,vec__11809,1,null);var vec__11810 = cljs.core.get_in.call(null,player_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",4323118675),new cljs.core.Keyword(null,"position","position",1761709211)], null));var px = cljs.core.nth.call(null,vec__11810,0,null);var py = cljs.core.nth.call(null,vec__11810,1,null);var offset = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(mx - px),(my - py)], null);return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,player_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",4323118675),new cljs.core.Keyword(null,"dragging?","dragging?",709673026)], null),true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",4323118675),new cljs.core.Keyword(null,"offset","offset",4289091589)], null),offset);
}));
cljs.core._add_method.call(null,omchaya.replay.player_drag_event,new cljs.core.Keyword(null,"history-player-released","history-player-released",3129319138),(function (message,data,player_state){return cljs.core.assoc_in.call(null,player_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",4323118675),new cljs.core.Keyword(null,"dragging?","dragging?",709673026)], null),false);
}));
cljs.core._add_method.call(null,omchaya.replay.player_drag_event,new cljs.core.Keyword(null,"mouse-moved","mouse-moved",753447677),(function (message,mouse_position,player_state){if(cljs.core.truth_(cljs.core.get_in.call(null,player_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",4323118675),new cljs.core.Keyword(null,"dragging?","dragging?",709673026)], null))))
{var vec__11811 = mouse_position;var mx = cljs.core.nth.call(null,vec__11811,0,null);var my = cljs.core.nth.call(null,vec__11811,1,null);var vec__11812 = cljs.core.get_in.call(null,player_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",4323118675),new cljs.core.Keyword(null,"offset","offset",4289091589)], null));var off_x = cljs.core.nth.call(null,vec__11812,0,null);var off_y = cljs.core.nth.call(null,vec__11812,1,null);var vec__11813 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(mx - off_x),(my - off_y)], null);var tnx = cljs.core.nth.call(null,vec__11813,0,null);var tny = cljs.core.nth.call(null,vec__11813,1,null);var min_x = -150;var max_x = (document.body.clientWidth - 50);var min_y = 0;var max_y = (document.body.clientHeight - 50);var new_position = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((min_x > tnx))?min_x:(((tnx > max_x))?max_x:((new cljs.core.Keyword(null,"else","else",1017020587))?tnx:null))),(((min_y > tny))?min_y:(((tny > max_y))?max_y:((new cljs.core.Keyword(null,"else","else",1017020587))?tny:null)))], null);return cljs.core.assoc_in.call(null,player_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",4323118675),new cljs.core.Keyword(null,"position","position",1761709211)], null),new_position);
} else
{return player_state;
}
}));
omchaya.replay.player_api_event = (function (){var method_table__4261__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4262__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4263__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4264__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4265__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("player-api-event",(function (message,args,state){return message;
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__4265__auto__,method_table__4261__auto__,prefer_table__4262__auto__,method_cache__4263__auto__,cached_hierarchy__4264__auto__));
})();
cljs.core._add_method.call(null,omchaya.replay.player_api_event,new cljs.core.Keyword(null,"retrieve-replays-succeeded","retrieve-replays-succeeded",2669240161),(function (message,p__11815,player_state){var vec__11816 = p__11815;var _ = cljs.core.nth.call(null,vec__11816,0,null);var response = cljs.core.nth.call(null,vec__11816,1,null);return cljs.core.assoc_in.call(null,player_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replays","replays",2108401886),new cljs.core.Keyword(null,"replay-list","replay-list",2022921782)], null),cljs.core.map.call(null,(function (p1__11814_SHARP_){return cljs.core.assoc.call(null,p1__11814_SHARP_,new cljs.core.Keyword(null,"history","history",1940838406),cljs.reader.read_string.call(null,new cljs.core.Keyword(null,"history","history",1940838406).cljs$core$IFn$_invoke$arity$1(p1__11814_SHARP_)));
}),new cljs.core.Keyword(null,"replays","replays",2108401886).cljs$core$IFn$_invoke$arity$1(response)));
}));
omchaya.replay.start_player_loop_BANG_ = (function start_player_loop_BANG_(player_state,player_drag_ch,player_control_ch,step_delay){var app_comms = new cljs.core.Keyword(null,"app-comms","app-comms",1410062253).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,player_state));var player_comms = new cljs.core.Keyword(null,"player-comms","player-comms",3952961645).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,player_state));var c__5524__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_12051){var state_val_12052 = (state_12051[1]);if((state_val_12052 === 1))
{var state_12051__$1 = state_12051;var statearr_12053_12095 = state_12051__$1;(statearr_12053_12095[2] = null);
(statearr_12053_12095[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12052 === 2))
{var inst_12049 = (state_12051[2]);var state_12051__$1 = state_12051;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12051__$1,inst_12049);
} else
{if((state_val_12052 === 3))
{var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12051,null,null,null,2);var inst_11958 = cljs.core.print.call(null,"Stubbed functions for replay, replaying a v1 history");var state_12051__$1 = (function (){var statearr_12054 = state_12051;(statearr_12054[7] = inst_11958);
return statearr_12054;
})();var statearr_12055_12096 = state_12051__$1;(statearr_12055_12096[2] = null);
(statearr_12055_12096[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12052 === 4))
{var inst_11967 = (state_12051[8]);var inst_11967__$1 = cljs.core.async.timeout.call(null,step_delay);var inst_11968 = [player_control_ch,player_drag_ch,omchaya.replay.api_ch,inst_11967__$1];var inst_11969 = (new cljs.core.PersistentVector(null,4,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11968,null));var state_12051__$1 = (function (){var statearr_12056 = state_12051;(statearr_12056[8] = inst_11967__$1);
return statearr_12056;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12051__$1,6,inst_11969);
} else
{if((state_val_12052 === 5))
{var inst_12047 = (state_12051[2]);var state_12051__$1 = state_12051;var statearr_12057_12097 = state_12051__$1;(statearr_12057_12097[2] = inst_12047);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12051__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12052 === 6))
{var inst_11973 = (state_12051[9]);var inst_11971 = (state_12051[10]);var inst_11971__$1 = (state_12051[2]);var inst_11972 = cljs.core.nth.call(null,inst_11971__$1,0,null);var inst_11973__$1 = cljs.core.nth.call(null,inst_11971__$1,1,null);var inst_11974 = cljs.core._EQ_.call(null,inst_11973__$1,player_control_ch);var state_12051__$1 = (function (){var statearr_12058 = state_12051;(statearr_12058[9] = inst_11973__$1);
(statearr_12058[11] = inst_11972);
(statearr_12058[10] = inst_11971__$1);
return statearr_12058;
})();if(inst_11974)
{var statearr_12059_12098 = state_12051__$1;(statearr_12059_12098[1] = 7);
} else
{var statearr_12060_12099 = state_12051__$1;(statearr_12060_12099[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12052 === 7))
{var inst_11973 = (state_12051[9]);var inst_11972 = (state_12051[11]);var inst_11971 = (state_12051[10]);var inst_11967 = (state_12051[8]);var inst_11977 = cljs.core.nth.call(null,inst_11971,0,null);var inst_11978 = cljs.core.pr_str.call(null,inst_11977);var inst_11979 = omchaya.utils.log.call(null,"Player control: ",inst_11978);var inst_11981 = cljs.core.nth.call(null,inst_11977,0,null);var inst_11982 = cljs.core.nth.call(null,inst_11977,1,null);var inst_11983 = (function (){var v = inst_11977;var val__5533__auto__ = inst_11972;var vec__11966 = inst_11971;var ret11965 = inst_11971;var data = inst_11982;var vec__11980 = inst_11977;var vec__11976 = inst_11971;var G__11960 = player_control_ch;var G__11961 = player_drag_ch;var G__11962 = omchaya.replay.api_ch;var G__11963 = inst_11967;var message = inst_11981;var ch11964 = inst_11973;return ((function (v,val__5533__auto__,vec__11966,ret11965,data,vec__11980,vec__11976,G__11960,G__11961,G__11962,G__11963,message,ch11964,inst_11973,inst_11972,inst_11971,inst_11967,inst_11977,inst_11978,inst_11979,inst_11981,inst_11982,state_val_12052){
return (function (state){return omchaya.replay.player_control_event.call(null,message,data,state);
});
;})(v,val__5533__auto__,vec__11966,ret11965,data,vec__11980,vec__11976,G__11960,G__11961,G__11962,G__11963,message,ch11964,inst_11973,inst_11972,inst_11971,inst_11967,inst_11977,inst_11978,inst_11979,inst_11981,inst_11982,state_val_12052))
})();var inst_11984 = cljs.core.swap_BANG_.call(null,player_state,inst_11983);var state_12051__$1 = (function (){var statearr_12061 = state_12051;(statearr_12061[12] = inst_11979);
(statearr_12061[13] = inst_11984);
return statearr_12061;
})();var statearr_12062_12100 = state_12051__$1;(statearr_12062_12100[2] = null);
(statearr_12062_12100[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12052 === 8))
{var inst_11973 = (state_12051[9]);var inst_11987 = cljs.core._EQ_.call(null,inst_11973,player_drag_ch);var state_12051__$1 = state_12051;if(inst_11987)
{var statearr_12063_12101 = state_12051__$1;(statearr_12063_12101[1] = 10);
} else
{var statearr_12064_12102 = state_12051__$1;(statearr_12064_12102[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12052 === 9))
{var inst_12045 = (state_12051[2]);var state_12051__$1 = state_12051;var statearr_12065_12103 = state_12051__$1;(statearr_12065_12103[2] = inst_12045);
(statearr_12065_12103[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12052 === 10))
{var inst_11973 = (state_12051[9]);var inst_11972 = (state_12051[11]);var inst_11971 = (state_12051[10]);var inst_11967 = (state_12051[8]);var inst_11990 = cljs.core.nth.call(null,inst_11971,0,null);var inst_11992 = cljs.core.nth.call(null,inst_11990,0,null);var inst_11993 = cljs.core.nth.call(null,inst_11990,1,null);var inst_11994 = (function (){var v = inst_11990;var val__5533__auto__ = inst_11972;var vec__11991 = inst_11990;var vec__11966 = inst_11971;var ret11965 = inst_11971;var data = inst_11993;var G__11960 = player_control_ch;var G__11961 = player_drag_ch;var G__11962 = omchaya.replay.api_ch;var G__11963 = inst_11967;var vec__11989 = inst_11971;var message = inst_11992;var ch11964 = inst_11973;return ((function (v,val__5533__auto__,vec__11991,vec__11966,ret11965,data,G__11960,G__11961,G__11962,G__11963,vec__11989,message,ch11964,inst_11973,inst_11972,inst_11971,inst_11967,inst_11990,inst_11992,inst_11993,state_val_12052){
return (function (state){return omchaya.replay.player_drag_event.call(null,message,data,state);
});
;})(v,val__5533__auto__,vec__11991,vec__11966,ret11965,data,G__11960,G__11961,G__11962,G__11963,vec__11989,message,ch11964,inst_11973,inst_11972,inst_11971,inst_11967,inst_11990,inst_11992,inst_11993,state_val_12052))
})();var inst_11995 = cljs.core.swap_BANG_.call(null,player_state,inst_11994);var state_12051__$1 = (function (){var statearr_12066 = state_12051;(statearr_12066[14] = inst_11995);
return statearr_12066;
})();var statearr_12067_12104 = state_12051__$1;(statearr_12067_12104[2] = null);
(statearr_12067_12104[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12052 === 11))
{var inst_11973 = (state_12051[9]);var inst_11998 = cljs.core._EQ_.call(null,inst_11973,omchaya.replay.api_ch);var state_12051__$1 = state_12051;if(inst_11998)
{var statearr_12068_12105 = state_12051__$1;(statearr_12068_12105[1] = 13);
} else
{var statearr_12069_12106 = state_12051__$1;(statearr_12069_12106[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12052 === 12))
{var inst_12043 = (state_12051[2]);var state_12051__$1 = state_12051;var statearr_12070_12107 = state_12051__$1;(statearr_12070_12107[2] = inst_12043);
(statearr_12070_12107[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12052 === 13))
{var inst_11973 = (state_12051[9]);var inst_11972 = (state_12051[11]);var inst_11971 = (state_12051[10]);var inst_11967 = (state_12051[8]);var inst_12001 = cljs.core.nth.call(null,inst_11971,0,null);var inst_12003 = cljs.core.nth.call(null,inst_12001,0,null);var inst_12004 = cljs.core.nth.call(null,inst_12001,1,null);var inst_12005 = (function (){var v = inst_12001;var val__5533__auto__ = inst_11972;var vec__12002 = inst_12001;var vec__11966 = inst_11971;var ret11965 = inst_11971;var data = inst_12004;var vec__12000 = inst_11971;var G__11960 = player_control_ch;var G__11961 = player_drag_ch;var G__11962 = omchaya.replay.api_ch;var G__11963 = inst_11967;var message = inst_12003;var ch11964 = inst_11973;return ((function (v,val__5533__auto__,vec__12002,vec__11966,ret11965,data,vec__12000,G__11960,G__11961,G__11962,G__11963,message,ch11964,inst_11973,inst_11972,inst_11971,inst_11967,inst_12001,inst_12003,inst_12004,state_val_12052){
return (function (state){return omchaya.replay.player_api_event.call(null,message,data,state);
});
;})(v,val__5533__auto__,vec__12002,vec__11966,ret11965,data,vec__12000,G__11960,G__11961,G__11962,G__11963,message,ch11964,inst_11973,inst_11972,inst_11971,inst_11967,inst_12001,inst_12003,inst_12004,state_val_12052))
})();var inst_12006 = cljs.core.swap_BANG_.call(null,player_state,inst_12005);var state_12051__$1 = (function (){var statearr_12071 = state_12051;(statearr_12071[15] = inst_12006);
return statearr_12071;
})();var statearr_12072_12108 = state_12051__$1;(statearr_12072_12108[2] = null);
(statearr_12072_12108[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12052 === 14))
{var inst_11973 = (state_12051[9]);var inst_11967 = (state_12051[8]);var inst_12009 = cljs.core._EQ_.call(null,inst_11973,inst_11967);var state_12051__$1 = state_12051;if(inst_12009)
{var statearr_12073_12109 = state_12051__$1;(statearr_12073_12109[1] = 16);
} else
{var statearr_12074_12110 = state_12051__$1;(statearr_12074_12110[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12052 === 15))
{var inst_12041 = (state_12051[2]);var state_12051__$1 = state_12051;var statearr_12075_12111 = state_12051__$1;(statearr_12075_12111[2] = inst_12041);
(statearr_12075_12111[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12052 === 16))
{var inst_12011 = cljs.core.deref.call(null,player_state);var inst_12012 = new cljs.core.Keyword(null,"state","state",1123661827).cljs$core$IFn$_invoke$arity$1(inst_12011);var inst_12013 = cljs.core._EQ_.call(null,inst_12012,new cljs.core.Keyword(null,"playing","playing",520340384));var state_12051__$1 = state_12051;if(inst_12013)
{var statearr_12076_12112 = state_12051__$1;(statearr_12076_12112[1] = 19);
} else
{var statearr_12077_12113 = state_12051__$1;(statearr_12077_12113[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12052 === 17))
{var inst_11973 = (state_12051[9]);var inst_12033 = cljs.core._EQ_.call(null,inst_11973,new cljs.core.Keyword(null,"default","default",2558708147));var state_12051__$1 = state_12051;if(inst_12033)
{var statearr_12078_12114 = state_12051__$1;(statearr_12078_12114[1] = 22);
} else
{var statearr_12079_12115 = state_12051__$1;(statearr_12079_12115[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12052 === 18))
{var inst_12039 = (state_12051[2]);var state_12051__$1 = state_12051;var statearr_12080_12116 = state_12051__$1;(statearr_12080_12116[2] = inst_12039);
(statearr_12080_12116[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12052 === 19))
{var inst_11973 = (state_12051[9]);var inst_11972 = (state_12051[11]);var inst_11971 = (state_12051[10]);var inst_11967 = (state_12051[8]);var inst_12015 = cljs.core.deref.call(null,player_state);var inst_12016 = [new cljs.core.Keyword(null,"replays","replays",2108401886),new cljs.core.Keyword(null,"queued-replay","queued-replay",2482676979),new cljs.core.Keyword(null,"history","history",1940838406)];var inst_12017 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_12016,null));var inst_12018 = cljs.core.get_in.call(null,inst_12015,inst_12017);var inst_12019 = cljs.core.deref.call(null,player_state);var inst_12020 = [new cljs.core.Keyword(null,"replays","replays",2108401886),new cljs.core.Keyword(null,"queued-replay","queued-replay",2482676979),new cljs.core.Keyword(null,"active-step","active-step",4211347621)];var inst_12021 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_12020,null));var inst_12022 = cljs.core.get_in.call(null,inst_12019,inst_12021);var inst_12023 = cljs.core.nth.call(null,inst_12018,inst_12022);var inst_12024 = omchaya.replay.replay_history_step_BANG_.call(null,app_comms,1,inst_12023,player_control_ch);var inst_12025 = (function (){var ret11965 = inst_11971;var ch11964 = inst_11973;var val__5533__auto__ = inst_11972;var vec__11966 = inst_11971;var G__11963 = inst_11967;var G__11962 = omchaya.replay.api_ch;var G__11961 = player_drag_ch;var G__11960 = player_control_ch;return ((function (ret11965,ch11964,val__5533__auto__,vec__11966,G__11963,G__11962,G__11961,G__11960,inst_11973,inst_11972,inst_11971,inst_11967,inst_12015,inst_12016,inst_12017,inst_12018,inst_12019,inst_12020,inst_12021,inst_12022,inst_12023,inst_12024,state_val_12052){
return (function (s){if(cljs.core._EQ_.call(null,(cljs.core.count.call(null,cljs.core.get_in.call(null,s,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replays","replays",2108401886),new cljs.core.Keyword(null,"queued-replay","queued-replay",2482676979),new cljs.core.Keyword(null,"history","history",1940838406)], null))) - 1),cljs.core.get_in.call(null,s,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replays","replays",2108401886),new cljs.core.Keyword(null,"queued-replay","queued-replay",2482676979),new cljs.core.Keyword(null,"active-step","active-step",4211347621)], null))))
{return cljs.core.assoc.call(null,cljs.core.assoc_in.call(null,s,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replays","replays",2108401886),new cljs.core.Keyword(null,"queued-replay","queued-replay",2482676979),new cljs.core.Keyword(null,"active-step","active-step",4211347621)], null),0),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.Keyword(null,"stopped","stopped",3424552255));
} else
{return cljs.core.update_in.call(null,s,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"replays","replays",2108401886),new cljs.core.Keyword(null,"queued-replay","queued-replay",2482676979),new cljs.core.Keyword(null,"active-step","active-step",4211347621)], null),cljs.core.inc);
}
});
;})(ret11965,ch11964,val__5533__auto__,vec__11966,G__11963,G__11962,G__11961,G__11960,inst_11973,inst_11972,inst_11971,inst_11967,inst_12015,inst_12016,inst_12017,inst_12018,inst_12019,inst_12020,inst_12021,inst_12022,inst_12023,inst_12024,state_val_12052))
})();var inst_12026 = cljs.core.swap_BANG_.call(null,player_state,inst_12025);var state_12051__$1 = (function (){var statearr_12081 = state_12051;(statearr_12081[16] = inst_12026);
(statearr_12081[17] = inst_12024);
return statearr_12081;
})();var statearr_12082_12117 = state_12051__$1;(statearr_12082_12117[2] = null);
(statearr_12082_12117[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12052 === 20))
{var state_12051__$1 = state_12051;var statearr_12083_12118 = state_12051__$1;(statearr_12083_12118[2] = null);
(statearr_12083_12118[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12052 === 21))
{var inst_12031 = (state_12051[2]);var state_12051__$1 = state_12051;var statearr_12084_12119 = state_12051__$1;(statearr_12084_12119[2] = inst_12031);
(statearr_12084_12119[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12052 === 22))
{var inst_11972 = (state_12051[11]);var state_12051__$1 = state_12051;var statearr_12085_12120 = state_12051__$1;(statearr_12085_12120[2] = inst_11972);
(statearr_12085_12120[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12052 === 23))
{var state_12051__$1 = state_12051;var statearr_12086_12121 = state_12051__$1;(statearr_12086_12121[2] = null);
(statearr_12086_12121[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12052 === 24))
{var inst_12037 = (state_12051[2]);var state_12051__$1 = state_12051;var statearr_12087_12122 = state_12051__$1;(statearr_12087_12122[2] = inst_12037);
(statearr_12087_12122[1] = 18);
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
var state_machine__5510__auto____0 = (function (){var statearr_12091 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12091[0] = state_machine__5510__auto__);
(statearr_12091[1] = 1);
return statearr_12091;
});
var state_machine__5510__auto____1 = (function (state_12051){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_12051);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e12092){if((e12092 instanceof Object))
{var ex__5513__auto__ = e12092;var statearr_12093_12123 = state_12051;(statearr_12093_12123[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12051);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12092;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12124 = state_12051;
state_12051 = G__12124;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_12051){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_12051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_12094 = f__5525__auto__.call(null);(statearr_12094[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto__);
return statearr_12094;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5526__auto__);
}));
return c__5524__auto__;
});
omchaya.replay.install_player_BANG_ = (function install_player_BANG_(root_el,api_key,initial_state){omchaya.replay.start_player_loop_BANG_.call(null,initial_state,omchaya.replay.player_drag_ch,omchaya.replay.player_control_ch,500);
return om.core.root.call(null,omchaya.components.history_player.player,initial_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),root_el], null));
});

//# sourceMappingURL=replay.js.map