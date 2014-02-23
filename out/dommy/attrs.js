// Compiled by ClojureScript 0.0-2156
goog.provide('dommy.attrs');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* does class-name string have class starting at index idx.
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_match_QMARK_ = (function class_match_QMARK_(class_name,class$,idx){var and__3391__auto__ = ((idx === 0)) || ((" " === class_name.charAt((idx - 1))));if(and__3391__auto__)
{var total_len = class_name.length;var stop = (idx + class$.length);if((stop <= total_len))
{return ((stop === total_len)) || ((" " === class_name.charAt(stop)));
} else
{return null;
}
} else
{return and__3391__auto__;
}
});
/**
* Finds the index of class in a space-delimited class-name
* only will be used when Element::classList doesn't exist
*/
dommy.attrs.class_index = (function class_index(class_name,class$){var start_from = 0;while(true){
var i = class_name.indexOf(class$,start_from);if((i >= 0))
{if(dommy.attrs.class_match_QMARK_.call(null,class_name,class$,i))
{return i;
} else
{{
var G__15290 = (i + class$.length);
start_from = G__15290;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Does an HTML element have a class. Uses Element::classList if
* available and otherwise does fast parse of className string
*/
dommy.attrs.has_class_QMARK_ = (function has_class_QMARK_(elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto__ = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto__))
{var class_list = temp__4090__auto__;return class_list.contains(class$__$1);
} else
{var temp__4092__auto__ = elem__$1.className;if(cljs.core.truth_(temp__4092__auto__))
{var class_name = temp__4092__auto__;var temp__4092__auto____$1 = dommy.attrs.class_index.call(null,class_name,class$__$1);if(cljs.core.truth_(temp__4092__auto____$1))
{var i = temp__4092__auto____$1;return (i >= 0);
} else
{return null;
}
} else
{return null;
}
}
});
/**
* add class to element
* @param {...*} var_args
*/
dommy.attrs.add_class_BANG_ = (function() {
var add_class_BANG_ = null;
var add_class_BANG___2 = (function (elem,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var classes__$1 = clojure.string.trim.call(null,cljs.core.name.call(null,classes));if(cljs.core.seq.call(null,classes__$1))
{var temp__4090__auto___15315 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___15315))
{var class_list_15316 = temp__4090__auto___15315;var seq__15303_15317 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__15304_15318 = null;var count__15305_15319 = 0;var i__15306_15320 = 0;while(true){
if((i__15306_15320 < count__15305_15319))
{var class_15321 = cljs.core._nth.call(null,chunk__15304_15318,i__15306_15320);class_list_15316.add(class_15321);
{
var G__15322 = seq__15303_15317;
var G__15323 = chunk__15304_15318;
var G__15324 = count__15305_15319;
var G__15325 = (i__15306_15320 + 1);
seq__15303_15317 = G__15322;
chunk__15304_15318 = G__15323;
count__15305_15319 = G__15324;
i__15306_15320 = G__15325;
continue;
}
} else
{var temp__4092__auto___15326 = cljs.core.seq.call(null,seq__15303_15317);if(temp__4092__auto___15326)
{var seq__15303_15327__$1 = temp__4092__auto___15326;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15303_15327__$1))
{var c__4151__auto___15328 = cljs.core.chunk_first.call(null,seq__15303_15327__$1);{
var G__15329 = cljs.core.chunk_rest.call(null,seq__15303_15327__$1);
var G__15330 = c__4151__auto___15328;
var G__15331 = cljs.core.count.call(null,c__4151__auto___15328);
var G__15332 = 0;
seq__15303_15317 = G__15329;
chunk__15304_15318 = G__15330;
count__15305_15319 = G__15331;
i__15306_15320 = G__15332;
continue;
}
} else
{var class_15333 = cljs.core.first.call(null,seq__15303_15327__$1);class_list_15316.add(class_15333);
{
var G__15334 = cljs.core.next.call(null,seq__15303_15327__$1);
var G__15335 = null;
var G__15336 = 0;
var G__15337 = 0;
seq__15303_15317 = G__15334;
chunk__15304_15318 = G__15335;
count__15305_15319 = G__15336;
i__15306_15320 = G__15337;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_15338 = elem__$1.className;var seq__15307_15339 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__15308_15340 = null;var count__15309_15341 = 0;var i__15310_15342 = 0;while(true){
if((i__15310_15342 < count__15309_15341))
{var class_15343 = cljs.core._nth.call(null,chunk__15308_15340,i__15310_15342);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_15338,class_15343)))
{} else
{elem__$1.className = (((class_name_15338 === ""))?class_15343:[cljs.core.str(class_name_15338),cljs.core.str(" "),cljs.core.str(class_15343)].join(''));
}
{
var G__15344 = seq__15307_15339;
var G__15345 = chunk__15308_15340;
var G__15346 = count__15309_15341;
var G__15347 = (i__15310_15342 + 1);
seq__15307_15339 = G__15344;
chunk__15308_15340 = G__15345;
count__15309_15341 = G__15346;
i__15310_15342 = G__15347;
continue;
}
} else
{var temp__4092__auto___15348 = cljs.core.seq.call(null,seq__15307_15339);if(temp__4092__auto___15348)
{var seq__15307_15349__$1 = temp__4092__auto___15348;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15307_15349__$1))
{var c__4151__auto___15350 = cljs.core.chunk_first.call(null,seq__15307_15349__$1);{
var G__15351 = cljs.core.chunk_rest.call(null,seq__15307_15349__$1);
var G__15352 = c__4151__auto___15350;
var G__15353 = cljs.core.count.call(null,c__4151__auto___15350);
var G__15354 = 0;
seq__15307_15339 = G__15351;
chunk__15308_15340 = G__15352;
count__15309_15341 = G__15353;
i__15310_15342 = G__15354;
continue;
}
} else
{var class_15355 = cljs.core.first.call(null,seq__15307_15349__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_15338,class_15355)))
{} else
{elem__$1.className = (((class_name_15338 === ""))?class_15355:[cljs.core.str(class_name_15338),cljs.core.str(" "),cljs.core.str(class_15355)].join(''));
}
{
var G__15356 = cljs.core.next.call(null,seq__15307_15349__$1);
var G__15357 = null;
var G__15358 = 0;
var G__15359 = 0;
seq__15307_15339 = G__15356;
chunk__15308_15340 = G__15357;
count__15309_15341 = G__15358;
i__15310_15342 = G__15359;
continue;
}
}
} else
{}
}
break;
}
}
} else
{}
return elem__$1;
});
var add_class_BANG___3 = (function() { 
var G__15360__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__15311_15361 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__15312_15362 = null;var count__15313_15363 = 0;var i__15314_15364 = 0;while(true){
if((i__15314_15364 < count__15313_15363))
{var c_15365 = cljs.core._nth.call(null,chunk__15312_15362,i__15314_15364);add_class_BANG_.call(null,elem__$1,c_15365);
{
var G__15366 = seq__15311_15361;
var G__15367 = chunk__15312_15362;
var G__15368 = count__15313_15363;
var G__15369 = (i__15314_15364 + 1);
seq__15311_15361 = G__15366;
chunk__15312_15362 = G__15367;
count__15313_15363 = G__15368;
i__15314_15364 = G__15369;
continue;
}
} else
{var temp__4092__auto___15370 = cljs.core.seq.call(null,seq__15311_15361);if(temp__4092__auto___15370)
{var seq__15311_15371__$1 = temp__4092__auto___15370;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15311_15371__$1))
{var c__4151__auto___15372 = cljs.core.chunk_first.call(null,seq__15311_15371__$1);{
var G__15373 = cljs.core.chunk_rest.call(null,seq__15311_15371__$1);
var G__15374 = c__4151__auto___15372;
var G__15375 = cljs.core.count.call(null,c__4151__auto___15372);
var G__15376 = 0;
seq__15311_15361 = G__15373;
chunk__15312_15362 = G__15374;
count__15313_15363 = G__15375;
i__15314_15364 = G__15376;
continue;
}
} else
{var c_15377 = cljs.core.first.call(null,seq__15311_15371__$1);add_class_BANG_.call(null,elem__$1,c_15377);
{
var G__15378 = cljs.core.next.call(null,seq__15311_15371__$1);
var G__15379 = null;
var G__15380 = 0;
var G__15381 = 0;
seq__15311_15361 = G__15378;
chunk__15312_15362 = G__15379;
count__15313_15363 = G__15380;
i__15314_15364 = G__15381;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__15360 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15360__delegate.call(this,elem,classes,more_classes);};
G__15360.cljs$lang$maxFixedArity = 2;
G__15360.cljs$lang$applyTo = (function (arglist__15382){
var elem = cljs.core.first(arglist__15382);
arglist__15382 = cljs.core.next(arglist__15382);
var classes = cljs.core.first(arglist__15382);
var more_classes = cljs.core.rest(arglist__15382);
return G__15360__delegate(elem,classes,more_classes);
});
G__15360.cljs$core$IFn$_invoke$arity$variadic = G__15360__delegate;
return G__15360;
})()
;
add_class_BANG_ = function(elem,classes,var_args){
var more_classes = var_args;
switch(arguments.length){
case 2:
return add_class_BANG___2.call(this,elem,classes);
default:
return add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,classes, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_class_BANG_.cljs$lang$maxFixedArity = 2;
add_class_BANG_.cljs$lang$applyTo = add_class_BANG___3.cljs$lang$applyTo;
add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = add_class_BANG___2;
add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return add_class_BANG_;
})()
;
dommy.attrs.remove_class_str = (function remove_class_str(init_class_name,class$){var class_name = init_class_name;while(true){
var class_len = class_name.length;var temp__4090__auto__ = dommy.attrs.class_index.call(null,class_name,class$);if(cljs.core.truth_(temp__4090__auto__))
{var i = temp__4090__auto__;{
var G__15383 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__15383;
continue;
}
} else
{return class_name;
}
break;
}
});
/**
* remove class from and returns `elem`
* @param {...*} var_args
*/
dommy.attrs.remove_class_BANG_ = (function() {
var remove_class_BANG_ = null;
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___15392 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___15392))
{var class_list_15393 = temp__4090__auto___15392;class_list_15393.remove(class$__$1);
} else
{var class_name_15394 = elem__$1.className;var new_class_name_15395 = dommy.attrs.remove_class_str.call(null,class_name_15394,class$__$1);if((class_name_15394 === new_class_name_15395))
{} else
{elem__$1.className = new_class_name_15395;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__15396__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__15388 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__15389 = null;var count__15390 = 0;var i__15391 = 0;while(true){
if((i__15391 < count__15390))
{var c = cljs.core._nth.call(null,chunk__15389,i__15391);remove_class_BANG_.call(null,elem__$1,c);
{
var G__15397 = seq__15388;
var G__15398 = chunk__15389;
var G__15399 = count__15390;
var G__15400 = (i__15391 + 1);
seq__15388 = G__15397;
chunk__15389 = G__15398;
count__15390 = G__15399;
i__15391 = G__15400;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__15388);if(temp__4092__auto__)
{var seq__15388__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15388__$1))
{var c__4151__auto__ = cljs.core.chunk_first.call(null,seq__15388__$1);{
var G__15401 = cljs.core.chunk_rest.call(null,seq__15388__$1);
var G__15402 = c__4151__auto__;
var G__15403 = cljs.core.count.call(null,c__4151__auto__);
var G__15404 = 0;
seq__15388 = G__15401;
chunk__15389 = G__15402;
count__15390 = G__15403;
i__15391 = G__15404;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__15388__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__15405 = cljs.core.next.call(null,seq__15388__$1);
var G__15406 = null;
var G__15407 = 0;
var G__15408 = 0;
seq__15388 = G__15405;
chunk__15389 = G__15406;
count__15390 = G__15407;
i__15391 = G__15408;
continue;
}
}
} else
{return null;
}
}
break;
}
};
var G__15396 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15396__delegate.call(this,elem,class$,classes);};
G__15396.cljs$lang$maxFixedArity = 2;
G__15396.cljs$lang$applyTo = (function (arglist__15409){
var elem = cljs.core.first(arglist__15409);
arglist__15409 = cljs.core.next(arglist__15409);
var class$ = cljs.core.first(arglist__15409);
var classes = cljs.core.rest(arglist__15409);
return G__15396__delegate(elem,class$,classes);
});
G__15396.cljs$core$IFn$_invoke$arity$variadic = G__15396__delegate;
return G__15396;
})()
;
remove_class_BANG_ = function(elem,class$,var_args){
var classes = var_args;
switch(arguments.length){
case 2:
return remove_class_BANG___2.call(this,elem,class$);
default:
return remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,class$, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_class_BANG_.cljs$lang$maxFixedArity = 2;
remove_class_BANG_.cljs$lang$applyTo = remove_class_BANG___3.cljs$lang$applyTo;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_class_BANG___2;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_class_BANG_;
})()
;
/**
* (toggle-class! elem class) will add-class! if elem does not have class
* and remove-class! otherwise.
* (toggle-class! elem class add?) will add-class! if add? is truthy,
* otherwise it will remove-class!
*/
dommy.attrs.toggle_class_BANG_ = (function() {
var toggle_class_BANG_ = null;
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___15410 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___15410))
{var class_list_15411 = temp__4090__auto___15410;class_list_15411.toggle(class$__$1);
} else
{toggle_class_BANG_.call(null,elem__$1,class$__$1,!(dommy.attrs.has_class_QMARK_.call(null,elem__$1,class$__$1)));
}
return elem__$1;
});
var toggle_class_BANG___3 = (function (elem,class$,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(add_QMARK_)
{dommy.attrs.add_class_BANG_.call(null,elem__$1,class$);
} else
{dommy.attrs.remove_class_BANG_.call(null,elem__$1,class$);
}
return elem__$1;
});
toggle_class_BANG_ = function(elem,class$,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_class_BANG___2.call(this,elem,class$);
case 3:
return toggle_class_BANG___3.call(this,elem,class$,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_class_BANG___2;
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_class_BANG___3;
return toggle_class_BANG_;
})()
;
dommy.attrs.style_str = (function style_str(x){if(typeof x === 'string')
{return x;
} else
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__15414){var vec__15415 = p__15414;var k = cljs.core.nth.call(null,vec__15415,0,null);var v = cljs.core.nth.call(null,vec__15415,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
}),x));
}
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__15422_15428 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__15423_15429 = null;var count__15424_15430 = 0;var i__15425_15431 = 0;while(true){
if((i__15425_15431 < count__15424_15430))
{var vec__15426_15432 = cljs.core._nth.call(null,chunk__15423_15429,i__15425_15431);var k_15433 = cljs.core.nth.call(null,vec__15426_15432,0,null);var v_15434 = cljs.core.nth.call(null,vec__15426_15432,1,null);(style[cljs.core.name.call(null,k_15433)] = v_15434);
{
var G__15435 = seq__15422_15428;
var G__15436 = chunk__15423_15429;
var G__15437 = count__15424_15430;
var G__15438 = (i__15425_15431 + 1);
seq__15422_15428 = G__15435;
chunk__15423_15429 = G__15436;
count__15424_15430 = G__15437;
i__15425_15431 = G__15438;
continue;
}
} else
{var temp__4092__auto___15439 = cljs.core.seq.call(null,seq__15422_15428);if(temp__4092__auto___15439)
{var seq__15422_15440__$1 = temp__4092__auto___15439;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15422_15440__$1))
{var c__4151__auto___15441 = cljs.core.chunk_first.call(null,seq__15422_15440__$1);{
var G__15442 = cljs.core.chunk_rest.call(null,seq__15422_15440__$1);
var G__15443 = c__4151__auto___15441;
var G__15444 = cljs.core.count.call(null,c__4151__auto___15441);
var G__15445 = 0;
seq__15422_15428 = G__15442;
chunk__15423_15429 = G__15443;
count__15424_15430 = G__15444;
i__15425_15431 = G__15445;
continue;
}
} else
{var vec__15427_15446 = cljs.core.first.call(null,seq__15422_15440__$1);var k_15447 = cljs.core.nth.call(null,vec__15427_15446,0,null);var v_15448 = cljs.core.nth.call(null,vec__15427_15446,1,null);(style[cljs.core.name.call(null,k_15447)] = v_15448);
{
var G__15449 = cljs.core.next.call(null,seq__15422_15440__$1);
var G__15450 = null;
var G__15451 = 0;
var G__15452 = 0;
seq__15422_15428 = G__15449;
chunk__15423_15429 = G__15450;
count__15424_15430 = G__15451;
i__15425_15431 = G__15452;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var set_style_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_style_BANG___delegate.call(this,elem,kvs);};
set_style_BANG_.cljs$lang$maxFixedArity = 1;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__15453){
var elem = cljs.core.first(arglist__15453);
var kvs = cljs.core.rest(arglist__15453);
return set_style_BANG___delegate(elem,kvs);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
dommy.attrs.style = (function style(elem,k){if(cljs.core.truth_(k))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"k","k",-1640531420,null)))].join('')));
}
return (window.getComputedStyle(dommy.template.__GT_node_like.call(null,elem))[cljs.core.name.call(null,k)]);
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_px_BANG_ = (function() { 
var set_px_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__15460_15466 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__15461_15467 = null;var count__15462_15468 = 0;var i__15463_15469 = 0;while(true){
if((i__15463_15469 < count__15462_15468))
{var vec__15464_15470 = cljs.core._nth.call(null,chunk__15461_15467,i__15463_15469);var k_15471 = cljs.core.nth.call(null,vec__15464_15470,0,null);var v_15472 = cljs.core.nth.call(null,vec__15464_15470,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_15471,[cljs.core.str(v_15472),cljs.core.str("px")].join(''));
{
var G__15473 = seq__15460_15466;
var G__15474 = chunk__15461_15467;
var G__15475 = count__15462_15468;
var G__15476 = (i__15463_15469 + 1);
seq__15460_15466 = G__15473;
chunk__15461_15467 = G__15474;
count__15462_15468 = G__15475;
i__15463_15469 = G__15476;
continue;
}
} else
{var temp__4092__auto___15477 = cljs.core.seq.call(null,seq__15460_15466);if(temp__4092__auto___15477)
{var seq__15460_15478__$1 = temp__4092__auto___15477;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15460_15478__$1))
{var c__4151__auto___15479 = cljs.core.chunk_first.call(null,seq__15460_15478__$1);{
var G__15480 = cljs.core.chunk_rest.call(null,seq__15460_15478__$1);
var G__15481 = c__4151__auto___15479;
var G__15482 = cljs.core.count.call(null,c__4151__auto___15479);
var G__15483 = 0;
seq__15460_15466 = G__15480;
chunk__15461_15467 = G__15481;
count__15462_15468 = G__15482;
i__15463_15469 = G__15483;
continue;
}
} else
{var vec__15465_15484 = cljs.core.first.call(null,seq__15460_15478__$1);var k_15485 = cljs.core.nth.call(null,vec__15465_15484,0,null);var v_15486 = cljs.core.nth.call(null,vec__15465_15484,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_15485,[cljs.core.str(v_15486),cljs.core.str("px")].join(''));
{
var G__15487 = cljs.core.next.call(null,seq__15460_15478__$1);
var G__15488 = null;
var G__15489 = 0;
var G__15490 = 0;
seq__15460_15466 = G__15487;
chunk__15461_15467 = G__15488;
count__15462_15468 = G__15489;
i__15463_15469 = G__15490;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var set_px_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_px_BANG___delegate.call(this,elem,kvs);};
set_px_BANG_.cljs$lang$maxFixedArity = 1;
set_px_BANG_.cljs$lang$applyTo = (function (arglist__15491){
var elem = cljs.core.first(arglist__15491);
var kvs = cljs.core.rest(arglist__15491);
return set_px_BANG___delegate(elem,kvs);
});
set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_px_BANG___delegate;
return set_px_BANG_;
})()
;
dommy.attrs.px = (function px(elem,k){var pixels = dommy.attrs.style.call(null,dommy.template.__GT_node_like.call(null,elem),k);if(cljs.core.seq.call(null,pixels))
{return parseInt(pixels);
} else
{return null;
}
});
/**
* Sets dom attributes on and returns `elem`.
* Attributes without values will be set to "true":
* 
* (set-attr! elem :disabled)
* 
* With values, the function takes variadic kv pairs:
* 
* (set-attr! elem :id "some-id"
* :name "some-name")
* @param {...*} var_args
*/
dommy.attrs.set_attr_BANG_ = (function() {
var set_attr_BANG_ = null;
var set_attr_BANG___2 = (function (elem,k){return set_attr_BANG_.call(null,dommy.template.__GT_node_like.call(null,elem),k,"true");
});
var set_attr_BANG___3 = (function (elem,k,v){if(cljs.core.truth_(v))
{if(cljs.core.fn_QMARK_.call(null,v))
{var G__15500 = dommy.template.__GT_node_like.call(null,elem);(G__15500[cljs.core.name.call(null,k)] = v);
return G__15500;
} else
{var G__15501 = dommy.template.__GT_node_like.call(null,elem);G__15501.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__15501;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__15508__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__15502_15509 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__15503_15510 = null;var count__15504_15511 = 0;var i__15505_15512 = 0;while(true){
if((i__15505_15512 < count__15504_15511))
{var vec__15506_15513 = cljs.core._nth.call(null,chunk__15503_15510,i__15505_15512);var k_15514__$1 = cljs.core.nth.call(null,vec__15506_15513,0,null);var v_15515__$1 = cljs.core.nth.call(null,vec__15506_15513,1,null);set_attr_BANG_.call(null,elem__$1,k_15514__$1,v_15515__$1);
{
var G__15516 = seq__15502_15509;
var G__15517 = chunk__15503_15510;
var G__15518 = count__15504_15511;
var G__15519 = (i__15505_15512 + 1);
seq__15502_15509 = G__15516;
chunk__15503_15510 = G__15517;
count__15504_15511 = G__15518;
i__15505_15512 = G__15519;
continue;
}
} else
{var temp__4092__auto___15520 = cljs.core.seq.call(null,seq__15502_15509);if(temp__4092__auto___15520)
{var seq__15502_15521__$1 = temp__4092__auto___15520;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15502_15521__$1))
{var c__4151__auto___15522 = cljs.core.chunk_first.call(null,seq__15502_15521__$1);{
var G__15523 = cljs.core.chunk_rest.call(null,seq__15502_15521__$1);
var G__15524 = c__4151__auto___15522;
var G__15525 = cljs.core.count.call(null,c__4151__auto___15522);
var G__15526 = 0;
seq__15502_15509 = G__15523;
chunk__15503_15510 = G__15524;
count__15504_15511 = G__15525;
i__15505_15512 = G__15526;
continue;
}
} else
{var vec__15507_15527 = cljs.core.first.call(null,seq__15502_15521__$1);var k_15528__$1 = cljs.core.nth.call(null,vec__15507_15527,0,null);var v_15529__$1 = cljs.core.nth.call(null,vec__15507_15527,1,null);set_attr_BANG_.call(null,elem__$1,k_15528__$1,v_15529__$1);
{
var G__15530 = cljs.core.next.call(null,seq__15502_15521__$1);
var G__15531 = null;
var G__15532 = 0;
var G__15533 = 0;
seq__15502_15509 = G__15530;
chunk__15503_15510 = G__15531;
count__15504_15511 = G__15532;
i__15505_15512 = G__15533;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__15508 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__15508__delegate.call(this,elem,k,v,kvs);};
G__15508.cljs$lang$maxFixedArity = 3;
G__15508.cljs$lang$applyTo = (function (arglist__15534){
var elem = cljs.core.first(arglist__15534);
arglist__15534 = cljs.core.next(arglist__15534);
var k = cljs.core.first(arglist__15534);
arglist__15534 = cljs.core.next(arglist__15534);
var v = cljs.core.first(arglist__15534);
var kvs = cljs.core.rest(arglist__15534);
return G__15508__delegate(elem,k,v,kvs);
});
G__15508.cljs$core$IFn$_invoke$arity$variadic = G__15508__delegate;
return G__15508;
})()
;
set_attr_BANG_ = function(elem,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 2:
return set_attr_BANG___2.call(this,elem,k);
case 3:
return set_attr_BANG___3.call(this,elem,k,v);
default:
return set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic(elem,k,v, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_attr_BANG_.cljs$lang$maxFixedArity = 3;
set_attr_BANG_.cljs$lang$applyTo = set_attr_BANG___4.cljs$lang$applyTo;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_attr_BANG___2;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_attr_BANG___3;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return set_attr_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.attrs.remove_attr_BANG_ = (function() {
var remove_attr_BANG_ = null;
var remove_attr_BANG___2 = (function (elem,k){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),null,new cljs.core.Keyword(null,"classes","classes",1867525016),null], null), null).call(null,k)))
{elem__$1.className = "";
} else
{elem__$1.removeAttribute(cljs.core.name.call(null,k));
}
return elem__$1;
});
var remove_attr_BANG___3 = (function() { 
var G__15543__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__15539_15544 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__15540_15545 = null;var count__15541_15546 = 0;var i__15542_15547 = 0;while(true){
if((i__15542_15547 < count__15541_15546))
{var k_15548__$1 = cljs.core._nth.call(null,chunk__15540_15545,i__15542_15547);remove_attr_BANG_.call(null,elem__$1,k_15548__$1);
{
var G__15549 = seq__15539_15544;
var G__15550 = chunk__15540_15545;
var G__15551 = count__15541_15546;
var G__15552 = (i__15542_15547 + 1);
seq__15539_15544 = G__15549;
chunk__15540_15545 = G__15550;
count__15541_15546 = G__15551;
i__15542_15547 = G__15552;
continue;
}
} else
{var temp__4092__auto___15553 = cljs.core.seq.call(null,seq__15539_15544);if(temp__4092__auto___15553)
{var seq__15539_15554__$1 = temp__4092__auto___15553;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15539_15554__$1))
{var c__4151__auto___15555 = cljs.core.chunk_first.call(null,seq__15539_15554__$1);{
var G__15556 = cljs.core.chunk_rest.call(null,seq__15539_15554__$1);
var G__15557 = c__4151__auto___15555;
var G__15558 = cljs.core.count.call(null,c__4151__auto___15555);
var G__15559 = 0;
seq__15539_15544 = G__15556;
chunk__15540_15545 = G__15557;
count__15541_15546 = G__15558;
i__15542_15547 = G__15559;
continue;
}
} else
{var k_15560__$1 = cljs.core.first.call(null,seq__15539_15554__$1);remove_attr_BANG_.call(null,elem__$1,k_15560__$1);
{
var G__15561 = cljs.core.next.call(null,seq__15539_15554__$1);
var G__15562 = null;
var G__15563 = 0;
var G__15564 = 0;
seq__15539_15544 = G__15561;
chunk__15540_15545 = G__15562;
count__15541_15546 = G__15563;
i__15542_15547 = G__15564;
continue;
}
}
} else
{}
}
break;
}
return elem__$1;
};
var G__15543 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15543__delegate.call(this,elem,k,ks);};
G__15543.cljs$lang$maxFixedArity = 2;
G__15543.cljs$lang$applyTo = (function (arglist__15565){
var elem = cljs.core.first(arglist__15565);
arglist__15565 = cljs.core.next(arglist__15565);
var k = cljs.core.first(arglist__15565);
var ks = cljs.core.rest(arglist__15565);
return G__15543__delegate(elem,k,ks);
});
G__15543.cljs$core$IFn$_invoke$arity$variadic = G__15543__delegate;
return G__15543;
})()
;
remove_attr_BANG_ = function(elem,k,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return remove_attr_BANG___2.call(this,elem,k);
default:
return remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_attr_BANG_.cljs$lang$maxFixedArity = 2;
remove_attr_BANG_.cljs$lang$applyTo = remove_attr_BANG___3.cljs$lang$applyTo;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_attr_BANG___2;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_attr_BANG_;
})()
;
dommy.attrs.attr = (function attr(elem,k){if(cljs.core.truth_(k))
{return dommy.template.__GT_node_like.call(null,elem).getAttribute(cljs.core.name.call(null,k));
} else
{return null;
}
});
dommy.attrs.toggle_attr_BANG_ = (function() {
var toggle_attr_BANG_ = null;
var toggle_attr_BANG___2 = (function (elem,k){return toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.attrs.attr.call(null,elem,k)));
});
var toggle_attr_BANG___3 = (function (elem,k,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(add_QMARK_)
{return dommy.attrs.set_attr_BANG_.call(null,elem__$1,k);
} else
{return dommy.attrs.remove_attr_BANG_.call(null,elem__$1,k);
}
});
toggle_attr_BANG_ = function(elem,k,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_attr_BANG___2.call(this,elem,k);
case 3:
return toggle_attr_BANG___3.call(this,elem,k,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_attr_BANG___2;
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_attr_BANG___3;
return toggle_attr_BANG_;
})()
;
dommy.attrs.hidden_QMARK_ = (function hidden_QMARK_(elem){return ("none" === dommy.template.__GT_node_like.call(null,elem).style.display);
});
/**
* Display or hide the given `elem`. Takes an optional boolean `show?`
* indicating whether to show or hide `elem`.
*/
dommy.attrs.toggle_BANG_ = (function() {
var toggle_BANG_ = null;
var toggle_BANG___1 = (function (elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);toggle_BANG_.call(null,elem__$1,dommy.attrs.hidden_QMARK_.call(null,elem__$1));
return elem__$1;
});
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__15567 = dommy.template.__GT_node_like.call(null,elem);G__15567.style.display = ((show_QMARK_)?"":"none");
return G__15567;
});
toggle_BANG_ = function(elem,show_QMARK_){
switch(arguments.length){
case 1:
return toggle_BANG___1.call(this,elem);
case 2:
return toggle_BANG___2.call(this,elem,show_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = toggle_BANG___1;
toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_BANG___2;
return toggle_BANG_;
})()
;
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__15569 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__15569,false);
return G__15569;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__15571 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__15571,true);
return G__15571;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__15573 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__15573["constructor"] = Object);
return G__15573;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

//# sourceMappingURL=attrs.js.map