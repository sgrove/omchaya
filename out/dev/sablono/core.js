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
var G__16949__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__16948 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__16948,0,null);var body = cljs.core.nthnext.call(null,vec__16948,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__16949 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__16949__delegate.call(this,args);};
G__16949.cljs$lang$maxFixedArity = 0;
G__16949.cljs$lang$applyTo = (function (arglist__16950){
var args = cljs.core.seq(arglist__16950);
return G__16949__delegate(args);
});
G__16949.cljs$core$IFn$_invoke$arity$variadic = G__16949__delegate;
return G__16949;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4120__auto__ = (function iter__16955(s__16956){return (new cljs.core.LazySeq(null,(function (){var s__16956__$1 = s__16956;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16956__$1);if(temp__4092__auto__)
{var s__16956__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16956__$2))
{var c__4118__auto__ = cljs.core.chunk_first.call(null,s__16956__$2);var size__4119__auto__ = cljs.core.count.call(null,c__4118__auto__);var b__16958 = cljs.core.chunk_buffer.call(null,size__4119__auto__);if((function (){var i__16957 = 0;while(true){
if((i__16957 < size__4119__auto__))
{var args = cljs.core._nth.call(null,c__4118__auto__,i__16957);cljs.core.chunk_append.call(null,b__16958,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__16959 = (i__16957 + 1);
i__16957 = G__16959;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16958),iter__16955.call(null,cljs.core.chunk_rest.call(null,s__16956__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16958),null);
}
} else
{var args = cljs.core.first.call(null,s__16956__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__16955.call(null,cljs.core.rest.call(null,s__16956__$2)));
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
sablono.core.render = (function render(component){var html = cljs.core.atom.call(null,null);React.renderComponentToString(component,(function (p1__16960_SHARP_){return cljs.core.reset_BANG_.call(null,html,p1__16960_SHARP_);
}));
return cljs.core.deref.call(null,html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4120__auto__ = (function iter__16965(s__16966){return (new cljs.core.LazySeq(null,(function (){var s__16966__$1 = s__16966;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16966__$1);if(temp__4092__auto__)
{var s__16966__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16966__$2))
{var c__4118__auto__ = cljs.core.chunk_first.call(null,s__16966__$2);var size__4119__auto__ = cljs.core.count.call(null,c__4118__auto__);var b__16968 = cljs.core.chunk_buffer.call(null,size__4119__auto__);if((function (){var i__16967 = 0;while(true){
if((i__16967 < size__4119__auto__))
{var style = cljs.core._nth.call(null,c__4118__auto__,i__16967);cljs.core.chunk_append.call(null,b__16968,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__16969 = (i__16967 + 1);
i__16967 = G__16969;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16968),iter__16965.call(null,cljs.core.chunk_rest.call(null,s__16966__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16968),null);
}
} else
{var style = cljs.core.first.call(null,s__16966__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__16965.call(null,cljs.core.rest.call(null,s__16966__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__16970){
var styles = cljs.core.seq(arglist__16970);
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
sablono.core.link_to16971 = (function() { 
var link_to16971__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to16971 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to16971__delegate.call(this,url,content);};
link_to16971.cljs$lang$maxFixedArity = 1;
link_to16971.cljs$lang$applyTo = (function (arglist__16972){
var url = cljs.core.first(arglist__16972);
var content = cljs.core.rest(arglist__16972);
return link_to16971__delegate(url,content);
});
link_to16971.cljs$core$IFn$_invoke$arity$variadic = link_to16971__delegate;
return link_to16971;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to16971);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to16973 = (function() { 
var mail_to16973__delegate = function (e_mail,p__16974){var vec__16976 = p__16974;var content = cljs.core.nth.call(null,vec__16976,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3403__auto__ = content;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to16973 = function (e_mail,var_args){
var p__16974 = null;if (arguments.length > 1) {
  p__16974 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to16973__delegate.call(this,e_mail,p__16974);};
mail_to16973.cljs$lang$maxFixedArity = 1;
mail_to16973.cljs$lang$applyTo = (function (arglist__16977){
var e_mail = cljs.core.first(arglist__16977);
var p__16974 = cljs.core.rest(arglist__16977);
return mail_to16973__delegate(e_mail,p__16974);
});
mail_to16973.cljs$core$IFn$_invoke$arity$variadic = mail_to16973__delegate;
return mail_to16973;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to16973);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list16978 = (function unordered_list16978(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4120__auto__ = (function iter__16983(s__16984){return (new cljs.core.LazySeq(null,(function (){var s__16984__$1 = s__16984;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16984__$1);if(temp__4092__auto__)
{var s__16984__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16984__$2))
{var c__4118__auto__ = cljs.core.chunk_first.call(null,s__16984__$2);var size__4119__auto__ = cljs.core.count.call(null,c__4118__auto__);var b__16986 = cljs.core.chunk_buffer.call(null,size__4119__auto__);if((function (){var i__16985 = 0;while(true){
if((i__16985 < size__4119__auto__))
{var x = cljs.core._nth.call(null,c__4118__auto__,i__16985);cljs.core.chunk_append.call(null,b__16986,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__16987 = (i__16985 + 1);
i__16985 = G__16987;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16986),iter__16983.call(null,cljs.core.chunk_rest.call(null,s__16984__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16986),null);
}
} else
{var x = cljs.core.first.call(null,s__16984__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__16983.call(null,cljs.core.rest.call(null,s__16984__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list16978);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list16988 = (function ordered_list16988(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4120__auto__ = (function iter__16993(s__16994){return (new cljs.core.LazySeq(null,(function (){var s__16994__$1 = s__16994;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16994__$1);if(temp__4092__auto__)
{var s__16994__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16994__$2))
{var c__4118__auto__ = cljs.core.chunk_first.call(null,s__16994__$2);var size__4119__auto__ = cljs.core.count.call(null,c__4118__auto__);var b__16996 = cljs.core.chunk_buffer.call(null,size__4119__auto__);if((function (){var i__16995 = 0;while(true){
if((i__16995 < size__4119__auto__))
{var x = cljs.core._nth.call(null,c__4118__auto__,i__16995);cljs.core.chunk_append.call(null,b__16996,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__16997 = (i__16995 + 1);
i__16995 = G__16997;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16996),iter__16993.call(null,cljs.core.chunk_rest.call(null,s__16994__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16996),null);
}
} else
{var x = cljs.core.first.call(null,s__16994__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__16993.call(null,cljs.core.rest.call(null,s__16994__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list16988);
/**
* Create an image element.
*/
sablono.core.image16998 = (function() {
var image16998 = null;
var image16998__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image16998__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image16998 = function(src,alt){
switch(arguments.length){
case 1:
return image16998__1.call(this,src);
case 2:
return image16998__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image16998.cljs$core$IFn$_invoke$arity$1 = image16998__1;
image16998.cljs$core$IFn$_invoke$arity$2 = image16998__2;
return image16998;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image16998);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__16999_SHARP_,p2__17000_SHARP_){return [cljs.core.str(p1__16999_SHARP_),cljs.core.str("["),cljs.core.str(p2__17000_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__17001_SHARP_,p2__17002_SHARP_){return [cljs.core.str(p1__17001_SHARP_),cljs.core.str("-"),cljs.core.str(p2__17002_SHARP_)].join('');
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
sablono.core.hidden_field17003 = (function() {
var hidden_field17003 = null;
var hidden_field17003__1 = (function (name){return hidden_field17003.call(null,name,null);
});
var hidden_field17003__2 = (function (name,value){return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field17003 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field17003__1.call(this,name);
case 2:
return hidden_field17003__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field17003.cljs$core$IFn$_invoke$arity$1 = hidden_field17003__1;
hidden_field17003.cljs$core$IFn$_invoke$arity$2 = hidden_field17003__2;
return hidden_field17003;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field17003);
/**
* Creates a new text input field.
*/
sablono.core.text_field17004 = (function() {
var text_field17004 = null;
var text_field17004__1 = (function (name){return text_field17004.call(null,name,null);
});
var text_field17004__2 = (function (name,value){return sablono.core.input_field.call(null,"text",name,value);
});
text_field17004 = function(name,value){
switch(arguments.length){
case 1:
return text_field17004__1.call(this,name);
case 2:
return text_field17004__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field17004.cljs$core$IFn$_invoke$arity$1 = text_field17004__1;
text_field17004.cljs$core$IFn$_invoke$arity$2 = text_field17004__2;
return text_field17004;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field17004);
/**
* Creates a new password field.
*/
sablono.core.password_field17005 = (function() {
var password_field17005 = null;
var password_field17005__1 = (function (name){return password_field17005.call(null,name,null);
});
var password_field17005__2 = (function (name,value){return sablono.core.input_field.call(null,"password",name,value);
});
password_field17005 = function(name,value){
switch(arguments.length){
case 1:
return password_field17005__1.call(this,name);
case 2:
return password_field17005__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field17005.cljs$core$IFn$_invoke$arity$1 = password_field17005__1;
password_field17005.cljs$core$IFn$_invoke$arity$2 = password_field17005__2;
return password_field17005;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field17005);
/**
* Creates a new email input field.
*/
sablono.core.email_field17006 = (function() {
var email_field17006 = null;
var email_field17006__1 = (function (name){return email_field17006.call(null,name,null);
});
var email_field17006__2 = (function (name,value){return sablono.core.input_field.call(null,"email",name,value);
});
email_field17006 = function(name,value){
switch(arguments.length){
case 1:
return email_field17006__1.call(this,name);
case 2:
return email_field17006__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field17006.cljs$core$IFn$_invoke$arity$1 = email_field17006__1;
email_field17006.cljs$core$IFn$_invoke$arity$2 = email_field17006__2;
return email_field17006;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field17006);
/**
* Creates a check box.
*/
sablono.core.check_box17007 = (function() {
var check_box17007 = null;
var check_box17007__1 = (function (name){return check_box17007.call(null,name,null);
});
var check_box17007__2 = (function (name,checked_QMARK_){return check_box17007.call(null,name,checked_QMARK_,"true");
});
var check_box17007__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box17007 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box17007__1.call(this,name);
case 2:
return check_box17007__2.call(this,name,checked_QMARK_);
case 3:
return check_box17007__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box17007.cljs$core$IFn$_invoke$arity$1 = check_box17007__1;
check_box17007.cljs$core$IFn$_invoke$arity$2 = check_box17007__2;
check_box17007.cljs$core$IFn$_invoke$arity$3 = check_box17007__3;
return check_box17007;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box17007);
/**
* Creates a radio button.
*/
sablono.core.radio_button17008 = (function() {
var radio_button17008 = null;
var radio_button17008__1 = (function (group){return radio_button17008.call(null,group,null);
});
var radio_button17008__2 = (function (group,checked_QMARK_){return radio_button17008.call(null,group,checked_QMARK_,"true");
});
var radio_button17008__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button17008 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button17008__1.call(this,group);
case 2:
return radio_button17008__2.call(this,group,checked_QMARK_);
case 3:
return radio_button17008__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button17008.cljs$core$IFn$_invoke$arity$1 = radio_button17008__1;
radio_button17008.cljs$core$IFn$_invoke$arity$2 = radio_button17008__2;
radio_button17008.cljs$core$IFn$_invoke$arity$3 = radio_button17008__3;
return radio_button17008;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button17008);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options17009 = (function() {
var select_options17009 = null;
var select_options17009__1 = (function (coll){return select_options17009.call(null,coll,null);
});
var select_options17009__2 = (function (coll,selected){var iter__4120__auto__ = (function iter__17018(s__17019){return (new cljs.core.LazySeq(null,(function (){var s__17019__$1 = s__17019;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__17019__$1);if(temp__4092__auto__)
{var s__17019__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17019__$2))
{var c__4118__auto__ = cljs.core.chunk_first.call(null,s__17019__$2);var size__4119__auto__ = cljs.core.count.call(null,c__4118__auto__);var b__17021 = cljs.core.chunk_buffer.call(null,size__4119__auto__);if((function (){var i__17020 = 0;while(true){
if((i__17020 < size__4119__auto__))
{var x = cljs.core._nth.call(null,c__4118__auto__,i__17020);cljs.core.chunk_append.call(null,b__17021,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17024 = x;var text = cljs.core.nth.call(null,vec__17024,0,null);var val = cljs.core.nth.call(null,vec__17024,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options17009.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__17026 = (i__17020 + 1);
i__17020 = G__17026;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17021),iter__17018.call(null,cljs.core.chunk_rest.call(null,s__17019__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17021),null);
}
} else
{var x = cljs.core.first.call(null,s__17019__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17025 = x;var text = cljs.core.nth.call(null,vec__17025,0,null);var val = cljs.core.nth.call(null,vec__17025,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options17009.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__17018.call(null,cljs.core.rest.call(null,s__17019__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4120__auto__.call(null,coll);
});
select_options17009 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options17009__1.call(this,coll);
case 2:
return select_options17009__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options17009.cljs$core$IFn$_invoke$arity$1 = select_options17009__1;
select_options17009.cljs$core$IFn$_invoke$arity$2 = select_options17009__2;
return select_options17009;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options17009);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down17027 = (function() {
var drop_down17027 = null;
var drop_down17027__2 = (function (name,options){return drop_down17027.call(null,name,options,null);
});
var drop_down17027__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down17027 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down17027__2.call(this,name,options);
case 3:
return drop_down17027__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down17027.cljs$core$IFn$_invoke$arity$2 = drop_down17027__2;
drop_down17027.cljs$core$IFn$_invoke$arity$3 = drop_down17027__3;
return drop_down17027;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down17027);
/**
* Creates a text area element.
*/
sablono.core.text_area17028 = (function() {
var text_area17028 = null;
var text_area17028__1 = (function (name){return text_area17028.call(null,name,null);
});
var text_area17028__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
text_area17028 = function(name,value){
switch(arguments.length){
case 1:
return text_area17028__1.call(this,name);
case 2:
return text_area17028__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area17028.cljs$core$IFn$_invoke$arity$1 = text_area17028__1;
text_area17028.cljs$core$IFn$_invoke$arity$2 = text_area17028__2;
return text_area17028;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area17028);
/**
* Creates a file upload input.
*/
sablono.core.file_upload17029 = (function file_upload17029(name){return sablono.core.input_field.call(null,"file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload17029);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label17030 = (function label17030(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label17030);
/**
* Creates a submit button.
*/
sablono.core.submit_button17031 = (function submit_button17031(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button17031);
/**
* Creates a form reset button.
*/
sablono.core.reset_button17032 = (function reset_button17032(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button17032);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to17033 = (function() { 
var form_to17033__delegate = function (p__17034,body){var vec__17036 = p__17034;var method = cljs.core.nth.call(null,vec__17036,0,null);var action = cljs.core.nth.call(null,vec__17036,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to17033 = function (p__17034,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to17033__delegate.call(this,p__17034,body);};
form_to17033.cljs$lang$maxFixedArity = 1;
form_to17033.cljs$lang$applyTo = (function (arglist__17037){
var p__17034 = cljs.core.first(arglist__17037);
var body = cljs.core.rest(arglist__17037);
return form_to17033__delegate(p__17034,body);
});
form_to17033.cljs$core$IFn$_invoke$arity$variadic = form_to17033__delegate;
return form_to17033;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to17033);

//# sourceMappingURL=core.js.map