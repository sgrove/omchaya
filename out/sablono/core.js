// Compiled by ClojureScript 0.0-2156
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__15576__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__15575 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__15575,0,null);var body = cljs.core.nthnext.call(null,vec__15575,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__15576 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__15576__delegate.call(this,args);};
G__15576.cljs$lang$maxFixedArity = 0;
G__15576.cljs$lang$applyTo = (function (arglist__15577){
var args = cljs.core.seq(arglist__15577);
return G__15576__delegate(args);
});
G__15576.cljs$core$IFn$_invoke$arity$variadic = G__15576__delegate;
return G__15576;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4120__auto__ = (function iter__15582(s__15583){return (new cljs.core.LazySeq(null,(function (){var s__15583__$1 = s__15583;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15583__$1);if(temp__4092__auto__)
{var s__15583__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15583__$2))
{var c__4118__auto__ = cljs.core.chunk_first.call(null,s__15583__$2);var size__4119__auto__ = cljs.core.count.call(null,c__4118__auto__);var b__15585 = cljs.core.chunk_buffer.call(null,size__4119__auto__);if((function (){var i__15584 = 0;while(true){
if((i__15584 < size__4119__auto__))
{var args = cljs.core._nth.call(null,c__4118__auto__,i__15584);cljs.core.chunk_append.call(null,b__15585,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__15586 = (i__15584 + 1);
i__15584 = G__15586;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15585),iter__15582.call(null,cljs.core.chunk_rest.call(null,s__15583__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15585),null);
}
} else
{var args = cljs.core.first.call(null,s__15583__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__15582.call(null,cljs.core.rest.call(null,s__15583__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4120__auto__.call(null,arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){var html = cljs.core.atom.call(null,null);React.renderComponentToString(component,(function (p1__15587_SHARP_){return cljs.core.reset_BANG_.call(null,html,p1__15587_SHARP_);
}));
return cljs.core.deref.call(null,html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4120__auto__ = (function iter__15592(s__15593){return (new cljs.core.LazySeq(null,(function (){var s__15593__$1 = s__15593;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15593__$1);if(temp__4092__auto__)
{var s__15593__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15593__$2))
{var c__4118__auto__ = cljs.core.chunk_first.call(null,s__15593__$2);var size__4119__auto__ = cljs.core.count.call(null,c__4118__auto__);var b__15595 = cljs.core.chunk_buffer.call(null,size__4119__auto__);if((function (){var i__15594 = 0;while(true){
if((i__15594 < size__4119__auto__))
{var style = cljs.core._nth.call(null,c__4118__auto__,i__15594);cljs.core.chunk_append.call(null,b__15595,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__15596 = (i__15594 + 1);
i__15594 = G__15596;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15595),iter__15592.call(null,cljs.core.chunk_rest.call(null,s__15593__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15595),null);
}
} else
{var style = cljs.core.first.call(null,s__15593__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__15592.call(null,cljs.core.rest.call(null,s__15593__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4120__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__15597){
var styles = cljs.core.seq(arglist__15597);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){return sablono.core.include_js.call(null,"http://fb.me/react-0.8.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to15598 = (function() { 
var link_to15598__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to15598 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to15598__delegate.call(this,url,content);};
link_to15598.cljs$lang$maxFixedArity = 1;
link_to15598.cljs$lang$applyTo = (function (arglist__15599){
var url = cljs.core.first(arglist__15599);
var content = cljs.core.rest(arglist__15599);
return link_to15598__delegate(url,content);
});
link_to15598.cljs$core$IFn$_invoke$arity$variadic = link_to15598__delegate;
return link_to15598;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to15598);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to15600 = (function() { 
var mail_to15600__delegate = function (e_mail,p__15601){var vec__15603 = p__15601;var content = cljs.core.nth.call(null,vec__15603,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3403__auto__ = content;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to15600 = function (e_mail,var_args){
var p__15601 = null;if (arguments.length > 1) {
  p__15601 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to15600__delegate.call(this,e_mail,p__15601);};
mail_to15600.cljs$lang$maxFixedArity = 1;
mail_to15600.cljs$lang$applyTo = (function (arglist__15604){
var e_mail = cljs.core.first(arglist__15604);
var p__15601 = cljs.core.rest(arglist__15604);
return mail_to15600__delegate(e_mail,p__15601);
});
mail_to15600.cljs$core$IFn$_invoke$arity$variadic = mail_to15600__delegate;
return mail_to15600;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to15600);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list15605 = (function unordered_list15605(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4120__auto__ = (function iter__15610(s__15611){return (new cljs.core.LazySeq(null,(function (){var s__15611__$1 = s__15611;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15611__$1);if(temp__4092__auto__)
{var s__15611__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15611__$2))
{var c__4118__auto__ = cljs.core.chunk_first.call(null,s__15611__$2);var size__4119__auto__ = cljs.core.count.call(null,c__4118__auto__);var b__15613 = cljs.core.chunk_buffer.call(null,size__4119__auto__);if((function (){var i__15612 = 0;while(true){
if((i__15612 < size__4119__auto__))
{var x = cljs.core._nth.call(null,c__4118__auto__,i__15612);cljs.core.chunk_append.call(null,b__15613,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__15614 = (i__15612 + 1);
i__15612 = G__15614;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15613),iter__15610.call(null,cljs.core.chunk_rest.call(null,s__15611__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15613),null);
}
} else
{var x = cljs.core.first.call(null,s__15611__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__15610.call(null,cljs.core.rest.call(null,s__15611__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4120__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list15605);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list15615 = (function ordered_list15615(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4120__auto__ = (function iter__15620(s__15621){return (new cljs.core.LazySeq(null,(function (){var s__15621__$1 = s__15621;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15621__$1);if(temp__4092__auto__)
{var s__15621__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15621__$2))
{var c__4118__auto__ = cljs.core.chunk_first.call(null,s__15621__$2);var size__4119__auto__ = cljs.core.count.call(null,c__4118__auto__);var b__15623 = cljs.core.chunk_buffer.call(null,size__4119__auto__);if((function (){var i__15622 = 0;while(true){
if((i__15622 < size__4119__auto__))
{var x = cljs.core._nth.call(null,c__4118__auto__,i__15622);cljs.core.chunk_append.call(null,b__15623,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__15624 = (i__15622 + 1);
i__15622 = G__15624;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15623),iter__15620.call(null,cljs.core.chunk_rest.call(null,s__15621__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15623),null);
}
} else
{var x = cljs.core.first.call(null,s__15621__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__15620.call(null,cljs.core.rest.call(null,s__15621__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4120__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list15615);
/**
* Create an image element.
*/
sablono.core.image15625 = (function() {
var image15625 = null;
var image15625__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image15625__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image15625 = function(src,alt){
switch(arguments.length){
case 1:
return image15625__1.call(this,src);
case 2:
return image15625__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image15625.cljs$core$IFn$_invoke$arity$1 = image15625__1;
image15625.cljs$core$IFn$_invoke$arity$2 = image15625__2;
return image15625;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image15625);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__15626_SHARP_,p2__15627_SHARP_){return [cljs.core.str(p1__15626_SHARP_),cljs.core.str("["),cljs.core.str(p2__15627_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__15628_SHARP_,p2__15629_SHARP_){return [cljs.core.str(p1__15628_SHARP_),cljs.core.str("-"),cljs.core.str(p2__15629_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field = (function input_field(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field15630 = (function() {
var hidden_field15630 = null;
var hidden_field15630__1 = (function (name){return hidden_field15630.call(null,name,null);
});
var hidden_field15630__2 = (function (name,value){return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field15630 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field15630__1.call(this,name);
case 2:
return hidden_field15630__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field15630.cljs$core$IFn$_invoke$arity$1 = hidden_field15630__1;
hidden_field15630.cljs$core$IFn$_invoke$arity$2 = hidden_field15630__2;
return hidden_field15630;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field15630);
/**
* Creates a new text input field.
*/
sablono.core.text_field15631 = (function() {
var text_field15631 = null;
var text_field15631__1 = (function (name){return text_field15631.call(null,name,null);
});
var text_field15631__2 = (function (name,value){return sablono.core.input_field.call(null,"text",name,value);
});
text_field15631 = function(name,value){
switch(arguments.length){
case 1:
return text_field15631__1.call(this,name);
case 2:
return text_field15631__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field15631.cljs$core$IFn$_invoke$arity$1 = text_field15631__1;
text_field15631.cljs$core$IFn$_invoke$arity$2 = text_field15631__2;
return text_field15631;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field15631);
/**
* Creates a new password field.
*/
sablono.core.password_field15632 = (function() {
var password_field15632 = null;
var password_field15632__1 = (function (name){return password_field15632.call(null,name,null);
});
var password_field15632__2 = (function (name,value){return sablono.core.input_field.call(null,"password",name,value);
});
password_field15632 = function(name,value){
switch(arguments.length){
case 1:
return password_field15632__1.call(this,name);
case 2:
return password_field15632__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field15632.cljs$core$IFn$_invoke$arity$1 = password_field15632__1;
password_field15632.cljs$core$IFn$_invoke$arity$2 = password_field15632__2;
return password_field15632;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field15632);
/**
* Creates a new email input field.
*/
sablono.core.email_field15633 = (function() {
var email_field15633 = null;
var email_field15633__1 = (function (name){return email_field15633.call(null,name,null);
});
var email_field15633__2 = (function (name,value){return sablono.core.input_field.call(null,"email",name,value);
});
email_field15633 = function(name,value){
switch(arguments.length){
case 1:
return email_field15633__1.call(this,name);
case 2:
return email_field15633__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field15633.cljs$core$IFn$_invoke$arity$1 = email_field15633__1;
email_field15633.cljs$core$IFn$_invoke$arity$2 = email_field15633__2;
return email_field15633;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field15633);
/**
* Creates a check box.
*/
sablono.core.check_box15634 = (function() {
var check_box15634 = null;
var check_box15634__1 = (function (name){return check_box15634.call(null,name,null);
});
var check_box15634__2 = (function (name,checked_QMARK_){return check_box15634.call(null,name,checked_QMARK_,"true");
});
var check_box15634__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box15634 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box15634__1.call(this,name);
case 2:
return check_box15634__2.call(this,name,checked_QMARK_);
case 3:
return check_box15634__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box15634.cljs$core$IFn$_invoke$arity$1 = check_box15634__1;
check_box15634.cljs$core$IFn$_invoke$arity$2 = check_box15634__2;
check_box15634.cljs$core$IFn$_invoke$arity$3 = check_box15634__3;
return check_box15634;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box15634);
/**
* Creates a radio button.
*/
sablono.core.radio_button15635 = (function() {
var radio_button15635 = null;
var radio_button15635__1 = (function (group){return radio_button15635.call(null,group,null);
});
var radio_button15635__2 = (function (group,checked_QMARK_){return radio_button15635.call(null,group,checked_QMARK_,"true");
});
var radio_button15635__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button15635 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button15635__1.call(this,group);
case 2:
return radio_button15635__2.call(this,group,checked_QMARK_);
case 3:
return radio_button15635__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button15635.cljs$core$IFn$_invoke$arity$1 = radio_button15635__1;
radio_button15635.cljs$core$IFn$_invoke$arity$2 = radio_button15635__2;
radio_button15635.cljs$core$IFn$_invoke$arity$3 = radio_button15635__3;
return radio_button15635;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button15635);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options15636 = (function() {
var select_options15636 = null;
var select_options15636__1 = (function (coll){return select_options15636.call(null,coll,null);
});
var select_options15636__2 = (function (coll,selected){var iter__4120__auto__ = (function iter__15645(s__15646){return (new cljs.core.LazySeq(null,(function (){var s__15646__$1 = s__15646;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15646__$1);if(temp__4092__auto__)
{var s__15646__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15646__$2))
{var c__4118__auto__ = cljs.core.chunk_first.call(null,s__15646__$2);var size__4119__auto__ = cljs.core.count.call(null,c__4118__auto__);var b__15648 = cljs.core.chunk_buffer.call(null,size__4119__auto__);if((function (){var i__15647 = 0;while(true){
if((i__15647 < size__4119__auto__))
{var x = cljs.core._nth.call(null,c__4118__auto__,i__15647);cljs.core.chunk_append.call(null,b__15648,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__15651 = x;var text = cljs.core.nth.call(null,vec__15651,0,null);var val = cljs.core.nth.call(null,vec__15651,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options15636.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__15653 = (i__15647 + 1);
i__15647 = G__15653;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15648),iter__15645.call(null,cljs.core.chunk_rest.call(null,s__15646__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15648),null);
}
} else
{var x = cljs.core.first.call(null,s__15646__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__15652 = x;var text = cljs.core.nth.call(null,vec__15652,0,null);var val = cljs.core.nth.call(null,vec__15652,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options15636.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__15645.call(null,cljs.core.rest.call(null,s__15646__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4120__auto__.call(null,coll);
});
select_options15636 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options15636__1.call(this,coll);
case 2:
return select_options15636__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options15636.cljs$core$IFn$_invoke$arity$1 = select_options15636__1;
select_options15636.cljs$core$IFn$_invoke$arity$2 = select_options15636__2;
return select_options15636;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options15636);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down15654 = (function() {
var drop_down15654 = null;
var drop_down15654__2 = (function (name,options){return drop_down15654.call(null,name,options,null);
});
var drop_down15654__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down15654 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down15654__2.call(this,name,options);
case 3:
return drop_down15654__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down15654.cljs$core$IFn$_invoke$arity$2 = drop_down15654__2;
drop_down15654.cljs$core$IFn$_invoke$arity$3 = drop_down15654__3;
return drop_down15654;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down15654);
/**
* Creates a text area element.
*/
sablono.core.text_area15655 = (function() {
var text_area15655 = null;
var text_area15655__1 = (function (name){return text_area15655.call(null,name,null);
});
var text_area15655__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
text_area15655 = function(name,value){
switch(arguments.length){
case 1:
return text_area15655__1.call(this,name);
case 2:
return text_area15655__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area15655.cljs$core$IFn$_invoke$arity$1 = text_area15655__1;
text_area15655.cljs$core$IFn$_invoke$arity$2 = text_area15655__2;
return text_area15655;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area15655);
/**
* Creates a file upload input.
*/
sablono.core.file_upload15656 = (function file_upload15656(name){return sablono.core.input_field.call(null,"file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload15656);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label15657 = (function label15657(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label15657);
/**
* Creates a submit button.
*/
sablono.core.submit_button15658 = (function submit_button15658(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button15658);
/**
* Creates a form reset button.
*/
sablono.core.reset_button15659 = (function reset_button15659(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button15659);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to15660 = (function() { 
var form_to15660__delegate = function (p__15661,body){var vec__15663 = p__15661;var method = cljs.core.nth.call(null,vec__15663,0,null);var action = cljs.core.nth.call(null,vec__15663,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to15660 = function (p__15661,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to15660__delegate.call(this,p__15661,body);};
form_to15660.cljs$lang$maxFixedArity = 1;
form_to15660.cljs$lang$applyTo = (function (arglist__15664){
var p__15661 = cljs.core.first(arglist__15664);
var body = cljs.core.rest(arglist__15664);
return form_to15660__delegate(p__15661,body);
});
form_to15660.cljs$core$IFn$_invoke$arity$variadic = form_to15660__delegate;
return form_to15660;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to15660);

//# sourceMappingURL=core.js.map