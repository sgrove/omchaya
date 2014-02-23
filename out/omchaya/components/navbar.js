// Compiled by ClojureScript 0.0-2156
goog.provide('omchaya.components.navbar');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.core');
goog.require('om.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
omchaya.components.navbar.tab = (function tab(comm,channel){var id = new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(channel);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.protected","li.protected",1310377967),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(channel),new cljs.core.Keyword(null,"class","class",1108647146),(cljs.core.truth_(new cljs.core.Keyword(null,"selected","selected",2205476365).cljs$core$IFn$_invoke$arity$1(channel))?" active":null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.show_channel","a.show_channel",788280736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("#channels-"),cljs.core.str(new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(channel))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1416542092),cljs.core.comp.call(null,cljs.core.constantly.call(null,false),(function (){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab-selected","tab-selected",4274020677),id], null));
}))], null),new cljs.core.Keyword(null,"title","title",1124275658).cljs$core$IFn$_invoke$arity$1(channel)], null)], null);
});
omchaya.components.navbar.navbar = (function navbar(data,owner,opts){if(typeof omchaya.components.navbar.t10419 !== 'undefined')
{} else
{
/**
* @constructor
*/
omchaya.components.navbar.t10419 = (function (opts,owner,data,navbar,meta10420){
this.opts = opts;
this.owner = owner;
this.data = data;
this.navbar = navbar;
this.meta10420 = meta10420;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
omchaya.components.navbar.t10419.cljs$lang$type = true;
omchaya.components.navbar.t10419.cljs$lang$ctorStr = "omchaya.components.navbar/t10419";
omchaya.components.navbar.t10419.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"omchaya.components.navbar/t10419");
});
omchaya.components.navbar.t10419.prototype.om$core$IRender$ = true;
omchaya.components.navbar.t10419.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return sablono.interpreter.interpret.call(null,(function (){var comm = cljs.core.get_in.call(null,self__.opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",1108747865),new cljs.core.Keyword(null,"controls","controls",4741937704)], null));var settings = new cljs.core.Keyword(null,"settings","settings",2448535445).cljs$core$IFn$_invoke$arity$1(self__.data);return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.nav","nav.nav",2742543690),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),(cljs.core.truth_(cljs.core.get_in.call(null,settings,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"forms","forms",1111523233),new cljs.core.Keyword(null,"search","search",4402534682),new cljs.core.Keyword(null,"focused","focused",4617830121)], null)))?"search-focus":null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.search","form.search",4430810500),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",3885920680),"/search",new cljs.core.Keyword(null,"method","method",4231316563),"get"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.query","input.query",3940929814),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1017277949),"query",new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"on-focus","on-focus",1419396828),(function (){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-form-focused","search-form-focused",1124244197)], null));
}),new cljs.core.Keyword(null,"on-blur","on-blur",3936357127),(function (){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-form-blurred","search-form-blurred",1799842360)], null));
}),new cljs.core.Keyword(null,"on-key-up","on-key-up",833769449),(function (p1__10415_SHARP_){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-form-updated","search-form-updated",1580855337),p1__10415_SHARP_.target.value], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.submit","input.submit",1614547502),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),"Search",new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"on-submit","on-submit",1076954936),cljs.core.constantly.call(null,false)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul#channel_nav","ul#channel_nav",867733357),cljs.core.map.call(null,cljs.core.partial.call(null,omchaya.components.navbar.tab,comm),cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"order","order",1119910592),cljs.core.vals.call(null,new cljs.core.Keyword(null,"channels","channels",2446530370).cljs$core$IFn$_invoke$arity$1(self__.data)))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",1014010321),"new-tab"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a#create_channel","a#create_channel",3916534932),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),"#"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",4416891401)," + "], null)], null)], null)], null)], null);
})());
});
omchaya.components.navbar.t10419.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10421){var self__ = this;
var _10421__$1 = this;return self__.meta10420;
});
omchaya.components.navbar.t10419.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10421,meta10420__$1){var self__ = this;
var _10421__$1 = this;return (new omchaya.components.navbar.t10419(self__.opts,self__.owner,self__.data,self__.navbar,meta10420__$1));
});
omchaya.components.navbar.__GT_t10419 = (function __GT_t10419(opts__$1,owner__$1,data__$1,navbar__$1,meta10420){return (new omchaya.components.navbar.t10419(opts__$1,owner__$1,data__$1,navbar__$1,meta10420));
});
}
return (new omchaya.components.navbar.t10419(opts,owner,data,navbar,null));
});

//# sourceMappingURL=navbar.js.map