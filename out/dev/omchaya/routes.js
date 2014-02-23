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
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",4328760836),"#");
omchaya.routes.listen_once_for_app_BANG_ = (function listen_once_for_app_BANG_(app,pred,on_loaded){var listener_id = cljs.core.keyword.call(null,omchaya.utils.uuid.call(null));var sentinel = ((function (listener_id){
return (function (_,___$1,___$2,new_state){if(cljs.core.truth_(pred.call(null,new_state)))
{cljs.core.remove_watch.call(null,app,listener_id);
return on_loaded.call(null,new_state);
} else
{return null;
}
});})(listener_id))
;if(cljs.core.truth_(pred.call(null,cljs.core.deref.call(null,app))))
{return on_loaded.call(null,cljs.core.deref.call(null,app));
} else
{return cljs.core.add_watch.call(null,app,listener_id,sentinel);
}
});
omchaya.routes.open_to_channel_BANG_ = (function open_to_channel_BANG_(app,controls_ch,channel_id){return omchaya.routes.listen_once_for_app_BANG_.call(null,app,(function (p1__12125_SHARP_){return cljs.core.get_in.call(null,p1__12125_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",2446530370),channel_id], null));
}),(function (){return cljs.core.async.put_BANG_.call(null,controls_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tab-selected","tab-selected",4274020677),channel_id], null));
}));
});
omchaya.routes.define_routes_BANG_ = (function define_routes_BANG_(app,history_el){var controls_ch_12133 = cljs.core.get_in.call(null,cljs.core.deref.call(null,app),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",1108747865),new cljs.core.Keyword(null,"controls","controls",4741937704)], null));var api_ch_12134 = cljs.core.get_in.call(null,cljs.core.deref.call(null,app),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",1108747865),new cljs.core.Keyword(null,"api","api",1014001036)], null));var action__10610__auto___12135 = (function (params__10611__auto__){if(cljs.core.map_QMARK_.call(null,params__10611__auto__))
{var map__12130 = params__10611__auto__;var map__12130__$1 = ((cljs.core.seq_QMARK_.call(null,map__12130))?cljs.core.apply.call(null,cljs.core.hash_map,map__12130):map__12130);var channel_id = cljs.core.get.call(null,map__12130__$1,new cljs.core.Keyword(null,"channel-id","channel-id",3378014615));cljs.core.print.call(null,"Channel id: ",channel_id);
return omchaya.routes.open_to_channel_BANG_.call(null,app,controls_ch_12133,omchaya.utils.safe_sel.call(null,channel_id));
} else
{if(cljs.core.vector_QMARK_.call(null,params__10611__auto__))
{var vec__12131 = params__10611__auto__;var channel_id = cljs.core.nth.call(null,vec__12131,0,null);cljs.core.print.call(null,"Channel id: ",channel_id);
return omchaya.routes.open_to_channel_BANG_.call(null,app,controls_ch_12133,omchaya.utils.safe_sel.call(null,channel_id));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/v1/channels/:channel-id",action__10610__auto___12135);
/**
* @param {...*} var_args
*/
omchaya.routes.v1_channel_link = (function() { 
var v1_channel_link__delegate = function (args__10609__auto__){return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/v1/channels/:channel-id",args__10609__auto__);
};
var v1_channel_link = function (var_args){
var args__10609__auto__ = null;if (arguments.length > 0) {
  args__10609__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return v1_channel_link__delegate.call(this,args__10609__auto__);};
v1_channel_link.cljs$lang$maxFixedArity = 0;
v1_channel_link.cljs$lang$applyTo = (function (arglist__12136){
var args__10609__auto__ = cljs.core.seq(arglist__12136);
return v1_channel_link__delegate(args__10609__auto__);
});
v1_channel_link.cljs$core$IFn$_invoke$arity$variadic = v1_channel_link__delegate;
return v1_channel_link;
})()
;
var history_el__$1 = (new goog.History(false,null,history_el));goog.events.listen(history_el__$1,"navigate",(function (p1__12126_SHARP_){return secretary.core.dispatch_BANG_.call(null,p1__12126_SHARP_.token);
}));
var G__12132 = history_el__$1;G__12132.setEnabled(true);
return G__12132;
});

//# sourceMappingURL=routes.js.map