// Compiled by ClojureScript 0.0-2156
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj16510 = {};return obj16510;
})();
dommy.template._elem = (function _elem(this$){if((function (){var and__3391__auto__ = this$;if(and__3391__auto__)
{return this$.dommy$template$PElement$_elem$arity$1;
} else
{return and__3391__auto__;
}
})())
{return this$.dommy$template$PElement$_elem$arity$1(this$);
} else
{var x__4030__auto__ = (((this$ == null))?null:this$);return (function (){var or__3403__auto__ = (dommy.template._elem[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (dommy.template._elem["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"PElement.-elem",this$);
}
}
})().call(null,this$);
}
});
/**
* index of css character (#,.) in base-element. bottleneck
*/
dommy.template.next_css_index = (function next_css_index(s,start_idx){var id_idx = s.indexOf("#",start_idx);var class_idx = s.indexOf(".",start_idx);var idx = Math.min(id_idx,class_idx);if((idx < 0))
{return Math.max(id_idx,class_idx);
} else
{return idx;
}
});
/**
* dom element from css-style keyword like :a.class1 or :span#my-span.class
*/
dommy.template.base_element = (function base_element(node_key){var node_str = cljs.core.name.call(null,node_key);var base_idx = dommy.template.next_css_index.call(null,node_str,0);var tag = (((base_idx > 0))?node_str.substring(0,base_idx):(((base_idx === 0))?"div":((new cljs.core.Keyword(null,"else","else",1017020587))?node_str:null)));var node = (cljs.core.truth_(dommy.template._PLUS_svg_tags_PLUS_.call(null,tag))?document.createElementNS(dommy.template._PLUS_svg_ns_PLUS_,tag):document.createElement(tag));if((base_idx >= 0))
{var str_16513 = node_str.substring(base_idx);while(true){
var next_idx_16514 = dommy.template.next_css_index.call(null,str_16513,1);var frag_16515 = (((next_idx_16514 >= 0))?str_16513.substring(0,next_idx_16514):str_16513);var G__16512_16516 = frag_16515.charAt(0);if(cljs.core._EQ_.call(null,"#",G__16512_16516))
{node.setAttribute("id",frag_16515.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__16512_16516))
{dommy.attrs.add_class_BANG_.call(null,node,frag_16515.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_16515.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_16514 >= 0))
{{
var G__16517 = str_16513.substring(next_idx_16514);
str_16513 = G__16517;
continue;
}
} else
{}
break;
}
} else
{}
return node;
});
dommy.template.throw_unable_to_make_node = (function throw_unable_to_make_node(node_data){throw [cljs.core.str("Don't know how to make node from: "),cljs.core.str(cljs.core.pr_str.call(null,node_data))].join('');
});
/**
* take data and return a document fragment
*/
dommy.template.__GT_document_fragment = (function() {
var __GT_document_fragment = null;
var __GT_document_fragment__1 = (function (data){return __GT_document_fragment.call(null,document.createDocumentFragment(),data);
});
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__16523 = data;if(G__16523)
{var bit__4053__auto__ = null;if(cljs.core.truth_((function (){var or__3403__auto__ = bit__4053__auto__;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return G__16523.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__16523.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__16523);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__16523);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__16524_16528 = cljs.core.seq.call(null,data);var chunk__16525_16529 = null;var count__16526_16530 = 0;var i__16527_16531 = 0;while(true){
if((i__16527_16531 < count__16526_16530))
{var child_16532 = cljs.core._nth.call(null,chunk__16525_16529,i__16527_16531);__GT_document_fragment.call(null,result_frag,child_16532);
{
var G__16533 = seq__16524_16528;
var G__16534 = chunk__16525_16529;
var G__16535 = count__16526_16530;
var G__16536 = (i__16527_16531 + 1);
seq__16524_16528 = G__16533;
chunk__16525_16529 = G__16534;
count__16526_16530 = G__16535;
i__16527_16531 = G__16536;
continue;
}
} else
{var temp__4092__auto___16537 = cljs.core.seq.call(null,seq__16524_16528);if(temp__4092__auto___16537)
{var seq__16524_16538__$1 = temp__4092__auto___16537;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16524_16538__$1))
{var c__4151__auto___16539 = cljs.core.chunk_first.call(null,seq__16524_16538__$1);{
var G__16540 = cljs.core.chunk_rest.call(null,seq__16524_16538__$1);
var G__16541 = c__4151__auto___16539;
var G__16542 = cljs.core.count.call(null,c__4151__auto___16539);
var G__16543 = 0;
seq__16524_16528 = G__16540;
chunk__16525_16529 = G__16541;
count__16526_16530 = G__16542;
i__16527_16531 = G__16543;
continue;
}
} else
{var child_16544 = cljs.core.first.call(null,seq__16524_16538__$1);__GT_document_fragment.call(null,result_frag,child_16544);
{
var G__16545 = cljs.core.next.call(null,seq__16524_16538__$1);
var G__16546 = null;
var G__16547 = 0;
var G__16548 = 0;
seq__16524_16528 = G__16545;
chunk__16525_16529 = G__16546;
count__16526_16530 = G__16547;
i__16527_16531 = G__16548;
continue;
}
}
} else
{}
}
break;
}
return result_frag;
} else
{if((data == null))
{return result_frag;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return dommy.template.throw_unable_to_make_node.call(null,data);
} else
{return null;
}
}
}
}
});
__GT_document_fragment = function(result_frag,data){
switch(arguments.length){
case 1:
return __GT_document_fragment__1.call(this,result_frag);
case 2:
return __GT_document_fragment__2.call(this,result_frag,data);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_document_fragment.cljs$core$IFn$_invoke$arity$1 = __GT_document_fragment__1;
__GT_document_fragment.cljs$core$IFn$_invoke$arity$2 = __GT_document_fragment__2;
return __GT_document_fragment;
})()
;
/**
* take data and return DOM node if it satisfies PElement and tries to
* make a document fragment otherwise
*/
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__16550 = data;if(G__16550)
{var bit__4053__auto__ = null;if(cljs.core.truth_((function (){var or__3403__auto__ = bit__4053__auto__;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return G__16550.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__16550.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__16550);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__16550);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.__GT_document_fragment.call(null,data);
}
});
/**
* element with either attrs or nested children [:div [:span "Hello"]]
*/
dommy.template.compound_element = (function compound_element(p__16551){var vec__16571 = p__16551;var tag_name = cljs.core.nth.call(null,vec__16571,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__16571,1,null);var children = cljs.core.nthnext.call(null,vec__16571,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__16573 = maybe_attrs;if(G__16573)
{var bit__4053__auto__ = null;if(cljs.core.truth_((function (){var or__3403__auto__ = bit__4053__auto__;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return G__16573.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__16573.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__16573);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__16573);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__16574_16590 = cljs.core.seq.call(null,attrs);var chunk__16575_16591 = null;var count__16576_16592 = 0;var i__16577_16593 = 0;while(true){
if((i__16577_16593 < count__16576_16592))
{var vec__16578_16594 = cljs.core._nth.call(null,chunk__16575_16591,i__16577_16593);var k_16595 = cljs.core.nth.call(null,vec__16578_16594,0,null);var v_16596 = cljs.core.nth.call(null,vec__16578_16594,1,null);var G__16579_16597 = k_16595;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__16579_16597))
{var seq__16580_16598 = cljs.core.seq.call(null,v_16596);var chunk__16581_16599 = null;var count__16582_16600 = 0;var i__16583_16601 = 0;while(true){
if((i__16583_16601 < count__16582_16600))
{var c_16602 = cljs.core._nth.call(null,chunk__16581_16599,i__16583_16601);dommy.attrs.add_class_BANG_.call(null,n,c_16602);
{
var G__16603 = seq__16580_16598;
var G__16604 = chunk__16581_16599;
var G__16605 = count__16582_16600;
var G__16606 = (i__16583_16601 + 1);
seq__16580_16598 = G__16603;
chunk__16581_16599 = G__16604;
count__16582_16600 = G__16605;
i__16583_16601 = G__16606;
continue;
}
} else
{var temp__4092__auto___16607 = cljs.core.seq.call(null,seq__16580_16598);if(temp__4092__auto___16607)
{var seq__16580_16608__$1 = temp__4092__auto___16607;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16580_16608__$1))
{var c__4151__auto___16609 = cljs.core.chunk_first.call(null,seq__16580_16608__$1);{
var G__16610 = cljs.core.chunk_rest.call(null,seq__16580_16608__$1);
var G__16611 = c__4151__auto___16609;
var G__16612 = cljs.core.count.call(null,c__4151__auto___16609);
var G__16613 = 0;
seq__16580_16598 = G__16610;
chunk__16581_16599 = G__16611;
count__16582_16600 = G__16612;
i__16583_16601 = G__16613;
continue;
}
} else
{var c_16614 = cljs.core.first.call(null,seq__16580_16608__$1);dommy.attrs.add_class_BANG_.call(null,n,c_16614);
{
var G__16615 = cljs.core.next.call(null,seq__16580_16608__$1);
var G__16616 = null;
var G__16617 = 0;
var G__16618 = 0;
seq__16580_16598 = G__16615;
chunk__16581_16599 = G__16616;
count__16582_16600 = G__16617;
i__16583_16601 = G__16618;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__16579_16597))
{dommy.attrs.add_class_BANG_.call(null,n,v_16596);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_16595,v_16596);
} else
{}
}
}
{
var G__16619 = seq__16574_16590;
var G__16620 = chunk__16575_16591;
var G__16621 = count__16576_16592;
var G__16622 = (i__16577_16593 + 1);
seq__16574_16590 = G__16619;
chunk__16575_16591 = G__16620;
count__16576_16592 = G__16621;
i__16577_16593 = G__16622;
continue;
}
} else
{var temp__4092__auto___16623 = cljs.core.seq.call(null,seq__16574_16590);if(temp__4092__auto___16623)
{var seq__16574_16624__$1 = temp__4092__auto___16623;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16574_16624__$1))
{var c__4151__auto___16625 = cljs.core.chunk_first.call(null,seq__16574_16624__$1);{
var G__16626 = cljs.core.chunk_rest.call(null,seq__16574_16624__$1);
var G__16627 = c__4151__auto___16625;
var G__16628 = cljs.core.count.call(null,c__4151__auto___16625);
var G__16629 = 0;
seq__16574_16590 = G__16626;
chunk__16575_16591 = G__16627;
count__16576_16592 = G__16628;
i__16577_16593 = G__16629;
continue;
}
} else
{var vec__16584_16630 = cljs.core.first.call(null,seq__16574_16624__$1);var k_16631 = cljs.core.nth.call(null,vec__16584_16630,0,null);var v_16632 = cljs.core.nth.call(null,vec__16584_16630,1,null);var G__16585_16633 = k_16631;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__16585_16633))
{var seq__16586_16634 = cljs.core.seq.call(null,v_16632);var chunk__16587_16635 = null;var count__16588_16636 = 0;var i__16589_16637 = 0;while(true){
if((i__16589_16637 < count__16588_16636))
{var c_16638 = cljs.core._nth.call(null,chunk__16587_16635,i__16589_16637);dommy.attrs.add_class_BANG_.call(null,n,c_16638);
{
var G__16639 = seq__16586_16634;
var G__16640 = chunk__16587_16635;
var G__16641 = count__16588_16636;
var G__16642 = (i__16589_16637 + 1);
seq__16586_16634 = G__16639;
chunk__16587_16635 = G__16640;
count__16588_16636 = G__16641;
i__16589_16637 = G__16642;
continue;
}
} else
{var temp__4092__auto___16643__$1 = cljs.core.seq.call(null,seq__16586_16634);if(temp__4092__auto___16643__$1)
{var seq__16586_16644__$1 = temp__4092__auto___16643__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16586_16644__$1))
{var c__4151__auto___16645 = cljs.core.chunk_first.call(null,seq__16586_16644__$1);{
var G__16646 = cljs.core.chunk_rest.call(null,seq__16586_16644__$1);
var G__16647 = c__4151__auto___16645;
var G__16648 = cljs.core.count.call(null,c__4151__auto___16645);
var G__16649 = 0;
seq__16586_16634 = G__16646;
chunk__16587_16635 = G__16647;
count__16588_16636 = G__16648;
i__16589_16637 = G__16649;
continue;
}
} else
{var c_16650 = cljs.core.first.call(null,seq__16586_16644__$1);dommy.attrs.add_class_BANG_.call(null,n,c_16650);
{
var G__16651 = cljs.core.next.call(null,seq__16586_16644__$1);
var G__16652 = null;
var G__16653 = 0;
var G__16654 = 0;
seq__16586_16634 = G__16651;
chunk__16587_16635 = G__16652;
count__16588_16636 = G__16653;
i__16589_16637 = G__16654;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__16585_16633))
{dommy.attrs.add_class_BANG_.call(null,n,v_16632);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_16631,v_16632);
} else
{}
}
}
{
var G__16655 = cljs.core.next.call(null,seq__16574_16624__$1);
var G__16656 = null;
var G__16657 = 0;
var G__16658 = 0;
seq__16574_16590 = G__16655;
chunk__16575_16591 = G__16656;
count__16576_16592 = G__16657;
i__16577_16593 = G__16658;
continue;
}
}
} else
{}
}
break;
}
n.appendChild(dommy.template.__GT_node_like.call(null,children__$1));
return n;
});
(dommy.template.PElement["string"] = true);
(dommy.template._elem["string"] = (function (this$){if((this$ instanceof cljs.core.Keyword))
{return dommy.template.base_element.call(null,this$);
} else
{return document.createTextNode([cljs.core.str(this$)].join(''));
}
}));
(dommy.template.PElement["number"] = true);
(dommy.template._elem["number"] = (function (this$){return document.createTextNode([cljs.core.str(this$)].join(''));
}));
cljs.core.PersistentVector.prototype.dommy$template$PElement$ = true;
cljs.core.PersistentVector.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return dommy.template.compound_element.call(null,this$__$1);
});
SVGElement.prototype.dommy$template$PElement$ = true;
SVGElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
Document.prototype.dommy$template$PElement$ = true;
Document.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
Text.prototype.dommy$template$PElement$ = true;
Text.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
DocumentFragment.prototype.dommy$template$PElement$ = true;
DocumentFragment.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
HTMLElement.prototype.dommy$template$PElement$ = true;
HTMLElement.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
try{Window.prototype.dommy$template$PElement$ = true;
Window.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
}catch (e16659){if((e16659 instanceof ReferenceError))
{var __16660 = e16659;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16659;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__16662 = data;if(G__16662)
{var bit__4053__auto__ = null;if(cljs.core.truth_((function (){var or__3403__auto__ = bit__4053__auto__;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return G__16662.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__16662.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__16662);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__16662);
}
})())
{return dommy.template._elem.call(null,data);
} else
{return dommy.template.throw_unable_to_make_node.call(null,data);
}
});
dommy.template.html__GT_nodes = (function html__GT_nodes(html){var parent = document.createElement("div");parent.insertAdjacentHTML("beforeend",html);
return cljs.core.seq.call(null,Array.prototype.slice.call(parent.childNodes));
});

//# sourceMappingURL=template.js.map