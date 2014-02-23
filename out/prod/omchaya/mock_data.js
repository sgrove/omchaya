// Compiled by ClojureScript 0.0-2156
goog.provide('omchaya.mock_data');
goog.require('cljs.core');
goog.require('omchaya.utils');
goog.require('omchaya.utils');
omchaya.mock_data.user_emails = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sean@bushi.do","nb@bushi.do","sacha@bushi.do"], null);
/**
* @param {...*} var_args
*/
omchaya.mock_data.random_message = (function() { 
var random_message__delegate = function (channel_id,p__22050){var vec__22052 = p__22050;var at_now_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22052,0,null);var at = (cljs.core.truth_(at_now_QMARK_)?(new Date()):(function (){var x = (new Date());var x__$1 = x.getTime();var x__$2 = (x__$1 - cljs.core.rand_int((((1000 * 60) * 24) * 60)));var x__$3 = (new Date(x__$2));return x__$3;
})());return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$345,at,cljs.core.constant$keyword$346,cljs.core.rand_nth(omchaya.mock_data.user_emails),cljs.core.constant$keyword$347,cljs.core.rand_nth(new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, ["deployed with ruby on...?","ha, dat stuff works","Random content","Heh, :+1:","Wow, :exclamation:","@sgrove Ok, let's do this!","/queue http://mp3.tom7.org/t7es/2008/t7es_msiegler.mp3","/queue http://mp3.tom7.org/t7es/2008/t7es_goog.mp3","/queue http://mp3.tom7.org/t7es/2008/t7es_petrolatum.mp3","/queue http://mp3.tom7.org/t7es/2009/t7es-sans-pellegrino.mp3","/queue http://mp3.tom7.org/t7es/2008/t7es_rt2i.mp3","/queue http://mp3.tom7.org/t7es/2007/tom7=rutgers.mp3","/queue https://dl.dropboxusercontent.com/u/412963/11%20Charlotte.mp3","/queue https://dl.dropboxusercontent.com/u/412963/Golf%20Clap.mp3","/queue https://dl.dropboxusercontent.com/u/412963/cheer.mp3","/queue https://dl.dropboxusercontent.com/u/412963/Why%20This%20Kolaveri%20Di%20Full%20Song%20Promo%20Video%20in%20HD%20-%20.mp3","@sacha Be careful with that","Hey @nb - I got you something nice... (not really)"], null)),cljs.core.constant$keyword$348,channel_id], null);
};
var random_message = function (channel_id,var_args){
var p__22050 = null;if (arguments.length > 1) {
  p__22050 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return random_message__delegate.call(this,channel_id,p__22050);};
random_message.cljs$lang$maxFixedArity = 1;
random_message.cljs$lang$applyTo = (function (arglist__22053){
var channel_id = cljs.core.first(arglist__22053);
var p__22050 = cljs.core.rest(arglist__22053);
return random_message__delegate(channel_id,p__22050);
});
random_message.cljs$core$IFn$_invoke$arity$variadic = random_message__delegate;
return random_message;
})()
;
omchaya.mock_data.random_title = (function random_title(){return cljs.core.rand_nth(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Background","A dark place","\uD55C\uAD6D\uC5B4","Zork lovers","The War Room","Emotional Trance","8 out of 10 cats","Was it something I said?","Example"], null));
});
omchaya.mock_data.media = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$344,"/system/attachments/files/000/000/098/original/call-centre-woman.jpg?1392265218",cljs.core.constant$keyword$349,"call-centre-woman.jpg"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$344,"/system/attachments/files/000/000/098/original/design.pdf?1392265218",cljs.core.constant$keyword$349,"design.pdf"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$344,"/system/attachments/files/000/000/098/original/example.mp3?1392265218",cljs.core.constant$keyword$349,"example.mp3"], null)], null);
/**
* @param {...*} var_args
*/
omchaya.mock_data.random_channel = (function() { 
var random_channel__delegate = function (order,p__22054){var vec__22056 = p__22054;var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22056,0,null);var title__$1 = (function (){var or__3403__auto__ = title;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return omchaya.mock_data.random_title();
}
})();return cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$350,cljs.core.constant$keyword$351,cljs.core.constant$keyword$352,cljs.core.constant$keyword$353,cljs.core.constant$keyword$354,cljs.core.constant$keyword$355,cljs.core.constant$keyword$356,cljs.core.constant$keyword$357,cljs.core.constant$keyword$358],[new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$359,"https://dl.dropboxusercontent.com/u/412963/Why%20This%20Kolaveri%20Di%20Full%20Song%20Promo%20Video%20in%20HD%20-%20.mp3",cljs.core.constant$keyword$360,-1,cljs.core.constant$keyword$361,cljs.core.constant$keyword$364,cljs.core.constant$keyword$362,false,cljs.core.constant$keyword$363,cljs.core.PersistentVector.EMPTY], null),cljs.core.take((cljs.core.rand_int(cljs.core.count(omchaya.mock_data.user_emails)) + 1),cljs.core.shuffle(omchaya.mock_data.user_emails)),cljs.core.vec(cljs.core.take((cljs.core.rand_int(10) + 1),cljs.core.shuffle(omchaya.mock_data.media))),title__$1,cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$345,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((cljs.core.rand_int(10) + 1),(function (){return omchaya.mock_data.random_message(omchaya.utils.safe_sel(title__$1));
})))),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$359,null], null),order,omchaya.utils.safe_sel(title__$1),false]);
};
var random_channel = function (order,var_args){
var p__22054 = null;if (arguments.length > 1) {
  p__22054 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return random_channel__delegate.call(this,order,p__22054);};
random_channel.cljs$lang$maxFixedArity = 1;
random_channel.cljs$lang$applyTo = (function (arglist__22057){
var order = cljs.core.first(arglist__22057);
var p__22054 = cljs.core.rest(arglist__22057);
return random_channel__delegate(order,p__22054);
});
random_channel.cljs$core$IFn$_invoke$arity$variadic = random_channel__delegate;
return random_channel;
})()
;
omchaya.mock_data.initial_state = (function initial_state(comms){var channels = cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$357,cljs.core.identity),omchaya.mock_data.random_channel),cljs.core.range.cljs$core$IFn$_invoke$arity$2(2,100)));return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$365,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$371,100,cljs.core.constant$keyword$372,true], null),cljs.core.constant$keyword$366,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$373,50,cljs.core.constant$keyword$374,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$377,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$379,false], null),cljs.core.constant$keyword$378,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$379,false], null)], null),cljs.core.constant$keyword$375,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$380,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$381,false], null)], null),cljs.core.constant$keyword$376,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$382,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$381,false], null),cljs.core.constant$keyword$383,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$381,false], null)], null)], null),cljs.core.constant$keyword$367,"lobby",cljs.core.constant$keyword$368,(function (){var ch = channels;var ch__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ch,"lobby",omchaya.mock_data.random_channel.cljs$core$IFn$_invoke$arity$variadic(1,cljs.core.array_seq(["Lobby"], 0)));var ch__$2 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(ch__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["lobby"], null),cljs.core.assoc,cljs.core.constant$keyword$358,true);return ch__$2;
})(),cljs.core.constant$keyword$351,new cljs.core.PersistentArrayMap(null, 3, ["sean@bushi.do",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$384,"Sean Grove",cljs.core.constant$keyword$385,"sean@bushi.do",cljs.core.constant$keyword$386,"sgrove"], null),"nb@bushi.do",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$384,"Nathan Broadbent",cljs.core.constant$keyword$385,"nb@bushi.do",cljs.core.constant$keyword$386,"nb"], null),"sacha@bushi.do",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$384,"Sacha Greif",cljs.core.constant$keyword$385,"sacha@bushi.do",cljs.core.constant$keyword$386,"sacha"], null)], null),cljs.core.constant$keyword$369,"sean@bushi.do",cljs.core.constant$keyword$370,comms], null);
});
