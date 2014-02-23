// Compiled by ClojureScript 0.0-2156
goog.provide('omchaya.components.audio_player');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.core');
goog.require('om.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
omchaya.components.audio_player.player = (function player(audio_data,owner,opts){if(typeof omchaya.components.audio_player.t20971 !== 'undefined')
{} else
{
/**
* @constructor
*/
omchaya.components.audio_player.t20971 = (function (opts,owner,audio_data,player,meta20972){
this.opts = opts;
this.owner = owner;
this.audio_data = audio_data;
this.player = player;
this.meta20972 = meta20972;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
omchaya.components.audio_player.t20971.cljs$lang$type = true;
omchaya.components.audio_player.t20971.cljs$lang$ctorStr = "omchaya.components.audio-player/t20971";
omchaya.components.audio_player.t20971.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write(writer__3971__auto__,"omchaya.components.audio-player/t20971");
});
omchaya.components.audio_player.t20971.prototype.om$core$IRender$ = true;
omchaya.components.audio_player.t20971.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var map__20974 = self__.audio_data;var map__20974__$1 = ((cljs.core.seq_QMARK_(map__20974))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20974):map__20974);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20974__$1,cljs.core.constant$keyword$357);var audio_settings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20974__$1,cljs.core.constant$keyword$431);var player__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20974__$1,cljs.core.constant$keyword$350);var sfx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20974__$1,cljs.core.constant$keyword$355);var audio_source = cljs.core.constant$keyword$359.cljs$core$IFn$_invoke$arity$1(player__$2);var comm = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(self__.opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$370,cljs.core.constant$keyword$432], null));return React.DOM.div({"style": cljs.core.clj__GT_js({"display": "none"})},(function (){var attrs20975 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$344,audio_source,cljs.core.constant$keyword$397,[cljs.core.str("audio-"),cljs.core.str(id)].join(''),cljs.core.constant$keyword$333,[cljs.core.str("audio-"),cljs.core.str(id)].join('')], null),(cljs.core.truth_(cljs.core.constant$keyword$372.cljs$core$IFn$_invoke$arity$1(audio_settings))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$372,true], null):null)], 0));if(cljs.core.map_QMARK_(attrs20975))
{return React.DOM.audio(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$333,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["audio-player"], null)], null),attrs20975], 0))),null);
} else
{return React.DOM.audio({"className": "audio-player"},sablono.interpreter.interpret(attrs20975));
}
})(),(function (){var attrs20976 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$344,cljs.core.constant$keyword$359.cljs$core$IFn$_invoke$arity$1(sfx),cljs.core.constant$keyword$397,[cljs.core.str("sfx-"),cljs.core.str(id)].join(''),cljs.core.constant$keyword$333,[cljs.core.str("audio-"),cljs.core.str(id)].join('')], null),(cljs.core.truth_(cljs.core.constant$keyword$372.cljs$core$IFn$_invoke$arity$1(audio_settings))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$372,true], null):null)], 0));if(cljs.core.map_QMARK_(attrs20976))
{return React.DOM.audio(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$333,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["audio-player","sfx"], null)], null),attrs20976], 0))),null);
} else
{return React.DOM.audio({"className": "audio-player sfx"},sablono.interpreter.interpret(attrs20976));
}
})());
});
omchaya.components.audio_player.t20971.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20973){var self__ = this;
var _20973__$1 = this;return self__.meta20972;
});
omchaya.components.audio_player.t20971.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20973,meta20972__$1){var self__ = this;
var _20973__$1 = this;return (new omchaya.components.audio_player.t20971(self__.opts,self__.owner,self__.audio_data,self__.player,meta20972__$1));
});
omchaya.components.audio_player.__GT_t20971 = (function __GT_t20971(opts__$1,owner__$1,audio_data__$1,player__$1,meta20972){return (new omchaya.components.audio_player.t20971(opts__$1,owner__$1,audio_data__$1,player__$1,meta20972));
});
}
return (new omchaya.components.audio_player.t20971(opts,owner,audio_data,player,null));
});
