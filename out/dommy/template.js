// Compiled by ClojureScript 0.0-2156
goog.provide('dommy.template');
goog.require('cljs.core');
goog.require('dommy.attrs');
goog.require('dommy.attrs');
goog.require('clojure.string');
goog.require('clojure.string');
dommy.template._PLUS_svg_ns_PLUS_ = "http://www.w3.org/2000/svg";
dommy.template._PLUS_svg_tags_PLUS_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["svg",null,"line",null], null), null);
dommy.template.PElement = (function (){var obj15137 = {};return obj15137;
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
{var str_15140 = node_str.substring(base_idx);while(true){
var next_idx_15141 = dommy.template.next_css_index.call(null,str_15140,1);var frag_15142 = (((next_idx_15141 >= 0))?str_15140.substring(0,next_idx_15141):str_15140);var G__15139_15143 = frag_15142.charAt(0);if(cljs.core._EQ_.call(null,"#",G__15139_15143))
{node.setAttribute("id",frag_15142.substring(1));
} else
{if(cljs.core._EQ_.call(null,".",G__15139_15143))
{dommy.attrs.add_class_BANG_.call(null,node,frag_15142.substring(1));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(frag_15142.charAt(0))].join('')));
} else
{}
}
}
if((next_idx_15141 >= 0))
{{
var G__15144 = str_15140.substring(next_idx_15141);
str_15140 = G__15144;
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
var __GT_document_fragment__2 = (function (result_frag,data){if((function (){var G__15150 = data;if(G__15150)
{var bit__4053__auto__ = null;if(cljs.core.truth_((function (){var or__3403__auto__ = bit__4053__auto__;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return G__15150.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__15150.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__15150);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__15150);
}
})())
{result_frag.appendChild(dommy.template._elem.call(null,data));
return result_frag;
} else
{if(cljs.core.seq_QMARK_.call(null,data))
{var seq__15151_15155 = cljs.core.seq.call(null,data);var chunk__15152_15156 = null;var count__15153_15157 = 0;var i__15154_15158 = 0;while(true){
if((i__15154_15158 < count__15153_15157))
{var child_15159 = cljs.core._nth.call(null,chunk__15152_15156,i__15154_15158);__GT_document_fragment.call(null,result_frag,child_15159);
{
var G__15160 = seq__15151_15155;
var G__15161 = chunk__15152_15156;
var G__15162 = count__15153_15157;
var G__15163 = (i__15154_15158 + 1);
seq__15151_15155 = G__15160;
chunk__15152_15156 = G__15161;
count__15153_15157 = G__15162;
i__15154_15158 = G__15163;
continue;
}
} else
{var temp__4092__auto___15164 = cljs.core.seq.call(null,seq__15151_15155);if(temp__4092__auto___15164)
{var seq__15151_15165__$1 = temp__4092__auto___15164;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15151_15165__$1))
{var c__4151__auto___15166 = cljs.core.chunk_first.call(null,seq__15151_15165__$1);{
var G__15167 = cljs.core.chunk_rest.call(null,seq__15151_15165__$1);
var G__15168 = c__4151__auto___15166;
var G__15169 = cljs.core.count.call(null,c__4151__auto___15166);
var G__15170 = 0;
seq__15151_15155 = G__15167;
chunk__15152_15156 = G__15168;
count__15153_15157 = G__15169;
i__15154_15158 = G__15170;
continue;
}
} else
{var child_15171 = cljs.core.first.call(null,seq__15151_15165__$1);__GT_document_fragment.call(null,result_frag,child_15171);
{
var G__15172 = cljs.core.next.call(null,seq__15151_15165__$1);
var G__15173 = null;
var G__15174 = 0;
var G__15175 = 0;
seq__15151_15155 = G__15172;
chunk__15152_15156 = G__15173;
count__15153_15157 = G__15174;
i__15154_15158 = G__15175;
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
dommy.template.__GT_node_like = (function __GT_node_like(data){if((function (){var G__15177 = data;if(G__15177)
{var bit__4053__auto__ = null;if(cljs.core.truth_((function (){var or__3403__auto__ = bit__4053__auto__;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return G__15177.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__15177.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__15177);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__15177);
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
dommy.template.compound_element = (function compound_element(p__15178){var vec__15198 = p__15178;var tag_name = cljs.core.nth.call(null,vec__15198,0,null);var maybe_attrs = cljs.core.nth.call(null,vec__15198,1,null);var children = cljs.core.nthnext.call(null,vec__15198,2);var n = dommy.template.base_element.call(null,tag_name);var attrs = (((cljs.core.map_QMARK_.call(null,maybe_attrs)) && (!((function (){var G__15200 = maybe_attrs;if(G__15200)
{var bit__4053__auto__ = null;if(cljs.core.truth_((function (){var or__3403__auto__ = bit__4053__auto__;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return G__15200.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__15200.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__15200);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__15200);
}
})())))?maybe_attrs:null);var children__$1 = (cljs.core.truth_(attrs)?children:cljs.core.cons.call(null,maybe_attrs,children));var seq__15201_15217 = cljs.core.seq.call(null,attrs);var chunk__15202_15218 = null;var count__15203_15219 = 0;var i__15204_15220 = 0;while(true){
if((i__15204_15220 < count__15203_15219))
{var vec__15205_15221 = cljs.core._nth.call(null,chunk__15202_15218,i__15204_15220);var k_15222 = cljs.core.nth.call(null,vec__15205_15221,0,null);var v_15223 = cljs.core.nth.call(null,vec__15205_15221,1,null);var G__15206_15224 = k_15222;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__15206_15224))
{var seq__15207_15225 = cljs.core.seq.call(null,v_15223);var chunk__15208_15226 = null;var count__15209_15227 = 0;var i__15210_15228 = 0;while(true){
if((i__15210_15228 < count__15209_15227))
{var c_15229 = cljs.core._nth.call(null,chunk__15208_15226,i__15210_15228);dommy.attrs.add_class_BANG_.call(null,n,c_15229);
{
var G__15230 = seq__15207_15225;
var G__15231 = chunk__15208_15226;
var G__15232 = count__15209_15227;
var G__15233 = (i__15210_15228 + 1);
seq__15207_15225 = G__15230;
chunk__15208_15226 = G__15231;
count__15209_15227 = G__15232;
i__15210_15228 = G__15233;
continue;
}
} else
{var temp__4092__auto___15234 = cljs.core.seq.call(null,seq__15207_15225);if(temp__4092__auto___15234)
{var seq__15207_15235__$1 = temp__4092__auto___15234;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15207_15235__$1))
{var c__4151__auto___15236 = cljs.core.chunk_first.call(null,seq__15207_15235__$1);{
var G__15237 = cljs.core.chunk_rest.call(null,seq__15207_15235__$1);
var G__15238 = c__4151__auto___15236;
var G__15239 = cljs.core.count.call(null,c__4151__auto___15236);
var G__15240 = 0;
seq__15207_15225 = G__15237;
chunk__15208_15226 = G__15238;
count__15209_15227 = G__15239;
i__15210_15228 = G__15240;
continue;
}
} else
{var c_15241 = cljs.core.first.call(null,seq__15207_15235__$1);dommy.attrs.add_class_BANG_.call(null,n,c_15241);
{
var G__15242 = cljs.core.next.call(null,seq__15207_15235__$1);
var G__15243 = null;
var G__15244 = 0;
var G__15245 = 0;
seq__15207_15225 = G__15242;
chunk__15208_15226 = G__15243;
count__15209_15227 = G__15244;
i__15210_15228 = G__15245;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__15206_15224))
{dommy.attrs.add_class_BANG_.call(null,n,v_15223);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_15222,v_15223);
} else
{}
}
}
{
var G__15246 = seq__15201_15217;
var G__15247 = chunk__15202_15218;
var G__15248 = count__15203_15219;
var G__15249 = (i__15204_15220 + 1);
seq__15201_15217 = G__15246;
chunk__15202_15218 = G__15247;
count__15203_15219 = G__15248;
i__15204_15220 = G__15249;
continue;
}
} else
{var temp__4092__auto___15250 = cljs.core.seq.call(null,seq__15201_15217);if(temp__4092__auto___15250)
{var seq__15201_15251__$1 = temp__4092__auto___15250;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15201_15251__$1))
{var c__4151__auto___15252 = cljs.core.chunk_first.call(null,seq__15201_15251__$1);{
var G__15253 = cljs.core.chunk_rest.call(null,seq__15201_15251__$1);
var G__15254 = c__4151__auto___15252;
var G__15255 = cljs.core.count.call(null,c__4151__auto___15252);
var G__15256 = 0;
seq__15201_15217 = G__15253;
chunk__15202_15218 = G__15254;
count__15203_15219 = G__15255;
i__15204_15220 = G__15256;
continue;
}
} else
{var vec__15211_15257 = cljs.core.first.call(null,seq__15201_15251__$1);var k_15258 = cljs.core.nth.call(null,vec__15211_15257,0,null);var v_15259 = cljs.core.nth.call(null,vec__15211_15257,1,null);var G__15212_15260 = k_15258;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"classes","classes",1867525016),G__15212_15260))
{var seq__15213_15261 = cljs.core.seq.call(null,v_15259);var chunk__15214_15262 = null;var count__15215_15263 = 0;var i__15216_15264 = 0;while(true){
if((i__15216_15264 < count__15215_15263))
{var c_15265 = cljs.core._nth.call(null,chunk__15214_15262,i__15216_15264);dommy.attrs.add_class_BANG_.call(null,n,c_15265);
{
var G__15266 = seq__15213_15261;
var G__15267 = chunk__15214_15262;
var G__15268 = count__15215_15263;
var G__15269 = (i__15216_15264 + 1);
seq__15213_15261 = G__15266;
chunk__15214_15262 = G__15267;
count__15215_15263 = G__15268;
i__15216_15264 = G__15269;
continue;
}
} else
{var temp__4092__auto___15270__$1 = cljs.core.seq.call(null,seq__15213_15261);if(temp__4092__auto___15270__$1)
{var seq__15213_15271__$1 = temp__4092__auto___15270__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15213_15271__$1))
{var c__4151__auto___15272 = cljs.core.chunk_first.call(null,seq__15213_15271__$1);{
var G__15273 = cljs.core.chunk_rest.call(null,seq__15213_15271__$1);
var G__15274 = c__4151__auto___15272;
var G__15275 = cljs.core.count.call(null,c__4151__auto___15272);
var G__15276 = 0;
seq__15213_15261 = G__15273;
chunk__15214_15262 = G__15274;
count__15215_15263 = G__15275;
i__15216_15264 = G__15276;
continue;
}
} else
{var c_15277 = cljs.core.first.call(null,seq__15213_15271__$1);dommy.attrs.add_class_BANG_.call(null,n,c_15277);
{
var G__15278 = cljs.core.next.call(null,seq__15213_15271__$1);
var G__15279 = null;
var G__15280 = 0;
var G__15281 = 0;
seq__15213_15261 = G__15278;
chunk__15214_15262 = G__15279;
count__15215_15263 = G__15280;
i__15216_15264 = G__15281;
continue;
}
}
} else
{}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__15212_15260))
{dommy.attrs.add_class_BANG_.call(null,n,v_15259);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{dommy.attrs.set_attr_BANG_.call(null,n,k_15258,v_15259);
} else
{}
}
}
{
var G__15282 = cljs.core.next.call(null,seq__15201_15251__$1);
var G__15283 = null;
var G__15284 = 0;
var G__15285 = 0;
seq__15201_15217 = G__15282;
chunk__15202_15218 = G__15283;
count__15203_15219 = G__15284;
i__15204_15220 = G__15285;
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
}catch (e15286){if((e15286 instanceof ReferenceError))
{var __15287 = e15286;console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15286;
} else
{}
}
}dommy.template.node = (function node(data){if((function (){var G__15289 = data;if(G__15289)
{var bit__4053__auto__ = null;if(cljs.core.truth_((function (){var or__3403__auto__ = bit__4053__auto__;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return G__15289.dommy$template$PElement$;
}
})()))
{return true;
} else
{if((!G__15289.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__15289);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,dommy.template.PElement,G__15289);
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