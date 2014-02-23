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
omchaya.components.sidebar.people_entry = (function people_entry(comm,person){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.user","li.user",1132196110),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",1124275658),(function (){var or__3403__auto__ = new cljs.core.Keyword(null,"full-name","full-name",3585519227).cljs$core$IFn$_invoke$arity$1(person);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = new cljs.core.Keyword(null,"username","username",748190792).cljs$core$IFn$_invoke$arity$1(person);if(cljs.core.truth_(or__3403__auto____$1))
{return or__3403__auto____$1;
} else
{return new cljs.core.Keyword(null,"email","email",1110523662).cljs$core$IFn$_invoke$arity$1(person);
}
}
})(),new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"email","email",1110523662).cljs$core$IFn$_invoke$arity$1(person)], null),omchaya.utils.gravatar_for.call(null,new cljs.core.Keyword(null,"email","email",1110523662).cljs$core$IFn$_invoke$arity$1(person)),(function (){var or__3403__auto__ = new cljs.core.Keyword(null,"full-name","full-name",3585519227).cljs$core$IFn$_invoke$arity$1(person);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return new cljs.core.Keyword(null,"username","username",748190792).cljs$core$IFn$_invoke$arity$1(person);
}
})()], null);
});
omchaya.components.sidebar.people_widget = (function people_widget(p__10423,owner,opts){var map__10428 = p__10423;var map__10428__$1 = ((cljs.core.seq_QMARK_.call(null,map__10428))?cljs.core.apply.call(null,cljs.core.hash_map,map__10428):map__10428);var data = map__10428__$1;var search_filter = cljs.core.get.call(null,map__10428__$1,new cljs.core.Keyword(null,"search-filter","search-filter",674207407));var channel_users_emails = cljs.core.get.call(null,map__10428__$1,new cljs.core.Keyword(null,"channel-users-emails","channel-users-emails",2413740984));if(typeof omchaya.components.sidebar.t10429 !== 'undefined')
{} else
{
/**
* @constructor
*/
omchaya.components.sidebar.t10429 = (function (channel_users_emails,search_filter,data,map__10428,opts,owner,p__10423,people_widget,meta10430){
this.channel_users_emails = channel_users_emails;
this.search_filter = search_filter;
this.data = data;
this.map__10428 = map__10428;
this.opts = opts;
this.owner = owner;
this.p__10423 = p__10423;
this.people_widget = people_widget;
this.meta10430 = meta10430;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
omchaya.components.sidebar.t10429.cljs$lang$type = true;
omchaya.components.sidebar.t10429.cljs$lang$ctorStr = "omchaya.components.sidebar/t10429";
omchaya.components.sidebar.t10429.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"omchaya.components.sidebar/t10429");
});
omchaya.components.sidebar.t10429.prototype.om$core$IRender$ = true;
omchaya.components.sidebar.t10429.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return sablono.interpreter.interpret.call(null,(function (){var comm = cljs.core.get_in.call(null,self__.opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",1108747865),new cljs.core.Keyword(null,"controls","controls",4741937704)], null));var re_filter = (cljs.core.truth_(self__.search_filter)?(new RegExp(self__.search_filter,"ig")):null);var channel_users = cljs.core.vals.call(null,cljs.core.select_keys.call(null,new cljs.core.Keyword(null,"users","users",1125482874).cljs$core$IFn$_invoke$arity$1(self__.opts),self__.channel_users_emails));var fil_users = (cljs.core.truth_(re_filter)?cljs.core.filter.call(null,((function (comm,re_filter,channel_users){
return (function (p1__10422_SHARP_){var or__3403__auto__ = new cljs.core.Keyword(null,"full-name","full-name",3585519227).cljs$core$IFn$_invoke$arity$1(p1__10422_SHARP_).match(re_filter);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = new cljs.core.Keyword(null,"email","email",1110523662).cljs$core$IFn$_invoke$arity$1(p1__10422_SHARP_).match(re_filter);if(cljs.core.truth_(or__3403__auto____$1))
{return or__3403__auto____$1;
} else
{return new cljs.core.Keyword(null,"username","username",748190792).cljs$core$IFn$_invoke$arity$1(p1__10422_SHARP_).match(re_filter);
}
}
});})(comm,re_filter,channel_users))
,channel_users):channel_users);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.user_list","ul.user_list",2324064621),cljs.core.map.call(null,cljs.core.partial.call(null,omchaya.components.sidebar.people_entry,comm),fil_users)], null);
})());
});
omchaya.components.sidebar.t10429.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10431){var self__ = this;
var _10431__$1 = this;return self__.meta10430;
});
omchaya.components.sidebar.t10429.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10431,meta10430__$1){var self__ = this;
var _10431__$1 = this;return (new omchaya.components.sidebar.t10429(self__.channel_users_emails,self__.search_filter,self__.data,self__.map__10428,self__.opts,self__.owner,self__.p__10423,self__.people_widget,meta10430__$1));
});
omchaya.components.sidebar.__GT_t10429 = (function __GT_t10429(channel_users_emails__$1,search_filter__$1,data__$1,map__10428__$2,opts__$1,owner__$1,p__10423__$1,people_widget__$1,meta10430){return (new omchaya.components.sidebar.t10429(channel_users_emails__$1,search_filter__$1,data__$1,map__10428__$2,opts__$1,owner__$1,p__10423__$1,people_widget__$1,meta10430));
});
}
return (new omchaya.components.sidebar.t10429(channel_users_emails,search_filter,data,map__10428__$1,opts,owner,p__10423,people_widget,null));
});
omchaya.components.sidebar.current_user = (function current_user(comm,user){return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.user-menu-toggle","a.user-menu-toggle",1726759391),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",1017115293),"#",new cljs.core.Keyword(null,"on-click","on-click",1416542092),cljs.core.comp.call(null,cljs.core.constantly.call(null,false),(function (){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-menu-toggled","user-menu-toggled",567658326)], null));
}))], null),omchaya.utils.gravatar_for.call(null,new cljs.core.Keyword(null,"email","email",1110523662).cljs$core$IFn$_invoke$arity$1(user)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-angle.button.right","i.icon-angle.button.right",4652336220),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),{"height": "inherit"}], null)], null),new cljs.core.Keyword(null,"full-name","full-name",3585519227).cljs$core$IFn$_invoke$arity$1(user)], null);
});
omchaya.components.sidebar.media_name = (function media_name(src){return goog.string.urlDecode(cljs.core.first.call(null,clojure.string.split.call(null,cljs.core.last.call(null,clojure.string.split.call(null,src,/\//)),/\?/)));
});
omchaya.components.sidebar.playlist_entry = (function playlist_entry(comm,opts,entry){var src = new cljs.core.Keyword(null,"src","src",1014018390).cljs$core$IFn$_invoke$arity$1(entry);var order = new cljs.core.Keyword(null,"order","order",1119910592).cljs$core$IFn$_invoke$arity$1(entry);var name = omchaya.components.sidebar.media_name.call(null,src);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.user","li.user",1132196110),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",1124275658),src,new cljs.core.Keyword(null,"key","key",1014010321),[cljs.core.str(new cljs.core.Keyword(null,"order","order",1119910592).cljs$core$IFn$_invoke$arity$1(entry)),cljs.core.str(src)].join('')], null),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"order","order",1119910592).cljs$core$IFn$_invoke$arity$1(entry),cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",2446530370),new cljs.core.Keyword(null,"selected-channel","selected-channel",2473753411).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"player","player",4323118675),new cljs.core.Keyword(null,"playing-order","playing-order",3298952289)], null))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),{"background-color": "#ccc"}], null):null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",1123684643),{"cursor": "pointer"},new cljs.core.Keyword(null,"on-click","on-click",1416542092),cljs.core.comp.call(null,cljs.core.constantly.call(null,false),(function (){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playlist-entry-played","playlist-entry-played",1677366299),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [order,new cljs.core.Keyword(null,"selected-channel","selected-channel",2473753411).cljs$core$IFn$_invoke$arity$1(opts)], null)], null));
}))], null),new cljs.core.Keyword(null,"order","order",1119910592).cljs$core$IFn$_invoke$arity$1(entry),". ",name], null)], null);
});
omchaya.components.sidebar.playlist_widget = (function playlist_widget(p__10433,owner,opts){var map__10438 = p__10433;var map__10438__$1 = ((cljs.core.seq_QMARK_.call(null,map__10438))?cljs.core.apply.call(null,cljs.core.hash_map,map__10438):map__10438);var search_filter = cljs.core.get.call(null,map__10438__$1,new cljs.core.Keyword(null,"search-filter","search-filter",674207407));var player = cljs.core.get.call(null,map__10438__$1,new cljs.core.Keyword(null,"player","player",4323118675));if(typeof omchaya.components.sidebar.t10439 !== 'undefined')
{} else
{
/**
* @constructor
*/
omchaya.components.sidebar.t10439 = (function (player,search_filter,map__10438,opts,owner,p__10433,playlist_widget,meta10440){
this.player = player;
this.search_filter = search_filter;
this.map__10438 = map__10438;
this.opts = opts;
this.owner = owner;
this.p__10433 = p__10433;
this.playlist_widget = playlist_widget;
this.meta10440 = meta10440;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
omchaya.components.sidebar.t10439.cljs$lang$type = true;
omchaya.components.sidebar.t10439.cljs$lang$ctorStr = "omchaya.components.sidebar/t10439";
omchaya.components.sidebar.t10439.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"omchaya.components.sidebar/t10439");
});
omchaya.components.sidebar.t10439.prototype.om$core$IRender$ = true;
omchaya.components.sidebar.t10439.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return sablono.interpreter.interpret.call(null,(function (){var comm = cljs.core.get_in.call(null,self__.opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",1108747865),new cljs.core.Keyword(null,"controls","controls",4741937704)], null));var re_filter = (cljs.core.truth_(self__.search_filter)?(new RegExp(self__.search_filter,"ig")):null);var fil_playlist = (cljs.core.truth_(re_filter)?cljs.core.filter.call(null,((function (comm,re_filter){
return (function (p1__10432_SHARP_){return omchaya.components.sidebar.media_name.call(null,new cljs.core.Keyword(null,"src","src",1014018390).cljs$core$IFn$_invoke$arity$1(p1__10432_SHARP_)).match(re_filter);
});})(comm,re_filter))
,new cljs.core.Keyword(null,"playlist","playlist",2893378884).cljs$core$IFn$_invoke$arity$1(self__.player)):new cljs.core.Keyword(null,"playlist","playlist",2893378884).cljs$core$IFn$_invoke$arity$1(self__.player));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.user_list","ul.user_list",2324064621),cljs.core.map.call(null,cljs.core.partial.call(null,omchaya.components.sidebar.playlist_entry,comm,self__.opts),cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"order","order",1119910592),fil_playlist))], null)], null);
})());
});
omchaya.components.sidebar.t10439.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10441){var self__ = this;
var _10441__$1 = this;return self__.meta10440;
});
omchaya.components.sidebar.t10439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10441,meta10440__$1){var self__ = this;
var _10441__$1 = this;return (new omchaya.components.sidebar.t10439(self__.player,self__.search_filter,self__.map__10438,self__.opts,self__.owner,self__.p__10433,self__.playlist_widget,meta10440__$1));
});
omchaya.components.sidebar.__GT_t10439 = (function __GT_t10439(player__$1,search_filter__$1,map__10438__$2,opts__$1,owner__$1,p__10433__$1,playlist_widget__$1,meta10440){return (new omchaya.components.sidebar.t10439(player__$1,search_filter__$1,map__10438__$2,opts__$1,owner__$1,p__10433__$1,playlist_widget__$1,meta10440));
});
}
return (new omchaya.components.sidebar.t10439(player,search_filter,map__10438__$1,opts,owner,p__10433,playlist_widget,null));
});
omchaya.components.sidebar.playlist_action_widget = (function playlist_action_widget(p__10442,owner,opts){var map__10445 = p__10442;var map__10445__$1 = ((cljs.core.seq_QMARK_.call(null,map__10445))?cljs.core.apply.call(null,cljs.core.hash_map,map__10445):map__10445);var player = cljs.core.get.call(null,map__10445__$1,new cljs.core.Keyword(null,"player","player",4323118675));var comm = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",1108747865),new cljs.core.Keyword(null,"controls","controls",4741937704)], null));var attrs10446 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"state","state",1123661827).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"playing","playing",520340384)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-pause","i.fa.fa-pause",3144543140),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",1123684643),{"cursor": "pointer"},new cljs.core.Keyword(null,"on-click","on-click",1416542092),(function (){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-player-stopped","audio-player-stopped",1820835114),new cljs.core.Keyword(null,"selected-channel","selected-channel",2473753411).cljs$core$IFn$_invoke$arity$1(opts)], null));
})], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-play","i.fa.fa-play",4546327786),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",1123684643),{"cursor": "pointer"},new cljs.core.Keyword(null,"on-click","on-click",1416542092),(function (){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-player-started","audio-player-started",1807969246),new cljs.core.Keyword(null,"selected-channel","selected-channel",2473753411).cljs$core$IFn$_invoke$arity$1(opts)], null));
})], null)], null));if(cljs.core.map_QMARK_.call(null,attrs10446))
{return React.DOM.div(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["dropzone"], null)], null),attrs10446)),null);
} else
{return React.DOM.div({"className": "dropzone"},sablono.interpreter.interpret.call(null,attrs10446));
}
});
omchaya.components.sidebar.icon_map = new cljs.core.PersistentArrayMap(null, 3, ["png","img","jpg","img","jpeg","img"], null);
omchaya.components.sidebar.media_entry = (function media_entry(comm,media){var extension = cljs.core.last.call(null,clojure.string.split.call(null,cljs.core.first.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"src","src",1014018390).cljs$core$IFn$_invoke$arity$1(media),/\?/)),/\./));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.file_item","li.file_item",602318903),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"src","src",1014018390).cljs$core$IFn$_invoke$arity$1(media)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",1017115293),"#",new cljs.core.Keyword(null,"on-click","on-click",1416542092),cljs.core.constantly.call(null,false),new cljs.core.Keyword(null,"target","target",4427965699),"_blank"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),[cljs.core.str("/assets/images/"),cljs.core.str(cljs.core.get.call(null,omchaya.components.sidebar.icon_map,extension,"file")),cljs.core.str("_icon.png")].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(media)], null)], null)], null);
});
omchaya.components.sidebar.media_widget = (function media_widget(p__10448,owner,opts){var map__10453 = p__10448;var map__10453__$1 = ((cljs.core.seq_QMARK_.call(null,map__10453))?cljs.core.apply.call(null,cljs.core.hash_map,map__10453):map__10453);var search_filter = cljs.core.get.call(null,map__10453__$1,new cljs.core.Keyword(null,"search-filter","search-filter",674207407));var media = cljs.core.get.call(null,map__10453__$1,new cljs.core.Keyword(null,"media","media",1117676374));var channel_id = cljs.core.get.call(null,map__10453__$1,new cljs.core.Keyword(null,"channel-id","channel-id",3378014615));if(typeof omchaya.components.sidebar.t10454 !== 'undefined')
{} else
{
/**
* @constructor
*/
omchaya.components.sidebar.t10454 = (function (channel_id,media,search_filter,map__10453,opts,owner,p__10448,media_widget,meta10455){
this.channel_id = channel_id;
this.media = media;
this.search_filter = search_filter;
this.map__10453 = map__10453;
this.opts = opts;
this.owner = owner;
this.p__10448 = p__10448;
this.media_widget = media_widget;
this.meta10455 = meta10455;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
omchaya.components.sidebar.t10454.cljs$lang$type = true;
omchaya.components.sidebar.t10454.cljs$lang$ctorStr = "omchaya.components.sidebar/t10454";
omchaya.components.sidebar.t10454.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"omchaya.components.sidebar/t10454");
});
omchaya.components.sidebar.t10454.prototype.om$core$IRender$ = true;
omchaya.components.sidebar.t10454.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return sablono.interpreter.interpret.call(null,(function (){var comm = new cljs.core.Keyword(null,"comm","comm",1016963710).cljs$core$IFn$_invoke$arity$1(self__.opts);var re_filter = (cljs.core.truth_(self__.search_filter)?(new RegExp(self__.search_filter,"ig")):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.file_list","ul.file_list",668255836),cljs.core.map.call(null,cljs.core.partial.call(null,omchaya.components.sidebar.media_entry,comm),(cljs.core.truth_(re_filter)?cljs.core.filter.call(null,(function (p1__10447_SHARP_){return new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(p1__10447_SHARP_).match(re_filter);
}),self__.media):self__.media))], null);
})());
});
omchaya.components.sidebar.t10454.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10456){var self__ = this;
var _10456__$1 = this;return self__.meta10455;
});
omchaya.components.sidebar.t10454.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10456,meta10455__$1){var self__ = this;
var _10456__$1 = this;return (new omchaya.components.sidebar.t10454(self__.channel_id,self__.media,self__.search_filter,self__.map__10453,self__.opts,self__.owner,self__.p__10448,self__.media_widget,meta10455__$1));
});
omchaya.components.sidebar.__GT_t10454 = (function __GT_t10454(channel_id__$1,media__$1,search_filter__$1,map__10453__$2,opts__$1,owner__$1,p__10448__$1,media_widget__$1,meta10455){return (new omchaya.components.sidebar.t10454(channel_id__$1,media__$1,search_filter__$1,map__10453__$2,opts__$1,owner__$1,p__10448__$1,media_widget__$1,meta10455));
});
}
return (new omchaya.components.sidebar.t10454(channel_id,media,search_filter,map__10453__$1,opts,owner,p__10448,media_widget,null));
});
omchaya.components.sidebar.media_action_widget = (function media_action_widget(p__10457,owner,opts){var map__10465 = p__10457;var map__10465__$1 = ((cljs.core.seq_QMARK_.call(null,map__10465))?cljs.core.apply.call(null,cljs.core.hash_map,map__10465):map__10465);var channel_id = cljs.core.get.call(null,map__10465__$1,new cljs.core.Keyword(null,"channel-id","channel-id",3378014615));return React.DOM.form({"id": "file_upload", "method": "post", "html": "{:multipart=>true}", "data-remote": "true", "action": [cljs.core.str("/channels/"),cljs.core.str(channel_id),cljs.core.str("/attachments.json")].join(''), "acceptCharset": "UTF-8"},React.DOM.div({"style": cljs.core.clj__GT_js.call(null,{"display": "inline", "padding": "0", "margin": "0"})},sablono.interpreter.input.call(null,{"value": "\u2713", "type": "hidden", "name": "utf8"}),sablono.interpreter.input.call(null,{"value": "bpuDvAt5w97Cp4khpWE25tcTsD2vFEFpKwsIAG0m8fw=", "type": "hidden", "name": "authenticity_token"})),sablono.interpreter.input.call(null,{"id": "channel_id_1", "type": "hidden", "name": [cljs.core.str("channel_id["),cljs.core.str(channel_id),cljs.core.str("]")].join('')}),sablono.interpreter.input.call(null,{"id": "file", "type": "file", "name": "file"}),React.DOM.div({"className": "dropzone"},"Drop file here to upload"));
});
omchaya.components.sidebar.widget = (function widget(data,owner,opts){if(typeof omchaya.components.sidebar.t10475 !== 'undefined')
{} else
{
/**
* @constructor
*/
omchaya.components.sidebar.t10475 = (function (opts,owner,data,widget,meta10476){
this.opts = opts;
this.owner = owner;
this.data = data;
this.widget = widget;
this.meta10476 = meta10476;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
omchaya.components.sidebar.t10475.cljs$lang$type = true;
omchaya.components.sidebar.t10475.cljs$lang$ctorStr = "omchaya.components.sidebar/t10475";
omchaya.components.sidebar.t10475.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"omchaya.components.sidebar/t10475");
});
omchaya.components.sidebar.t10475.prototype.om$core$IRender$ = true;
omchaya.components.sidebar.t10475.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return sablono.interpreter.interpret.call(null,(function (){var comm = new cljs.core.Keyword(null,"comm","comm",1016963710).cljs$core$IFn$_invoke$arity$1(self__.opts);return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.widget","div.widget",2908838323),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.widget-header","h5.widget-header",508882503),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),new cljs.core.Keyword(null,"icon","icon",1017130987).cljs$core$IFn$_invoke$arity$1(self__.opts)], null)], null),new cljs.core.Keyword(null,"title","title",1124275658).cljs$core$IFn$_invoke$arity$1(self__.opts)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.widget-content","div.widget-content",4299661407),om.core.build.call(null,new cljs.core.Keyword(null,"content-comp","content-comp",1799058261).cljs$core$IFn$_invoke$arity$1(self__.opts),new cljs.core.Keyword(null,"content-data","content-data",1799074800).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.Keyword(null,"content-opts","content-opts",1799416934).cljs$core$IFn$_invoke$arity$1(self__.data)], null))], null),(cljs.core.truth_(new cljs.core.Keyword(null,"action-comp","action-comp",2550970296).cljs$core$IFn$_invoke$arity$1(self__.opts))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.widget-action-bar","div.widget-action-bar",1992202874),om.core.build.call(null,new cljs.core.Keyword(null,"action-comp","action-comp",2550970296).cljs$core$IFn$_invoke$arity$1(self__.opts),new cljs.core.Keyword(null,"action-data","action-data",2550986835).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.Keyword(null,"action-opts","action-opts",2551328969).cljs$core$IFn$_invoke$arity$1(self__.data)], null))], null):null)], null);
})());
});
omchaya.components.sidebar.t10475.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10477){var self__ = this;
var _10477__$1 = this;return self__.meta10476;
});
omchaya.components.sidebar.t10475.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10477,meta10476__$1){var self__ = this;
var _10477__$1 = this;return (new omchaya.components.sidebar.t10475(self__.opts,self__.owner,self__.data,self__.widget,meta10476__$1));
});
omchaya.components.sidebar.__GT_t10475 = (function __GT_t10475(opts__$1,owner__$1,data__$1,widget__$1,meta10476){return (new omchaya.components.sidebar.t10475(opts__$1,owner__$1,data__$1,widget__$1,meta10476));
});
}
return (new omchaya.components.sidebar.t10475(opts,owner,data,widget,null));
});
omchaya.components.sidebar.sidebar = (function sidebar(data,owner,opts){if(typeof omchaya.components.sidebar.t10481 !== 'undefined')
{} else
{
/**
* @constructor
*/
omchaya.components.sidebar.t10481 = (function (opts,owner,data,sidebar,meta10482){
this.opts = opts;
this.owner = owner;
this.data = data;
this.sidebar = sidebar;
this.meta10482 = meta10482;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
omchaya.components.sidebar.t10481.cljs$lang$type = true;
omchaya.components.sidebar.t10481.cljs$lang$ctorStr = "omchaya.components.sidebar/t10481";
omchaya.components.sidebar.t10481.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"omchaya.components.sidebar/t10481");
});
omchaya.components.sidebar.t10481.prototype.om$core$IRender$ = true;
omchaya.components.sidebar.t10481.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return sablono.interpreter.interpret.call(null,(function (){var comm = cljs.core.get_in.call(null,self__.opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",1108747865),new cljs.core.Keyword(null,"controls","controls",4741937704)], null));var channel = new cljs.core.Keyword(null,"channel","channel",1752854645).cljs$core$IFn$_invoke$arity$1(self__.data);var settings = new cljs.core.Keyword(null,"settings","settings",2448535445).cljs$core$IFn$_invoke$arity$1(self__.data);var search_filter = new cljs.core.Keyword(null,"search-filter","search-filter",674207407).cljs$core$IFn$_invoke$arity$1(self__.data);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aside.sidebar","aside.sidebar",891231256),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.header.user-header","div.header.user-header",807252189),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),(cljs.core.truth_(cljs.core.get_in.call(null,settings,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"menus","menus",1117686374),new cljs.core.Keyword(null,"user-menu","user-menu",1307043219),new cljs.core.Keyword(null,"open","open",1017321916)], null)))?"open-menu":null)], null),omchaya.components.sidebar.current_user.call(null,comm,cljs.core.get_in.call(null,self__.opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",1125482874),new cljs.core.Keyword(null,"current-user-email","current-user-email",4091392864).cljs$core$IFn$_invoke$arity$1(self__.opts)], null))),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.user-menu","ul.user-menu",2277914364),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",1017115293),"#",new cljs.core.Keyword(null,"on-click","on-click",1416542092),(function (){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-opened","settings-opened",2980449477)], null));
})], null),"Edit Account"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rel","rel",1014017035),"nofollow",new cljs.core.Keyword(null,"href","href",1017115293),"#",new cljs.core.Keyword(null,"on-click","on-click",1416542092),(function (){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-logged-out","user-logged-out",2519482167)], null));
})], null),"Logout"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",1017115293),"#",new cljs.core.Keyword(null,"on-click","on-click",1416542092),(function (){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"help-opened","help-opened",703585255)], null));
})], null),"Help"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",1017115293),"#",new cljs.core.Keyword(null,"on-click","on-click",1416542092),(function (){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"about-opened","about-opened",4155398683)], null));
})], null),"About Omchaya"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.widgets","div.widgets",3922286020),om.core.build.call(null,omchaya.components.sidebar.widget,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content-data","content-data",1799074800),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"channel-users-emails","channel-users-emails",2413740984),new cljs.core.Keyword(null,"users","users",1125482874).cljs$core$IFn$_invoke$arity$1(channel),new cljs.core.Keyword(null,"search-filter","search-filter",674207407),search_filter], null),new cljs.core.Keyword(null,"content-opts","content-opts",1799416934),self__.opts], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",1124275658),"People",new cljs.core.Keyword(null,"icon","icon",1017130987),"/assets/images/people_icon.png",new cljs.core.Keyword(null,"content-comp","content-comp",1799058261),omchaya.components.sidebar.people_widget], null)], null)),om.core.build.call(null,omchaya.components.sidebar.widget,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"content-data","content-data",1799074800),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player","player",4323118675),new cljs.core.Keyword(null,"player","player",4323118675).cljs$core$IFn$_invoke$arity$1(channel),new cljs.core.Keyword(null,"search-filter","search-filter",674207407),search_filter], null),new cljs.core.Keyword(null,"content-opts","content-opts",1799416934),self__.opts,new cljs.core.Keyword(null,"action-data","action-data",2550986835),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"player","player",4323118675),new cljs.core.Keyword(null,"player","player",4323118675).cljs$core$IFn$_invoke$arity$1(channel)], null),new cljs.core.Keyword(null,"action-opts","action-opts",2551328969),self__.opts], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",1124275658),"Playlist",new cljs.core.Keyword(null,"icon","icon",1017130987),"/assets/images/video_icon.png",new cljs.core.Keyword(null,"content-comp","content-comp",1799058261),omchaya.components.sidebar.playlist_widget,new cljs.core.Keyword(null,"action-comp","action-comp",2550970296),omchaya.components.sidebar.playlist_action_widget], null)], null)),om.core.build.call(null,omchaya.components.sidebar.widget,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content-data","content-data",1799074800),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"search-filter","search-filter",674207407),search_filter,new cljs.core.Keyword(null,"media","media",1117676374),new cljs.core.Keyword(null,"media","media",1117676374).cljs$core$IFn$_invoke$arity$1(channel),new cljs.core.Keyword(null,"channel-id","channel-id",3378014615),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(channel)], null),new cljs.core.Keyword(null,"content-opts","content-opts",1799416934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comm","comm",1016963710),comm], null),new cljs.core.Keyword(null,"action-data","action-data",2550986835),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"channel-id","channel-id",3378014615),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(channel)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",1124275658),"My Media",new cljs.core.Keyword(null,"icon","icon",1017130987),"/assets/images/media_icon.png",new cljs.core.Keyword(null,"content-comp","content-comp",1799058261),omchaya.components.sidebar.media_widget,new cljs.core.Keyword(null,"action-comp","action-comp",2550970296),omchaya.components.sidebar.media_action_widget], null)], null))], null)], null);
})());
});
omchaya.components.sidebar.t10481.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10483){var self__ = this;
var _10483__$1 = this;return self__.meta10482;
});
omchaya.components.sidebar.t10481.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10483,meta10482__$1){var self__ = this;
var _10483__$1 = this;return (new omchaya.components.sidebar.t10481(self__.opts,self__.owner,self__.data,self__.sidebar,meta10482__$1));
});
omchaya.components.sidebar.__GT_t10481 = (function __GT_t10481(opts__$1,owner__$1,data__$1,sidebar__$1,meta10482){return (new omchaya.components.sidebar.t10481(opts__$1,owner__$1,data__$1,sidebar__$1,meta10482));
});
}
return (new omchaya.components.sidebar.t10481(opts,owner,data,sidebar,null));
});

//# sourceMappingURL=sidebar.js.map