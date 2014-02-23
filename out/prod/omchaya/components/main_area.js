// Compiled by ClojureScript 0.0-2156
goog.provide('omchaya.components.main_area');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('omchaya.plugins');
goog.require('omchaya.utils');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('om.core');
goog.require('clojure.string');
goog.require('omchaya.datetime');
goog.require('om.core');
goog.require('omchaya.datetime');
goog.require('clojure.string');
goog.require('omchaya.utils');
goog.require('cljs.core.async');
goog.require('omchaya.plugins');
omchaya.components.main_area.delimiter_re = / /;
omchaya.components.main_area.activity_content = (function activity_content(current_user_email,users,settings,author,activity){var content = omchaya.plugins.hex_embed(omchaya.plugins.rgb_embed(omchaya.plugins.links(omchaya.plugins.emoticons(omchaya.plugins.slash_play(omchaya.plugins.slash_me(omchaya.plugins.mentions(omchaya.plugins.pastie(clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$347.cljs$core$IFn$_invoke$arity$1(activity),omchaya.components.main_area.delimiter_re)),current_user_email,users,settings,author),current_user_email,users))))));return cljs.core.interpose(" ",content);
});
omchaya.components.main_area.activity_entry = (function activity_entry(current_user_email,users,settings,author,activity){return cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$456,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$357,[cljs.core.str("activity-"),cljs.core.str(cljs.core.constant$keyword$357.cljs$core$IFn$_invoke$arity$1(activity))].join(''),cljs.core.constant$keyword$333,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_user_email,cljs.core.constant$keyword$385.cljs$core$IFn$_invoke$arity$1(author)))?"current_user":null),cljs.core.constant$keyword$397,cljs.core.constant$keyword$345.cljs$core$IFn$_invoke$arity$1(activity)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$457,[cljs.core.str(omchaya.datetime.time_ago(cljs.core.constant$keyword$345.cljs$core$IFn$_invoke$arity$1(activity))),cljs.core.str(" ago")].join('')], null),omchaya.utils.gravatar_for(cljs.core.constant$keyword$385.cljs$core$IFn$_invoke$arity$1(author)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$458,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$459,(function (){var or__3403__auto__ = cljs.core.constant$keyword$384.cljs$core$IFn$_invoke$arity$1(author);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return cljs.core.constant$keyword$385.cljs$core$IFn$_invoke$arity$1(author);
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$460,omchaya.components.main_area.activity_content(current_user_email,users,settings,author,activity)], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (media){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$461,media], null);
}),cljs.core.remove(cljs.core.string_QMARK_,omchaya.plugins.vimeo_embed(omchaya.plugins.youtube_embed(omchaya.plugins.image_embed(clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$347.cljs$core$IFn$_invoke$arity$1(activity),omchaya.components.main_area.delimiter_re))))))], null));
});
omchaya.components.main_area.chatbox = (function chatbox(comm,opts){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$462,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$463,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$464,(function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$467], null));
}),cljs.core.constant$keyword$465,(function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$468], null));
}),cljs.core.constant$keyword$466,(function (p1__21355_SHARP_){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__21355_SHARP_.which,13))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$469], null));
} else
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$470,p1__21355_SHARP_.target.value], null));
}
})], null),(cljs.core.truth_(cljs.core.constant$keyword$471.cljs$core$IFn$_invoke$arity$1(opts))?null:new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$312,cljs.core.constant$keyword$472.cljs$core$IFn$_invoke$arity$1(opts)], null))], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$473,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$440,(function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$469], null));
})], null),"Post"], null)], null);
});
omchaya.components.main_area.activities_list = (function activities_list(filtered_activities,opts){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21356_SHARP_){var author = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$351,cljs.core.constant$keyword$346.cljs$core$IFn$_invoke$arity$1(p1__21356_SHARP_)], null));return omchaya.components.main_area.activity_entry(cljs.core.constant$keyword$369.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$351.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$366.cljs$core$IFn$_invoke$arity$1(opts),author,p1__21356_SHARP_);
}),filtered_activities);
});
omchaya.components.main_area.main_area = (function main_area(p__21358,owner,opts){var map__21363 = p__21358;var map__21363__$1 = ((cljs.core.seq_QMARK_(map__21363))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21363):map__21363);var search_filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21363__$1,cljs.core.constant$keyword$474);var channel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21363__$1,cljs.core.constant$keyword$475);if(typeof omchaya.components.main_area.t21364 !== 'undefined')
{} else
{
/**
* @constructor
*/
omchaya.components.main_area.t21364 = (function (channel,search_filter,map__21363,opts,owner,p__21358,main_area,meta21365){
this.channel = channel;
this.search_filter = search_filter;
this.map__21363 = map__21363;
this.opts = opts;
this.owner = owner;
this.p__21358 = p__21358;
this.main_area = main_area;
this.meta21365 = meta21365;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
omchaya.components.main_area.t21364.cljs$lang$type = true;
omchaya.components.main_area.t21364.cljs$lang$ctorStr = "omchaya.components.main-area/t21364";
omchaya.components.main_area.t21364.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write(writer__3971__auto__,"omchaya.components.main-area/t21364");
});
omchaya.components.main_area.t21364.prototype.om$core$IRender$ = true;
omchaya.components.main_area.t21364.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return sablono.interpreter.interpret((function (){var comm = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(self__.opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$370,cljs.core.constant$keyword$432], null));var re_filter = (cljs.core.truth_(self__.search_filter)?(new RegExp(self__.search_filter,"ig")):null);var activities = cljs.core.constant$keyword$354.cljs$core$IFn$_invoke$arity$1(self__.channel);var filtered_activities = (cljs.core.truth_(re_filter)?cljs.core.filter(((function (comm,re_filter,activities){
return (function (p1__21357_SHARP_){return cljs.core.constant$keyword$347.cljs$core$IFn$_invoke$arity$1(p1__21357_SHARP_).match(re_filter);
});})(comm,re_filter,activities))
,activities):activities);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$476,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$477,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$478,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$413,"#",cljs.core.constant$keyword$440,(function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$479], null));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$480], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$481,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$413,"#",cljs.core.constant$keyword$440,(function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$482], null));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$483], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$484,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$413,"#/",cljs.core.constant$keyword$440,cljs.core.constantly(false)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$419,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$344,"/assets/images/logo.png",cljs.core.constant$keyword$420,"Omchaya",cljs.core.constant$keyword$353,"Omchaya - A Kandan Client"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$485,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$486,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$357,[cljs.core.str("channels-"),cljs.core.str(cljs.core.constant$keyword$357.cljs$core$IFn$_invoke$arity$1(self__.channel))].join(''),cljs.core.constant$keyword$333,(cljs.core.truth_(cljs.core.constant$keyword$358.cljs$core$IFn$_invoke$arity$1(self__.channel))?"active":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$487,(cljs.core.truth_(cljs.core.constant$keyword$488.cljs$core$IFn$_invoke$arity$1(self__.channel))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$489,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$490], null),"Loading previous messages"], null):null),omchaya.components.main_area.activities_list(filtered_activities,self__.opts)], null),omchaya.components.main_area.chatbox(comm,self__.opts)], null)], null)], null);
})());
});
omchaya.components.main_area.t21364.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21366){var self__ = this;
var _21366__$1 = this;return self__.meta21365;
});
omchaya.components.main_area.t21364.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21366,meta21365__$1){var self__ = this;
var _21366__$1 = this;return (new omchaya.components.main_area.t21364(self__.channel,self__.search_filter,self__.map__21363,self__.opts,self__.owner,self__.p__21358,self__.main_area,meta21365__$1));
});
omchaya.components.main_area.__GT_t21364 = (function __GT_t21364(channel__$1,search_filter__$1,map__21363__$2,opts__$1,owner__$1,p__21358__$1,main_area__$1,meta21365){return (new omchaya.components.main_area.t21364(channel__$1,search_filter__$1,map__21363__$2,opts__$1,owner__$1,p__21358__$1,main_area__$1,meta21365));
});
}
return (new omchaya.components.main_area.t21364(channel,search_filter,map__21363__$1,opts,owner,p__21358,main_area,null));
});
