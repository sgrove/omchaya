// Compiled by ClojureScript 0.0-2156
goog.provide('omchaya.components.sidebar');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('omchaya.utils');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('goog.string');
goog.require('sablono.core');
goog.require('om.core');
goog.require('clojure.string');
goog.require('om.core');
goog.require('clojure.string');
goog.require('omchaya.utils');
goog.require('cljs.core.async');
goog.require('goog.string');
omchaya.components.sidebar.people_entry = (function people_entry(comm,person){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$495,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$353,(function (){var or__3403__auto__ = cljs.core.constant$keyword$384.cljs$core$IFn$_invoke$arity$1(person);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = cljs.core.constant$keyword$386.cljs$core$IFn$_invoke$arity$1(person);if(cljs.core.truth_(or__3403__auto____$1))
{return or__3403__auto____$1;
} else
{return cljs.core.constant$keyword$385.cljs$core$IFn$_invoke$arity$1(person);
}
}
})(),cljs.core.constant$keyword$397,cljs.core.constant$keyword$385.cljs$core$IFn$_invoke$arity$1(person)], null),omchaya.utils.gravatar_for(cljs.core.constant$keyword$385.cljs$core$IFn$_invoke$arity$1(person)),(function (){var or__3403__auto__ = cljs.core.constant$keyword$384.cljs$core$IFn$_invoke$arity$1(person);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return cljs.core.constant$keyword$386.cljs$core$IFn$_invoke$arity$1(person);
}
})()], null);
});
omchaya.components.sidebar.people_widget = (function people_widget(p__21375,owner,opts){var map__21380 = p__21375;var map__21380__$1 = ((cljs.core.seq_QMARK_(map__21380))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21380):map__21380);var data = map__21380__$1;var search_filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21380__$1,cljs.core.constant$keyword$474);var channel_users_emails = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21380__$1,cljs.core.constant$keyword$496);if(typeof omchaya.components.sidebar.t21381 !== 'undefined')
{} else
{
/**
* @constructor
*/
omchaya.components.sidebar.t21381 = (function (channel_users_emails,search_filter,data,map__21380,opts,owner,p__21375,people_widget,meta21382){
this.channel_users_emails = channel_users_emails;
this.search_filter = search_filter;
this.data = data;
this.map__21380 = map__21380;
this.opts = opts;
this.owner = owner;
this.p__21375 = p__21375;
this.people_widget = people_widget;
this.meta21382 = meta21382;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
omchaya.components.sidebar.t21381.cljs$lang$type = true;
omchaya.components.sidebar.t21381.cljs$lang$ctorStr = "omchaya.components.sidebar/t21381";
omchaya.components.sidebar.t21381.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write(writer__3971__auto__,"omchaya.components.sidebar/t21381");
});
omchaya.components.sidebar.t21381.prototype.om$core$IRender$ = true;
omchaya.components.sidebar.t21381.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return sablono.interpreter.interpret((function (){var comm = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(self__.opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$370,cljs.core.constant$keyword$432], null));var re_filter = (cljs.core.truth_(self__.search_filter)?(new RegExp(self__.search_filter,"ig")):null);var channel_users = cljs.core.vals(cljs.core.select_keys(cljs.core.constant$keyword$351.cljs$core$IFn$_invoke$arity$1(self__.opts),self__.channel_users_emails));var fil_users = (cljs.core.truth_(re_filter)?cljs.core.filter(((function (comm,re_filter,channel_users){
return (function (p1__21374_SHARP_){var or__3403__auto__ = cljs.core.constant$keyword$384.cljs$core$IFn$_invoke$arity$1(p1__21374_SHARP_).match(re_filter);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = cljs.core.constant$keyword$385.cljs$core$IFn$_invoke$arity$1(p1__21374_SHARP_).match(re_filter);if(cljs.core.truth_(or__3403__auto____$1))
{return or__3403__auto____$1;
} else
{return cljs.core.constant$keyword$386.cljs$core$IFn$_invoke$arity$1(p1__21374_SHARP_).match(re_filter);
}
}
});})(comm,re_filter,channel_users))
,channel_users):channel_users);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$497,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(omchaya.components.sidebar.people_entry,comm),fil_users)], null);
})());
});
omchaya.components.sidebar.t21381.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21383){var self__ = this;
var _21383__$1 = this;return self__.meta21382;
});
omchaya.components.sidebar.t21381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21383,meta21382__$1){var self__ = this;
var _21383__$1 = this;return (new omchaya.components.sidebar.t21381(self__.channel_users_emails,self__.search_filter,self__.data,self__.map__21380,self__.opts,self__.owner,self__.p__21375,self__.people_widget,meta21382__$1));
});
omchaya.components.sidebar.__GT_t21381 = (function __GT_t21381(channel_users_emails__$1,search_filter__$1,data__$1,map__21380__$2,opts__$1,owner__$1,p__21375__$1,people_widget__$1,meta21382){return (new omchaya.components.sidebar.t21381(channel_users_emails__$1,search_filter__$1,data__$1,map__21380__$2,opts__$1,owner__$1,p__21375__$1,people_widget__$1,meta21382));
});
}
return (new omchaya.components.sidebar.t21381(channel_users_emails,search_filter,data,map__21380__$1,opts,owner,p__21375,people_widget,null));
});
omchaya.components.sidebar.current_user = (function current_user(comm,user){return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$498,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$413,"#",cljs.core.constant$keyword$440,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.constantly(false),(function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$499], null));
}))], null),omchaya.utils.gravatar_for(cljs.core.constant$keyword$385.cljs$core$IFn$_invoke$arity$1(user)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$500,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$332,{"height": "inherit"}], null)], null),cljs.core.constant$keyword$384.cljs$core$IFn$_invoke$arity$1(user)], null);
});
omchaya.components.sidebar.media_name = (function media_name(src){return goog.string.urlDecode(cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(src,/\//)),/\?/)));
});
omchaya.components.sidebar.playlist_entry = (function playlist_entry(comm,opts,entry){var src = cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(entry);var order = cljs.core.constant$keyword$356.cljs$core$IFn$_invoke$arity$1(entry);var name = omchaya.components.sidebar.media_name(src);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$495,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$353,src,cljs.core.constant$keyword$397,[cljs.core.str(cljs.core.constant$keyword$356.cljs$core$IFn$_invoke$arity$1(entry)),cljs.core.str(src)].join('')], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$356.cljs$core$IFn$_invoke$arity$1(entry),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$368,cljs.core.constant$keyword$367.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$350,cljs.core.constant$keyword$360], null))))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$332,{"background-color": "#ccc"}], null):null)], 0)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$415,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$332,{"cursor": "pointer"},cljs.core.constant$keyword$440,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.constantly(false),(function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$501,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [order,cljs.core.constant$keyword$367.cljs$core$IFn$_invoke$arity$1(opts)], null)], null));
}))], null),cljs.core.constant$keyword$356.cljs$core$IFn$_invoke$arity$1(entry),". ",name], null)], null);
});
omchaya.components.sidebar.playlist_widget = (function playlist_widget(p__21385,owner,opts){var map__21390 = p__21385;var map__21390__$1 = ((cljs.core.seq_QMARK_(map__21390))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21390):map__21390);var search_filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21390__$1,cljs.core.constant$keyword$474);var player = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21390__$1,cljs.core.constant$keyword$350);if(typeof omchaya.components.sidebar.t21391 !== 'undefined')
{} else
{
/**
* @constructor
*/
omchaya.components.sidebar.t21391 = (function (player,search_filter,map__21390,opts,owner,p__21385,playlist_widget,meta21392){
this.player = player;
this.search_filter = search_filter;
this.map__21390 = map__21390;
this.opts = opts;
this.owner = owner;
this.p__21385 = p__21385;
this.playlist_widget = playlist_widget;
this.meta21392 = meta21392;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
omchaya.components.sidebar.t21391.cljs$lang$type = true;
omchaya.components.sidebar.t21391.cljs$lang$ctorStr = "omchaya.components.sidebar/t21391";
omchaya.components.sidebar.t21391.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write(writer__3971__auto__,"omchaya.components.sidebar/t21391");
});
omchaya.components.sidebar.t21391.prototype.om$core$IRender$ = true;
omchaya.components.sidebar.t21391.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return sablono.interpreter.interpret((function (){var comm = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(self__.opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$370,cljs.core.constant$keyword$432], null));var re_filter = (cljs.core.truth_(self__.search_filter)?(new RegExp(self__.search_filter,"ig")):null);var fil_playlist = (cljs.core.truth_(re_filter)?cljs.core.filter(((function (comm,re_filter){
return (function (p1__21384_SHARP_){return omchaya.components.sidebar.media_name(cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(p1__21384_SHARP_)).match(re_filter);
});})(comm,re_filter))
,cljs.core.constant$keyword$363.cljs$core$IFn$_invoke$arity$1(self__.player)):cljs.core.constant$keyword$363.cljs$core$IFn$_invoke$arity$1(self__.player));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$502,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$497,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(omchaya.components.sidebar.playlist_entry,comm,self__.opts),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$356,fil_playlist))], null)], null);
})());
});
omchaya.components.sidebar.t21391.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21393){var self__ = this;
var _21393__$1 = this;return self__.meta21392;
});
omchaya.components.sidebar.t21391.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21393,meta21392__$1){var self__ = this;
var _21393__$1 = this;return (new omchaya.components.sidebar.t21391(self__.player,self__.search_filter,self__.map__21390,self__.opts,self__.owner,self__.p__21385,self__.playlist_widget,meta21392__$1));
});
omchaya.components.sidebar.__GT_t21391 = (function __GT_t21391(player__$1,search_filter__$1,map__21390__$2,opts__$1,owner__$1,p__21385__$1,playlist_widget__$1,meta21392){return (new omchaya.components.sidebar.t21391(player__$1,search_filter__$1,map__21390__$2,opts__$1,owner__$1,p__21385__$1,playlist_widget__$1,meta21392));
});
}
return (new omchaya.components.sidebar.t21391(player,search_filter,map__21390__$1,opts,owner,p__21385,playlist_widget,null));
});
omchaya.components.sidebar.playlist_action_widget = (function playlist_action_widget(p__21394,owner,opts){var map__21397 = p__21394;var map__21397__$1 = ((cljs.core.seq_QMARK_(map__21397))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21397):map__21397);var player = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21397__$1,cljs.core.constant$keyword$350);var comm = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$370,cljs.core.constant$keyword$432], null));var attrs21398 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$361.cljs$core$IFn$_invoke$arity$1(player),cljs.core.constant$keyword$364))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$503,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$332,{"cursor": "pointer"},cljs.core.constant$keyword$440,(function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$504,cljs.core.constant$keyword$367.cljs$core$IFn$_invoke$arity$1(opts)], null));
})], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$505,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$332,{"cursor": "pointer"},cljs.core.constant$keyword$440,(function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$506,cljs.core.constant$keyword$367.cljs$core$IFn$_invoke$arity$1(opts)], null));
})], null)], null));if(cljs.core.map_QMARK_(attrs21398))
{return React.DOM.div(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$333,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["dropzone"], null)], null),attrs21398], 0))),null);
} else
{return React.DOM.div({"className": "dropzone"},sablono.interpreter.interpret(attrs21398));
}
});
omchaya.components.sidebar.icon_map = new cljs.core.PersistentArrayMap(null, 3, ["png","img","jpg","img","jpeg","img"], null);
omchaya.components.sidebar.media_entry = (function media_entry(comm,media){var extension = cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(media),/\?/)),/\./));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$507,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$397,cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(media)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$415,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$413,"#",cljs.core.constant$keyword$440,cljs.core.constantly(false),cljs.core.constant$keyword$402,"_blank"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$419,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$344,[cljs.core.str("/assets/images/"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$3(omchaya.components.sidebar.icon_map,extension,"file")),cljs.core.str("_icon.png")].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$434,cljs.core.constant$keyword$349.cljs$core$IFn$_invoke$arity$1(media)], null)], null)], null);
});
omchaya.components.sidebar.media_widget = (function media_widget(p__21400,owner,opts){var map__21405 = p__21400;var map__21405__$1 = ((cljs.core.seq_QMARK_(map__21405))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21405):map__21405);var search_filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21405__$1,cljs.core.constant$keyword$474);var media = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21405__$1,cljs.core.constant$keyword$352);var channel_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21405__$1,cljs.core.constant$keyword$348);if(typeof omchaya.components.sidebar.t21406 !== 'undefined')
{} else
{
/**
* @constructor
*/
omchaya.components.sidebar.t21406 = (function (channel_id,media,search_filter,map__21405,opts,owner,p__21400,media_widget,meta21407){
this.channel_id = channel_id;
this.media = media;
this.search_filter = search_filter;
this.map__21405 = map__21405;
this.opts = opts;
this.owner = owner;
this.p__21400 = p__21400;
this.media_widget = media_widget;
this.meta21407 = meta21407;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
omchaya.components.sidebar.t21406.cljs$lang$type = true;
omchaya.components.sidebar.t21406.cljs$lang$ctorStr = "omchaya.components.sidebar/t21406";
omchaya.components.sidebar.t21406.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write(writer__3971__auto__,"omchaya.components.sidebar/t21406");
});
omchaya.components.sidebar.t21406.prototype.om$core$IRender$ = true;
omchaya.components.sidebar.t21406.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return sablono.interpreter.interpret((function (){var comm = cljs.core.constant$keyword$508.cljs$core$IFn$_invoke$arity$1(self__.opts);var re_filter = (cljs.core.truth_(self__.search_filter)?(new RegExp(self__.search_filter,"ig")):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$509,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(omchaya.components.sidebar.media_entry,comm),(cljs.core.truth_(re_filter)?cljs.core.filter((function (p1__21399_SHARP_){return cljs.core.constant$keyword$349.cljs$core$IFn$_invoke$arity$1(p1__21399_SHARP_).match(re_filter);
}),self__.media):self__.media))], null);
})());
});
omchaya.components.sidebar.t21406.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21408){var self__ = this;
var _21408__$1 = this;return self__.meta21407;
});
omchaya.components.sidebar.t21406.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21408,meta21407__$1){var self__ = this;
var _21408__$1 = this;return (new omchaya.components.sidebar.t21406(self__.channel_id,self__.media,self__.search_filter,self__.map__21405,self__.opts,self__.owner,self__.p__21400,self__.media_widget,meta21407__$1));
});
omchaya.components.sidebar.__GT_t21406 = (function __GT_t21406(channel_id__$1,media__$1,search_filter__$1,map__21405__$2,opts__$1,owner__$1,p__21400__$1,media_widget__$1,meta21407){return (new omchaya.components.sidebar.t21406(channel_id__$1,media__$1,search_filter__$1,map__21405__$2,opts__$1,owner__$1,p__21400__$1,media_widget__$1,meta21407));
});
}
return (new omchaya.components.sidebar.t21406(channel_id,media,search_filter,map__21405__$1,opts,owner,p__21400,media_widget,null));
});
omchaya.components.sidebar.media_action_widget = (function media_action_widget(p__21409,owner,opts){var map__21417 = p__21409;var map__21417__$1 = ((cljs.core.seq_QMARK_(map__21417))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21417):map__21417);var channel_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21417__$1,cljs.core.constant$keyword$348);return React.DOM.form({"id": "file_upload", "method": "post", "html": "{:multipart=>true}", "data-remote": "true", "action": [cljs.core.str("/channels/"),cljs.core.str(channel_id),cljs.core.str("/attachments.json")].join(''), "acceptCharset": "UTF-8"},React.DOM.div({"style": cljs.core.clj__GT_js({"display": "inline", "padding": "0", "margin": "0"})},(sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1({"value": "\u2713", "type": "hidden", "name": "utf8"}) : sablono.interpreter.input.call(null,{"value": "\u2713", "type": "hidden", "name": "utf8"})),(sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1({"value": "bpuDvAt5w97Cp4khpWE25tcTsD2vFEFpKwsIAG0m8fw=", "type": "hidden", "name": "authenticity_token"}) : sablono.interpreter.input.call(null,{"value": "bpuDvAt5w97Cp4khpWE25tcTsD2vFEFpKwsIAG0m8fw=", "type": "hidden", "name": "authenticity_token"}))),(sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1({"id": "channel_id_1", "type": "hidden", "name": [cljs.core.str("channel_id["),cljs.core.str(channel_id),cljs.core.str("]")].join('')}) : sablono.interpreter.input.call(null,{"id": "channel_id_1", "type": "hidden", "name": [cljs.core.str("channel_id["),cljs.core.str(channel_id),cljs.core.str("]")].join('')})),(sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1({"id": "file", "type": "file", "name": "file"}) : sablono.interpreter.input.call(null,{"id": "file", "type": "file", "name": "file"})),React.DOM.div({"className": "dropzone"},"Drop file here to upload"));
});
omchaya.components.sidebar.widget = (function widget(data,owner,opts){if(typeof omchaya.components.sidebar.t21427 !== 'undefined')
{} else
{
/**
* @constructor
*/
omchaya.components.sidebar.t21427 = (function (opts,owner,data,widget,meta21428){
this.opts = opts;
this.owner = owner;
this.data = data;
this.widget = widget;
this.meta21428 = meta21428;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
omchaya.components.sidebar.t21427.cljs$lang$type = true;
omchaya.components.sidebar.t21427.cljs$lang$ctorStr = "omchaya.components.sidebar/t21427";
omchaya.components.sidebar.t21427.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write(writer__3971__auto__,"omchaya.components.sidebar/t21427");
});
omchaya.components.sidebar.t21427.prototype.om$core$IRender$ = true;
omchaya.components.sidebar.t21427.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return sablono.interpreter.interpret((function (){var comm = cljs.core.constant$keyword$508.cljs$core$IFn$_invoke$arity$1(self__.opts);return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$510,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$511,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$419,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$344,cljs.core.constant$keyword$512.cljs$core$IFn$_invoke$arity$1(self__.opts)], null)], null),cljs.core.constant$keyword$353.cljs$core$IFn$_invoke$arity$1(self__.opts)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$513,om.core.build.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$514.cljs$core$IFn$_invoke$arity$1(self__.opts),cljs.core.constant$keyword$515.cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$399,cljs.core.constant$keyword$516.cljs$core$IFn$_invoke$arity$1(self__.data)], null))], null),(cljs.core.truth_(cljs.core.constant$keyword$517.cljs$core$IFn$_invoke$arity$1(self__.opts))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$518,om.core.build.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$517.cljs$core$IFn$_invoke$arity$1(self__.opts),cljs.core.constant$keyword$519.cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$399,cljs.core.constant$keyword$520.cljs$core$IFn$_invoke$arity$1(self__.data)], null))], null):null)], null);
})());
});
omchaya.components.sidebar.t21427.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21429){var self__ = this;
var _21429__$1 = this;return self__.meta21428;
});
omchaya.components.sidebar.t21427.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21429,meta21428__$1){var self__ = this;
var _21429__$1 = this;return (new omchaya.components.sidebar.t21427(self__.opts,self__.owner,self__.data,self__.widget,meta21428__$1));
});
omchaya.components.sidebar.__GT_t21427 = (function __GT_t21427(opts__$1,owner__$1,data__$1,widget__$1,meta21428){return (new omchaya.components.sidebar.t21427(opts__$1,owner__$1,data__$1,widget__$1,meta21428));
});
}
return (new omchaya.components.sidebar.t21427(opts,owner,data,widget,null));
});
omchaya.components.sidebar.sidebar = (function sidebar(data,owner,opts){if(typeof omchaya.components.sidebar.t21433 !== 'undefined')
{} else
{
/**
* @constructor
*/
omchaya.components.sidebar.t21433 = (function (opts,owner,data,sidebar,meta21434){
this.opts = opts;
this.owner = owner;
this.data = data;
this.sidebar = sidebar;
this.meta21434 = meta21434;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
omchaya.components.sidebar.t21433.cljs$lang$type = true;
omchaya.components.sidebar.t21433.cljs$lang$ctorStr = "omchaya.components.sidebar/t21433";
omchaya.components.sidebar.t21433.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write(writer__3971__auto__,"omchaya.components.sidebar/t21433");
});
omchaya.components.sidebar.t21433.prototype.om$core$IRender$ = true;
omchaya.components.sidebar.t21433.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return sablono.interpreter.interpret((function (){var comm = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(self__.opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$370,cljs.core.constant$keyword$432], null));var channel = cljs.core.constant$keyword$475.cljs$core$IFn$_invoke$arity$1(self__.data);var settings = cljs.core.constant$keyword$366.cljs$core$IFn$_invoke$arity$1(self__.data);var search_filter = cljs.core.constant$keyword$474.cljs$core$IFn$_invoke$arity$1(self__.data);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$521,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$522,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$333,(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$375,cljs.core.constant$keyword$380,cljs.core.constant$keyword$381], null)))?"open-menu":null)], null),omchaya.components.sidebar.current_user(comm,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(self__.opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$351,cljs.core.constant$keyword$369.cljs$core$IFn$_invoke$arity$1(self__.opts)], null))),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$523,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$417], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$417,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$415,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$413,"#",cljs.core.constant$keyword$440,(function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$524], null));
})], null),"Edit Account"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$417,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$415,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$414,"nofollow",cljs.core.constant$keyword$413,"#",cljs.core.constant$keyword$440,(function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$525], null));
})], null),"Logout"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$417,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$415,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$413,"#",cljs.core.constant$keyword$440,(function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$526], null));
})], null),"Help"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$417,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$415,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$413,"#",cljs.core.constant$keyword$440,(function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$527], null));
})], null),"About Omchaya"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$528,om.core.build.cljs$core$IFn$_invoke$arity$3(omchaya.components.sidebar.widget,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$515,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$496,cljs.core.constant$keyword$351.cljs$core$IFn$_invoke$arity$1(channel),cljs.core.constant$keyword$474,search_filter], null),cljs.core.constant$keyword$516,self__.opts], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$399,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$353,"People",cljs.core.constant$keyword$512,"/assets/images/people_icon.png",cljs.core.constant$keyword$514,omchaya.components.sidebar.people_widget], null)], null)),om.core.build.cljs$core$IFn$_invoke$arity$3(omchaya.components.sidebar.widget,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$515,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$350,cljs.core.constant$keyword$350.cljs$core$IFn$_invoke$arity$1(channel),cljs.core.constant$keyword$474,search_filter], null),cljs.core.constant$keyword$516,self__.opts,cljs.core.constant$keyword$519,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$350,cljs.core.constant$keyword$350.cljs$core$IFn$_invoke$arity$1(channel)], null),cljs.core.constant$keyword$520,self__.opts], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$399,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$353,"Playlist",cljs.core.constant$keyword$512,"/assets/images/video_icon.png",cljs.core.constant$keyword$514,omchaya.components.sidebar.playlist_widget,cljs.core.constant$keyword$517,omchaya.components.sidebar.playlist_action_widget], null)], null)),om.core.build.cljs$core$IFn$_invoke$arity$3(omchaya.components.sidebar.widget,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$515,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$474,search_filter,cljs.core.constant$keyword$352,cljs.core.constant$keyword$352.cljs$core$IFn$_invoke$arity$1(channel),cljs.core.constant$keyword$348,cljs.core.constant$keyword$357.cljs$core$IFn$_invoke$arity$1(channel)], null),cljs.core.constant$keyword$516,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$508,comm], null),cljs.core.constant$keyword$519,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$348,cljs.core.constant$keyword$357.cljs$core$IFn$_invoke$arity$1(channel)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$399,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$353,"My Media",cljs.core.constant$keyword$512,"/assets/images/media_icon.png",cljs.core.constant$keyword$514,omchaya.components.sidebar.media_widget,cljs.core.constant$keyword$517,omchaya.components.sidebar.media_action_widget], null)], null))], null)], null);
})());
});
omchaya.components.sidebar.t21433.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21435){var self__ = this;
var _21435__$1 = this;return self__.meta21434;
});
omchaya.components.sidebar.t21433.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21435,meta21434__$1){var self__ = this;
var _21435__$1 = this;return (new omchaya.components.sidebar.t21433(self__.opts,self__.owner,self__.data,self__.sidebar,meta21434__$1));
});
omchaya.components.sidebar.__GT_t21433 = (function __GT_t21433(opts__$1,owner__$1,data__$1,sidebar__$1,meta21434){return (new omchaya.components.sidebar.t21433(opts__$1,owner__$1,data__$1,sidebar__$1,meta21434));
});
}
return (new omchaya.components.sidebar.t21433(opts,owner,data,sidebar,null));
});
