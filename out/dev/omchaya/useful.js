// Compiled by ClojureScript 0.0-2156
goog.provide('omchaya.useful');
goog.require('cljs.core');
/**
* Create a new map from m by calling function f on each value to get a new value.
* @param {...*} var_args
*/
omchaya.useful.map_vals = (function() { 
var map_vals__delegate = function (m,f,args){if(cljs.core.truth_(m))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4120__auto__ = (function iter__12145(s__12146){return (new cljs.core.LazySeq(null,(function (){var s__12146__$1 = s__12146;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12146__$1);if(temp__4092__auto__)
{var s__12146__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12146__$2))
{var c__4118__auto__ = cljs.core.chunk_first.call(null,s__12146__$2);var size__4119__auto__ = cljs.core.count.call(null,c__4118__auto__);var b__12148 = cljs.core.chunk_buffer.call(null,size__4119__auto__);if((function (){var i__12147 = 0;while(true){
if((i__12147 < size__4119__auto__))
{var vec__12151 = cljs.core._nth.call(null,c__4118__auto__,i__12147);var k = cljs.core.nth.call(null,vec__12151,0,null);var v = cljs.core.nth.call(null,vec__12151,1,null);cljs.core.chunk_append.call(null,b__12148,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.apply.call(null,f,v,args)], null));
{
var G__12153 = (i__12147 + 1);
i__12147 = G__12153;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12148),iter__12145.call(null,cljs.core.chunk_rest.call(null,s__12146__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12148),null);
}
} else
{var vec__12152 = cljs.core.first.call(null,s__12146__$2);var k = cljs.core.nth.call(null,vec__12152,0,null);var v = cljs.core.nth.call(null,vec__12152,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.apply.call(null,f,v,args)], null),iter__12145.call(null,cljs.core.rest.call(null,s__12146__$2)));
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
map_vals.cljs$lang$applyTo = (function (arglist__12154){
var m = cljs.core.first(arglist__12154);
arglist__12154 = cljs.core.next(arglist__12154);
var f = cljs.core.first(arglist__12154);
var args = cljs.core.rest(arglist__12154);
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
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4120__auto__ = (function iter__12163(s__12164){return (new cljs.core.LazySeq(null,(function (){var s__12164__$1 = s__12164;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12164__$1);if(temp__4092__auto__)
{var s__12164__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12164__$2))
{var c__4118__auto__ = cljs.core.chunk_first.call(null,s__12164__$2);var size__4119__auto__ = cljs.core.count.call(null,c__4118__auto__);var b__12166 = cljs.core.chunk_buffer.call(null,size__4119__auto__);if((function (){var i__12165 = 0;while(true){
if((i__12165 < size__4119__auto__))
{var vec__12169 = cljs.core._nth.call(null,c__4118__auto__,i__12165);var k = cljs.core.nth.call(null,vec__12169,0,null);var v = cljs.core.nth.call(null,vec__12169,1,null);cljs.core.chunk_append.call(null,b__12166,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,f,k,args),v], null));
{
var G__12171 = (i__12165 + 1);
i__12165 = G__12171;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12166),iter__12163.call(null,cljs.core.chunk_rest.call(null,s__12164__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12166),null);
}
} else
{var vec__12170 = cljs.core.first.call(null,s__12164__$2);var k = cljs.core.nth.call(null,vec__12170,0,null);var v = cljs.core.nth.call(null,vec__12170,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,f,k,args),v], null),iter__12163.call(null,cljs.core.rest.call(null,s__12164__$2)));
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
map_keys.cljs$lang$applyTo = (function (arglist__12172){
var m = cljs.core.first(arglist__12172);
arglist__12172 = cljs.core.next(arglist__12172);
var f = cljs.core.first(arglist__12172);
var args = cljs.core.rest(arglist__12172);
return map_keys__delegate(m,f,args);
});
map_keys.cljs$core$IFn$_invoke$arity$variadic = map_keys__delegate;
return map_keys;
})()
;
omchaya.useful.ffilter = cljs.core.comp.call(null,cljs.core.first,cljs.core.filter);

//# sourceMappingURL=useful.js.map