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
{if(dommy.attrs.class_match_QMARK_(class_name,class$,i))
{return i;
} else
{{
var G__26962 = (i + class$.length);
start_from = G__26962;
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
dommy.attrs.has_class_QMARK_ = (function has_class_QMARK_(elem,class$){var elem__$1 = dommy.template.__GT_node_like(elem);var class$__$1 = cljs.core.name(class$);var temp__4090__auto__ = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto__))
{var class_list = temp__4090__auto__;return class_list.contains(class$__$1);
} else
{var temp__4092__auto__ = elem__$1.className;if(cljs.core.truth_(temp__4092__auto__))
{var class_name = temp__4092__auto__;var temp__4092__auto____$1 = dommy.attrs.class_index(class_name,class$__$1);if(cljs.core.truth_(temp__4092__auto____$1))
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
var add_class_BANG___2 = (function (elem,classes){var elem__$1 = dommy.template.__GT_node_like(elem);var classes__$1 = clojure.string.trim(cljs.core.name(classes));if(cljs.core.seq(classes__$1))
{var temp__4090__auto___26987 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___26987))
{var class_list_26988 = temp__4090__auto___26987;var seq__26975_26989 = cljs.core.seq(classes__$1.split(/\s+/));var chunk__26976_26990 = null;var count__26977_26991 = 0;var i__26978_26992 = 0;while(true){
if((i__26978_26992 < count__26977_26991))
{var class_26993 = chunk__26976_26990.cljs$core$IIndexed$_nth$arity$2(null,i__26978_26992);class_list_26988.add(class_26993);
{
var G__26994 = seq__26975_26989;
var G__26995 = chunk__26976_26990;
var G__26996 = count__26977_26991;
var G__26997 = (i__26978_26992 + 1);
seq__26975_26989 = G__26994;
chunk__26976_26990 = G__26995;
count__26977_26991 = G__26996;
i__26978_26992 = G__26997;
continue;
}
} else
{var temp__4092__auto___26998 = cljs.core.seq(seq__26975_26989);if(temp__4092__auto___26998)
{var seq__26975_26999__$1 = temp__4092__auto___26998;if(cljs.core.chunked_seq_QMARK_(seq__26975_26999__$1))
{var c__4151__auto___27000 = cljs.core.chunk_first(seq__26975_26999__$1);{
var G__27001 = cljs.core.chunk_rest(seq__26975_26999__$1);
var G__27002 = c__4151__auto___27000;
var G__27003 = cljs.core.count(c__4151__auto___27000);
var G__27004 = 0;
seq__26975_26989 = G__27001;
chunk__26976_26990 = G__27002;
count__26977_26991 = G__27003;
i__26978_26992 = G__27004;
continue;
}
} else
{var class_27005 = cljs.core.first(seq__26975_26999__$1);class_list_26988.add(class_27005);
{
var G__27006 = cljs.core.next(seq__26975_26999__$1);
var G__27007 = null;
var G__27008 = 0;
var G__27009 = 0;
seq__26975_26989 = G__27006;
chunk__26976_26990 = G__27007;
count__26977_26991 = G__27008;
i__26978_26992 = G__27009;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_27010 = elem__$1.className;var seq__26979_27011 = cljs.core.seq(classes__$1.split(/\s+/));var chunk__26980_27012 = null;var count__26981_27013 = 0;var i__26982_27014 = 0;while(true){
if((i__26982_27014 < count__26981_27013))
{var class_27015 = chunk__26980_27012.cljs$core$IIndexed$_nth$arity$2(null,i__26982_27014);if(cljs.core.truth_(dommy.attrs.class_index(class_name_27010,class_27015)))
{} else
{elem__$1.className = (((class_name_27010 === ""))?class_27015:[cljs.core.str(class_name_27010),cljs.core.str(" "),cljs.core.str(class_27015)].join(''));
}
{
var G__27016 = seq__26979_27011;
var G__27017 = chunk__26980_27012;
var G__27018 = count__26981_27013;
var G__27019 = (i__26982_27014 + 1);
seq__26979_27011 = G__27016;
chunk__26980_27012 = G__27017;
count__26981_27013 = G__27018;
i__26982_27014 = G__27019;
continue;
}
} else
{var temp__4092__auto___27020 = cljs.core.seq(seq__26979_27011);if(temp__4092__auto___27020)
{var seq__26979_27021__$1 = temp__4092__auto___27020;if(cljs.core.chunked_seq_QMARK_(seq__26979_27021__$1))
{var c__4151__auto___27022 = cljs.core.chunk_first(seq__26979_27021__$1);{
var G__27023 = cljs.core.chunk_rest(seq__26979_27021__$1);
var G__27024 = c__4151__auto___27022;
var G__27025 = cljs.core.count(c__4151__auto___27022);
var G__27026 = 0;
seq__26979_27011 = G__27023;
chunk__26980_27012 = G__27024;
count__26981_27013 = G__27025;
i__26982_27014 = G__27026;
continue;
}
} else
{var class_27027 = cljs.core.first(seq__26979_27021__$1);if(cljs.core.truth_(dommy.attrs.class_index(class_name_27010,class_27027)))
{} else
{elem__$1.className = (((class_name_27010 === ""))?class_27027:[cljs.core.str(class_name_27010),cljs.core.str(" "),cljs.core.str(class_27027)].join(''));
}
{
var G__27028 = cljs.core.next(seq__26979_27021__$1);
var G__27029 = null;
var G__27030 = 0;
var G__27031 = 0;
seq__26979_27011 = G__27028;
chunk__26980_27012 = G__27029;
count__26981_27013 = G__27030;
i__26982_27014 = G__27031;
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
var G__27032__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like(elem);var seq__26983_27033 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));var chunk__26984_27034 = null;var count__26985_27035 = 0;var i__26986_27036 = 0;while(true){
if((i__26986_27036 < count__26985_27035))
{var c_27037 = chunk__26984_27034.cljs$core$IIndexed$_nth$arity$2(null,i__26986_27036);add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,c_27037);
{
var G__27038 = seq__26983_27033;
var G__27039 = chunk__26984_27034;
var G__27040 = count__26985_27035;
var G__27041 = (i__26986_27036 + 1);
seq__26983_27033 = G__27038;
chunk__26984_27034 = G__27039;
count__26985_27035 = G__27040;
i__26986_27036 = G__27041;
continue;
}
} else
{var temp__4092__auto___27042 = cljs.core.seq(seq__26983_27033);if(temp__4092__auto___27042)
{var seq__26983_27043__$1 = temp__4092__auto___27042;if(cljs.core.chunked_seq_QMARK_(seq__26983_27043__$1))
{var c__4151__auto___27044 = cljs.core.chunk_first(seq__26983_27043__$1);{
var G__27045 = cljs.core.chunk_rest(seq__26983_27043__$1);
var G__27046 = c__4151__auto___27044;
var G__27047 = cljs.core.count(c__4151__auto___27044);
var G__27048 = 0;
seq__26983_27033 = G__27045;
chunk__26984_27034 = G__27046;
count__26985_27035 = G__27047;
i__26986_27036 = G__27048;
continue;
}
} else
{var c_27049 = cljs.core.first(seq__26983_27043__$1);add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,c_27049);
{
var G__27050 = cljs.core.next(seq__26983_27043__$1);
var G__27051 = null;
var G__27052 = 0;
var G__27053 = 0;
seq__26983_27033 = G__27050;
chunk__26984_27034 = G__27051;
count__26985_27035 = G__27052;
i__26986_27036 = G__27053;
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
var G__27032 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__27032__delegate.call(this,elem,classes,more_classes);};
G__27032.cljs$lang$maxFixedArity = 2;
G__27032.cljs$lang$applyTo = (function (arglist__27054){
var elem = cljs.core.first(arglist__27054);
arglist__27054 = cljs.core.next(arglist__27054);
var classes = cljs.core.first(arglist__27054);
var more_classes = cljs.core.rest(arglist__27054);
return G__27032__delegate(elem,classes,more_classes);
});
G__27032.cljs$core$IFn$_invoke$arity$variadic = G__27032__delegate;
return G__27032;
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
var class_len = class_name.length;var temp__4090__auto__ = dommy.attrs.class_index(class_name,class$);if(cljs.core.truth_(temp__4090__auto__))
{var i = temp__4090__auto__;{
var G__27055 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__27055;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like(elem);var class$__$1 = cljs.core.name(class$);var temp__4090__auto___27064 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___27064))
{var class_list_27065 = temp__4090__auto___27064;class_list_27065.remove(class$__$1);
} else
{var class_name_27066 = elem__$1.className;var new_class_name_27067 = dommy.attrs.remove_class_str(class_name_27066,class$__$1);if((class_name_27066 === new_class_name_27067))
{} else
{elem__$1.className = new_class_name_27067;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__27068__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like(elem);var seq__27060 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));var chunk__27061 = null;var count__27062 = 0;var i__27063 = 0;while(true){
if((i__27063 < count__27062))
{var c = chunk__27061.cljs$core$IIndexed$_nth$arity$2(null,i__27063);remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,c);
{
var G__27069 = seq__27060;
var G__27070 = chunk__27061;
var G__27071 = count__27062;
var G__27072 = (i__27063 + 1);
seq__27060 = G__27069;
chunk__27061 = G__27070;
count__27062 = G__27071;
i__27063 = G__27072;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__27060);if(temp__4092__auto__)
{var seq__27060__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__27060__$1))
{var c__4151__auto__ = cljs.core.chunk_first(seq__27060__$1);{
var G__27073 = cljs.core.chunk_rest(seq__27060__$1);
var G__27074 = c__4151__auto__;
var G__27075 = cljs.core.count(c__4151__auto__);
var G__27076 = 0;
seq__27060 = G__27073;
chunk__27061 = G__27074;
count__27062 = G__27075;
i__27063 = G__27076;
continue;
}
} else
{var c = cljs.core.first(seq__27060__$1);remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,c);
{
var G__27077 = cljs.core.next(seq__27060__$1);
var G__27078 = null;
var G__27079 = 0;
var G__27080 = 0;
seq__27060 = G__27077;
chunk__27061 = G__27078;
count__27062 = G__27079;
i__27063 = G__27080;
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
var G__27068 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__27068__delegate.call(this,elem,class$,classes);};
G__27068.cljs$lang$maxFixedArity = 2;
G__27068.cljs$lang$applyTo = (function (arglist__27081){
var elem = cljs.core.first(arglist__27081);
arglist__27081 = cljs.core.next(arglist__27081);
var class$ = cljs.core.first(arglist__27081);
var classes = cljs.core.rest(arglist__27081);
return G__27068__delegate(elem,class$,classes);
});
G__27068.cljs$core$IFn$_invoke$arity$variadic = G__27068__delegate;
return G__27068;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like(elem);var class$__$1 = cljs.core.name(class$);var temp__4090__auto___27082 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___27082))
{var class_list_27083 = temp__4090__auto___27082;class_list_27083.toggle(class$__$1);
} else
{toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3(elem__$1,class$__$1,!(dommy.attrs.has_class_QMARK_(elem__$1,class$__$1)));
}
return elem__$1;
});
var toggle_class_BANG___3 = (function (elem,class$,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like(elem);if(add_QMARK_)
{dommy.attrs.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,class$);
} else
{dommy.attrs.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,class$);
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
{return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__27086){var vec__27087 = p__27086;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27087,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27087,1,null);return [cljs.core.str(cljs.core.name(k)),cljs.core.str(":"),cljs.core.str(cljs.core.name(v)),cljs.core.str(";")].join('');
}),x));
}
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_(cljs.core.count(kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))], 0)))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like(elem);var style = elem__$1.style;var seq__27094_27100 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,kvs));var chunk__27095_27101 = null;var count__27096_27102 = 0;var i__27097_27103 = 0;while(true){
if((i__27097_27103 < count__27096_27102))
{var vec__27098_27104 = chunk__27095_27101.cljs$core$IIndexed$_nth$arity$2(null,i__27097_27103);var k_27105 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27098_27104,0,null);var v_27106 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27098_27104,1,null);(style[cljs.core.name(k_27105)] = v_27106);
{
var G__27107 = seq__27094_27100;
var G__27108 = chunk__27095_27101;
var G__27109 = count__27096_27102;
var G__27110 = (i__27097_27103 + 1);
seq__27094_27100 = G__27107;
chunk__27095_27101 = G__27108;
count__27096_27102 = G__27109;
i__27097_27103 = G__27110;
continue;
}
} else
{var temp__4092__auto___27111 = cljs.core.seq(seq__27094_27100);if(temp__4092__auto___27111)
{var seq__27094_27112__$1 = temp__4092__auto___27111;if(cljs.core.chunked_seq_QMARK_(seq__27094_27112__$1))
{var c__4151__auto___27113 = cljs.core.chunk_first(seq__27094_27112__$1);{
var G__27114 = cljs.core.chunk_rest(seq__27094_27112__$1);
var G__27115 = c__4151__auto___27113;
var G__27116 = cljs.core.count(c__4151__auto___27113);
var G__27117 = 0;
seq__27094_27100 = G__27114;
chunk__27095_27101 = G__27115;
count__27096_27102 = G__27116;
i__27097_27103 = G__27117;
continue;
}
} else
{var vec__27099_27118 = cljs.core.first(seq__27094_27112__$1);var k_27119 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27099_27118,0,null);var v_27120 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27099_27118,1,null);(style[cljs.core.name(k_27119)] = v_27120);
{
var G__27121 = cljs.core.next(seq__27094_27112__$1);
var G__27122 = null;
var G__27123 = 0;
var G__27124 = 0;
seq__27094_27100 = G__27121;
chunk__27095_27101 = G__27122;
count__27096_27102 = G__27123;
i__27097_27103 = G__27124;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__27125){
var elem = cljs.core.first(arglist__27125);
var kvs = cljs.core.rest(arglist__27125);
return set_style_BANG___delegate(elem,kvs);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
dommy.attrs.style = (function style(elem,k){if(cljs.core.truth_(k))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"k","k",-1640531420,null)], 0)))].join('')));
}
return (window.getComputedStyle(dommy.template.__GT_node_like(elem))[cljs.core.name(k)]);
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_px_BANG_ = (function() { 
var set_px_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_(cljs.core.count(kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))], 0)))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like(elem);var seq__27132_27138 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,kvs));var chunk__27133_27139 = null;var count__27134_27140 = 0;var i__27135_27141 = 0;while(true){
if((i__27135_27141 < count__27134_27140))
{var vec__27136_27142 = chunk__27133_27139.cljs$core$IIndexed$_nth$arity$2(null,i__27135_27141);var k_27143 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27136_27142,0,null);var v_27144 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27136_27142,1,null);dommy.attrs.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem__$1,cljs.core.array_seq([k_27143,[cljs.core.str(v_27144),cljs.core.str("px")].join('')], 0));
{
var G__27145 = seq__27132_27138;
var G__27146 = chunk__27133_27139;
var G__27147 = count__27134_27140;
var G__27148 = (i__27135_27141 + 1);
seq__27132_27138 = G__27145;
chunk__27133_27139 = G__27146;
count__27134_27140 = G__27147;
i__27135_27141 = G__27148;
continue;
}
} else
{var temp__4092__auto___27149 = cljs.core.seq(seq__27132_27138);if(temp__4092__auto___27149)
{var seq__27132_27150__$1 = temp__4092__auto___27149;if(cljs.core.chunked_seq_QMARK_(seq__27132_27150__$1))
{var c__4151__auto___27151 = cljs.core.chunk_first(seq__27132_27150__$1);{
var G__27152 = cljs.core.chunk_rest(seq__27132_27150__$1);
var G__27153 = c__4151__auto___27151;
var G__27154 = cljs.core.count(c__4151__auto___27151);
var G__27155 = 0;
seq__27132_27138 = G__27152;
chunk__27133_27139 = G__27153;
count__27134_27140 = G__27154;
i__27135_27141 = G__27155;
continue;
}
} else
{var vec__27137_27156 = cljs.core.first(seq__27132_27150__$1);var k_27157 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27137_27156,0,null);var v_27158 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27137_27156,1,null);dommy.attrs.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem__$1,cljs.core.array_seq([k_27157,[cljs.core.str(v_27158),cljs.core.str("px")].join('')], 0));
{
var G__27159 = cljs.core.next(seq__27132_27150__$1);
var G__27160 = null;
var G__27161 = 0;
var G__27162 = 0;
seq__27132_27138 = G__27159;
chunk__27133_27139 = G__27160;
count__27134_27140 = G__27161;
i__27135_27141 = G__27162;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__27163){
var elem = cljs.core.first(arglist__27163);
var kvs = cljs.core.rest(arglist__27163);
return set_px_BANG___delegate(elem,kvs);
});
set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_px_BANG___delegate;
return set_px_BANG_;
})()
;
dommy.attrs.px = (function px(elem,k){var pixels = dommy.attrs.style(dommy.template.__GT_node_like(elem),k);if(cljs.core.seq(pixels))
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
var set_attr_BANG___2 = (function (elem,k){return set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(dommy.template.__GT_node_like(elem),k,"true");
});
var set_attr_BANG___3 = (function (elem,k,v){if(cljs.core.truth_(v))
{if(cljs.core.fn_QMARK_(v))
{var G__27172 = dommy.template.__GT_node_like(elem);(G__27172[cljs.core.name(k)] = v);
return G__27172;
} else
{var G__27173 = dommy.template.__GT_node_like(elem);G__27173.setAttribute(cljs.core.name(k),(((k === cljs.core.constant$keyword$332))?dommy.attrs.style_str(v):v));
return G__27173;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__27180__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_(cljs.core.count(kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))], 0)))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like(elem);var seq__27174_27181 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,kvs)));var chunk__27175_27182 = null;var count__27176_27183 = 0;var i__27177_27184 = 0;while(true){
if((i__27177_27184 < count__27176_27183))
{var vec__27178_27185 = chunk__27175_27182.cljs$core$IIndexed$_nth$arity$2(null,i__27177_27184);var k_27186__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27178_27185,0,null);var v_27187__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27178_27185,1,null);set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem__$1,k_27186__$1,v_27187__$1);
{
var G__27188 = seq__27174_27181;
var G__27189 = chunk__27175_27182;
var G__27190 = count__27176_27183;
var G__27191 = (i__27177_27184 + 1);
seq__27174_27181 = G__27188;
chunk__27175_27182 = G__27189;
count__27176_27183 = G__27190;
i__27177_27184 = G__27191;
continue;
}
} else
{var temp__4092__auto___27192 = cljs.core.seq(seq__27174_27181);if(temp__4092__auto___27192)
{var seq__27174_27193__$1 = temp__4092__auto___27192;if(cljs.core.chunked_seq_QMARK_(seq__27174_27193__$1))
{var c__4151__auto___27194 = cljs.core.chunk_first(seq__27174_27193__$1);{
var G__27195 = cljs.core.chunk_rest(seq__27174_27193__$1);
var G__27196 = c__4151__auto___27194;
var G__27197 = cljs.core.count(c__4151__auto___27194);
var G__27198 = 0;
seq__27174_27181 = G__27195;
chunk__27175_27182 = G__27196;
count__27176_27183 = G__27197;
i__27177_27184 = G__27198;
continue;
}
} else
{var vec__27179_27199 = cljs.core.first(seq__27174_27193__$1);var k_27200__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27179_27199,0,null);var v_27201__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27179_27199,1,null);set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem__$1,k_27200__$1,v_27201__$1);
{
var G__27202 = cljs.core.next(seq__27174_27193__$1);
var G__27203 = null;
var G__27204 = 0;
var G__27205 = 0;
seq__27174_27181 = G__27202;
chunk__27175_27182 = G__27203;
count__27176_27183 = G__27204;
i__27177_27184 = G__27205;
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
var G__27180 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__27180__delegate.call(this,elem,k,v,kvs);};
G__27180.cljs$lang$maxFixedArity = 3;
G__27180.cljs$lang$applyTo = (function (arglist__27206){
var elem = cljs.core.first(arglist__27206);
arglist__27206 = cljs.core.next(arglist__27206);
var k = cljs.core.first(arglist__27206);
arglist__27206 = cljs.core.next(arglist__27206);
var v = cljs.core.first(arglist__27206);
var kvs = cljs.core.rest(arglist__27206);
return G__27180__delegate(elem,k,v,kvs);
});
G__27180.cljs$core$IFn$_invoke$arity$variadic = G__27180__delegate;
return G__27180;
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
var remove_attr_BANG___2 = (function (elem,k){var elem__$1 = dommy.template.__GT_node_like(elem);if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$333,null,cljs.core.constant$keyword$334,null], null), null).call(null,k)))
{elem__$1.className = "";
} else
{elem__$1.removeAttribute(cljs.core.name(k));
}
return elem__$1;
});
var remove_attr_BANG___3 = (function() { 
var G__27215__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like(elem);var seq__27211_27216 = cljs.core.seq(cljs.core.cons(k,ks));var chunk__27212_27217 = null;var count__27213_27218 = 0;var i__27214_27219 = 0;while(true){
if((i__27214_27219 < count__27213_27218))
{var k_27220__$1 = chunk__27212_27217.cljs$core$IIndexed$_nth$arity$2(null,i__27214_27219);remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,k_27220__$1);
{
var G__27221 = seq__27211_27216;
var G__27222 = chunk__27212_27217;
var G__27223 = count__27213_27218;
var G__27224 = (i__27214_27219 + 1);
seq__27211_27216 = G__27221;
chunk__27212_27217 = G__27222;
count__27213_27218 = G__27223;
i__27214_27219 = G__27224;
continue;
}
} else
{var temp__4092__auto___27225 = cljs.core.seq(seq__27211_27216);if(temp__4092__auto___27225)
{var seq__27211_27226__$1 = temp__4092__auto___27225;if(cljs.core.chunked_seq_QMARK_(seq__27211_27226__$1))
{var c__4151__auto___27227 = cljs.core.chunk_first(seq__27211_27226__$1);{
var G__27228 = cljs.core.chunk_rest(seq__27211_27226__$1);
var G__27229 = c__4151__auto___27227;
var G__27230 = cljs.core.count(c__4151__auto___27227);
var G__27231 = 0;
seq__27211_27216 = G__27228;
chunk__27212_27217 = G__27229;
count__27213_27218 = G__27230;
i__27214_27219 = G__27231;
continue;
}
} else
{var k_27232__$1 = cljs.core.first(seq__27211_27226__$1);remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,k_27232__$1);
{
var G__27233 = cljs.core.next(seq__27211_27226__$1);
var G__27234 = null;
var G__27235 = 0;
var G__27236 = 0;
seq__27211_27216 = G__27233;
chunk__27212_27217 = G__27234;
count__27213_27218 = G__27235;
i__27214_27219 = G__27236;
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
var G__27215 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__27215__delegate.call(this,elem,k,ks);};
G__27215.cljs$lang$maxFixedArity = 2;
G__27215.cljs$lang$applyTo = (function (arglist__27237){
var elem = cljs.core.first(arglist__27237);
arglist__27237 = cljs.core.next(arglist__27237);
var k = cljs.core.first(arglist__27237);
var ks = cljs.core.rest(arglist__27237);
return G__27215__delegate(elem,k,ks);
});
G__27215.cljs$core$IFn$_invoke$arity$variadic = G__27215__delegate;
return G__27215;
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
{return dommy.template.__GT_node_like(elem).getAttribute(cljs.core.name(k));
} else
{return null;
}
});
dommy.attrs.toggle_attr_BANG_ = (function() {
var toggle_attr_BANG_ = null;
var toggle_attr_BANG___2 = (function (elem,k){return toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,cljs.core.boolean$(dommy.attrs.attr(elem,k)));
});
var toggle_attr_BANG___3 = (function (elem,k,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like(elem);if(add_QMARK_)
{return dommy.attrs.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,k);
} else
{return dommy.attrs.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,k);
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
dommy.attrs.hidden_QMARK_ = (function hidden_QMARK_(elem){return ("none" === dommy.template.__GT_node_like(elem).style.display);
});
/**
* Display or hide the given `elem`. Takes an optional boolean `show?`
* indicating whether to show or hide `elem`.
*/
dommy.attrs.toggle_BANG_ = (function() {
var toggle_BANG_ = null;
var toggle_BANG___1 = (function (elem){var elem__$1 = dommy.template.__GT_node_like(elem);toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem__$1,dommy.attrs.hidden_QMARK_(elem__$1));
return elem__$1;
});
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__27239 = dommy.template.__GT_node_like(elem);G__27239.style.display = ((show_QMARK_)?"":"none");
return G__27239;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__27241 = dommy.template.__GT_node_like(elem);dommy.attrs.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(G__27241,false);
return G__27241;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__27243 = dommy.template.__GT_node_like(elem);dommy.attrs.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(G__27243,true);
return G__27243;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic((function (){var G__27245 = dommy.template.__GT_node_like(elem).getBoundingClientRect();(G__27245["constructor"] = Object);
return G__27245;
})(),cljs.core.array_seq([cljs.core.constant$keyword$313,true], 0));
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like(elem);var top = cljs.core.constant$keyword$335.cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect(elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});
