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
omchaya.components.audio_player.player = (function player(audio_data,owner,opts){if(typeof omchaya.components.audio_player.t10672 !== 'undefined')
{} else
{
/**
* @constructor
*/
omchaya.components.audio_player.t10672 = (function (opts,owner,audio_data,player,meta10673){
this.opts = opts;
this.owner = owner;
this.audio_data = audio_data;
this.player = player;
this.meta10673 = meta10673;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
omchaya.components.audio_player.t10672.cljs$lang$type = true;
omchaya.components.audio_player.t10672.cljs$lang$ctorStr = "omchaya.components.audio-player/t10672";
omchaya.components.audio_player.t10672.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"omchaya.components.audio-player/t10672");
});
omchaya.components.audio_player.t10672.prototype.om$core$IRender$ = true;
omchaya.components.audio_player.t10672.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var map__10675 = self__.audio_data;var map__10675__$1 = ((cljs.core.seq_QMARK_.call(null,map__10675))?cljs.core.apply.call(null,cljs.core.hash_map,map__10675):map__10675);var id = cljs.core.get.call(null,map__10675__$1,new cljs.core.Keyword(null,"id","id",1013907597));var audio_settings = cljs.core.get.call(null,map__10675__$1,new cljs.core.Keyword(null,"audio-settings","audio-settings",938379180));var player__$2 = cljs.core.get.call(null,map__10675__$1,new cljs.core.Keyword(null,"player","player",4323118675));var sfx = cljs.core.get.call(null,map__10675__$1,new cljs.core.Keyword(null,"sfx","sfx",1014018039));var audio_source = new cljs.core.Keyword(null,"source-url","source-url",4196274223).cljs$core$IFn$_invoke$arity$1(player__$2);var comm = cljs.core.get_in.call(null,self__.opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",1108747865),new cljs.core.Keyword(null,"controls","controls",4741937704)], null));return React.DOM.div({"style": cljs.core.clj__GT_js.call(null,{"display": "none"})},(function (){var attrs10676 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",1014018390),audio_source,new cljs.core.Keyword(null,"key","key",1014010321),[cljs.core.str("audio-"),cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("audio-"),cljs.core.str(id)].join('')], null),(cljs.core.truth_(new cljs.core.Keyword(null,"muted","muted",1118168285).cljs$core$IFn$_invoke$arity$1(audio_settings))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"muted","muted",1118168285),true], null):null));if(cljs.core.map_QMARK_.call(null,attrs10676))
{return React.DOM.audio(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["audio-player"], null)], null),attrs10676)),null);
} else
{return React.DOM.audio({"className": "audio-player"},sablono.interpreter.interpret.call(null,attrs10676));
}
})(),(function (){var attrs10677 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",1014018390),new cljs.core.Keyword(null,"source-url","source-url",4196274223).cljs$core$IFn$_invoke$arity$1(sfx),new cljs.core.Keyword(null,"key","key",1014010321),[cljs.core.str("sfx-"),cljs.core.str(id)].join(''),new cljs.core.Keyword(null,"class","class",1108647146),[cljs.core.str("audio-"),cljs.core.str(id)].join('')], null),(cljs.core.truth_(new cljs.core.Keyword(null,"muted","muted",1118168285).cljs$core$IFn$_invoke$arity$1(audio_settings))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"muted","muted",1118168285),true], null):null));if(cljs.core.map_QMARK_.call(null,attrs10677))
{return React.DOM.audio(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["audio-player","sfx"], null)], null),attrs10677)),null);
} else
{return React.DOM.audio({"className": "audio-player sfx"},sablono.interpreter.interpret.call(null,attrs10677));
}
})());
});
omchaya.components.audio_player.t10672.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10674){var self__ = this;
var _10674__$1 = this;return self__.meta10673;
});
omchaya.components.audio_player.t10672.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10674,meta10673__$1){var self__ = this;
var _10674__$1 = this;return (new omchaya.components.audio_player.t10672(self__.opts,self__.owner,self__.audio_data,self__.player,meta10673__$1));
});
omchaya.components.audio_player.__GT_t10672 = (function __GT_t10672(opts__$1,owner__$1,audio_data__$1,player__$1,meta10673){return (new omchaya.components.audio_player.t10672(opts__$1,owner__$1,audio_data__$1,player__$1,meta10673));
});
}
return (new omchaya.components.audio_player.t10672(opts,owner,audio_data,player,null));
});

//# sourceMappingURL=audio_player.js.map