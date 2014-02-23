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
omchaya.controllers.post_controls.sendable_message_QMARK_ = (function sendable_message_QMARK_(message){var vec__11499 = clojure.string.split.call(null,message,/ |\n/);var command = cljs.core.nth.call(null,vec__11499,0,null);var _ = cljs.core.nthnext.call(null,vec__11499,1);if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([command], true),omchaya.controllers.post_controls.local_only_commands)))
{return false;
} else
{return true;
}
});
omchaya.controllers.post_controls.post_control_event_BANG_ = (function (){var method_table__4261__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4262__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4263__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4264__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4265__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("post-control-event!",(function (target,message,args,previous_state,current_state){return message;
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__4265__auto__,method_table__4261__auto__,prefer_table__4262__auto__,method_cache__4263__auto__,cached_hierarchy__4264__auto__));
})();
cljs.core._add_method.call(null,omchaya.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"default","default",2558708147),(function (target,message,args,previous_state,current_state){return cljs.core.print.call(null,"No post-control for: ",message);
}));
cljs.core._add_method.call(null,omchaya.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"current-user-mentioned","current-user-mentioned",1125795533),(function (target,message,args,previous_state,current_state){return cljs.core.print.call(null,"notify current user they were mentioned");
}));
cljs.core._add_method.call(null,omchaya.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"playlist-entry-played","playlist-entry-played",1677366299),(function (target,message,p__11501,previous_state,current_state){var vec__11502 = p__11501;var order = cljs.core.nth.call(null,vec__11502,0,null);var channel_id = cljs.core.nth.call(null,vec__11502,1,null);var controls_ch = cljs.core.get_in.call(null,current_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",1108747865),new cljs.core.Keyword(null,"controls","controls",4741937704)], null));var playlist = cljs.core.get_in.call(null,current_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",2446530370),channel_id,new cljs.core.Keyword(null,"player","player",4323118675),new cljs.core.Keyword(null,"playlist","playlist",2893378884)], null));var entry = omchaya.useful.ffilter.call(null,((function (controls_ch,playlist){
return (function (p1__11500_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"order","order",1119910592).cljs$core$IFn$_invoke$arity$1(p1__11500_SHARP_),order);
});})(controls_ch,playlist))
,cljs.core.get_in.call(null,current_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",2446530370),channel_id,new cljs.core.Keyword(null,"player","player",4323118675),new cljs.core.Keyword(null,"playlist","playlist",2893378884)], null)));return cljs.core.async.put_BANG_.call(null,controls_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-player-source-updated","audio-player-source-updated",2679762480),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"src","src",1014018390).cljs$core$IFn$_invoke$arity$1(entry),channel_id], null)], null));
}));
cljs.core._add_method.call(null,omchaya.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"audio-player-source-updated","audio-player-source-updated",2679762480),(function (target,message,p__11503,previous_state,current_state){var vec__11504 = p__11503;var src = cljs.core.nth.call(null,vec__11504,0,null);var channel_id = cljs.core.nth.call(null,vec__11504,1,null);if((cljs.core._EQ_.call(null,channel_id,new cljs.core.Keyword(null,"selected-channel","selected-channel",2473753411).cljs$core$IFn$_invoke$arity$1(current_state))) && (cljs.core._EQ_.call(null,cljs.core.get_in.call(null,current_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",2446530370),new cljs.core.Keyword(null,"selected-channel","selected-channel",2473753411).cljs$core$IFn$_invoke$arity$1(current_state),new cljs.core.Keyword(null,"player","player",4323118675),new cljs.core.Keyword(null,"state","state",1123661827)], null)),new cljs.core.Keyword(null,"playing","playing",520340384))))
{var player = dommy.template.__GT_node_like.call(null,target).querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(".audio-player.audio-"),cljs.core.str(channel_id)].join('')], null)));return setTimeout((function (){return player.play();
}),35);
} else
{return null;
}
}));
cljs.core._add_method.call(null,omchaya.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"tab-selected","tab-selected",4274020677),(function (target,message,channel_id,previous_state,current_state){omchaya.utils.set_window_href_BANG_.call(null,omchaya.routes.v1_channel_link.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"channel-id","channel-id",3378014615),channel_id], null)));
var temp__4092__auto__ = cljs.core.get_in.call(null,current_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",2446530370),channel_id], null));if(cljs.core.truth_(temp__4092__auto__))
{var new_channel = temp__4092__auto__;return setTimeout((function (){return omchaya.ui.scroll_to_latest_message_BANG_.call(null,target,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(new_channel));
}),35);
} else
{return null;
}
}));
cljs.core._add_method.call(null,omchaya.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"user-message-submitted","user-message-submitted",1304334501),(function (target,message,args,previous_state,current_state){var channel = cljs.core.get_in.call(null,current_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",2446530370),new cljs.core.Keyword(null,"selected-channel","selected-channel",2473753411).cljs$core$IFn$_invoke$arity$1(current_state)], null));var user_message = cljs.core.get_in.call(null,previous_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",2448535445),new cljs.core.Keyword(null,"forms","forms",1111523233),new cljs.core.Keyword(null,"user-message","user-message",2253309815),new cljs.core.Keyword(null,"value","value",1125876963)], null));var temp__4092__auto___11505 = dommy.template.__GT_node_like.call(null,target).querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".chat-input",".chat-input",1495609141)], null)));if(cljs.core.truth_(temp__4092__auto___11505))
{var input_11506 = temp__4092__auto___11505;dommy.core.set_value_BANG_.call(null,input_11506,"");
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
cljs.core._add_method.call(null,omchaya.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"audio-player-muted","audio-player-muted",4718730120),(function (target,message,args,previous_state,current_state){var players = dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,target).getElementsByClassName("audio-player"));return setTimeout((function (){var seq__11507 = cljs.core.seq.call(null,players);var chunk__11508 = null;var count__11509 = 0;var i__11510 = 0;while(true){
if((i__11510 < count__11509))
{var player = cljs.core._nth.call(null,chunk__11508,i__11510);player.muted = true;
{
var G__11511 = seq__11507;
var G__11512 = chunk__11508;
var G__11513 = count__11509;
var G__11514 = (i__11510 + 1);
seq__11507 = G__11511;
chunk__11508 = G__11512;
count__11509 = G__11513;
i__11510 = G__11514;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__11507);if(temp__4092__auto__)
{var seq__11507__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11507__$1))
{var c__4151__auto__ = cljs.core.chunk_first.call(null,seq__11507__$1);{
var G__11515 = cljs.core.chunk_rest.call(null,seq__11507__$1);
var G__11516 = c__4151__auto__;
var G__11517 = cljs.core.count.call(null,c__4151__auto__);
var G__11518 = 0;
seq__11507 = G__11515;
chunk__11508 = G__11516;
count__11509 = G__11517;
i__11510 = G__11518;
continue;
}
} else
{var player = cljs.core.first.call(null,seq__11507__$1);player.muted = true;
{
var G__11519 = cljs.core.next.call(null,seq__11507__$1);
var G__11520 = null;
var G__11521 = 0;
var G__11522 = 0;
seq__11507 = G__11519;
chunk__11508 = G__11520;
count__11509 = G__11521;
i__11510 = G__11522;
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
cljs.core._add_method.call(null,omchaya.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"audio-player-unmuted","audio-player-unmuted",3422373327),(function (target,message,args,previous_state,current_state){var players = dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,target).getElementsByClassName("audio-player"));return setTimeout((function (){var seq__11523 = cljs.core.seq.call(null,players);var chunk__11524 = null;var count__11525 = 0;var i__11526 = 0;while(true){
if((i__11526 < count__11525))
{var player = cljs.core._nth.call(null,chunk__11524,i__11526);player.muted = false;
{
var G__11527 = seq__11523;
var G__11528 = chunk__11524;
var G__11529 = count__11525;
var G__11530 = (i__11526 + 1);
seq__11523 = G__11527;
chunk__11524 = G__11528;
count__11525 = G__11529;
i__11526 = G__11530;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__11523);if(temp__4092__auto__)
{var seq__11523__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11523__$1))
{var c__4151__auto__ = cljs.core.chunk_first.call(null,seq__11523__$1);{
var G__11531 = cljs.core.chunk_rest.call(null,seq__11523__$1);
var G__11532 = c__4151__auto__;
var G__11533 = cljs.core.count.call(null,c__4151__auto__);
var G__11534 = 0;
seq__11523 = G__11531;
chunk__11524 = G__11532;
count__11525 = G__11533;
i__11526 = G__11534;
continue;
}
} else
{var player = cljs.core.first.call(null,seq__11523__$1);player.muted = false;
{
var G__11535 = cljs.core.next.call(null,seq__11523__$1);
var G__11536 = null;
var G__11537 = 0;
var G__11538 = 0;
seq__11523 = G__11535;
chunk__11524 = G__11536;
count__11525 = G__11537;
i__11526 = G__11538;
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
cljs.core._add_method.call(null,omchaya.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"current-user-mentioned","current-user-mentioned",1125795533),(function (target,message,p__11539,previous_state,current_state){var vec__11540 = p__11539;var activity = cljs.core.nth.call(null,vec__11540,0,null);var url = cljs.core.nth.call(null,vec__11540,1,null);var player = dommy.template.__GT_node_like.call(null,target).querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(".audio-player.sfx.audio-"),cljs.core.str(new cljs.core.Keyword(null,"channel-id","channel-id",3378014615).cljs$core$IFn$_invoke$arity$1(activity))].join('')], null)));return setTimeout((function (){return player.play();
}),35);
}));
cljs.core._add_method.call(null,omchaya.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"user-logged-out","user-logged-out",2519482167),(function (target,message,p__11541,previous_state,current_state){var vec__11542 = p__11541;var activity = cljs.core.nth.call(null,vec__11542,0,null);var url = cljs.core.nth.call(null,vec__11542,1,null);return cljs.core.print.call(null,"Log the user out somehow");
}));
cljs.core._add_method.call(null,omchaya.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"history-player-opened","history-player-opened",3054141134),(function (target,message,p__11543,previous_state,current_state){var vec__11544 = p__11543;var activity = cljs.core.nth.call(null,vec__11544,0,null);var url = cljs.core.nth.call(null,vec__11544,1,null);var temp__4092__auto__ = document.querySelector("div#player-container");if(cljs.core.truth_(temp__4092__auto__))
{var player_el = temp__4092__auto__;return omchaya.replay.install_player_BANG_.call(null,player_el,new cljs.core.Keyword(null,"api-key","api-key",4507296670).cljs$core$IFn$_invoke$arity$1(current_state),omchaya.replay.initial_player_state.call(null,new cljs.core.Keyword(null,"comms","comms",1108747865).cljs$core$IFn$_invoke$arity$1(current_state),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player-control","player-control",3655689699),omchaya.replay.player_control_ch,new cljs.core.Keyword(null,"player-drag","player-drag",1524386834),omchaya.replay.player_drag_ch,new cljs.core.Keyword(null,"api","api",1014001036),omchaya.replay.api_ch], null)));
} else
{return null;
}
}));
cljs.core._add_method.call(null,omchaya.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"search-field-focused","search-field-focused",1194736049),(function (target,message,p__11545,previous_state,current_state){var vec__11546 = p__11545;var activity = cljs.core.nth.call(null,vec__11546,0,null);var url = cljs.core.nth.call(null,vec__11546,1,null);var temp__4092__auto__ = document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [target,new cljs.core.Keyword(null,"input.query","input.query",3940929814)], null)));if(cljs.core.truth_(temp__4092__auto__))
{var search_field = temp__4092__auto__;return window.setTimeout((function (){return search_field.value = cljs.core.get_in.call(null,current_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",2448535445),new cljs.core.Keyword(null,"forms","forms",1111523233),new cljs.core.Keyword(null,"search","search",4402534682),new cljs.core.Keyword(null,"value","value",1125876963)], null));
}),20);
} else
{return null;
}
}));
cljs.core._add_method.call(null,omchaya.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"search-focus-key-pressed","search-focus-key-pressed",1169113036),(function (target,message,args,previous_state,current_state){var temp__4092__auto__ = document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [target,new cljs.core.Keyword(null,"input.query","input.query",3940929814)], null)));if(cljs.core.truth_(temp__4092__auto__))
{var search_field = temp__4092__auto__;return search_field.focus();
} else
{return null;
}
}));
cljs.core._add_method.call(null,omchaya.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"search-form-blur-key-pressed","search-form-blur-key-pressed",2923548996),(function (target,message,args,previous_state,current_state){var temp__4092__auto__ = document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [target,new cljs.core.Keyword(null,"textarea.chat-input","textarea.chat-input",3263729595)], null)));if(cljs.core.truth_(temp__4092__auto__))
{var message_field = temp__4092__auto__;return message_field.focus();
} else
{return null;
}
}));
cljs.core._add_method.call(null,omchaya.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"user-message-blur-key-pressed","user-message-blur-key-pressed",3460583048),(function (target,message,args,previous_state,current_state){var temp__4092__auto__ = document.querySelector(dommy.core.selector.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [target,new cljs.core.Keyword(null,"input.query","input.query",3940929814)], null)));if(cljs.core.truth_(temp__4092__auto__))
{var search_field = temp__4092__auto__;return search_field.focus();
} else
{return null;
}
}));
cljs.core._add_method.call(null,omchaya.controllers.post_controls.post_control_event_BANG_,new cljs.core.Keyword(null,"channel-destroyed","channel-destroyed",3892625729),(function (target,message,channel_id,previous_state,current_state){return omchaya.api.mock.destroy_channel_BANG_.call(null,cljs.core.get_in.call(null,current_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",1108747865),new cljs.core.Keyword(null,"api","api",1014001036)], null)),channel_id);
}));

//# sourceMappingURL=post_controls.js.map