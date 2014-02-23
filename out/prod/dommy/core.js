// Compiled by ClojureScript 0.0-2156
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('dommy.template');
goog.require('dommy.template');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('dommy.utils');
goog.require('dommy.utils');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.core.has_class_QMARK_ = dommy.attrs.has_class_QMARK_;
dommy.core.add_class_BANG_ = dommy.attrs.add_class_BANG_;
dommy.core.remove_class_BANG_ = dommy.attrs.remove_class_BANG_;
dommy.core.toggle_class_BANG_ = dommy.attrs.toggle_class_BANG_;
dommy.core.set_attr_BANG_ = dommy.attrs.set_attr_BANG_;
dommy.core.set_style_BANG_ = dommy.attrs.set_style_BANG_;
dommy.core.set_px_BANG_ = dommy.attrs.set_px_BANG_;
dommy.core.px = dommy.attrs.px;
dommy.core.style_str = dommy.attrs.style_str;
dommy.core.style = dommy.attrs.style;
dommy.core.remove_attr_BANG_ = dommy.attrs.remove_attr_BANG_;
dommy.core.toggle_attr_BANG_ = dommy.attrs.toggle_attr_BANG_;
dommy.core.attr = dommy.attrs.attr;
dommy.core.hidden_QMARK_ = dommy.attrs.hidden_QMARK_;
dommy.core.toggle_BANG_ = dommy.attrs.toggle_BANG_;
dommy.core.hide_BANG_ = dommy.attrs.hide_BANG_;
dommy.core.show_BANG_ = dommy.attrs.show_BANG_;
dommy.core.bounding_client_rect = dommy.attrs.bounding_client_rect;
dommy.core.scroll_into_view = dommy.attrs.scroll_into_view;
dommy.core.dissoc_in = dommy.utils.dissoc_in;
dommy.core.__GT_Array = dommy.utils.__GT_Array;
dommy.core.set_html_BANG_ = (function set_html_BANG_(elem,html){var elem__$1 = dommy.template.__GT_node_like(elem);elem__$1.innerHTML = html;
return elem__$1;
});
dommy.core.html = (function html(elem){return dommy.template.__GT_node_like(elem).innerHTML;
});
dommy.core.set_text_BANG_ = (function set_text_BANG_(elem,text){var elem__$1 = dommy.template.__GT_node_like(elem);var prop = (cljs.core.truth_(elem__$1.textContent)?"textContent":"innerText");(elem__$1[prop] = text);
return elem__$1;
});
dommy.core.text = (function text(elem){var or__3403__auto__ = elem.textContent;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return elem.innerText;
}
});
dommy.core.value = (function value(elem){return dommy.template.__GT_node_like(elem).value;
});
dommy.core.set_value_BANG_ = (function set_value_BANG_(elem,value){var elem__$1 = dommy.template.__GT_node_like(elem);elem__$1.value = value;
return elem__$1;
});
/**
* append `child` to `parent`. 'parent' and 'child' should be node-like
* (work with dommy.template/->node-like). The node-like projection
* of parent is returned after appending child.
* @param {...*} var_args
*/
dommy.core.append_BANG_ = (function() {
var append_BANG_ = null;
var append_BANG___2 = (function (parent,child){var G__26415 = dommy.template.__GT_node_like(parent);G__26415.appendChild(dommy.template.__GT_node_like(child));
return G__26415;
});
var append_BANG___3 = (function() { 
var G__26420__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like(parent);var seq__26416_26421 = cljs.core.seq(cljs.core.cons(child,more_children));var chunk__26417_26422 = null;var count__26418_26423 = 0;var i__26419_26424 = 0;while(true){
if((i__26419_26424 < count__26418_26423))
{var c_26425 = chunk__26417_26422.cljs$core$IIndexed$_nth$arity$2(null,i__26419_26424);append_BANG_.cljs$core$IFn$_invoke$arity$2(parent__$1,c_26425);
{
var G__26426 = seq__26416_26421;
var G__26427 = chunk__26417_26422;
var G__26428 = count__26418_26423;
var G__26429 = (i__26419_26424 + 1);
seq__26416_26421 = G__26426;
chunk__26417_26422 = G__26427;
count__26418_26423 = G__26428;
i__26419_26424 = G__26429;
continue;
}
} else
{var temp__4092__auto___26430 = cljs.core.seq(seq__26416_26421);if(temp__4092__auto___26430)
{var seq__26416_26431__$1 = temp__4092__auto___26430;if(cljs.core.chunked_seq_QMARK_(seq__26416_26431__$1))
{var c__4151__auto___26432 = cljs.core.chunk_first(seq__26416_26431__$1);{
var G__26433 = cljs.core.chunk_rest(seq__26416_26431__$1);
var G__26434 = c__4151__auto___26432;
var G__26435 = cljs.core.count(c__4151__auto___26432);
var G__26436 = 0;
seq__26416_26421 = G__26433;
chunk__26417_26422 = G__26434;
count__26418_26423 = G__26435;
i__26419_26424 = G__26436;
continue;
}
} else
{var c_26437 = cljs.core.first(seq__26416_26431__$1);append_BANG_.cljs$core$IFn$_invoke$arity$2(parent__$1,c_26437);
{
var G__26438 = cljs.core.next(seq__26416_26431__$1);
var G__26439 = null;
var G__26440 = 0;
var G__26441 = 0;
seq__26416_26421 = G__26438;
chunk__26417_26422 = G__26439;
count__26418_26423 = G__26440;
i__26419_26424 = G__26441;
continue;
}
}
} else
{}
}
break;
}
return parent__$1;
};
var G__26420 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__26420__delegate.call(this,parent,child,more_children);};
G__26420.cljs$lang$maxFixedArity = 2;
G__26420.cljs$lang$applyTo = (function (arglist__26442){
var parent = cljs.core.first(arglist__26442);
arglist__26442 = cljs.core.next(arglist__26442);
var child = cljs.core.first(arglist__26442);
var more_children = cljs.core.rest(arglist__26442);
return G__26420__delegate(parent,child,more_children);
});
G__26420.cljs$core$IFn$_invoke$arity$variadic = G__26420__delegate;
return G__26420;
})()
;
append_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return append_BANG___2.call(this,parent,child);
default:
return append_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
append_BANG_.cljs$lang$maxFixedArity = 2;
append_BANG_.cljs$lang$applyTo = append_BANG___3.cljs$lang$applyTo;
append_BANG_.cljs$core$IFn$_invoke$arity$2 = append_BANG___2;
append_BANG_.cljs$core$IFn$_invoke$arity$variadic = append_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return append_BANG_;
})()
;
/**
* prepend `child` to `parent`, both node-like
* return ->node-like projection of `parent`
* @param {...*} var_args
*/
dommy.core.prepend_BANG_ = (function() {
var prepend_BANG_ = null;
var prepend_BANG___2 = (function (parent,child){var parent__$1 = dommy.template.__GT_node_like(parent);return parent__$1.insertBefore(dommy.template.__GT_node_like(child),parent__$1.firstChild);
});
var prepend_BANG___3 = (function() { 
var G__26451__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like(parent);var seq__26447_26452 = cljs.core.seq(cljs.core.cons(child,more_children));var chunk__26448_26453 = null;var count__26449_26454 = 0;var i__26450_26455 = 0;while(true){
if((i__26450_26455 < count__26449_26454))
{var c_26456 = chunk__26448_26453.cljs$core$IIndexed$_nth$arity$2(null,i__26450_26455);prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent__$1,c_26456);
{
var G__26457 = seq__26447_26452;
var G__26458 = chunk__26448_26453;
var G__26459 = count__26449_26454;
var G__26460 = (i__26450_26455 + 1);
seq__26447_26452 = G__26457;
chunk__26448_26453 = G__26458;
count__26449_26454 = G__26459;
i__26450_26455 = G__26460;
continue;
}
} else
{var temp__4092__auto___26461 = cljs.core.seq(seq__26447_26452);if(temp__4092__auto___26461)
{var seq__26447_26462__$1 = temp__4092__auto___26461;if(cljs.core.chunked_seq_QMARK_(seq__26447_26462__$1))
{var c__4151__auto___26463 = cljs.core.chunk_first(seq__26447_26462__$1);{
var G__26464 = cljs.core.chunk_rest(seq__26447_26462__$1);
var G__26465 = c__4151__auto___26463;
var G__26466 = cljs.core.count(c__4151__auto___26463);
var G__26467 = 0;
seq__26447_26452 = G__26464;
chunk__26448_26453 = G__26465;
count__26449_26454 = G__26466;
i__26450_26455 = G__26467;
continue;
}
} else
{var c_26468 = cljs.core.first(seq__26447_26462__$1);prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent__$1,c_26468);
{
var G__26469 = cljs.core.next(seq__26447_26462__$1);
var G__26470 = null;
var G__26471 = 0;
var G__26472 = 0;
seq__26447_26452 = G__26469;
chunk__26448_26453 = G__26470;
count__26449_26454 = G__26471;
i__26450_26455 = G__26472;
continue;
}
}
} else
{}
}
break;
}
return parent__$1;
};
var G__26451 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__26451__delegate.call(this,parent,child,more_children);};
G__26451.cljs$lang$maxFixedArity = 2;
G__26451.cljs$lang$applyTo = (function (arglist__26473){
var parent = cljs.core.first(arglist__26473);
arglist__26473 = cljs.core.next(arglist__26473);
var child = cljs.core.first(arglist__26473);
var more_children = cljs.core.rest(arglist__26473);
return G__26451__delegate(parent,child,more_children);
});
G__26451.cljs$core$IFn$_invoke$arity$variadic = G__26451__delegate;
return G__26451;
})()
;
prepend_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return prepend_BANG___2.call(this,parent,child);
default:
return prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prepend_BANG_.cljs$lang$maxFixedArity = 2;
prepend_BANG_.cljs$lang$applyTo = prepend_BANG___3.cljs$lang$applyTo;
prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = prepend_BANG___2;
prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return prepend_BANG_;
})()
;
/**
* insert `node` before `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_before_BANG_ = (function insert_before_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like(elem);var other__$1 = dommy.template.__GT_node_like(other);if(cljs.core.truth_(other__$1.parentNode))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",499016324,null),new cljs.core.Symbol(null,"other","other",-1534461751,null))], 0)))].join('')));
}
other__$1.parentNode.insertBefore(actual_node,other__$1);
return actual_node;
});
/**
* insert `node` after `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like(elem);var other__$1 = dommy.template.__GT_node_like(other);var parent = other__$1.parentNode;var temp__4090__auto___26474 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___26474))
{var next_26475 = temp__4090__auto___26474;parent.insertBefore(actual_node,next_26475);
} else
{parent.appendChild(actual_node);
}
return actual_node;
});
/**
* replace `elem` with `new`, both node-like, return node-like projection of new.
* node-like projection of elem must have parent.
*/
dommy.core.replace_BANG_ = (function replace_BANG_(elem,new$){var new$__$1 = dommy.template.__GT_node_like(new$);var elem__$1 = dommy.template.__GT_node_like(elem);if(cljs.core.truth_(elem__$1.parentNode))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",499016324,null),new cljs.core.Symbol(null,"elem","elem",-1637415608,null))], 0)))].join('')));
}
elem__$1.parentNode.replaceChild(new$__$1,elem__$1);
return new$__$1;
});
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__26477 = dommy.template.__GT_node_like(parent);G__26477.innerHTML = "";
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(G__26477,node_like);
return G__26477;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like(elem);var G__26479 = elem__$1.parentNode;G__26479.removeChild(elem__$1);
return G__26479;
});
/**
* clears all children from `elem`
*/
dommy.core.clear_BANG_ = (function clear_BANG_(elem){return dommy.template.__GT_node_like(elem).innerHTML = "";
});
dommy.core.selector = (function selector(data){if(cljs.core.coll_QMARK_(data))
{return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(selector,data));
} else
{if((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))
{return cljs.core.name(data);
} else
{return null;
}
}
});
dommy.core.selector_map = (function selector_map(template,key_selectors_map){var container = dommy.template.__GT_node_like(template);if(!(cljs.core.contains_QMARK_(key_selectors_map,cljs.core.constant$keyword$336)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-2051487815,null),new cljs.core.Symbol(null,"key-selectors-map","key-selectors-map",19054414,null),cljs.core.constant$keyword$336))], 0)))].join('')));
}
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$336,container], null),cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__26485){var vec__26486 = p__26485;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26486,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26486,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(cljs.core.constant$keyword$337.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v)))?(function (){if(typeof dommy.core.t26487 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t26487 = (function (v,k,vec__26486,p__26485,container,key_selectors_map,template,selector_map,meta26488){
this.v = v;
this.k = k;
this.vec__26486 = vec__26486;
this.p__26485 = p__26485;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta26488 = meta26488;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t26487.cljs$lang$type = true;
dommy.core.t26487.cljs$lang$ctorStr = "dommy.core/t26487";
dommy.core.t26487.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write(writer__3971__auto__,"dommy.core/t26487");
});
dommy.core.t26487.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array(dommy.template.__GT_node_like(self__.container).querySelectorAll(dommy.core.selector(self__.v)));
});
dommy.core.t26487.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26489){var self__ = this;
var _26489__$1 = this;return self__.meta26488;
});
dommy.core.t26487.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26489,meta26488__$1){var self__ = this;
var _26489__$1 = this;return (new dommy.core.t26487(self__.v,self__.k,self__.vec__26486,self__.p__26485,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta26488__$1));
});
dommy.core.__GT_t26487 = (function __GT_t26487(v__$1,k__$1,vec__26486__$1,p__26485__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta26488){return (new dommy.core.t26487(v__$1,k__$1,vec__26486__$1,p__26485__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta26488));
});
}
return (new dommy.core.t26487(v,k,vec__26486,p__26485,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like(container).querySelector(dommy.core.selector(v)))], null);
}),key_selectors_map))], 0));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while(cljs.core.identity,cljs.core.iterate((function (p1__26490_SHARP_){return p1__26490_SHARP_.parentNode;
}),dommy.template.__GT_node_like(elem)));
});
/**
* returns a predicate on nodes that match `selector` at the
* time of this `matches-pred` call (may return outdated results
* if you fuck with the DOM)
*/
dommy.core.matches_pred = (function() {
var matches_pred = null;
var matches_pred__1 = (function (selector){return matches_pred.cljs$core$IFn$_invoke$arity$2(document,selector);
});
var matches_pred__2 = (function (base,selector){var matches = dommy.utils.__GT_Array(dommy.template.__GT_node_like(dommy.template.__GT_node_like(base)).querySelectorAll(dommy.core.selector(selector)));return (function (elem){return (matches.indexOf(elem) >= 0);
});
});
matches_pred = function(base,selector){
switch(arguments.length){
case 1:
return matches_pred__1.call(this,base);
case 2:
return matches_pred__2.call(this,base,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
matches_pred.cljs$core$IFn$_invoke$arity$1 = matches_pred__1;
matches_pred.cljs$core$IFn$_invoke$arity$2 = matches_pred__2;
return matches_pred;
})()
;
/**
* closest ancestor of `node` (up to `base`, if provided)
* that matches `selector`
*/
dommy.core.closest = (function() {
var closest = null;
var closest__2 = (function (elem,selector){return cljs.core.first(cljs.core.filter(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1(selector),dommy.core.ancestor_nodes(dommy.template.__GT_node_like(elem))));
});
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like(base);var elem__$1 = dommy.template.__GT_node_like(elem);return cljs.core.first(cljs.core.filter(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base__$1,selector),cljs.core.take_while((function (p1__26491_SHARP_){return !((p1__26491_SHARP_ === base__$1));
}),dommy.core.ancestor_nodes(elem__$1))));
});
closest = function(base,elem,selector){
switch(arguments.length){
case 2:
return closest__2.call(this,base,elem);
case 3:
return closest__3.call(this,base,elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
closest.cljs$core$IFn$_invoke$arity$2 = closest__2;
closest.cljs$core$IFn$_invoke$arity$3 = closest__3;
return closest;
})()
;
/**
* is `descendant` a descendant of `ancestor`?
*/
dommy.core.descendant_QMARK_ = (function descendant_QMARK_(descendant,ancestor){var descendant__$1 = dommy.template.__GT_node_like(descendant);var ancestor__$1 = dommy.template.__GT_node_like(ancestor);if(cljs.core.truth_(ancestor__$1.contains))
{return ancestor__$1.contains(descendant__$1);
} else
{if(cljs.core.truth_(ancestor__$1.compareDocumentPosition))
{return ((ancestor__$1.compareDocumentPosition(descendant__$1) & (1 << 4)) != 0);
} else
{return null;
}
}
});
dommy.core.special_listener_makers = cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__26492){var vec__26493 = p__26492;var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26493,0,null);var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26493,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3403__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__3391__auto__ = related_target;if(cljs.core.truth_(and__3391__auto__))
{return dommy.core.descendant_QMARK_(related_target,listener_target);
} else
{return and__3391__auto__;
}
})()))
{return null;
} else
{return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
}
});
})], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$338,cljs.core.constant$keyword$340,cljs.core.constant$keyword$339,cljs.core.constant$keyword$341], null)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.cljs$core$IFn$_invoke$arity$3(dommy.template.__GT_node_like(elem),event.target,selector);if(cljs.core.truth_((function (){var and__3391__auto__ = selected_target;if(cljs.core.truth_(and__3391__auto__))
{return cljs.core.not((dommy.core.attr.cljs$core$IFn$_invoke$arity$2 ? dommy.core.attr.cljs$core$IFn$_invoke$arity$2(selected_target,cljs.core.constant$keyword$342) : dommy.core.attr.call(null,selected_target,cljs.core.constant$keyword$342)));
} else
{return and__3391__auto__;
}
})()))
{event.selectedTarget = selected_target;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
} else
{return null;
}
});
});
/**
* Returns a nested map of event listeners on `nodes`
*/
dommy.core.event_listeners = (function event_listeners(elem){var or__3403__auto__ = dommy.template.__GT_node_like(elem).dommyEventListeners;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
* @param {...*} var_args
*/
dommy.core.update_event_listeners_BANG_ = (function() { 
var update_event_listeners_BANG___delegate = function (elem,f,args){var elem__$1 = dommy.template.__GT_node_like(elem);return elem__$1.dommyEventListeners = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,dommy.core.event_listeners(elem__$1),args);
};
var update_event_listeners_BANG_ = function (elem,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return update_event_listeners_BANG___delegate.call(this,elem,f,args);};
update_event_listeners_BANG_.cljs$lang$maxFixedArity = 2;
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__26494){
var elem = cljs.core.first(arglist__26494);
arglist__26494 = cljs.core.next(arglist__26494);
var f = cljs.core.first(arglist__26494);
var args = cljs.core.rest(arglist__26494);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_(elem_sel))
{return cljs.core.juxt.cljs$core$IFn$_invoke$arity$2((function (p1__26495_SHARP_){return dommy.template.__GT_node_like(cljs.core.first(p1__26495_SHARP_));
}),cljs.core.rest).call(null,elem_sel);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dommy.template.__GT_node_like(elem_sel),null], null);
}
});
/**
* Adds `f` as a listener for events of type `event-type` on
* `elem-sel`, which must either be a DOM node, or a sequence
* whose first item is a DOM node.
* 
* In other words, the call to `listen!` can take two forms:
* 
* If `elem-sel` is a DOM node, i.e., you're doing something like:
* 
* (listen! elem :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on the `elem`.
* 
* If `elem-sel` is a sequence:
* 
* (listen! [elem :.selector.for :.some.descendants] :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on descendants of `elem` that match the selector
* 
* Also accepts any number of event-type and handler pairs for setting
* multiple listeners at once:
* 
* (listen! some-elem :click click-handler :hover hover-handler)
* @param {...*} var_args
*/
dommy.core.listen_BANG_ = (function() { 
var listen_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_(cljs.core.count(type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))], 0)))].join('')));
}
var vec__26519_26542 = dommy.core.elem_and_selector(elem_sel);var elem_26543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26519_26542,0,null);var selector_26544 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26519_26542,1,null);var seq__26520_26545 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,type_fs));var chunk__26527_26546 = null;var count__26528_26547 = 0;var i__26529_26548 = 0;while(true){
if((i__26529_26548 < count__26528_26547))
{var vec__26536_26549 = chunk__26527_26546.cljs$core$IIndexed$_nth$arity$2(null,i__26529_26548);var orig_type_26550 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26536_26549,0,null);var f_26551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26536_26549,1,null);var seq__26530_26552 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_26550,new cljs.core.PersistentArrayMap.fromArray([orig_type_26550,cljs.core.identity], true, false)));var chunk__26532_26553 = null;var count__26533_26554 = 0;var i__26534_26555 = 0;while(true){
if((i__26534_26555 < count__26533_26554))
{var vec__26537_26556 = chunk__26532_26553.cljs$core$IIndexed$_nth$arity$2(null,i__26534_26555);var actual_type_26557 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26537_26556,0,null);var factory_26558 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26537_26556,1,null);var canonical_f_26559 = (cljs.core.truth_(selector_26544)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_26543,selector_26544):cljs.core.identity).call(null,(factory_26558.cljs$core$IFn$_invoke$arity$1 ? factory_26558.cljs$core$IFn$_invoke$arity$1(f_26551) : factory_26558.call(null,f_26551)));dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_26543,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_26544,actual_type_26557,f_26551], null),canonical_f_26559], 0));
if(cljs.core.truth_(elem_26543.addEventListener))
{elem_26543.addEventListener(cljs.core.name(actual_type_26557),canonical_f_26559);
} else
{elem_26543.attachEvent(cljs.core.name(actual_type_26557),canonical_f_26559);
}
{
var G__26560 = seq__26530_26552;
var G__26561 = chunk__26532_26553;
var G__26562 = count__26533_26554;
var G__26563 = (i__26534_26555 + 1);
seq__26530_26552 = G__26560;
chunk__26532_26553 = G__26561;
count__26533_26554 = G__26562;
i__26534_26555 = G__26563;
continue;
}
} else
{var temp__4092__auto___26564 = cljs.core.seq(seq__26530_26552);if(temp__4092__auto___26564)
{var seq__26530_26565__$1 = temp__4092__auto___26564;if(cljs.core.chunked_seq_QMARK_(seq__26530_26565__$1))
{var c__4151__auto___26566 = cljs.core.chunk_first(seq__26530_26565__$1);{
var G__26567 = cljs.core.chunk_rest(seq__26530_26565__$1);
var G__26568 = c__4151__auto___26566;
var G__26569 = cljs.core.count(c__4151__auto___26566);
var G__26570 = 0;
seq__26530_26552 = G__26567;
chunk__26532_26553 = G__26568;
count__26533_26554 = G__26569;
i__26534_26555 = G__26570;
continue;
}
} else
{var vec__26538_26571 = cljs.core.first(seq__26530_26565__$1);var actual_type_26572 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26538_26571,0,null);var factory_26573 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26538_26571,1,null);var canonical_f_26574 = (cljs.core.truth_(selector_26544)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_26543,selector_26544):cljs.core.identity).call(null,(factory_26573.cljs$core$IFn$_invoke$arity$1 ? factory_26573.cljs$core$IFn$_invoke$arity$1(f_26551) : factory_26573.call(null,f_26551)));dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_26543,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_26544,actual_type_26572,f_26551], null),canonical_f_26574], 0));
if(cljs.core.truth_(elem_26543.addEventListener))
{elem_26543.addEventListener(cljs.core.name(actual_type_26572),canonical_f_26574);
} else
{elem_26543.attachEvent(cljs.core.name(actual_type_26572),canonical_f_26574);
}
{
var G__26575 = cljs.core.next(seq__26530_26565__$1);
var G__26576 = null;
var G__26577 = 0;
var G__26578 = 0;
seq__26530_26552 = G__26575;
chunk__26532_26553 = G__26576;
count__26533_26554 = G__26577;
i__26534_26555 = G__26578;
continue;
}
}
} else
{}
}
break;
}
{
var G__26579 = seq__26520_26545;
var G__26580 = chunk__26527_26546;
var G__26581 = count__26528_26547;
var G__26582 = (i__26529_26548 + 1);
seq__26520_26545 = G__26579;
chunk__26527_26546 = G__26580;
count__26528_26547 = G__26581;
i__26529_26548 = G__26582;
continue;
}
} else
{var temp__4092__auto___26583 = cljs.core.seq(seq__26520_26545);if(temp__4092__auto___26583)
{var seq__26520_26584__$1 = temp__4092__auto___26583;if(cljs.core.chunked_seq_QMARK_(seq__26520_26584__$1))
{var c__4151__auto___26585 = cljs.core.chunk_first(seq__26520_26584__$1);{
var G__26586 = cljs.core.chunk_rest(seq__26520_26584__$1);
var G__26587 = c__4151__auto___26585;
var G__26588 = cljs.core.count(c__4151__auto___26585);
var G__26589 = 0;
seq__26520_26545 = G__26586;
chunk__26527_26546 = G__26587;
count__26528_26547 = G__26588;
i__26529_26548 = G__26589;
continue;
}
} else
{var vec__26539_26590 = cljs.core.first(seq__26520_26584__$1);var orig_type_26591 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26539_26590,0,null);var f_26592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26539_26590,1,null);var seq__26521_26593 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_26591,new cljs.core.PersistentArrayMap.fromArray([orig_type_26591,cljs.core.identity], true, false)));var chunk__26523_26594 = null;var count__26524_26595 = 0;var i__26525_26596 = 0;while(true){
if((i__26525_26596 < count__26524_26595))
{var vec__26540_26597 = chunk__26523_26594.cljs$core$IIndexed$_nth$arity$2(null,i__26525_26596);var actual_type_26598 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26540_26597,0,null);var factory_26599 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26540_26597,1,null);var canonical_f_26600 = (cljs.core.truth_(selector_26544)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_26543,selector_26544):cljs.core.identity).call(null,(factory_26599.cljs$core$IFn$_invoke$arity$1 ? factory_26599.cljs$core$IFn$_invoke$arity$1(f_26592) : factory_26599.call(null,f_26592)));dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_26543,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_26544,actual_type_26598,f_26592], null),canonical_f_26600], 0));
if(cljs.core.truth_(elem_26543.addEventListener))
{elem_26543.addEventListener(cljs.core.name(actual_type_26598),canonical_f_26600);
} else
{elem_26543.attachEvent(cljs.core.name(actual_type_26598),canonical_f_26600);
}
{
var G__26601 = seq__26521_26593;
var G__26602 = chunk__26523_26594;
var G__26603 = count__26524_26595;
var G__26604 = (i__26525_26596 + 1);
seq__26521_26593 = G__26601;
chunk__26523_26594 = G__26602;
count__26524_26595 = G__26603;
i__26525_26596 = G__26604;
continue;
}
} else
{var temp__4092__auto___26605__$1 = cljs.core.seq(seq__26521_26593);if(temp__4092__auto___26605__$1)
{var seq__26521_26606__$1 = temp__4092__auto___26605__$1;if(cljs.core.chunked_seq_QMARK_(seq__26521_26606__$1))
{var c__4151__auto___26607 = cljs.core.chunk_first(seq__26521_26606__$1);{
var G__26608 = cljs.core.chunk_rest(seq__26521_26606__$1);
var G__26609 = c__4151__auto___26607;
var G__26610 = cljs.core.count(c__4151__auto___26607);
var G__26611 = 0;
seq__26521_26593 = G__26608;
chunk__26523_26594 = G__26609;
count__26524_26595 = G__26610;
i__26525_26596 = G__26611;
continue;
}
} else
{var vec__26541_26612 = cljs.core.first(seq__26521_26606__$1);var actual_type_26613 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26541_26612,0,null);var factory_26614 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26541_26612,1,null);var canonical_f_26615 = (cljs.core.truth_(selector_26544)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_26543,selector_26544):cljs.core.identity).call(null,(factory_26614.cljs$core$IFn$_invoke$arity$1 ? factory_26614.cljs$core$IFn$_invoke$arity$1(f_26592) : factory_26614.call(null,f_26592)));dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_26543,cljs.core.assoc_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_26544,actual_type_26613,f_26592], null),canonical_f_26615], 0));
if(cljs.core.truth_(elem_26543.addEventListener))
{elem_26543.addEventListener(cljs.core.name(actual_type_26613),canonical_f_26615);
} else
{elem_26543.attachEvent(cljs.core.name(actual_type_26613),canonical_f_26615);
}
{
var G__26616 = cljs.core.next(seq__26521_26606__$1);
var G__26617 = null;
var G__26618 = 0;
var G__26619 = 0;
seq__26521_26593 = G__26616;
chunk__26523_26594 = G__26617;
count__26524_26595 = G__26618;
i__26525_26596 = G__26619;
continue;
}
}
} else
{}
}
break;
}
{
var G__26620 = cljs.core.next(seq__26520_26584__$1);
var G__26621 = null;
var G__26622 = 0;
var G__26623 = 0;
seq__26520_26545 = G__26620;
chunk__26527_26546 = G__26621;
count__26528_26547 = G__26622;
i__26529_26548 = G__26623;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_BANG___delegate.call(this,elem_sel,type_fs);};
listen_BANG_.cljs$lang$maxFixedArity = 1;
listen_BANG_.cljs$lang$applyTo = (function (arglist__26624){
var elem_sel = cljs.core.first(arglist__26624);
var type_fs = cljs.core.rest(arglist__26624);
return listen_BANG___delegate(elem_sel,type_fs);
});
listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_BANG___delegate;
return listen_BANG_;
})()
;
/**
* Removes event listener for the element defined in `elem-sel`,
* which is the same format as listen!.
* 
* The following forms are allowed, and will remove all handlers
* that match the parameters passed in:
* 
* (unlisten! [elem :.selector] :click event-listener)
* 
* (unlisten! [elem :.selector]
* :click event-listener
* :mouseover other-event-listener)
* @param {...*} var_args
*/
dommy.core.unlisten_BANG_ = (function() { 
var unlisten_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_(cljs.core.count(type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))], 0)))].join('')));
}
var vec__26648_26671 = dommy.core.elem_and_selector(elem_sel);var elem_26672 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26648_26671,0,null);var selector_26673 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26648_26671,1,null);var seq__26649_26674 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,type_fs));var chunk__26656_26675 = null;var count__26657_26676 = 0;var i__26658_26677 = 0;while(true){
if((i__26658_26677 < count__26657_26676))
{var vec__26665_26678 = chunk__26656_26675.cljs$core$IIndexed$_nth$arity$2(null,i__26658_26677);var orig_type_26679 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26665_26678,0,null);var f_26680 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26665_26678,1,null);var seq__26659_26681 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_26679,new cljs.core.PersistentArrayMap.fromArray([orig_type_26679,cljs.core.identity], true, false)));var chunk__26661_26682 = null;var count__26662_26683 = 0;var i__26663_26684 = 0;while(true){
if((i__26663_26684 < count__26662_26683))
{var vec__26666_26685 = chunk__26661_26682.cljs$core$IIndexed$_nth$arity$2(null,i__26663_26684);var actual_type_26686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26666_26685,0,null);var __26687 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26666_26685,1,null);var keys_26688 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_26673,actual_type_26686,f_26680], null);var canonical_f_26689 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_26672),keys_26688);dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_26672,dommy.utils.dissoc_in,cljs.core.array_seq([keys_26688], 0));
if(cljs.core.truth_(elem_26672.removeEventListener))
{elem_26672.removeEventListener(cljs.core.name(actual_type_26686),canonical_f_26689);
} else
{elem_26672.detachEvent(cljs.core.name(actual_type_26686),canonical_f_26689);
}
{
var G__26690 = seq__26659_26681;
var G__26691 = chunk__26661_26682;
var G__26692 = count__26662_26683;
var G__26693 = (i__26663_26684 + 1);
seq__26659_26681 = G__26690;
chunk__26661_26682 = G__26691;
count__26662_26683 = G__26692;
i__26663_26684 = G__26693;
continue;
}
} else
{var temp__4092__auto___26694 = cljs.core.seq(seq__26659_26681);if(temp__4092__auto___26694)
{var seq__26659_26695__$1 = temp__4092__auto___26694;if(cljs.core.chunked_seq_QMARK_(seq__26659_26695__$1))
{var c__4151__auto___26696 = cljs.core.chunk_first(seq__26659_26695__$1);{
var G__26697 = cljs.core.chunk_rest(seq__26659_26695__$1);
var G__26698 = c__4151__auto___26696;
var G__26699 = cljs.core.count(c__4151__auto___26696);
var G__26700 = 0;
seq__26659_26681 = G__26697;
chunk__26661_26682 = G__26698;
count__26662_26683 = G__26699;
i__26663_26684 = G__26700;
continue;
}
} else
{var vec__26667_26701 = cljs.core.first(seq__26659_26695__$1);var actual_type_26702 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26667_26701,0,null);var __26703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26667_26701,1,null);var keys_26704 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_26673,actual_type_26702,f_26680], null);var canonical_f_26705 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_26672),keys_26704);dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_26672,dommy.utils.dissoc_in,cljs.core.array_seq([keys_26704], 0));
if(cljs.core.truth_(elem_26672.removeEventListener))
{elem_26672.removeEventListener(cljs.core.name(actual_type_26702),canonical_f_26705);
} else
{elem_26672.detachEvent(cljs.core.name(actual_type_26702),canonical_f_26705);
}
{
var G__26706 = cljs.core.next(seq__26659_26695__$1);
var G__26707 = null;
var G__26708 = 0;
var G__26709 = 0;
seq__26659_26681 = G__26706;
chunk__26661_26682 = G__26707;
count__26662_26683 = G__26708;
i__26663_26684 = G__26709;
continue;
}
}
} else
{}
}
break;
}
{
var G__26710 = seq__26649_26674;
var G__26711 = chunk__26656_26675;
var G__26712 = count__26657_26676;
var G__26713 = (i__26658_26677 + 1);
seq__26649_26674 = G__26710;
chunk__26656_26675 = G__26711;
count__26657_26676 = G__26712;
i__26658_26677 = G__26713;
continue;
}
} else
{var temp__4092__auto___26714 = cljs.core.seq(seq__26649_26674);if(temp__4092__auto___26714)
{var seq__26649_26715__$1 = temp__4092__auto___26714;if(cljs.core.chunked_seq_QMARK_(seq__26649_26715__$1))
{var c__4151__auto___26716 = cljs.core.chunk_first(seq__26649_26715__$1);{
var G__26717 = cljs.core.chunk_rest(seq__26649_26715__$1);
var G__26718 = c__4151__auto___26716;
var G__26719 = cljs.core.count(c__4151__auto___26716);
var G__26720 = 0;
seq__26649_26674 = G__26717;
chunk__26656_26675 = G__26718;
count__26657_26676 = G__26719;
i__26658_26677 = G__26720;
continue;
}
} else
{var vec__26668_26721 = cljs.core.first(seq__26649_26715__$1);var orig_type_26722 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26668_26721,0,null);var f_26723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26668_26721,1,null);var seq__26650_26724 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_26722,new cljs.core.PersistentArrayMap.fromArray([orig_type_26722,cljs.core.identity], true, false)));var chunk__26652_26725 = null;var count__26653_26726 = 0;var i__26654_26727 = 0;while(true){
if((i__26654_26727 < count__26653_26726))
{var vec__26669_26728 = chunk__26652_26725.cljs$core$IIndexed$_nth$arity$2(null,i__26654_26727);var actual_type_26729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26669_26728,0,null);var __26730 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26669_26728,1,null);var keys_26731 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_26673,actual_type_26729,f_26723], null);var canonical_f_26732 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_26672),keys_26731);dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_26672,dommy.utils.dissoc_in,cljs.core.array_seq([keys_26731], 0));
if(cljs.core.truth_(elem_26672.removeEventListener))
{elem_26672.removeEventListener(cljs.core.name(actual_type_26729),canonical_f_26732);
} else
{elem_26672.detachEvent(cljs.core.name(actual_type_26729),canonical_f_26732);
}
{
var G__26733 = seq__26650_26724;
var G__26734 = chunk__26652_26725;
var G__26735 = count__26653_26726;
var G__26736 = (i__26654_26727 + 1);
seq__26650_26724 = G__26733;
chunk__26652_26725 = G__26734;
count__26653_26726 = G__26735;
i__26654_26727 = G__26736;
continue;
}
} else
{var temp__4092__auto___26737__$1 = cljs.core.seq(seq__26650_26724);if(temp__4092__auto___26737__$1)
{var seq__26650_26738__$1 = temp__4092__auto___26737__$1;if(cljs.core.chunked_seq_QMARK_(seq__26650_26738__$1))
{var c__4151__auto___26739 = cljs.core.chunk_first(seq__26650_26738__$1);{
var G__26740 = cljs.core.chunk_rest(seq__26650_26738__$1);
var G__26741 = c__4151__auto___26739;
var G__26742 = cljs.core.count(c__4151__auto___26739);
var G__26743 = 0;
seq__26650_26724 = G__26740;
chunk__26652_26725 = G__26741;
count__26653_26726 = G__26742;
i__26654_26727 = G__26743;
continue;
}
} else
{var vec__26670_26744 = cljs.core.first(seq__26650_26738__$1);var actual_type_26745 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26670_26744,0,null);var __26746 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26670_26744,1,null);var keys_26747 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_26673,actual_type_26745,f_26723], null);var canonical_f_26748 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_26672),keys_26747);dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_26672,dommy.utils.dissoc_in,cljs.core.array_seq([keys_26747], 0));
if(cljs.core.truth_(elem_26672.removeEventListener))
{elem_26672.removeEventListener(cljs.core.name(actual_type_26745),canonical_f_26748);
} else
{elem_26672.detachEvent(cljs.core.name(actual_type_26745),canonical_f_26748);
}
{
var G__26749 = cljs.core.next(seq__26650_26738__$1);
var G__26750 = null;
var G__26751 = 0;
var G__26752 = 0;
seq__26650_26724 = G__26749;
chunk__26652_26725 = G__26750;
count__26653_26726 = G__26751;
i__26654_26727 = G__26752;
continue;
}
}
} else
{}
}
break;
}
{
var G__26753 = cljs.core.next(seq__26649_26715__$1);
var G__26754 = null;
var G__26755 = 0;
var G__26756 = 0;
seq__26649_26674 = G__26753;
chunk__26656_26675 = G__26754;
count__26657_26676 = G__26755;
i__26658_26677 = G__26756;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var unlisten_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return unlisten_BANG___delegate.call(this,elem_sel,type_fs);};
unlisten_BANG_.cljs$lang$maxFixedArity = 1;
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__26757){
var elem_sel = cljs.core.first(arglist__26757);
var type_fs = cljs.core.rest(arglist__26757);
return unlisten_BANG___delegate(elem_sel,type_fs);
});
unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = unlisten_BANG___delegate;
return unlisten_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.core.listen_once_BANG_ = (function() { 
var listen_once_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_(cljs.core.count(type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))], 0)))].join('')));
}
var vec__26765_26772 = dommy.core.elem_and_selector(elem_sel);var elem_26773 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26765_26772,0,null);var selector_26774 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26765_26772,1,null);var seq__26766_26775 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,type_fs));var chunk__26767_26776 = null;var count__26768_26777 = 0;var i__26769_26778 = 0;while(true){
if((i__26769_26778 < count__26768_26777))
{var vec__26770_26779 = chunk__26767_26776.cljs$core$IIndexed$_nth$arity$2(null,i__26769_26778);var type_26780 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26770_26779,0,null);var f_26781 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26770_26779,1,null);dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_26780,((function (seq__26766_26775,chunk__26767_26776,count__26768_26777,i__26769_26778,vec__26770_26779,type_26780,f_26781){
return (function this_fn(e){dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_26780,this_fn], 0));
return (f_26781.cljs$core$IFn$_invoke$arity$1 ? f_26781.cljs$core$IFn$_invoke$arity$1(e) : f_26781.call(null,e));
});})(seq__26766_26775,chunk__26767_26776,count__26768_26777,i__26769_26778,vec__26770_26779,type_26780,f_26781))
], 0));
{
var G__26782 = seq__26766_26775;
var G__26783 = chunk__26767_26776;
var G__26784 = count__26768_26777;
var G__26785 = (i__26769_26778 + 1);
seq__26766_26775 = G__26782;
chunk__26767_26776 = G__26783;
count__26768_26777 = G__26784;
i__26769_26778 = G__26785;
continue;
}
} else
{var temp__4092__auto___26786 = cljs.core.seq(seq__26766_26775);if(temp__4092__auto___26786)
{var seq__26766_26787__$1 = temp__4092__auto___26786;if(cljs.core.chunked_seq_QMARK_(seq__26766_26787__$1))
{var c__4151__auto___26788 = cljs.core.chunk_first(seq__26766_26787__$1);{
var G__26789 = cljs.core.chunk_rest(seq__26766_26787__$1);
var G__26790 = c__4151__auto___26788;
var G__26791 = cljs.core.count(c__4151__auto___26788);
var G__26792 = 0;
seq__26766_26775 = G__26789;
chunk__26767_26776 = G__26790;
count__26768_26777 = G__26791;
i__26769_26778 = G__26792;
continue;
}
} else
{var vec__26771_26793 = cljs.core.first(seq__26766_26787__$1);var type_26794 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26771_26793,0,null);var f_26795 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26771_26793,1,null);dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_26794,((function (seq__26766_26775,chunk__26767_26776,count__26768_26777,i__26769_26778,vec__26771_26793,type_26794,f_26795,seq__26766_26787__$1,temp__4092__auto___26786){
return (function this_fn(e){dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.array_seq([type_26794,this_fn], 0));
return (f_26795.cljs$core$IFn$_invoke$arity$1 ? f_26795.cljs$core$IFn$_invoke$arity$1(e) : f_26795.call(null,e));
});})(seq__26766_26775,chunk__26767_26776,count__26768_26777,i__26769_26778,vec__26771_26793,type_26794,f_26795,seq__26766_26787__$1,temp__4092__auto___26786))
], 0));
{
var G__26796 = cljs.core.next(seq__26766_26787__$1);
var G__26797 = null;
var G__26798 = 0;
var G__26799 = 0;
seq__26766_26775 = G__26796;
chunk__26767_26776 = G__26797;
count__26768_26777 = G__26798;
i__26769_26778 = G__26799;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_once_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_once_BANG___delegate.call(this,elem_sel,type_fs);};
listen_once_BANG_.cljs$lang$maxFixedArity = 1;
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__26800){
var elem_sel = cljs.core.first(arglist__26800);
var type_fs = cljs.core.rest(arglist__26800);
return listen_once_BANG___delegate(elem_sel,type_fs);
});
listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_once_BANG___delegate;
return listen_once_BANG_;
})()
;
/**
* NOTE: ONLY TO BE USED FOR TESTS. May not work at mocking many
* event types or their bubbling behaviours
* 
* Creates an event of type `event-type`, optionally having
* `update-event!` mutate and return an updated event object,
* and fires it on `node`.
* Only works when `node` is in the DOM
* @param {...*} var_args
*/
dommy.core.fire_BANG_ = (function() { 
var fire_BANG___delegate = function (node,event_type,p__26801){var vec__26803 = p__26801;var update_event_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26803,0,null);if(dommy.core.descendant_QMARK_(node,document.documentElement))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1886221157,null),new cljs.core.Symbol(null,"node","node",-1637144645,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",-1449696112,null))], 0)))].join('')));
}
var update_event_BANG___$1 = (function (){var or__3403__auto__ = update_event_BANG_;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return cljs.core.identity;
}
})();if(cljs.core.truth_(document.createEvent))
{var event = document.createEvent("Event");event.initEvent(cljs.core.name(event_type),true,true);
return node.dispatchEvent((update_event_BANG___$1.cljs$core$IFn$_invoke$arity$1 ? update_event_BANG___$1.cljs$core$IFn$_invoke$arity$1(event) : update_event_BANG___$1.call(null,event)));
} else
{return node.fireEvent([cljs.core.str("on"),cljs.core.str(cljs.core.name(event_type))].join(''),(update_event_BANG___$1.cljs$core$IFn$_invoke$arity$1 ? update_event_BANG___$1.cljs$core$IFn$_invoke$arity$1(document.createEventObject()) : update_event_BANG___$1.call(null,document.createEventObject())));
}
};
var fire_BANG_ = function (node,event_type,var_args){
var p__26801 = null;if (arguments.length > 2) {
  p__26801 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__26801);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__26804){
var node = cljs.core.first(arglist__26804);
arglist__26804 = cljs.core.next(arglist__26804);
var event_type = cljs.core.first(arglist__26804);
var p__26801 = cljs.core.rest(arglist__26804);
return fire_BANG___delegate(node,event_type,p__26801);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;
