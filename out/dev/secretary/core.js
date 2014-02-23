// Compiled by ClojureScript 0.0-2156
goog.provide('secretary.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
secretary.core.IRouteMatches = (function (){var obj17198 = {};return obj17198;
})();
secretary.core.route_matches = (function route_matches(this$,route){if((function (){var and__3391__auto__ = this$;if(and__3391__auto__)
{return this$.secretary$core$IRouteMatches$route_matches$arity$2;
} else
{return and__3391__auto__;
}
})())
{return this$.secretary$core$IRouteMatches$route_matches$arity$2(this$,route);
} else
{var x__4030__auto__ = (((this$ == null))?null:this$);return (function (){var or__3403__auto__ = (secretary.core.route_matches[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (secretary.core.route_matches["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRouteMatches.route-matches",this$);
}
}
})().call(null,this$,route);
}
});
secretary.core.IRenderRoute = (function (){var obj17200 = {};return obj17200;
})();
secretary.core.render_route = (function() {
var render_route = null;
var render_route__1 = (function (this$){if((function (){var and__3391__auto__ = this$;if(and__3391__auto__)
{return this$.secretary$core$IRenderRoute$render_route$arity$1;
} else
{return and__3391__auto__;
}
})())
{return this$.secretary$core$IRenderRoute$render_route$arity$1(this$);
} else
{var x__4030__auto__ = (((this$ == null))?null:this$);return (function (){var or__3403__auto__ = (secretary.core.render_route[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (secretary.core.render_route["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderRoute.render-route",this$);
}
}
})().call(null,this$);
}
});
var render_route__2 = (function (this$,params){if((function (){var and__3391__auto__ = this$;if(and__3391__auto__)
{return this$.secretary$core$IRenderRoute$render_route$arity$2;
} else
{return and__3391__auto__;
}
})())
{return this$.secretary$core$IRenderRoute$render_route$arity$2(this$,params);
} else
{var x__4030__auto__ = (((this$ == null))?null:this$);return (function (){var or__3403__auto__ = (secretary.core.render_route[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (secretary.core.render_route["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRenderRoute.render-route",this$);
}
}
})().call(null,this$,params);
}
});
render_route = function(this$,params){
switch(arguments.length){
case 1:
return render_route__1.call(this,this$);
case 2:
return render_route__2.call(this,this$,params);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
render_route.cljs$core$IFn$_invoke$arity$1 = render_route__1;
render_route.cljs$core$IFn$_invoke$arity$2 = render_route__2;
return render_route;
})()
;
secretary.core._STAR_config_STAR_ = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prefix","prefix",4328760836),""], null));
/**
* Gets a value for *config* at path.
*/
secretary.core.get_config = (function get_config(path){var path__$1 = ((cljs.core.sequential_QMARK_.call(null,path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));return cljs.core.get_in.call(null,cljs.core.deref.call(null,secretary.core._STAR_config_STAR_),path__$1);
});
/**
* Associates a value val for *config* at path.
*/
secretary.core.set_config_BANG_ = (function set_config_BANG_(path,val){var path__$1 = ((cljs.core.sequential_QMARK_.call(null,path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));return cljs.core.swap_BANG_.call(null,secretary.core._STAR_config_STAR_,cljs.core.assoc_in,path__$1,val);
});
secretary.core.encode = encodeURIComponent;
secretary.core.decode = decodeURIComponent;
/**
* Turns a map of query parameters into url encoded string.
*/
secretary.core.encode_query_params = (function encode_query_params(query_params){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__17203){var vec__17204 = p__17203;var k = cljs.core.nth.call(null,vec__17204,0,null);var v = cljs.core.nth.call(null,vec__17204,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("="),cljs.core.str(secretary.core.encode.call(null,(((v instanceof cljs.core.Keyword))?cljs.core.name.call(null,v):[cljs.core.str(v)].join(''))))].join('');
}),query_params));
});
/**
* Extract a map of query parameters from a query string.
*/
secretary.core.decode_query_params = (function decode_query_params(query_string){return cljs.core.reduce.call(null,(function (m,param){var vec__17206 = clojure.string.split.call(null,param,/=/,2);var k = cljs.core.nth.call(null,vec__17206,0,null);var v = cljs.core.nth.call(null,vec__17206,1,null);var v__$1 = secretary.core.decode.call(null,v);return cljs.core.assoc.call(null,m,k,v__$1);
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,query_string,/&/));
});
/**
* Like re-matches but result is a always vector. If re does not
* capture matches then it will return a vector of [m m] as if it had a
* single capture. Other wise it maintains consistent behavior with
* re-matches.
*/
secretary.core.re_matches_STAR_ = (function re_matches_STAR_(re,s){var ms = cljs.core.re_matches.call(null,re,s);if(cljs.core.truth_(ms))
{if(cljs.core.sequential_QMARK_.call(null,ms))
{return ms;
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms,ms], null);
}
} else
{return null;
}
});
secretary.core.re_escape_chars = cljs.core.set.call(null,"\\.*+|?()[]{}$^");
secretary.core.re_escape = (function re_escape(s){return cljs.core.reduce.call(null,(function (s__$1,c){if(cljs.core.truth_(secretary.core.re_escape_chars.call(null,c)))
{return [cljs.core.str(s__$1),cljs.core.str("\\"),cljs.core.str(c)].join('');
} else
{return [cljs.core.str(s__$1),cljs.core.str(c)].join('');
}
}),"",s);
});
/**
* Attempt to lex a single token from s with clauses. Each clause is a
* pair of [regexp action] where action is a function. regexp is
* expected to begin with ^ and contain a single capture. If the
* attempt is successful a vector of [s-without-token (action capture)]
* is returned. Otherwise the result is nil.
*/
secretary.core.lex_STAR_ = (function lex_STAR_(s,clauses){return cljs.core.some.call(null,(function (p__17210){var vec__17211 = p__17210;var re = cljs.core.nth.call(null,vec__17211,0,null);var action = cljs.core.nth.call(null,vec__17211,1,null);var temp__4092__auto__ = cljs.core.re_find.call(null,re,s);if(cljs.core.truth_(temp__4092__auto__))
{var vec__17212 = temp__4092__auto__;var m = cljs.core.nth.call(null,vec__17212,0,null);var c = cljs.core.nth.call(null,vec__17212,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,s,cljs.core.count.call(null,m)),action.call(null,c)], null);
} else
{return null;
}
}),clauses);
});
/**
* Return a pair of [regex params]. regex is a compiled regular
* expression for matching routes. params is a list of route param
* names (:*, :id, etc.).
*/
secretary.core.lex_route = (function lex_route(s,clauses){var s__$1 = s;var pattern = "";var params = cljs.core.PersistentVector.EMPTY;while(true){
if(cljs.core.seq.call(null,s__$1))
{var vec__17215 = secretary.core.lex_STAR_.call(null,s__$1,clauses);var s__$2 = cljs.core.nth.call(null,vec__17215,0,null);var vec__17216 = cljs.core.nth.call(null,vec__17215,1,null);var r = cljs.core.nth.call(null,vec__17216,0,null);var p = cljs.core.nth.call(null,vec__17216,1,null);{
var G__17217 = s__$2;
var G__17218 = [cljs.core.str(pattern),cljs.core.str(r)].join('');
var G__17219 = cljs.core.conj.call(null,params,p);
s__$1 = G__17217;
pattern = G__17218;
params = G__17219;
continue;
}
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.re_pattern.call(null,[cljs.core.str("^"),cljs.core.str(pattern),cljs.core.str("$")].join('')),cljs.core.remove.call(null,cljs.core.nil_QMARK_,params)], null);
}
break;
}
});
/**
* Given a route return an instance of IRouteMatches.
*/
secretary.core.compile_route = (function compile_route(route){var clauses = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/^\*([^\s.:*\/]*)/,(function (v){var r = "(.*?)";var p = ((cljs.core.seq.call(null,v))?cljs.core.keyword.call(null,v):new cljs.core.Keyword(null,"*","*",1013904284));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,p], null);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/^\:([^\s.:*\/]+)/,(function (v){var r = "([^,;/]+)";var p = cljs.core.keyword.call(null,v);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,p], null);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/^([^:*]+)/,(function (v){var r = secretary.core.re_escape.call(null,v);return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null);
})], null)], null);var vec__17225 = secretary.core.lex_route.call(null,route,clauses);var re = cljs.core.nth.call(null,vec__17225,0,null);var params = cljs.core.nth.call(null,vec__17225,1,null);if(typeof secretary.core.t17226 !== 'undefined')
{} else
{
/**
* @constructor
*/
secretary.core.t17226 = (function (params,re,vec__17225,clauses,route,compile_route,meta17227){
this.params = params;
this.re = re;
this.vec__17225 = vec__17225;
this.clauses = clauses;
this.route = route;
this.compile_route = compile_route;
this.meta17227 = meta17227;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
secretary.core.t17226.cljs$lang$type = true;
secretary.core.t17226.cljs$lang$ctorStr = "secretary.core/t17226";
secretary.core.t17226.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"secretary.core/t17226");
});
secretary.core.t17226.prototype.secretary$core$IRouteMatches$ = true;
secretary.core.t17226.prototype.secretary$core$IRouteMatches$route_matches$arity$2 = (function (_,route__$2){var self__ = this;
var ___$1 = this;var temp__4092__auto__ = secretary.core.re_matches_STAR_.call(null,self__.re,secretary.core.decode.call(null,route__$2));if(cljs.core.truth_(temp__4092__auto__))
{var vec__17229 = temp__4092__auto__;var ___$2 = cljs.core.nth.call(null,vec__17229,0,null);var ms = cljs.core.nthnext.call(null,vec__17229,1);return cljs.core.merge_with.call(null,cljs.core.vector,cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.call(null,2,cljs.core.interleave.call(null,self__.params,ms)));
} else
{return null;
}
});
secretary.core.t17226.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17228){var self__ = this;
var _17228__$1 = this;return self__.meta17227;
});
secretary.core.t17226.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17228,meta17227__$1){var self__ = this;
var _17228__$1 = this;return (new secretary.core.t17226(self__.params,self__.re,self__.vec__17225,self__.clauses,self__.route,self__.compile_route,meta17227__$1));
});
secretary.core.__GT_t17226 = (function __GT_t17226(params__$1,re__$1,vec__17225__$1,clauses__$1,route__$1,compile_route__$1,meta17227){return (new secretary.core.t17226(params__$1,re__$1,vec__17225__$1,clauses__$1,route__$1,compile_route__$1,meta17227));
});
}
return (new secretary.core.t17226(params,re,vec__17225,clauses,route,compile_route,null));
});
/**
* @param {...*} var_args
*/
secretary.core.render_route_STAR_ = (function() { 
var render_route_STAR___delegate = function (obj,args){if((function (){var G__17231 = obj;if(G__17231)
{var bit__4053__auto__ = null;if(cljs.core.truth_((function (){var or__3403__auto__ = bit__4053__auto__;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return G__17231.secretary$core$IRenderRoute$;
}
})()))
{return true;
} else
{if((!G__17231.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,secretary.core.IRenderRoute,G__17231);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,secretary.core.IRenderRoute,G__17231);
}
})())
{return cljs.core.apply.call(null,secretary.core.render_route,obj,args);
} else
{return null;
}
};
var render_route_STAR_ = function (obj,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return render_route_STAR___delegate.call(this,obj,args);};
render_route_STAR_.cljs$lang$maxFixedArity = 1;
render_route_STAR_.cljs$lang$applyTo = (function (arglist__17232){
var obj = cljs.core.first(arglist__17232);
var args = cljs.core.rest(arglist__17232);
return render_route_STAR___delegate(obj,args);
});
render_route_STAR_.cljs$core$IFn$_invoke$arity$variadic = render_route_STAR___delegate;
return render_route_STAR_;
})()
;
secretary.core._STAR_routes_STAR_ = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
secretary.core.add_route_BANG_ = (function add_route_BANG_(obj,action){var obj__$1 = ((typeof obj === 'string')?secretary.core.compile_route.call(null,obj):obj);return cljs.core.swap_BANG_.call(null,secretary.core._STAR_routes_STAR_,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj__$1,action], null));
});
secretary.core.remove_route_BANG_ = (function remove_route_BANG_(obj){return cljs.core.swap_BANG_.call(null,secretary.core._STAR_routes_STAR_,(function (rs){return cljs.core.filterv.call(null,(function (p__17235){var vec__17236 = p__17235;var x = cljs.core.nth.call(null,vec__17236,0,null);var _ = cljs.core.nth.call(null,vec__17236,1,null);return cljs.core.not_EQ_.call(null,x,obj);
}),rs);
}));
});
secretary.core.reset_routes_BANG_ = (function reset_routes_BANG_(){return cljs.core.reset_BANG_.call(null,secretary.core._STAR_routes_STAR_,cljs.core.PersistentVector.EMPTY);
});
secretary.core.locate_route = (function locate_route(route){return cljs.core.some.call(null,(function (p__17239){var vec__17240 = p__17239;var compiled_route = cljs.core.nth.call(null,vec__17240,0,null);var action = cljs.core.nth.call(null,vec__17240,1,null);var temp__4092__auto__ = secretary.core.route_matches.call(null,compiled_route,route);if(cljs.core.truth_(temp__4092__auto__))
{var params = temp__4092__auto__;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [action,secretary.core.route_matches.call(null,compiled_route,route)], null);
} else
{return null;
}
}),cljs.core.deref.call(null,secretary.core._STAR_routes_STAR_));
});
/**
* Dispatch an action for a given route if it matches the URI path.
*/
secretary.core.dispatch_BANG_ = (function dispatch_BANG_(uri){var vec__17243 = clojure.string.split.call(null,uri,/\?/);var uri_path = cljs.core.nth.call(null,vec__17243,0,null);var query_string = cljs.core.nth.call(null,vec__17243,1,null);var query_params = (cljs.core.truth_(query_string)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-params","query-params",1080249757),secretary.core.decode_query_params.call(null,query_string)], null):null);var vec__17244 = secretary.core.locate_route.call(null,uri_path);var action = cljs.core.nth.call(null,vec__17244,0,null);var params = cljs.core.nth.call(null,vec__17244,1,null);var action__$1 = (function (){var or__3403__auto__ = action;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return cljs.core.identity;
}
})();var params__$1 = cljs.core.merge.call(null,params,query_params);return action__$1.call(null,params__$1);
});
RegExp.prototype.secretary$core$IRouteMatches$ = true;
RegExp.prototype.secretary$core$IRouteMatches$route_matches$arity$2 = (function (this$,route){var this$__$1 = this;var temp__4092__auto__ = secretary.core.re_matches_STAR_.call(null,this$__$1,route);if(cljs.core.truth_(temp__4092__auto__))
{var vec__17245 = temp__4092__auto__;var _ = cljs.core.nth.call(null,vec__17245,0,null);var ms = cljs.core.nthnext.call(null,vec__17245,1);return cljs.core.vec.call(null,ms);
} else
{return null;
}
});
(secretary.core.IRouteMatches["string"] = true);
(secretary.core.route_matches["string"] = (function (this$,route){return secretary.core.route_matches.call(null,secretary.core.compile_route.call(null,this$),secretary.core.decode.call(null,route));
}));
(secretary.core.IRenderRoute["string"] = true);
(secretary.core.render_route["string"] = (function (this$){return secretary.core.render_route.call(null,this$,cljs.core.PersistentArrayMap.EMPTY);
}));
(secretary.core.render_route["string"] = (function (this$,params){var map__17246 = params;var map__17246__$1 = ((cljs.core.seq_QMARK_.call(null,map__17246))?cljs.core.apply.call(null,cljs.core.hash_map,map__17246):map__17246);var m = map__17246__$1;var query_params = cljs.core.get.call(null,map__17246__$1,new cljs.core.Keyword(null,"query-params","query-params",1080249757));var a = cljs.core.atom.call(null,m);var path = this$.replace((new RegExp(":[^\\s.:*/]+|\\*[^\\s.:*/]*","g")),((function (map__17246,map__17246__$1,m,query_params,a){
return (function ($1){var lookup = cljs.core.keyword.call(null,cljs.core.subs.call(null,$1,1));var v = cljs.core.deref.call(null,a).call(null,lookup);if(cljs.core.sequential_QMARK_.call(null,v))
{cljs.core.swap_BANG_.call(null,a,cljs.core.assoc,lookup,cljs.core.next.call(null,v));
return cljs.core.first.call(null,v);
} else
{var or__3403__auto__ = v;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return $1;
}
}
});})(map__17246,map__17246__$1,m,query_params,a))
);var path__$1 = [cljs.core.str(secretary.core.get_config.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prefix","prefix",4328760836)], null))),cljs.core.str(path)].join('');var temp__4090__auto__ = (function (){var and__3391__auto__ = query_params;if(cljs.core.truth_(and__3391__auto__))
{return secretary.core.encode_query_params.call(null,query_params);
} else
{return and__3391__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var query_string = temp__4090__auto__;return [cljs.core.str(path__$1),cljs.core.str("?"),cljs.core.str(query_string)].join('');
} else
{return path__$1;
}
}));

//# sourceMappingURL=core.js.map