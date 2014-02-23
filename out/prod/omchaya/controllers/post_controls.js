// Compiled by ClojureScript 0.0-2156
goog.provide('omchaya.controllers.post_controls');
goog.require('cljs.core');
goog.require('omchaya.useful');
goog.require('cljs.core.async');
goog.require('omchaya.routes');
goog.require('omchaya.utils');
goog.require('omchaya.replay');
goog.require('cljs.core.async');
goog.require('omchaya.ui');
goog.require('omchaya.api.mock');
goog.require('omchaya.commands');
goog.require('omchaya.useful');
goog.require('omchaya.useful');
goog.require('clojure.string');
goog.require('omchaya.api.mock');
goog.require('omchaya.commands');
goog.require('omchaya.ui');
goog.require('clojure.string');
goog.require('omchaya.utils');
goog.require('omchaya.replay');
goog.require('omchaya.routes');
goog.require('dommy.core');
goog.require('cljs.core.async');
goog.require('dommy.core');
omchaya.controllers.post_controls.local_only_commands = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/mute","/unmute"], null);
omchaya.controllers.post_controls.sendable_message_QMARK_ = (function sendable_message_QMARK_(message){var vec__21798 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(message,/ |\n/);var command = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21798,0,null);var _ = cljs.core.nthnext(vec__21798,1);if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([command], true),omchaya.controllers.post_controls.local_only_commands)))
{return false;
} else
{return true;
}
});
omchaya.controllers.post_controls.post_control_event_BANG_ = (function (){var method_table__4261__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4262__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var method_cache__4263__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4264__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4265__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$553,cljs.core.get_global_hierarchy());return (new cljs.core.MultiFn("post-control-event!",(function (target,message,args,previous_state,current_state){return message;
}),cljs.core.constant$keyword$308,hierarchy__4265__auto__,method_table__4261__auto__,prefer_table__4262__auto__,method_cache__4263__auto__,cached_hierarchy__4264__auto__));
})();
omchaya.controllers.post_controls.post_control_event_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$308,(function (target,message,args,previous_state,current_state){return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["No post-control for: ",message], 0));
}));
omchaya.controllers.post_controls.post_control_event_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$592,(function (target,message,args,previous_state,current_state){return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["notify current user they were mentioned"], 0));
}));
omchaya.controllers.post_controls.post_control_event_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$501,(function (target,message,p__21800,previous_state,current_state){var vec__21801 = p__21800;var order = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21801,0,null);var channel_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21801,1,null);var controls_ch = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(current_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$370,cljs.core.constant$keyword$432], null));var playlist = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(current_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$368,channel_id,cljs.core.constant$keyword$350,cljs.core.constant$keyword$363], null));var entry = (omchaya.useful.ffilter.cljs$core$IFn$_invoke$arity$2 ? omchaya.useful.ffilter.cljs$core$IFn$_invoke$arity$2(((function (controls_ch,playlist){
return (function (p1__21799_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$356.cljs$core$IFn$_invoke$arity$1(p1__21799_SHARP_),order);
});})(controls_ch,playlist))
,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(current_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$368,channel_id,cljs.core.constant$keyword$350,cljs.core.constant$keyword$363], null))) : omchaya.useful.ffilter.call(null,((function (controls_ch,playlist){
return (function (p1__21799_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$356.cljs$core$IFn$_invoke$arity$1(p1__21799_SHARP_),order);
});})(controls_ch,playlist))
,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(current_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$368,channel_id,cljs.core.constant$keyword$350,cljs.core.constant$keyword$363], null))));return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(controls_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$554,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(entry),channel_id], null)], null));
}));
omchaya.controllers.post_controls.post_control_event_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$554,(function (target,message,p__21802,previous_state,current_state){var vec__21803 = p__21802;var src = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21803,0,null);var channel_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21803,1,null);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(channel_id,cljs.core.constant$keyword$367.cljs$core$IFn$_invoke$arity$1(current_state))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(current_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$368,cljs.core.constant$keyword$367.cljs$core$IFn$_invoke$arity$1(current_state),cljs.core.constant$keyword$350,cljs.core.constant$keyword$361], null)),cljs.core.constant$keyword$364)))
{var player = dommy.template.__GT_node_like(target).querySelector(dommy.core.selector(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(".audio-player.audio-"),cljs.core.str(channel_id)].join('')], null)));return setTimeout((function (){return player.play();
}),35);
} else
{return null;
}
}));
omchaya.controllers.post_controls.post_control_event_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$532,(function (target,message,channel_id,previous_state,current_state){omchaya.utils.set_window_href_BANG_(omchaya.routes.v1_channel_link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$348,channel_id], null)], 0)));
var temp__4092__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(current_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$368,channel_id], null));if(cljs.core.truth_(temp__4092__auto__))
{var new_channel = temp__4092__auto__;return setTimeout((function (){return omchaya.ui.scroll_to_latest_message_BANG_(target,cljs.core.constant$keyword$357.cljs$core$IFn$_invoke$arity$1(new_channel));
}),35);
} else
{return null;
}
}));
omchaya.controllers.post_controls.post_control_event_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$469,(function (target,message,args,previous_state,current_state){var channel = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(current_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$368,cljs.core.constant$keyword$367.cljs$core$IFn$_invoke$arity$1(current_state)], null));var user_message = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(previous_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$366,cljs.core.constant$keyword$374,cljs.core.constant$keyword$378,cljs.core.constant$keyword$312], null));var temp__4092__auto___21804 = dommy.template.__GT_node_like(target).querySelector(dommy.core.selector(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$600], null)));if(cljs.core.truth_(temp__4092__auto___21804))
{var input_21805 = temp__4092__auto___21804;dommy.core.set_value_BANG_(input_21805,"");
} else
{}
setTimeout((function (){return omchaya.ui.scroll_to_latest_message_when_appropriate_BANG_(target,cljs.core.constant$keyword$357.cljs$core$IFn$_invoke$arity$1(channel));
}),35);
(omchaya.commands.handle_maybe_command.cljs$core$IFn$_invoke$arity$3 ? omchaya.commands.handle_maybe_command.cljs$core$IFn$_invoke$arity$3(target,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$347,user_message,cljs.core.constant$keyword$348,cljs.core.constant$keyword$357.cljs$core$IFn$_invoke$arity$1(channel)], null),current_state) : omchaya.commands.handle_maybe_command.call(null,target,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$347,user_message,cljs.core.constant$keyword$348,cljs.core.constant$keyword$357.cljs$core$IFn$_invoke$arity$1(channel)], null),current_state));
if(omchaya.controllers.post_controls.sendable_message_QMARK_(user_message))
{return omchaya.api.mock.send_user_message_BANG_(cljs.core.constant$keyword$601.cljs$core$IFn$_invoke$arity$1(current_state),user_message);
} else
{return null;
}
}));
omchaya.controllers.post_controls.post_control_event_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$506,(function (target,message,channel_id,previous_state,current_state){var player = dommy.template.__GT_node_like(target).querySelector(dommy.core.selector(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(".audio-player.audio-"),cljs.core.str(channel_id)].join('')], null)));return setTimeout((function (){return player.play();
}),35);
}));
omchaya.controllers.post_controls.post_control_event_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$504,(function (target,message,channel_id,previous_state,current_state){var player = dommy.template.__GT_node_like(target).querySelector(dommy.core.selector(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(".audio-player.audio-"),cljs.core.str(channel_id)].join('')], null)));return setTimeout((function (){return player.pause();
}),35);
}));
omchaya.controllers.post_controls.post_control_event_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$556,(function (target,message,args,previous_state,current_state){var players = dommy.utils.__GT_Array(dommy.template.__GT_node_like(target).getElementsByClassName("audio-player"));return setTimeout((function (){var seq__21806 = cljs.core.seq(players);var chunk__21807 = null;var count__21808 = 0;var i__21809 = 0;while(true){
if((i__21809 < count__21808))
{var player = chunk__21807.cljs$core$IIndexed$_nth$arity$2(null,i__21809);player.muted = true;
{
var G__21810 = seq__21806;
var G__21811 = chunk__21807;
var G__21812 = count__21808;
var G__21813 = (i__21809 + 1);
seq__21806 = G__21810;
chunk__21807 = G__21811;
count__21808 = G__21812;
i__21809 = G__21813;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__21806);if(temp__4092__auto__)
{var seq__21806__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__21806__$1))
{var c__4151__auto__ = cljs.core.chunk_first(seq__21806__$1);{
var G__21814 = cljs.core.chunk_rest(seq__21806__$1);
var G__21815 = c__4151__auto__;
var G__21816 = cljs.core.count(c__4151__auto__);
var G__21817 = 0;
seq__21806 = G__21814;
chunk__21807 = G__21815;
count__21808 = G__21816;
i__21809 = G__21817;
continue;
}
} else
{var player = cljs.core.first(seq__21806__$1);player.muted = true;
{
var G__21818 = cljs.core.next(seq__21806__$1);
var G__21819 = null;
var G__21820 = 0;
var G__21821 = 0;
seq__21806 = G__21818;
chunk__21807 = G__21819;
count__21808 = G__21820;
i__21809 = G__21821;
continue;
}
}
} else
{return null;
}
}
break;
}
}),35);
}));
omchaya.controllers.post_controls.post_control_event_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$557,(function (target,message,args,previous_state,current_state){var players = dommy.utils.__GT_Array(dommy.template.__GT_node_like(target).getElementsByClassName("audio-player"));return setTimeout((function (){var seq__21822 = cljs.core.seq(players);var chunk__21823 = null;var count__21824 = 0;var i__21825 = 0;while(true){
if((i__21825 < count__21824))
{var player = chunk__21823.cljs$core$IIndexed$_nth$arity$2(null,i__21825);player.muted = false;
{
var G__21826 = seq__21822;
var G__21827 = chunk__21823;
var G__21828 = count__21824;
var G__21829 = (i__21825 + 1);
seq__21822 = G__21826;
chunk__21823 = G__21827;
count__21824 = G__21828;
i__21825 = G__21829;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__21822);if(temp__4092__auto__)
{var seq__21822__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__21822__$1))
{var c__4151__auto__ = cljs.core.chunk_first(seq__21822__$1);{
var G__21830 = cljs.core.chunk_rest(seq__21822__$1);
var G__21831 = c__4151__auto__;
var G__21832 = cljs.core.count(c__4151__auto__);
var G__21833 = 0;
seq__21822 = G__21830;
chunk__21823 = G__21831;
count__21824 = G__21832;
i__21825 = G__21833;
continue;
}
} else
{var player = cljs.core.first(seq__21822__$1);player.muted = false;
{
var G__21834 = cljs.core.next(seq__21822__$1);
var G__21835 = null;
var G__21836 = 0;
var G__21837 = 0;
seq__21822 = G__21834;
chunk__21823 = G__21835;
count__21824 = G__21836;
i__21825 = G__21837;
continue;
}
}
} else
{return null;
}
}
break;
}
}),35);
}));
omchaya.controllers.post_controls.post_control_event_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$592,(function (target,message,p__21838,previous_state,current_state){var vec__21839 = p__21838;var activity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21839,0,null);var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21839,1,null);var player = dommy.template.__GT_node_like(target).querySelector(dommy.core.selector(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(".audio-player.sfx.audio-"),cljs.core.str(cljs.core.constant$keyword$348.cljs$core$IFn$_invoke$arity$1(activity))].join('')], null)));return setTimeout((function (){return player.play();
}),35);
}));
omchaya.controllers.post_controls.post_control_event_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$525,(function (target,message,p__21840,previous_state,current_state){var vec__21841 = p__21840;var activity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21841,0,null);var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21841,1,null);return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Log the user out somehow"], 0));
}));
omchaya.controllers.post_controls.post_control_event_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$548,(function (target,message,p__21842,previous_state,current_state){var vec__21843 = p__21842;var activity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21843,0,null);var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21843,1,null);var temp__4092__auto__ = document.querySelector("div#player-container");if(cljs.core.truth_(temp__4092__auto__))
{var player_el = temp__4092__auto__;return omchaya.replay.install_player_BANG_(player_el,cljs.core.constant$keyword$601.cljs$core$IFn$_invoke$arity$1(current_state),omchaya.replay.initial_player_state(cljs.core.constant$keyword$370.cljs$core$IFn$_invoke$arity$1(current_state),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$563,omchaya.replay.player_control_ch,cljs.core.constant$keyword$564,omchaya.replay.player_drag_ch,cljs.core.constant$keyword$533,omchaya.replay.api_ch], null)));
} else
{return null;
}
}));
omchaya.controllers.post_controls.post_control_event_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$602,(function (target,message,p__21844,previous_state,current_state){var vec__21845 = p__21844;var activity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21845,0,null);var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21845,1,null);var temp__4092__auto__ = document.querySelector(dommy.core.selector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [target,cljs.core.constant$keyword$540], null)));if(cljs.core.truth_(temp__4092__auto__))
{var search_field = temp__4092__auto__;return window.setTimeout((function (){return search_field.value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(current_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$366,cljs.core.constant$keyword$374,cljs.core.constant$keyword$377,cljs.core.constant$keyword$312], null));
}),20);
} else
{return null;
}
}));
omchaya.controllers.post_controls.post_control_event_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$549,(function (target,message,args,previous_state,current_state){var temp__4092__auto__ = document.querySelector(dommy.core.selector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [target,cljs.core.constant$keyword$540], null)));if(cljs.core.truth_(temp__4092__auto__))
{var search_field = temp__4092__auto__;return search_field.focus();
} else
{return null;
}
}));
omchaya.controllers.post_controls.post_control_event_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$551,(function (target,message,args,previous_state,current_state){var temp__4092__auto__ = document.querySelector(dommy.core.selector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [target,cljs.core.constant$keyword$463], null)));if(cljs.core.truth_(temp__4092__auto__))
{var message_field = temp__4092__auto__;return message_field.focus();
} else
{return null;
}
}));
omchaya.controllers.post_controls.post_control_event_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$550,(function (target,message,args,previous_state,current_state){var temp__4092__auto__ = document.querySelector(dommy.core.selector(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [target,cljs.core.constant$keyword$540], null)));if(cljs.core.truth_(temp__4092__auto__))
{var search_field = temp__4092__auto__;return search_field.focus();
} else
{return null;
}
}));
omchaya.controllers.post_controls.post_control_event_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$595,(function (target,message,channel_id,previous_state,current_state){return omchaya.api.mock.destroy_channel_BANG_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(current_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$370,cljs.core.constant$keyword$533], null)),channel_id);
}));
