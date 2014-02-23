// Compiled by ClojureScript 0.0-2156
goog.provide('secretary.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
secretary.core.IRouteMatches = (function (){var obj27497 = {};return obj27497;
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
{throw cljs.core.missing_protocol("IRouteMatches.route-matches",this$);
}
}
})().call(null,this$,route);
}
});
secretary.core.IRenderRoute = (function (){var obj27499 = {};return obj27499;
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
{throw cljs.core.missing_protocol("IRenderRoute.render-route",this$);
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
{throw cljs.core.missing_protocol("IRenderRoute.render-route",this$);
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
secretary.core._STAR_config_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$529,""], null));
/**
* Gets a value for *config* at path.
*/
secretary.core.get_config = (function get_config(path){var path__$1 = ((cljs.core.sequential_QMARK_(path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(secretary.core._STAR_config_STAR_),path__$1);
});
/**
* Associates a value val for *config* at path.
*/
secretary.core.set_config_BANG_ = (function set_config_BANG_(path,val){var path__$1 = ((cljs.core.sequential_QMARK_(path))?path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(secretary.core._STAR_config_STAR_,cljs.core.assoc_in,path__$1,val);
});
secretary.core.encode = encodeURIComponent;
secretary.core.decode = decodeURIComponent;
/**
* Turns a map of query parameters into url encoded string.
*/
secretary.core.encode_query_params = (function encode_query_params(query_params){return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__27502){var vec__27503 = p__27502;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27503,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27503,1,null);return [cljs.core.str(cljs.core.name(k)),cljs.core.str("="),cljs.core.str((secretary.core.encode.cljs$core$IFn$_invoke$arity$1 ? secretary.core.encode.cljs$core$IFn$_invoke$arity$1((((v instanceof cljs.core.Keyword))?cljs.core.name(v):[cljs.core.str(v)].join(''))) : secretary.core.encode.call(null,(((v instanceof cljs.core.Keyword))?cljs.core.name(v):[cljs.core.str(v)].join('')))))].join('');
}),query_params));
});
/**
* Extract a map of query parameters from a query string.
*/
secretary.core.decode_query_params = (function decode_query_params(query_string){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,param){var vec__27505 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(param,/=/,2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27505,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27505,1,null);var v__$1 = (secretary.core.decode.cljs$core$IFn$_invoke$arity$1 ? secretary.core.decode.cljs$core$IFn$_invoke$arity$1(v) : secretary.core.decode.call(null,v));return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v__$1);
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2(query_string,/&/));
});
/**
* Like re-matches but result is a always vector. If re does not
* capture matches then it will return a vector of [m m] as if it had a
* single capture. Other wise it maintains consistent behavior with
* re-matches.
*/
secretary.core.re_matches_STAR_ = (function re_matches_STAR_(re,s){var ms = cljs.core.re_matches(re,s);if(cljs.core.truth_(ms))
{if(cljs.core.sequential_QMARK_(ms))
{return ms;
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms,ms], null);
}
} else
{return null;
}
});
secretary.core.re_escape_chars = cljs.core.set("\\.*+|?()[]{}$^");
secretary.core.re_escape = (function re_escape(s){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,c){if(cljs.core.truth_((secretary.core.re_escape_chars.cljs$core$IFn$_invoke$arity$1 ? secretary.core.re_escape_chars.cljs$core$IFn$_invoke$arity$1(c) : secretary.core.re_escape_chars.call(null,c))))
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
secretary.core.lex_STAR_ = (function lex_STAR_(s,clauses){return cljs.core.some((function (p__27509){var vec__27510 = p__27509;var re = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27510,0,null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27510,1,null);var temp__4092__auto__ = cljs.core.re_find(re,s);if(cljs.core.truth_(temp__4092__auto__))
{var vec__27511 = temp__4092__auto__;var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27511,0,null);var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27511,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,cljs.core.count(m)),(action.cljs$core$IFn$_invoke$arity$1 ? action.cljs$core$IFn$_invoke$arity$1(c) : action.call(null,c))], null);
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
if(cljs.core.seq(s__$1))
{var vec__27514 = secretary.core.lex_STAR_(s__$1,clauses);var s__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27514,0,null);var vec__27515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27514,1,null);var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27515,0,null);var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27515,1,null);{
var G__27516 = s__$2;
var G__27517 = [cljs.core.str(pattern),cljs.core.str(r)].join('');
var G__27518 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(params,p);
s__$1 = G__27516;
pattern = G__27517;
params = G__27518;
continue;
}
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.re_pattern([cljs.core.str("^"),cljs.core.str(pattern),cljs.core.str("$")].join('')),cljs.core.remove(cljs.core.nil_QMARK_,params)], null);
}
break;
}
});
/**
* Given a route return an instance of IRouteMatches.
*/
secretary.core.compile_route = (function compile_route(route){var clauses = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/^\*([^\s.:*\/]*)/,(function (v){var r = "(.*?)";var p = ((cljs.core.seq(v))?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v):cljs.core.constant$keyword$530);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,p], null);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/^\:([^\s.:*\/]+)/,(function (v){var r = "([^,;/]+)";var p = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,p], null);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [/^([^:*]+)/,(function (v){var r = secretary.core.re_escape(v);return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null);
})], null)], null);var vec__27524 = secretary.core.lex_route(route,clauses);var re = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27524,0,null);var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27524,1,null);if(typeof secretary.core.t27525 !== 'undefined')
{} else
{
/**
* @constructor
*/
secretary.core.t27525 = (function (params,re,vec__27524,clauses,route,compile_route,meta27526){
this.params = params;
this.re = re;
this.vec__27524 = vec__27524;
this.clauses = clauses;
this.route = route;
this.compile_route = compile_route;
this.meta27526 = meta27526;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
secretary.core.t27525.cljs$lang$type = true;
secretary.core.t27525.cljs$lang$ctorStr = "secretary.core/t27525";
secretary.core.t27525.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write(writer__3971__auto__,"secretary.core/t27525");
});
secretary.core.t27525.prototype.secretary$core$IRouteMatches$ = true;
secretary.core.t27525.prototype.secretary$core$IRouteMatches$route_matches$arity$2 = (function (_,route__$2){var self__ = this;
var ___$1 = this;var temp__4092__auto__ = secretary.core.re_matches_STAR_(self__.re,(secretary.core.decode.cljs$core$IFn$_invoke$arity$1 ? secretary.core.decode.cljs$core$IFn$_invoke$arity$1(route__$2) : secretary.core.decode.call(null,route__$2)));if(cljs.core.truth_(temp__4092__auto__))
{var vec__27528 = temp__4092__auto__;var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27528,0,null);var ms = cljs.core.nthnext(vec__27528,1);return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.array_seq([cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(self__.params,ms))], 0));
} else
{return null;
}
});
secretary.core.t27525.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27527){var self__ = this;
var _27527__$1 = this;return self__.meta27526;
});
secretary.core.t27525.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27527,meta27526__$1){var self__ = this;
var _27527__$1 = this;return (new secretary.core.t27525(self__.params,self__.re,self__.vec__27524,self__.clauses,self__.route,self__.compile_route,meta27526__$1));
});
secretary.core.__GT_t27525 = (function __GT_t27525(params__$1,re__$1,vec__27524__$1,clauses__$1,route__$1,compile_route__$1,meta27526){return (new secretary.core.t27525(params__$1,re__$1,vec__27524__$1,clauses__$1,route__$1,compile_route__$1,meta27526));
});
}
return (new secretary.core.t27525(params,re,vec__27524,clauses,route,compile_route,null));
});
/**
* @param {...*} var_args
*/
secretary.core.render_route_STAR_ = (function() { 
var render_route_STAR___delegate = function (obj,args){if((function (){var G__27530 = obj;if(G__27530)
{var bit__4053__auto__ = null;if(cljs.core.truth_((function (){var or__3403__auto__ = bit__4053__auto__;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return G__27530.secretary$core$IRenderRoute$;
}
})()))
{return true;
} else
{if((!G__27530.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(secretary.core.IRenderRoute,G__27530);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(secretary.core.IRenderRoute,G__27530);
}
})())
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(secretary.core.render_route,obj,args);
} else
{return null;
}
};
var render_route_STAR_ = function (obj,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return render_route_STAR___delegate.call(this,obj,args);};
render_route_STAR_.cljs$lang$maxFixedArity = 1;
render_route_STAR_.cljs$lang$applyTo = (function (arglist__27531){
var obj = cljs.core.first(arglist__27531);
var args = cljs.core.rest(arglist__27531);
return render_route_STAR___delegate(obj,args);
});
render_route_STAR_.cljs$core$IFn$_invoke$arity$variadic = render_route_STAR___delegate;
return render_route_STAR_;
})()
;
secretary.core._STAR_routes_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
secretary.core.add_route_BANG_ = (function add_route_BANG_(obj,action){var obj__$1 = ((typeof obj === 'string')?secretary.core.compile_route(obj):obj);return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(secretary.core._STAR_routes_STAR_,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj__$1,action], null));
});
secretary.core.remove_route_BANG_ = (function remove_route_BANG_(obj){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(secretary.core._STAR_routes_STAR_,(function (rs){return cljs.core.filterv((function (p__27534){var vec__27535 = p__27534;var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27535,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27535,1,null);return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x,obj);
}),rs);
}));
});
secretary.core.reset_routes_BANG_ = (function reset_routes_BANG_(){return cljs.core.reset_BANG_(secretary.core._STAR_routes_STAR_,cljs.core.PersistentVector.EMPTY);
});
secretary.core.locate_route = (function locate_route(route){return cljs.core.some((function (p__27538){var vec__27539 = p__27538;var compiled_route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27539,0,null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27539,1,null);var temp__4092__auto__ = secretary.core.route_matches(compiled_route,route);if(cljs.core.truth_(temp__4092__auto__))
{var params = temp__4092__auto__;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [action,secretary.core.route_matches(compiled_route,route)], null);
} else
{return null;
}
}),cljs.core.deref(secretary.core._STAR_routes_STAR_));
});
/**
* Dispatch an action for a given route if it matches the URI path.
*/
secretary.core.dispatch_BANG_ = (function dispatch_BANG_(uri){var vec__27542 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(uri,/\?/);var uri_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27542,0,null);var query_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27542,1,null);var query_params = (cljs.core.truth_(query_string)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$531,secretary.core.decode_query_params(query_string)], null):null);var vec__27543 = secretary.core.locate_route(uri_path);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27543,0,null);var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27543,1,null);var action__$1 = (function (){var or__3403__auto__ = action;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return cljs.core.identity;
}
})();var params__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([params,query_params], 0));return (action__$1.cljs$core$IFn$_invoke$arity$1 ? action__$1.cljs$core$IFn$_invoke$arity$1(params__$1) : action__$1.call(null,params__$1));
});
RegExp.prototype.secretary$core$IRouteMatches$ = true;
RegExp.prototype.secretary$core$IRouteMatches$route_matches$arity$2 = (function (this$,route){var this$__$1 = this;var temp__4092__auto__ = secretary.core.re_matches_STAR_(this$__$1,route);if(cljs.core.truth_(temp__4092__auto__))
{var vec__27544 = temp__4092__auto__;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27544,0,null);var ms = cljs.core.nthnext(vec__27544,1);return cljs.core.vec(ms);
} else
{return null;
}
});
(secretary.core.IRouteMatches["string"] = true);
(secretary.core.route_matches["string"] = (function (this$,route){return secretary.core.compile_route(this$).secretary$core$IRouteMatches$route_matches$arity$2(null,(secretary.core.decode.cljs$core$IFn$_invoke$arity$1 ? secretary.core.decode.cljs$core$IFn$_invoke$arity$1(route) : secretary.core.decode.call(null,route)));
}));
(secretary.core.IRenderRoute["string"] = true);
(secretary.core.render_route["string"] = (function (this$){return secretary.core.render_route.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.PersistentArrayMap.EMPTY);
}));
(secretary.core.render_route["string"] = (function (this$,params){var map__27545 = params;var map__27545__$1 = ((cljs.core.seq_QMARK_(map__27545))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27545):map__27545);var m = map__27545__$1;var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27545__$1,cljs.core.constant$keyword$531);var a = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(m);var path = this$.replace((new RegExp(":[^\\s.:*/]+|\\*[^\\s.:*/]*","g")),((function (map__27545,map__27545__$1,m,query_params,a){
return (function ($1){var lookup = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2($1,1));var v = cljs.core.deref(a).call(null,lookup);if(cljs.core.sequential_QMARK_(v))
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(a,cljs.core.assoc,lookup,cljs.core.next(v));
return cljs.core.first(v);
} else
{var or__3403__auto__ = v;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return $1;
}
}
});})(map__27545,map__27545__$1,m,query_params,a))
);var path__$1 = [cljs.core.str(secretary.core.get_config(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$529], null))),cljs.core.str(path)].join('');var temp__4090__auto__ = (function (){var and__3391__auto__ = query_params;if(cljs.core.truth_(and__3391__auto__))
{return secretary.core.encode_query_params(query_params);
} else
{return and__3391__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var query_string = temp__4090__auto__;return [cljs.core.str(path__$1),cljs.core.str("?"),cljs.core.str(query_string)].join('');
} else
{return path__$1;
}
}));
