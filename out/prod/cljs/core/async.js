// Compiled by ClojureScript 0.0-2156
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t23518 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23518 = (function (f,fn_handler,meta23519){
this.f = f;
this.fn_handler = fn_handler;
this.meta23519 = meta23519;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23518.cljs$lang$type = true;
cljs.core.async.t23518.cljs$lang$ctorStr = "cljs.core.async/t23518";
cljs.core.async.t23518.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write(writer__3971__auto__,"cljs.core.async/t23518");
});
cljs.core.async.t23518.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23518.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t23518.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t23518.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23520){var self__ = this;
var _23520__$1 = this;return self__.meta23519;
});
cljs.core.async.t23518.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23520,meta23519__$1){var self__ = this;
var _23520__$1 = this;return (new cljs.core.async.t23518(self__.f,self__.fn_handler,meta23519__$1));
});
cljs.core.async.__GT_t23518 = (function __GT_t23518(f__$1,fn_handler__$1,meta23519){return (new cljs.core.async.t23518(f__$1,fn_handler__$1,meta23519));
});
}
return (new cljs.core.async.t23518(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__23522 = buff;if(G__23522)
{var bit__4053__auto__ = null;if(cljs.core.truth_((function (){var or__3403__auto__ = bit__4053__auto__;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return G__23522.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__23522.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__23522);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__23522);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.cljs$core$IFn$_invoke$arity$1(null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout(msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler(fn1));if(cljs.core.truth_(ret))
{var val_23523 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_23523) : fn1.call(null,val_23523));
} else
{cljs.core.async.impl.dispatch.run((function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_23523) : fn1.call(null,val_23523));
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.cljs$core$IFn$_invoke$arity$3(port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn0));if(cljs.core.truth_((function (){var and__3391__auto__ = ret;if(cljs.core.truth_(and__3391__auto__))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(fn0,cljs.core.async.nop);
} else
{return and__3391__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{(fn0.cljs$core$IFn$_invoke$arity$0 ? fn0.cljs$core$IFn$_invoke$arity$0() : fn0.call(null));
} else
{cljs.core.async.impl.dispatch.run(fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4251__auto___23524 = n;var x_23525 = 0;while(true){
if((x_23525 < n__4251__auto___23524))
{(a[x_23525] = 0);
{
var G__23526 = (x_23525 + 1);
x_23525 = G__23526;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n))
{return a;
} else
{var j = cljs.core.rand_int(i);(a[i] = (a[j]));
(a[j] = i);
{
var G__23527 = (i + 1);
i = G__23527;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t23531 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23531 = (function (flag,alt_flag,meta23532){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta23532 = meta23532;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23531.cljs$lang$type = true;
cljs.core.async.t23531.cljs$lang$ctorStr = "cljs.core.async/t23531";
cljs.core.async.t23531.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write(writer__3971__auto__,"cljs.core.async/t23531");
});
cljs.core.async.t23531.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23531.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});
cljs.core.async.t23531.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});
cljs.core.async.t23531.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23533){var self__ = this;
var _23533__$1 = this;return self__.meta23532;
});
cljs.core.async.t23531.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23533,meta23532__$1){var self__ = this;
var _23533__$1 = this;return (new cljs.core.async.t23531(self__.flag,self__.alt_flag,meta23532__$1));
});
cljs.core.async.__GT_t23531 = (function __GT_t23531(flag__$1,alt_flag__$1,meta23532){return (new cljs.core.async.t23531(flag__$1,alt_flag__$1,meta23532));
});
}
return (new cljs.core.async.t23531(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t23537 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23537 = (function (cb,flag,alt_handler,meta23538){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta23538 = meta23538;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23537.cljs$lang$type = true;
cljs.core.async.t23537.cljs$lang$ctorStr = "cljs.core.async/t23537";
cljs.core.async.t23537.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write(writer__3971__auto__,"cljs.core.async/t23537");
});
cljs.core.async.t23537.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23537.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t23537.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t23537.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23539){var self__ = this;
var _23539__$1 = this;return self__.meta23538;
});
cljs.core.async.t23537.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23539,meta23538__$1){var self__ = this;
var _23539__$1 = this;return (new cljs.core.async.t23537(self__.cb,self__.flag,self__.alt_handler,meta23538__$1));
});
cljs.core.async.__GT_t23537 = (function __GT_t23537(cb__$1,flag__$1,alt_handler__$1,meta23538){return (new cljs.core.async.t23537(cb__$1,flag__$1,alt_handler__$1,meta23538));
});
}
return (new cljs.core.async.t23537(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = cljs.core.constant$keyword$324.cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(0) : port.call(null,0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(1) : port.call(null,1));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23540_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23540_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23540_SHARP_,port], null)));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__3403__auto__ = wport;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__23541 = (i + 1);
i = G__23541;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3403__auto__ = ret;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$308))
{var temp__4092__auto__ = (function (){var and__3391__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__3391__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__3391__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$308.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$308], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__23542){var map__23544 = p__23542;var map__23544__$1 = ((cljs.core.seq_QMARK_(map__23544))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23544):map__23544);var opts = map__23544__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__23542 = null;if (arguments.length > 1) {
  p__23542 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__23542);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__23545){
var ports = cljs.core.first(arglist__23545);
var p__23542 = cljs.core.rest(arglist__23545);
return alts_BANG___delegate(ports,p__23542);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t23553 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23553 = (function (ch,f,map_LT_,meta23554){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta23554 = meta23554;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23553.cljs$lang$type = true;
cljs.core.async.t23553.cljs$lang$ctorStr = "cljs.core.async/t23553";
cljs.core.async.t23553.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write(writer__3971__auto__,"cljs.core.async/t23553");
});
cljs.core.async.t23553.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23553.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t23553.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23553.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t23556 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23556 = (function (fn1,_,meta23554,ch,f,map_LT_,meta23557){
this.fn1 = fn1;
this._ = _;
this.meta23554 = meta23554;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta23557 = meta23557;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23556.cljs$lang$type = true;
cljs.core.async.t23556.cljs$lang$ctorStr = "cljs.core.async/t23556";
cljs.core.async.t23556.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write(writer__3971__auto__,"cljs.core.async/t23556");
});
cljs.core.async.t23556.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23556.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});
cljs.core.async.t23556.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});
cljs.core.async.t23556.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4){
return (function (p1__23546_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__23546_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__23546_SHARP_) : self__.f.call(null,p1__23546_SHARP_)))) : f1.call(null,(((p1__23546_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__23546_SHARP_) : self__.f.call(null,p1__23546_SHARP_)))));
});
;})(f1,___$4))
});
cljs.core.async.t23556.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23558){var self__ = this;
var _23558__$1 = this;return self__.meta23557;
});
cljs.core.async.t23556.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23558,meta23557__$1){var self__ = this;
var _23558__$1 = this;return (new cljs.core.async.t23556(self__.fn1,self__._,self__.meta23554,self__.ch,self__.f,self__.map_LT_,meta23557__$1));
});
cljs.core.async.__GT_t23556 = (function __GT_t23556(fn1__$1,___$2,meta23554__$1,ch__$2,f__$2,map_LT___$2,meta23557){return (new cljs.core.async.t23556(fn1__$1,___$2,meta23554__$1,ch__$2,f__$2,map_LT___$2,meta23557));
});
}
return (new cljs.core.async.t23556(fn1,___$1,self__.meta23554,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3391__auto__ = ret;if(cljs.core.truth_(and__3391__auto__))
{return !((cljs.core.deref(ret) == null));
} else
{return and__3391__auto__;
}
})()))
{return cljs.core.async.impl.channels.box((self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ret)) : self__.f.call(null,cljs.core.deref(ret))));
} else
{return ret;
}
});
cljs.core.async.t23553.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23553.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t23553.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23555){var self__ = this;
var _23555__$1 = this;return self__.meta23554;
});
cljs.core.async.t23553.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23555,meta23554__$1){var self__ = this;
var _23555__$1 = this;return (new cljs.core.async.t23553(self__.ch,self__.f,self__.map_LT_,meta23554__$1));
});
cljs.core.async.__GT_t23553 = (function __GT_t23553(ch__$1,f__$1,map_LT___$1,meta23554){return (new cljs.core.async.t23553(ch__$1,f__$1,map_LT___$1,meta23554));
});
}
return (new cljs.core.async.t23553(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t23562 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23562 = (function (ch,f,map_GT_,meta23563){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta23563 = meta23563;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23562.cljs$lang$type = true;
cljs.core.async.t23562.cljs$lang$ctorStr = "cljs.core.async/t23562";
cljs.core.async.t23562.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write(writer__3971__auto__,"cljs.core.async/t23562");
});
cljs.core.async.t23562.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23562.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t23562.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23562.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t23562.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23562.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t23562.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23564){var self__ = this;
var _23564__$1 = this;return self__.meta23563;
});
cljs.core.async.t23562.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23564,meta23563__$1){var self__ = this;
var _23564__$1 = this;return (new cljs.core.async.t23562(self__.ch,self__.f,self__.map_GT_,meta23563__$1));
});
cljs.core.async.__GT_t23562 = (function __GT_t23562(ch__$1,f__$1,map_GT___$1,meta23563){return (new cljs.core.async.t23562(ch__$1,f__$1,map_GT___$1,meta23563));
});
}
return (new cljs.core.async.t23562(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t23568 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23568 = (function (ch,p,filter_GT_,meta23569){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta23569 = meta23569;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23568.cljs$lang$type = true;
cljs.core.async.t23568.cljs$lang$ctorStr = "cljs.core.async/t23568";
cljs.core.async.t23568.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write(writer__3971__auto__,"cljs.core.async/t23568");
});
cljs.core.async.t23568.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23568.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t23568.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23568.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t23568.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23568.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t23568.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23570){var self__ = this;
var _23570__$1 = this;return self__.meta23569;
});
cljs.core.async.t23568.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23570,meta23569__$1){var self__ = this;
var _23570__$1 = this;return (new cljs.core.async.t23568(self__.ch,self__.p,self__.filter_GT_,meta23569__$1));
});
cljs.core.async.__GT_t23568 = (function __GT_t23568(ch__$1,p__$1,filter_GT___$1,meta23569){return (new cljs.core.async.t23568(ch__$1,p__$1,filter_GT___$1,meta23569));
});
}
return (new cljs.core.async.t23568(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5524__auto___23653 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_23632){var state_val_23633 = (state_23632[1]);if((state_val_23633 === 1))
{var state_23632__$1 = state_23632;var statearr_23634_23654 = state_23632__$1;(statearr_23634_23654[2] = null);
(statearr_23634_23654[1] = 2);
return cljs.core.constant$keyword$318;
} else
{if((state_val_23633 === 2))
{var state_23632__$1 = state_23632;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23632__$1,4,ch);
} else
{if((state_val_23633 === 3))
{var inst_23630 = (state_23632[2]);var state_23632__$1 = state_23632;return cljs.core.async.impl.ioc_helpers.return_chan(state_23632__$1,inst_23630);
} else
{if((state_val_23633 === 4))
{var inst_23614 = (state_23632[7]);var inst_23614__$1 = (state_23632[2]);var inst_23615 = (inst_23614__$1 == null);var state_23632__$1 = (function (){var statearr_23635 = state_23632;(statearr_23635[7] = inst_23614__$1);
return statearr_23635;
})();if(cljs.core.truth_(inst_23615))
{var statearr_23636_23655 = state_23632__$1;(statearr_23636_23655[1] = 5);
} else
{var statearr_23637_23656 = state_23632__$1;(statearr_23637_23656[1] = 6);
}
return cljs.core.constant$keyword$318;
} else
{if((state_val_23633 === 5))
{var inst_23617 = cljs.core.async.close_BANG_(out);var state_23632__$1 = state_23632;var statearr_23638_23657 = state_23632__$1;(statearr_23638_23657[2] = inst_23617);
(statearr_23638_23657[1] = 7);
return cljs.core.constant$keyword$318;
} else
{if((state_val_23633 === 6))
{var inst_23614 = (state_23632[7]);var inst_23619 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_23614) : p.call(null,inst_23614));var state_23632__$1 = state_23632;if(cljs.core.truth_(inst_23619))
{var statearr_23639_23658 = state_23632__$1;(statearr_23639_23658[1] = 8);
} else
{var statearr_23640_23659 = state_23632__$1;(statearr_23640_23659[1] = 9);
}
return cljs.core.constant$keyword$318;
} else
{if((state_val_23633 === 7))
{var inst_23628 = (state_23632[2]);var state_23632__$1 = state_23632;var statearr_23641_23660 = state_23632__$1;(statearr_23641_23660[2] = inst_23628);
(statearr_23641_23660[1] = 3);
return cljs.core.constant$keyword$318;
} else
{if((state_val_23633 === 8))
{var inst_23614 = (state_23632[7]);var state_23632__$1 = state_23632;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23632__$1,11,out,inst_23614);
} else
{if((state_val_23633 === 9))
{var state_23632__$1 = state_23632;var statearr_23642_23661 = state_23632__$1;(statearr_23642_23661[2] = null);
(statearr_23642_23661[1] = 10);
return cljs.core.constant$keyword$318;
} else
{if((state_val_23633 === 10))
{var inst_23625 = (state_23632[2]);var state_23632__$1 = (function (){var statearr_23643 = state_23632;(statearr_23643[8] = inst_23625);
return statearr_23643;
})();var statearr_23644_23662 = state_23632__$1;(statearr_23644_23662[2] = null);
(statearr_23644_23662[1] = 2);
return cljs.core.constant$keyword$318;
} else
{if((state_val_23633 === 11))
{var inst_23622 = (state_23632[2]);var state_23632__$1 = state_23632;var statearr_23645_23663 = state_23632__$1;(statearr_23645_23663[2] = inst_23622);
(statearr_23645_23663[1] = 10);
return cljs.core.constant$keyword$318;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_23649 = [null,null,null,null,null,null,null,null,null];(statearr_23649[0] = state_machine__5510__auto__);
(statearr_23649[1] = 1);
return statearr_23649;
});
var state_machine__5510__auto____1 = (function (state_23632){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__(state_23632);if(cljs.core.keyword_identical_QMARK_(result__5512__auto__,cljs.core.constant$keyword$318))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e23650){if((e23650 instanceof Object))
{var ex__5513__auto__ = e23650;var statearr_23651_23664 = state_23632;(statearr_23651_23664[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23632);
return cljs.core.constant$keyword$318;
} else
{if(cljs.core.constant$keyword$307)
{throw e23650;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5511__auto__,cljs.core.constant$keyword$318))
{{
var G__23665 = state_23632;
state_23632 = G__23665;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_23632){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_23632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_23652 = (f__5525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5525__auto__.cljs$core$IFn$_invoke$arity$0() : f__5525__auto__.call(null));(statearr_23652[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___23653);
return statearr_23652;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5526__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5524__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_23817){var state_val_23818 = (state_23817[1]);if((state_val_23818 === 1))
{var state_23817__$1 = state_23817;var statearr_23819_23856 = state_23817__$1;(statearr_23819_23856[2] = null);
(statearr_23819_23856[1] = 2);
return cljs.core.constant$keyword$318;
} else
{if((state_val_23818 === 2))
{var state_23817__$1 = state_23817;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23817__$1,4,in$);
} else
{if((state_val_23818 === 3))
{var inst_23815 = (state_23817[2]);var state_23817__$1 = state_23817;return cljs.core.async.impl.ioc_helpers.return_chan(state_23817__$1,inst_23815);
} else
{if((state_val_23818 === 4))
{var inst_23763 = (state_23817[7]);var inst_23763__$1 = (state_23817[2]);var inst_23764 = (inst_23763__$1 == null);var state_23817__$1 = (function (){var statearr_23820 = state_23817;(statearr_23820[7] = inst_23763__$1);
return statearr_23820;
})();if(cljs.core.truth_(inst_23764))
{var statearr_23821_23857 = state_23817__$1;(statearr_23821_23857[1] = 5);
} else
{var statearr_23822_23858 = state_23817__$1;(statearr_23822_23858[1] = 6);
}
return cljs.core.constant$keyword$318;
} else
{if((state_val_23818 === 5))
{var inst_23766 = cljs.core.async.close_BANG_(out);var state_23817__$1 = state_23817;var statearr_23823_23859 = state_23817__$1;(statearr_23823_23859[2] = inst_23766);
(statearr_23823_23859[1] = 7);
return cljs.core.constant$keyword$318;
} else
{if((state_val_23818 === 6))
{var inst_23763 = (state_23817[7]);var inst_23768 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_23763) : f.call(null,inst_23763));var inst_23773 = cljs.core.seq(inst_23768);var inst_23774 = inst_23773;var inst_23775 = null;var inst_23776 = 0;var inst_23777 = 0;var state_23817__$1 = (function (){var statearr_23824 = state_23817;(statearr_23824[8] = inst_23776);
(statearr_23824[9] = inst_23777);
(statearr_23824[10] = inst_23775);
(statearr_23824[11] = inst_23774);
return statearr_23824;
})();var statearr_23825_23860 = state_23817__$1;(statearr_23825_23860[2] = null);
(statearr_23825_23860[1] = 8);
return cljs.core.constant$keyword$318;
} else
{if((state_val_23818 === 7))
{var inst_23813 = (state_23817[2]);var state_23817__$1 = state_23817;var statearr_23826_23861 = state_23817__$1;(statearr_23826_23861[2] = inst_23813);
(statearr_23826_23861[1] = 3);
return cljs.core.constant$keyword$318;
} else
{if((state_val_23818 === 8))
{var inst_23776 = (state_23817[8]);var inst_23777 = (state_23817[9]);var inst_23779 = (inst_23777 < inst_23776);var inst_23780 = inst_23779;var state_23817__$1 = state_23817;if(cljs.core.truth_(inst_23780))
{var statearr_23827_23862 = state_23817__$1;(statearr_23827_23862[1] = 10);
} else
{var statearr_23828_23863 = state_23817__$1;(statearr_23828_23863[1] = 11);
}
return cljs.core.constant$keyword$318;
} else
{if((state_val_23818 === 9))
{var inst_23810 = (state_23817[2]);var state_23817__$1 = (function (){var statearr_23829 = state_23817;(statearr_23829[12] = inst_23810);
return statearr_23829;
})();var statearr_23830_23864 = state_23817__$1;(statearr_23830_23864[2] = null);
(statearr_23830_23864[1] = 2);
return cljs.core.constant$keyword$318;
} else
{if((state_val_23818 === 10))
{var inst_23777 = (state_23817[9]);var inst_23775 = (state_23817[10]);var inst_23782 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23775,inst_23777);var state_23817__$1 = state_23817;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23817__$1,13,out,inst_23782);
} else
{if((state_val_23818 === 11))
{var inst_23788 = (state_23817[13]);var inst_23774 = (state_23817[11]);var inst_23788__$1 = cljs.core.seq(inst_23774);var state_23817__$1 = (function (){var statearr_23834 = state_23817;(statearr_23834[13] = inst_23788__$1);
return statearr_23834;
})();if(inst_23788__$1)
{var statearr_23835_23865 = state_23817__$1;(statearr_23835_23865[1] = 14);
} else
{var statearr_23836_23866 = state_23817__$1;(statearr_23836_23866[1] = 15);
}
return cljs.core.constant$keyword$318;
} else
{if((state_val_23818 === 12))
{var inst_23808 = (state_23817[2]);var state_23817__$1 = state_23817;var statearr_23837_23867 = state_23817__$1;(statearr_23837_23867[2] = inst_23808);
(statearr_23837_23867[1] = 9);
return cljs.core.constant$keyword$318;
} else
{if((state_val_23818 === 13))
{var inst_23776 = (state_23817[8]);var inst_23777 = (state_23817[9]);var inst_23775 = (state_23817[10]);var inst_23774 = (state_23817[11]);var inst_23784 = (state_23817[2]);var inst_23785 = (inst_23777 + 1);var tmp23831 = inst_23776;var tmp23832 = inst_23775;var tmp23833 = inst_23774;var inst_23774__$1 = tmp23833;var inst_23775__$1 = tmp23832;var inst_23776__$1 = tmp23831;var inst_23777__$1 = inst_23785;var state_23817__$1 = (function (){var statearr_23838 = state_23817;(statearr_23838[8] = inst_23776__$1);
(statearr_23838[9] = inst_23777__$1);
(statearr_23838[14] = inst_23784);
(statearr_23838[10] = inst_23775__$1);
(statearr_23838[11] = inst_23774__$1);
return statearr_23838;
})();var statearr_23839_23868 = state_23817__$1;(statearr_23839_23868[2] = null);
(statearr_23839_23868[1] = 8);
return cljs.core.constant$keyword$318;
} else
{if((state_val_23818 === 14))
{var inst_23788 = (state_23817[13]);var inst_23790 = cljs.core.chunked_seq_QMARK_(inst_23788);var state_23817__$1 = state_23817;if(inst_23790)
{var statearr_23840_23869 = state_23817__$1;(statearr_23840_23869[1] = 17);
} else
{var statearr_23841_23870 = state_23817__$1;(statearr_23841_23870[1] = 18);
}
return cljs.core.constant$keyword$318;
} else
{if((state_val_23818 === 15))
{var state_23817__$1 = state_23817;var statearr_23842_23871 = state_23817__$1;(statearr_23842_23871[2] = null);
(statearr_23842_23871[1] = 16);
return cljs.core.constant$keyword$318;
} else
{if((state_val_23818 === 16))
{var inst_23806 = (state_23817[2]);var state_23817__$1 = state_23817;var statearr_23843_23872 = state_23817__$1;(statearr_23843_23872[2] = inst_23806);
(statearr_23843_23872[1] = 12);
return cljs.core.constant$keyword$318;
} else
{if((state_val_23818 === 17))
{var inst_23788 = (state_23817[13]);var inst_23792 = cljs.core.chunk_first(inst_23788);var inst_23793 = cljs.core.chunk_rest(inst_23788);var inst_23794 = cljs.core.count(inst_23792);var inst_23774 = inst_23793;var inst_23775 = inst_23792;var inst_23776 = inst_23794;var inst_23777 = 0;var state_23817__$1 = (function (){var statearr_23844 = state_23817;(statearr_23844[8] = inst_23776);
(statearr_23844[9] = inst_23777);
(statearr_23844[10] = inst_23775);
(statearr_23844[11] = inst_23774);
return statearr_23844;
})();var statearr_23845_23873 = state_23817__$1;(statearr_23845_23873[2] = null);
(statearr_23845_23873[1] = 8);
return cljs.core.constant$keyword$318;
} else
{if((state_val_23818 === 18))
{var inst_23788 = (state_23817[13]);var inst_23797 = cljs.core.first(inst_23788);var state_23817__$1 = state_23817;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23817__$1,20,out,inst_23797);
} else
{if((state_val_23818 === 19))
{var inst_23803 = (state_23817[2]);var state_23817__$1 = state_23817;var statearr_23846_23874 = state_23817__$1;(statearr_23846_23874[2] = inst_23803);
(statearr_23846_23874[1] = 16);
return cljs.core.constant$keyword$318;
} else
{if((state_val_23818 === 20))
{var inst_23788 = (state_23817[13]);var inst_23799 = (state_23817[2]);var inst_23800 = cljs.core.next(inst_23788);var inst_23774 = inst_23800;var inst_23775 = null;var inst_23776 = 0;var inst_23777 = 0;var state_23817__$1 = (function (){var statearr_23847 = state_23817;(statearr_23847[15] = inst_23799);
(statearr_23847[8] = inst_23776);
(statearr_23847[9] = inst_23777);
(statearr_23847[10] = inst_23775);
(statearr_23847[11] = inst_23774);
return statearr_23847;
})();var statearr_23848_23875 = state_23817__$1;(statearr_23848_23875[2] = null);
(statearr_23848_23875[1] = 8);
return cljs.core.constant$keyword$318;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_23852 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_23852[0] = state_machine__5510__auto__);
(statearr_23852[1] = 1);
return statearr_23852;
});
var state_machine__5510__auto____1 = (function (state_23817){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__(state_23817);if(cljs.core.keyword_identical_QMARK_(result__5512__auto__,cljs.core.constant$keyword$318))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e23853){if((e23853 instanceof Object))
{var ex__5513__auto__ = e23853;var statearr_23854_23876 = state_23817;(statearr_23854_23876[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23817);
return cljs.core.constant$keyword$318;
} else
{if(cljs.core.constant$keyword$307)
{throw e23853;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5511__auto__,cljs.core.constant$keyword$318))
{{
var G__23877 = state_23817;
state_23817 = G__23877;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_23817){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_23817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_23855 = (f__5525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5525__auto__.cljs$core$IFn$_invoke$arity$0() : f__5525__auto__.call(null));(statearr_23855[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto__);
return statearr_23855;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5526__auto__);
}));
return c__5524__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);cljs.core.async.mapcat_STAR_(f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);cljs.core.async.mapcat_STAR_(f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__5524__auto___23958 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_23937){var state_val_23938 = (state_23937[1]);if((state_val_23938 === 1))
{var state_23937__$1 = state_23937;var statearr_23939_23959 = state_23937__$1;(statearr_23939_23959[2] = null);
(statearr_23939_23959[1] = 2);
return cljs.core.constant$keyword$318;
} else
{if((state_val_23938 === 2))
{var state_23937__$1 = state_23937;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23937__$1,4,from);
} else
{if((state_val_23938 === 3))
{var inst_23935 = (state_23937[2]);var state_23937__$1 = state_23937;return cljs.core.async.impl.ioc_helpers.return_chan(state_23937__$1,inst_23935);
} else
{if((state_val_23938 === 4))
{var inst_23920 = (state_23937[7]);var inst_23920__$1 = (state_23937[2]);var inst_23921 = (inst_23920__$1 == null);var state_23937__$1 = (function (){var statearr_23940 = state_23937;(statearr_23940[7] = inst_23920__$1);
return statearr_23940;
})();if(cljs.core.truth_(inst_23921))
{var statearr_23941_23960 = state_23937__$1;(statearr_23941_23960[1] = 5);
} else
{var statearr_23942_23961 = state_23937__$1;(statearr_23942_23961[1] = 6);
}
return cljs.core.constant$keyword$318;
} else
{if((state_val_23938 === 5))
{var state_23937__$1 = state_23937;if(cljs.core.truth_(close_QMARK_))
{var statearr_23943_23962 = state_23937__$1;(statearr_23943_23962[1] = 8);
} else
{var statearr_23944_23963 = state_23937__$1;(statearr_23944_23963[1] = 9);
}
return cljs.core.constant$keyword$318;
} else
{if((state_val_23938 === 6))
{var inst_23920 = (state_23937[7]);var state_23937__$1 = state_23937;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23937__$1,11,to,inst_23920);
} else
{if((state_val_23938 === 7))
{var inst_23933 = (state_23937[2]);var state_23937__$1 = state_23937;var statearr_23945_23964 = state_23937__$1;(statearr_23945_23964[2] = inst_23933);
(statearr_23945_23964[1] = 3);
return cljs.core.constant$keyword$318;
} else
{if((state_val_23938 === 8))
{var inst_23924 = cljs.core.async.close_BANG_(to);var state_23937__$1 = state_23937;var statearr_23946_23965 = state_23937__$1;(statearr_23946_23965[2] = inst_23924);
(statearr_23946_23965[1] = 10);
return cljs.core.constant$keyword$318;
} else
{if((state_val_23938 === 9))
{var state_23937__$1 = state_23937;var statearr_23947_23966 = state_23937__$1;(statearr_23947_23966[2] = null);
(statearr_23947_23966[1] = 10);
return cljs.core.constant$keyword$318;
} else
{if((state_val_23938 === 10))
{var inst_23927 = (state_23937[2]);var state_23937__$1 = state_23937;var statearr_23948_23967 = state_23937__$1;(statearr_23948_23967[2] = inst_23927);
(statearr_23948_23967[1] = 7);
return cljs.core.constant$keyword$318;
} else
{if((state_val_23938 === 11))
{var inst_23930 = (state_23937[2]);var state_23937__$1 = (function (){var statearr_23949 = state_23937;(statearr_23949[8] = inst_23930);
return statearr_23949;
})();var statearr_23950_23968 = state_23937__$1;(statearr_23950_23968[2] = null);
(statearr_23950_23968[1] = 2);
return cljs.core.constant$keyword$318;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_23954 = [null,null,null,null,null,null,null,null,null];(statearr_23954[0] = state_machine__5510__auto__);
(statearr_23954[1] = 1);
return statearr_23954;
});
var state_machine__5510__auto____1 = (function (state_23937){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__(state_23937);if(cljs.core.keyword_identical_QMARK_(result__5512__auto__,cljs.core.constant$keyword$318))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e23955){if((e23955 instanceof Object))
{var ex__5513__auto__ = e23955;var statearr_23956_23969 = state_23937;(statearr_23956_23969[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_23937);
return cljs.core.constant$keyword$318;
} else
{if(cljs.core.constant$keyword$307)
{throw e23955;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5511__auto__,cljs.core.constant$keyword$318))
{{
var G__23970 = state_23937;
state_23937 = G__23970;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_23937){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_23937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_23957 = (f__5525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5525__auto__.cljs$core$IFn$_invoke$arity$0() : f__5525__auto__.call(null));(statearr_23957[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___23958);
return statearr_23957;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5526__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__5524__auto___24057 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_24035){var state_val_24036 = (state_24035[1]);if((state_val_24036 === 1))
{var state_24035__$1 = state_24035;var statearr_24037_24058 = state_24035__$1;(statearr_24037_24058[2] = null);
(statearr_24037_24058[1] = 2);
return cljs.core.constant$keyword$318;
} else
{if((state_val_24036 === 2))
{var state_24035__$1 = state_24035;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24035__$1,4,ch);
} else
{if((state_val_24036 === 3))
{var inst_24033 = (state_24035[2]);var state_24035__$1 = state_24035;return cljs.core.async.impl.ioc_helpers.return_chan(state_24035__$1,inst_24033);
} else
{if((state_val_24036 === 4))
{var inst_24016 = (state_24035[7]);var inst_24016__$1 = (state_24035[2]);var inst_24017 = (inst_24016__$1 == null);var state_24035__$1 = (function (){var statearr_24038 = state_24035;(statearr_24038[7] = inst_24016__$1);
return statearr_24038;
})();if(cljs.core.truth_(inst_24017))
{var statearr_24039_24059 = state_24035__$1;(statearr_24039_24059[1] = 5);
} else
{var statearr_24040_24060 = state_24035__$1;(statearr_24040_24060[1] = 6);
}
return cljs.core.constant$keyword$318;
} else
{if((state_val_24036 === 5))
{var inst_24019 = cljs.core.async.close_BANG_(tc);var inst_24020 = cljs.core.async.close_BANG_(fc);var state_24035__$1 = (function (){var statearr_24041 = state_24035;(statearr_24041[8] = inst_24019);
return statearr_24041;
})();var statearr_24042_24061 = state_24035__$1;(statearr_24042_24061[2] = inst_24020);
(statearr_24042_24061[1] = 7);
return cljs.core.constant$keyword$318;
} else
{if((state_val_24036 === 6))
{var inst_24016 = (state_24035[7]);var inst_24022 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_24016) : p.call(null,inst_24016));var state_24035__$1 = state_24035;if(cljs.core.truth_(inst_24022))
{var statearr_24043_24062 = state_24035__$1;(statearr_24043_24062[1] = 9);
} else
{var statearr_24044_24063 = state_24035__$1;(statearr_24044_24063[1] = 10);
}
return cljs.core.constant$keyword$318;
} else
{if((state_val_24036 === 7))
{var inst_24031 = (state_24035[2]);var state_24035__$1 = state_24035;var statearr_24045_24064 = state_24035__$1;(statearr_24045_24064[2] = inst_24031);
(statearr_24045_24064[1] = 3);
return cljs.core.constant$keyword$318;
} else
{if((state_val_24036 === 8))
{var inst_24028 = (state_24035[2]);var state_24035__$1 = (function (){var statearr_24046 = state_24035;(statearr_24046[9] = inst_24028);
return statearr_24046;
})();var statearr_24047_24065 = state_24035__$1;(statearr_24047_24065[2] = null);
(statearr_24047_24065[1] = 2);
return cljs.core.constant$keyword$318;
} else
{if((state_val_24036 === 9))
{var state_24035__$1 = state_24035;var statearr_24048_24066 = state_24035__$1;(statearr_24048_24066[2] = tc);
(statearr_24048_24066[1] = 11);
return cljs.core.constant$keyword$318;
} else
{if((state_val_24036 === 10))
{var state_24035__$1 = state_24035;var statearr_24049_24067 = state_24035__$1;(statearr_24049_24067[2] = fc);
(statearr_24049_24067[1] = 11);
return cljs.core.constant$keyword$318;
} else
{if((state_val_24036 === 11))
{var inst_24016 = (state_24035[7]);var inst_24026 = (state_24035[2]);var state_24035__$1 = state_24035;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24035__$1,8,inst_24026,inst_24016);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_24053 = [null,null,null,null,null,null,null,null,null,null];(statearr_24053[0] = state_machine__5510__auto__);
(statearr_24053[1] = 1);
return statearr_24053;
});
var state_machine__5510__auto____1 = (function (state_24035){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__(state_24035);if(cljs.core.keyword_identical_QMARK_(result__5512__auto__,cljs.core.constant$keyword$318))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e24054){if((e24054 instanceof Object))
{var ex__5513__auto__ = e24054;var statearr_24055_24068 = state_24035;(statearr_24055_24068[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24035);
return cljs.core.constant$keyword$318;
} else
{if(cljs.core.constant$keyword$307)
{throw e24054;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5511__auto__,cljs.core.constant$keyword$318))
{{
var G__24069 = state_24035;
state_24035 = G__24069;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_24035){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_24035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_24056 = (f__5525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5525__auto__.cljs$core$IFn$_invoke$arity$0() : f__5525__auto__.call(null));(statearr_24056[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___24057);
return statearr_24056;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5526__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5524__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_24116){var state_val_24117 = (state_24116[1]);if((state_val_24117 === 7))
{var inst_24112 = (state_24116[2]);var state_24116__$1 = state_24116;var statearr_24118_24134 = state_24116__$1;(statearr_24118_24134[2] = inst_24112);
(statearr_24118_24134[1] = 3);
return cljs.core.constant$keyword$318;
} else
{if((state_val_24117 === 6))
{var inst_24105 = (state_24116[7]);var inst_24102 = (state_24116[8]);var inst_24109 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_24102,inst_24105) : f.call(null,inst_24102,inst_24105));var inst_24102__$1 = inst_24109;var state_24116__$1 = (function (){var statearr_24119 = state_24116;(statearr_24119[8] = inst_24102__$1);
return statearr_24119;
})();var statearr_24120_24135 = state_24116__$1;(statearr_24120_24135[2] = null);
(statearr_24120_24135[1] = 2);
return cljs.core.constant$keyword$318;
} else
{if((state_val_24117 === 5))
{var inst_24102 = (state_24116[8]);var state_24116__$1 = state_24116;var statearr_24121_24136 = state_24116__$1;(statearr_24121_24136[2] = inst_24102);
(statearr_24121_24136[1] = 7);
return cljs.core.constant$keyword$318;
} else
{if((state_val_24117 === 4))
{var inst_24105 = (state_24116[7]);var inst_24105__$1 = (state_24116[2]);var inst_24106 = (inst_24105__$1 == null);var state_24116__$1 = (function (){var statearr_24122 = state_24116;(statearr_24122[7] = inst_24105__$1);
return statearr_24122;
})();if(cljs.core.truth_(inst_24106))
{var statearr_24123_24137 = state_24116__$1;(statearr_24123_24137[1] = 5);
} else
{var statearr_24124_24138 = state_24116__$1;(statearr_24124_24138[1] = 6);
}
return cljs.core.constant$keyword$318;
} else
{if((state_val_24117 === 3))
{var inst_24114 = (state_24116[2]);var state_24116__$1 = state_24116;return cljs.core.async.impl.ioc_helpers.return_chan(state_24116__$1,inst_24114);
} else
{if((state_val_24117 === 2))
{var state_24116__$1 = state_24116;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24116__$1,4,ch);
} else
{if((state_val_24117 === 1))
{var inst_24102 = init;var state_24116__$1 = (function (){var statearr_24125 = state_24116;(statearr_24125[8] = inst_24102);
return statearr_24125;
})();var statearr_24126_24139 = state_24116__$1;(statearr_24126_24139[2] = null);
(statearr_24126_24139[1] = 2);
return cljs.core.constant$keyword$318;
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_24130 = [null,null,null,null,null,null,null,null,null];(statearr_24130[0] = state_machine__5510__auto__);
(statearr_24130[1] = 1);
return statearr_24130;
});
var state_machine__5510__auto____1 = (function (state_24116){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__(state_24116);if(cljs.core.keyword_identical_QMARK_(result__5512__auto__,cljs.core.constant$keyword$318))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e24131){if((e24131 instanceof Object))
{var ex__5513__auto__ = e24131;var statearr_24132_24140 = state_24116;(statearr_24132_24140[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24116);
return cljs.core.constant$keyword$318;
} else
{if(cljs.core.constant$keyword$307)
{throw e24131;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5511__auto__,cljs.core.constant$keyword$318))
{{
var G__24141 = state_24116;
state_24116 = G__24141;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_24116){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_24116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_24133 = (f__5525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5525__auto__.cljs$core$IFn$_invoke$arity$0() : f__5525__auto__.call(null));(statearr_24133[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto__);
return statearr_24133;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5526__auto__);
}));
return c__5524__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5524__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_24203){var state_val_24204 = (state_24203[1]);if((state_val_24204 === 1))
{var inst_24183 = cljs.core.seq(coll);var inst_24184 = inst_24183;var state_24203__$1 = (function (){var statearr_24205 = state_24203;(statearr_24205[7] = inst_24184);
return statearr_24205;
})();var statearr_24206_24224 = state_24203__$1;(statearr_24206_24224[2] = null);
(statearr_24206_24224[1] = 2);
return cljs.core.constant$keyword$318;
} else
{if((state_val_24204 === 2))
{var inst_24184 = (state_24203[7]);var state_24203__$1 = state_24203;if(cljs.core.truth_(inst_24184))
{var statearr_24207_24225 = state_24203__$1;(statearr_24207_24225[1] = 4);
} else
{var statearr_24208_24226 = state_24203__$1;(statearr_24208_24226[1] = 5);
}
return cljs.core.constant$keyword$318;
} else
{if((state_val_24204 === 3))
{var inst_24201 = (state_24203[2]);var state_24203__$1 = state_24203;return cljs.core.async.impl.ioc_helpers.return_chan(state_24203__$1,inst_24201);
} else
{if((state_val_24204 === 4))
{var inst_24184 = (state_24203[7]);var inst_24187 = cljs.core.first(inst_24184);var state_24203__$1 = state_24203;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24203__$1,7,ch,inst_24187);
} else
{if((state_val_24204 === 5))
{var state_24203__$1 = state_24203;if(cljs.core.truth_(close_QMARK_))
{var statearr_24209_24227 = state_24203__$1;(statearr_24209_24227[1] = 8);
} else
{var statearr_24210_24228 = state_24203__$1;(statearr_24210_24228[1] = 9);
}
return cljs.core.constant$keyword$318;
} else
{if((state_val_24204 === 6))
{var inst_24199 = (state_24203[2]);var state_24203__$1 = state_24203;var statearr_24211_24229 = state_24203__$1;(statearr_24211_24229[2] = inst_24199);
(statearr_24211_24229[1] = 3);
return cljs.core.constant$keyword$318;
} else
{if((state_val_24204 === 7))
{var inst_24184 = (state_24203[7]);var inst_24189 = (state_24203[2]);var inst_24190 = cljs.core.next(inst_24184);var inst_24184__$1 = inst_24190;var state_24203__$1 = (function (){var statearr_24212 = state_24203;(statearr_24212[8] = inst_24189);
(statearr_24212[7] = inst_24184__$1);
return statearr_24212;
})();var statearr_24213_24230 = state_24203__$1;(statearr_24213_24230[2] = null);
(statearr_24213_24230[1] = 2);
return cljs.core.constant$keyword$318;
} else
{if((state_val_24204 === 8))
{var inst_24194 = cljs.core.async.close_BANG_(ch);var state_24203__$1 = state_24203;var statearr_24214_24231 = state_24203__$1;(statearr_24214_24231[2] = inst_24194);
(statearr_24214_24231[1] = 10);
return cljs.core.constant$keyword$318;
} else
{if((state_val_24204 === 9))
{var state_24203__$1 = state_24203;var statearr_24215_24232 = state_24203__$1;(statearr_24215_24232[2] = null);
(statearr_24215_24232[1] = 10);
return cljs.core.constant$keyword$318;
} else
{if((state_val_24204 === 10))
{var inst_24197 = (state_24203[2]);var state_24203__$1 = state_24203;var statearr_24216_24233 = state_24203__$1;(statearr_24216_24233[2] = inst_24197);
(statearr_24216_24233[1] = 6);
return cljs.core.constant$keyword$318;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_24220 = [null,null,null,null,null,null,null,null,null];(statearr_24220[0] = state_machine__5510__auto__);
(statearr_24220[1] = 1);
return statearr_24220;
});
var state_machine__5510__auto____1 = (function (state_24203){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__(state_24203);if(cljs.core.keyword_identical_QMARK_(result__5512__auto__,cljs.core.constant$keyword$318))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e24221){if((e24221 instanceof Object))
{var ex__5513__auto__ = e24221;var statearr_24222_24234 = state_24203;(statearr_24222_24234[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24203);
return cljs.core.constant$keyword$318;
} else
{if(cljs.core.constant$keyword$307)
{throw e24221;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5511__auto__,cljs.core.constant$keyword$318))
{{
var G__24235 = state_24203;
state_24203 = G__24235;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_24203){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_24203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_24223 = (f__5525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5525__auto__.cljs$core$IFn$_invoke$arity$0() : f__5525__auto__.call(null));(statearr_24223[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto__);
return statearr_24223;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5526__auto__);
}));
return c__5524__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count(100,coll));cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj24237 = {};return obj24237;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3391__auto__ = _;if(and__3391__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3391__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4030__auto__ = (((_ == null))?null:_);return (function (){var or__3403__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj24239 = {};return obj24239;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t24463 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24463 = (function (cs,ch,mult,meta24464){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta24464 = meta24464;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24463.cljs$lang$type = true;
cljs.core.async.t24463.cljs$lang$ctorStr = "cljs.core.async/t24463";
cljs.core.async.t24463.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write(writer__3971__auto__,"cljs.core.async/t24463");
});})(cs))
;
cljs.core.async.t24463.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t24463.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t24463.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t24463.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t24463.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24463.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t24463.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24465){var self__ = this;
var _24465__$1 = this;return self__.meta24464;
});})(cs))
;
cljs.core.async.t24463.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24465,meta24464__$1){var self__ = this;
var _24465__$1 = this;return (new cljs.core.async.t24463(self__.cs,self__.ch,self__.mult,meta24464__$1));
});})(cs))
;
cljs.core.async.__GT_t24463 = ((function (cs){
return (function __GT_t24463(cs__$1,ch__$1,mult__$1,meta24464){return (new cljs.core.async.t24463(cs__$1,ch__$1,mult__$1,meta24464));
});})(cs))
;
}
return (new cljs.core.async.t24463(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5524__auto___24686 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_24600){var state_val_24601 = (state_24600[1]);if((state_val_24601 === 32))
{var inst_24468 = (state_24600[7]);var inst_24544 = (state_24600[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24600,31,Object,null,30);var inst_24551 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_24544,inst_24468,done);var state_24600__$1 = state_24600;var statearr_24602_24687 = state_24600__$1;(statearr_24602_24687[2] = inst_24551);
cljs.core.async.impl.ioc_helpers.process_exception(state_24600__$1);
return cljs.core.constant$keyword$318;
} else
{if((state_val_24601 === 1))
{var state_24600__$1 = state_24600;var statearr_24603_24688 = state_24600__$1;(statearr_24603_24688[2] = null);
(statearr_24603_24688[1] = 2);
return cljs.core.constant$keyword$318;
} else
{if((state_val_24601 === 33))
{var inst_24557 = (state_24600[9]);var inst_24559 = cljs.core.chunked_seq_QMARK_(inst_24557);var state_24600__$1 = state_24600;if(inst_24559)
{var statearr_24604_24689 = state_24600__$1;(statearr_24604_24689[1] = 36);
} else
{var statearr_24605_24690 = state_24600__$1;(statearr_24605_24690[1] = 37);
}
return cljs.core.constant$keyword$318;
} else
{if((state_val_24601 === 2))
{var state_24600__$1 = state_24600;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24600__$1,4,ch);
} else
{if((state_val_24601 === 34))
{var state_24600__$1 = state_24600;var statearr_24606_24691 = state_24600__$1;(statearr_24606_24691[2] = null);
(statearr_24606_24691[1] = 35);
return cljs.core.constant$keyword$318;
} else
{if((state_val_24601 === 3))
{var inst_24598 = (state_24600[2]);var state_24600__$1 = state_24600;return cljs.core.async.impl.ioc_helpers.return_chan(state_24600__$1,inst_24598);
} else
{if((state_val_24601 === 35))
{var inst_24582 = (state_24600[2]);var state_24600__$1 = state_24600;var statearr_24607_24692 = state_24600__$1;(statearr_24607_24692[2] = inst_24582);
(statearr_24607_24692[1] = 29);
return cljs.core.constant$keyword$318;
} else
{if((state_val_24601 === 4))
{var inst_24468 = (state_24600[7]);var inst_24468__$1 = (state_24600[2]);var inst_24469 = (inst_24468__$1 == null);var state_24600__$1 = (function (){var statearr_24608 = state_24600;(statearr_24608[7] = inst_24468__$1);
return statearr_24608;
})();if(cljs.core.truth_(inst_24469))
{var statearr_24609_24693 = state_24600__$1;(statearr_24609_24693[1] = 5);
} else
{var statearr_24610_24694 = state_24600__$1;(statearr_24610_24694[1] = 6);
}
return cljs.core.constant$keyword$318;
} else
{if((state_val_24601 === 36))
{var inst_24557 = (state_24600[9]);var inst_24561 = cljs.core.chunk_first(inst_24557);var inst_24562 = cljs.core.chunk_rest(inst_24557);var inst_24563 = cljs.core.count(inst_24561);var inst_24536 = inst_24562;var inst_24537 = inst_24561;var inst_24538 = inst_24563;var inst_24539 = 0;var state_24600__$1 = (function (){var statearr_24611 = state_24600;(statearr_24611[10] = inst_24539);
(statearr_24611[11] = inst_24536);
(statearr_24611[12] = inst_24537);
(statearr_24611[13] = inst_24538);
return statearr_24611;
})();var statearr_24612_24695 = state_24600__$1;(statearr_24612_24695[2] = null);
(statearr_24612_24695[1] = 25);
return cljs.core.constant$keyword$318;
} else
{if((state_val_24601 === 5))
{var inst_24475 = cljs.core.deref(cs);var inst_24476 = cljs.core.seq(inst_24475);var inst_24477 = inst_24476;var inst_24478 = null;var inst_24479 = 0;var inst_24480 = 0;var state_24600__$1 = (function (){var statearr_24613 = state_24600;(statearr_24613[14] = inst_24480);
(statearr_24613[15] = inst_24479);
(statearr_24613[16] = inst_24478);
(statearr_24613[17] = inst_24477);
return statearr_24613;
})();var statearr_24614_24696 = state_24600__$1;(statearr_24614_24696[2] = null);
(statearr_24614_24696[1] = 8);
return cljs.core.constant$keyword$318;
} else
{if((state_val_24601 === 37))
{var inst_24557 = (state_24600[9]);var inst_24566 = cljs.core.first(inst_24557);var state_24600__$1 = (function (){var statearr_24615 = state_24600;(statearr_24615[18] = inst_24566);
return statearr_24615;
})();var statearr_24616_24697 = state_24600__$1;(statearr_24616_24697[2] = null);
(statearr_24616_24697[1] = 41);
return cljs.core.constant$keyword$318;
} else
{if((state_val_24601 === 6))
{var inst_24528 = (state_24600[19]);var inst_24527 = cljs.core.deref(cs);var inst_24528__$1 = cljs.core.keys(inst_24527);var inst_24529 = cljs.core.count(inst_24528__$1);var inst_24530 = cljs.core.reset_BANG_(dctr,inst_24529);var inst_24535 = cljs.core.seq(inst_24528__$1);var inst_24536 = inst_24535;var inst_24537 = null;var inst_24538 = 0;var inst_24539 = 0;var state_24600__$1 = (function (){var statearr_24617 = state_24600;(statearr_24617[10] = inst_24539);
(statearr_24617[20] = inst_24530);
(statearr_24617[19] = inst_24528__$1);
(statearr_24617[11] = inst_24536);
(statearr_24617[12] = inst_24537);
(statearr_24617[13] = inst_24538);
return statearr_24617;
})();var statearr_24618_24698 = state_24600__$1;(statearr_24618_24698[2] = null);
(statearr_24618_24698[1] = 25);
return cljs.core.constant$keyword$318;
} else
{if((state_val_24601 === 38))
{var inst_24579 = (state_24600[2]);var state_24600__$1 = state_24600;var statearr_24619_24699 = state_24600__$1;(statearr_24619_24699[2] = inst_24579);
(statearr_24619_24699[1] = 35);
return cljs.core.constant$keyword$318;
} else
{if((state_val_24601 === 7))
{var inst_24596 = (state_24600[2]);var state_24600__$1 = state_24600;var statearr_24620_24700 = state_24600__$1;(statearr_24620_24700[2] = inst_24596);
(statearr_24620_24700[1] = 3);
return cljs.core.constant$keyword$318;
} else
{if((state_val_24601 === 39))
{var inst_24557 = (state_24600[9]);var inst_24575 = (state_24600[2]);var inst_24576 = cljs.core.next(inst_24557);var inst_24536 = inst_24576;var inst_24537 = null;var inst_24538 = 0;var inst_24539 = 0;var state_24600__$1 = (function (){var statearr_24621 = state_24600;(statearr_24621[10] = inst_24539);
(statearr_24621[21] = inst_24575);
(statearr_24621[11] = inst_24536);
(statearr_24621[12] = inst_24537);
(statearr_24621[13] = inst_24538);
return statearr_24621;
})();var statearr_24622_24701 = state_24600__$1;(statearr_24622_24701[2] = null);
(statearr_24622_24701[1] = 25);
return cljs.core.constant$keyword$318;
} else
{if((state_val_24601 === 8))
{var inst_24480 = (state_24600[14]);var inst_24479 = (state_24600[15]);var inst_24482 = (inst_24480 < inst_24479);var inst_24483 = inst_24482;var state_24600__$1 = state_24600;if(cljs.core.truth_(inst_24483))
{var statearr_24623_24702 = state_24600__$1;(statearr_24623_24702[1] = 10);
} else
{var statearr_24624_24703 = state_24600__$1;(statearr_24624_24703[1] = 11);
}
return cljs.core.constant$keyword$318;
} else
{if((state_val_24601 === 40))
{var inst_24566 = (state_24600[18]);var inst_24567 = (state_24600[2]);var inst_24568 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_24569 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_24566);var state_24600__$1 = (function (){var statearr_24625 = state_24600;(statearr_24625[22] = inst_24568);
(statearr_24625[23] = inst_24567);
return statearr_24625;
})();var statearr_24626_24704 = state_24600__$1;(statearr_24626_24704[2] = inst_24569);
cljs.core.async.impl.ioc_helpers.process_exception(state_24600__$1);
return cljs.core.constant$keyword$318;
} else
{if((state_val_24601 === 9))
{var inst_24525 = (state_24600[2]);var state_24600__$1 = state_24600;var statearr_24627_24705 = state_24600__$1;(statearr_24627_24705[2] = inst_24525);
(statearr_24627_24705[1] = 7);
return cljs.core.constant$keyword$318;
} else
{if((state_val_24601 === 41))
{var inst_24566 = (state_24600[18]);var inst_24468 = (state_24600[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24600,40,Object,null,39);var inst_24573 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_24566,inst_24468,done);var state_24600__$1 = state_24600;var statearr_24628_24706 = state_24600__$1;(statearr_24628_24706[2] = inst_24573);
cljs.core.async.impl.ioc_helpers.process_exception(state_24600__$1);
return cljs.core.constant$keyword$318;
} else
{if((state_val_24601 === 10))
{var inst_24480 = (state_24600[14]);var inst_24478 = (state_24600[16]);var inst_24486 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24478,inst_24480);var inst_24487 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24486,0,null);var inst_24488 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24486,1,null);var state_24600__$1 = (function (){var statearr_24629 = state_24600;(statearr_24629[24] = inst_24487);
return statearr_24629;
})();if(cljs.core.truth_(inst_24488))
{var statearr_24630_24707 = state_24600__$1;(statearr_24630_24707[1] = 13);
} else
{var statearr_24631_24708 = state_24600__$1;(statearr_24631_24708[1] = 14);
}
return cljs.core.constant$keyword$318;
} else
{if((state_val_24601 === 42))
{var state_24600__$1 = state_24600;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24600__$1,45,dchan);
} else
{if((state_val_24601 === 11))
{var inst_24497 = (state_24600[25]);var inst_24477 = (state_24600[17]);var inst_24497__$1 = cljs.core.seq(inst_24477);var state_24600__$1 = (function (){var statearr_24632 = state_24600;(statearr_24632[25] = inst_24497__$1);
return statearr_24632;
})();if(inst_24497__$1)
{var statearr_24633_24709 = state_24600__$1;(statearr_24633_24709[1] = 16);
} else
{var statearr_24634_24710 = state_24600__$1;(statearr_24634_24710[1] = 17);
}
return cljs.core.constant$keyword$318;
} else
{if((state_val_24601 === 43))
{var state_24600__$1 = state_24600;var statearr_24635_24711 = state_24600__$1;(statearr_24635_24711[2] = null);
(statearr_24635_24711[1] = 44);
return cljs.core.constant$keyword$318;
} else
{if((state_val_24601 === 12))
{var inst_24523 = (state_24600[2]);var state_24600__$1 = state_24600;var statearr_24636_24712 = state_24600__$1;(statearr_24636_24712[2] = inst_24523);
(statearr_24636_24712[1] = 9);
return cljs.core.constant$keyword$318;
} else
{if((state_val_24601 === 44))
{var inst_24593 = (state_24600[2]);var state_24600__$1 = (function (){var statearr_24637 = state_24600;(statearr_24637[26] = inst_24593);
return statearr_24637;
})();var statearr_24638_24713 = state_24600__$1;(statearr_24638_24713[2] = null);
(statearr_24638_24713[1] = 2);
return cljs.core.constant$keyword$318;
} else
{if((state_val_24601 === 13))
{var inst_24487 = (state_24600[24]);var inst_24490 = cljs.core.async.close_BANG_(inst_24487);var state_24600__$1 = state_24600;var statearr_24639_24714 = state_24600__$1;(statearr_24639_24714[2] = inst_24490);
(statearr_24639_24714[1] = 15);
return cljs.core.constant$keyword$318;
} else
{if((state_val_24601 === 45))
{var inst_24590 = (state_24600[2]);var state_24600__$1 = state_24600;var statearr_24643_24715 = state_24600__$1;(statearr_24643_24715[2] = inst_24590);
(statearr_24643_24715[1] = 44);
return cljs.core.constant$keyword$318;
} else
{if((state_val_24601 === 14))
{var state_24600__$1 = state_24600;var statearr_24644_24716 = state_24600__$1;(statearr_24644_24716[2] = null);
(statearr_24644_24716[1] = 15);
return cljs.core.constant$keyword$318;
} else
{if((state_val_24601 === 15))
{var inst_24480 = (state_24600[14]);var inst_24479 = (state_24600[15]);var inst_24478 = (state_24600[16]);var inst_24477 = (state_24600[17]);var inst_24493 = (state_24600[2]);var inst_24494 = (inst_24480 + 1);var tmp24640 = inst_24479;var tmp24641 = inst_24478;var tmp24642 = inst_24477;var inst_24477__$1 = tmp24642;var inst_24478__$1 = tmp24641;var inst_24479__$1 = tmp24640;var inst_24480__$1 = inst_24494;var state_24600__$1 = (function (){var statearr_24645 = state_24600;(statearr_24645[14] = inst_24480__$1);
(statearr_24645[27] = inst_24493);
(statearr_24645[15] = inst_24479__$1);
(statearr_24645[16] = inst_24478__$1);
(statearr_24645[17] = inst_24477__$1);
return statearr_24645;
})();var statearr_24646_24717 = state_24600__$1;(statearr_24646_24717[2] = null);
(statearr_24646_24717[1] = 8);
return cljs.core.constant$keyword$318;
} else
{if((state_val_24601 === 16))
{var inst_24497 = (state_24600[25]);var inst_24499 = cljs.core.chunked_seq_QMARK_(inst_24497);var state_24600__$1 = state_24600;if(inst_24499)
{var statearr_24647_24718 = state_24600__$1;(statearr_24647_24718[1] = 19);
} else
{var statearr_24648_24719 = state_24600__$1;(statearr_24648_24719[1] = 20);
}
return cljs.core.constant$keyword$318;
} else
{if((state_val_24601 === 17))
{var state_24600__$1 = state_24600;var statearr_24649_24720 = state_24600__$1;(statearr_24649_24720[2] = null);
(statearr_24649_24720[1] = 18);
return cljs.core.constant$keyword$318;
} else
{if((state_val_24601 === 18))
{var inst_24521 = (state_24600[2]);var state_24600__$1 = state_24600;var statearr_24650_24721 = state_24600__$1;(statearr_24650_24721[2] = inst_24521);
(statearr_24650_24721[1] = 12);
return cljs.core.constant$keyword$318;
} else
{if((state_val_24601 === 19))
{var inst_24497 = (state_24600[25]);var inst_24501 = cljs.core.chunk_first(inst_24497);var inst_24502 = cljs.core.chunk_rest(inst_24497);var inst_24503 = cljs.core.count(inst_24501);var inst_24477 = inst_24502;var inst_24478 = inst_24501;var inst_24479 = inst_24503;var inst_24480 = 0;var state_24600__$1 = (function (){var statearr_24651 = state_24600;(statearr_24651[14] = inst_24480);
(statearr_24651[15] = inst_24479);
(statearr_24651[16] = inst_24478);
(statearr_24651[17] = inst_24477);
return statearr_24651;
})();var statearr_24652_24722 = state_24600__$1;(statearr_24652_24722[2] = null);
(statearr_24652_24722[1] = 8);
return cljs.core.constant$keyword$318;
} else
{if((state_val_24601 === 20))
{var inst_24497 = (state_24600[25]);var inst_24507 = cljs.core.first(inst_24497);var inst_24508 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24507,0,null);var inst_24509 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24507,1,null);var state_24600__$1 = (function (){var statearr_24653 = state_24600;(statearr_24653[28] = inst_24508);
return statearr_24653;
})();if(cljs.core.truth_(inst_24509))
{var statearr_24654_24723 = state_24600__$1;(statearr_24654_24723[1] = 22);
} else
{var statearr_24655_24724 = state_24600__$1;(statearr_24655_24724[1] = 23);
}
return cljs.core.constant$keyword$318;
} else
{if((state_val_24601 === 21))
{var inst_24518 = (state_24600[2]);var state_24600__$1 = state_24600;var statearr_24656_24725 = state_24600__$1;(statearr_24656_24725[2] = inst_24518);
(statearr_24656_24725[1] = 18);
return cljs.core.constant$keyword$318;
} else
{if((state_val_24601 === 22))
{var inst_24508 = (state_24600[28]);var inst_24511 = cljs.core.async.close_BANG_(inst_24508);var state_24600__$1 = state_24600;var statearr_24657_24726 = state_24600__$1;(statearr_24657_24726[2] = inst_24511);
(statearr_24657_24726[1] = 24);
return cljs.core.constant$keyword$318;
} else
{if((state_val_24601 === 23))
{var state_24600__$1 = state_24600;var statearr_24658_24727 = state_24600__$1;(statearr_24658_24727[2] = null);
(statearr_24658_24727[1] = 24);
return cljs.core.constant$keyword$318;
} else
{if((state_val_24601 === 24))
{var inst_24497 = (state_24600[25]);var inst_24514 = (state_24600[2]);var inst_24515 = cljs.core.next(inst_24497);var inst_24477 = inst_24515;var inst_24478 = null;var inst_24479 = 0;var inst_24480 = 0;var state_24600__$1 = (function (){var statearr_24659 = state_24600;(statearr_24659[14] = inst_24480);
(statearr_24659[29] = inst_24514);
(statearr_24659[15] = inst_24479);
(statearr_24659[16] = inst_24478);
(statearr_24659[17] = inst_24477);
return statearr_24659;
})();var statearr_24660_24728 = state_24600__$1;(statearr_24660_24728[2] = null);
(statearr_24660_24728[1] = 8);
return cljs.core.constant$keyword$318;
} else
{if((state_val_24601 === 25))
{var inst_24539 = (state_24600[10]);var inst_24538 = (state_24600[13]);var inst_24541 = (inst_24539 < inst_24538);var inst_24542 = inst_24541;var state_24600__$1 = state_24600;if(cljs.core.truth_(inst_24542))
{var statearr_24661_24729 = state_24600__$1;(statearr_24661_24729[1] = 27);
} else
{var statearr_24662_24730 = state_24600__$1;(statearr_24662_24730[1] = 28);
}
return cljs.core.constant$keyword$318;
} else
{if((state_val_24601 === 26))
{var inst_24528 = (state_24600[19]);var inst_24586 = (state_24600[2]);var inst_24587 = cljs.core.seq(inst_24528);var state_24600__$1 = (function (){var statearr_24663 = state_24600;(statearr_24663[30] = inst_24586);
return statearr_24663;
})();if(inst_24587)
{var statearr_24664_24731 = state_24600__$1;(statearr_24664_24731[1] = 42);
} else
{var statearr_24665_24732 = state_24600__$1;(statearr_24665_24732[1] = 43);
}
return cljs.core.constant$keyword$318;
} else
{if((state_val_24601 === 27))
{var inst_24539 = (state_24600[10]);var inst_24537 = (state_24600[12]);var inst_24544 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24537,inst_24539);var state_24600__$1 = (function (){var statearr_24666 = state_24600;(statearr_24666[8] = inst_24544);
return statearr_24666;
})();var statearr_24667_24733 = state_24600__$1;(statearr_24667_24733[2] = null);
(statearr_24667_24733[1] = 32);
return cljs.core.constant$keyword$318;
} else
{if((state_val_24601 === 28))
{var inst_24557 = (state_24600[9]);var inst_24536 = (state_24600[11]);var inst_24557__$1 = cljs.core.seq(inst_24536);var state_24600__$1 = (function (){var statearr_24671 = state_24600;(statearr_24671[9] = inst_24557__$1);
return statearr_24671;
})();if(inst_24557__$1)
{var statearr_24672_24734 = state_24600__$1;(statearr_24672_24734[1] = 33);
} else
{var statearr_24673_24735 = state_24600__$1;(statearr_24673_24735[1] = 34);
}
return cljs.core.constant$keyword$318;
} else
{if((state_val_24601 === 29))
{var inst_24584 = (state_24600[2]);var state_24600__$1 = state_24600;var statearr_24674_24736 = state_24600__$1;(statearr_24674_24736[2] = inst_24584);
(statearr_24674_24736[1] = 26);
return cljs.core.constant$keyword$318;
} else
{if((state_val_24601 === 30))
{var inst_24539 = (state_24600[10]);var inst_24536 = (state_24600[11]);var inst_24537 = (state_24600[12]);var inst_24538 = (state_24600[13]);var inst_24553 = (state_24600[2]);var inst_24554 = (inst_24539 + 1);var tmp24668 = inst_24536;var tmp24669 = inst_24537;var tmp24670 = inst_24538;var inst_24536__$1 = tmp24668;var inst_24537__$1 = tmp24669;var inst_24538__$1 = tmp24670;var inst_24539__$1 = inst_24554;var state_24600__$1 = (function (){var statearr_24675 = state_24600;(statearr_24675[10] = inst_24539__$1);
(statearr_24675[31] = inst_24553);
(statearr_24675[11] = inst_24536__$1);
(statearr_24675[12] = inst_24537__$1);
(statearr_24675[13] = inst_24538__$1);
return statearr_24675;
})();var statearr_24676_24737 = state_24600__$1;(statearr_24676_24737[2] = null);
(statearr_24676_24737[1] = 25);
return cljs.core.constant$keyword$318;
} else
{if((state_val_24601 === 31))
{var inst_24544 = (state_24600[8]);var inst_24545 = (state_24600[2]);var inst_24546 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_24547 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_24544);var state_24600__$1 = (function (){var statearr_24677 = state_24600;(statearr_24677[32] = inst_24546);
(statearr_24677[33] = inst_24545);
return statearr_24677;
})();var statearr_24678_24738 = state_24600__$1;(statearr_24678_24738[2] = inst_24547);
cljs.core.async.impl.ioc_helpers.process_exception(state_24600__$1);
return cljs.core.constant$keyword$318;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_24682 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24682[0] = state_machine__5510__auto__);
(statearr_24682[1] = 1);
return statearr_24682;
});
var state_machine__5510__auto____1 = (function (state_24600){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__(state_24600);if(cljs.core.keyword_identical_QMARK_(result__5512__auto__,cljs.core.constant$keyword$318))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e24683){if((e24683 instanceof Object))
{var ex__5513__auto__ = e24683;var statearr_24684_24739 = state_24600;(statearr_24684_24739[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24600);
return cljs.core.constant$keyword$318;
} else
{if(cljs.core.constant$keyword$307)
{throw e24683;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5511__auto__,cljs.core.constant$keyword$318))
{{
var G__24740 = state_24600;
state_24600 = G__24740;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_24600){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_24600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_24685 = (f__5525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5525__auto__.cljs$core$IFn$_invoke$arity$0() : f__5525__auto__.call(null));(statearr_24685[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___24686);
return statearr_24685;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5526__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_(mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_(mult);
});
cljs.core.async.Mix = (function (){var obj24742 = {};return obj24742;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$325,null,cljs.core.constant$keyword$326,null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$327);var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$326);var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v))))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(cljs.core.constant$keyword$327,chs);var pauses = pick(cljs.core.constant$keyword$325,chs);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$328,solos,cljs.core.constant$keyword$329,pick(cljs.core.constant$keyword$326,chs),cljs.core.constant$keyword$330,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$325)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t24852 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24852 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta24853){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta24853 = meta24853;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24852.cljs$lang$type = true;
cljs.core.async.t24852.cljs$lang$ctorStr = "cljs.core.async/t24852";
cljs.core.async.t24852.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write(writer__3971__auto__,"cljs.core.async/t24852");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24852.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t24852.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24852.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24852.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24852.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24852.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24852.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24852.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24852.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24854){var self__ = this;
var _24854__$1 = this;return self__.meta24853;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t24852.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24854,meta24853__$1){var self__ = this;
var _24854__$1 = this;return (new cljs.core.async.t24852(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta24853__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t24852 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t24852(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta24853){return (new cljs.core.async.t24852(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta24853));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t24852(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5524__auto___24961 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_24919){var state_val_24920 = (state_24919[1]);if((state_val_24920 === 1))
{var inst_24858 = (state_24919[7]);var inst_24858__$1 = calc_state();var inst_24859 = cljs.core.seq_QMARK_(inst_24858__$1);var state_24919__$1 = (function (){var statearr_24921 = state_24919;(statearr_24921[7] = inst_24858__$1);
return statearr_24921;
})();if(inst_24859)
{var statearr_24922_24962 = state_24919__$1;(statearr_24922_24962[1] = 2);
} else
{var statearr_24923_24963 = state_24919__$1;(statearr_24923_24963[1] = 3);
}
return cljs.core.constant$keyword$318;
} else
{if((state_val_24920 === 2))
{var inst_24858 = (state_24919[7]);var inst_24861 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24858);var state_24919__$1 = state_24919;var statearr_24924_24964 = state_24919__$1;(statearr_24924_24964[2] = inst_24861);
(statearr_24924_24964[1] = 4);
return cljs.core.constant$keyword$318;
} else
{if((state_val_24920 === 3))
{var inst_24858 = (state_24919[7]);var state_24919__$1 = state_24919;var statearr_24925_24965 = state_24919__$1;(statearr_24925_24965[2] = inst_24858);
(statearr_24925_24965[1] = 4);
return cljs.core.constant$keyword$318;
} else
{if((state_val_24920 === 4))
{var inst_24858 = (state_24919[7]);var inst_24864 = (state_24919[2]);var inst_24865 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24864,cljs.core.constant$keyword$330);var inst_24866 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24864,cljs.core.constant$keyword$329);var inst_24867 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24864,cljs.core.constant$keyword$328);var inst_24868 = inst_24858;var state_24919__$1 = (function (){var statearr_24926 = state_24919;(statearr_24926[8] = inst_24865);
(statearr_24926[9] = inst_24866);
(statearr_24926[10] = inst_24867);
(statearr_24926[11] = inst_24868);
return statearr_24926;
})();var statearr_24927_24966 = state_24919__$1;(statearr_24927_24966[2] = null);
(statearr_24927_24966[1] = 5);
return cljs.core.constant$keyword$318;
} else
{if((state_val_24920 === 5))
{var inst_24868 = (state_24919[11]);var inst_24871 = cljs.core.seq_QMARK_(inst_24868);var state_24919__$1 = state_24919;if(inst_24871)
{var statearr_24928_24967 = state_24919__$1;(statearr_24928_24967[1] = 7);
} else
{var statearr_24929_24968 = state_24919__$1;(statearr_24929_24968[1] = 8);
}
return cljs.core.constant$keyword$318;
} else
{if((state_val_24920 === 6))
{var inst_24917 = (state_24919[2]);var state_24919__$1 = state_24919;return cljs.core.async.impl.ioc_helpers.return_chan(state_24919__$1,inst_24917);
} else
{if((state_val_24920 === 7))
{var inst_24868 = (state_24919[11]);var inst_24873 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_24868);var state_24919__$1 = state_24919;var statearr_24930_24969 = state_24919__$1;(statearr_24930_24969[2] = inst_24873);
(statearr_24930_24969[1] = 9);
return cljs.core.constant$keyword$318;
} else
{if((state_val_24920 === 8))
{var inst_24868 = (state_24919[11]);var state_24919__$1 = state_24919;var statearr_24931_24970 = state_24919__$1;(statearr_24931_24970[2] = inst_24868);
(statearr_24931_24970[1] = 9);
return cljs.core.constant$keyword$318;
} else
{if((state_val_24920 === 9))
{var inst_24876 = (state_24919[12]);var inst_24876__$1 = (state_24919[2]);var inst_24877 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24876__$1,cljs.core.constant$keyword$330);var inst_24878 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24876__$1,cljs.core.constant$keyword$329);var inst_24879 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_24876__$1,cljs.core.constant$keyword$328);var state_24919__$1 = (function (){var statearr_24932 = state_24919;(statearr_24932[12] = inst_24876__$1);
(statearr_24932[13] = inst_24878);
(statearr_24932[14] = inst_24879);
return statearr_24932;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_24919__$1,10,inst_24877);
} else
{if((state_val_24920 === 10))
{var inst_24884 = (state_24919[15]);var inst_24883 = (state_24919[16]);var inst_24882 = (state_24919[2]);var inst_24883__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24882,0,null);var inst_24884__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24882,1,null);var inst_24885 = (inst_24883__$1 == null);var inst_24886 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24884__$1,change);var inst_24887 = (inst_24885) || (inst_24886);var state_24919__$1 = (function (){var statearr_24933 = state_24919;(statearr_24933[15] = inst_24884__$1);
(statearr_24933[16] = inst_24883__$1);
return statearr_24933;
})();if(cljs.core.truth_(inst_24887))
{var statearr_24934_24971 = state_24919__$1;(statearr_24934_24971[1] = 11);
} else
{var statearr_24935_24972 = state_24919__$1;(statearr_24935_24972[1] = 12);
}
return cljs.core.constant$keyword$318;
} else
{if((state_val_24920 === 11))
{var inst_24883 = (state_24919[16]);var inst_24889 = (inst_24883 == null);var state_24919__$1 = state_24919;if(cljs.core.truth_(inst_24889))
{var statearr_24936_24973 = state_24919__$1;(statearr_24936_24973[1] = 14);
} else
{var statearr_24937_24974 = state_24919__$1;(statearr_24937_24974[1] = 15);
}
return cljs.core.constant$keyword$318;
} else
{if((state_val_24920 === 12))
{var inst_24884 = (state_24919[15]);var inst_24879 = (state_24919[14]);var inst_24898 = (state_24919[17]);var inst_24898__$1 = (inst_24879.cljs$core$IFn$_invoke$arity$1 ? inst_24879.cljs$core$IFn$_invoke$arity$1(inst_24884) : inst_24879.call(null,inst_24884));var state_24919__$1 = (function (){var statearr_24938 = state_24919;(statearr_24938[17] = inst_24898__$1);
return statearr_24938;
})();if(cljs.core.truth_(inst_24898__$1))
{var statearr_24939_24975 = state_24919__$1;(statearr_24939_24975[1] = 17);
} else
{var statearr_24940_24976 = state_24919__$1;(statearr_24940_24976[1] = 18);
}
return cljs.core.constant$keyword$318;
} else
{if((state_val_24920 === 13))
{var inst_24915 = (state_24919[2]);var state_24919__$1 = state_24919;var statearr_24941_24977 = state_24919__$1;(statearr_24941_24977[2] = inst_24915);
(statearr_24941_24977[1] = 6);
return cljs.core.constant$keyword$318;
} else
{if((state_val_24920 === 14))
{var inst_24884 = (state_24919[15]);var inst_24891 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_24884);var state_24919__$1 = state_24919;var statearr_24942_24978 = state_24919__$1;(statearr_24942_24978[2] = inst_24891);
(statearr_24942_24978[1] = 16);
return cljs.core.constant$keyword$318;
} else
{if((state_val_24920 === 15))
{var state_24919__$1 = state_24919;var statearr_24943_24979 = state_24919__$1;(statearr_24943_24979[2] = null);
(statearr_24943_24979[1] = 16);
return cljs.core.constant$keyword$318;
} else
{if((state_val_24920 === 16))
{var inst_24894 = (state_24919[2]);var inst_24895 = calc_state();var inst_24868 = inst_24895;var state_24919__$1 = (function (){var statearr_24944 = state_24919;(statearr_24944[18] = inst_24894);
(statearr_24944[11] = inst_24868);
return statearr_24944;
})();var statearr_24945_24980 = state_24919__$1;(statearr_24945_24980[2] = null);
(statearr_24945_24980[1] = 5);
return cljs.core.constant$keyword$318;
} else
{if((state_val_24920 === 17))
{var inst_24898 = (state_24919[17]);var state_24919__$1 = state_24919;var statearr_24946_24981 = state_24919__$1;(statearr_24946_24981[2] = inst_24898);
(statearr_24946_24981[1] = 19);
return cljs.core.constant$keyword$318;
} else
{if((state_val_24920 === 18))
{var inst_24884 = (state_24919[15]);var inst_24878 = (state_24919[13]);var inst_24879 = (state_24919[14]);var inst_24901 = cljs.core.empty_QMARK_(inst_24879);var inst_24902 = (inst_24878.cljs$core$IFn$_invoke$arity$1 ? inst_24878.cljs$core$IFn$_invoke$arity$1(inst_24884) : inst_24878.call(null,inst_24884));var inst_24903 = cljs.core.not(inst_24902);var inst_24904 = (inst_24901) && (inst_24903);var state_24919__$1 = state_24919;var statearr_24947_24982 = state_24919__$1;(statearr_24947_24982[2] = inst_24904);
(statearr_24947_24982[1] = 19);
return cljs.core.constant$keyword$318;
} else
{if((state_val_24920 === 19))
{var inst_24906 = (state_24919[2]);var state_24919__$1 = state_24919;if(cljs.core.truth_(inst_24906))
{var statearr_24948_24983 = state_24919__$1;(statearr_24948_24983[1] = 20);
} else
{var statearr_24949_24984 = state_24919__$1;(statearr_24949_24984[1] = 21);
}
return cljs.core.constant$keyword$318;
} else
{if((state_val_24920 === 20))
{var inst_24883 = (state_24919[16]);var state_24919__$1 = state_24919;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24919__$1,23,out,inst_24883);
} else
{if((state_val_24920 === 21))
{var state_24919__$1 = state_24919;var statearr_24950_24985 = state_24919__$1;(statearr_24950_24985[2] = null);
(statearr_24950_24985[1] = 22);
return cljs.core.constant$keyword$318;
} else
{if((state_val_24920 === 22))
{var inst_24876 = (state_24919[12]);var inst_24912 = (state_24919[2]);var inst_24868 = inst_24876;var state_24919__$1 = (function (){var statearr_24951 = state_24919;(statearr_24951[19] = inst_24912);
(statearr_24951[11] = inst_24868);
return statearr_24951;
})();var statearr_24952_24986 = state_24919__$1;(statearr_24952_24986[2] = null);
(statearr_24952_24986[1] = 5);
return cljs.core.constant$keyword$318;
} else
{if((state_val_24920 === 23))
{var inst_24909 = (state_24919[2]);var state_24919__$1 = state_24919;var statearr_24953_24987 = state_24919__$1;(statearr_24953_24987[2] = inst_24909);
(statearr_24953_24987[1] = 22);
return cljs.core.constant$keyword$318;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_24957 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24957[0] = state_machine__5510__auto__);
(statearr_24957[1] = 1);
return statearr_24957;
});
var state_machine__5510__auto____1 = (function (state_24919){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__(state_24919);if(cljs.core.keyword_identical_QMARK_(result__5512__auto__,cljs.core.constant$keyword$318))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e24958){if((e24958 instanceof Object))
{var ex__5513__auto__ = e24958;var statearr_24959_24988 = state_24919;(statearr_24959_24988[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_24919);
return cljs.core.constant$keyword$318;
} else
{if(cljs.core.constant$keyword$307)
{throw e24958;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5511__auto__,cljs.core.constant$keyword$318))
{{
var G__24989 = state_24919;
state_24919 = G__24989;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_24919){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_24919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_24960 = (f__5525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5525__auto__.cljs$core$IFn$_invoke$arity$0() : f__5525__auto__.call(null));(statearr_24960[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___24961);
return statearr_24960;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5526__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_(mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_(mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_(mix,mode);
});
cljs.core.async.Pub = (function (){var obj24991 = {};return obj24991;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3391__auto__ = p;if(and__3391__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3391__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4030__auto__ = (((p == null))?null:p);return (function (){var or__3403__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3391__auto__ = p;if(and__3391__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3391__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4030__auto__ = (((p == null))?null:p);return (function (){var or__3403__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3391__auto__ = p;if(and__3391__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3391__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4030__auto__ = (((p == null))?null:p);return (function (){var or__3403__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3391__auto__ = p;if(and__3391__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3391__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4030__auto__ = (((p == null))?null:p);return (function (){var or__3403__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3403__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3403__auto__,mults){
return (function (p1__24992_SHARP_){if(cljs.core.truth_((p1__24992_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__24992_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__24992_SHARP_.call(null,topic))))
{return p1__24992_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__24992_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3403__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t25117 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25117 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta25118){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta25118 = meta25118;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25117.cljs$lang$type = true;
cljs.core.async.t25117.cljs$lang$ctorStr = "cljs.core.async/t25117";
cljs.core.async.t25117.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write(writer__3971__auto__,"cljs.core.async/t25117");
});})(mults,ensure_mult))
;
cljs.core.async.t25117.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t25117.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t25117.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t25117.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t25117.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t25117.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25117.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t25117.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25119){var self__ = this;
var _25119__$1 = this;return self__.meta25118;
});})(mults,ensure_mult))
;
cljs.core.async.t25117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25119,meta25118__$1){var self__ = this;
var _25119__$1 = this;return (new cljs.core.async.t25117(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta25118__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t25117 = ((function (mults,ensure_mult){
return (function __GT_t25117(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25118){return (new cljs.core.async.t25117(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25118));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t25117(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5524__auto___25241 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_25193){var state_val_25194 = (state_25193[1]);if((state_val_25194 === 1))
{var state_25193__$1 = state_25193;var statearr_25195_25242 = state_25193__$1;(statearr_25195_25242[2] = null);
(statearr_25195_25242[1] = 2);
return cljs.core.constant$keyword$318;
} else
{if((state_val_25194 === 2))
{var state_25193__$1 = state_25193;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25193__$1,4,ch);
} else
{if((state_val_25194 === 3))
{var inst_25191 = (state_25193[2]);var state_25193__$1 = state_25193;return cljs.core.async.impl.ioc_helpers.return_chan(state_25193__$1,inst_25191);
} else
{if((state_val_25194 === 4))
{var inst_25122 = (state_25193[7]);var inst_25122__$1 = (state_25193[2]);var inst_25123 = (inst_25122__$1 == null);var state_25193__$1 = (function (){var statearr_25196 = state_25193;(statearr_25196[7] = inst_25122__$1);
return statearr_25196;
})();if(cljs.core.truth_(inst_25123))
{var statearr_25197_25243 = state_25193__$1;(statearr_25197_25243[1] = 5);
} else
{var statearr_25198_25244 = state_25193__$1;(statearr_25198_25244[1] = 6);
}
return cljs.core.constant$keyword$318;
} else
{if((state_val_25194 === 5))
{var inst_25129 = cljs.core.deref(mults);var inst_25130 = cljs.core.vals(inst_25129);var inst_25131 = cljs.core.seq(inst_25130);var inst_25132 = inst_25131;var inst_25133 = null;var inst_25134 = 0;var inst_25135 = 0;var state_25193__$1 = (function (){var statearr_25199 = state_25193;(statearr_25199[8] = inst_25134);
(statearr_25199[9] = inst_25135);
(statearr_25199[10] = inst_25132);
(statearr_25199[11] = inst_25133);
return statearr_25199;
})();var statearr_25200_25245 = state_25193__$1;(statearr_25200_25245[2] = null);
(statearr_25200_25245[1] = 8);
return cljs.core.constant$keyword$318;
} else
{if((state_val_25194 === 6))
{var inst_25172 = (state_25193[12]);var inst_25170 = (state_25193[13]);var inst_25122 = (state_25193[7]);var inst_25170__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_25122) : topic_fn.call(null,inst_25122));var inst_25171 = cljs.core.deref(mults);var inst_25172__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_25171,inst_25170__$1);var state_25193__$1 = (function (){var statearr_25201 = state_25193;(statearr_25201[12] = inst_25172__$1);
(statearr_25201[13] = inst_25170__$1);
return statearr_25201;
})();if(cljs.core.truth_(inst_25172__$1))
{var statearr_25202_25246 = state_25193__$1;(statearr_25202_25246[1] = 19);
} else
{var statearr_25203_25247 = state_25193__$1;(statearr_25203_25247[1] = 20);
}
return cljs.core.constant$keyword$318;
} else
{if((state_val_25194 === 7))
{var inst_25189 = (state_25193[2]);var state_25193__$1 = state_25193;var statearr_25204_25248 = state_25193__$1;(statearr_25204_25248[2] = inst_25189);
(statearr_25204_25248[1] = 3);
return cljs.core.constant$keyword$318;
} else
{if((state_val_25194 === 8))
{var inst_25134 = (state_25193[8]);var inst_25135 = (state_25193[9]);var inst_25137 = (inst_25135 < inst_25134);var inst_25138 = inst_25137;var state_25193__$1 = state_25193;if(cljs.core.truth_(inst_25138))
{var statearr_25208_25249 = state_25193__$1;(statearr_25208_25249[1] = 10);
} else
{var statearr_25209_25250 = state_25193__$1;(statearr_25209_25250[1] = 11);
}
return cljs.core.constant$keyword$318;
} else
{if((state_val_25194 === 9))
{var inst_25168 = (state_25193[2]);var state_25193__$1 = state_25193;var statearr_25210_25251 = state_25193__$1;(statearr_25210_25251[2] = inst_25168);
(statearr_25210_25251[1] = 7);
return cljs.core.constant$keyword$318;
} else
{if((state_val_25194 === 10))
{var inst_25134 = (state_25193[8]);var inst_25135 = (state_25193[9]);var inst_25132 = (state_25193[10]);var inst_25133 = (state_25193[11]);var inst_25140 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_25133,inst_25135);var inst_25141 = cljs.core.async.muxch_STAR_(inst_25140);var inst_25142 = cljs.core.async.close_BANG_(inst_25141);var inst_25143 = (inst_25135 + 1);var tmp25205 = inst_25134;var tmp25206 = inst_25132;var tmp25207 = inst_25133;var inst_25132__$1 = tmp25206;var inst_25133__$1 = tmp25207;var inst_25134__$1 = tmp25205;var inst_25135__$1 = inst_25143;var state_25193__$1 = (function (){var statearr_25211 = state_25193;(statearr_25211[8] = inst_25134__$1);
(statearr_25211[9] = inst_25135__$1);
(statearr_25211[10] = inst_25132__$1);
(statearr_25211[11] = inst_25133__$1);
(statearr_25211[14] = inst_25142);
return statearr_25211;
})();var statearr_25212_25252 = state_25193__$1;(statearr_25212_25252[2] = null);
(statearr_25212_25252[1] = 8);
return cljs.core.constant$keyword$318;
} else
{if((state_val_25194 === 11))
{var inst_25132 = (state_25193[10]);var inst_25146 = (state_25193[15]);var inst_25146__$1 = cljs.core.seq(inst_25132);var state_25193__$1 = (function (){var statearr_25213 = state_25193;(statearr_25213[15] = inst_25146__$1);
return statearr_25213;
})();if(inst_25146__$1)
{var statearr_25214_25253 = state_25193__$1;(statearr_25214_25253[1] = 13);
} else
{var statearr_25215_25254 = state_25193__$1;(statearr_25215_25254[1] = 14);
}
return cljs.core.constant$keyword$318;
} else
{if((state_val_25194 === 12))
{var inst_25166 = (state_25193[2]);var state_25193__$1 = state_25193;var statearr_25216_25255 = state_25193__$1;(statearr_25216_25255[2] = inst_25166);
(statearr_25216_25255[1] = 9);
return cljs.core.constant$keyword$318;
} else
{if((state_val_25194 === 13))
{var inst_25146 = (state_25193[15]);var inst_25148 = cljs.core.chunked_seq_QMARK_(inst_25146);var state_25193__$1 = state_25193;if(inst_25148)
{var statearr_25217_25256 = state_25193__$1;(statearr_25217_25256[1] = 16);
} else
{var statearr_25218_25257 = state_25193__$1;(statearr_25218_25257[1] = 17);
}
return cljs.core.constant$keyword$318;
} else
{if((state_val_25194 === 14))
{var state_25193__$1 = state_25193;var statearr_25219_25258 = state_25193__$1;(statearr_25219_25258[2] = null);
(statearr_25219_25258[1] = 15);
return cljs.core.constant$keyword$318;
} else
{if((state_val_25194 === 15))
{var inst_25164 = (state_25193[2]);var state_25193__$1 = state_25193;var statearr_25220_25259 = state_25193__$1;(statearr_25220_25259[2] = inst_25164);
(statearr_25220_25259[1] = 12);
return cljs.core.constant$keyword$318;
} else
{if((state_val_25194 === 16))
{var inst_25146 = (state_25193[15]);var inst_25150 = cljs.core.chunk_first(inst_25146);var inst_25151 = cljs.core.chunk_rest(inst_25146);var inst_25152 = cljs.core.count(inst_25150);var inst_25132 = inst_25151;var inst_25133 = inst_25150;var inst_25134 = inst_25152;var inst_25135 = 0;var state_25193__$1 = (function (){var statearr_25221 = state_25193;(statearr_25221[8] = inst_25134);
(statearr_25221[9] = inst_25135);
(statearr_25221[10] = inst_25132);
(statearr_25221[11] = inst_25133);
return statearr_25221;
})();var statearr_25222_25260 = state_25193__$1;(statearr_25222_25260[2] = null);
(statearr_25222_25260[1] = 8);
return cljs.core.constant$keyword$318;
} else
{if((state_val_25194 === 17))
{var inst_25146 = (state_25193[15]);var inst_25155 = cljs.core.first(inst_25146);var inst_25156 = cljs.core.async.muxch_STAR_(inst_25155);var inst_25157 = cljs.core.async.close_BANG_(inst_25156);var inst_25158 = cljs.core.next(inst_25146);var inst_25132 = inst_25158;var inst_25133 = null;var inst_25134 = 0;var inst_25135 = 0;var state_25193__$1 = (function (){var statearr_25223 = state_25193;(statearr_25223[8] = inst_25134);
(statearr_25223[9] = inst_25135);
(statearr_25223[10] = inst_25132);
(statearr_25223[11] = inst_25133);
(statearr_25223[16] = inst_25157);
return statearr_25223;
})();var statearr_25224_25261 = state_25193__$1;(statearr_25224_25261[2] = null);
(statearr_25224_25261[1] = 8);
return cljs.core.constant$keyword$318;
} else
{if((state_val_25194 === 18))
{var inst_25161 = (state_25193[2]);var state_25193__$1 = state_25193;var statearr_25225_25262 = state_25193__$1;(statearr_25225_25262[2] = inst_25161);
(statearr_25225_25262[1] = 15);
return cljs.core.constant$keyword$318;
} else
{if((state_val_25194 === 19))
{var state_25193__$1 = state_25193;var statearr_25226_25263 = state_25193__$1;(statearr_25226_25263[2] = null);
(statearr_25226_25263[1] = 24);
return cljs.core.constant$keyword$318;
} else
{if((state_val_25194 === 20))
{var state_25193__$1 = state_25193;var statearr_25227_25264 = state_25193__$1;(statearr_25227_25264[2] = null);
(statearr_25227_25264[1] = 21);
return cljs.core.constant$keyword$318;
} else
{if((state_val_25194 === 21))
{var inst_25186 = (state_25193[2]);var state_25193__$1 = (function (){var statearr_25228 = state_25193;(statearr_25228[17] = inst_25186);
return statearr_25228;
})();var statearr_25229_25265 = state_25193__$1;(statearr_25229_25265[2] = null);
(statearr_25229_25265[1] = 2);
return cljs.core.constant$keyword$318;
} else
{if((state_val_25194 === 22))
{var inst_25183 = (state_25193[2]);var state_25193__$1 = state_25193;var statearr_25230_25266 = state_25193__$1;(statearr_25230_25266[2] = inst_25183);
(statearr_25230_25266[1] = 21);
return cljs.core.constant$keyword$318;
} else
{if((state_val_25194 === 23))
{var inst_25170 = (state_25193[13]);var inst_25174 = (state_25193[2]);var inst_25175 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_25170);var state_25193__$1 = (function (){var statearr_25231 = state_25193;(statearr_25231[18] = inst_25174);
return statearr_25231;
})();var statearr_25232_25267 = state_25193__$1;(statearr_25232_25267[2] = inst_25175);
cljs.core.async.impl.ioc_helpers.process_exception(state_25193__$1);
return cljs.core.constant$keyword$318;
} else
{if((state_val_25194 === 24))
{var inst_25172 = (state_25193[12]);var inst_25122 = (state_25193[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25193,23,Object,null,22);var inst_25179 = cljs.core.async.muxch_STAR_(inst_25172);var state_25193__$1 = state_25193;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25193__$1,25,inst_25179,inst_25122);
} else
{if((state_val_25194 === 25))
{var inst_25181 = (state_25193[2]);var state_25193__$1 = state_25193;var statearr_25233_25268 = state_25193__$1;(statearr_25233_25268[2] = inst_25181);
cljs.core.async.impl.ioc_helpers.process_exception(state_25193__$1);
return cljs.core.constant$keyword$318;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_25237 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25237[0] = state_machine__5510__auto__);
(statearr_25237[1] = 1);
return statearr_25237;
});
var state_machine__5510__auto____1 = (function (state_25193){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__(state_25193);if(cljs.core.keyword_identical_QMARK_(result__5512__auto__,cljs.core.constant$keyword$318))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e25238){if((e25238 instanceof Object))
{var ex__5513__auto__ = e25238;var statearr_25239_25269 = state_25193;(statearr_25239_25269[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25193);
return cljs.core.constant$keyword$318;
} else
{if(cljs.core.constant$keyword$307)
{throw e25238;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5511__auto__,cljs.core.constant$keyword$318))
{{
var G__25270 = state_25193;
state_25193 = G__25270;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_25193){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_25193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_25240 = (f__5525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5525__auto__.cljs$core$IFn$_invoke$arity$0() : f__5525__auto__.call(null));(statearr_25240[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___25241);
return statearr_25240;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5526__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec(chs);var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var cnt = cljs.core.count(chs__$1);var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__5524__auto___25407 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_25377){var state_val_25378 = (state_25377[1]);if((state_val_25378 === 1))
{var state_25377__$1 = state_25377;var statearr_25379_25408 = state_25377__$1;(statearr_25379_25408[2] = null);
(statearr_25379_25408[1] = 2);
return cljs.core.constant$keyword$318;
} else
{if((state_val_25378 === 2))
{var inst_25340 = cljs.core.reset_BANG_(dctr,cnt);var inst_25341 = 0;var state_25377__$1 = (function (){var statearr_25380 = state_25377;(statearr_25380[7] = inst_25341);
(statearr_25380[8] = inst_25340);
return statearr_25380;
})();var statearr_25381_25409 = state_25377__$1;(statearr_25381_25409[2] = null);
(statearr_25381_25409[1] = 4);
return cljs.core.constant$keyword$318;
} else
{if((state_val_25378 === 3))
{var inst_25375 = (state_25377[2]);var state_25377__$1 = state_25377;return cljs.core.async.impl.ioc_helpers.return_chan(state_25377__$1,inst_25375);
} else
{if((state_val_25378 === 4))
{var inst_25341 = (state_25377[7]);var inst_25343 = (inst_25341 < cnt);var state_25377__$1 = state_25377;if(cljs.core.truth_(inst_25343))
{var statearr_25382_25410 = state_25377__$1;(statearr_25382_25410[1] = 6);
} else
{var statearr_25383_25411 = state_25377__$1;(statearr_25383_25411[1] = 7);
}
return cljs.core.constant$keyword$318;
} else
{if((state_val_25378 === 5))
{var inst_25361 = (state_25377[2]);var state_25377__$1 = (function (){var statearr_25384 = state_25377;(statearr_25384[9] = inst_25361);
return statearr_25384;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25377__$1,12,dchan);
} else
{if((state_val_25378 === 6))
{var state_25377__$1 = state_25377;var statearr_25385_25412 = state_25377__$1;(statearr_25385_25412[2] = null);
(statearr_25385_25412[1] = 11);
return cljs.core.constant$keyword$318;
} else
{if((state_val_25378 === 7))
{var state_25377__$1 = state_25377;var statearr_25386_25413 = state_25377__$1;(statearr_25386_25413[2] = null);
(statearr_25386_25413[1] = 8);
return cljs.core.constant$keyword$318;
} else
{if((state_val_25378 === 8))
{var inst_25359 = (state_25377[2]);var state_25377__$1 = state_25377;var statearr_25387_25414 = state_25377__$1;(statearr_25387_25414[2] = inst_25359);
(statearr_25387_25414[1] = 5);
return cljs.core.constant$keyword$318;
} else
{if((state_val_25378 === 9))
{var inst_25341 = (state_25377[7]);var inst_25354 = (state_25377[2]);var inst_25355 = (inst_25341 + 1);var inst_25341__$1 = inst_25355;var state_25377__$1 = (function (){var statearr_25388 = state_25377;(statearr_25388[7] = inst_25341__$1);
(statearr_25388[10] = inst_25354);
return statearr_25388;
})();var statearr_25389_25415 = state_25377__$1;(statearr_25389_25415[2] = null);
(statearr_25389_25415[1] = 4);
return cljs.core.constant$keyword$318;
} else
{if((state_val_25378 === 10))
{var inst_25345 = (state_25377[2]);var inst_25346 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_25377__$1 = (function (){var statearr_25390 = state_25377;(statearr_25390[11] = inst_25345);
return statearr_25390;
})();var statearr_25391_25416 = state_25377__$1;(statearr_25391_25416[2] = inst_25346);
cljs.core.async.impl.ioc_helpers.process_exception(state_25377__$1);
return cljs.core.constant$keyword$318;
} else
{if((state_val_25378 === 11))
{var inst_25341 = (state_25377[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_25377,10,Object,null,9);var inst_25350 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_25341) : chs__$1.call(null,inst_25341));var inst_25351 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_25341) : done.call(null,inst_25341));var inst_25352 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_25350,inst_25351);var state_25377__$1 = state_25377;var statearr_25392_25417 = state_25377__$1;(statearr_25392_25417[2] = inst_25352);
cljs.core.async.impl.ioc_helpers.process_exception(state_25377__$1);
return cljs.core.constant$keyword$318;
} else
{if((state_val_25378 === 12))
{var inst_25363 = (state_25377[12]);var inst_25363__$1 = (state_25377[2]);var inst_25364 = cljs.core.some(cljs.core.nil_QMARK_,inst_25363__$1);var state_25377__$1 = (function (){var statearr_25393 = state_25377;(statearr_25393[12] = inst_25363__$1);
return statearr_25393;
})();if(cljs.core.truth_(inst_25364))
{var statearr_25394_25418 = state_25377__$1;(statearr_25394_25418[1] = 13);
} else
{var statearr_25395_25419 = state_25377__$1;(statearr_25395_25419[1] = 14);
}
return cljs.core.constant$keyword$318;
} else
{if((state_val_25378 === 13))
{var inst_25366 = cljs.core.async.close_BANG_(out);var state_25377__$1 = state_25377;var statearr_25396_25420 = state_25377__$1;(statearr_25396_25420[2] = inst_25366);
(statearr_25396_25420[1] = 15);
return cljs.core.constant$keyword$318;
} else
{if((state_val_25378 === 14))
{var inst_25363 = (state_25377[12]);var inst_25368 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_25363);var state_25377__$1 = state_25377;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25377__$1,16,out,inst_25368);
} else
{if((state_val_25378 === 15))
{var inst_25373 = (state_25377[2]);var state_25377__$1 = state_25377;var statearr_25397_25421 = state_25377__$1;(statearr_25397_25421[2] = inst_25373);
(statearr_25397_25421[1] = 3);
return cljs.core.constant$keyword$318;
} else
{if((state_val_25378 === 16))
{var inst_25370 = (state_25377[2]);var state_25377__$1 = (function (){var statearr_25398 = state_25377;(statearr_25398[13] = inst_25370);
return statearr_25398;
})();var statearr_25399_25422 = state_25377__$1;(statearr_25399_25422[2] = null);
(statearr_25399_25422[1] = 2);
return cljs.core.constant$keyword$318;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_25403 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25403[0] = state_machine__5510__auto__);
(statearr_25403[1] = 1);
return statearr_25403;
});
var state_machine__5510__auto____1 = (function (state_25377){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__(state_25377);if(cljs.core.keyword_identical_QMARK_(result__5512__auto__,cljs.core.constant$keyword$318))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e25404){if((e25404 instanceof Object))
{var ex__5513__auto__ = e25404;var statearr_25405_25423 = state_25377;(statearr_25405_25423[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25377);
return cljs.core.constant$keyword$318;
} else
{if(cljs.core.constant$keyword$307)
{throw e25404;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5511__auto__,cljs.core.constant$keyword$318))
{{
var G__25424 = state_25377;
state_25377 = G__25424;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_25377){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_25377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_25406 = (f__5525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5525__auto__.cljs$core$IFn$_invoke$arity$0() : f__5525__auto__.call(null));(statearr_25406[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___25407);
return statearr_25406;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5526__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5524__auto___25532 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_25508){var state_val_25509 = (state_25508[1]);if((state_val_25509 === 1))
{var inst_25479 = cljs.core.vec(chs);var inst_25480 = inst_25479;var state_25508__$1 = (function (){var statearr_25510 = state_25508;(statearr_25510[7] = inst_25480);
return statearr_25510;
})();var statearr_25511_25533 = state_25508__$1;(statearr_25511_25533[2] = null);
(statearr_25511_25533[1] = 2);
return cljs.core.constant$keyword$318;
} else
{if((state_val_25509 === 2))
{var inst_25480 = (state_25508[7]);var inst_25482 = cljs.core.count(inst_25480);var inst_25483 = (inst_25482 > 0);var state_25508__$1 = state_25508;if(cljs.core.truth_(inst_25483))
{var statearr_25512_25534 = state_25508__$1;(statearr_25512_25534[1] = 4);
} else
{var statearr_25513_25535 = state_25508__$1;(statearr_25513_25535[1] = 5);
}
return cljs.core.constant$keyword$318;
} else
{if((state_val_25509 === 3))
{var inst_25506 = (state_25508[2]);var state_25508__$1 = state_25508;return cljs.core.async.impl.ioc_helpers.return_chan(state_25508__$1,inst_25506);
} else
{if((state_val_25509 === 4))
{var inst_25480 = (state_25508[7]);var state_25508__$1 = state_25508;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_25508__$1,7,inst_25480);
} else
{if((state_val_25509 === 5))
{var inst_25502 = cljs.core.async.close_BANG_(out);var state_25508__$1 = state_25508;var statearr_25514_25536 = state_25508__$1;(statearr_25514_25536[2] = inst_25502);
(statearr_25514_25536[1] = 6);
return cljs.core.constant$keyword$318;
} else
{if((state_val_25509 === 6))
{var inst_25504 = (state_25508[2]);var state_25508__$1 = state_25508;var statearr_25515_25537 = state_25508__$1;(statearr_25515_25537[2] = inst_25504);
(statearr_25515_25537[1] = 3);
return cljs.core.constant$keyword$318;
} else
{if((state_val_25509 === 7))
{var inst_25488 = (state_25508[8]);var inst_25487 = (state_25508[9]);var inst_25487__$1 = (state_25508[2]);var inst_25488__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25487__$1,0,null);var inst_25489 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_25487__$1,1,null);var inst_25490 = (inst_25488__$1 == null);var state_25508__$1 = (function (){var statearr_25516 = state_25508;(statearr_25516[10] = inst_25489);
(statearr_25516[8] = inst_25488__$1);
(statearr_25516[9] = inst_25487__$1);
return statearr_25516;
})();if(cljs.core.truth_(inst_25490))
{var statearr_25517_25538 = state_25508__$1;(statearr_25517_25538[1] = 8);
} else
{var statearr_25518_25539 = state_25508__$1;(statearr_25518_25539[1] = 9);
}
return cljs.core.constant$keyword$318;
} else
{if((state_val_25509 === 8))
{var inst_25489 = (state_25508[10]);var inst_25488 = (state_25508[8]);var inst_25487 = (state_25508[9]);var inst_25480 = (state_25508[7]);var inst_25492 = (function (){var c = inst_25489;var v = inst_25488;var vec__25485 = inst_25487;var cs = inst_25480;return ((function (c,v,vec__25485,cs,inst_25489,inst_25488,inst_25487,inst_25480,state_val_25509){
return (function (p1__25425_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__25425_SHARP_);
});
;})(c,v,vec__25485,cs,inst_25489,inst_25488,inst_25487,inst_25480,state_val_25509))
})();var inst_25493 = cljs.core.filterv(inst_25492,inst_25480);var inst_25480__$1 = inst_25493;var state_25508__$1 = (function (){var statearr_25519 = state_25508;(statearr_25519[7] = inst_25480__$1);
return statearr_25519;
})();var statearr_25520_25540 = state_25508__$1;(statearr_25520_25540[2] = null);
(statearr_25520_25540[1] = 2);
return cljs.core.constant$keyword$318;
} else
{if((state_val_25509 === 9))
{var inst_25488 = (state_25508[8]);var state_25508__$1 = state_25508;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25508__$1,11,out,inst_25488);
} else
{if((state_val_25509 === 10))
{var inst_25500 = (state_25508[2]);var state_25508__$1 = state_25508;var statearr_25522_25541 = state_25508__$1;(statearr_25522_25541[2] = inst_25500);
(statearr_25522_25541[1] = 6);
return cljs.core.constant$keyword$318;
} else
{if((state_val_25509 === 11))
{var inst_25480 = (state_25508[7]);var inst_25497 = (state_25508[2]);var tmp25521 = inst_25480;var inst_25480__$1 = tmp25521;var state_25508__$1 = (function (){var statearr_25523 = state_25508;(statearr_25523[11] = inst_25497);
(statearr_25523[7] = inst_25480__$1);
return statearr_25523;
})();var statearr_25524_25542 = state_25508__$1;(statearr_25524_25542[2] = null);
(statearr_25524_25542[1] = 2);
return cljs.core.constant$keyword$318;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_25528 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25528[0] = state_machine__5510__auto__);
(statearr_25528[1] = 1);
return statearr_25528;
});
var state_machine__5510__auto____1 = (function (state_25508){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__(state_25508);if(cljs.core.keyword_identical_QMARK_(result__5512__auto__,cljs.core.constant$keyword$318))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e25529){if((e25529 instanceof Object))
{var ex__5513__auto__ = e25529;var statearr_25530_25543 = state_25508;(statearr_25530_25543[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25508);
return cljs.core.constant$keyword$318;
} else
{if(cljs.core.constant$keyword$307)
{throw e25529;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5511__auto__,cljs.core.constant$keyword$318))
{{
var G__25544 = state_25508;
state_25508 = G__25544;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_25508){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_25508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_25531 = (f__5525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5525__auto__.cljs$core$IFn$_invoke$arity$0() : f__5525__auto__.call(null));(statearr_25531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___25532);
return statearr_25531;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5526__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5524__auto___25637 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_25614){var state_val_25615 = (state_25614[1]);if((state_val_25615 === 1))
{var inst_25591 = 0;var state_25614__$1 = (function (){var statearr_25616 = state_25614;(statearr_25616[7] = inst_25591);
return statearr_25616;
})();var statearr_25617_25638 = state_25614__$1;(statearr_25617_25638[2] = null);
(statearr_25617_25638[1] = 2);
return cljs.core.constant$keyword$318;
} else
{if((state_val_25615 === 2))
{var inst_25591 = (state_25614[7]);var inst_25593 = (inst_25591 < n);var state_25614__$1 = state_25614;if(cljs.core.truth_(inst_25593))
{var statearr_25618_25639 = state_25614__$1;(statearr_25618_25639[1] = 4);
} else
{var statearr_25619_25640 = state_25614__$1;(statearr_25619_25640[1] = 5);
}
return cljs.core.constant$keyword$318;
} else
{if((state_val_25615 === 3))
{var inst_25611 = (state_25614[2]);var inst_25612 = cljs.core.async.close_BANG_(out);var state_25614__$1 = (function (){var statearr_25620 = state_25614;(statearr_25620[8] = inst_25611);
return statearr_25620;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_25614__$1,inst_25612);
} else
{if((state_val_25615 === 4))
{var state_25614__$1 = state_25614;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25614__$1,7,ch);
} else
{if((state_val_25615 === 5))
{var state_25614__$1 = state_25614;var statearr_25621_25641 = state_25614__$1;(statearr_25621_25641[2] = null);
(statearr_25621_25641[1] = 6);
return cljs.core.constant$keyword$318;
} else
{if((state_val_25615 === 6))
{var inst_25609 = (state_25614[2]);var state_25614__$1 = state_25614;var statearr_25622_25642 = state_25614__$1;(statearr_25622_25642[2] = inst_25609);
(statearr_25622_25642[1] = 3);
return cljs.core.constant$keyword$318;
} else
{if((state_val_25615 === 7))
{var inst_25596 = (state_25614[9]);var inst_25596__$1 = (state_25614[2]);var inst_25597 = (inst_25596__$1 == null);var inst_25598 = cljs.core.not(inst_25597);var state_25614__$1 = (function (){var statearr_25623 = state_25614;(statearr_25623[9] = inst_25596__$1);
return statearr_25623;
})();if(inst_25598)
{var statearr_25624_25643 = state_25614__$1;(statearr_25624_25643[1] = 8);
} else
{var statearr_25625_25644 = state_25614__$1;(statearr_25625_25644[1] = 9);
}
return cljs.core.constant$keyword$318;
} else
{if((state_val_25615 === 8))
{var inst_25596 = (state_25614[9]);var state_25614__$1 = state_25614;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25614__$1,11,out,inst_25596);
} else
{if((state_val_25615 === 9))
{var state_25614__$1 = state_25614;var statearr_25626_25645 = state_25614__$1;(statearr_25626_25645[2] = null);
(statearr_25626_25645[1] = 10);
return cljs.core.constant$keyword$318;
} else
{if((state_val_25615 === 10))
{var inst_25606 = (state_25614[2]);var state_25614__$1 = state_25614;var statearr_25627_25646 = state_25614__$1;(statearr_25627_25646[2] = inst_25606);
(statearr_25627_25646[1] = 6);
return cljs.core.constant$keyword$318;
} else
{if((state_val_25615 === 11))
{var inst_25591 = (state_25614[7]);var inst_25601 = (state_25614[2]);var inst_25602 = (inst_25591 + 1);var inst_25591__$1 = inst_25602;var state_25614__$1 = (function (){var statearr_25628 = state_25614;(statearr_25628[7] = inst_25591__$1);
(statearr_25628[10] = inst_25601);
return statearr_25628;
})();var statearr_25629_25647 = state_25614__$1;(statearr_25629_25647[2] = null);
(statearr_25629_25647[1] = 2);
return cljs.core.constant$keyword$318;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_25633 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25633[0] = state_machine__5510__auto__);
(statearr_25633[1] = 1);
return statearr_25633;
});
var state_machine__5510__auto____1 = (function (state_25614){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__(state_25614);if(cljs.core.keyword_identical_QMARK_(result__5512__auto__,cljs.core.constant$keyword$318))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e25634){if((e25634 instanceof Object))
{var ex__5513__auto__ = e25634;var statearr_25635_25648 = state_25614;(statearr_25635_25648[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25614);
return cljs.core.constant$keyword$318;
} else
{if(cljs.core.constant$keyword$307)
{throw e25634;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5511__auto__,cljs.core.constant$keyword$318))
{{
var G__25649 = state_25614;
state_25614 = G__25649;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_25614){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_25614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_25636 = (f__5525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5525__auto__.cljs$core$IFn$_invoke$arity$0() : f__5525__auto__.call(null));(statearr_25636[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___25637);
return statearr_25636;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5526__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5524__auto___25746 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_25721){var state_val_25722 = (state_25721[1]);if((state_val_25722 === 1))
{var inst_25698 = null;var state_25721__$1 = (function (){var statearr_25723 = state_25721;(statearr_25723[7] = inst_25698);
return statearr_25723;
})();var statearr_25724_25747 = state_25721__$1;(statearr_25724_25747[2] = null);
(statearr_25724_25747[1] = 2);
return cljs.core.constant$keyword$318;
} else
{if((state_val_25722 === 2))
{var state_25721__$1 = state_25721;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25721__$1,4,ch);
} else
{if((state_val_25722 === 3))
{var inst_25718 = (state_25721[2]);var inst_25719 = cljs.core.async.close_BANG_(out);var state_25721__$1 = (function (){var statearr_25725 = state_25721;(statearr_25725[8] = inst_25718);
return statearr_25725;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_25721__$1,inst_25719);
} else
{if((state_val_25722 === 4))
{var inst_25701 = (state_25721[9]);var inst_25701__$1 = (state_25721[2]);var inst_25702 = (inst_25701__$1 == null);var inst_25703 = cljs.core.not(inst_25702);var state_25721__$1 = (function (){var statearr_25726 = state_25721;(statearr_25726[9] = inst_25701__$1);
return statearr_25726;
})();if(inst_25703)
{var statearr_25727_25748 = state_25721__$1;(statearr_25727_25748[1] = 5);
} else
{var statearr_25728_25749 = state_25721__$1;(statearr_25728_25749[1] = 6);
}
return cljs.core.constant$keyword$318;
} else
{if((state_val_25722 === 5))
{var inst_25698 = (state_25721[7]);var inst_25701 = (state_25721[9]);var inst_25705 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25701,inst_25698);var state_25721__$1 = state_25721;if(inst_25705)
{var statearr_25729_25750 = state_25721__$1;(statearr_25729_25750[1] = 8);
} else
{var statearr_25730_25751 = state_25721__$1;(statearr_25730_25751[1] = 9);
}
return cljs.core.constant$keyword$318;
} else
{if((state_val_25722 === 6))
{var state_25721__$1 = state_25721;var statearr_25732_25752 = state_25721__$1;(statearr_25732_25752[2] = null);
(statearr_25732_25752[1] = 7);
return cljs.core.constant$keyword$318;
} else
{if((state_val_25722 === 7))
{var inst_25716 = (state_25721[2]);var state_25721__$1 = state_25721;var statearr_25733_25753 = state_25721__$1;(statearr_25733_25753[2] = inst_25716);
(statearr_25733_25753[1] = 3);
return cljs.core.constant$keyword$318;
} else
{if((state_val_25722 === 8))
{var inst_25698 = (state_25721[7]);var tmp25731 = inst_25698;var inst_25698__$1 = tmp25731;var state_25721__$1 = (function (){var statearr_25734 = state_25721;(statearr_25734[7] = inst_25698__$1);
return statearr_25734;
})();var statearr_25735_25754 = state_25721__$1;(statearr_25735_25754[2] = null);
(statearr_25735_25754[1] = 2);
return cljs.core.constant$keyword$318;
} else
{if((state_val_25722 === 9))
{var inst_25701 = (state_25721[9]);var state_25721__$1 = state_25721;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25721__$1,11,out,inst_25701);
} else
{if((state_val_25722 === 10))
{var inst_25713 = (state_25721[2]);var state_25721__$1 = state_25721;var statearr_25736_25755 = state_25721__$1;(statearr_25736_25755[2] = inst_25713);
(statearr_25736_25755[1] = 7);
return cljs.core.constant$keyword$318;
} else
{if((state_val_25722 === 11))
{var inst_25701 = (state_25721[9]);var inst_25710 = (state_25721[2]);var inst_25698 = inst_25701;var state_25721__$1 = (function (){var statearr_25737 = state_25721;(statearr_25737[7] = inst_25698);
(statearr_25737[10] = inst_25710);
return statearr_25737;
})();var statearr_25738_25756 = state_25721__$1;(statearr_25738_25756[2] = null);
(statearr_25738_25756[1] = 2);
return cljs.core.constant$keyword$318;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_25742 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_25742[0] = state_machine__5510__auto__);
(statearr_25742[1] = 1);
return statearr_25742;
});
var state_machine__5510__auto____1 = (function (state_25721){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__(state_25721);if(cljs.core.keyword_identical_QMARK_(result__5512__auto__,cljs.core.constant$keyword$318))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e25743){if((e25743 instanceof Object))
{var ex__5513__auto__ = e25743;var statearr_25744_25757 = state_25721;(statearr_25744_25757[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25721);
return cljs.core.constant$keyword$318;
} else
{if(cljs.core.constant$keyword$307)
{throw e25743;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5511__auto__,cljs.core.constant$keyword$318))
{{
var G__25758 = state_25721;
state_25721 = G__25758;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_25721){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_25721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_25745 = (f__5525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5525__auto__.cljs$core$IFn$_invoke$arity$0() : f__5525__auto__.call(null));(statearr_25745[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___25746);
return statearr_25745;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5526__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5524__auto___25893 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_25863){var state_val_25864 = (state_25863[1]);if((state_val_25864 === 1))
{var inst_25826 = (new Array(n));var inst_25827 = inst_25826;var inst_25828 = 0;var state_25863__$1 = (function (){var statearr_25865 = state_25863;(statearr_25865[7] = inst_25827);
(statearr_25865[8] = inst_25828);
return statearr_25865;
})();var statearr_25866_25894 = state_25863__$1;(statearr_25866_25894[2] = null);
(statearr_25866_25894[1] = 2);
return cljs.core.constant$keyword$318;
} else
{if((state_val_25864 === 2))
{var state_25863__$1 = state_25863;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25863__$1,4,ch);
} else
{if((state_val_25864 === 3))
{var inst_25861 = (state_25863[2]);var state_25863__$1 = state_25863;return cljs.core.async.impl.ioc_helpers.return_chan(state_25863__$1,inst_25861);
} else
{if((state_val_25864 === 4))
{var inst_25831 = (state_25863[9]);var inst_25831__$1 = (state_25863[2]);var inst_25832 = (inst_25831__$1 == null);var inst_25833 = cljs.core.not(inst_25832);var state_25863__$1 = (function (){var statearr_25867 = state_25863;(statearr_25867[9] = inst_25831__$1);
return statearr_25867;
})();if(inst_25833)
{var statearr_25868_25895 = state_25863__$1;(statearr_25868_25895[1] = 5);
} else
{var statearr_25869_25896 = state_25863__$1;(statearr_25869_25896[1] = 6);
}
return cljs.core.constant$keyword$318;
} else
{if((state_val_25864 === 5))
{var inst_25827 = (state_25863[7]);var inst_25828 = (state_25863[8]);var inst_25836 = (state_25863[10]);var inst_25831 = (state_25863[9]);var inst_25835 = (inst_25827[inst_25828] = inst_25831);var inst_25836__$1 = (inst_25828 + 1);var inst_25837 = (inst_25836__$1 < n);var state_25863__$1 = (function (){var statearr_25870 = state_25863;(statearr_25870[11] = inst_25835);
(statearr_25870[10] = inst_25836__$1);
return statearr_25870;
})();if(cljs.core.truth_(inst_25837))
{var statearr_25871_25897 = state_25863__$1;(statearr_25871_25897[1] = 8);
} else
{var statearr_25872_25898 = state_25863__$1;(statearr_25872_25898[1] = 9);
}
return cljs.core.constant$keyword$318;
} else
{if((state_val_25864 === 6))
{var inst_25828 = (state_25863[8]);var inst_25849 = (inst_25828 > 0);var state_25863__$1 = state_25863;if(cljs.core.truth_(inst_25849))
{var statearr_25874_25899 = state_25863__$1;(statearr_25874_25899[1] = 12);
} else
{var statearr_25875_25900 = state_25863__$1;(statearr_25875_25900[1] = 13);
}
return cljs.core.constant$keyword$318;
} else
{if((state_val_25864 === 7))
{var inst_25859 = (state_25863[2]);var state_25863__$1 = state_25863;var statearr_25876_25901 = state_25863__$1;(statearr_25876_25901[2] = inst_25859);
(statearr_25876_25901[1] = 3);
return cljs.core.constant$keyword$318;
} else
{if((state_val_25864 === 8))
{var inst_25827 = (state_25863[7]);var inst_25836 = (state_25863[10]);var tmp25873 = inst_25827;var inst_25827__$1 = tmp25873;var inst_25828 = inst_25836;var state_25863__$1 = (function (){var statearr_25877 = state_25863;(statearr_25877[7] = inst_25827__$1);
(statearr_25877[8] = inst_25828);
return statearr_25877;
})();var statearr_25878_25902 = state_25863__$1;(statearr_25878_25902[2] = null);
(statearr_25878_25902[1] = 2);
return cljs.core.constant$keyword$318;
} else
{if((state_val_25864 === 9))
{var inst_25827 = (state_25863[7]);var inst_25841 = cljs.core.vec(inst_25827);var state_25863__$1 = state_25863;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25863__$1,11,out,inst_25841);
} else
{if((state_val_25864 === 10))
{var inst_25847 = (state_25863[2]);var state_25863__$1 = state_25863;var statearr_25879_25903 = state_25863__$1;(statearr_25879_25903[2] = inst_25847);
(statearr_25879_25903[1] = 7);
return cljs.core.constant$keyword$318;
} else
{if((state_val_25864 === 11))
{var inst_25843 = (state_25863[2]);var inst_25844 = (new Array(n));var inst_25827 = inst_25844;var inst_25828 = 0;var state_25863__$1 = (function (){var statearr_25880 = state_25863;(statearr_25880[7] = inst_25827);
(statearr_25880[8] = inst_25828);
(statearr_25880[12] = inst_25843);
return statearr_25880;
})();var statearr_25881_25904 = state_25863__$1;(statearr_25881_25904[2] = null);
(statearr_25881_25904[1] = 2);
return cljs.core.constant$keyword$318;
} else
{if((state_val_25864 === 12))
{var inst_25827 = (state_25863[7]);var inst_25851 = cljs.core.vec(inst_25827);var state_25863__$1 = state_25863;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25863__$1,15,out,inst_25851);
} else
{if((state_val_25864 === 13))
{var state_25863__$1 = state_25863;var statearr_25882_25905 = state_25863__$1;(statearr_25882_25905[2] = null);
(statearr_25882_25905[1] = 14);
return cljs.core.constant$keyword$318;
} else
{if((state_val_25864 === 14))
{var inst_25856 = (state_25863[2]);var inst_25857 = cljs.core.async.close_BANG_(out);var state_25863__$1 = (function (){var statearr_25883 = state_25863;(statearr_25883[13] = inst_25856);
return statearr_25883;
})();var statearr_25884_25906 = state_25863__$1;(statearr_25884_25906[2] = inst_25857);
(statearr_25884_25906[1] = 7);
return cljs.core.constant$keyword$318;
} else
{if((state_val_25864 === 15))
{var inst_25853 = (state_25863[2]);var state_25863__$1 = state_25863;var statearr_25885_25907 = state_25863__$1;(statearr_25885_25907[2] = inst_25853);
(statearr_25885_25907[1] = 14);
return cljs.core.constant$keyword$318;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_25889 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25889[0] = state_machine__5510__auto__);
(statearr_25889[1] = 1);
return statearr_25889;
});
var state_machine__5510__auto____1 = (function (state_25863){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__(state_25863);if(cljs.core.keyword_identical_QMARK_(result__5512__auto__,cljs.core.constant$keyword$318))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e25890){if((e25890 instanceof Object))
{var ex__5513__auto__ = e25890;var statearr_25891_25908 = state_25863;(statearr_25891_25908[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_25863);
return cljs.core.constant$keyword$318;
} else
{if(cljs.core.constant$keyword$307)
{throw e25890;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5511__auto__,cljs.core.constant$keyword$318))
{{
var G__25909 = state_25863;
state_25863 = G__25909;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_25863){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_25863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_25892 = (f__5525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5525__auto__.cljs$core$IFn$_invoke$arity$0() : f__5525__auto__.call(null));(statearr_25892[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___25893);
return statearr_25892;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5526__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__5524__auto___26052 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_26022){var state_val_26023 = (state_26022[1]);if((state_val_26023 === 1))
{var inst_25981 = [];var inst_25982 = inst_25981;var inst_25983 = cljs.core.constant$keyword$331;var state_26022__$1 = (function (){var statearr_26024 = state_26022;(statearr_26024[7] = inst_25983);
(statearr_26024[8] = inst_25982);
return statearr_26024;
})();var statearr_26025_26053 = state_26022__$1;(statearr_26025_26053[2] = null);
(statearr_26025_26053[1] = 2);
return cljs.core.constant$keyword$318;
} else
{if((state_val_26023 === 2))
{var state_26022__$1 = state_26022;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26022__$1,4,ch);
} else
{if((state_val_26023 === 3))
{var inst_26020 = (state_26022[2]);var state_26022__$1 = state_26022;return cljs.core.async.impl.ioc_helpers.return_chan(state_26022__$1,inst_26020);
} else
{if((state_val_26023 === 4))
{var inst_25986 = (state_26022[9]);var inst_25986__$1 = (state_26022[2]);var inst_25987 = (inst_25986__$1 == null);var inst_25988 = cljs.core.not(inst_25987);var state_26022__$1 = (function (){var statearr_26026 = state_26022;(statearr_26026[9] = inst_25986__$1);
return statearr_26026;
})();if(inst_25988)
{var statearr_26027_26054 = state_26022__$1;(statearr_26027_26054[1] = 5);
} else
{var statearr_26028_26055 = state_26022__$1;(statearr_26028_26055[1] = 6);
}
return cljs.core.constant$keyword$318;
} else
{if((state_val_26023 === 5))
{var inst_25986 = (state_26022[9]);var inst_25983 = (state_26022[7]);var inst_25990 = (state_26022[10]);var inst_25990__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_25986) : f.call(null,inst_25986));var inst_25991 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_25990__$1,inst_25983);var inst_25992 = cljs.core.keyword_identical_QMARK_(inst_25983,cljs.core.constant$keyword$331);var inst_25993 = (inst_25991) || (inst_25992);var state_26022__$1 = (function (){var statearr_26029 = state_26022;(statearr_26029[10] = inst_25990__$1);
return statearr_26029;
})();if(cljs.core.truth_(inst_25993))
{var statearr_26030_26056 = state_26022__$1;(statearr_26030_26056[1] = 8);
} else
{var statearr_26031_26057 = state_26022__$1;(statearr_26031_26057[1] = 9);
}
return cljs.core.constant$keyword$318;
} else
{if((state_val_26023 === 6))
{var inst_25982 = (state_26022[8]);var inst_26007 = inst_25982.length;var inst_26008 = (inst_26007 > 0);var state_26022__$1 = state_26022;if(cljs.core.truth_(inst_26008))
{var statearr_26033_26058 = state_26022__$1;(statearr_26033_26058[1] = 12);
} else
{var statearr_26034_26059 = state_26022__$1;(statearr_26034_26059[1] = 13);
}
return cljs.core.constant$keyword$318;
} else
{if((state_val_26023 === 7))
{var inst_26018 = (state_26022[2]);var state_26022__$1 = state_26022;var statearr_26035_26060 = state_26022__$1;(statearr_26035_26060[2] = inst_26018);
(statearr_26035_26060[1] = 3);
return cljs.core.constant$keyword$318;
} else
{if((state_val_26023 === 8))
{var inst_25986 = (state_26022[9]);var inst_25982 = (state_26022[8]);var inst_25990 = (state_26022[10]);var inst_25995 = inst_25982.push(inst_25986);var tmp26032 = inst_25982;var inst_25982__$1 = tmp26032;var inst_25983 = inst_25990;var state_26022__$1 = (function (){var statearr_26036 = state_26022;(statearr_26036[7] = inst_25983);
(statearr_26036[8] = inst_25982__$1);
(statearr_26036[11] = inst_25995);
return statearr_26036;
})();var statearr_26037_26061 = state_26022__$1;(statearr_26037_26061[2] = null);
(statearr_26037_26061[1] = 2);
return cljs.core.constant$keyword$318;
} else
{if((state_val_26023 === 9))
{var inst_25982 = (state_26022[8]);var inst_25998 = cljs.core.vec(inst_25982);var state_26022__$1 = state_26022;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26022__$1,11,out,inst_25998);
} else
{if((state_val_26023 === 10))
{var inst_26005 = (state_26022[2]);var state_26022__$1 = state_26022;var statearr_26038_26062 = state_26022__$1;(statearr_26038_26062[2] = inst_26005);
(statearr_26038_26062[1] = 7);
return cljs.core.constant$keyword$318;
} else
{if((state_val_26023 === 11))
{var inst_25986 = (state_26022[9]);var inst_25990 = (state_26022[10]);var inst_26000 = (state_26022[2]);var inst_26001 = [];var inst_26002 = inst_26001.push(inst_25986);var inst_25982 = inst_26001;var inst_25983 = inst_25990;var state_26022__$1 = (function (){var statearr_26039 = state_26022;(statearr_26039[7] = inst_25983);
(statearr_26039[8] = inst_25982);
(statearr_26039[12] = inst_26002);
(statearr_26039[13] = inst_26000);
return statearr_26039;
})();var statearr_26040_26063 = state_26022__$1;(statearr_26040_26063[2] = null);
(statearr_26040_26063[1] = 2);
return cljs.core.constant$keyword$318;
} else
{if((state_val_26023 === 12))
{var inst_25982 = (state_26022[8]);var inst_26010 = cljs.core.vec(inst_25982);var state_26022__$1 = state_26022;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26022__$1,15,out,inst_26010);
} else
{if((state_val_26023 === 13))
{var state_26022__$1 = state_26022;var statearr_26041_26064 = state_26022__$1;(statearr_26041_26064[2] = null);
(statearr_26041_26064[1] = 14);
return cljs.core.constant$keyword$318;
} else
{if((state_val_26023 === 14))
{var inst_26015 = (state_26022[2]);var inst_26016 = cljs.core.async.close_BANG_(out);var state_26022__$1 = (function (){var statearr_26042 = state_26022;(statearr_26042[14] = inst_26015);
return statearr_26042;
})();var statearr_26043_26065 = state_26022__$1;(statearr_26043_26065[2] = inst_26016);
(statearr_26043_26065[1] = 7);
return cljs.core.constant$keyword$318;
} else
{if((state_val_26023 === 15))
{var inst_26012 = (state_26022[2]);var state_26022__$1 = state_26022;var statearr_26044_26066 = state_26022__$1;(statearr_26044_26066[2] = inst_26012);
(statearr_26044_26066[1] = 14);
return cljs.core.constant$keyword$318;
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_26048 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26048[0] = state_machine__5510__auto__);
(statearr_26048[1] = 1);
return statearr_26048;
});
var state_machine__5510__auto____1 = (function (state_26022){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__(state_26022);if(cljs.core.keyword_identical_QMARK_(result__5512__auto__,cljs.core.constant$keyword$318))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e26049){if((e26049 instanceof Object))
{var ex__5513__auto__ = e26049;var statearr_26050_26067 = state_26022;(statearr_26050_26067[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_26022);
return cljs.core.constant$keyword$318;
} else
{if(cljs.core.constant$keyword$307)
{throw e26049;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5511__auto__,cljs.core.constant$keyword$318))
{{
var G__26068 = state_26022;
state_26022 = G__26068;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_26022){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_26022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_26051 = (f__5525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5525__auto__.cljs$core$IFn$_invoke$arity$0() : f__5525__auto__.call(null));(statearr_26051[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___26052);
return statearr_26051;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5526__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
