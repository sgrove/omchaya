// Compiled by ClojureScript 0.0-2156
goog.provide('omchaya.controllers.post_controls');
goog.require('cljs.core');
goog.require('omchaya.useful');
goog.require('cljs.core.async');
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
goog.require('dommy.core');
goog.require('cljs.core.async');
goog.require('dommy.core');
omchaya.controllers.post_controls.local_only_commands = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/mute","/unmute"], null);
omchaya.controllers.post_controls.sendable_message_QMARK_ = (function sendable_message_QMARK_(message){var vec__10496 = clojure.string.split.call(null,message,/ |\n/);var command = cljs.core.nth.call(null,vec__10496,0,null);var _ = cljs.core.nthnext.call(null,vec__10496,1);if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([command], true),omchaya.controllers.post_controls.local_only_commands)))
{return false;
} else
{return true;
}
});
omchaya.controllers.post_controls.post_control_event_BANG_ = (function (){var method_table__4261__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4262__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4263__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4264__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4265__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("post-control-event!",(function (target,message,args,previous_state,current_state){return message;
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__4265__auto__,method_table__4261__auto__,prefer_table__4262__auto__,method_cache__4263__auto__,cached_hierarchy__4264__auto__));
})();
cljs.core._add_method.call(null,omchaya.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"default","default",2558708147),(function (target,message,args,previous_state,current_state){return null;
}));
cljs.core._add_method.call(null,omchaya.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"current-user-mentioned","current-user-mentioned",1125795533),(function (target,message,args,previous_state,current_state){return cljs.core.print.call(null,"notify current user they were mentioned");
}));
cljs.core._add_method.call(null,omchaya.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"playlist-entry-played","playlist-entry-played",1677366299),(function (target,message,p__10498,previous_state,current_state){var vec__10499 = p__10498;var order = cljs.core.nth.call(null,vec__10499,0,null);var channel_id = cljs.core.nth.call(null,vec__10499,1,null);var controls_ch = cljs.core.get_in.call(null,current_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",1108747865),new cljs.core.Keyword(null,"controls","controls",4741937704)], null));var playlist = cljs.core.get_in.call(null,current_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",2446530370),channel_id,new cljs.core.Keyword(null,"player","player",4323118675),new cljs.core.Keyword(null,"playlist","playlist",2893378884)], null));var entry = omchaya.useful.ffilter.call(null,((function (controls_ch,playlist){
return (function (p1__10497_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"order","order",1119910592).cljs$core$IFn$_invoke$arity$1(p1__10497_SHARP_),order);
});})(controls_ch,playlist))
,cljs.core.get_in.call(null,current_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",2446530370),channel_id,new cljs.core.Keyword(null,"player","player",4323118675),new cljs.core.Keyword(null,"playlist","playlist",2893378884)], null)));return cljs.core.async.put_BANG_.call(null,controls_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-player-source-updated","audio-player-source-updated",2679762480),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"src","src",1014018390).cljs$core$IFn$_invoke$arity$1(entry),channel_id], null)], null));
}));
cljs.core._add_method.call(null,omchaya.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"audio-player-source-updated","audio-player-source-updated",2679762480),(function (target,message,p__10500,previous_state,current_state){var vec__10501 = p__10500;var src = cljs.core.nth.call(null,vec__10501,0,null);var channel_id = cljs.core.nth.call(null,vec__10501,1,null);if((cljs.core._EQ_.call(null,channel_id,new cljs.core.Keyword(null,"selected-channel","selected-channel",2473753411).cljs$core$IFn$_invoke$arity$1(current_state))) && (cljs.core._EQ_.call(null,cljs.core.get_in.call(null,current_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",2446530370),new cljs.core.Keyword(null,"selected-channel","selected-channel",2473753411).cljs$core$IFn$_invoke$arity$1(current_state),new cljs.core.Keyword(null,"player","player",4323118675),new cljs.core.Keyword(null,"state","state",1123661827)], null)),new cljs.core.Keyword(null,"playing","playing",520340384))))
{var player = dommy.template.__GT_node_like.call(null,target).querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(".audio-player.audio-"),cljs.core.str(channel_id)].join('')], null)));return setTimeout((function (){return player.play();
}),35);
} else
{return null;
}
}));
cljs.core._add_method.call(null,omchaya.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"tab-selected","tab-selected",4274020677),(function (target,message,args,previous_state,current_state){var old_channel = cljs.core.get_in.call(null,current_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",2446530370),new cljs.core.Keyword(null,"selected-channel","selected-channel",2473753411).cljs$core$IFn$_invoke$arity$1(current_state)], null));var new_channel = cljs.core.get_in.call(null,current_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",2446530370),args], null));return setTimeout((function (){return omchaya.ui.scroll_to_latest_message_BANG_.call(null,target,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(new_channel));
}),35);
}));
cljs.core._add_method.call(null,omchaya.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"user-message-submitted","user-message-submitted",1304334501),(function (target,message,args,previous_state,current_state){var channel = cljs.core.get_in.call(null,current_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",2446530370),new cljs.core.Keyword(null,"selected-channel","selected-channel",2473753411).cljs$core$IFn$_invoke$arity$1(current_state)], null));var user_message = cljs.core.get_in.call(null,previous_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",2448535445),new cljs.core.Keyword(null,"forms","forms",1111523233),new cljs.core.Keyword(null,"user-message","user-message",2253309815),new cljs.core.Keyword(null,"value","value",1125876963)], null));var temp__4092__auto___10502 = dommy.template.__GT_node_like.call(null,target).querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".chat-input",".chat-input",1495609141)], null)));if(cljs.core.truth_(temp__4092__auto___10502))
{var input_10503 = temp__4092__auto___10502;dommy.core.set_value_BANG_.call(null,input_10503,"");
} else
{}
setTimeout((function (){return omchaya.ui.scroll_to_latest_message_when_appropriate_BANG_.call(null,target,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(channel));
}),35);
omchaya.commands.handle_maybe_command.call(null,target,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content","content",1965434859),user_message,new cljs.core.Keyword(null,"channel-id","channel-id",3378014615),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(channel)], null),current_state);
if(omchaya.controllers.post_controls.sendable_message_QMARK_.call(null,user_message))
{return omchaya.api.mock.send_user_message_BANG_.call(null,new cljs.core.Keyword(null,"api-key","api-key",4507296670).cljs$core$IFn$_invoke$arity$1(current_state),user_message);
} else
{return null;
}
}));
cljs.core._add_method.call(null,omchaya.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"audio-player-started","audio-player-started",1807969246),(function (target,message,channel_id,previous_state,current_state){var player = dommy.template.__GT_node_like.call(null,target).querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(".audio-player.audio-"),cljs.core.str(channel_id)].join('')], null)));return setTimeout((function (){return player.play();
}),35);
}));
cljs.core._add_method.call(null,omchaya.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"audio-player-stopped","audio-player-stopped",1820835114),(function (target,message,channel_id,previous_state,current_state){var player = dommy.template.__GT_node_like.call(null,target).querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(".audio-player.audio-"),cljs.core.str(channel_id)].join('')], null)));return setTimeout((function (){return player.pause();
}),35);
}));
cljs.core._add_method.call(null,omchaya.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"audio-player-muted","audio-player-muted",4718730120),(function (target,message,args,previous_state,current_state){var players = dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,target).getElementsByClassName("audio-player"));return setTimeout((function (){var seq__10504 = cljs.core.seq.call(null,players);var chunk__10505 = null;var count__10506 = 0;var i__10507 = 0;while(true){
if((i__10507 < count__10506))
{var player = cljs.core._nth.call(null,chunk__10505,i__10507);player.muted = true;
{
var G__10508 = seq__10504;
var G__10509 = chunk__10505;
var G__10510 = count__10506;
var G__10511 = (i__10507 + 1);
seq__10504 = G__10508;
chunk__10505 = G__10509;
count__10506 = G__10510;
i__10507 = G__10511;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__10504);if(temp__4092__auto__)
{var seq__10504__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10504__$1))
{var c__4151__auto__ = cljs.core.chunk_first.call(null,seq__10504__$1);{
var G__10512 = cljs.core.chunk_rest.call(null,seq__10504__$1);
var G__10513 = c__4151__auto__;
var G__10514 = cljs.core.count.call(null,c__4151__auto__);
var G__10515 = 0;
seq__10504 = G__10512;
chunk__10505 = G__10513;
count__10506 = G__10514;
i__10507 = G__10515;
continue;
}
} else
{var player = cljs.core.first.call(null,seq__10504__$1);player.muted = true;
{
var G__10516 = cljs.core.next.call(null,seq__10504__$1);
var G__10517 = null;
var G__10518 = 0;
var G__10519 = 0;
seq__10504 = G__10516;
chunk__10505 = G__10517;
count__10506 = G__10518;
i__10507 = G__10519;
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
cljs.core._add_method.call(null,omchaya.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"audio-player-unmuted","audio-player-unmuted",3422373327),(function (target,message,args,previous_state,current_state){var players = dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,target).getElementsByClassName("audio-player"));return setTimeout((function (){var seq__10520 = cljs.core.seq.call(null,players);var chunk__10521 = null;var count__10522 = 0;var i__10523 = 0;while(true){
if((i__10523 < count__10522))
{var player = cljs.core._nth.call(null,chunk__10521,i__10523);player.muted = false;
{
var G__10524 = seq__10520;
var G__10525 = chunk__10521;
var G__10526 = count__10522;
var G__10527 = (i__10523 + 1);
seq__10520 = G__10524;
chunk__10521 = G__10525;
count__10522 = G__10526;
i__10523 = G__10527;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__10520);if(temp__4092__auto__)
{var seq__10520__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10520__$1))
{var c__4151__auto__ = cljs.core.chunk_first.call(null,seq__10520__$1);{
var G__10528 = cljs.core.chunk_rest.call(null,seq__10520__$1);
var G__10529 = c__4151__auto__;
var G__10530 = cljs.core.count.call(null,c__4151__auto__);
var G__10531 = 0;
seq__10520 = G__10528;
chunk__10521 = G__10529;
count__10522 = G__10530;
i__10523 = G__10531;
continue;
}
} else
{var player = cljs.core.first.call(null,seq__10520__$1);player.muted = false;
{
var G__10532 = cljs.core.next.call(null,seq__10520__$1);
var G__10533 = null;
var G__10534 = 0;
var G__10535 = 0;
seq__10520 = G__10532;
chunk__10521 = G__10533;
count__10522 = G__10534;
i__10523 = G__10535;
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
cljs.core._add_method.call(null,omchaya.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"current-user-mentioned","current-user-mentioned",1125795533),(function (target,message,p__10536,previous_state,current_state){var vec__10537 = p__10536;var activity = cljs.core.nth.call(null,vec__10537,0,null);var url = cljs.core.nth.call(null,vec__10537,1,null);var player = dommy.template.__GT_node_like.call(null,target).querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(".audio-player.sfx.audio-"),cljs.core.str(new cljs.core.Keyword(null,"channel-id","channel-id",3378014615).cljs$core$IFn$_invoke$arity$1(activity))].join('')], null)));return setTimeout((function (){return player.play();
}),35);
}));
cljs.core._add_method.call(null,omchaya.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"user-logged-out","user-logged-out",2519482167),(function (target,message,p__10538,previous_state,current_state){var vec__10539 = p__10538;var activity = cljs.core.nth.call(null,vec__10539,0,null);var url = cljs.core.nth.call(null,vec__10539,1,null);return cljs.core.print.call(null,"Log the user out somehow");
}));

//# sourceMappingURL=post_controls.js.map