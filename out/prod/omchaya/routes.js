// Compiled by ClojureScript 0.0-2156
goog.provide('omchaya.routes');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.History');
goog.require('omchaya.utils');
goog.require('omchaya.utils');
goog.require('secretary.core');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
secretary.core.set_config_BANG_(cljs.core.constant$keyword$529,"#");
omchaya.routes.listen_once_for_app_BANG_ = (function listen_once_for_app_BANG_(app,pred,on_loaded){var listener_id = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(omchaya.utils.uuid());var sentinel = ((function (listener_id){
return (function (_,___$1,___$2,new_state){if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(new_state) : pred.call(null,new_state))))
{cljs.core.remove_watch(app,listener_id);
return (on_loaded.cljs$core$IFn$_invoke$arity$1 ? on_loaded.cljs$core$IFn$_invoke$arity$1(new_state) : on_loaded.call(null,new_state));
} else
{return null;
}
});})(listener_id))
;if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app)) : pred.call(null,cljs.core.deref(app)))))
{return (on_loaded.cljs$core$IFn$_invoke$arity$1 ? on_loaded.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app)) : on_loaded.call(null,cljs.core.deref(app)));
} else
{return cljs.core.add_watch(app,listener_id,sentinel);
}
});
omchaya.routes.open_to_channel_BANG_ = (function open_to_channel_BANG_(app,controls_ch,channel_id){return omchaya.routes.listen_once_for_app_BANG_(app,(function (p1__22424_SHARP_){return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__22424_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$368,channel_id], null));
}),(function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(controls_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$532,channel_id], null));
}));
});
omchaya.routes.define_routes_BANG_ = (function define_routes_BANG_(app,history_el){var controls_ch_22432 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$370,cljs.core.constant$keyword$432], null));var api_ch_22433 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$370,cljs.core.constant$keyword$533], null));var action__10610__auto___22434 = (function (params__10611__auto__){if(cljs.core.map_QMARK_(params__10611__auto__))
{var map__22429 = params__10611__auto__;var map__22429__$1 = ((cljs.core.seq_QMARK_(map__22429))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22429):map__22429);var channel_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22429__$1,cljs.core.constant$keyword$348);cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Channel id: ",channel_id], 0));
return omchaya.routes.open_to_channel_BANG_(app,controls_ch_22432,omchaya.utils.safe_sel(channel_id));
} else
{if(cljs.core.vector_QMARK_(params__10611__auto__))
{var vec__22430 = params__10611__auto__;var channel_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22430,0,null);cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Channel id: ",channel_id], 0));
return omchaya.routes.open_to_channel_BANG_(app,controls_ch_22432,omchaya.utils.safe_sel(channel_id));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/v1/channels/:channel-id",action__10610__auto___22434);
/**
* @param {...*} var_args
*/
omchaya.routes.v1_channel_link = (function() { 
var v1_channel_link__delegate = function (args__10609__auto__){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route_STAR_,"/v1/channels/:channel-id",args__10609__auto__);
};
var v1_channel_link = function (var_args){
var args__10609__auto__ = null;if (arguments.length > 0) {
  args__10609__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return v1_channel_link__delegate.call(this,args__10609__auto__);};
v1_channel_link.cljs$lang$maxFixedArity = 0;
v1_channel_link.cljs$lang$applyTo = (function (arglist__22435){
var args__10609__auto__ = cljs.core.seq(arglist__22435);
return v1_channel_link__delegate(args__10609__auto__);
});
v1_channel_link.cljs$core$IFn$_invoke$arity$variadic = v1_channel_link__delegate;
return v1_channel_link;
})()
;
var history_el__$1 = (new goog.History(false,null,history_el));goog.events.listen(history_el__$1,"navigate",(function (p1__22425_SHARP_){return secretary.core.dispatch_BANG_(p1__22425_SHARP_.token);
}));
var G__22431 = history_el__$1;G__22431.setEnabled(true);
return G__22431;
});
