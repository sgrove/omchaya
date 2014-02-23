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
var append_BANG___2 = (function (parent,child){var G__14743 = dommy.template.__GT_node_like.call(null,parent);G__14743.appendChild(dommy.template.__GT_node_like.call(null,child));
return G__14743;
});
var append_BANG___3 = (function() { 
var G__14748__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__14744_14749 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__14745_14750 = null;var count__14746_14751 = 0;var i__14747_14752 = 0;while(true){
if((i__14747_14752 < count__14746_14751))
{var c_14753 = cljs.core._nth.call(null,chunk__14745_14750,i__14747_14752);append_BANG_.call(null,parent__$1,c_14753);
{
var G__14754 = seq__14744_14749;
var G__14755 = chunk__14745_14750;
var G__14756 = count__14746_14751;
var G__14757 = (i__14747_14752 + 1);
seq__14744_14749 = G__14754;
chunk__14745_14750 = G__14755;
count__14746_14751 = G__14756;
i__14747_14752 = G__14757;
continue;
}
} else
{var temp__4092__auto___14758 = cljs.core.seq.call(null,seq__14744_14749);if(temp__4092__auto___14758)
{var seq__14744_14759__$1 = temp__4092__auto___14758;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14744_14759__$1))
{var c__4151__auto___14760 = cljs.core.chunk_first.call(null,seq__14744_14759__$1);{
var G__14761 = cljs.core.chunk_rest.call(null,seq__14744_14759__$1);
var G__14762 = c__4151__auto___14760;
var G__14763 = cljs.core.count.call(null,c__4151__auto___14760);
var G__14764 = 0;
seq__14744_14749 = G__14761;
chunk__14745_14750 = G__14762;
count__14746_14751 = G__14763;
i__14747_14752 = G__14764;
continue;
}
} else
{var c_14765 = cljs.core.first.call(null,seq__14744_14759__$1);append_BANG_.call(null,parent__$1,c_14765);
{
var G__14766 = cljs.core.next.call(null,seq__14744_14759__$1);
var G__14767 = null;
var G__14768 = 0;
var G__14769 = 0;
seq__14744_14749 = G__14766;
chunk__14745_14750 = G__14767;
count__14746_14751 = G__14768;
i__14747_14752 = G__14769;
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
var G__14748 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14748__delegate.call(this,parent,child,more_children);};
G__14748.cljs$lang$maxFixedArity = 2;
G__14748.cljs$lang$applyTo = (function (arglist__14770){
var parent = cljs.core.first(arglist__14770);
arglist__14770 = cljs.core.next(arglist__14770);
var child = cljs.core.first(arglist__14770);
var more_children = cljs.core.rest(arglist__14770);
return G__14748__delegate(parent,child,more_children);
});
G__14748.cljs$core$IFn$_invoke$arity$variadic = G__14748__delegate;
return G__14748;
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
var G__14779__delegate = function (parent,child,more_children){var parent__$1 = dommy.template.__GT_node_like.call(null,parent);var seq__14775_14780 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__14776_14781 = null;var count__14777_14782 = 0;var i__14778_14783 = 0;while(true){
if((i__14778_14783 < count__14777_14782))
{var c_14784 = cljs.core._nth.call(null,chunk__14776_14781,i__14778_14783);prepend_BANG_.call(null,parent__$1,c_14784);
{
var G__14785 = seq__14775_14780;
var G__14786 = chunk__14776_14781;
var G__14787 = count__14777_14782;
var G__14788 = (i__14778_14783 + 1);
seq__14775_14780 = G__14785;
chunk__14776_14781 = G__14786;
count__14777_14782 = G__14787;
i__14778_14783 = G__14788;
continue;
}
} else
{var temp__4092__auto___14789 = cljs.core.seq.call(null,seq__14775_14780);if(temp__4092__auto___14789)
{var seq__14775_14790__$1 = temp__4092__auto___14789;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14775_14790__$1))
{var c__4151__auto___14791 = cljs.core.chunk_first.call(null,seq__14775_14790__$1);{
var G__14792 = cljs.core.chunk_rest.call(null,seq__14775_14790__$1);
var G__14793 = c__4151__auto___14791;
var G__14794 = cljs.core.count.call(null,c__4151__auto___14791);
var G__14795 = 0;
seq__14775_14780 = G__14792;
chunk__14776_14781 = G__14793;
count__14777_14782 = G__14794;
i__14778_14783 = G__14795;
continue;
}
} else
{var c_14796 = cljs.core.first.call(null,seq__14775_14790__$1);prepend_BANG_.call(null,parent__$1,c_14796);
{
var G__14797 = cljs.core.next.call(null,seq__14775_14790__$1);
var G__14798 = null;
var G__14799 = 0;
var G__14800 = 0;
seq__14775_14780 = G__14797;
chunk__14776_14781 = G__14798;
count__14777_14782 = G__14799;
i__14778_14783 = G__14800;
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
var G__14779 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__14779__delegate.call(this,parent,child,more_children);};
G__14779.cljs$lang$maxFixedArity = 2;
G__14779.cljs$lang$applyTo = (function (arglist__14801){
var parent = cljs.core.first(arglist__14801);
arglist__14801 = cljs.core.next(arglist__14801);
var child = cljs.core.first(arglist__14801);
var more_children = cljs.core.rest(arglist__14801);
return G__14779__delegate(parent,child,more_children);
});
G__14779.cljs$core$IFn$_invoke$arity$variadic = G__14779__delegate;
return G__14779;
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
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var actual_node = dommy.template.__GT_node_like.call(null,elem);var other__$1 = dommy.template.__GT_node_like.call(null,other);var parent = other__$1.parentNode;var temp__4090__auto___14802 = other__$1.nextSibling;if(cljs.core.truth_(temp__4090__auto___14802))
{var next_14803 = temp__4090__auto___14802;parent.insertBefore(actual_node,next_14803);
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
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(parent,node_like){var G__14805 = dommy.template.__GT_node_like.call(null,parent);G__14805.innerHTML = "";
dommy.core.append_BANG_.call(null,G__14805,node_like);
return G__14805;
});
/**
* remove node-like `elem` from parent, return node-like projection of elem
*/
dommy.core.remove_BANG_ = (function remove_BANG_(elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var G__14807 = elem__$1.parentNode;G__14807.removeChild(elem__$1);
return G__14807;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"container","container",602947571),container], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__14813){var vec__14814 = p__14813;var k = cljs.core.nth.call(null,vec__14814,0,null);var v = cljs.core.nth.call(null,vec__14814,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_(new cljs.core.Keyword(null,"live","live",1017226334).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v)))?(function (){if(typeof dommy.core.t14815 !== 'undefined')
{} else
{
/**
* @constructor
*/
dommy.core.t14815 = (function (v,k,vec__14814,p__14813,container,key_selectors_map,template,selector_map,meta14816){
this.v = v;
this.k = k;
this.vec__14814 = vec__14814;
this.p__14813 = p__14813;
this.container = container;
this.key_selectors_map = key_selectors_map;
this.template = template;
this.selector_map = selector_map;
this.meta14816 = meta14816;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
dommy.core.t14815.cljs$lang$type = true;
dommy.core.t14815.cljs$lang$ctorStr = "dommy.core/t14815";
dommy.core.t14815.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"dommy.core/t14815");
});
dommy.core.t14815.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,self__.container).querySelectorAll(dommy.core.selector.call(null,self__.v)));
});
dommy.core.t14815.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14817){var self__ = this;
var _14817__$1 = this;return self__.meta14816;
});
dommy.core.t14815.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14817,meta14816__$1){var self__ = this;
var _14817__$1 = this;return (new dommy.core.t14815(self__.v,self__.k,self__.vec__14814,self__.p__14813,self__.container,self__.key_selectors_map,self__.template,self__.selector_map,meta14816__$1));
});
dommy.core.__GT_t14815 = (function __GT_t14815(v__$1,k__$1,vec__14814__$1,p__14813__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta14816){return (new dommy.core.t14815(v__$1,k__$1,vec__14814__$1,p__14813__$1,container__$1,key_selectors_map__$1,template__$1,selector_map__$1,meta14816));
});
}
return (new dommy.core.t14815(v,k,vec__14814,p__14813,container,key_selectors_map,template,selector_map,null));
})():dommy.template.__GT_node_like.call(null,container).querySelector(dommy.core.selector.call(null,v)))], null);
}),key_selectors_map)));
});
/**
* a lazy seq of the ancestors of `node`
*/
dommy.core.ancestor_nodes = (function ancestor_nodes(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,(function (p1__14818_SHARP_){return p1__14818_SHARP_.parentNode;
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
var closest__3 = (function (base,elem,selector){var base__$1 = dommy.template.__GT_node_like.call(null,base);var elem__$1 = dommy.template.__GT_node_like.call(null,elem);return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base__$1,selector),cljs.core.take_while.call(null,(function (p1__14819_SHARP_){return !((p1__14819_SHARP_ === base__$1));
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
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__14820){var vec__14821 = p__14820;var special_mouse_event = cljs.core.nth.call(null,vec__14821,0,null);var real_mouse_event = cljs.core.nth.call(null,vec__14821,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,(function (f){return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3403__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3403__auto__))
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
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__14822){
var elem = cljs.core.first(arglist__14822);
arglist__14822 = cljs.core.next(arglist__14822);
var f = cljs.core.first(arglist__14822);
var args = cljs.core.rest(arglist__14822);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,(function (p1__14823_SHARP_){return dommy.template.__GT_node_like.call(null,cljs.core.first.call(null,p1__14823_SHARP_));
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
var vec__14847_14870 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_14871 = cljs.core.nth.call(null,vec__14847_14870,0,null);var selector_14872 = cljs.core.nth.call(null,vec__14847_14870,1,null);var seq__14848_14873 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__14855_14874 = null;var count__14856_14875 = 0;var i__14857_14876 = 0;while(true){
if((i__14857_14876 < count__14856_14875))
{var vec__14864_14877 = cljs.core._nth.call(null,chunk__14855_14874,i__14857_14876);var orig_type_14878 = cljs.core.nth.call(null,vec__14864_14877,0,null);var f_14879 = cljs.core.nth.call(null,vec__14864_14877,1,null);var seq__14858_14880 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_14878,new cljs.core.PersistentArrayMap.fromArray([orig_type_14878,cljs.core.identity], true, false)));var chunk__14860_14881 = null;var count__14861_14882 = 0;var i__14862_14883 = 0;while(true){
if((i__14862_14883 < count__14861_14882))
{var vec__14865_14884 = cljs.core._nth.call(null,chunk__14860_14881,i__14862_14883);var actual_type_14885 = cljs.core.nth.call(null,vec__14865_14884,0,null);var factory_14886 = cljs.core.nth.call(null,vec__14865_14884,1,null);var canonical_f_14887 = (cljs.core.truth_(selector_14872)?cljs.core.partial.call(null,dommy.core.live_listener,elem_14871,selector_14872):cljs.core.identity).call(null,factory_14886.call(null,f_14879));dommy.core.update_event_listeners_BANG_.call(null,elem_14871,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_14872,actual_type_14885,f_14879], null),canonical_f_14887);
if(cljs.core.truth_(elem_14871.addEventListener))
{elem_14871.addEventListener(cljs.core.name.call(null,actual_type_14885),canonical_f_14887);
} else
{elem_14871.attachEvent(cljs.core.name.call(null,actual_type_14885),canonical_f_14887);
}
{
var G__14888 = seq__14858_14880;
var G__14889 = chunk__14860_14881;
var G__14890 = count__14861_14882;
var G__14891 = (i__14862_14883 + 1);
seq__14858_14880 = G__14888;
chunk__14860_14881 = G__14889;
count__14861_14882 = G__14890;
i__14862_14883 = G__14891;
continue;
}
} else
{var temp__4092__auto___14892 = cljs.core.seq.call(null,seq__14858_14880);if(temp__4092__auto___14892)
{var seq__14858_14893__$1 = temp__4092__auto___14892;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14858_14893__$1))
{var c__4151__auto___14894 = cljs.core.chunk_first.call(null,seq__14858_14893__$1);{
var G__14895 = cljs.core.chunk_rest.call(null,seq__14858_14893__$1);
var G__14896 = c__4151__auto___14894;
var G__14897 = cljs.core.count.call(null,c__4151__auto___14894);
var G__14898 = 0;
seq__14858_14880 = G__14895;
chunk__14860_14881 = G__14896;
count__14861_14882 = G__14897;
i__14862_14883 = G__14898;
continue;
}
} else
{var vec__14866_14899 = cljs.core.first.call(null,seq__14858_14893__$1);var actual_type_14900 = cljs.core.nth.call(null,vec__14866_14899,0,null);var factory_14901 = cljs.core.nth.call(null,vec__14866_14899,1,null);var canonical_f_14902 = (cljs.core.truth_(selector_14872)?cljs.core.partial.call(null,dommy.core.live_listener,elem_14871,selector_14872):cljs.core.identity).call(null,factory_14901.call(null,f_14879));dommy.core.update_event_listeners_BANG_.call(null,elem_14871,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_14872,actual_type_14900,f_14879], null),canonical_f_14902);
if(cljs.core.truth_(elem_14871.addEventListener))
{elem_14871.addEventListener(cljs.core.name.call(null,actual_type_14900),canonical_f_14902);
} else
{elem_14871.attachEvent(cljs.core.name.call(null,actual_type_14900),canonical_f_14902);
}
{
var G__14903 = cljs.core.next.call(null,seq__14858_14893__$1);
var G__14904 = null;
var G__14905 = 0;
var G__14906 = 0;
seq__14858_14880 = G__14903;
chunk__14860_14881 = G__14904;
count__14861_14882 = G__14905;
i__14862_14883 = G__14906;
continue;
}
}
} else
{}
}
break;
}
{
var G__14907 = seq__14848_14873;
var G__14908 = chunk__14855_14874;
var G__14909 = count__14856_14875;
var G__14910 = (i__14857_14876 + 1);
seq__14848_14873 = G__14907;
chunk__14855_14874 = G__14908;
count__14856_14875 = G__14909;
i__14857_14876 = G__14910;
continue;
}
} else
{var temp__4092__auto___14911 = cljs.core.seq.call(null,seq__14848_14873);if(temp__4092__auto___14911)
{var seq__14848_14912__$1 = temp__4092__auto___14911;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14848_14912__$1))
{var c__4151__auto___14913 = cljs.core.chunk_first.call(null,seq__14848_14912__$1);{
var G__14914 = cljs.core.chunk_rest.call(null,seq__14848_14912__$1);
var G__14915 = c__4151__auto___14913;
var G__14916 = cljs.core.count.call(null,c__4151__auto___14913);
var G__14917 = 0;
seq__14848_14873 = G__14914;
chunk__14855_14874 = G__14915;
count__14856_14875 = G__14916;
i__14857_14876 = G__14917;
continue;
}
} else
{var vec__14867_14918 = cljs.core.first.call(null,seq__14848_14912__$1);var orig_type_14919 = cljs.core.nth.call(null,vec__14867_14918,0,null);var f_14920 = cljs.core.nth.call(null,vec__14867_14918,1,null);var seq__14849_14921 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_14919,new cljs.core.PersistentArrayMap.fromArray([orig_type_14919,cljs.core.identity], true, false)));var chunk__14851_14922 = null;var count__14852_14923 = 0;var i__14853_14924 = 0;while(true){
if((i__14853_14924 < count__14852_14923))
{var vec__14868_14925 = cljs.core._nth.call(null,chunk__14851_14922,i__14853_14924);var actual_type_14926 = cljs.core.nth.call(null,vec__14868_14925,0,null);var factory_14927 = cljs.core.nth.call(null,vec__14868_14925,1,null);var canonical_f_14928 = (cljs.core.truth_(selector_14872)?cljs.core.partial.call(null,dommy.core.live_listener,elem_14871,selector_14872):cljs.core.identity).call(null,factory_14927.call(null,f_14920));dommy.core.update_event_listeners_BANG_.call(null,elem_14871,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_14872,actual_type_14926,f_14920], null),canonical_f_14928);
if(cljs.core.truth_(elem_14871.addEventListener))
{elem_14871.addEventListener(cljs.core.name.call(null,actual_type_14926),canonical_f_14928);
} else
{elem_14871.attachEvent(cljs.core.name.call(null,actual_type_14926),canonical_f_14928);
}
{
var G__14929 = seq__14849_14921;
var G__14930 = chunk__14851_14922;
var G__14931 = count__14852_14923;
var G__14932 = (i__14853_14924 + 1);
seq__14849_14921 = G__14929;
chunk__14851_14922 = G__14930;
count__14852_14923 = G__14931;
i__14853_14924 = G__14932;
continue;
}
} else
{var temp__4092__auto___14933__$1 = cljs.core.seq.call(null,seq__14849_14921);if(temp__4092__auto___14933__$1)
{var seq__14849_14934__$1 = temp__4092__auto___14933__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14849_14934__$1))
{var c__4151__auto___14935 = cljs.core.chunk_first.call(null,seq__14849_14934__$1);{
var G__14936 = cljs.core.chunk_rest.call(null,seq__14849_14934__$1);
var G__14937 = c__4151__auto___14935;
var G__14938 = cljs.core.count.call(null,c__4151__auto___14935);
var G__14939 = 0;
seq__14849_14921 = G__14936;
chunk__14851_14922 = G__14937;
count__14852_14923 = G__14938;
i__14853_14924 = G__14939;
continue;
}
} else
{var vec__14869_14940 = cljs.core.first.call(null,seq__14849_14934__$1);var actual_type_14941 = cljs.core.nth.call(null,vec__14869_14940,0,null);var factory_14942 = cljs.core.nth.call(null,vec__14869_14940,1,null);var canonical_f_14943 = (cljs.core.truth_(selector_14872)?cljs.core.partial.call(null,dommy.core.live_listener,elem_14871,selector_14872):cljs.core.identity).call(null,factory_14942.call(null,f_14920));dommy.core.update_event_listeners_BANG_.call(null,elem_14871,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_14872,actual_type_14941,f_14920], null),canonical_f_14943);
if(cljs.core.truth_(elem_14871.addEventListener))
{elem_14871.addEventListener(cljs.core.name.call(null,actual_type_14941),canonical_f_14943);
} else
{elem_14871.attachEvent(cljs.core.name.call(null,actual_type_14941),canonical_f_14943);
}
{
var G__14944 = cljs.core.next.call(null,seq__14849_14934__$1);
var G__14945 = null;
var G__14946 = 0;
var G__14947 = 0;
seq__14849_14921 = G__14944;
chunk__14851_14922 = G__14945;
count__14852_14923 = G__14946;
i__14853_14924 = G__14947;
continue;
}
}
} else
{}
}
break;
}
{
var G__14948 = cljs.core.next.call(null,seq__14848_14912__$1);
var G__14949 = null;
var G__14950 = 0;
var G__14951 = 0;
seq__14848_14873 = G__14948;
chunk__14855_14874 = G__14949;
count__14856_14875 = G__14950;
i__14857_14876 = G__14951;
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
listen_BANG_.cljs$lang$applyTo = (function (arglist__14952){
var elem_sel = cljs.core.first(arglist__14952);
var type_fs = cljs.core.rest(arglist__14952);
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
var vec__14976_14999 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_15000 = cljs.core.nth.call(null,vec__14976_14999,0,null);var selector_15001 = cljs.core.nth.call(null,vec__14976_14999,1,null);var seq__14977_15002 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__14984_15003 = null;var count__14985_15004 = 0;var i__14986_15005 = 0;while(true){
if((i__14986_15005 < count__14985_15004))
{var vec__14993_15006 = cljs.core._nth.call(null,chunk__14984_15003,i__14986_15005);var orig_type_15007 = cljs.core.nth.call(null,vec__14993_15006,0,null);var f_15008 = cljs.core.nth.call(null,vec__14993_15006,1,null);var seq__14987_15009 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_15007,new cljs.core.PersistentArrayMap.fromArray([orig_type_15007,cljs.core.identity], true, false)));var chunk__14989_15010 = null;var count__14990_15011 = 0;var i__14991_15012 = 0;while(true){
if((i__14991_15012 < count__14990_15011))
{var vec__14994_15013 = cljs.core._nth.call(null,chunk__14989_15010,i__14991_15012);var actual_type_15014 = cljs.core.nth.call(null,vec__14994_15013,0,null);var __15015 = cljs.core.nth.call(null,vec__14994_15013,1,null);var keys_15016 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15001,actual_type_15014,f_15008], null);var canonical_f_15017 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_15000),keys_15016);dommy.core.update_event_listeners_BANG_.call(null,elem_15000,dommy.utils.dissoc_in,keys_15016);
if(cljs.core.truth_(elem_15000.removeEventListener))
{elem_15000.removeEventListener(cljs.core.name.call(null,actual_type_15014),canonical_f_15017);
} else
{elem_15000.detachEvent(cljs.core.name.call(null,actual_type_15014),canonical_f_15017);
}
{
var G__15018 = seq__14987_15009;
var G__15019 = chunk__14989_15010;
var G__15020 = count__14990_15011;
var G__15021 = (i__14991_15012 + 1);
seq__14987_15009 = G__15018;
chunk__14989_15010 = G__15019;
count__14990_15011 = G__15020;
i__14991_15012 = G__15021;
continue;
}
} else
{var temp__4092__auto___15022 = cljs.core.seq.call(null,seq__14987_15009);if(temp__4092__auto___15022)
{var seq__14987_15023__$1 = temp__4092__auto___15022;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14987_15023__$1))
{var c__4151__auto___15024 = cljs.core.chunk_first.call(null,seq__14987_15023__$1);{
var G__15025 = cljs.core.chunk_rest.call(null,seq__14987_15023__$1);
var G__15026 = c__4151__auto___15024;
var G__15027 = cljs.core.count.call(null,c__4151__auto___15024);
var G__15028 = 0;
seq__14987_15009 = G__15025;
chunk__14989_15010 = G__15026;
count__14990_15011 = G__15027;
i__14991_15012 = G__15028;
continue;
}
} else
{var vec__14995_15029 = cljs.core.first.call(null,seq__14987_15023__$1);var actual_type_15030 = cljs.core.nth.call(null,vec__14995_15029,0,null);var __15031 = cljs.core.nth.call(null,vec__14995_15029,1,null);var keys_15032 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15001,actual_type_15030,f_15008], null);var canonical_f_15033 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_15000),keys_15032);dommy.core.update_event_listeners_BANG_.call(null,elem_15000,dommy.utils.dissoc_in,keys_15032);
if(cljs.core.truth_(elem_15000.removeEventListener))
{elem_15000.removeEventListener(cljs.core.name.call(null,actual_type_15030),canonical_f_15033);
} else
{elem_15000.detachEvent(cljs.core.name.call(null,actual_type_15030),canonical_f_15033);
}
{
var G__15034 = cljs.core.next.call(null,seq__14987_15023__$1);
var G__15035 = null;
var G__15036 = 0;
var G__15037 = 0;
seq__14987_15009 = G__15034;
chunk__14989_15010 = G__15035;
count__14990_15011 = G__15036;
i__14991_15012 = G__15037;
continue;
}
}
} else
{}
}
break;
}
{
var G__15038 = seq__14977_15002;
var G__15039 = chunk__14984_15003;
var G__15040 = count__14985_15004;
var G__15041 = (i__14986_15005 + 1);
seq__14977_15002 = G__15038;
chunk__14984_15003 = G__15039;
count__14985_15004 = G__15040;
i__14986_15005 = G__15041;
continue;
}
} else
{var temp__4092__auto___15042 = cljs.core.seq.call(null,seq__14977_15002);if(temp__4092__auto___15042)
{var seq__14977_15043__$1 = temp__4092__auto___15042;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14977_15043__$1))
{var c__4151__auto___15044 = cljs.core.chunk_first.call(null,seq__14977_15043__$1);{
var G__15045 = cljs.core.chunk_rest.call(null,seq__14977_15043__$1);
var G__15046 = c__4151__auto___15044;
var G__15047 = cljs.core.count.call(null,c__4151__auto___15044);
var G__15048 = 0;
seq__14977_15002 = G__15045;
chunk__14984_15003 = G__15046;
count__14985_15004 = G__15047;
i__14986_15005 = G__15048;
continue;
}
} else
{var vec__14996_15049 = cljs.core.first.call(null,seq__14977_15043__$1);var orig_type_15050 = cljs.core.nth.call(null,vec__14996_15049,0,null);var f_15051 = cljs.core.nth.call(null,vec__14996_15049,1,null);var seq__14978_15052 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_15050,new cljs.core.PersistentArrayMap.fromArray([orig_type_15050,cljs.core.identity], true, false)));var chunk__14980_15053 = null;var count__14981_15054 = 0;var i__14982_15055 = 0;while(true){
if((i__14982_15055 < count__14981_15054))
{var vec__14997_15056 = cljs.core._nth.call(null,chunk__14980_15053,i__14982_15055);var actual_type_15057 = cljs.core.nth.call(null,vec__14997_15056,0,null);var __15058 = cljs.core.nth.call(null,vec__14997_15056,1,null);var keys_15059 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15001,actual_type_15057,f_15051], null);var canonical_f_15060 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_15000),keys_15059);dommy.core.update_event_listeners_BANG_.call(null,elem_15000,dommy.utils.dissoc_in,keys_15059);
if(cljs.core.truth_(elem_15000.removeEventListener))
{elem_15000.removeEventListener(cljs.core.name.call(null,actual_type_15057),canonical_f_15060);
} else
{elem_15000.detachEvent(cljs.core.name.call(null,actual_type_15057),canonical_f_15060);
}
{
var G__15061 = seq__14978_15052;
var G__15062 = chunk__14980_15053;
var G__15063 = count__14981_15054;
var G__15064 = (i__14982_15055 + 1);
seq__14978_15052 = G__15061;
chunk__14980_15053 = G__15062;
count__14981_15054 = G__15063;
i__14982_15055 = G__15064;
continue;
}
} else
{var temp__4092__auto___15065__$1 = cljs.core.seq.call(null,seq__14978_15052);if(temp__4092__auto___15065__$1)
{var seq__14978_15066__$1 = temp__4092__auto___15065__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14978_15066__$1))
{var c__4151__auto___15067 = cljs.core.chunk_first.call(null,seq__14978_15066__$1);{
var G__15068 = cljs.core.chunk_rest.call(null,seq__14978_15066__$1);
var G__15069 = c__4151__auto___15067;
var G__15070 = cljs.core.count.call(null,c__4151__auto___15067);
var G__15071 = 0;
seq__14978_15052 = G__15068;
chunk__14980_15053 = G__15069;
count__14981_15054 = G__15070;
i__14982_15055 = G__15071;
continue;
}
} else
{var vec__14998_15072 = cljs.core.first.call(null,seq__14978_15066__$1);var actual_type_15073 = cljs.core.nth.call(null,vec__14998_15072,0,null);var __15074 = cljs.core.nth.call(null,vec__14998_15072,1,null);var keys_15075 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_15001,actual_type_15073,f_15051], null);var canonical_f_15076 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_15000),keys_15075);dommy.core.update_event_listeners_BANG_.call(null,elem_15000,dommy.utils.dissoc_in,keys_15075);
if(cljs.core.truth_(elem_15000.removeEventListener))
{elem_15000.removeEventListener(cljs.core.name.call(null,actual_type_15073),canonical_f_15076);
} else
{elem_15000.detachEvent(cljs.core.name.call(null,actual_type_15073),canonical_f_15076);
}
{
var G__15077 = cljs.core.next.call(null,seq__14978_15066__$1);
var G__15078 = null;
var G__15079 = 0;
var G__15080 = 0;
seq__14978_15052 = G__15077;
chunk__14980_15053 = G__15078;
count__14981_15054 = G__15079;
i__14982_15055 = G__15080;
continue;
}
}
} else
{}
}
break;
}
{
var G__15081 = cljs.core.next.call(null,seq__14977_15043__$1);
var G__15082 = null;
var G__15083 = 0;
var G__15084 = 0;
seq__14977_15002 = G__15081;
chunk__14984_15003 = G__15082;
count__14985_15004 = G__15083;
i__14986_15005 = G__15084;
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
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__15085){
var elem_sel = cljs.core.first(arglist__15085);
var type_fs = cljs.core.rest(arglist__15085);
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
var vec__15093_15100 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_15101 = cljs.core.nth.call(null,vec__15093_15100,0,null);var selector_15102 = cljs.core.nth.call(null,vec__15093_15100,1,null);var seq__15094_15103 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,type_fs));var chunk__15095_15104 = null;var count__15096_15105 = 0;var i__15097_15106 = 0;while(true){
if((i__15097_15106 < count__15096_15105))
{var vec__15098_15107 = cljs.core._nth.call(null,chunk__15095_15104,i__15097_15106);var type_15108 = cljs.core.nth.call(null,vec__15098_15107,0,null);var f_15109 = cljs.core.nth.call(null,vec__15098_15107,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_15108,((function (seq__15094_15103,chunk__15095_15104,count__15096_15105,i__15097_15106,vec__15098_15107,type_15108,f_15109){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_15108,this_fn);
return f_15109.call(null,e);
});})(seq__15094_15103,chunk__15095_15104,count__15096_15105,i__15097_15106,vec__15098_15107,type_15108,f_15109))
);
{
var G__15110 = seq__15094_15103;
var G__15111 = chunk__15095_15104;
var G__15112 = count__15096_15105;
var G__15113 = (i__15097_15106 + 1);
seq__15094_15103 = G__15110;
chunk__15095_15104 = G__15111;
count__15096_15105 = G__15112;
i__15097_15106 = G__15113;
continue;
}
} else
{var temp__4092__auto___15114 = cljs.core.seq.call(null,seq__15094_15103);if(temp__4092__auto___15114)
{var seq__15094_15115__$1 = temp__4092__auto___15114;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15094_15115__$1))
{var c__4151__auto___15116 = cljs.core.chunk_first.call(null,seq__15094_15115__$1);{
var G__15117 = cljs.core.chunk_rest.call(null,seq__15094_15115__$1);
var G__15118 = c__4151__auto___15116;
var G__15119 = cljs.core.count.call(null,c__4151__auto___15116);
var G__15120 = 0;
seq__15094_15103 = G__15117;
chunk__15095_15104 = G__15118;
count__15096_15105 = G__15119;
i__15097_15106 = G__15120;
continue;
}
} else
{var vec__15099_15121 = cljs.core.first.call(null,seq__15094_15115__$1);var type_15122 = cljs.core.nth.call(null,vec__15099_15121,0,null);var f_15123 = cljs.core.nth.call(null,vec__15099_15121,1,null);dommy.core.listen_BANG_.call(null,elem_sel,type_15122,((function (seq__15094_15103,chunk__15095_15104,count__15096_15105,i__15097_15106,vec__15099_15121,type_15122,f_15123,seq__15094_15115__$1,temp__4092__auto___15114){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_15122,this_fn);
return f_15123.call(null,e);
});})(seq__15094_15103,chunk__15095_15104,count__15096_15105,i__15097_15106,vec__15099_15121,type_15122,f_15123,seq__15094_15115__$1,temp__4092__auto___15114))
);
{
var G__15124 = cljs.core.next.call(null,seq__15094_15115__$1);
var G__15125 = null;
var G__15126 = 0;
var G__15127 = 0;
seq__15094_15103 = G__15124;
chunk__15095_15104 = G__15125;
count__15096_15105 = G__15126;
i__15097_15106 = G__15127;
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
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__15128){
var elem_sel = cljs.core.first(arglist__15128);
var type_fs = cljs.core.rest(arglist__15128);
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
var fire_BANG___delegate = function (node,event_type,p__15129){var vec__15131 = p__15129;var update_event_BANG_ = cljs.core.nth.call(null,vec__15131,0,null);if(dommy.core.descendant_QMARK_.call(null,node,document.documentElement))
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
var p__15129 = null;if (arguments.length > 2) {
  p__15129 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return fire_BANG___delegate.call(this,node,event_type,p__15129);};
fire_BANG_.cljs$lang$maxFixedArity = 2;
fire_BANG_.cljs$lang$applyTo = (function (arglist__15132){
var node = cljs.core.first(arglist__15132);
arglist__15132 = cljs.core.next(arglist__15132);
var event_type = cljs.core.first(arglist__15132);
var p__15129 = cljs.core.rest(arglist__15132);
return fire_BANG___delegate(node,event_type,p__15129);
});
fire_BANG_.cljs$core$IFn$_invoke$arity$variadic = fire_BANG___delegate;
return fire_BANG_;
})()
;

//# sourceMappingURL=core.js.map