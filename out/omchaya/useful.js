// Compiled by ClojureScript 0.0-2156
goog.provide('omchaya.useful');
goog.require('cljs.core');
/**
* Create a new map from m by calling function f on each value to get a new value.
* @param {...*} var_args
*/
omchaya.useful.map_vals = (function() { 
var map_vals__delegate = function (m,f,args){if(cljs.core.truth_(m))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4120__auto__ = (function iter__10772(s__10773){return (new cljs.core.LazySeq(null,(function (){var s__10773__$1 = s__10773;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10773__$1);if(temp__4092__auto__)
{var s__10773__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10773__$2))
{var c__4118__auto__ = cljs.core.chunk_first.call(null,s__10773__$2);var size__4119__auto__ = cljs.core.count.call(null,c__4118__auto__);var b__10775 = cljs.core.chunk_buffer.call(null,size__4119__auto__);if((function (){var i__10774 = 0;while(true){
if((i__10774 < size__4119__auto__))
{var vec__10778 = cljs.core._nth.call(null,c__4118__auto__,i__10774);var k = cljs.core.nth.call(null,vec__10778,0,null);var v = cljs.core.nth.call(null,vec__10778,1,null);cljs.core.chunk_append.call(null,b__10775,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.apply.call(null,f,v,args)], null));
{
var G__10780 = (i__10774 + 1);
i__10774 = G__10780;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10775),iter__10772.call(null,cljs.core.chunk_rest.call(null,s__10773__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10775),null);
}
} else
{var vec__10779 = cljs.core.first.call(null,s__10773__$2);var k = cljs.core.nth.call(null,vec__10779,0,null);var v = cljs.core.nth.call(null,vec__10779,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.apply.call(null,f,v,args)], null),iter__10772.call(null,cljs.core.rest.call(null,s__10773__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4120__auto__.call(null,m);
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
map_vals.cljs$lang$applyTo = (function (arglist__10781){
var m = cljs.core.first(arglist__10781);
arglist__10781 = cljs.core.next(arglist__10781);
var f = cljs.core.first(arglist__10781);
var args = cljs.core.rest(arglist__10781);
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
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4120__auto__ = (function iter__10790(s__10791){return (new cljs.core.LazySeq(null,(function (){var s__10791__$1 = s__10791;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10791__$1);if(temp__4092__auto__)
{var s__10791__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10791__$2))
{var c__4118__auto__ = cljs.core.chunk_first.call(null,s__10791__$2);var size__4119__auto__ = cljs.core.count.call(null,c__4118__auto__);var b__10793 = cljs.core.chunk_buffer.call(null,size__4119__auto__);if((function (){var i__10792 = 0;while(true){
if((i__10792 < size__4119__auto__))
{var vec__10796 = cljs.core._nth.call(null,c__4118__auto__,i__10792);var k = cljs.core.nth.call(null,vec__10796,0,null);var v = cljs.core.nth.call(null,vec__10796,1,null);cljs.core.chunk_append.call(null,b__10793,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,f,k,args),v], null));
{
var G__10798 = (i__10792 + 1);
i__10792 = G__10798;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10793),iter__10790.call(null,cljs.core.chunk_rest.call(null,s__10791__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10793),null);
}
} else
{var vec__10797 = cljs.core.first.call(null,s__10791__$2);var k = cljs.core.nth.call(null,vec__10797,0,null);var v = cljs.core.nth.call(null,vec__10797,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,f,k,args),v], null),iter__10790.call(null,cljs.core.rest.call(null,s__10791__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4120__auto__.call(null,m);
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
map_keys.cljs$lang$applyTo = (function (arglist__10799){
var m = cljs.core.first(arglist__10799);
arglist__10799 = cljs.core.next(arglist__10799);
var f = cljs.core.first(arglist__10799);
var args = cljs.core.rest(arglist__10799);
return map_keys__delegate(m,f,args);
});
map_keys.cljs$core$IFn$_invoke$arity$variadic = map_keys__delegate;
return map_keys;
})()
;
omchaya.useful.ffilter = cljs.core.comp.call(null,cljs.core.first,cljs.core.filter);

//# sourceMappingURL=useful.js.map