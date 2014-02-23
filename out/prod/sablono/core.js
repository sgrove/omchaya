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
var G__27248__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__27247 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27247,0,null);var body = cljs.core.nthnext(vec__27247,1);if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__27248 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__27248__delegate.call(this,args);};
G__27248.cljs$lang$maxFixedArity = 0;
G__27248.cljs$lang$applyTo = (function (arglist__27249){
var args = cljs.core.seq(arglist__27249);
return G__27248__delegate(args);
});
G__27248.cljs$core$IFn$_invoke$arity$variadic = G__27248__delegate;
return G__27248;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4120__auto__ = (function iter__27254(s__27255){return (new cljs.core.LazySeq(null,(function (){var s__27255__$1 = s__27255;while(true){
var temp__4092__auto__ = cljs.core.seq(s__27255__$1);if(temp__4092__auto__)
{var s__27255__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__27255__$2))
{var c__4118__auto__ = cljs.core.chunk_first(s__27255__$2);var size__4119__auto__ = cljs.core.count(c__4118__auto__);var b__27257 = cljs.core.chunk_buffer(size__4119__auto__);if((function (){var i__27256 = 0;while(true){
if((i__27256 < size__4119__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4118__auto__,i__27256);cljs.core.chunk_append(b__27257,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__27258 = (i__27256 + 1);
i__27256 = G__27258;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__27257),iter__27254(cljs.core.chunk_rest(s__27255__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__27257),null);
}
} else
{var args = cljs.core.first(s__27255__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__27254(cljs.core.rest(s__27255__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4120__auto__(arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){var html = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);React.renderComponentToString(component,(function (p1__27259_SHARP_){return cljs.core.reset_BANG_(html,p1__27259_SHARP_);
}));
return cljs.core.deref(html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4120__auto__ = (function iter__27264(s__27265){return (new cljs.core.LazySeq(null,(function (){var s__27265__$1 = s__27265;while(true){
var temp__4092__auto__ = cljs.core.seq(s__27265__$1);if(temp__4092__auto__)
{var s__27265__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__27265__$2))
{var c__4118__auto__ = cljs.core.chunk_first(s__27265__$2);var size__4119__auto__ = cljs.core.count(c__4118__auto__);var b__27267 = cljs.core.chunk_buffer(size__4119__auto__);if((function (){var i__27266 = 0;while(true){
if((i__27266 < size__4119__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4118__auto__,i__27266);cljs.core.chunk_append(b__27267,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$411,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$412,"text/css",cljs.core.constant$keyword$413,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$414,"stylesheet"], null)], null));
{
var G__27268 = (i__27266 + 1);
i__27266 = G__27268;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__27267),iter__27264(cljs.core.chunk_rest(s__27265__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__27267),null);
}
} else
{var style = cljs.core.first(s__27265__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$411,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$412,"text/css",cljs.core.constant$keyword$413,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$414,"stylesheet"], null)], null),iter__27264(cljs.core.rest(s__27265__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4120__auto__(styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__27269){
var styles = cljs.core.seq(arglist__27269);
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
sablono.core.include_react = (function include_react(){return sablono.core.include_js("http://fb.me/react-0.8.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to27270 = (function() { 
var link_to27270__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$415,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$413,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to27270 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to27270__delegate.call(this,url,content);};
link_to27270.cljs$lang$maxFixedArity = 1;
link_to27270.cljs$lang$applyTo = (function (arglist__27271){
var url = cljs.core.first(arglist__27271);
var content = cljs.core.rest(arglist__27271);
return link_to27270__delegate(url,content);
});
link_to27270.cljs$core$IFn$_invoke$arity$variadic = link_to27270__delegate;
return link_to27270;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to27270);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to27272 = (function() { 
var mail_to27272__delegate = function (e_mail,p__27273){var vec__27275 = p__27273;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27275,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$415,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$413,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3403__auto__ = content;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to27272 = function (e_mail,var_args){
var p__27273 = null;if (arguments.length > 1) {
  p__27273 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to27272__delegate.call(this,e_mail,p__27273);};
mail_to27272.cljs$lang$maxFixedArity = 1;
mail_to27272.cljs$lang$applyTo = (function (arglist__27276){
var e_mail = cljs.core.first(arglist__27276);
var p__27273 = cljs.core.rest(arglist__27276);
return mail_to27272__delegate(e_mail,p__27273);
});
mail_to27272.cljs$core$IFn$_invoke$arity$variadic = mail_to27272__delegate;
return mail_to27272;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to27272);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list27277 = (function unordered_list27277(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$416,(function (){var iter__4120__auto__ = (function iter__27282(s__27283){return (new cljs.core.LazySeq(null,(function (){var s__27283__$1 = s__27283;while(true){
var temp__4092__auto__ = cljs.core.seq(s__27283__$1);if(temp__4092__auto__)
{var s__27283__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__27283__$2))
{var c__4118__auto__ = cljs.core.chunk_first(s__27283__$2);var size__4119__auto__ = cljs.core.count(c__4118__auto__);var b__27285 = cljs.core.chunk_buffer(size__4119__auto__);if((function (){var i__27284 = 0;while(true){
if((i__27284 < size__4119__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4118__auto__,i__27284);cljs.core.chunk_append(b__27285,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$417,x], null));
{
var G__27286 = (i__27284 + 1);
i__27284 = G__27286;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__27285),iter__27282(cljs.core.chunk_rest(s__27283__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__27285),null);
}
} else
{var x = cljs.core.first(s__27283__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$417,x], null),iter__27282(cljs.core.rest(s__27283__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4120__auto__(coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list27277);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list27287 = (function ordered_list27287(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$418,(function (){var iter__4120__auto__ = (function iter__27292(s__27293){return (new cljs.core.LazySeq(null,(function (){var s__27293__$1 = s__27293;while(true){
var temp__4092__auto__ = cljs.core.seq(s__27293__$1);if(temp__4092__auto__)
{var s__27293__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__27293__$2))
{var c__4118__auto__ = cljs.core.chunk_first(s__27293__$2);var size__4119__auto__ = cljs.core.count(c__4118__auto__);var b__27295 = cljs.core.chunk_buffer(size__4119__auto__);if((function (){var i__27294 = 0;while(true){
if((i__27294 < size__4119__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4118__auto__,i__27294);cljs.core.chunk_append(b__27295,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$417,x], null));
{
var G__27296 = (i__27294 + 1);
i__27294 = G__27296;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__27295),iter__27292(cljs.core.chunk_rest(s__27293__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__27295),null);
}
} else
{var x = cljs.core.first(s__27293__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$417,x], null),iter__27292(cljs.core.rest(s__27293__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4120__auto__(coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list27287);
/**
* Create an image element.
*/
sablono.core.image27297 = (function() {
var image27297 = null;
var image27297__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$419,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$344,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image27297__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$419,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$344,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$420,alt], null)], null);
});
image27297 = function(src,alt){
switch(arguments.length){
case 1:
return image27297__1.call(this,src);
case 2:
return image27297__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image27297.cljs$core$IFn$_invoke$arity$1 = image27297__1;
image27297.cljs$core$IFn$_invoke$arity$2 = image27297__2;
return image27297;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image27297);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__27298_SHARP_,p2__27299_SHARP_){return [cljs.core.str(p1__27298_SHARP_),cljs.core.str("["),cljs.core.str(p2__27299_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__27300_SHARP_,p2__27301_SHARP_){return [cljs.core.str(p1__27300_SHARP_),cljs.core.str("-"),cljs.core.str(p2__27301_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field = (function input_field(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$410,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$412,type,cljs.core.constant$keyword$349,sablono.core.make_name(name),cljs.core.constant$keyword$357,sablono.core.make_id(name),cljs.core.constant$keyword$312,value], null)], null);
});
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field27302 = (function() {
var hidden_field27302 = null;
var hidden_field27302__1 = (function (name){return hidden_field27302.cljs$core$IFn$_invoke$arity$2(name,null);
});
var hidden_field27302__2 = (function (name,value){return sablono.core.input_field("hidden",name,value);
});
hidden_field27302 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field27302__1.call(this,name);
case 2:
return hidden_field27302__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field27302.cljs$core$IFn$_invoke$arity$1 = hidden_field27302__1;
hidden_field27302.cljs$core$IFn$_invoke$arity$2 = hidden_field27302__2;
return hidden_field27302;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field27302);
/**
* Creates a new text input field.
*/
sablono.core.text_field27303 = (function() {
var text_field27303 = null;
var text_field27303__1 = (function (name){return text_field27303.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_field27303__2 = (function (name,value){return sablono.core.input_field("text",name,value);
});
text_field27303 = function(name,value){
switch(arguments.length){
case 1:
return text_field27303__1.call(this,name);
case 2:
return text_field27303__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field27303.cljs$core$IFn$_invoke$arity$1 = text_field27303__1;
text_field27303.cljs$core$IFn$_invoke$arity$2 = text_field27303__2;
return text_field27303;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field27303);
/**
* Creates a new password field.
*/
sablono.core.password_field27304 = (function() {
var password_field27304 = null;
var password_field27304__1 = (function (name){return password_field27304.cljs$core$IFn$_invoke$arity$2(name,null);
});
var password_field27304__2 = (function (name,value){return sablono.core.input_field("password",name,value);
});
password_field27304 = function(name,value){
switch(arguments.length){
case 1:
return password_field27304__1.call(this,name);
case 2:
return password_field27304__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field27304.cljs$core$IFn$_invoke$arity$1 = password_field27304__1;
password_field27304.cljs$core$IFn$_invoke$arity$2 = password_field27304__2;
return password_field27304;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field27304);
/**
* Creates a new email input field.
*/
sablono.core.email_field27305 = (function() {
var email_field27305 = null;
var email_field27305__1 = (function (name){return email_field27305.cljs$core$IFn$_invoke$arity$2(name,null);
});
var email_field27305__2 = (function (name,value){return sablono.core.input_field("email",name,value);
});
email_field27305 = function(name,value){
switch(arguments.length){
case 1:
return email_field27305__1.call(this,name);
case 2:
return email_field27305__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field27305.cljs$core$IFn$_invoke$arity$1 = email_field27305__1;
email_field27305.cljs$core$IFn$_invoke$arity$2 = email_field27305__2;
return email_field27305;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field27305);
/**
* Creates a check box.
*/
sablono.core.check_box27306 = (function() {
var check_box27306 = null;
var check_box27306__1 = (function (name){return check_box27306.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box27306__2 = (function (name,checked_QMARK_){return check_box27306.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box27306__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$410,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$412,"checkbox",cljs.core.constant$keyword$349,sablono.core.make_name(name),cljs.core.constant$keyword$357,sablono.core.make_id(name),cljs.core.constant$keyword$312,value,cljs.core.constant$keyword$421,checked_QMARK_], null)], null);
});
check_box27306 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box27306__1.call(this,name);
case 2:
return check_box27306__2.call(this,name,checked_QMARK_);
case 3:
return check_box27306__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box27306.cljs$core$IFn$_invoke$arity$1 = check_box27306__1;
check_box27306.cljs$core$IFn$_invoke$arity$2 = check_box27306__2;
check_box27306.cljs$core$IFn$_invoke$arity$3 = check_box27306__3;
return check_box27306;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box27306);
/**
* Creates a radio button.
*/
sablono.core.radio_button27307 = (function() {
var radio_button27307 = null;
var radio_button27307__1 = (function (group){return radio_button27307.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button27307__2 = (function (group,checked_QMARK_){return radio_button27307.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button27307__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$410,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$412,"radio",cljs.core.constant$keyword$349,sablono.core.make_name(group),cljs.core.constant$keyword$357,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.constant$keyword$312,value,cljs.core.constant$keyword$421,checked_QMARK_], null)], null);
});
radio_button27307 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button27307__1.call(this,group);
case 2:
return radio_button27307__2.call(this,group,checked_QMARK_);
case 3:
return radio_button27307__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button27307.cljs$core$IFn$_invoke$arity$1 = radio_button27307__1;
radio_button27307.cljs$core$IFn$_invoke$arity$2 = radio_button27307__2;
radio_button27307.cljs$core$IFn$_invoke$arity$3 = radio_button27307__3;
return radio_button27307;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button27307);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options27308 = (function() {
var select_options27308 = null;
var select_options27308__1 = (function (coll){return select_options27308.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options27308__2 = (function (coll,selected){var iter__4120__auto__ = (function iter__27317(s__27318){return (new cljs.core.LazySeq(null,(function (){var s__27318__$1 = s__27318;while(true){
var temp__4092__auto__ = cljs.core.seq(s__27318__$1);if(temp__4092__auto__)
{var s__27318__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__27318__$2))
{var c__4118__auto__ = cljs.core.chunk_first(s__27318__$2);var size__4119__auto__ = cljs.core.count(c__4118__auto__);var b__27320 = cljs.core.chunk_buffer(size__4119__auto__);if((function (){var i__27319 = 0;while(true){
if((i__27319 < size__4119__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4118__auto__,i__27319);cljs.core.chunk_append(b__27320,((cljs.core.sequential_QMARK_(x))?(function (){var vec__27323 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27323,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27323,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$422,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$423,text], null),select_options27308.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$424,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$312,val,cljs.core.constant$keyword$358,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$424,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$358,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__27325 = (i__27319 + 1);
i__27319 = G__27325;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__27320),iter__27317(cljs.core.chunk_rest(s__27318__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__27320),null);
}
} else
{var x = cljs.core.first(s__27318__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__27324 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27324,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27324,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$422,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$423,text], null),select_options27308.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$424,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$312,val,cljs.core.constant$keyword$358,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$424,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$358,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__27317(cljs.core.rest(s__27318__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4120__auto__(coll);
});
select_options27308 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options27308__1.call(this,coll);
case 2:
return select_options27308__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options27308.cljs$core$IFn$_invoke$arity$1 = select_options27308__1;
select_options27308.cljs$core$IFn$_invoke$arity$2 = select_options27308__2;
return select_options27308;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options27308);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down27326 = (function() {
var drop_down27326 = null;
var drop_down27326__2 = (function (name,options){return drop_down27326.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down27326__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$425,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$349,sablono.core.make_name(name),cljs.core.constant$keyword$357,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});
drop_down27326 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down27326__2.call(this,name,options);
case 3:
return drop_down27326__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down27326.cljs$core$IFn$_invoke$arity$2 = drop_down27326__2;
drop_down27326.cljs$core$IFn$_invoke$arity$3 = drop_down27326__3;
return drop_down27326;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down27326);
/**
* Creates a text area element.
*/
sablono.core.text_area27327 = (function() {
var text_area27327 = null;
var text_area27327__1 = (function (name){return text_area27327.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area27327__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$409,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$349,sablono.core.make_name(name),cljs.core.constant$keyword$357,sablono.core.make_id(name),cljs.core.constant$keyword$312,value], null)], null);
});
text_area27327 = function(name,value){
switch(arguments.length){
case 1:
return text_area27327__1.call(this,name);
case 2:
return text_area27327__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area27327.cljs$core$IFn$_invoke$arity$1 = text_area27327__1;
text_area27327.cljs$core$IFn$_invoke$arity$2 = text_area27327__2;
return text_area27327;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area27327);
/**
* Creates a file upload input.
*/
sablono.core.file_upload27328 = (function file_upload27328(name){return sablono.core.input_field("file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs(sablono.core.file_upload27328);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label27329 = (function label27329(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$423,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$408,sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label27329);
/**
* Creates a submit button.
*/
sablono.core.submit_button27330 = (function submit_button27330(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$410,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$412,"submit",cljs.core.constant$keyword$312,text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button27330);
/**
* Creates a form reset button.
*/
sablono.core.reset_button27331 = (function reset_button27331(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$410,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$412,"reset",cljs.core.constant$keyword$312,text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button27331);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to27332 = (function() { 
var form_to27332__delegate = function (p__27333,body){var vec__27335 = p__27333;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27335,0,null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27335,1,null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$426,null,cljs.core.constant$keyword$427,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$428,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$429,method_str,cljs.core.constant$keyword$430,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$428,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$429,"POST",cljs.core.constant$keyword$430,action_uri], null),(sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2("_method",method_str) : sablono.core.hidden_field.call(null,"_method",method_str))], null)),body));
};
var form_to27332 = function (p__27333,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to27332__delegate.call(this,p__27333,body);};
form_to27332.cljs$lang$maxFixedArity = 1;
form_to27332.cljs$lang$applyTo = (function (arglist__27336){
var p__27333 = cljs.core.first(arglist__27336);
var body = cljs.core.rest(arglist__27336);
return form_to27332__delegate(p__27333,body);
});
form_to27332.cljs$core$IFn$_invoke$arity$variadic = form_to27332__delegate;
return form_to27332;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to27332);
