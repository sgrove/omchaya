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
dommy.core.set_html_BANG_ = (function set_html_BANG_(elem,html){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);elem__$1.innerHTML = html;
return elem__$1;
});
dommy.core.html = (function html(elem){return dommy.template.__GT_node_like.call(null,elem).innerHTML;
});
dommy.core.set_text_BANG_ = (function set_text_BANG_(elem,text){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var prop = (cljs.core.truth_(elem__$1.textContent)?"textContent":"innerText");(elem__$1[prop] = text);
return elem__$1;
});
dommy.core.text = (function text(elem){var or__3403__auto__ = elem.textContent;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return elem.innerText;
}
});
dommy.core.value = (function value(elem){return dommy.template.__GT_node_like.call(null,elem).value;
});
dommy.core.set_value_BANG_ = (function set_value_BANG_(elem,value){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);elem__$1.value = value;
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
var append_BANG___2 = (function (parent,child){var G__16116 = dommy.template.__GT_node_like.call(null,parent);G__16116.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__16116;
});
var append_BANG___3 = (function() { 
var G__16121__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__16117_16122 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__16118_16123 = null;var count__16119_16124 = 0;var i__16120_16125 = 0;while(true){
if((i__16120_16125 < count__16119_16124))
{var c_16126 = cljs.core._nth.call(null,chunk__16118_16123,i__16120_16125);append_BANG_.call(null,parent__$1,c_16126);
{
var G__16127 = seq__16117_16122;
var G__16128 = chunk__16118_16123;
var G__16129 = count__16119_16124;
var G__16130 = (i__16120_16125 + 1);
seq__16117_16122 = G__16127;
chunk__16118_16123 = G__16128;
count__16119_16124 = G__16129;
i__16120_16125 = G__16130;
continue;
}
} else
{var temp__4092__auto___16131 = cljs.core.seq.call(null,seq__16117_16122);if(temp__4092__auto___16131)
{var seq__16117_16132__$1 = temp__4092__auto___16131;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16117_16132__$1))
{var c__4151__auto___16133 = cljs.core.chunk_first.call(null,seq__16117_16132__$1);{
var G__16134 = cljs.core.chunk_rest.call(null,seq__16117_16132__$1);
var G__16135 = c__4151__auto___16133;
var G__16136 = cljs.core.count.call(null,c__4151__auto___16133);
var G__16137 = 0;
seq__16117_16122 = G__16134;
chunk__16118_16123 = G__16135;
count__16119_16124 = G__16136;
i__16120_16125 = G__16137;
continue;
}
} else
{var c_16138 = cljs.core.first.call(null,seq__16117_16132__$1);append_BANG_.call(null,parent__$1,c_16138);
{
var G__16139 = cljs.core.next.call(null,seq__16117_16132__$1);
var G__16140 = null;
var G__16141 = 0;
var G__16142 = 0;
seq__16117_16122 = G__16139;
chunk__16118_16123 = G__16140;
count__16119_16124 = G__16141;
i__16120_16125 = G__16142;
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
var G__16121 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16121__delegate.call(this,parent,child,more_children);};
G__16121.cljs$lang$maxFixedArity = 2;
G__16121.cljs$lang$applyTo = (function (arglist__16143){
var parent = cljs.core.first(arglist__16143);
arglist__16143 = cljs.core.next(arglist__16143);
var child = cljs.core.first(arglist__16143);
var more_children = cljs.core.rest(arglist__16143);
return G__16121__delegate(parent,child,more_children);
});
G__16121.cljs$core$IFn$_invoke$arity$variadic = G__16121__delegate;
return G__16121;
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
var prepend_BANG___2 = (function (parent,child){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);return parent__$1.insertBefore(dommy.template.__GT_node_like.call(null,child),parent__$1.firstChild);
});
var prepend_BANG___3 = (function() { 
var G__16152__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__16148_16153 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__16149_16154 = null;var count__16150_16155 = 0;var i__16151_16156 = 0;while(true){
if((i__16151_16156 < count__16150_16155))
{var c_16157 = cljs.core._nth.call(null,chunk__16149_16154,i__16151_16156);prepend_BANG_.call(null,parent__$1,c_16157);
{
var G__16158 = seq__16148_16153;
var G__16159 = chunk__16149_16154;
var G__16160 = count__16150_16155;
var G__16161 = (i__16151_16156 + 1);
seq__16148_16153 = G__16158;
chunk__16149_16154 = G__16159;
count__16150_16155 = G__16160;
i__16151_16156 = G__16161;
continue;
}
} else
{var temp__4092__auto___16162 = cljs.core.seq.call(null,seq__16148_16153);if(temp__4092__auto___16162)
{var seq__16148_16163__$1 = temp__4092__auto___16162;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16148_16163__$1))
{var c__4151__auto___16164 = cljs.core.chunk_first.call(null,seq__16148_16163__$1);{
var G__16165 = cljs.core.chunk_rest.call(null,seq__16148_16163__$1);
var G__16166 = c__4151__auto___16164;
var G__16167 = cljs.core.count.call(null,c__4151__auto___16164);
var G__16168 = 0;
seq__16148_16153 = G__16165;
chunk__16149_16154 = G__16166;
count__16150_16155 = G__16167;
i__16151_16156 = G__16168;
continue;
}
} else
{var c_16169 = cljs.core.first.call(null,seq__16148_16163__$1);prepend_BANG_.call(null,parent__$1,c_16169);
{
var G__16170 = cljs.core.next.call(null,seq__16148_16163__$1);
var G__16171 = null;
var G__16172 = 0;
var G__16173 = 0;
seq__16148_16153 = G__16170;
chunk__16149_16154 = G__16171;
count__16150_16155 = G__16172;
i__16151_16156 = G__16173;
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
var G__16152 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16152__delegate.call(this,parent,child,more_children);};
G__16152.cljs$lang$maxFixedArity = 2;
G__16152.cljs$lang$applyTo = (function (arglist__16174){
var parent = cljs.core.first(arglist__16174);
arglist__16174 = cljs.core.next(arglist__16174);
var child = cljs.core.first(arglist__16174);
var more_children = cljs.core.rest(arglist__16174);
return G__16152__delegate(parent,child,more_children);
});
G__16152.cljs$core$IFn$_invoke$arity$variadic = G__16152__delegate;
return G__16152;
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
dommy.core.insert_before_BANG_ = (function insert_before_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);if(cljs.core.truth_(other__$1.parentNode))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",499016324,null),new cljs.core.Symbol(null,"other","other",-1534461751,null))))].join('')));
}
other__$1.parentNode.insertBefore(actual_node,other__$1);
return actual_node;
});
/**
* insert `node` after `other`, both node-like,
* `other` must have a parent. return `node`
*/
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___16175 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___16175))
{var next_16176 = temp__4090__auto___16175;parent.insertBefore(actual_node,next_16176);
} else
{parent.appendChild(actual_node);
}
return actual_node;
});
/**
* replace `elem` with `new`, both node-like, return node-like projection of new.
* node-like projection of elem must have parent.
*/
dommy.core.replace_BANG_ = (function replace_BANG_(elem,new$){var new$__$1 = dommy.template.__GT_node_like.call(null,new$);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(cljs.core.truth_(elem__$1.parentNode))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentNode",".-parentNode",499016324,null),new cljs.core.Symbol(null,"elem","elem",-1637415608,null))))].join('')));
}
elem__$1.parentNode.replaceChild(new$__$1,elem__$1);
return new$__$1;
});
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__16178 = dommy.template.__GT_node_like.call(null,parent);G__16178.innerHTML = "";
dommy.core.append_BANG_.call(null,G__16178,node_like);
return G__16178;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__16180 = elem__$1.parentNode;G__16180.removeChild(elem__$1);
return G__16180;
});
/**
* clears all children from `elem`
*/
dommy.core.clear_BANG_ = (function clear_BANG_(elem){return dommy.template.__GT_node_like.call(null,elem).innerHTML = "";
});
dommy.core.selector = (function selector(data){if(cljs.core.coll_QMARK_.call(null,data))
{return clojure.string.join.call(null," ",cljs.core.map.call(null,selector,data));
} else
{if((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))
{return cljs.core.name.call(null,data);
} else
{return null;
}
}
});
dommy.core.selector_map = (function selector_map(template,key_selectors_map){var container = dommy.template.__GT_node_like.call(null,template);if(!(cljs.core.contains_QMARK_.call(null,key_selectors_map,new cljs.core.Keyword(null,"container","container",602947571))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-2051487815,null),new cljs.core.Symbol(null,"key-selectors-map","key-selectors-map",19054414,null),new cljs.core.Keyword(null,"container","container",602947571)))))].join('')));
}
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__16186){var vec__16187 = p__16186;var k = cljs.core.nth.call(null,vec__16187,0,null);var v = cljs.core.nth.call(null,vec__16187,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t16188 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t16188 = (function (v,k,vec__16187,p__16186,container,key_selectors_map,template,selector_map,meta16189){
this.v = v;
this.k = k;
this.vec__16187 = vec__16187;
this.p__16186 = p__16186;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta16189 = meta16189;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t16188.cljs$lang$type = true;
dommy.core.t16188.cljs$lang$ctorStr = "dommy.core/t16188";
dommy.core.t16188.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"dommy.core/t16188");
});
dommy.core.t16188.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t16188.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16190){var self__ = this;
var _16190__$1 = this;return self__.meta16189;
});
dommy.core.t16188.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16190,meta16189__$1){var self__ = this;
var _16190__$1 = this;return (new dommy.core.t16188(self__.v,self__.k,self__.vec__16187,self__.p__16186,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta16189__$1));
});
dommy.core.__GT_t16188 = (function __GT_t16188(v__$1,k__$1,vec__16187__$1,p__16186__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta16189){return (new dommy.core.t16188(v__$1,k__$1,vec__16187__$1,p__16186__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta16189));
});
}
return (new dommy.core.t16188(v,k,vec__16187,p__16186,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__16191_SHARP_){return p1__16191_SHARP_.parentNode;
}),dommy.template.__GT_node_like.call(null,elem)));
});
/**
* returns a predicate on nodes that match `selector` at the
* time of this `matches-pred` call (may return outdated results
* if you fuck with the DOM)
*/
dommy.core.matches_pred = (function() {
var matches_pred = null;
var matches_pred__1 = (function (selector){return matches_pred.call(null,document,selector);
});
var matches_pred__2 = (function (base,selector){var matches = dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,dommy.template.__GT_node_like.call(null,base)).querySelectorAll(dommy.core.selector.call(null,selector)));return (function (elem){return (matches.indexOf(elem) >= 0);
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
var closest__2 = (function (elem,selector){return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,selector),dommy.core.ancestor_nodes.call(null,dommy.template.__GT_node_like.call(null,elem))));
});
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__16192_SHARP_){return !((p1__16192_SHARP_ === base__$1));
}),dommy.core.ancestor_nodes.call(null,elem__$1))));
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
dommy.core.descendant_QMARK_ = (function descendant_QMARK_(descendant,ancestor){var descendant__$1 = dommy.template.__GT_node_like.call(null,descendant);var ancestor__$1 = dommy.template.__GT_node_like.call(null,ancestor);if(cljs.core.truth_(ancestor__$1.contains))
{return ancestor__$1.contains(descendant__$1);
} else
{if(cljs.core.truth_(ancestor__$1.compareDocumentPosition))
{return ((ancestor__$1.compareDocumentPosition(descendant__$1) & (1 << 4)) != 0);
} else
{return null;
}
}
});
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__16193){var vec__16194 = p__16193;var special_mouse_event = cljs.core.nth.call(null,vec__16194,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__16194,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3403__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__3391__auto__ = related_target;if(cljs.core.truth_(and__3391__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__3391__auto__;
}
})()))
{return null;
} else
{return f.call(null,event);
}
});
})], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",2027084997),new cljs.core.Keyword(null,"mouseover","mouseover",1601081963),new cljs.core.Keyword(null,"mouseleave","mouseleave",2033263780),new cljs.core.Keyword(null,"mouseout","mouseout",894298107)], null)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.call(null,dommy.template.__GT_node_like.call(null,elem),event.target,selector);if(cljs.core.truth_((function (){var and__3391__auto__ = selected_target;if(cljs.core.truth_(and__3391__auto__))
{return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",1284845038)));
} else
{return and__3391__auto__;
}
})()))
{event.selectedTarget = selected_target;
return f.call(null,event);
} else
{return null;
}
});
});
/**
* Returns a nested map of event listeners on `nodes`
*/
dommy.core.event_listeners = (function event_listeners(elem){var or__3403__auto__ = dommy.template.__GT_node_like.call(null,elem).dommyEventListeners;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
* @param {...*} var_args
*/
dommy.core.update_event_listeners_BANG_ = (function() { 
var update_event_listeners_BANG___delegate = function (elem,f,args){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
};
var update_event_listeners_BANG_ = function (elem,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return update_event_listeners_BANG___delegate.call(this,elem,f,args);};
update_event_listeners_BANG_.cljs$lang$maxFixedArity = 2;
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__16195){
var elem = cljs.core.first(arglist__16195);
arglist__16195 = cljs.core.next(arglist__16195);
var f = cljs.core.first(arglist__16195);
var args = cljs.core.rest(arglist__16195);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__16196_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__16196_SHARP_));
}),cljs.core.rest).call(null,elem_sel);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dommy.template.__GT_node_like.call(null,elem_sel),null], null);
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
var listen_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))))].join('')));
}
var vec__16220_16243 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_16244 = cljs.core.nth.call(null,vec__16220_16243,0,null);var selector_16245 = cljs.core.nth.call(null,vec__16220_16243,1,null);var seq__16221_16246 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__16228_16247 = null;var count__16229_16248 = 0;var i__16230_16249 = 0;while(true){
if((i__16230_16249 < count__16229_16248))
{var vec__16237_16250 = cljs.core._nth.call(null,chunk__16228_16247,i__16230_16249);var orig_type_16251 = cljs.core.nth.call(null,vec__16237_16250,0,null);var f_16252 = cljs.core.nth.call(null,vec__16237_16250,1,null);var seq__16231_16253 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_16251,new cljs.core.PersistentArrayMap.fromArray([orig_type_16251,cljs.core.identity], true, false)));var chunk__16233_16254 = null;var count__16234_16255 = 0;var i__16235_16256 = 0;while(true){
if((i__16235_16256 < count__16234_16255))
{var vec__16238_16257 = cljs.core._nth.call(null,chunk__16233_16254,i__16235_16256);var actual_type_16258 = cljs.core.nth.call(null,vec__16238_16257,0,null);var factory_16259 = cljs.core.nth.call(null,vec__16238_16257,1,null);var canonical_f_16260 = (cljs.core.truth_(selector_16245)?cljs.core.partial.call(null,dommy.core.live_listener,elem_16244,selector_16245):cljs.core.identity).call(null,factory_16259.call(null,f_16252));dommy.core.update_event_listeners_BANG_.call(null,elem_16244,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16245,actual_type_16258,f_16252], null),canonical_f_16260);
if(cljs.core.truth_(elem_16244.addEventListener))
{elem_16244.addEventListener(cljs.core.name.call(null,actual_type_16258),canonical_f_16260);
} else
{elem_16244.attachEvent(cljs.core.name.call(null,actual_type_16258),canonical_f_16260);
}
{
var G__16261 = seq__16231_16253;
var G__16262 = chunk__16233_16254;
var G__16263 = count__16234_16255;
var G__16264 = (i__16235_16256 + 1);
seq__16231_16253 = G__16261;
chunk__16233_16254 = G__16262;
count__16234_16255 = G__16263;
i__16235_16256 = G__16264;
continue;
}
} else
{var temp__4092__auto___16265 = cljs.core.seq.call(null,seq__16231_16253);if(temp__4092__auto___16265)
{var seq__16231_16266__$1 = temp__4092__auto___16265;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16231_16266__$1))
{var c__4151__auto___16267 = cljs.core.chunk_first.call(null,seq__16231_16266__$1);{
var G__16268 = cljs.core.chunk_rest.call(null,seq__16231_16266__$1);
var G__16269 = c__4151__auto___16267;
var G__16270 = cljs.core.count.call(null,c__4151__auto___16267);
var G__16271 = 0;
seq__16231_16253 = G__16268;
chunk__16233_16254 = G__16269;
count__16234_16255 = G__16270;
i__16235_16256 = G__16271;
continue;
}
} else
{var vec__16239_16272 = cljs.core.first.call(null,seq__16231_16266__$1);var actual_type_16273 = cljs.core.nth.call(null,vec__16239_16272,0,null);var factory_16274 = cljs.core.nth.call(null,vec__16239_16272,1,null);var canonical_f_16275 = (cljs.core.truth_(selector_16245)?cljs.core.partial.call(null,dommy.core.live_listener,elem_16244,selector_16245):cljs.core.identity).call(null,factory_16274.call(null,f_16252));dommy.core.update_event_listeners_BANG_.call(null,elem_16244,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16245,actual_type_16273,f_16252], null),canonical_f_16275);
if(cljs.core.truth_(elem_16244.addEventListener))
{elem_16244.addEventListener(cljs.core.name.call(null,actual_type_16273),canonical_f_16275);
} else
{elem_16244.attachEvent(cljs.core.name.call(null,actual_type_16273),canonical_f_16275);
}
{
var G__16276 = cljs.core.next.call(null,seq__16231_16266__$1);
var G__16277 = null;
var G__16278 = 0;
var G__16279 = 0;
seq__16231_16253 = G__16276;
chunk__16233_16254 = G__16277;
count__16234_16255 = G__16278;
i__16235_16256 = G__16279;
continue;
}
}
} else
{}
}
break;
}
{
var G__16280 = seq__16221_16246;
var G__16281 = chunk__16228_16247;
var G__16282 = count__16229_16248;
var G__16283 = (i__16230_16249 + 1);
seq__16221_16246 = G__16280;
chunk__16228_16247 = G__16281;
count__16229_16248 = G__16282;
i__16230_16249 = G__16283;
continue;
}
} else
{var temp__4092__auto___16284 = cljs.core.seq.call(null,seq__16221_16246);if(temp__4092__auto___16284)
{var seq__16221_16285__$1 = temp__4092__auto___16284;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16221_16285__$1))
{var c__4151__auto___16286 = cljs.core.chunk_first.call(null,seq__16221_16285__$1);{
var G__16287 = cljs.core.chunk_rest.call(null,seq__16221_16285__$1);
var G__16288 = c__4151__auto___16286;
var G__16289 = cljs.core.count.call(null,c__4151__auto___16286);
var G__16290 = 0;
seq__16221_16246 = G__16287;
chunk__16228_16247 = G__16288;
count__16229_16248 = G__16289;
i__16230_16249 = G__16290;
continue;
}
} else
{var vec__16240_16291 = cljs.core.first.call(null,seq__16221_16285__$1);var orig_type_16292 = cljs.core.nth.call(null,vec__16240_16291,0,null);var f_16293 = cljs.core.nth.call(null,vec__16240_16291,1,null);var seq__16222_16294 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_16292,new cljs.core.PersistentArrayMap.fromArray([orig_type_16292,cljs.core.identity], true, false)));var chunk__16224_16295 = null;var count__16225_16296 = 0;var i__16226_16297 = 0;while(true){
if((i__16226_16297 < count__16225_16296))
{var vec__16241_16298 = cljs.core._nth.call(null,chunk__16224_16295,i__16226_16297);var actual_type_16299 = cljs.core.nth.call(null,vec__16241_16298,0,null);var factory_16300 = cljs.core.nth.call(null,vec__16241_16298,1,null);var canonical_f_16301 = (cljs.core.truth_(selector_16245)?cljs.core.partial.call(null,dommy.core.live_listener,elem_16244,selector_16245):cljs.core.identity).call(null,factory_16300.call(null,f_16293));dommy.core.update_event_listeners_BANG_.call(null,elem_16244,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16245,actual_type_16299,f_16293], null),canonical_f_16301);
if(cljs.core.truth_(elem_16244.addEventListener))
{elem_16244.addEventListener(cljs.core.name.call(null,actual_type_16299),canonical_f_16301);
} else
{elem_16244.attachEvent(cljs.core.name.call(null,actual_type_16299),canonical_f_16301);
}
{
var G__16302 = seq__16222_16294;
var G__16303 = chunk__16224_16295;
var G__16304 = count__16225_16296;
var G__16305 = (i__16226_16297 + 1);
seq__16222_16294 = G__16302;
chunk__16224_16295 = G__16303;
count__16225_16296 = G__16304;
i__16226_16297 = G__16305;
continue;
}
} else
{var temp__4092__auto___16306__$1 = cljs.core.seq.call(null,seq__16222_16294);if(temp__4092__auto___16306__$1)
{var seq__16222_16307__$1 = temp__4092__auto___16306__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16222_16307__$1))
{var c__4151__auto___16308 = cljs.core.chunk_first.call(null,seq__16222_16307__$1);{
var G__16309 = cljs.core.chunk_rest.call(null,seq__16222_16307__$1);
var G__16310 = c__4151__auto___16308;
var G__16311 = cljs.core.count.call(null,c__4151__auto___16308);
var G__16312 = 0;
seq__16222_16294 = G__16309;
chunk__16224_16295 = G__16310;
count__16225_16296 = G__16311;
i__16226_16297 = G__16312;
continue;
}
} else
{var vec__16242_16313 = cljs.core.first.call(null,seq__16222_16307__$1);var actual_type_16314 = cljs.core.nth.call(null,vec__16242_16313,0,null);var factory_16315 = cljs.core.nth.call(null,vec__16242_16313,1,null);var canonical_f_16316 = (cljs.core.truth_(selector_16245)?cljs.core.partial.call(null,dommy.core.live_listener,elem_16244,selector_16245):cljs.core.identity).call(null,factory_16315.call(null,f_16293));dommy.core.update_event_listeners_BANG_.call(null,elem_16244,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16245,actual_type_16314,f_16293], null),canonical_f_16316);
if(cljs.core.truth_(elem_16244.addEventListener))
{elem_16244.addEventListener(cljs.core.name.call(null,actual_type_16314),canonical_f_16316);
} else
{elem_16244.attachEvent(cljs.core.name.call(null,actual_type_16314),canonical_f_16316);
}
{
var G__16317 = cljs.core.next.call(null,seq__16222_16307__$1);
var G__16318 = null;
var G__16319 = 0;
var G__16320 = 0;
seq__16222_16294 = G__16317;
chunk__16224_16295 = G__16318;
count__16225_16296 = G__16319;
i__16226_16297 = G__16320;
continue;
}
}
} else
{}
}
break;
}
{
var G__16321 = cljs.core.next.call(null,seq__16221_16285__$1);
var G__16322 = null;
var G__16323 = 0;
var G__16324 = 0;
seq__16221_16246 = G__16321;
chunk__16228_16247 = G__16322;
count__16229_16248 = G__16323;
i__16230_16249 = G__16324;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__16325){
var elem_sel = cljs.core.first(arglist__16325);
var type_fs = cljs.core.rest(arglist__16325);
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
var unlisten_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))))].join('')));
}
var vec__16349_16372 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_16373 = cljs.core.nth.call(null,vec__16349_16372,0,null);var selector_16374 = cljs.core.nth.call(null,vec__16349_16372,1,null);var seq__16350_16375 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__16357_16376 = null;var count__16358_16377 = 0;var i__16359_16378 = 0;while(true){
if((i__16359_16378 < count__16358_16377))
{var vec__16366_16379 = cljs.core._nth.call(null,chunk__16357_16376,i__16359_16378);var orig_type_16380 = cljs.core.nth.call(null,vec__16366_16379,0,null);var f_16381 = cljs.core.nth.call(null,vec__16366_16379,1,null);var seq__16360_16382 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_16380,new cljs.core.PersistentArrayMap.fromArray([orig_type_16380,cljs.core.identity], true, false)));var chunk__16362_16383 = null;var count__16363_16384 = 0;var i__16364_16385 = 0;while(true){
if((i__16364_16385 < count__16363_16384))
{var vec__16367_16386 = cljs.core._nth.call(null,chunk__16362_16383,i__16364_16385);var actual_type_16387 = cljs.core.nth.call(null,vec__16367_16386,0,null);var __16388 = cljs.core.nth.call(null,vec__16367_16386,1,null);var keys_16389 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16374,actual_type_16387,f_16381], null);var canonical_f_16390 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_16373),keys_16389);dommy.core.update_event_listeners_BANG_.call(null,elem_16373,dommy.utils.dissoc_in,keys_16389);
if(cljs.core.truth_(elem_16373.removeEventListener))
{elem_16373.removeEventListener(cljs.core.name.call(null,actual_type_16387),canonical_f_16390);
} else
{elem_16373.detachEvent(cljs.core.name.call(null,actual_type_16387),canonical_f_16390);
}
{
var G__16391 = seq__16360_16382;
var G__16392 = chunk__16362_16383;
var G__16393 = count__16363_16384;
var G__16394 = (i__16364_16385 + 1);
seq__16360_16382 = G__16391;
chunk__16362_16383 = G__16392;
count__16363_16384 = G__16393;
i__16364_16385 = G__16394;
continue;
}
} else
{var temp__4092__auto___16395 = cljs.core.seq.call(null,seq__16360_16382);if(temp__4092__auto___16395)
{var seq__16360_16396__$1 = temp__4092__auto___16395;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16360_16396__$1))
{var c__4151__auto___16397 = cljs.core.chunk_first.call(null,seq__16360_16396__$1);{
var G__16398 = cljs.core.chunk_rest.call(null,seq__16360_16396__$1);
var G__16399 = c__4151__auto___16397;
var G__16400 = cljs.core.count.call(null,c__4151__auto___16397);
var G__16401 = 0;
seq__16360_16382 = G__16398;
chunk__16362_16383 = G__16399;
count__16363_16384 = G__16400;
i__16364_16385 = G__16401;
continue;
}
} else
{var vec__16368_16402 = cljs.core.first.call(null,seq__16360_16396__$1);var actual_type_16403 = cljs.core.nth.call(null,vec__16368_16402,0,null);var __16404 = cljs.core.nth.call(null,vec__16368_16402,1,null);var keys_16405 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16374,actual_type_16403,f_16381], null);var canonical_f_16406 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_16373),keys_16405);dommy.core.update_event_listeners_BANG_.call(null,elem_16373,dommy.utils.dissoc_in,keys_16405);
if(cljs.core.truth_(elem_16373.removeEventListener))
{elem_16373.removeEventListener(cljs.core.name.call(null,actual_type_16403),canonical_f_16406);
} else
{elem_16373.detachEvent(cljs.core.name.call(null,actual_type_16403),canonical_f_16406);
}
{
var G__16407 = cljs.core.next.call(null,seq__16360_16396__$1);
var G__16408 = null;
var G__16409 = 0;
var G__16410 = 0;
seq__16360_16382 = G__16407;
chunk__16362_16383 = G__16408;
count__16363_16384 = G__16409;
i__16364_16385 = G__16410;
continue;
}
}
} else
{}
}
break;
}
{
var G__16411 = seq__16350_16375;
var G__16412 = chunk__16357_16376;
var G__16413 = count__16358_16377;
var G__16414 = (i__16359_16378 + 1);
seq__16350_16375 = G__16411;
chunk__16357_16376 = G__16412;
count__16358_16377 = G__16413;
i__16359_16378 = G__16414;
continue;
}
} else
{var temp__4092__auto___16415 = cljs.core.seq.call(null,seq__16350_16375);if(temp__4092__auto___16415)
{var seq__16350_16416__$1 = temp__4092__auto___16415;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16350_16416__$1))
{var c__4151__auto___16417 = cljs.core.chunk_first.call(null,seq__16350_16416__$1);{
var G__16418 = cljs.core.chunk_rest.call(null,seq__16350_16416__$1);
var G__16419 = c__4151__auto___16417;
var G__16420 = cljs.core.count.call(null,c__4151__auto___16417);
var G__16421 = 0;
seq__16350_16375 = G__16418;
chunk__16357_16376 = G__16419;
count__16358_16377 = G__16420;
i__16359_16378 = G__16421;
continue;
}
} else
{var vec__16369_16422 = cljs.core.first.call(null,seq__16350_16416__$1);var orig_type_16423 = cljs.core.nth.call(null,vec__16369_16422,0,null);var f_16424 = cljs.core.nth.call(null,vec__16369_16422,1,null);var seq__16351_16425 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_16423,new cljs.core.PersistentArrayMap.fromArray([orig_type_16423,cljs.core.identity], true, false)));var chunk__16353_16426 = null;var count__16354_16427 = 0;var i__16355_16428 = 0;while(true){
if((i__16355_16428 < count__16354_16427))
{var vec__16370_16429 = cljs.core._nth.call(null,chunk__16353_16426,i__16355_16428);var actual_type_16430 = cljs.core.nth.call(null,vec__16370_16429,0,null);var __16431 = cljs.core.nth.call(null,vec__16370_16429,1,null);var keys_16432 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16374,actual_type_16430,f_16424], null);var canonical_f_16433 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_16373),keys_16432);dommy.core.update_event_listeners_BANG_.call(null,elem_16373,dommy.utils.dissoc_in,keys_16432);
if(cljs.core.truth_(elem_16373.removeEventListener))
{elem_16373.removeEventListener(cljs.core.name.call(null,actual_type_16430),canonical_f_16433);
} else
{elem_16373.detachEvent(cljs.core.name.call(null,actual_type_16430),canonical_f_16433);
}
{
var G__16434 = seq__16351_16425;
var G__16435 = chunk__16353_16426;
var G__16436 = count__16354_16427;
var G__16437 = (i__16355_16428 + 1);
seq__16351_16425 = G__16434;
chunk__16353_16426 = G__16435;
count__16354_16427 = G__16436;
i__16355_16428 = G__16437;
continue;
}
} else
{var temp__4092__auto___16438__$1 = cljs.core.seq.call(null,seq__16351_16425);if(temp__4092__auto___16438__$1)
{var seq__16351_16439__$1 = temp__4092__auto___16438__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16351_16439__$1))
{var c__4151__auto___16440 = cljs.core.chunk_first.call(null,seq__16351_16439__$1);{
var G__16441 = cljs.core.chunk_rest.call(null,seq__16351_16439__$1);
var G__16442 = c__4151__auto___16440;
var G__16443 = cljs.core.count.call(null,c__4151__auto___16440);
var G__16444 = 0;
seq__16351_16425 = G__16441;
chunk__16353_16426 = G__16442;
count__16354_16427 = G__16443;
i__16355_16428 = G__16444;
continue;
}
} else
{var vec__16371_16445 = cljs.core.first.call(null,seq__16351_16439__$1);var actual_type_16446 = cljs.core.nth.call(null,vec__16371_16445,0,null);var __16447 = cljs.core.nth.call(null,vec__16371_16445,1,null);var keys_16448 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_16374,actual_type_16446,f_16424], null);var canonical_f_16449 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_16373),keys_16448);dommy.core.update_event_listeners_BANG_.call(null,elem_16373,dommy.utils.dissoc_in,keys_16448);
if(cljs.core.truth_(elem_16373.removeEventListener))
{elem_16373.removeEventListener(cljs.core.name.call(null,actual_type_16446),canonical_f_16449);
} else
{elem_16373.detachEvent(cljs.core.name.call(null,actual_type_16446),canonical_f_16449);
}
{
var G__16450 = cljs.core.next.call(null,seq__16351_16439__$1);
var G__16451 = null;
var G__16452 = 0;
var G__16453 = 0;
seq__16351_16425 = G__16450;
chunk__16353_16426 = G__16451;
count__16354_16427 = G__16452;
i__16355_16428 = G__16453;
continue;
}
}
} else
{}
}
break;
}
{
var G__16454 = cljs.core.next.call(null,seq__16350_16416__$1);
var G__16455 = null;
var G__16456 = 0;
var G__16457 = 0;
seq__16350_16375 = G__16454;
chunk__16357_16376 = G__16455;
count__16358_16377 = G__16456;
i__16359_16378 = G__16457;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__16458){
var elem_sel = cljs.core.first(arglist__16458);
var type_fs = cljs.core.rest(arglist__16458);
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
var listen_once_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"type-fs","type-fs",1801297401,null)))))].join('')));
}
var vec__16466_16473 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_16474 = cljs.core.nth.call(null,vec__16466_16473,0,null);var selector_16475 = cljs.core.nth.call(null,vec__16466_16473,1,null);var seq__16467_16476 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__16468_16477 = null;var count__16469_16478 = 0;var i__16470_16479 = 0;while(true){
if((i__16470_16479 < count__16469_16478))
{var vec__16471_16480 = cljs.core._nth.call(null,chunk__16468_16477,i__16470_16479);var type_16481 = cljs.core.nth.call(null,vec__16471_16480,0,null);var f_16482 = cljs.core.nth.call(null,vec__16471_16480,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_16481,((function (seq__16467_16476,chunk__16468_16477,count__16469_16478,i__16470_16479,vec__16471_16480,type_16481,f_16482){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_16481,this_fn);
return f_16482.call(null,e);
});})(seq__16467_16476,chunk__16468_16477,count__16469_16478,i__16470_16479,vec__16471_16480,type_16481,f_16482))
);
{
var G__16483 = seq__16467_16476;
var G__16484 = chunk__16468_16477;
var G__16485 = count__16469_16478;
var G__16486 = (i__16470_16479 + 1);
seq__16467_16476 = G__16483;
chunk__16468_16477 = G__16484;
count__16469_16478 = G__16485;
i__16470_16479 = G__16486;
continue;
}
} else
{var temp__4092__auto___16487 = cljs.core.seq.call(null,seq__16467_16476);if(temp__4092__auto___16487)
{var seq__16467_16488__$1 = temp__4092__auto___16487;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16467_16488__$1))
{var c__4151__auto___16489 = cljs.core.chunk_first.call(null,seq__16467_16488__$1);{
var G__16490 = cljs.core.chunk_rest.call(null,seq__16467_16488__$1);
var G__16491 = c__4151__auto___16489;
var G__16492 = cljs.core.count.call(null,c__4151__auto___16489);
var G__16493 = 0;
seq__16467_16476 = G__16490;
chunk__16468_16477 = G__16491;
count__16469_16478 = G__16492;
i__16470_16479 = G__16493;
continue;
}
} else
{var vec__16472_16494 = cljs.core.first.call(null,seq__16467_16488__$1);var type_16495 = cljs.core.nth.call(null,vec__16472_16494,0,null);var f_16496 = cljs.core.nth.call(null,vec__16472_16494,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_16495,((function (seq__16467_16476,chunk__16468_16477,count__16469_16478,i__16470_16479,vec__16472_16494,type_16495,f_16496,seq__16467_16488__$1,temp__4092__auto___16487){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_16495,this_fn);
return f_16496.call(null,e);
});})(seq__16467_16476,chunk__16468_16477,count__16469_16478,i__16470_16479,vec__16472_16494,type_16495,f_16496,seq__16467_16488__$1,temp__4092__auto___16487))
);
{
var G__16497 = cljs.core.next.call(null,seq__16467_16488__$1);
var G__16498 = null;
var G__16499 = 0;
var G__16500 = 0;
seq__16467_16476 = G__16497;
chunk__16468_16477 = G__16498;
count__16469_16478 = G__16499;
i__16470_16479 = G__16500;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__16501){
var elem_sel = cljs.core.first(arglist__16501);
var type_fs = cljs.core.rest(arglist__16501);
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
var fire_BANG___delegate = function (node,event_type,p__16502){var vec__16504 = p__16502;var update_event_BANG_ = cljs.core.nth.call(null,vec__16504,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"descendant?","descendant?",-1886221157,null),new cljs.core.Symbol(null,"node","node",-1637144645,null),new cljs.core.Symbol("js","document.documentElement","js/document.documentElement",-1449696112,null))))].join('')));
}
var update_event_BANG___$1 = (function (){var or__3403__auto__ = update_event_BANG_;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return cljs.core.identity;
}
})();if(cljs.core.truth_(document.createEvent))
{var event = document.createEvent("Event");event.initEvent(cljs.core.name.call(null,event_type),true,true);
return node.dispatchEvent(update_event_BANG___$1.call(null,event));
} else
{return node.fireEvent([cljs.core.str("on"),cljs.core.str(cljs.core.name.call(null,event_type))].join(''),update_event_BANG___$1.call(null,document.createEventObject()));
}
};
var fire_BANG_ = function (node,event_type,var_args){
var p__16502 = null;if (arguments.length > 2) {
  p__16502 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__16502);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__16505){
var node = cljs.core.first(arglist__16505);
arglist__16505 = cljs.core.next(arglist__16505);
var event_type = cljs.core.first(arglist__16505);
var p__16502 = cljs.core.rest(arglist__16505);
return fire_BANG___delegate(node,event_type,p__16502);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//# sourceMappingURL=core.js.map