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
{if(dommy.attrs.class_match_QMARK_.call(null,class_name,class$,i))
{return i;
} else
{{
var G__16663 = (i + class$.length);
start_from = G__16663;
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
dommy.attrs.has_class_QMARK_ = (function has_class_QMARK_(elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto__ = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto__))
{var class_list = temp__4090__auto__;return class_list.contains(class$__$1);
} else
{var temp__4092__auto__ = elem__$1.className;if(cljs.core.truth_(temp__4092__auto__))
{var class_name = temp__4092__auto__;var temp__4092__auto____$1 = dommy.attrs.class_index.call(null,class_name,class$__$1);if(cljs.core.truth_(temp__4092__auto____$1))
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
var add_class_BANG___2 = (function (elem,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var classes__$1 = clojure.string.trim.call(null,cljs.core.name.call(null,classes));if(cljs.core.seq.call(null,classes__$1))
{var temp__4090__auto___16688 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___16688))
{var class_list_16689 = temp__4090__auto___16688;var seq__16676_16690 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__16677_16691 = null;var count__16678_16692 = 0;var i__16679_16693 = 0;while(true){
if((i__16679_16693 < count__16678_16692))
{var class_16694 = cljs.core._nth.call(null,chunk__16677_16691,i__16679_16693);class_list_16689.add(class_16694);
{
var G__16695 = seq__16676_16690;
var G__16696 = chunk__16677_16691;
var G__16697 = count__16678_16692;
var G__16698 = (i__16679_16693 + 1);
seq__16676_16690 = G__16695;
chunk__16677_16691 = G__16696;
count__16678_16692 = G__16697;
i__16679_16693 = G__16698;
continue;
}
} else
{var temp__4092__auto___16699 = cljs.core.seq.call(null,seq__16676_16690);if(temp__4092__auto___16699)
{var seq__16676_16700__$1 = temp__4092__auto___16699;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16676_16700__$1))
{var c__4151__auto___16701 = cljs.core.chunk_first.call(null,seq__16676_16700__$1);{
var G__16702 = cljs.core.chunk_rest.call(null,seq__16676_16700__$1);
var G__16703 = c__4151__auto___16701;
var G__16704 = cljs.core.count.call(null,c__4151__auto___16701);
var G__16705 = 0;
seq__16676_16690 = G__16702;
chunk__16677_16691 = G__16703;
count__16678_16692 = G__16704;
i__16679_16693 = G__16705;
continue;
}
} else
{var class_16706 = cljs.core.first.call(null,seq__16676_16700__$1);class_list_16689.add(class_16706);
{
var G__16707 = cljs.core.next.call(null,seq__16676_16700__$1);
var G__16708 = null;
var G__16709 = 0;
var G__16710 = 0;
seq__16676_16690 = G__16707;
chunk__16677_16691 = G__16708;
count__16678_16692 = G__16709;
i__16679_16693 = G__16710;
continue;
}
}
} else
{}
}
break;
}
} else
{var class_name_16711 = elem__$1.className;var seq__16680_16712 = cljs.core.seq.call(null,classes__$1.split(/\s+/));var chunk__16681_16713 = null;var count__16682_16714 = 0;var i__16683_16715 = 0;while(true){
if((i__16683_16715 < count__16682_16714))
{var class_16716 = cljs.core._nth.call(null,chunk__16681_16713,i__16683_16715);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_16711,class_16716)))
{} else
{elem__$1.className = (((class_name_16711 === ""))?class_16716:[cljs.core.str(class_name_16711),cljs.core.str(" "),cljs.core.str(class_16716)].join(''));
}
{
var G__16717 = seq__16680_16712;
var G__16718 = chunk__16681_16713;
var G__16719 = count__16682_16714;
var G__16720 = (i__16683_16715 + 1);
seq__16680_16712 = G__16717;
chunk__16681_16713 = G__16718;
count__16682_16714 = G__16719;
i__16683_16715 = G__16720;
continue;
}
} else
{var temp__4092__auto___16721 = cljs.core.seq.call(null,seq__16680_16712);if(temp__4092__auto___16721)
{var seq__16680_16722__$1 = temp__4092__auto___16721;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16680_16722__$1))
{var c__4151__auto___16723 = cljs.core.chunk_first.call(null,seq__16680_16722__$1);{
var G__16724 = cljs.core.chunk_rest.call(null,seq__16680_16722__$1);
var G__16725 = c__4151__auto___16723;
var G__16726 = cljs.core.count.call(null,c__4151__auto___16723);
var G__16727 = 0;
seq__16680_16712 = G__16724;
chunk__16681_16713 = G__16725;
count__16682_16714 = G__16726;
i__16683_16715 = G__16727;
continue;
}
} else
{var class_16728 = cljs.core.first.call(null,seq__16680_16722__$1);if(cljs.core.truth_(dommy.attrs.class_index.call(null,class_name_16711,class_16728)))
{} else
{elem__$1.className = (((class_name_16711 === ""))?class_16728:[cljs.core.str(class_name_16711),cljs.core.str(" "),cljs.core.str(class_16728)].join(''));
}
{
var G__16729 = cljs.core.next.call(null,seq__16680_16722__$1);
var G__16730 = null;
var G__16731 = 0;
var G__16732 = 0;
seq__16680_16712 = G__16729;
chunk__16681_16713 = G__16730;
count__16682_16714 = G__16731;
i__16683_16715 = G__16732;
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
var G__16733__delegate = function (elem,classes,more_classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__16684_16734 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__16685_16735 = null;var count__16686_16736 = 0;var i__16687_16737 = 0;while(true){
if((i__16687_16737 < count__16686_16736))
{var c_16738 = cljs.core._nth.call(null,chunk__16685_16735,i__16687_16737);add_class_BANG_.call(null,elem__$1,c_16738);
{
var G__16739 = seq__16684_16734;
var G__16740 = chunk__16685_16735;
var G__16741 = count__16686_16736;
var G__16742 = (i__16687_16737 + 1);
seq__16684_16734 = G__16739;
chunk__16685_16735 = G__16740;
count__16686_16736 = G__16741;
i__16687_16737 = G__16742;
continue;
}
} else
{var temp__4092__auto___16743 = cljs.core.seq.call(null,seq__16684_16734);if(temp__4092__auto___16743)
{var seq__16684_16744__$1 = temp__4092__auto___16743;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16684_16744__$1))
{var c__4151__auto___16745 = cljs.core.chunk_first.call(null,seq__16684_16744__$1);{
var G__16746 = cljs.core.chunk_rest.call(null,seq__16684_16744__$1);
var G__16747 = c__4151__auto___16745;
var G__16748 = cljs.core.count.call(null,c__4151__auto___16745);
var G__16749 = 0;
seq__16684_16734 = G__16746;
chunk__16685_16735 = G__16747;
count__16686_16736 = G__16748;
i__16687_16737 = G__16749;
continue;
}
} else
{var c_16750 = cljs.core.first.call(null,seq__16684_16744__$1);add_class_BANG_.call(null,elem__$1,c_16750);
{
var G__16751 = cljs.core.next.call(null,seq__16684_16744__$1);
var G__16752 = null;
var G__16753 = 0;
var G__16754 = 0;
seq__16684_16734 = G__16751;
chunk__16685_16735 = G__16752;
count__16686_16736 = G__16753;
i__16687_16737 = G__16754;
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
var G__16733 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16733__delegate.call(this,elem,classes,more_classes);};
G__16733.cljs$lang$maxFixedArity = 2;
G__16733.cljs$lang$applyTo = (function (arglist__16755){
var elem = cljs.core.first(arglist__16755);
arglist__16755 = cljs.core.next(arglist__16755);
var classes = cljs.core.first(arglist__16755);
var more_classes = cljs.core.rest(arglist__16755);
return G__16733__delegate(elem,classes,more_classes);
});
G__16733.cljs$core$IFn$_invoke$arity$variadic = G__16733__delegate;
return G__16733;
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
var class_len = class_name.length;var temp__4090__auto__ = dommy.attrs.class_index.call(null,class_name,class$);if(cljs.core.truth_(temp__4090__auto__))
{var i = temp__4090__auto__;{
var G__16756 = (function (){var end = (i + class$.length);return [cljs.core.str((((end < class_len))?[cljs.core.str(class_name.substring(0,i)),cljs.core.str(class_name.substr((end + 1)))].join(''):class_name.substring(0,(i - 1))))].join('');
})();
class_name = G__16756;
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
var remove_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___16765 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___16765))
{var class_list_16766 = temp__4090__auto___16765;class_list_16766.remove(class$__$1);
} else
{var class_name_16767 = elem__$1.className;var new_class_name_16768 = dommy.attrs.remove_class_str.call(null,class_name_16767,class$__$1);if((class_name_16767 === new_class_name_16768))
{} else
{elem__$1.className = new_class_name_16768;
}
}
return elem__$1;
});
var remove_class_BANG___3 = (function() { 
var G__16769__delegate = function (elem,class$,classes){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__16761 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__16762 = null;var count__16763 = 0;var i__16764 = 0;while(true){
if((i__16764 < count__16763))
{var c = cljs.core._nth.call(null,chunk__16762,i__16764);remove_class_BANG_.call(null,elem__$1,c);
{
var G__16770 = seq__16761;
var G__16771 = chunk__16762;
var G__16772 = count__16763;
var G__16773 = (i__16764 + 1);
seq__16761 = G__16770;
chunk__16762 = G__16771;
count__16763 = G__16772;
i__16764 = G__16773;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16761);if(temp__4092__auto__)
{var seq__16761__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16761__$1))
{var c__4151__auto__ = cljs.core.chunk_first.call(null,seq__16761__$1);{
var G__16774 = cljs.core.chunk_rest.call(null,seq__16761__$1);
var G__16775 = c__4151__auto__;
var G__16776 = cljs.core.count.call(null,c__4151__auto__);
var G__16777 = 0;
seq__16761 = G__16774;
chunk__16762 = G__16775;
count__16763 = G__16776;
i__16764 = G__16777;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__16761__$1);remove_class_BANG_.call(null,elem__$1,c);
{
var G__16778 = cljs.core.next.call(null,seq__16761__$1);
var G__16779 = null;
var G__16780 = 0;
var G__16781 = 0;
seq__16761 = G__16778;
chunk__16762 = G__16779;
count__16763 = G__16780;
i__16764 = G__16781;
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
var G__16769 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16769__delegate.call(this,elem,class$,classes);};
G__16769.cljs$lang$maxFixedArity = 2;
G__16769.cljs$lang$applyTo = (function (arglist__16782){
var elem = cljs.core.first(arglist__16782);
arglist__16782 = cljs.core.next(arglist__16782);
var class$ = cljs.core.first(arglist__16782);
var classes = cljs.core.rest(arglist__16782);
return G__16769__delegate(elem,class$,classes);
});
G__16769.cljs$core$IFn$_invoke$arity$variadic = G__16769__delegate;
return G__16769;
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
var toggle_class_BANG___2 = (function (elem,class$){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var class$__$1 = cljs.core.name.call(null,class$);var temp__4090__auto___16783 = elem__$1.classList;if(cljs.core.truth_(temp__4090__auto___16783))
{var class_list_16784 = temp__4090__auto___16783;class_list_16784.toggle(class$__$1);
} else
{toggle_class_BANG_.call(null,elem__$1,class$__$1,!(dommy.attrs.has_class_QMARK_.call(null,elem__$1,class$__$1)));
}
return elem__$1;
});
var toggle_class_BANG___3 = (function (elem,class$,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(add_QMARK_)
{dommy.attrs.add_class_BANG_.call(null,elem__$1,class$);
} else
{dommy.attrs.remove_class_BANG_.call(null,elem__$1,class$);
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
{return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p__16787){var vec__16788 = p__16787;var k = cljs.core.nth.call(null,vec__16788,0,null);var v = cljs.core.nth.call(null,vec__16788,1,null);return [cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(":"),cljs.core.str(cljs.core.name.call(null,v)),cljs.core.str(";")].join('');
}),x));
}
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var style = elem__$1.style;var seq__16795_16801 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__16796_16802 = null;var count__16797_16803 = 0;var i__16798_16804 = 0;while(true){
if((i__16798_16804 < count__16797_16803))
{var vec__16799_16805 = cljs.core._nth.call(null,chunk__16796_16802,i__16798_16804);var k_16806 = cljs.core.nth.call(null,vec__16799_16805,0,null);var v_16807 = cljs.core.nth.call(null,vec__16799_16805,1,null);(style[cljs.core.name.call(null,k_16806)] = v_16807);
{
var G__16808 = seq__16795_16801;
var G__16809 = chunk__16796_16802;
var G__16810 = count__16797_16803;
var G__16811 = (i__16798_16804 + 1);
seq__16795_16801 = G__16808;
chunk__16796_16802 = G__16809;
count__16797_16803 = G__16810;
i__16798_16804 = G__16811;
continue;
}
} else
{var temp__4092__auto___16812 = cljs.core.seq.call(null,seq__16795_16801);if(temp__4092__auto___16812)
{var seq__16795_16813__$1 = temp__4092__auto___16812;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16795_16813__$1))
{var c__4151__auto___16814 = cljs.core.chunk_first.call(null,seq__16795_16813__$1);{
var G__16815 = cljs.core.chunk_rest.call(null,seq__16795_16813__$1);
var G__16816 = c__4151__auto___16814;
var G__16817 = cljs.core.count.call(null,c__4151__auto___16814);
var G__16818 = 0;
seq__16795_16801 = G__16815;
chunk__16796_16802 = G__16816;
count__16797_16803 = G__16817;
i__16798_16804 = G__16818;
continue;
}
} else
{var vec__16800_16819 = cljs.core.first.call(null,seq__16795_16813__$1);var k_16820 = cljs.core.nth.call(null,vec__16800_16819,0,null);var v_16821 = cljs.core.nth.call(null,vec__16800_16819,1,null);(style[cljs.core.name.call(null,k_16820)] = v_16821);
{
var G__16822 = cljs.core.next.call(null,seq__16795_16813__$1);
var G__16823 = null;
var G__16824 = 0;
var G__16825 = 0;
seq__16795_16801 = G__16822;
chunk__16796_16802 = G__16823;
count__16797_16803 = G__16824;
i__16798_16804 = G__16825;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__16826){
var elem = cljs.core.first(arglist__16826);
var kvs = cljs.core.rest(arglist__16826);
return set_style_BANG___delegate(elem,kvs);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
dommy.attrs.style = (function style(elem,k){if(cljs.core.truth_(k))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"k","k",-1640531420,null)))].join('')));
}
return (window.getComputedStyle(dommy.template.__GT_node_like.call(null,elem))[cljs.core.name.call(null,k)]);
});
/**
* @param {...*} var_args
*/
dommy.attrs.set_px_BANG_ = (function() { 
var set_px_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__16833_16839 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,kvs));var chunk__16834_16840 = null;var count__16835_16841 = 0;var i__16836_16842 = 0;while(true){
if((i__16836_16842 < count__16835_16841))
{var vec__16837_16843 = cljs.core._nth.call(null,chunk__16834_16840,i__16836_16842);var k_16844 = cljs.core.nth.call(null,vec__16837_16843,0,null);var v_16845 = cljs.core.nth.call(null,vec__16837_16843,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_16844,[cljs.core.str(v_16845),cljs.core.str("px")].join(''));
{
var G__16846 = seq__16833_16839;
var G__16847 = chunk__16834_16840;
var G__16848 = count__16835_16841;
var G__16849 = (i__16836_16842 + 1);
seq__16833_16839 = G__16846;
chunk__16834_16840 = G__16847;
count__16835_16841 = G__16848;
i__16836_16842 = G__16849;
continue;
}
} else
{var temp__4092__auto___16850 = cljs.core.seq.call(null,seq__16833_16839);if(temp__4092__auto___16850)
{var seq__16833_16851__$1 = temp__4092__auto___16850;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16833_16851__$1))
{var c__4151__auto___16852 = cljs.core.chunk_first.call(null,seq__16833_16851__$1);{
var G__16853 = cljs.core.chunk_rest.call(null,seq__16833_16851__$1);
var G__16854 = c__4151__auto___16852;
var G__16855 = cljs.core.count.call(null,c__4151__auto___16852);
var G__16856 = 0;
seq__16833_16839 = G__16853;
chunk__16834_16840 = G__16854;
count__16835_16841 = G__16855;
i__16836_16842 = G__16856;
continue;
}
} else
{var vec__16838_16857 = cljs.core.first.call(null,seq__16833_16851__$1);var k_16858 = cljs.core.nth.call(null,vec__16838_16857,0,null);var v_16859 = cljs.core.nth.call(null,vec__16838_16857,1,null);dommy.attrs.set_style_BANG_.call(null,elem__$1,k_16858,[cljs.core.str(v_16859),cljs.core.str("px")].join(''));
{
var G__16860 = cljs.core.next.call(null,seq__16833_16851__$1);
var G__16861 = null;
var G__16862 = 0;
var G__16863 = 0;
seq__16833_16839 = G__16860;
chunk__16834_16840 = G__16861;
count__16835_16841 = G__16862;
i__16836_16842 = G__16863;
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
set_px_BANG_.cljs$lang$applyTo = (function (arglist__16864){
var elem = cljs.core.first(arglist__16864);
var kvs = cljs.core.rest(arglist__16864);
return set_px_BANG___delegate(elem,kvs);
});
set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_px_BANG___delegate;
return set_px_BANG_;
})()
;
dommy.attrs.px = (function px(elem,k){var pixels = dommy.attrs.style.call(null,dommy.template.__GT_node_like.call(null,elem),k);if(cljs.core.seq.call(null,pixels))
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
var set_attr_BANG___2 = (function (elem,k){return set_attr_BANG_.call(null,dommy.template.__GT_node_like.call(null,elem),k,"true");
});
var set_attr_BANG___3 = (function (elem,k,v){if(cljs.core.truth_(v))
{if(cljs.core.fn_QMARK_.call(null,v))
{var G__16873 = dommy.template.__GT_node_like.call(null,elem);(G__16873[cljs.core.name.call(null,k)] = v);
return G__16873;
} else
{var G__16874 = dommy.template.__GT_node_like.call(null,elem);G__16874.setAttribute(cljs.core.name.call(null,k),(((k === new cljs.core.Keyword(null,"style","style",1123684643)))?dommy.attrs.style_str.call(null,v):v));
return G__16874;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__16881__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__16875_16882 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,2,kvs)));var chunk__16876_16883 = null;var count__16877_16884 = 0;var i__16878_16885 = 0;while(true){
if((i__16878_16885 < count__16877_16884))
{var vec__16879_16886 = cljs.core._nth.call(null,chunk__16876_16883,i__16878_16885);var k_16887__$1 = cljs.core.nth.call(null,vec__16879_16886,0,null);var v_16888__$1 = cljs.core.nth.call(null,vec__16879_16886,1,null);set_attr_BANG_.call(null,elem__$1,k_16887__$1,v_16888__$1);
{
var G__16889 = seq__16875_16882;
var G__16890 = chunk__16876_16883;
var G__16891 = count__16877_16884;
var G__16892 = (i__16878_16885 + 1);
seq__16875_16882 = G__16889;
chunk__16876_16883 = G__16890;
count__16877_16884 = G__16891;
i__16878_16885 = G__16892;
continue;
}
} else
{var temp__4092__auto___16893 = cljs.core.seq.call(null,seq__16875_16882);if(temp__4092__auto___16893)
{var seq__16875_16894__$1 = temp__4092__auto___16893;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16875_16894__$1))
{var c__4151__auto___16895 = cljs.core.chunk_first.call(null,seq__16875_16894__$1);{
var G__16896 = cljs.core.chunk_rest.call(null,seq__16875_16894__$1);
var G__16897 = c__4151__auto___16895;
var G__16898 = cljs.core.count.call(null,c__4151__auto___16895);
var G__16899 = 0;
seq__16875_16882 = G__16896;
chunk__16876_16883 = G__16897;
count__16877_16884 = G__16898;
i__16878_16885 = G__16899;
continue;
}
} else
{var vec__16880_16900 = cljs.core.first.call(null,seq__16875_16894__$1);var k_16901__$1 = cljs.core.nth.call(null,vec__16880_16900,0,null);var v_16902__$1 = cljs.core.nth.call(null,vec__16880_16900,1,null);set_attr_BANG_.call(null,elem__$1,k_16901__$1,v_16902__$1);
{
var G__16903 = cljs.core.next.call(null,seq__16875_16894__$1);
var G__16904 = null;
var G__16905 = 0;
var G__16906 = 0;
seq__16875_16882 = G__16903;
chunk__16876_16883 = G__16904;
count__16877_16884 = G__16905;
i__16878_16885 = G__16906;
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
var G__16881 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__16881__delegate.call(this,elem,k,v,kvs);};
G__16881.cljs$lang$maxFixedArity = 3;
G__16881.cljs$lang$applyTo = (function (arglist__16907){
var elem = cljs.core.first(arglist__16907);
arglist__16907 = cljs.core.next(arglist__16907);
var k = cljs.core.first(arglist__16907);
arglist__16907 = cljs.core.next(arglist__16907);
var v = cljs.core.first(arglist__16907);
var kvs = cljs.core.rest(arglist__16907);
return G__16881__delegate(elem,k,v,kvs);
});
G__16881.cljs$core$IFn$_invoke$arity$variadic = G__16881__delegate;
return G__16881;
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
var remove_attr_BANG___2 = (function (elem,k){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),null,new cljs.core.Keyword(null,"classes","classes",1867525016),null], null), null).call(null,k)))
{elem__$1.className = "";
} else
{elem__$1.removeAttribute(cljs.core.name.call(null,k));
}
return elem__$1;
});
var remove_attr_BANG___3 = (function() { 
var G__16916__delegate = function (elem,k,ks){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var seq__16912_16917 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__16913_16918 = null;var count__16914_16919 = 0;var i__16915_16920 = 0;while(true){
if((i__16915_16920 < count__16914_16919))
{var k_16921__$1 = cljs.core._nth.call(null,chunk__16913_16918,i__16915_16920);remove_attr_BANG_.call(null,elem__$1,k_16921__$1);
{
var G__16922 = seq__16912_16917;
var G__16923 = chunk__16913_16918;
var G__16924 = count__16914_16919;
var G__16925 = (i__16915_16920 + 1);
seq__16912_16917 = G__16922;
chunk__16913_16918 = G__16923;
count__16914_16919 = G__16924;
i__16915_16920 = G__16925;
continue;
}
} else
{var temp__4092__auto___16926 = cljs.core.seq.call(null,seq__16912_16917);if(temp__4092__auto___16926)
{var seq__16912_16927__$1 = temp__4092__auto___16926;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16912_16927__$1))
{var c__4151__auto___16928 = cljs.core.chunk_first.call(null,seq__16912_16927__$1);{
var G__16929 = cljs.core.chunk_rest.call(null,seq__16912_16927__$1);
var G__16930 = c__4151__auto___16928;
var G__16931 = cljs.core.count.call(null,c__4151__auto___16928);
var G__16932 = 0;
seq__16912_16917 = G__16929;
chunk__16913_16918 = G__16930;
count__16914_16919 = G__16931;
i__16915_16920 = G__16932;
continue;
}
} else
{var k_16933__$1 = cljs.core.first.call(null,seq__16912_16927__$1);remove_attr_BANG_.call(null,elem__$1,k_16933__$1);
{
var G__16934 = cljs.core.next.call(null,seq__16912_16927__$1);
var G__16935 = null;
var G__16936 = 0;
var G__16937 = 0;
seq__16912_16917 = G__16934;
chunk__16913_16918 = G__16935;
count__16914_16919 = G__16936;
i__16915_16920 = G__16937;
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
var G__16916 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__16916__delegate.call(this,elem,k,ks);};
G__16916.cljs$lang$maxFixedArity = 2;
G__16916.cljs$lang$applyTo = (function (arglist__16938){
var elem = cljs.core.first(arglist__16938);
arglist__16938 = cljs.core.next(arglist__16938);
var k = cljs.core.first(arglist__16938);
var ks = cljs.core.rest(arglist__16938);
return G__16916__delegate(elem,k,ks);
});
G__16916.cljs$core$IFn$_invoke$arity$variadic = G__16916__delegate;
return G__16916;
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
{return dommy.template.__GT_node_like.call(null,elem).getAttribute(cljs.core.name.call(null,k));
} else
{return null;
}
});
dommy.attrs.toggle_attr_BANG_ = (function() {
var toggle_attr_BANG_ = null;
var toggle_attr_BANG___2 = (function (elem,k){return toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.attrs.attr.call(null,elem,k)));
});
var toggle_attr_BANG___3 = (function (elem,k,add_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);if(add_QMARK_)
{return dommy.attrs.set_attr_BANG_.call(null,elem__$1,k);
} else
{return dommy.attrs.remove_attr_BANG_.call(null,elem__$1,k);
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
dommy.attrs.hidden_QMARK_ = (function hidden_QMARK_(elem){return ("none" === dommy.template.__GT_node_like.call(null,elem).style.display);
});
/**
* Display or hide the given `elem`. Takes an optional boolean `show?`
* indicating whether to show or hide `elem`.
*/
dommy.attrs.toggle_BANG_ = (function() {
var toggle_BANG_ = null;
var toggle_BANG___1 = (function (elem){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);toggle_BANG_.call(null,elem__$1,dommy.attrs.hidden_QMARK_.call(null,elem__$1));
return elem__$1;
});
var toggle_BANG___2 = (function (elem,show_QMARK_){var G__16940 = dommy.template.__GT_node_like.call(null,elem);G__16940.style.display = ((show_QMARK_)?"":"none");
return G__16940;
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
dommy.attrs.hide_BANG_ = (function hide_BANG_(elem){var G__16942 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__16942,false);
return G__16942;
});
dommy.attrs.show_BANG_ = (function show_BANG_(elem){var G__16944 = dommy.template.__GT_node_like.call(null,elem);dommy.attrs.toggle_BANG_.call(null,G__16944,true);
return G__16944;
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.attrs.bounding_client_rect = (function bounding_client_rect(elem){return cljs.core.js__GT_clj.call(null,(function (){var G__16946 = dommy.template.__GT_node_like.call(null,elem).getBoundingClientRect();(G__16946["constructor"] = Object);
return G__16946;
})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
});
dommy.attrs.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var elem__$1 = dommy.template.__GT_node_like.call(null,elem);var top = new cljs.core.Keyword(null,"top","top",1014019271).cljs$core$IFn$_invoke$arity$1(dommy.attrs.bounding_client_rect.call(null,elem__$1));if((window.innerHeight < (top + elem__$1.offsetHeight)))
{return elem__$1.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});

//# sourceMappingURL=attrs.js.map