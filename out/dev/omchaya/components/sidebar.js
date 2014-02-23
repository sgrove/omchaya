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
omchaya.components.sidebar.people_widget = (function people_widget(p__11076,owner,opts){var map__11081 = p__11076;var map__11081__$1 = ((cljs.core.seq_QMARK_.call(null,map__11081))?cljs.core.apply.call(null,cljs.core.hash_map,map__11081):map__11081);var data = map__11081__$1;var search_filter = cljs.core.get.call(null,map__11081__$1,new cljs.core.Keyword(null,"search-filter","search-filter",674207407));var channel_users_emails = cljs.core.get.call(null,map__11081__$1,new cljs.core.Keyword(null,"channel-users-emails","channel-users-emails",2413740984));if(typeof omchaya.components.sidebar.t11082 !== 'undefined')
{} else
{
/**
* @constructor
*/
omchaya.components.sidebar.t11082 = (function (channel_users_emails,search_filter,data,map__11081,opts,owner,p__11076,people_widget,meta11083){
this.channel_users_emails = channel_users_emails;
this.search_filter = search_filter;
this.data = data;
this.map__11081 = map__11081;
this.opts = opts;
this.owner = owner;
this.p__11076 = p__11076;
this.people_widget = people_widget;
this.meta11083 = meta11083;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
omchaya.components.sidebar.t11082.cljs$lang$type = true;
omchaya.components.sidebar.t11082.cljs$lang$ctorStr = "omchaya.components.sidebar/t11082";
omchaya.components.sidebar.t11082.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"omchaya.components.sidebar/t11082");
});
omchaya.components.sidebar.t11082.prototype.om$core$IRender$ = true;
omchaya.components.sidebar.t11082.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return sablono.interpreter.interpret.call(null,(function (){var comm = cljs.core.get_in.call(null,self__.opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",1108747865),new cljs.core.Keyword(null,"controls","controls",4741937704)], null));var re_filter = (cljs.core.truth_(self__.search_filter)?(new RegExp(self__.search_filter,"ig")):null);var channel_users = cljs.core.vals.call(null,cljs.core.select_keys.call(null,new cljs.core.Keyword(null,"users","users",1125482874).cljs$core$IFn$_invoke$arity$1(self__.opts),self__.channel_users_emails));var fil_users = (cljs.core.truth_(re_filter)?cljs.core.filter.call(null,((function (comm,re_filter,channel_users){
return (function (p1__11075_SHARP_){var or__3403__auto__ = new cljs.core.Keyword(null,"full-name","full-name",3585519227).cljs$core$IFn$_invoke$arity$1(p1__11075_SHARP_).match(re_filter);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = new cljs.core.Keyword(null,"email","email",1110523662).cljs$core$IFn$_invoke$arity$1(p1__11075_SHARP_).match(re_filter);if(cljs.core.truth_(or__3403__auto____$1))
{return or__3403__auto____$1;
} else
{return new cljs.core.Keyword(null,"username","username",748190792).cljs$core$IFn$_invoke$arity$1(p1__11075_SHARP_).match(re_filter);
}
}
});})(comm,re_filter,channel_users))
,channel_users):channel_users);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.user_list","ul.user_list",2324064621),cljs.core.map.call(null,cljs.core.partial.call(null,omchaya.components.sidebar.people_entry,comm),fil_users)], null);
})());
});
omchaya.components.sidebar.t11082.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11084){var self__ = this;
var _11084__$1 = this;return self__.meta11083;
});
omchaya.components.sidebar.t11082.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11084,meta11083__$1){var self__ = this;
var _11084__$1 = this;return (new omchaya.components.sidebar.t11082(self__.channel_users_emails,self__.search_filter,self__.data,self__.map__11081,self__.opts,self__.owner,self__.p__11076,self__.people_widget,meta11083__$1));
});
omchaya.components.sidebar.__GT_t11082 = (function __GT_t11082(channel_users_emails__$1,search_filter__$1,data__$1,map__11081__$2,opts__$1,owner__$1,p__11076__$1,people_widget__$1,meta11083){return (new omchaya.components.sidebar.t11082(channel_users_emails__$1,search_filter__$1,data__$1,map__11081__$2,opts__$1,owner__$1,p__11076__$1,people_widget__$1,meta11083));
});
}
return (new omchaya.components.sidebar.t11082(channel_users_emails,search_filter,data,map__11081__$1,opts,owner,p__11076,people_widget,null));
});
omchaya.components.sidebar.current_user = (function current_user(comm,user){return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.user-menu-toggle","a.user-menu-toggle",1726759391),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",1017115293),"#",new cljs.core.Keyword(null,"on-click","on-click",1416542092),cljs.core.comp.call(null,cljs.core.constantly.call(null,false),(function (){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-menu-toggled","user-menu-toggled",567658326)], null));
}))], null),omchaya.utils.gravatar_for.call(null,new cljs.core.Keyword(null,"email","email",1110523662).cljs$core$IFn$_invoke$arity$1(user)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon-angle.button.right","i.icon-angle.button.right",4652336220),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),{"height": "inherit"}], null)], null),new cljs.core.Keyword(null,"full-name","full-name",3585519227).cljs$core$IFn$_invoke$arity$1(user)], null);
});
omchaya.components.sidebar.media_name = (function media_name(src){return goog.string.urlDecode(cljs.core.first.call(null,clojure.string.split.call(null,cljs.core.last.call(null,clojure.string.split.call(null,src,/\//)),/\?/)));
});
omchaya.components.sidebar.playlist_entry = (function playlist_entry(comm,opts,entry){var src = new cljs.core.Keyword(null,"src","src",1014018390).cljs$core$IFn$_invoke$arity$1(entry);var order = new cljs.core.Keyword(null,"order","order",1119910592).cljs$core$IFn$_invoke$arity$1(entry);var name = omchaya.components.sidebar.media_name.call(null,src);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.user","li.user",1132196110),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",1124275658),src,new cljs.core.Keyword(null,"key","key",1014010321),[cljs.core.str(new cljs.core.Keyword(null,"order","order",1119910592).cljs$core$IFn$_invoke$arity$1(entry)),cljs.core.str(src)].join('')], null),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"order","order",1119910592).cljs$core$IFn$_invoke$arity$1(entry),cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",2446530370),new cljs.core.Keyword(null,"selected-channel","selected-channel",2473753411).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"player","player",4323118675),new cljs.core.Keyword(null,"playing-order","playing-order",3298952289)], null))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),{"background-color": "#ccc"}], null):null)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",1123684643),{"cursor": "pointer"},new cljs.core.Keyword(null,"on-click","on-click",1416542092),cljs.core.comp.call(null,cljs.core.constantly.call(null,false),(function (){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playlist-entry-played","playlist-entry-played",1677366299),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [order,new cljs.core.Keyword(null,"selected-channel","selected-channel",2473753411).cljs$core$IFn$_invoke$arity$1(opts)], null)], null));
}))], null),new cljs.core.Keyword(null,"order","order",1119910592).cljs$core$IFn$_invoke$arity$1(entry),". ",name], null)], null);
});
omchaya.components.sidebar.playlist_widget = (function playlist_widget(p__11086,owner,opts){var map__11091 = p__11086;var map__11091__$1 = ((cljs.core.seq_QMARK_.call(null,map__11091))?cljs.core.apply.call(null,cljs.core.hash_map,map__11091):map__11091);var search_filter = cljs.core.get.call(null,map__11091__$1,new cljs.core.Keyword(null,"search-filter","search-filter",674207407));var player = cljs.core.get.call(null,map__11091__$1,new cljs.core.Keyword(null,"player","player",4323118675));if(typeof omchaya.components.sidebar.t11092 !== 'undefined')
{} else
{
/**
* @constructor
*/
omchaya.components.sidebar.t11092 = (function (player,search_filter,map__11091,opts,owner,p__11086,playlist_widget,meta11093){
this.player = player;
this.search_filter = search_filter;
this.map__11091 = map__11091;
this.opts = opts;
this.owner = owner;
this.p__11086 = p__11086;
this.playlist_widget = playlist_widget;
this.meta11093 = meta11093;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
omchaya.components.sidebar.t11092.cljs$lang$type = true;
omchaya.components.sidebar.t11092.cljs$lang$ctorStr = "omchaya.components.sidebar/t11092";
omchaya.components.sidebar.t11092.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"omchaya.components.sidebar/t11092");
});
omchaya.components.sidebar.t11092.prototype.om$core$IRender$ = true;
omchaya.components.sidebar.t11092.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return sablono.interpreter.interpret.call(null,(function (){var comm = cljs.core.get_in.call(null,self__.opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",1108747865),new cljs.core.Keyword(null,"controls","controls",4741937704)], null));var re_filter = (cljs.core.truth_(self__.search_filter)?(new RegExp(self__.search_filter,"ig")):null);var fil_playlist = (cljs.core.truth_(re_filter)?cljs.core.filter.call(null,((function (comm,re_filter){
return (function (p1__11085_SHARP_){return omchaya.components.sidebar.media_name.call(null,new cljs.core.Keyword(null,"src","src",1014018390).cljs$core$IFn$_invoke$arity$1(p1__11085_SHARP_)).match(re_filter);
});})(comm,re_filter))
,new cljs.core.Keyword(null,"playlist","playlist",2893378884).cljs$core$IFn$_invoke$arity$1(self__.player)):new cljs.core.Keyword(null,"playlist","playlist",2893378884).cljs$core$IFn$_invoke$arity$1(self__.player));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.user_list","ul.user_list",2324064621),cljs.core.map.call(null,cljs.core.partial.call(null,omchaya.components.sidebar.playlist_entry,comm,self__.opts),cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"order","order",1119910592),fil_playlist))], null)], null);
})());
});
omchaya.components.sidebar.t11092.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11094){var self__ = this;
var _11094__$1 = this;return self__.meta11093;
});
omchaya.components.sidebar.t11092.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11094,meta11093__$1){var self__ = this;
var _11094__$1 = this;return (new omchaya.components.sidebar.t11092(self__.player,self__.search_filter,self__.map__11091,self__.opts,self__.owner,self__.p__11086,self__.playlist_widget,meta11093__$1));
});
omchaya.components.sidebar.__GT_t11092 = (function __GT_t11092(player__$1,search_filter__$1,map__11091__$2,opts__$1,owner__$1,p__11086__$1,playlist_widget__$1,meta11093){return (new omchaya.components.sidebar.t11092(player__$1,search_filter__$1,map__11091__$2,opts__$1,owner__$1,p__11086__$1,playlist_widget__$1,meta11093));
});
}
return (new omchaya.components.sidebar.t11092(player,search_filter,map__11091__$1,opts,owner,p__11086,playlist_widget,null));
});
omchaya.components.sidebar.playlist_action_widget = (function playlist_action_widget(p__11095,owner,opts){var map__11098 = p__11095;var map__11098__$1 = ((cljs.core.seq_QMARK_.call(null,map__11098))?cljs.core.apply.call(null,cljs.core.hash_map,map__11098):map__11098);var player = cljs.core.get.call(null,map__11098__$1,new cljs.core.Keyword(null,"player","player",4323118675));var comm = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",1108747865),new cljs.core.Keyword(null,"controls","controls",4741937704)], null));var attrs11099 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"state","state",1123661827).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"playing","playing",520340384)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-pause","i.fa.fa-pause",3144543140),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",1123684643),{"cursor": "pointer"},new cljs.core.Keyword(null,"on-click","on-click",1416542092),(function (){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-player-stopped","audio-player-stopped",1820835114),new cljs.core.Keyword(null,"selected-channel","selected-channel",2473753411).cljs$core$IFn$_invoke$arity$1(opts)], null));
})], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-play","i.fa.fa-play",4546327786),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",1123684643),{"cursor": "pointer"},new cljs.core.Keyword(null,"on-click","on-click",1416542092),(function (){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-player-started","audio-player-started",1807969246),new cljs.core.Keyword(null,"selected-channel","selected-channel",2473753411).cljs$core$IFn$_invoke$arity$1(opts)], null));
})], null)], null));if(cljs.core.map_QMARK_.call(null,attrs11099))
{return React.DOM.div(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["dropzone"], null)], null),attrs11099)),null);
} else
{return React.DOM.div({"className": "dropzone"},sablono.interpreter.interpret.call(null,attrs11099));
}
});
omchaya.components.sidebar.icon_map = new cljs.core.PersistentArrayMap(null, 3, ["png","img","jpg","img","jpeg","img"], null);
omchaya.components.sidebar.media_entry = (function media_entry(comm,media){var extension = cljs.core.last.call(null,clojure.string.split.call(null,cljs.core.first.call(null,clojure.string.split.call(null,new cljs.core.Keyword(null,"src","src",1014018390).cljs$core$IFn$_invoke$arity$1(media),/\?/)),/\./));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.file_item","li.file_item",602318903),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"src","src",1014018390).cljs$core$IFn$_invoke$arity$1(media)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",1017115293),"#",new cljs.core.Keyword(null,"on-click","on-click",1416542092),cljs.core.constantly.call(null,false),new cljs.core.Keyword(null,"target","target",4427965699),"_blank"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),[cljs.core.str("/assets/images/"),cljs.core.str(cljs.core.get.call(null,omchaya.components.sidebar.icon_map,extension,"file")),cljs.core.str("_icon.png")].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(media)], null)], null)], null);
});
omchaya.components.sidebar.media_widget = (function media_widget(p__11101,owner,opts){var map__11106 = p__11101;var map__11106__$1 = ((cljs.core.seq_QMARK_.call(null,map__11106))?cljs.core.apply.call(null,cljs.core.hash_map,map__11106):map__11106);var search_filter = cljs.core.get.call(null,map__11106__$1,new cljs.core.Keyword(null,"search-filter","search-filter",674207407));var media = cljs.core.get.call(null,map__11106__$1,new cljs.core.Keyword(null,"media","media",1117676374));var channel_id = cljs.core.get.call(null,map__11106__$1,new cljs.core.Keyword(null,"channel-id","channel-id",3378014615));if(typeof omchaya.components.sidebar.t11107 !== 'undefined')
{} else
{
/**
* @constructor
*/
omchaya.components.sidebar.t11107 = (function (channel_id,media,search_filter,map__11106,opts,owner,p__11101,media_widget,meta11108){
this.channel_id = channel_id;
this.media = media;
this.search_filter = search_filter;
this.map__11106 = map__11106;
this.opts = opts;
this.owner = owner;
this.p__11101 = p__11101;
this.media_widget = media_widget;
this.meta11108 = meta11108;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
omchaya.components.sidebar.t11107.cljs$lang$type = true;
omchaya.components.sidebar.t11107.cljs$lang$ctorStr = "omchaya.components.sidebar/t11107";
omchaya.components.sidebar.t11107.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"omchaya.components.sidebar/t11107");
});
omchaya.components.sidebar.t11107.prototype.om$core$IRender$ = true;
omchaya.components.sidebar.t11107.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return sablono.interpreter.interpret.call(null,(function (){var comm = new cljs.core.Keyword(null,"comm","comm",1016963710).cljs$core$IFn$_invoke$arity$1(self__.opts);var re_filter = (cljs.core.truth_(self__.search_filter)?(new RegExp(self__.search_filter,"ig")):null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.file_list","ul.file_list",668255836),cljs.core.map.call(null,cljs.core.partial.call(null,omchaya.components.sidebar.media_entry,comm),(cljs.core.truth_(re_filter)?cljs.core.filter.call(null,(function (p1__11100_SHARP_){return new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(p1__11100_SHARP_).match(re_filter);
}),self__.media):self__.media))], null);
})());
});
omchaya.components.sidebar.t11107.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11109){var self__ = this;
var _11109__$1 = this;return self__.meta11108;
});
omchaya.components.sidebar.t11107.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11109,meta11108__$1){var self__ = this;
var _11109__$1 = this;return (new omchaya.components.sidebar.t11107(self__.channel_id,self__.media,self__.search_filter,self__.map__11106,self__.opts,self__.owner,self__.p__11101,self__.media_widget,meta11108__$1));
});
omchaya.components.sidebar.__GT_t11107 = (function __GT_t11107(channel_id__$1,media__$1,search_filter__$1,map__11106__$2,opts__$1,owner__$1,p__11101__$1,media_widget__$1,meta11108){return (new omchaya.components.sidebar.t11107(channel_id__$1,media__$1,search_filter__$1,map__11106__$2,opts__$1,owner__$1,p__11101__$1,media_widget__$1,meta11108));
});
}
return (new omchaya.components.sidebar.t11107(channel_id,media,search_filter,map__11106__$1,opts,owner,p__11101,media_widget,null));
});
omchaya.components.sidebar.media_action_widget = (function media_action_widget(p__11110,owner,opts){var map__11118 = p__11110;var map__11118__$1 = ((cljs.core.seq_QMARK_.call(null,map__11118))?cljs.core.apply.call(null,cljs.core.hash_map,map__11118):map__11118);var channel_id = cljs.core.get.call(null,map__11118__$1,new cljs.core.Keyword(null,"channel-id","channel-id",3378014615));return React.DOM.form({"id": "file_upload", "method": "post", "html": "{:multipart=>true}", "data-remote": "true", "action": [cljs.core.str("/channels/"),cljs.core.str(channel_id),cljs.core.str("/attachments.json")].join(''), "acceptCharset": "UTF-8"},React.DOM.div({"style": cljs.core.clj__GT_js.call(null,{"display": "inline", "padding": "0", "margin": "0"})},sablono.interpreter.input.call(null,{"value": "\u2713", "type": "hidden", "name": "utf8"}),sablono.interpreter.input.call(null,{"value": "bpuDvAt5w97Cp4khpWE25tcTsD2vFEFpKwsIAG0m8fw=", "type": "hidden", "name": "authenticity_token"})),sablono.interpreter.input.call(null,{"id": "channel_id_1", "type": "hidden", "name": [cljs.core.str("channel_id["),cljs.core.str(channel_id),cljs.core.str("]")].join('')}),sablono.interpreter.input.call(null,{"id": "file", "type": "file", "name": "file"}),React.DOM.div({"className": "dropzone"},"Drop file here to upload"));
});
omchaya.components.sidebar.widget = (function widget(data,owner,opts){if(typeof omchaya.components.sidebar.t11128 !== 'undefined')
{} else
{
/**
* @constructor
*/
omchaya.components.sidebar.t11128 = (function (opts,owner,data,widget,meta11129){
this.opts = opts;
this.owner = owner;
this.data = data;
this.widget = widget;
this.meta11129 = meta11129;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
omchaya.components.sidebar.t11128.cljs$lang$type = true;
omchaya.components.sidebar.t11128.cljs$lang$ctorStr = "omchaya.components.sidebar/t11128";
omchaya.components.sidebar.t11128.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"omchaya.components.sidebar/t11128");
});
omchaya.components.sidebar.t11128.prototype.om$core$IRender$ = true;
omchaya.components.sidebar.t11128.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return sablono.interpreter.interpret.call(null,(function (){var comm = new cljs.core.Keyword(null,"comm","comm",1016963710).cljs$core$IFn$_invoke$arity$1(self__.opts);return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.widget","div.widget",2908838323),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5.widget-header.unselectable","h5.widget-header.unselectable",3530192282),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),new cljs.core.Keyword(null,"icon","icon",1017130987).cljs$core$IFn$_invoke$arity$1(self__.opts)], null)], null),new cljs.core.Keyword(null,"title","title",1124275658).cljs$core$IFn$_invoke$arity$1(self__.opts)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.widget-content","div.widget-content",4299661407),om.core.build.call(null,new cljs.core.Keyword(null,"content-comp","content-comp",1799058261).cljs$core$IFn$_invoke$arity$1(self__.opts),new cljs.core.Keyword(null,"content-data","content-data",1799074800).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.Keyword(null,"content-opts","content-opts",1799416934).cljs$core$IFn$_invoke$arity$1(self__.data)], null))], null),(cljs.core.truth_(new cljs.core.Keyword(null,"action-comp","action-comp",2550970296).cljs$core$IFn$_invoke$arity$1(self__.opts))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.widget-action-bar","div.widget-action-bar",1992202874),om.core.build.call(null,new cljs.core.Keyword(null,"action-comp","action-comp",2550970296).cljs$core$IFn$_invoke$arity$1(self__.opts),new cljs.core.Keyword(null,"action-data","action-data",2550986835).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.Keyword(null,"action-opts","action-opts",2551328969).cljs$core$IFn$_invoke$arity$1(self__.data)], null))], null):null)], null);
})());
});
omchaya.components.sidebar.t11128.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11130){var self__ = this;
var _11130__$1 = this;return self__.meta11129;
});
omchaya.components.sidebar.t11128.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11130,meta11129__$1){var self__ = this;
var _11130__$1 = this;return (new omchaya.components.sidebar.t11128(self__.opts,self__.owner,self__.data,self__.widget,meta11129__$1));
});
omchaya.components.sidebar.__GT_t11128 = (function __GT_t11128(opts__$1,owner__$1,data__$1,widget__$1,meta11129){return (new omchaya.components.sidebar.t11128(opts__$1,owner__$1,data__$1,widget__$1,meta11129));
});
}
return (new omchaya.components.sidebar.t11128(opts,owner,data,widget,null));
});
omchaya.components.sidebar.sidebar = (function sidebar(data,owner,opts){if(typeof omchaya.components.sidebar.t11134 !== 'undefined')
{} else
{
/**
* @constructor
*/
omchaya.components.sidebar.t11134 = (function (opts,owner,data,sidebar,meta11135){
this.opts = opts;
this.owner = owner;
this.data = data;
this.sidebar = sidebar;
this.meta11135 = meta11135;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
omchaya.components.sidebar.t11134.cljs$lang$type = true;
omchaya.components.sidebar.t11134.cljs$lang$ctorStr = "omchaya.components.sidebar/t11134";
omchaya.components.sidebar.t11134.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"omchaya.components.sidebar/t11134");
});
omchaya.components.sidebar.t11134.prototype.om$core$IRender$ = true;
omchaya.components.sidebar.t11134.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return sablono.interpreter.interpret.call(null,(function (){var comm = cljs.core.get_in.call(null,self__.opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",1108747865),new cljs.core.Keyword(null,"controls","controls",4741937704)], null));var channel = new cljs.core.Keyword(null,"channel","channel",1752854645).cljs$core$IFn$_invoke$arity$1(self__.data);var settings = new cljs.core.Keyword(null,"settings","settings",2448535445).cljs$core$IFn$_invoke$arity$1(self__.data);var search_filter = new cljs.core.Keyword(null,"search-filter","search-filter",674207407).cljs$core$IFn$_invoke$arity$1(self__.data);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aside.sidebar","aside.sidebar",891231256),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.header.user-header","div.header.user-header",807252189),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),(cljs.core.truth_(cljs.core.get_in.call(null,settings,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"menus","menus",1117686374),new cljs.core.Keyword(null,"user-menu","user-menu",1307043219),new cljs.core.Keyword(null,"open","open",1017321916)], null)))?"open-menu":null)], null),omchaya.components.sidebar.current_user.call(null,comm,cljs.core.get_in.call(null,self__.opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"users","users",1125482874),new cljs.core.Keyword(null,"current-user-email","current-user-email",4091392864).cljs$core$IFn$_invoke$arity$1(self__.opts)], null))),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.user-menu","ul.user-menu",2277914364),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",1017115293),"#",new cljs.core.Keyword(null,"on-click","on-click",1416542092),(function (){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-opened","settings-opened",2980449477)], null));
})], null),"Edit Account"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rel","rel",1014017035),"nofollow",new cljs.core.Keyword(null,"href","href",1017115293),"#",new cljs.core.Keyword(null,"on-click","on-click",1416542092),(function (){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-logged-out","user-logged-out",2519482167)], null));
})], null),"Logout"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",1017115293),"#",new cljs.core.Keyword(null,"on-click","on-click",1416542092),(function (){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"help-opened","help-opened",703585255)], null));
})], null),"Help"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",1017115293),"#",new cljs.core.Keyword(null,"on-click","on-click",1416542092),(function (){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"about-opened","about-opened",4155398683)], null));
})], null),"About Omchaya"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.widgets","div.widgets",3922286020),om.core.build.call(null,omchaya.components.sidebar.widget,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content-data","content-data",1799074800),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"channel-users-emails","channel-users-emails",2413740984),new cljs.core.Keyword(null,"users","users",1125482874).cljs$core$IFn$_invoke$arity$1(channel),new cljs.core.Keyword(null,"search-filter","search-filter",674207407),search_filter], null),new cljs.core.Keyword(null,"content-opts","content-opts",1799416934),self__.opts], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",1124275658),"People",new cljs.core.Keyword(null,"icon","icon",1017130987),"/assets/images/people_icon.png",new cljs.core.Keyword(null,"content-comp","content-comp",1799058261),omchaya.components.sidebar.people_widget], null)], null)),om.core.build.call(null,omchaya.components.sidebar.widget,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"content-data","content-data",1799074800),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player","player",4323118675),new cljs.core.Keyword(null,"player","player",4323118675).cljs$core$IFn$_invoke$arity$1(channel),new cljs.core.Keyword(null,"search-filter","search-filter",674207407),search_filter], null),new cljs.core.Keyword(null,"content-opts","content-opts",1799416934),self__.opts,new cljs.core.Keyword(null,"action-data","action-data",2550986835),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"player","player",4323118675),new cljs.core.Keyword(null,"player","player",4323118675).cljs$core$IFn$_invoke$arity$1(channel)], null),new cljs.core.Keyword(null,"action-opts","action-opts",2551328969),self__.opts], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",1124275658),"Playlist",new cljs.core.Keyword(null,"icon","icon",1017130987),"/assets/images/video_icon.png",new cljs.core.Keyword(null,"content-comp","content-comp",1799058261),omchaya.components.sidebar.playlist_widget,new cljs.core.Keyword(null,"action-comp","action-comp",2550970296),omchaya.components.sidebar.playlist_action_widget], null)], null)),om.core.build.call(null,omchaya.components.sidebar.widget,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content-data","content-data",1799074800),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"search-filter","search-filter",674207407),search_filter,new cljs.core.Keyword(null,"media","media",1117676374),new cljs.core.Keyword(null,"media","media",1117676374).cljs$core$IFn$_invoke$arity$1(channel),new cljs.core.Keyword(null,"channel-id","channel-id",3378014615),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(channel)], null),new cljs.core.Keyword(null,"content-opts","content-opts",1799416934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comm","comm",1016963710),comm], null),new cljs.core.Keyword(null,"action-data","action-data",2550986835),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"channel-id","channel-id",3378014615),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(channel)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",1124275658),"My Media",new cljs.core.Keyword(null,"icon","icon",1017130987),"/assets/images/media_icon.png",new cljs.core.Keyword(null,"content-comp","content-comp",1799058261),omchaya.components.sidebar.media_widget,new cljs.core.Keyword(null,"action-comp","action-comp",2550970296),omchaya.components.sidebar.media_action_widget], null)], null))], null)], null);
})());
});
omchaya.components.sidebar.t11134.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11136){var self__ = this;
var _11136__$1 = this;return self__.meta11135;
});
omchaya.components.sidebar.t11134.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11136,meta11135__$1){var self__ = this;
var _11136__$1 = this;return (new omchaya.components.sidebar.t11134(self__.opts,self__.owner,self__.data,self__.sidebar,meta11135__$1));
});
omchaya.components.sidebar.__GT_t11134 = (function __GT_t11134(opts__$1,owner__$1,data__$1,sidebar__$1,meta11135){return (new omchaya.components.sidebar.t11134(opts__$1,owner__$1,data__$1,sidebar__$1,meta11135));
});
}
return (new omchaya.components.sidebar.t11134(opts,owner,data,sidebar,null));
});

//# sourceMappingURL=sidebar.js.map