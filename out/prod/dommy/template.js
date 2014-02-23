// Compiled by ClojureScript 0.0-2156
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj26809 = {};return obj26809;
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
{throw cljs.core.missing_protocol("PElement.-elem",this$);
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
dommy.template.base_element = (function base_element(node_key){var node_str = cljs.core.name(node_key);var base_idx = dommy.template.next_css_index(node_str,0);var tag = (((base_idx > 0))?node_str.substring(0,base_idx):(((base_idx === 0))?"div":((cljs.core.constant$keyword$307)?node_str:null)));var node = (cljs.core.truth_((dommy.template._PLUS_svg_tags_PLUS_.cljs$core$IFn$_invoke$arity$1 ? dommy.template._PLUS_svg_tags_PLUS_.cljs$core$IFn$_invoke$arity$1(tag) : dommy.template._PLUS_svg_tags_PLUS_.call(null,tag)))?document.createElementNS(dommy.template._PLUS_svg_ns_PLUS_,tag):document.createElement(tag));if((base_idx >= 0))
{var str_26812 = node_str.substring(base_idx);while(true){
var next_idx_26813 = dommy.template.next_css_index(str_26812,1);var frag_26814 = (((next_idx_26813 >= 0))?str_26812.substring(0,next_idx_26813):str_26812);var G__26811_26815 = frag_26814.charAt(0);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",G__26811_26815))
{node.setAttribute("id",frag_26814.substring(1));
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(".",G__26811_26815))
{dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(node,frag_26814.substring(1));
} else
{if(cljs.core.constant$keyword$307)
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_26814.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_26813 >= 0))
{{
var G__26816 = str_26812.substring(next_idx_26813);
str_26812 = G__26816;
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
dommy.template.throw_unable_to_make_node = (function throw_unable_to_make_node(node_data){throw [cljs.core.str("Don't know how to make node from: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([node_data], 0)))].join('');
});
/**
* take data and return a document fragment
*/
dommy.template.__GT_document_fragment = (function() {
var __GT_document_fragment = null;
var __GT_document_fragment__1 = (function (data){return __GT_document_fragment.cljs$core$IFn$_invoke$arity$2(document.createDocumentFragment(),data);
});
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__26822 = data;if(G__26822)
{var bit__4053__auto__ = null;if(cljs.core.truth_((function (){var or__3403__auto__ = bit__4053__auto__;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return G__26822.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__26822.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__26822);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__26822);
}
})())
{result_frag.appendChild(dommy.template._elem(data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_(data))
{var seq__26823_26827 = cljs.core.seq(data);var chunk__26824_26828 = null;var count__26825_26829 = 0;var i__26826_26830 = 0;while(true){
if((i__26826_26830 < count__26825_26829))
{var child_26831 = chunk__26824_26828.cljs$core$IIndexed$_nth$arity$2(null,i__26826_26830);__GT_document_fragment.cljs$core$IFn$_invoke$arity$2(result_frag,child_26831);
{
var G__26832 = seq__26823_26827;
var G__26833 = chunk__26824_26828;
var G__26834 = count__26825_26829;
var G__26835 = (i__26826_26830 + 1);
seq__26823_26827 = G__26832;
chunk__26824_26828 = G__26833;
count__26825_26829 = G__26834;
i__26826_26830 = G__26835;
continue;
}
} else
{var temp__4092__auto___26836 = cljs.core.seq(seq__26823_26827);if(temp__4092__auto___26836)
{var seq__26823_26837__$1 = temp__4092__auto___26836;if(cljs.core.chunked_seq_QMARK_(seq__26823_26837__$1))
{var c__4151__auto___26838 = cljs.core.chunk_first(seq__26823_26837__$1);{
var G__26839 = cljs.core.chunk_rest(seq__26823_26837__$1);
var G__26840 = c__4151__auto___26838;
var G__26841 = cljs.core.count(c__4151__auto___26838);
var G__26842 = 0;
seq__26823_26827 = G__26839;
chunk__26824_26828 = G__26840;
count__26825_26829 = G__26841;
i__26826_26830 = G__26842;
continue;
}
} else
{var child_26843 = cljs.core.first(seq__26823_26837__$1);__GT_document_fragment.cljs$core$IFn$_invoke$arity$2(result_frag,child_26843);
{
var G__26844 = cljs.core.next(seq__26823_26837__$1);
var G__26845 = null;
var G__26846 = 0;
var G__26847 = 0;
seq__26823_26827 = G__26844;
chunk__26824_26828 = G__26845;
count__26825_26829 = G__26846;
i__26826_26830 = G__26847;
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
{if(cljs.core.constant$keyword$307)
{return dommy.template.throw_unable_to_make_node(data);
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__26849 = data;if(G__26849)
{var bit__4053__auto__ = null;if(cljs.core.truth_((function (){var or__3403__auto__ = bit__4053__auto__;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return G__26849.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__26849.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__26849);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__26849);
}
})())
{return dommy.template._elem(data);
} else
{return dommy.template.__GT_document_fragment.cljs$core$IFn$_invoke$arity$1(data);
}
});
/**
* element with either attrs or nested children [:div [:span "Hello"]]
*/
dommy.template.compound_element = (function compound_element(p__26850){var vec__26870 = p__26850;var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26870,0,null);var maybe_attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26870,1,null);var children = cljs.core.nthnext(vec__26870,2);var n = dommy.template.base_element(tag_name);var attrs = (((cljs.core.map_QMARK_(maybe_attrs)) && (!((function (){var G__26872 = maybe_attrs;if(G__26872)
{var bit__4053__auto__ = null;if(cljs.core.truth_((function (){var or__3403__auto__ = bit__4053__auto__;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return G__26872.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__26872.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__26872);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__26872);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons(maybe_attrs,children));var seq__26873_26889 = cljs.core.seq(attrs);var chunk__26874_26890 = null;var count__26875_26891 = 0;var i__26876_26892 = 0;while(true){
if((i__26876_26892 < count__26875_26891))
{var vec__26877_26893 = chunk__26874_26890.cljs$core$IIndexed$_nth$arity$2(null,i__26876_26892);var k_26894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26877_26893,0,null);var v_26895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26877_26893,1,null);var G__26878_26896 = k_26894;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$334,G__26878_26896))
{var seq__26879_26897 = cljs.core.seq(v_26895);var chunk__26880_26898 = null;var count__26881_26899 = 0;var i__26882_26900 = 0;while(true){
if((i__26882_26900 < count__26881_26899))
{var c_26901 = chunk__26880_26898.cljs$core$IIndexed$_nth$arity$2(null,i__26882_26900);dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,c_26901);
{
var G__26902 = seq__26879_26897;
var G__26903 = chunk__26880_26898;
var G__26904 = count__26881_26899;
var G__26905 = (i__26882_26900 + 1);
seq__26879_26897 = G__26902;
chunk__26880_26898 = G__26903;
count__26881_26899 = G__26904;
i__26882_26900 = G__26905;
continue;
}
} else
{var temp__4092__auto___26906 = cljs.core.seq(seq__26879_26897);if(temp__4092__auto___26906)
{var seq__26879_26907__$1 = temp__4092__auto___26906;if(cljs.core.chunked_seq_QMARK_(seq__26879_26907__$1))
{var c__4151__auto___26908 = cljs.core.chunk_first(seq__26879_26907__$1);{
var G__26909 = cljs.core.chunk_rest(seq__26879_26907__$1);
var G__26910 = c__4151__auto___26908;
var G__26911 = cljs.core.count(c__4151__auto___26908);
var G__26912 = 0;
seq__26879_26897 = G__26909;
chunk__26880_26898 = G__26910;
count__26881_26899 = G__26911;
i__26882_26900 = G__26912;
continue;
}
} else
{var c_26913 = cljs.core.first(seq__26879_26907__$1);dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,c_26913);
{
var G__26914 = cljs.core.next(seq__26879_26907__$1);
var G__26915 = null;
var G__26916 = 0;
var G__26917 = 0;
seq__26879_26897 = G__26914;
chunk__26880_26898 = G__26915;
count__26881_26899 = G__26916;
i__26882_26900 = G__26917;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$333,G__26878_26896))
{dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,v_26895);
} else
{if(cljs.core.constant$keyword$307)
{dommy.attrs.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(n,k_26894,v_26895);
} else
{}
}
}
{
var G__26918 = seq__26873_26889;
var G__26919 = chunk__26874_26890;
var G__26920 = count__26875_26891;
var G__26921 = (i__26876_26892 + 1);
seq__26873_26889 = G__26918;
chunk__26874_26890 = G__26919;
count__26875_26891 = G__26920;
i__26876_26892 = G__26921;
continue;
}
} else
{var temp__4092__auto___26922 = cljs.core.seq(seq__26873_26889);if(temp__4092__auto___26922)
{var seq__26873_26923__$1 = temp__4092__auto___26922;if(cljs.core.chunked_seq_QMARK_(seq__26873_26923__$1))
{var c__4151__auto___26924 = cljs.core.chunk_first(seq__26873_26923__$1);{
var G__26925 = cljs.core.chunk_rest(seq__26873_26923__$1);
var G__26926 = c__4151__auto___26924;
var G__26927 = cljs.core.count(c__4151__auto___26924);
var G__26928 = 0;
seq__26873_26889 = G__26925;
chunk__26874_26890 = G__26926;
count__26875_26891 = G__26927;
i__26876_26892 = G__26928;
continue;
}
} else
{var vec__26883_26929 = cljs.core.first(seq__26873_26923__$1);var k_26930 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26883_26929,0,null);var v_26931 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26883_26929,1,null);var G__26884_26932 = k_26930;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$334,G__26884_26932))
{var seq__26885_26933 = cljs.core.seq(v_26931);var chunk__26886_26934 = null;var count__26887_26935 = 0;var i__26888_26936 = 0;while(true){
if((i__26888_26936 < count__26887_26935))
{var c_26937 = chunk__26886_26934.cljs$core$IIndexed$_nth$arity$2(null,i__26888_26936);dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,c_26937);
{
var G__26938 = seq__26885_26933;
var G__26939 = chunk__26886_26934;
var G__26940 = count__26887_26935;
var G__26941 = (i__26888_26936 + 1);
seq__26885_26933 = G__26938;
chunk__26886_26934 = G__26939;
count__26887_26935 = G__26940;
i__26888_26936 = G__26941;
continue;
}
} else
{var temp__4092__auto___26942__$1 = cljs.core.seq(seq__26885_26933);if(temp__4092__auto___26942__$1)
{var seq__26885_26943__$1 = temp__4092__auto___26942__$1;if(cljs.core.chunked_seq_QMARK_(seq__26885_26943__$1))
{var c__4151__auto___26944 = cljs.core.chunk_first(seq__26885_26943__$1);{
var G__26945 = cljs.core.chunk_rest(seq__26885_26943__$1);
var G__26946 = c__4151__auto___26944;
var G__26947 = cljs.core.count(c__4151__auto___26944);
var G__26948 = 0;
seq__26885_26933 = G__26945;
chunk__26886_26934 = G__26946;
count__26887_26935 = G__26947;
i__26888_26936 = G__26948;
continue;
}
} else
{var c_26949 = cljs.core.first(seq__26885_26943__$1);dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,c_26949);
{
var G__26950 = cljs.core.next(seq__26885_26943__$1);
var G__26951 = null;
var G__26952 = 0;
var G__26953 = 0;
seq__26885_26933 = G__26950;
chunk__26886_26934 = G__26951;
count__26887_26935 = G__26952;
i__26888_26936 = G__26953;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$333,G__26884_26932))
{dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(n,v_26931);
} else
{if(cljs.core.constant$keyword$307)
{dommy.attrs.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(n,k_26930,v_26931);
} else
{}
}
}
{
var G__26954 = cljs.core.next(seq__26873_26923__$1);
var G__26955 = null;
var G__26956 = 0;
var G__26957 = 0;
seq__26873_26889 = G__26954;
chunk__26874_26890 = G__26955;
count__26875_26891 = G__26956;
i__26876_26892 = G__26957;
continue;
}
}
} else
{}
}
break;
}
n.appendChild(dommy.template.__GT_node_like(children__$1));
return n;
});
(dommy.template.PElement["string"] = true);
(dommy.template._elem["string"] = (function (this$){if((this$ instanceof cljs.core.Keyword))
{return dommy.template.base_element(this$);
} else
{return document.createTextNode([cljs.core.str(this$)].join(''));
}
}));
(dommy.template.PElement["number"] = true);
(dommy.template._elem["number"] = (function (this$){return document.createTextNode([cljs.core.str(this$)].join(''));
}));
cljs.core.PersistentVector.prototype.dommy$template$PElement$ = true;
cljs.core.PersistentVector.prototype.dommy$template$PElement$_elem$arity$1 = (function (this$){var this$__$1 = this;return dommy.template.compound_element(this$__$1);
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
}catch (e26958){if((e26958 instanceof ReferenceError))
{var __26959 = e26958;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(cljs.core.constant$keyword$307)
{throw e26958;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__26961 = data;if(G__26961)
{var bit__4053__auto__ = null;if(cljs.core.truth_((function (){var or__3403__auto__ = bit__4053__auto__;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return G__26961.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__26961.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__26961);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(dommy.template.PElement,G__26961);
}
})())
{return dommy.template._elem(data);
} else
{return dommy.template.throw_unable_to_make_node(data);
}
});
dommy.template.html__GT_nodes = (function html__GT_nodes(html){var parent = document.createElement("div");parent.insertAdjacentHTML("beforeend",html);
return cljs.core.seq(Array.prototype.slice.call(parent.childNodes));
});
