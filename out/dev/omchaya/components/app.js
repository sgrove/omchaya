// Compiled by ClojureScript 0.0-2156
goog.provide('omchaya.components.app');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('omchaya.components.main_area');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('omchaya.components.key_queue');
goog.require('sablono.core');
goog.require('omchaya.components.audio_player');
goog.require('om.core');
goog.require('omchaya.components.sidebar');
goog.require('omchaya.components.navbar');
goog.require('om.core');
goog.require('omchaya.components.main_area');
goog.require('omchaya.components.key_queue');
goog.require('omchaya.components.audio_player');
goog.require('omchaya.components.sidebar');
goog.require('omchaya.components.navbar');
goog.require('cljs.core.async');
omchaya.components.app.keymap = cljs.core.atom.call(null,null);
omchaya.components.app.app = (function app(app__$1,owner,opts){if(typeof omchaya.components.app.t10659 !== 'undefined')
{} else
{
/**
* @constructor
*/
omchaya.components.app.t10659 = (function (opts,owner,app,meta10660){
this.opts = opts;
this.owner = owner;
this.app = app;
this.meta10660 = meta10660;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
omchaya.components.app.t10659.cljs$lang$type = true;
omchaya.components.app.t10659.cljs$lang$ctorStr = "omchaya.components.app/t10659";
omchaya.components.app.t10659.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"omchaya.components.app/t10659");
});
omchaya.components.app.t10659.prototype.om$core$IRender$ = true;
omchaya.components.app.t10659.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var selected_channel = cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",2446530370),new cljs.core.Keyword(null,"selected-channel","selected-channel",2473753411).cljs$core$IFn$_invoke$arity$1(self__.app)], null));var current_user = cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",1125482874),new cljs.core.Keyword(null,"current-user-email","current-user-email",4091392864).cljs$core$IFn$_invoke$arity$1(self__.app)], null));var controls_ch = cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",1108747865),new cljs.core.Keyword(null,"controls","controls",4741937704)], null));var open_player_BANG_ = ((function (selected_channel,current_user,controls_ch){
return (function (){return cljs.core.async.put_BANG_.call(null,controls_ch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history-player-opened","history-player-opened",3054141134)], null));
});})(selected_channel,current_user,controls_ch))
;var message_input_focused_QMARK_ = cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",2448535445),new cljs.core.Keyword(null,"forms","forms",1111523233),new cljs.core.Keyword(null,"user-message","user-message",2253309815),new cljs.core.Keyword(null,"focused","focused",4617830121)], null));var search_input_focused_QMARK_ = cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",2448535445),new cljs.core.Keyword(null,"forms","forms",1111523233),new cljs.core.Keyword(null,"search","search",4402534682),new cljs.core.Keyword(null,"focused","focused",4617830121)], null));var focus_search_BANG_ = ((function (selected_channel,current_user,controls_ch,open_player_BANG_,message_input_focused_QMARK_,search_input_focused_QMARK_){
return (function (){if(cljs.core.truth_(message_input_focused_QMARK_))
{return null;
} else
{return cljs.core.async.put_BANG_.call(null,controls_ch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-focus-key-pressed","search-focus-key-pressed",1169113036)], null));
}
});})(selected_channel,current_user,controls_ch,open_player_BANG_,message_input_focused_QMARK_,search_input_focused_QMARK_))
;var blur_current_field_BANG_ = ((function (selected_channel,current_user,controls_ch,open_player_BANG_,message_input_focused_QMARK_,search_input_focused_QMARK_,focus_search_BANG_){
return (function (){if(cljs.core.truth_(message_input_focused_QMARK_))
{return cljs.core.async.put_BANG_.call(null,controls_ch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-message-blur-key-pressed","user-message-blur-key-pressed",3460583048)], null));
} else
{if(cljs.core.truth_(search_input_focused_QMARK_))
{return cljs.core.async.put_BANG_.call(null,controls_ch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-form-blur-key-pressed","search-form-blur-key-pressed",2923548996)], null));
} else
{return null;
}
}
});})(selected_channel,current_user,controls_ch,open_player_BANG_,message_input_focused_QMARK_,search_input_focused_QMARK_,focus_search_BANG_))
;var _ = cljs.core.reset_BANG_.call(null,omchaya.components.app.keymap,new cljs.core.PersistentArrayMap(null, 3, ["ctrl+slash",open_player_BANG_,"slash",focus_search_BANG_,"esc",blur_current_field_BANG_], null));return React.DOM.div({"className": [cljs.core.str((cljs.core.truth_(cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",2448535445),new cljs.core.Keyword(null,"sidebar","sidebar",3099131598),new cljs.core.Keyword(null,"right","right",1122416014),new cljs.core.Keyword(null,"open","open",1017321916)], null)))?"slide-left ":null)),cljs.core.str((cljs.core.truth_(cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",2448535445),new cljs.core.Keyword(null,"sidebar","sidebar",3099131598),new cljs.core.Keyword(null,"left","left",1017222009),new cljs.core.Keyword(null,"open","open",1017321916)], null)))?"slide-right ":null))].join('')},sablono.interpreter.interpret.call(null,om.core.build.call(null,omchaya.components.key_queue.KeyboardHandler,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keymap","keymap",4174211599),omchaya.components.app.keymap,new cljs.core.Keyword(null,"error-ch","error-ch",2409970108),cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",1108747865),new cljs.core.Keyword(null,"error","error",1110689146)], null))], null)], null))),sablono.interpreter.interpret.call(null,om.core.build_all.call(null,omchaya.components.audio_player.player,cljs.core.map.call(null,(function (p__10664){var vec__10665 = p__10664;var channel_id = cljs.core.nth.call(null,vec__10665,0,null);var channel = cljs.core.nth.call(null,vec__10665,1,null);return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"audio-settings","audio-settings",938379180),new cljs.core.Keyword(null,"audio","audio",1107070792).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.Keyword(null,"player","player",4323118675),new cljs.core.Keyword(null,"player","player",4323118675).cljs$core$IFn$_invoke$arity$1(channel),new cljs.core.Keyword(null,"sfx","sfx",1014018039),new cljs.core.Keyword(null,"sfx","sfx",1014018039).cljs$core$IFn$_invoke$arity$1(channel),new cljs.core.Keyword(null,"id","id",1013907597),channel_id], null);
}),new cljs.core.Keyword(null,"channels","channels",2446530370).cljs$core$IFn$_invoke$arity$1(self__.app)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comms","comms",1108747865),new cljs.core.Keyword(null,"comms","comms",1108747865).cljs$core$IFn$_invoke$arity$1(self__.app)], null)], null))),sablono.interpreter.interpret.call(null,om.core.build.call(null,omchaya.components.sidebar.sidebar,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"channel","channel",1752854645),selected_channel,new cljs.core.Keyword(null,"settings","settings",2448535445),new cljs.core.Keyword(null,"settings","settings",2448535445).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.Keyword(null,"search-filter","search-filter",674207407),cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",2448535445),new cljs.core.Keyword(null,"forms","forms",1111523233),new cljs.core.Keyword(null,"search","search",4402534682),new cljs.core.Keyword(null,"value","value",1125876963)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"comms","comms",1108747865),new cljs.core.Keyword(null,"comms","comms",1108747865).cljs$core$IFn$_invoke$arity$1(self__.opts),new cljs.core.Keyword(null,"users","users",1125482874),new cljs.core.Keyword(null,"users","users",1125482874).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.Keyword(null,"current-user-email","current-user-email",4091392864),new cljs.core.Keyword(null,"current-user-email","current-user-email",4091392864).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.Keyword(null,"selected-channel","selected-channel",2473753411),new cljs.core.Keyword(null,"selected-channel","selected-channel",2473753411).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.Keyword(null,"channels","channels",2446530370),new cljs.core.Keyword(null,"channels","channels",2446530370).cljs$core$IFn$_invoke$arity$1(self__.app)], null)], null))),sablono.interpreter.interpret.call(null,om.core.build.call(null,omchaya.components.main_area.main_area,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"channel","channel",1752854645),selected_channel,new cljs.core.Keyword(null,"search-filter","search-filter",674207407),cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",2448535445),new cljs.core.Keyword(null,"forms","forms",1111523233),new cljs.core.Keyword(null,"search","search",4402534682),new cljs.core.Keyword(null,"value","value",1125876963)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"comms","comms",1108747865),new cljs.core.Keyword(null,"comms","comms",1108747865).cljs$core$IFn$_invoke$arity$1(self__.opts),new cljs.core.Keyword(null,"users","users",1125482874),new cljs.core.Keyword(null,"users","users",1125482874).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.Keyword(null,"current-user-email","current-user-email",4091392864),new cljs.core.Keyword(null,"current-user-email","current-user-email",4091392864).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.Keyword(null,"input-focused?","input-focused?",2338465213),cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",2448535445),new cljs.core.Keyword(null,"forms","forms",1111523233),new cljs.core.Keyword(null,"user-message","user-message",2253309815),new cljs.core.Keyword(null,"focused","focused",4617830121)], null)),new cljs.core.Keyword(null,"input-value","input-value",3916329248),cljs.core.get_in.call(null,self__.app,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",2448535445),new cljs.core.Keyword(null,"forms","forms",1111523233),new cljs.core.Keyword(null,"user-message","user-message",2253309815),new cljs.core.Keyword(null,"value","value",1125876963)], null))], null)], null))),sablono.interpreter.interpret.call(null,om.core.build.call(null,omchaya.components.navbar.navbar,cljs.core.select_keys.call(null,self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",2446530370),new cljs.core.Keyword(null,"settings","settings",2448535445)], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comms","comms",1108747865),new cljs.core.Keyword(null,"comms","comms",1108747865).cljs$core$IFn$_invoke$arity$1(self__.opts)], null)], null))),React.DOM.div({"className": "at-view", "id": "at-view"},React.DOM.ul({"id": "at-view-ul"})));
});
omchaya.components.app.t10659.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10661){var self__ = this;
var _10661__$1 = this;return self__.meta10660;
});
omchaya.components.app.t10659.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10661,meta10660__$1){var self__ = this;
var _10661__$1 = this;return (new omchaya.components.app.t10659(self__.opts,self__.owner,self__.app,meta10660__$1));
});
omchaya.components.app.__GT_t10659 = (function __GT_t10659(opts__$1,owner__$1,app__$2,meta10660){return (new omchaya.components.app.t10659(opts__$1,owner__$1,app__$2,meta10660));
});
}
return (new omchaya.components.app.t10659(opts,owner,app__$1,null));
});

//# sourceMappingURL=app.js.map