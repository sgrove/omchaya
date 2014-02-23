// Compiled by ClojureScript 0.0-2156
goog.provide('omchaya.useful');
goog.require('cljs.core');
/**
* Create a new map from m by calling function f on each value to get a new value.
* @param {...*} var_args
*/
omchaya.useful.map_vals = (function() { 
var map_vals__delegate = function (m,f,args){if(cljs.core.truth_(m))
{return cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4120__auto__ = (function iter__22444(s__22445){return (new cljs.core.LazySeq(null,(function (){var s__22445__$1 = s__22445;while(true){
var temp__4092__auto__ = cljs.core.seq(s__22445__$1);if(temp__4092__auto__)
{var s__22445__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__22445__$2))
{var c__4118__auto__ = cljs.core.chunk_first(s__22445__$2);var size__4119__auto__ = cljs.core.count(c__4118__auto__);var b__22447 = cljs.core.chunk_buffer(size__4119__auto__);if((function (){var i__22446 = 0;while(true){
if((i__22446 < size__4119__auto__))
{var vec__22450 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4118__auto__,i__22446);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22450,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22450,1,null);cljs.core.chunk_append(b__22447,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,v,args)], null));
{
var G__22452 = (i__22446 + 1);
i__22446 = G__22452;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__22447),iter__22444(cljs.core.chunk_rest(s__22445__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__22447),null);
}
} else
{var vec__22451 = cljs.core.first(s__22445__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22451,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22451,1,null);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,v,args)], null),iter__22444(cljs.core.rest(s__22445__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4120__auto__(m);
})());
} else
{return null;
}
};
var map_vals = function (m,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return map_vals__delegate.call(this,m,f,args);};
map_vals.cljs$lang$maxFixedArity = 2;
map_vals.cljs$lang$applyTo = (function (arglist__22453){
var m = cljs.core.first(arglist__22453);
arglist__22453 = cljs.core.next(arglist__22453);
var f = cljs.core.first(arglist__22453);
var args = cljs.core.rest(arglist__22453);
return map_vals__delegate(m,f,args);
});
map_vals.cljs$core$IFn$_invoke$arity$variadic = map_vals__delegate;
return map_vals;
})()
;
/**
* Create a new map from m by calling function f on each key to get a new key.
* @param {...*} var_args
*/
omchaya.useful.map_keys = (function() { 
var map_keys__delegate = function (m,f,args){if(cljs.core.truth_(m))
{return cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4120__auto__ = (function iter__22462(s__22463){return (new cljs.core.LazySeq(null,(function (){var s__22463__$1 = s__22463;while(true){
var temp__4092__auto__ = cljs.core.seq(s__22463__$1);if(temp__4092__auto__)
{var s__22463__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__22463__$2))
{var c__4118__auto__ = cljs.core.chunk_first(s__22463__$2);var size__4119__auto__ = cljs.core.count(c__4118__auto__);var b__22465 = cljs.core.chunk_buffer(size__4119__auto__);if((function (){var i__22464 = 0;while(true){
if((i__22464 < size__4119__auto__))
{var vec__22468 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4118__auto__,i__22464);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22468,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22468,1,null);cljs.core.chunk_append(b__22465,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,k,args),v], null));
{
var G__22470 = (i__22464 + 1);
i__22464 = G__22470;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__22465),iter__22462(cljs.core.chunk_rest(s__22463__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__22465),null);
}
} else
{var vec__22469 = cljs.core.first(s__22463__$2);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22469,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22469,1,null);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,k,args),v], null),iter__22462(cljs.core.rest(s__22463__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4120__auto__(m);
})());
} else
{return null;
}
};
var map_keys = function (m,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return map_keys__delegate.call(this,m,f,args);};
map_keys.cljs$lang$maxFixedArity = 2;
map_keys.cljs$lang$applyTo = (function (arglist__22471){
var m = cljs.core.first(arglist__22471);
arglist__22471 = cljs.core.next(arglist__22471);
var f = cljs.core.first(arglist__22471);
var args = cljs.core.rest(arglist__22471);
return map_keys__delegate(m,f,args);
});
map_keys.cljs$core$IFn$_invoke$arity$variadic = map_keys__delegate;
return map_keys;
})()
;
omchaya.useful.ffilter = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter);
