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
omchaya.replay.replay_history_step_BANG_ = (function (){var method_table__4261__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4262__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var method_cache__4263__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4264__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4265__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$553,cljs.core.get_global_hierarchy());return (new cljs.core.MultiFn("replay-history-step!",(function (channels_map,format_version,step,player_control_ch){return format_version;
}),cljs.core.constant$keyword$308,hierarchy__4265__auto__,method_table__4261__auto__,prefer_table__4262__auto__,method_cache__4263__auto__,cached_hierarchy__4264__auto__));
})();
omchaya.replay.player_control_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
omchaya.replay.player_drag_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
omchaya.replay.api_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
omchaya.replay.initial_player_state = (function initial_player_state(app_comms,player_comms){return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$565,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$566,cljs.core.PersistentVector.EMPTY,cljs.core.constant$keyword$567,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$568,0,cljs.core.constant$keyword$570,1], null)], null),cljs.core.constant$keyword$350,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$572,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [16,16], null),cljs.core.constant$keyword$598,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null)], null),cljs.core.constant$keyword$562,player_comms,cljs.core.constant$keyword$597,app_comms,cljs.core.constant$keyword$361,cljs.core.constant$keyword$593], null));
});
omchaya.replay.replay_history_step_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,1,(function (channels_map,format_version,step,player_control_ch){var c__5524__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_22086){var state_val_22087 = (state_22086[1]);if((state_val_22087 === 5))
{var inst_22084 = (state_22086[2]);var state_22086__$1 = state_22086;return cljs.core.async.impl.ioc_helpers.return_chan(state_22086__$1,inst_22084);
} else
{if((state_val_22087 === 4))
{var state_22086__$1 = state_22086;var statearr_22088_22102 = state_22086__$1;(statearr_22088_22102[2] = null);
(statearr_22088_22102[1] = 5);
return cljs.core.constant$keyword$318;
} else
{if((state_val_22087 === 3))
{var inst_22076 = (state_22086[7]);var inst_22071 = (state_22086[8]);var inst_22072 = (state_22086[9]);var inst_22078 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_22071], 0));var inst_22079 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_22072], 0));var inst_22080 = console.log(inst_22078," : ",inst_22079);var inst_22081 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(inst_22076,inst_22072);var state_22086__$1 = (function (){var statearr_22089 = state_22086;(statearr_22089[10] = inst_22080);
return statearr_22089;
})();var statearr_22090_22103 = state_22086__$1;(statearr_22090_22103[2] = inst_22081);
(statearr_22090_22103[1] = 5);
return cljs.core.constant$keyword$318;
} else
{if((state_val_22087 === 2))
{var inst_22076 = (state_22086[7]);var inst_22071 = (state_22086[8]);var inst_22070 = (state_22086[11]);var inst_22075 = (state_22086[2]);var inst_22076__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22070,inst_22071);var state_22086__$1 = (function (){var statearr_22091 = state_22086;(statearr_22091[7] = inst_22076__$1);
(statearr_22091[12] = inst_22075);
return statearr_22091;
})();if(cljs.core.truth_(inst_22076__$1))
{var statearr_22092_22104 = state_22086__$1;(statearr_22092_22104[1] = 3);
} else
{var statearr_22093_22105 = state_22086__$1;(statearr_22093_22105[1] = 4);
}
return cljs.core.constant$keyword$318;
} else
{if((state_val_22087 === 1))
{var inst_22070 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(channels_map,cljs.core.constant$keyword$552);var inst_22071 = cljs.core.first(step);var inst_22072 = cljs.core.last(step);var inst_22073 = cljs.core.async.timeout(1000);var state_22086__$1 = (function (){var statearr_22094 = state_22086;(statearr_22094[8] = inst_22071);
(statearr_22094[11] = inst_22070);
(statearr_22094[9] = inst_22072);
return statearr_22094;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22086__$1,2,inst_22073);
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
var state_machine__5510__auto____0 = (function (){var statearr_22098 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22098[0] = state_machine__5510__auto__);
(statearr_22098[1] = 1);
return statearr_22098;
});
var state_machine__5510__auto____1 = (function (state_22086){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__(state_22086);if(cljs.core.keyword_identical_QMARK_(result__5512__auto__,cljs.core.constant$keyword$318))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e22099){if((e22099 instanceof Object))
{var ex__5513__auto__ = e22099;var statearr_22100_22106 = state_22086;(statearr_22100_22106[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22086);
return cljs.core.constant$keyword$318;
} else
{if(cljs.core.constant$keyword$307)
{throw e22099;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5511__auto__,cljs.core.constant$keyword$318))
{{
var G__22107 = state_22086;
state_22086 = G__22107;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_22086){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_22086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_22101 = (f__5525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5525__auto__.cljs$core$IFn$_invoke$arity$0() : f__5525__auto__.call(null));(statearr_22101[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto__);
return statearr_22101;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5526__auto__);
}));
return c__5524__auto__;
}));
omchaya.replay.player_control_event = (function (){var method_table__4261__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4262__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var method_cache__4263__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4264__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4265__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$553,cljs.core.get_global_hierarchy());return (new cljs.core.MultiFn("player-control-event",(function (message,args,state){return message;
}),cljs.core.constant$keyword$308,hierarchy__4265__auto__,method_table__4261__auto__,prefer_table__4262__auto__,method_cache__4263__auto__,cached_hierarchy__4264__auto__));
})();
omchaya.replay.player_control_event.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$308,(function (message,data,player_state){return console.log("No message handler for ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([message], 0)));
}));
omchaya.replay.player_control_event.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$585,(function (message,data,player_state){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(player_state,cljs.core.constant$keyword$361,cljs.core.constant$keyword$364);
}));
omchaya.replay.player_control_event.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$584,(function (message,data,player_state){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(player_state,cljs.core.constant$keyword$361,cljs.core.constant$keyword$593);
}));
omchaya.replay.player_control_event.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$559,(function (message,data,player_state){return cljs.core.assoc_in(player_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$565,cljs.core.constant$keyword$567,cljs.core.constant$keyword$568], null),data);
}));
omchaya.replay.player_control_event.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$561,(function (message,data,player_state){return cljs.core.assoc_in(player_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$565,cljs.core.constant$keyword$567], null),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(player_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$565,cljs.core.constant$keyword$566], null)),data));
}));
omchaya.replay.player_drag_event = (function (){var method_table__4261__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4262__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var method_cache__4263__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4264__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4265__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$553,cljs.core.get_global_hierarchy());return (new cljs.core.MultiFn("player-drag-event",(function (message,args,state){return message;
}),cljs.core.constant$keyword$308,hierarchy__4265__auto__,method_table__4261__auto__,prefer_table__4262__auto__,method_cache__4263__auto__,cached_hierarchy__4264__auto__));
})();
omchaya.replay.player_drag_event.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$580,(function (message,initial_mouse_pos,player_state){var vec__22108 = initial_mouse_pos;var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22108,0,null);var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22108,1,null);var vec__22109 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(player_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$350,cljs.core.constant$keyword$572], null));var px = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22109,0,null);var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22109,1,null);var offset = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(mx - px),(my - py)], null);return cljs.core.assoc_in(cljs.core.assoc_in(player_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$350,cljs.core.constant$keyword$579], null),true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$350,cljs.core.constant$keyword$598], null),offset);
}));
omchaya.replay.player_drag_event.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$591,(function (message,data,player_state){return cljs.core.assoc_in(player_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$350,cljs.core.constant$keyword$579], null),false);
}));
omchaya.replay.player_drag_event.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$590,(function (message,mouse_position,player_state){if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(player_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$350,cljs.core.constant$keyword$579], null))))
{var vec__22110 = mouse_position;var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22110,0,null);var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22110,1,null);var vec__22111 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(player_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$350,cljs.core.constant$keyword$598], null));var off_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22111,0,null);var off_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22111,1,null);var vec__22112 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(mx - off_x),(my - off_y)], null);var tnx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22112,0,null);var tny = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22112,1,null);var min_x = -150;var max_x = (document.body.clientWidth - 50);var min_y = 0;var max_y = (document.body.clientHeight - 50);var new_position = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((min_x > tnx))?min_x:(((tnx > max_x))?max_x:((cljs.core.constant$keyword$307)?tnx:null))),(((min_y > tny))?min_y:(((tny > max_y))?max_y:((cljs.core.constant$keyword$307)?tny:null)))], null);return cljs.core.assoc_in(player_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$350,cljs.core.constant$keyword$572], null),new_position);
} else
{return player_state;
}
}));
omchaya.replay.player_api_event = (function (){var method_table__4261__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4262__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var method_cache__4263__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4264__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4265__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$553,cljs.core.get_global_hierarchy());return (new cljs.core.MultiFn("player-api-event",(function (message,args,state){return message;
}),cljs.core.constant$keyword$308,hierarchy__4265__auto__,method_table__4261__auto__,prefer_table__4262__auto__,method_cache__4263__auto__,cached_hierarchy__4264__auto__));
})();
omchaya.replay.player_api_event.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$599,(function (message,p__22114,player_state){var vec__22115 = p__22114;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22115,0,null);var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22115,1,null);return cljs.core.assoc_in(player_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$565,cljs.core.constant$keyword$566], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22113_SHARP_){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__22113_SHARP_,cljs.core.constant$keyword$569,cljs.reader.read_string(cljs.core.constant$keyword$569.cljs$core$IFn$_invoke$arity$1(p1__22113_SHARP_)));
}),cljs.core.constant$keyword$565.cljs$core$IFn$_invoke$arity$1(response)));
}));
omchaya.replay.start_player_loop_BANG_ = (function start_player_loop_BANG_(player_state,player_drag_ch,player_control_ch,step_delay){var app_comms = cljs.core.constant$keyword$597.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(player_state));var player_comms = cljs.core.constant$keyword$562.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(player_state));var c__5524__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_22350){var state_val_22351 = (state_22350[1]);if((state_val_22351 === 1))
{var state_22350__$1 = state_22350;var statearr_22352_22394 = state_22350__$1;(statearr_22352_22394[2] = null);
(statearr_22352_22394[1] = 3);
return cljs.core.constant$keyword$318;
} else
{if((state_val_22351 === 2))
{var inst_22348 = (state_22350[2]);var state_22350__$1 = state_22350;return cljs.core.async.impl.ioc_helpers.return_chan(state_22350__$1,inst_22348);
} else
{if((state_val_22351 === 3))
{var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_22350,null,null,null,2);var inst_22257 = cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Stubbed functions for replay, replaying a v1 history"], 0));var state_22350__$1 = (function (){var statearr_22353 = state_22350;(statearr_22353[7] = inst_22257);
return statearr_22353;
})();var statearr_22354_22395 = state_22350__$1;(statearr_22354_22395[2] = null);
(statearr_22354_22395[1] = 4);
return cljs.core.constant$keyword$318;
} else
{if((state_val_22351 === 4))
{var inst_22266 = (state_22350[8]);var inst_22266__$1 = cljs.core.async.timeout(step_delay);var inst_22267 = [player_control_ch,player_drag_ch,omchaya.replay.api_ch,inst_22266__$1];var inst_22268 = (new cljs.core.PersistentVector(null,4,5,cljs.core.PersistentVector.EMPTY_NODE,inst_22267,null));var state_22350__$1 = (function (){var statearr_22355 = state_22350;(statearr_22355[8] = inst_22266__$1);
return statearr_22355;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_22350__$1,6,inst_22268);
} else
{if((state_val_22351 === 5))
{var inst_22346 = (state_22350[2]);var state_22350__$1 = state_22350;var statearr_22356_22396 = state_22350__$1;(statearr_22356_22396[2] = inst_22346);
cljs.core.async.impl.ioc_helpers.process_exception(state_22350__$1);
return cljs.core.constant$keyword$318;
} else
{if((state_val_22351 === 6))
{var inst_22272 = (state_22350[9]);var inst_22270 = (state_22350[10]);var inst_22270__$1 = (state_22350[2]);var inst_22271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22270__$1,0,null);var inst_22272__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22270__$1,1,null);var inst_22273 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_22272__$1,player_control_ch);var state_22350__$1 = (function (){var statearr_22357 = state_22350;(statearr_22357[9] = inst_22272__$1);
(statearr_22357[11] = inst_22271);
(statearr_22357[10] = inst_22270__$1);
return statearr_22357;
})();if(inst_22273)
{var statearr_22358_22397 = state_22350__$1;(statearr_22358_22397[1] = 7);
} else
{var statearr_22359_22398 = state_22350__$1;(statearr_22359_22398[1] = 8);
}
return cljs.core.constant$keyword$318;
} else
{if((state_val_22351 === 7))
{var inst_22272 = (state_22350[9]);var inst_22266 = (state_22350[8]);var inst_22271 = (state_22350[11]);var inst_22270 = (state_22350[10]);var inst_22276 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22270,0,null);var inst_22277 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_22276], 0));var inst_22278 = (omchaya.utils.log.cljs$core$IFn$_invoke$arity$2 ? omchaya.utils.log.cljs$core$IFn$_invoke$arity$2("Player control: ",inst_22277) : omchaya.utils.log.call(null,"Player control: ",inst_22277));var inst_22280 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22276,0,null);var inst_22281 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22276,1,null);var inst_22282 = (function (){var v = inst_22276;var G__22261 = omchaya.replay.api_ch;var val__5533__auto__ = inst_22271;var G__22262 = inst_22266;var G__22260 = player_drag_ch;var data = inst_22281;var ret22264 = inst_22270;var vec__22275 = inst_22270;var vec__22279 = inst_22276;var G__22259 = player_control_ch;var vec__22265 = inst_22270;var ch22263 = inst_22272;var message = inst_22280;return ((function (v,G__22261,val__5533__auto__,G__22262,G__22260,data,ret22264,vec__22275,vec__22279,G__22259,vec__22265,ch22263,message,inst_22272,inst_22266,inst_22271,inst_22270,inst_22276,inst_22277,inst_22278,inst_22280,inst_22281,state_val_22351){
return (function (state){return (omchaya.replay.player_control_event.cljs$core$IFn$_invoke$arity$3 ? omchaya.replay.player_control_event.cljs$core$IFn$_invoke$arity$3(message,data,state) : omchaya.replay.player_control_event.call(null,message,data,state));
});
;})(v,G__22261,val__5533__auto__,G__22262,G__22260,data,ret22264,vec__22275,vec__22279,G__22259,vec__22265,ch22263,message,inst_22272,inst_22266,inst_22271,inst_22270,inst_22276,inst_22277,inst_22278,inst_22280,inst_22281,state_val_22351))
})();var inst_22283 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(player_state,inst_22282);var state_22350__$1 = (function (){var statearr_22360 = state_22350;(statearr_22360[12] = inst_22278);
(statearr_22360[13] = inst_22283);
return statearr_22360;
})();var statearr_22361_22399 = state_22350__$1;(statearr_22361_22399[2] = null);
(statearr_22361_22399[1] = 4);
return cljs.core.constant$keyword$318;
} else
{if((state_val_22351 === 8))
{var inst_22272 = (state_22350[9]);var inst_22286 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_22272,player_drag_ch);var state_22350__$1 = state_22350;if(inst_22286)
{var statearr_22362_22400 = state_22350__$1;(statearr_22362_22400[1] = 10);
} else
{var statearr_22363_22401 = state_22350__$1;(statearr_22363_22401[1] = 11);
}
return cljs.core.constant$keyword$318;
} else
{if((state_val_22351 === 9))
{var inst_22344 = (state_22350[2]);var state_22350__$1 = state_22350;var statearr_22364_22402 = state_22350__$1;(statearr_22364_22402[2] = inst_22344);
(statearr_22364_22402[1] = 5);
return cljs.core.constant$keyword$318;
} else
{if((state_val_22351 === 10))
{var inst_22272 = (state_22350[9]);var inst_22266 = (state_22350[8]);var inst_22271 = (state_22350[11]);var inst_22270 = (state_22350[10]);var inst_22289 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22270,0,null);var inst_22291 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22289,0,null);var inst_22292 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22289,1,null);var inst_22293 = (function (){var v = inst_22289;var G__22261 = omchaya.replay.api_ch;var val__5533__auto__ = inst_22271;var G__22262 = inst_22266;var vec__22288 = inst_22270;var G__22260 = player_drag_ch;var data = inst_22292;var vec__22290 = inst_22289;var ret22264 = inst_22270;var G__22259 = player_control_ch;var vec__22265 = inst_22270;var ch22263 = inst_22272;var message = inst_22291;return ((function (v,G__22261,val__5533__auto__,G__22262,vec__22288,G__22260,data,vec__22290,ret22264,G__22259,vec__22265,ch22263,message,inst_22272,inst_22266,inst_22271,inst_22270,inst_22289,inst_22291,inst_22292,state_val_22351){
return (function (state){return (omchaya.replay.player_drag_event.cljs$core$IFn$_invoke$arity$3 ? omchaya.replay.player_drag_event.cljs$core$IFn$_invoke$arity$3(message,data,state) : omchaya.replay.player_drag_event.call(null,message,data,state));
});
;})(v,G__22261,val__5533__auto__,G__22262,vec__22288,G__22260,data,vec__22290,ret22264,G__22259,vec__22265,ch22263,message,inst_22272,inst_22266,inst_22271,inst_22270,inst_22289,inst_22291,inst_22292,state_val_22351))
})();var inst_22294 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(player_state,inst_22293);var state_22350__$1 = (function (){var statearr_22365 = state_22350;(statearr_22365[14] = inst_22294);
return statearr_22365;
})();var statearr_22366_22403 = state_22350__$1;(statearr_22366_22403[2] = null);
(statearr_22366_22403[1] = 4);
return cljs.core.constant$keyword$318;
} else
{if((state_val_22351 === 11))
{var inst_22272 = (state_22350[9]);var inst_22297 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_22272,omchaya.replay.api_ch);var state_22350__$1 = state_22350;if(inst_22297)
{var statearr_22367_22404 = state_22350__$1;(statearr_22367_22404[1] = 13);
} else
{var statearr_22368_22405 = state_22350__$1;(statearr_22368_22405[1] = 14);
}
return cljs.core.constant$keyword$318;
} else
{if((state_val_22351 === 12))
{var inst_22342 = (state_22350[2]);var state_22350__$1 = state_22350;var statearr_22369_22406 = state_22350__$1;(statearr_22369_22406[2] = inst_22342);
(statearr_22369_22406[1] = 9);
return cljs.core.constant$keyword$318;
} else
{if((state_val_22351 === 13))
{var inst_22272 = (state_22350[9]);var inst_22266 = (state_22350[8]);var inst_22271 = (state_22350[11]);var inst_22270 = (state_22350[10]);var inst_22300 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22270,0,null);var inst_22302 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22300,0,null);var inst_22303 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22300,1,null);var inst_22304 = (function (){var v = inst_22300;var G__22261 = omchaya.replay.api_ch;var val__5533__auto__ = inst_22271;var G__22262 = inst_22266;var G__22260 = player_drag_ch;var vec__22301 = inst_22300;var data = inst_22303;var ret22264 = inst_22270;var G__22259 = player_control_ch;var vec__22265 = inst_22270;var ch22263 = inst_22272;var message = inst_22302;var vec__22299 = inst_22270;return ((function (v,G__22261,val__5533__auto__,G__22262,G__22260,vec__22301,data,ret22264,G__22259,vec__22265,ch22263,message,vec__22299,inst_22272,inst_22266,inst_22271,inst_22270,inst_22300,inst_22302,inst_22303,state_val_22351){
return (function (state){return (omchaya.replay.player_api_event.cljs$core$IFn$_invoke$arity$3 ? omchaya.replay.player_api_event.cljs$core$IFn$_invoke$arity$3(message,data,state) : omchaya.replay.player_api_event.call(null,message,data,state));
});
;})(v,G__22261,val__5533__auto__,G__22262,G__22260,vec__22301,data,ret22264,G__22259,vec__22265,ch22263,message,vec__22299,inst_22272,inst_22266,inst_22271,inst_22270,inst_22300,inst_22302,inst_22303,state_val_22351))
})();var inst_22305 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(player_state,inst_22304);var state_22350__$1 = (function (){var statearr_22370 = state_22350;(statearr_22370[15] = inst_22305);
return statearr_22370;
})();var statearr_22371_22407 = state_22350__$1;(statearr_22371_22407[2] = null);
(statearr_22371_22407[1] = 4);
return cljs.core.constant$keyword$318;
} else
{if((state_val_22351 === 14))
{var inst_22272 = (state_22350[9]);var inst_22266 = (state_22350[8]);var inst_22308 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_22272,inst_22266);var state_22350__$1 = state_22350;if(inst_22308)
{var statearr_22372_22408 = state_22350__$1;(statearr_22372_22408[1] = 16);
} else
{var statearr_22373_22409 = state_22350__$1;(statearr_22373_22409[1] = 17);
}
return cljs.core.constant$keyword$318;
} else
{if((state_val_22351 === 15))
{var inst_22340 = (state_22350[2]);var state_22350__$1 = state_22350;var statearr_22374_22410 = state_22350__$1;(statearr_22374_22410[2] = inst_22340);
(statearr_22374_22410[1] = 12);
return cljs.core.constant$keyword$318;
} else
{if((state_val_22351 === 16))
{var inst_22310 = cljs.core.deref(player_state);var inst_22311 = cljs.core.constant$keyword$361.cljs$core$IFn$_invoke$arity$1(inst_22310);var inst_22312 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_22311,cljs.core.constant$keyword$364);var state_22350__$1 = state_22350;if(inst_22312)
{var statearr_22375_22411 = state_22350__$1;(statearr_22375_22411[1] = 19);
} else
{var statearr_22376_22412 = state_22350__$1;(statearr_22376_22412[1] = 20);
}
return cljs.core.constant$keyword$318;
} else
{if((state_val_22351 === 17))
{var inst_22272 = (state_22350[9]);var inst_22332 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_22272,cljs.core.constant$keyword$308);var state_22350__$1 = state_22350;if(inst_22332)
{var statearr_22377_22413 = state_22350__$1;(statearr_22377_22413[1] = 22);
} else
{var statearr_22378_22414 = state_22350__$1;(statearr_22378_22414[1] = 23);
}
return cljs.core.constant$keyword$318;
} else
{if((state_val_22351 === 18))
{var inst_22338 = (state_22350[2]);var state_22350__$1 = state_22350;var statearr_22379_22415 = state_22350__$1;(statearr_22379_22415[2] = inst_22338);
(statearr_22379_22415[1] = 15);
return cljs.core.constant$keyword$318;
} else
{if((state_val_22351 === 19))
{var inst_22272 = (state_22350[9]);var inst_22266 = (state_22350[8]);var inst_22271 = (state_22350[11]);var inst_22270 = (state_22350[10]);var inst_22314 = cljs.core.deref(player_state);var inst_22315 = [cljs.core.constant$keyword$565,cljs.core.constant$keyword$567,cljs.core.constant$keyword$569];var inst_22316 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_22315,null));var inst_22317 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_22314,inst_22316);var inst_22318 = cljs.core.deref(player_state);var inst_22319 = [cljs.core.constant$keyword$565,cljs.core.constant$keyword$567,cljs.core.constant$keyword$568];var inst_22320 = (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,inst_22319,null));var inst_22321 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_22318,inst_22320);var inst_22322 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(inst_22317,inst_22321);var inst_22323 = (omchaya.replay.replay_history_step_BANG_.cljs$core$IFn$_invoke$arity$4 ? omchaya.replay.replay_history_step_BANG_.cljs$core$IFn$_invoke$arity$4(app_comms,1,inst_22322,player_control_ch) : omchaya.replay.replay_history_step_BANG_.call(null,app_comms,1,inst_22322,player_control_ch));var inst_22324 = (function (){var ret22264 = inst_22270;var ch22263 = inst_22272;var val__5533__auto__ = inst_22271;var vec__22265 = inst_22270;var G__22262 = inst_22266;var G__22261 = omchaya.replay.api_ch;var G__22260 = player_drag_ch;var G__22259 = player_control_ch;return ((function (ret22264,ch22263,val__5533__auto__,vec__22265,G__22262,G__22261,G__22260,G__22259,inst_22272,inst_22266,inst_22271,inst_22270,inst_22314,inst_22315,inst_22316,inst_22317,inst_22318,inst_22319,inst_22320,inst_22321,inst_22322,inst_22323,state_val_22351){
return (function (s){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$565,cljs.core.constant$keyword$567,cljs.core.constant$keyword$569], null))) - 1),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$565,cljs.core.constant$keyword$567,cljs.core.constant$keyword$568], null))))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(s,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$565,cljs.core.constant$keyword$567,cljs.core.constant$keyword$568], null),0),cljs.core.constant$keyword$361,cljs.core.constant$keyword$593);
} else
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$565,cljs.core.constant$keyword$567,cljs.core.constant$keyword$568], null),cljs.core.inc);
}
});
;})(ret22264,ch22263,val__5533__auto__,vec__22265,G__22262,G__22261,G__22260,G__22259,inst_22272,inst_22266,inst_22271,inst_22270,inst_22314,inst_22315,inst_22316,inst_22317,inst_22318,inst_22319,inst_22320,inst_22321,inst_22322,inst_22323,state_val_22351))
})();var inst_22325 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(player_state,inst_22324);var state_22350__$1 = (function (){var statearr_22380 = state_22350;(statearr_22380[16] = inst_22325);
(statearr_22380[17] = inst_22323);
return statearr_22380;
})();var statearr_22381_22416 = state_22350__$1;(statearr_22381_22416[2] = null);
(statearr_22381_22416[1] = 4);
return cljs.core.constant$keyword$318;
} else
{if((state_val_22351 === 20))
{var state_22350__$1 = state_22350;var statearr_22382_22417 = state_22350__$1;(statearr_22382_22417[2] = null);
(statearr_22382_22417[1] = 4);
return cljs.core.constant$keyword$318;
} else
{if((state_val_22351 === 21))
{var inst_22330 = (state_22350[2]);var state_22350__$1 = state_22350;var statearr_22383_22418 = state_22350__$1;(statearr_22383_22418[2] = inst_22330);
(statearr_22383_22418[1] = 18);
return cljs.core.constant$keyword$318;
} else
{if((state_val_22351 === 22))
{var inst_22271 = (state_22350[11]);var state_22350__$1 = state_22350;var statearr_22384_22419 = state_22350__$1;(statearr_22384_22419[2] = inst_22271);
(statearr_22384_22419[1] = 24);
return cljs.core.constant$keyword$318;
} else
{if((state_val_22351 === 23))
{var state_22350__$1 = state_22350;var statearr_22385_22420 = state_22350__$1;(statearr_22385_22420[2] = null);
(statearr_22385_22420[1] = 24);
return cljs.core.constant$keyword$318;
} else
{if((state_val_22351 === 24))
{var inst_22336 = (state_22350[2]);var state_22350__$1 = state_22350;var statearr_22386_22421 = state_22350__$1;(statearr_22386_22421[2] = inst_22336);
(statearr_22386_22421[1] = 18);
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
var state_machine__5510__auto____0 = (function (){var statearr_22390 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22390[0] = state_machine__5510__auto__);
(statearr_22390[1] = 1);
return statearr_22390;
});
var state_machine__5510__auto____1 = (function (state_22350){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__(state_22350);if(cljs.core.keyword_identical_QMARK_(result__5512__auto__,cljs.core.constant$keyword$318))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e22391){if((e22391 instanceof Object))
{var ex__5513__auto__ = e22391;var statearr_22392_22422 = state_22350;(statearr_22392_22422[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22350);
return cljs.core.constant$keyword$318;
} else
{if(cljs.core.constant$keyword$307)
{throw e22391;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5511__auto__,cljs.core.constant$keyword$318))
{{
var G__22423 = state_22350;
state_22350 = G__22423;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_22350){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_22350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_22393 = (f__5525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5525__auto__.cljs$core$IFn$_invoke$arity$0() : f__5525__auto__.call(null));(statearr_22393[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto__);
return statearr_22393;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5526__auto__);
}));
return c__5524__auto__;
});
omchaya.replay.install_player_BANG_ = (function install_player_BANG_(root_el,api_key,initial_state){omchaya.replay.start_player_loop_BANG_(initial_state,omchaya.replay.player_drag_ch,omchaya.replay.player_control_ch,500);
return om.core.root(omchaya.components.history_player.player,initial_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$402,root_el], null));
});
