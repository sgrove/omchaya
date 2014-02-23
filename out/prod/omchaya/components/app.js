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
omchaya.components.app.keymap = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
omchaya.components.app.app = (function app(app__$1,owner,opts){if(typeof omchaya.components.app.t20958 !== 'undefined')
{} else
{
/**
* @constructor
*/
omchaya.components.app.t20958 = (function (opts,owner,app,meta20959){
this.opts = opts;
this.owner = owner;
this.app = app;
this.meta20959 = meta20959;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
omchaya.components.app.t20958.cljs$lang$type = true;
omchaya.components.app.t20958.cljs$lang$ctorStr = "omchaya.components.app/t20958";
omchaya.components.app.t20958.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write(writer__3971__auto__,"omchaya.components.app/t20958");
});
omchaya.components.app.t20958.prototype.om$core$IRender$ = true;
omchaya.components.app.t20958.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var selected_channel = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$368,cljs.core.constant$keyword$367.cljs$core$IFn$_invoke$arity$1(self__.app)], null));var current_user = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$351,cljs.core.constant$keyword$369.cljs$core$IFn$_invoke$arity$1(self__.app)], null));var controls_ch = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$370,cljs.core.constant$keyword$432], null));var open_player_BANG_ = ((function (selected_channel,current_user,controls_ch){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(controls_ch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$548], null));
});})(selected_channel,current_user,controls_ch))
;var message_input_focused_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(self__.app,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$366,cljs.core.constant$keyword$374,cljs.core.constant$keyword$378,cljs.core.constant$keyword$379], null));var search_input_focused_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(self__.app,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$366,cljs.core.constant$keyword$374,cljs.core.constant$keyword$377,cljs.core.constant$keyword$379], null));var focus_search_BANG_ = ((function (selected_channel,current_user,controls_ch,open_player_BANG_,message_input_focused_QMARK_,search_input_focused_QMARK_){
return (function (){if(cljs.core.truth_(message_input_focused_QMARK_))
{return null;
} else
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(controls_ch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$549], null));
}
});})(selected_channel,current_user,controls_ch,open_player_BANG_,message_input_focused_QMARK_,search_input_focused_QMARK_))
;var blur_current_field_BANG_ = ((function (selected_channel,current_user,controls_ch,open_player_BANG_,message_input_focused_QMARK_,search_input_focused_QMARK_,focus_search_BANG_){
return (function (){if(cljs.core.truth_(message_input_focused_QMARK_))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(controls_ch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$550], null));
} else
{if(cljs.core.truth_(search_input_focused_QMARK_))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(controls_ch,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$551], null));
} else
{return null;
}
}
});})(selected_channel,current_user,controls_ch,open_player_BANG_,message_input_focused_QMARK_,search_input_focused_QMARK_,focus_search_BANG_))
;var _ = cljs.core.reset_BANG_(omchaya.components.app.keymap,new cljs.core.PersistentArrayMap(null, 3, ["ctrl+slash",open_player_BANG_,"slash",focus_search_BANG_,"esc",blur_current_field_BANG_], null));return React.DOM.div({"className": [cljs.core.str((cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(self__.app,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$366,cljs.core.constant$keyword$376,cljs.core.constant$keyword$383,cljs.core.constant$keyword$381], null)))?"slide-left ":null)),cljs.core.str((cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(self__.app,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$366,cljs.core.constant$keyword$376,cljs.core.constant$keyword$382,cljs.core.constant$keyword$381], null)))?"slide-right ":null))].join('')},sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$3(omchaya.components.key_queue.KeyboardHandler,self__.app,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$399,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$493,omchaya.components.app.keymap,cljs.core.constant$keyword$492,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$370,cljs.core.constant$keyword$552], null))], null)], null))),sablono.interpreter.interpret(om.core.build_all.cljs$core$IFn$_invoke$arity$3(omchaya.components.audio_player.player,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__20963){var vec__20964 = p__20963;var channel_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20964,0,null);var channel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20964,1,null);return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$431,cljs.core.constant$keyword$365.cljs$core$IFn$_invoke$arity$1(self__.app),cljs.core.constant$keyword$350,cljs.core.constant$keyword$350.cljs$core$IFn$_invoke$arity$1(channel),cljs.core.constant$keyword$355,cljs.core.constant$keyword$355.cljs$core$IFn$_invoke$arity$1(channel),cljs.core.constant$keyword$357,channel_id], null);
}),cljs.core.constant$keyword$368.cljs$core$IFn$_invoke$arity$1(self__.app)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$399,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$370,cljs.core.constant$keyword$370.cljs$core$IFn$_invoke$arity$1(self__.app)], null)], null))),sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$3(omchaya.components.sidebar.sidebar,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$475,selected_channel,cljs.core.constant$keyword$366,cljs.core.constant$keyword$366.cljs$core$IFn$_invoke$arity$1(self__.app),cljs.core.constant$keyword$474,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(self__.app,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$366,cljs.core.constant$keyword$374,cljs.core.constant$keyword$377,cljs.core.constant$keyword$312], null))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$399,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$370,cljs.core.constant$keyword$370.cljs$core$IFn$_invoke$arity$1(self__.opts),cljs.core.constant$keyword$351,cljs.core.constant$keyword$351.cljs$core$IFn$_invoke$arity$1(self__.app),cljs.core.constant$keyword$369,cljs.core.constant$keyword$369.cljs$core$IFn$_invoke$arity$1(self__.app),cljs.core.constant$keyword$367,cljs.core.constant$keyword$367.cljs$core$IFn$_invoke$arity$1(self__.app),cljs.core.constant$keyword$368,cljs.core.constant$keyword$368.cljs$core$IFn$_invoke$arity$1(self__.app)], null)], null))),sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$3(omchaya.components.main_area.main_area,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$475,selected_channel,cljs.core.constant$keyword$474,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(self__.app,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$366,cljs.core.constant$keyword$374,cljs.core.constant$keyword$377,cljs.core.constant$keyword$312], null))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$399,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$370,cljs.core.constant$keyword$370.cljs$core$IFn$_invoke$arity$1(self__.opts),cljs.core.constant$keyword$351,cljs.core.constant$keyword$351.cljs$core$IFn$_invoke$arity$1(self__.app),cljs.core.constant$keyword$369,cljs.core.constant$keyword$369.cljs$core$IFn$_invoke$arity$1(self__.app),cljs.core.constant$keyword$471,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(self__.app,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$366,cljs.core.constant$keyword$374,cljs.core.constant$keyword$378,cljs.core.constant$keyword$379], null)),cljs.core.constant$keyword$472,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(self__.app,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$366,cljs.core.constant$keyword$374,cljs.core.constant$keyword$378,cljs.core.constant$keyword$312], null))], null)], null))),sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$3(omchaya.components.navbar.navbar,cljs.core.select_keys(self__.app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$368,cljs.core.constant$keyword$366], null)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$399,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$370,cljs.core.constant$keyword$370.cljs$core$IFn$_invoke$arity$1(self__.opts)], null)], null))),React.DOM.div({"className": "at-view", "id": "at-view"},React.DOM.ul({"id": "at-view-ul"})));
});
omchaya.components.app.t20958.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20960){var self__ = this;
var _20960__$1 = this;return self__.meta20959;
});
omchaya.components.app.t20958.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20960,meta20959__$1){var self__ = this;
var _20960__$1 = this;return (new omchaya.components.app.t20958(self__.opts,self__.owner,self__.app,meta20959__$1));
});
omchaya.components.app.__GT_t20958 = (function __GT_t20958(opts__$1,owner__$1,app__$2,meta20959){return (new omchaya.components.app.t20958(opts__$1,owner__$1,app__$2,meta20959));
});
}
return (new omchaya.components.app.t20958(opts,owner,app__$1,null));
});
