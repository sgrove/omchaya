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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11846 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11846 = (function (f,fn_handler,meta11847){
this.f = f;
this.fn_handler = fn_handler;
this.meta11847 = meta11847;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11846.cljs$lang$type = true;
cljs.core.async.t11846.cljs$lang$ctorStr = "cljs.core.async/t11846";
cljs.core.async.t11846.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t11846");
});
cljs.core.async.t11846.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11846.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11846.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11846.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11848){var self__ = this;
var _11848__$1 = this;return self__.meta11847;
});
cljs.core.async.t11846.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11848,meta11847__$1){var self__ = this;
var _11848__$1 = this;return (new cljs.core.async.t11846(self__.f,self__.fn_handler,meta11847__$1));
});
cljs.core.async.__GT_t11846 = (function __GT_t11846(f__$1,fn_handler__$1,meta11847){return (new cljs.core.async.t11846(f__$1,fn_handler__$1,meta11847));
});
}
return (new cljs.core.async.t11846(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11850 = buff;if(G__11850)
{var bit__4053__auto__ = null;if(cljs.core.truth_((function (){var or__3403__auto__ = bit__4053__auto__;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return G__11850.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11850.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11850);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11850);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
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
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
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
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_11851 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11851);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_11851);
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
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
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
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3391__auto__ = ret;if(cljs.core.truth_(and__3391__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3391__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
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
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4251__auto___11852 = n;var x_11853 = 0;while(true){
if((x_11853 < n__4251__auto___11852))
{(a[x_11853] = 0);
{
var G__11854 = (x_11853 + 1);
x_11853 = G__11854;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__11855 = (i + 1);
i = G__11855;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11859 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11859 = (function (flag,alt_flag,meta11860){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11860 = meta11860;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11859.cljs$lang$type = true;
cljs.core.async.t11859.cljs$lang$ctorStr = "cljs.core.async/t11859";
cljs.core.async.t11859.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t11859");
});
cljs.core.async.t11859.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11859.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t11859.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t11859.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11861){var self__ = this;
var _11861__$1 = this;return self__.meta11860;
});
cljs.core.async.t11859.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11861,meta11860__$1){var self__ = this;
var _11861__$1 = this;return (new cljs.core.async.t11859(self__.flag,self__.alt_flag,meta11860__$1));
});
cljs.core.async.__GT_t11859 = (function __GT_t11859(flag__$1,alt_flag__$1,meta11860){return (new cljs.core.async.t11859(flag__$1,alt_flag__$1,meta11860));
});
}
return (new cljs.core.async.t11859(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11865 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11865 = (function (cb,flag,alt_handler,meta11866){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11866 = meta11866;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11865.cljs$lang$type = true;
cljs.core.async.t11865.cljs$lang$ctorStr = "cljs.core.async/t11865";
cljs.core.async.t11865.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t11865");
});
cljs.core.async.t11865.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11865.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11865.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11865.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11867){var self__ = this;
var _11867__$1 = this;return self__.meta11866;
});
cljs.core.async.t11865.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11867,meta11866__$1){var self__ = this;
var _11867__$1 = this;return (new cljs.core.async.t11865(self__.cb,self__.flag,self__.alt_handler,meta11866__$1));
});
cljs.core.async.__GT_t11865 = (function __GT_t11865(cb__$1,flag__$1,alt_handler__$1,meta11866){return (new cljs.core.async.t11865(cb__$1,flag__$1,alt_handler__$1,meta11866));
});
}
return (new cljs.core.async.t11865(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11868_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11868_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3403__auto__ = wport;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__11869 = (i + 1);
i = G__11869;
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
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3391__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3391__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3391__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
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
var alts_BANG___delegate = function (ports,p__11870){var map__11872 = p__11870;var map__11872__$1 = ((cljs.core.seq_QMARK_.call(null,map__11872))?cljs.core.apply.call(null,cljs.core.hash_map,map__11872):map__11872);var opts = map__11872__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__11870 = null;if (arguments.length > 1) {
  p__11870 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11870);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11873){
var ports = cljs.core.first(arglist__11873);
var p__11870 = cljs.core.rest(arglist__11873);
return alts_BANG___delegate(ports,p__11870);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t11881 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11881 = (function (ch,f,map_LT_,meta11882){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11882 = meta11882;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11881.cljs$lang$type = true;
cljs.core.async.t11881.cljs$lang$ctorStr = "cljs.core.async/t11881";
cljs.core.async.t11881.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t11881");
});
cljs.core.async.t11881.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11881.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t11881.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11881.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t11884 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11884 = (function (fn1,_,meta11882,ch,f,map_LT_,meta11885){
this.fn1 = fn1;
this._ = _;
this.meta11882 = meta11882;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11885 = meta11885;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11884.cljs$lang$type = true;
cljs.core.async.t11884.cljs$lang$ctorStr = "cljs.core.async/t11884";
cljs.core.async.t11884.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t11884");
});
cljs.core.async.t11884.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11884.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t11884.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t11884.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__11874_SHARP_){return f1.call(null,(((p1__11874_SHARP_ == null))?null:self__.f.call(null,p1__11874_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t11884.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11886){var self__ = this;
var _11886__$1 = this;return self__.meta11885;
});
cljs.core.async.t11884.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11886,meta11885__$1){var self__ = this;
var _11886__$1 = this;return (new cljs.core.async.t11884(self__.fn1,self__._,self__.meta11882,self__.ch,self__.f,self__.map_LT_,meta11885__$1));
});
cljs.core.async.__GT_t11884 = (function __GT_t11884(fn1__$1,___$2,meta11882__$1,ch__$2,f__$2,map_LT___$2,meta11885){return (new cljs.core.async.t11884(fn1__$1,___$2,meta11882__$1,ch__$2,f__$2,map_LT___$2,meta11885));
});
}
return (new cljs.core.async.t11884(fn1,___$1,self__.meta11882,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3391__auto__ = ret;if(cljs.core.truth_(and__3391__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3391__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t11881.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11881.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11881.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11883){var self__ = this;
var _11883__$1 = this;return self__.meta11882;
});
cljs.core.async.t11881.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11883,meta11882__$1){var self__ = this;
var _11883__$1 = this;return (new cljs.core.async.t11881(self__.ch,self__.f,self__.map_LT_,meta11882__$1));
});
cljs.core.async.__GT_t11881 = (function __GT_t11881(ch__$1,f__$1,map_LT___$1,meta11882){return (new cljs.core.async.t11881(ch__$1,f__$1,map_LT___$1,meta11882));
});
}
return (new cljs.core.async.t11881(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t11890 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11890 = (function (ch,f,map_GT_,meta11891){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta11891 = meta11891;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11890.cljs$lang$type = true;
cljs.core.async.t11890.cljs$lang$ctorStr = "cljs.core.async/t11890";
cljs.core.async.t11890.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t11890");
});
cljs.core.async.t11890.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11890.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t11890.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11890.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11890.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11890.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11890.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11892){var self__ = this;
var _11892__$1 = this;return self__.meta11891;
});
cljs.core.async.t11890.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11892,meta11891__$1){var self__ = this;
var _11892__$1 = this;return (new cljs.core.async.t11890(self__.ch,self__.f,self__.map_GT_,meta11891__$1));
});
cljs.core.async.__GT_t11890 = (function __GT_t11890(ch__$1,f__$1,map_GT___$1,meta11891){return (new cljs.core.async.t11890(ch__$1,f__$1,map_GT___$1,meta11891));
});
}
return (new cljs.core.async.t11890(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t11896 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11896 = (function (ch,p,filter_GT_,meta11897){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta11897 = meta11897;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11896.cljs$lang$type = true;
cljs.core.async.t11896.cljs$lang$ctorStr = "cljs.core.async/t11896";
cljs.core.async.t11896.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t11896");
});
cljs.core.async.t11896.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11896.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t11896.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11896.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11896.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11896.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11896.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11898){var self__ = this;
var _11898__$1 = this;return self__.meta11897;
});
cljs.core.async.t11896.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11898,meta11897__$1){var self__ = this;
var _11898__$1 = this;return (new cljs.core.async.t11896(self__.ch,self__.p,self__.filter_GT_,meta11897__$1));
});
cljs.core.async.__GT_t11896 = (function __GT_t11896(ch__$1,p__$1,filter_GT___$1,meta11897){return (new cljs.core.async.t11896(ch__$1,p__$1,filter_GT___$1,meta11897));
});
}
return (new cljs.core.async.t11896(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
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
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5524__auto___11981 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_11960){var state_val_11961 = (state_11960[1]);if((state_val_11961 === 1))
{var state_11960__$1 = state_11960;var statearr_11962_11982 = state_11960__$1;(statearr_11962_11982[2] = null);
(statearr_11962_11982[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11961 === 2))
{var state_11960__$1 = state_11960;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11960__$1,4,ch);
} else
{if((state_val_11961 === 3))
{var inst_11958 = (state_11960[2]);var state_11960__$1 = state_11960;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11960__$1,inst_11958);
} else
{if((state_val_11961 === 4))
{var inst_11942 = (state_11960[7]);var inst_11942__$1 = (state_11960[2]);var inst_11943 = (inst_11942__$1 == null);var state_11960__$1 = (function (){var statearr_11963 = state_11960;(statearr_11963[7] = inst_11942__$1);
return statearr_11963;
})();if(cljs.core.truth_(inst_11943))
{var statearr_11964_11983 = state_11960__$1;(statearr_11964_11983[1] = 5);
} else
{var statearr_11965_11984 = state_11960__$1;(statearr_11965_11984[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11961 === 5))
{var inst_11945 = cljs.core.async.close_BANG_.call(null,out);var state_11960__$1 = state_11960;var statearr_11966_11985 = state_11960__$1;(statearr_11966_11985[2] = inst_11945);
(statearr_11966_11985[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11961 === 6))
{var inst_11942 = (state_11960[7]);var inst_11947 = p.call(null,inst_11942);var state_11960__$1 = state_11960;if(cljs.core.truth_(inst_11947))
{var statearr_11967_11986 = state_11960__$1;(statearr_11967_11986[1] = 8);
} else
{var statearr_11968_11987 = state_11960__$1;(statearr_11968_11987[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11961 === 7))
{var inst_11956 = (state_11960[2]);var state_11960__$1 = state_11960;var statearr_11969_11988 = state_11960__$1;(statearr_11969_11988[2] = inst_11956);
(statearr_11969_11988[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11961 === 8))
{var inst_11942 = (state_11960[7]);var state_11960__$1 = state_11960;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11960__$1,11,out,inst_11942);
} else
{if((state_val_11961 === 9))
{var state_11960__$1 = state_11960;var statearr_11970_11989 = state_11960__$1;(statearr_11970_11989[2] = null);
(statearr_11970_11989[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11961 === 10))
{var inst_11953 = (state_11960[2]);var state_11960__$1 = (function (){var statearr_11971 = state_11960;(statearr_11971[8] = inst_11953);
return statearr_11971;
})();var statearr_11972_11990 = state_11960__$1;(statearr_11972_11990[2] = null);
(statearr_11972_11990[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11961 === 11))
{var inst_11950 = (state_11960[2]);var state_11960__$1 = state_11960;var statearr_11973_11991 = state_11960__$1;(statearr_11973_11991[2] = inst_11950);
(statearr_11973_11991[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
var state_machine__5510__auto____0 = (function (){var statearr_11977 = [null,null,null,null,null,null,null,null,null];(statearr_11977[0] = state_machine__5510__auto__);
(statearr_11977[1] = 1);
return statearr_11977;
});
var state_machine__5510__auto____1 = (function (state_11960){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_11960);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e11978){if((e11978 instanceof Object))
{var ex__5513__auto__ = e11978;var statearr_11979_11992 = state_11960;(statearr_11979_11992[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11960);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11978;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11993 = state_11960;
state_11960 = G__11993;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_11960){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_11960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_11980 = f__5525__auto__.call(null);(statearr_11980[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___11981);
return statearr_11980;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5526__auto__);
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
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5524__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_12145){var state_val_12146 = (state_12145[1]);if((state_val_12146 === 1))
{var state_12145__$1 = state_12145;var statearr_12147_12184 = state_12145__$1;(statearr_12147_12184[2] = null);
(statearr_12147_12184[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 2))
{var state_12145__$1 = state_12145;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12145__$1,4,in$);
} else
{if((state_val_12146 === 3))
{var inst_12143 = (state_12145[2]);var state_12145__$1 = state_12145;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12145__$1,inst_12143);
} else
{if((state_val_12146 === 4))
{var inst_12091 = (state_12145[7]);var inst_12091__$1 = (state_12145[2]);var inst_12092 = (inst_12091__$1 == null);var state_12145__$1 = (function (){var statearr_12148 = state_12145;(statearr_12148[7] = inst_12091__$1);
return statearr_12148;
})();if(cljs.core.truth_(inst_12092))
{var statearr_12149_12185 = state_12145__$1;(statearr_12149_12185[1] = 5);
} else
{var statearr_12150_12186 = state_12145__$1;(statearr_12150_12186[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 5))
{var inst_12094 = cljs.core.async.close_BANG_.call(null,out);var state_12145__$1 = state_12145;var statearr_12151_12187 = state_12145__$1;(statearr_12151_12187[2] = inst_12094);
(statearr_12151_12187[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 6))
{var inst_12091 = (state_12145[7]);var inst_12096 = f.call(null,inst_12091);var inst_12101 = cljs.core.seq.call(null,inst_12096);var inst_12102 = inst_12101;var inst_12103 = null;var inst_12104 = 0;var inst_12105 = 0;var state_12145__$1 = (function (){var statearr_12152 = state_12145;(statearr_12152[8] = inst_12105);
(statearr_12152[9] = inst_12104);
(statearr_12152[10] = inst_12103);
(statearr_12152[11] = inst_12102);
return statearr_12152;
})();var statearr_12153_12188 = state_12145__$1;(statearr_12153_12188[2] = null);
(statearr_12153_12188[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 7))
{var inst_12141 = (state_12145[2]);var state_12145__$1 = state_12145;var statearr_12154_12189 = state_12145__$1;(statearr_12154_12189[2] = inst_12141);
(statearr_12154_12189[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 8))
{var inst_12105 = (state_12145[8]);var inst_12104 = (state_12145[9]);var inst_12107 = (inst_12105 < inst_12104);var inst_12108 = inst_12107;var state_12145__$1 = state_12145;if(cljs.core.truth_(inst_12108))
{var statearr_12155_12190 = state_12145__$1;(statearr_12155_12190[1] = 10);
} else
{var statearr_12156_12191 = state_12145__$1;(statearr_12156_12191[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 9))
{var inst_12138 = (state_12145[2]);var state_12145__$1 = (function (){var statearr_12157 = state_12145;(statearr_12157[12] = inst_12138);
return statearr_12157;
})();var statearr_12158_12192 = state_12145__$1;(statearr_12158_12192[2] = null);
(statearr_12158_12192[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 10))
{var inst_12105 = (state_12145[8]);var inst_12103 = (state_12145[10]);var inst_12110 = cljs.core._nth.call(null,inst_12103,inst_12105);var state_12145__$1 = state_12145;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12145__$1,13,out,inst_12110);
} else
{if((state_val_12146 === 11))
{var inst_12102 = (state_12145[11]);var inst_12116 = (state_12145[13]);var inst_12116__$1 = cljs.core.seq.call(null,inst_12102);var state_12145__$1 = (function (){var statearr_12162 = state_12145;(statearr_12162[13] = inst_12116__$1);
return statearr_12162;
})();if(inst_12116__$1)
{var statearr_12163_12193 = state_12145__$1;(statearr_12163_12193[1] = 14);
} else
{var statearr_12164_12194 = state_12145__$1;(statearr_12164_12194[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 12))
{var inst_12136 = (state_12145[2]);var state_12145__$1 = state_12145;var statearr_12165_12195 = state_12145__$1;(statearr_12165_12195[2] = inst_12136);
(statearr_12165_12195[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 13))
{var inst_12105 = (state_12145[8]);var inst_12104 = (state_12145[9]);var inst_12103 = (state_12145[10]);var inst_12102 = (state_12145[11]);var inst_12112 = (state_12145[2]);var inst_12113 = (inst_12105 + 1);var tmp12159 = inst_12104;var tmp12160 = inst_12103;var tmp12161 = inst_12102;var inst_12102__$1 = tmp12161;var inst_12103__$1 = tmp12160;var inst_12104__$1 = tmp12159;var inst_12105__$1 = inst_12113;var state_12145__$1 = (function (){var statearr_12166 = state_12145;(statearr_12166[8] = inst_12105__$1);
(statearr_12166[14] = inst_12112);
(statearr_12166[9] = inst_12104__$1);
(statearr_12166[10] = inst_12103__$1);
(statearr_12166[11] = inst_12102__$1);
return statearr_12166;
})();var statearr_12167_12196 = state_12145__$1;(statearr_12167_12196[2] = null);
(statearr_12167_12196[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 14))
{var inst_12116 = (state_12145[13]);var inst_12118 = cljs.core.chunked_seq_QMARK_.call(null,inst_12116);var state_12145__$1 = state_12145;if(inst_12118)
{var statearr_12168_12197 = state_12145__$1;(statearr_12168_12197[1] = 17);
} else
{var statearr_12169_12198 = state_12145__$1;(statearr_12169_12198[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 15))
{var state_12145__$1 = state_12145;var statearr_12170_12199 = state_12145__$1;(statearr_12170_12199[2] = null);
(statearr_12170_12199[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 16))
{var inst_12134 = (state_12145[2]);var state_12145__$1 = state_12145;var statearr_12171_12200 = state_12145__$1;(statearr_12171_12200[2] = inst_12134);
(statearr_12171_12200[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 17))
{var inst_12116 = (state_12145[13]);var inst_12120 = cljs.core.chunk_first.call(null,inst_12116);var inst_12121 = cljs.core.chunk_rest.call(null,inst_12116);var inst_12122 = cljs.core.count.call(null,inst_12120);var inst_12102 = inst_12121;var inst_12103 = inst_12120;var inst_12104 = inst_12122;var inst_12105 = 0;var state_12145__$1 = (function (){var statearr_12172 = state_12145;(statearr_12172[8] = inst_12105);
(statearr_12172[9] = inst_12104);
(statearr_12172[10] = inst_12103);
(statearr_12172[11] = inst_12102);
return statearr_12172;
})();var statearr_12173_12201 = state_12145__$1;(statearr_12173_12201[2] = null);
(statearr_12173_12201[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 18))
{var inst_12116 = (state_12145[13]);var inst_12125 = cljs.core.first.call(null,inst_12116);var state_12145__$1 = state_12145;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12145__$1,20,out,inst_12125);
} else
{if((state_val_12146 === 19))
{var inst_12131 = (state_12145[2]);var state_12145__$1 = state_12145;var statearr_12174_12202 = state_12145__$1;(statearr_12174_12202[2] = inst_12131);
(statearr_12174_12202[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12146 === 20))
{var inst_12116 = (state_12145[13]);var inst_12127 = (state_12145[2]);var inst_12128 = cljs.core.next.call(null,inst_12116);var inst_12102 = inst_12128;var inst_12103 = null;var inst_12104 = 0;var inst_12105 = 0;var state_12145__$1 = (function (){var statearr_12175 = state_12145;(statearr_12175[8] = inst_12105);
(statearr_12175[9] = inst_12104);
(statearr_12175[10] = inst_12103);
(statearr_12175[11] = inst_12102);
(statearr_12175[15] = inst_12127);
return statearr_12175;
})();var statearr_12176_12203 = state_12145__$1;(statearr_12176_12203[2] = null);
(statearr_12176_12203[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
var state_machine__5510__auto____0 = (function (){var statearr_12180 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12180[0] = state_machine__5510__auto__);
(statearr_12180[1] = 1);
return statearr_12180;
});
var state_machine__5510__auto____1 = (function (state_12145){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_12145);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e12181){if((e12181 instanceof Object))
{var ex__5513__auto__ = e12181;var statearr_12182_12204 = state_12145;(statearr_12182_12204[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12145);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12181;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12205 = state_12145;
state_12145 = G__12205;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_12145){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_12145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_12183 = f__5525__auto__.call(null);(statearr_12183[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto__);
return statearr_12183;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5526__auto__);
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
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
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
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
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
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__5524__auto___12286 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_12265){var state_val_12266 = (state_12265[1]);if((state_val_12266 === 1))
{var state_12265__$1 = state_12265;var statearr_12267_12287 = state_12265__$1;(statearr_12267_12287[2] = null);
(statearr_12267_12287[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12266 === 2))
{var state_12265__$1 = state_12265;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12265__$1,4,from);
} else
{if((state_val_12266 === 3))
{var inst_12263 = (state_12265[2]);var state_12265__$1 = state_12265;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12265__$1,inst_12263);
} else
{if((state_val_12266 === 4))
{var inst_12248 = (state_12265[7]);var inst_12248__$1 = (state_12265[2]);var inst_12249 = (inst_12248__$1 == null);var state_12265__$1 = (function (){var statearr_12268 = state_12265;(statearr_12268[7] = inst_12248__$1);
return statearr_12268;
})();if(cljs.core.truth_(inst_12249))
{var statearr_12269_12288 = state_12265__$1;(statearr_12269_12288[1] = 5);
} else
{var statearr_12270_12289 = state_12265__$1;(statearr_12270_12289[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12266 === 5))
{var state_12265__$1 = state_12265;if(cljs.core.truth_(close_QMARK_))
{var statearr_12271_12290 = state_12265__$1;(statearr_12271_12290[1] = 8);
} else
{var statearr_12272_12291 = state_12265__$1;(statearr_12272_12291[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12266 === 6))
{var inst_12248 = (state_12265[7]);var state_12265__$1 = state_12265;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12265__$1,11,to,inst_12248);
} else
{if((state_val_12266 === 7))
{var inst_12261 = (state_12265[2]);var state_12265__$1 = state_12265;var statearr_12273_12292 = state_12265__$1;(statearr_12273_12292[2] = inst_12261);
(statearr_12273_12292[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12266 === 8))
{var inst_12252 = cljs.core.async.close_BANG_.call(null,to);var state_12265__$1 = state_12265;var statearr_12274_12293 = state_12265__$1;(statearr_12274_12293[2] = inst_12252);
(statearr_12274_12293[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12266 === 9))
{var state_12265__$1 = state_12265;var statearr_12275_12294 = state_12265__$1;(statearr_12275_12294[2] = null);
(statearr_12275_12294[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12266 === 10))
{var inst_12255 = (state_12265[2]);var state_12265__$1 = state_12265;var statearr_12276_12295 = state_12265__$1;(statearr_12276_12295[2] = inst_12255);
(statearr_12276_12295[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12266 === 11))
{var inst_12258 = (state_12265[2]);var state_12265__$1 = (function (){var statearr_12277 = state_12265;(statearr_12277[8] = inst_12258);
return statearr_12277;
})();var statearr_12278_12296 = state_12265__$1;(statearr_12278_12296[2] = null);
(statearr_12278_12296[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
var state_machine__5510__auto____0 = (function (){var statearr_12282 = [null,null,null,null,null,null,null,null,null];(statearr_12282[0] = state_machine__5510__auto__);
(statearr_12282[1] = 1);
return statearr_12282;
});
var state_machine__5510__auto____1 = (function (state_12265){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_12265);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e12283){if((e12283 instanceof Object))
{var ex__5513__auto__ = e12283;var statearr_12284_12297 = state_12265;(statearr_12284_12297[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12265);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12283;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12298 = state_12265;
state_12265 = G__12298;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_12265){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_12265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_12285 = f__5525__auto__.call(null);(statearr_12285[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___12286);
return statearr_12285;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5526__auto__);
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
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5524__auto___12385 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_12363){var state_val_12364 = (state_12363[1]);if((state_val_12364 === 1))
{var state_12363__$1 = state_12363;var statearr_12365_12386 = state_12363__$1;(statearr_12365_12386[2] = null);
(statearr_12365_12386[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12364 === 2))
{var state_12363__$1 = state_12363;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12363__$1,4,ch);
} else
{if((state_val_12364 === 3))
{var inst_12361 = (state_12363[2]);var state_12363__$1 = state_12363;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12363__$1,inst_12361);
} else
{if((state_val_12364 === 4))
{var inst_12344 = (state_12363[7]);var inst_12344__$1 = (state_12363[2]);var inst_12345 = (inst_12344__$1 == null);var state_12363__$1 = (function (){var statearr_12366 = state_12363;(statearr_12366[7] = inst_12344__$1);
return statearr_12366;
})();if(cljs.core.truth_(inst_12345))
{var statearr_12367_12387 = state_12363__$1;(statearr_12367_12387[1] = 5);
} else
{var statearr_12368_12388 = state_12363__$1;(statearr_12368_12388[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12364 === 5))
{var inst_12347 = cljs.core.async.close_BANG_.call(null,tc);var inst_12348 = cljs.core.async.close_BANG_.call(null,fc);var state_12363__$1 = (function (){var statearr_12369 = state_12363;(statearr_12369[8] = inst_12347);
return statearr_12369;
})();var statearr_12370_12389 = state_12363__$1;(statearr_12370_12389[2] = inst_12348);
(statearr_12370_12389[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12364 === 6))
{var inst_12344 = (state_12363[7]);var inst_12350 = p.call(null,inst_12344);var state_12363__$1 = state_12363;if(cljs.core.truth_(inst_12350))
{var statearr_12371_12390 = state_12363__$1;(statearr_12371_12390[1] = 9);
} else
{var statearr_12372_12391 = state_12363__$1;(statearr_12372_12391[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12364 === 7))
{var inst_12359 = (state_12363[2]);var state_12363__$1 = state_12363;var statearr_12373_12392 = state_12363__$1;(statearr_12373_12392[2] = inst_12359);
(statearr_12373_12392[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12364 === 8))
{var inst_12356 = (state_12363[2]);var state_12363__$1 = (function (){var statearr_12374 = state_12363;(statearr_12374[9] = inst_12356);
return statearr_12374;
})();var statearr_12375_12393 = state_12363__$1;(statearr_12375_12393[2] = null);
(statearr_12375_12393[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12364 === 9))
{var state_12363__$1 = state_12363;var statearr_12376_12394 = state_12363__$1;(statearr_12376_12394[2] = tc);
(statearr_12376_12394[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12364 === 10))
{var state_12363__$1 = state_12363;var statearr_12377_12395 = state_12363__$1;(statearr_12377_12395[2] = fc);
(statearr_12377_12395[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12364 === 11))
{var inst_12344 = (state_12363[7]);var inst_12354 = (state_12363[2]);var state_12363__$1 = state_12363;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12363__$1,8,inst_12354,inst_12344);
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
var state_machine__5510__auto____0 = (function (){var statearr_12381 = [null,null,null,null,null,null,null,null,null,null];(statearr_12381[0] = state_machine__5510__auto__);
(statearr_12381[1] = 1);
return statearr_12381;
});
var state_machine__5510__auto____1 = (function (state_12363){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_12363);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e12382){if((e12382 instanceof Object))
{var ex__5513__auto__ = e12382;var statearr_12383_12396 = state_12363;(statearr_12383_12396[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12363);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12382;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12397 = state_12363;
state_12363 = G__12397;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_12363){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_12363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_12384 = f__5525__auto__.call(null);(statearr_12384[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___12385);
return statearr_12384;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5526__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5524__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_12444){var state_val_12445 = (state_12444[1]);if((state_val_12445 === 7))
{var inst_12440 = (state_12444[2]);var state_12444__$1 = state_12444;var statearr_12446_12462 = state_12444__$1;(statearr_12446_12462[2] = inst_12440);
(statearr_12446_12462[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12445 === 6))
{var inst_12433 = (state_12444[7]);var inst_12430 = (state_12444[8]);var inst_12437 = f.call(null,inst_12430,inst_12433);var inst_12430__$1 = inst_12437;var state_12444__$1 = (function (){var statearr_12447 = state_12444;(statearr_12447[8] = inst_12430__$1);
return statearr_12447;
})();var statearr_12448_12463 = state_12444__$1;(statearr_12448_12463[2] = null);
(statearr_12448_12463[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12445 === 5))
{var inst_12430 = (state_12444[8]);var state_12444__$1 = state_12444;var statearr_12449_12464 = state_12444__$1;(statearr_12449_12464[2] = inst_12430);
(statearr_12449_12464[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12445 === 4))
{var inst_12433 = (state_12444[7]);var inst_12433__$1 = (state_12444[2]);var inst_12434 = (inst_12433__$1 == null);var state_12444__$1 = (function (){var statearr_12450 = state_12444;(statearr_12450[7] = inst_12433__$1);
return statearr_12450;
})();if(cljs.core.truth_(inst_12434))
{var statearr_12451_12465 = state_12444__$1;(statearr_12451_12465[1] = 5);
} else
{var statearr_12452_12466 = state_12444__$1;(statearr_12452_12466[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12445 === 3))
{var inst_12442 = (state_12444[2]);var state_12444__$1 = state_12444;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12444__$1,inst_12442);
} else
{if((state_val_12445 === 2))
{var state_12444__$1 = state_12444;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12444__$1,4,ch);
} else
{if((state_val_12445 === 1))
{var inst_12430 = init;var state_12444__$1 = (function (){var statearr_12453 = state_12444;(statearr_12453[8] = inst_12430);
return statearr_12453;
})();var statearr_12454_12467 = state_12444__$1;(statearr_12454_12467[2] = null);
(statearr_12454_12467[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
var state_machine__5510__auto____0 = (function (){var statearr_12458 = [null,null,null,null,null,null,null,null,null];(statearr_12458[0] = state_machine__5510__auto__);
(statearr_12458[1] = 1);
return statearr_12458;
});
var state_machine__5510__auto____1 = (function (state_12444){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_12444);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e12459){if((e12459 instanceof Object))
{var ex__5513__auto__ = e12459;var statearr_12460_12468 = state_12444;(statearr_12460_12468[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12444);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12459;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12469 = state_12444;
state_12444 = G__12469;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_12444){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_12444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_12461 = f__5525__auto__.call(null);(statearr_12461[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto__);
return statearr_12461;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5526__auto__);
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
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5524__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_12531){var state_val_12532 = (state_12531[1]);if((state_val_12532 === 1))
{var inst_12511 = cljs.core.seq.call(null,coll);var inst_12512 = inst_12511;var state_12531__$1 = (function (){var statearr_12533 = state_12531;(statearr_12533[7] = inst_12512);
return statearr_12533;
})();var statearr_12534_12552 = state_12531__$1;(statearr_12534_12552[2] = null);
(statearr_12534_12552[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12532 === 2))
{var inst_12512 = (state_12531[7]);var state_12531__$1 = state_12531;if(cljs.core.truth_(inst_12512))
{var statearr_12535_12553 = state_12531__$1;(statearr_12535_12553[1] = 4);
} else
{var statearr_12536_12554 = state_12531__$1;(statearr_12536_12554[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12532 === 3))
{var inst_12529 = (state_12531[2]);var state_12531__$1 = state_12531;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12531__$1,inst_12529);
} else
{if((state_val_12532 === 4))
{var inst_12512 = (state_12531[7]);var inst_12515 = cljs.core.first.call(null,inst_12512);var state_12531__$1 = state_12531;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12531__$1,7,ch,inst_12515);
} else
{if((state_val_12532 === 5))
{var state_12531__$1 = state_12531;if(cljs.core.truth_(close_QMARK_))
{var statearr_12537_12555 = state_12531__$1;(statearr_12537_12555[1] = 8);
} else
{var statearr_12538_12556 = state_12531__$1;(statearr_12538_12556[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12532 === 6))
{var inst_12527 = (state_12531[2]);var state_12531__$1 = state_12531;var statearr_12539_12557 = state_12531__$1;(statearr_12539_12557[2] = inst_12527);
(statearr_12539_12557[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12532 === 7))
{var inst_12512 = (state_12531[7]);var inst_12517 = (state_12531[2]);var inst_12518 = cljs.core.next.call(null,inst_12512);var inst_12512__$1 = inst_12518;var state_12531__$1 = (function (){var statearr_12540 = state_12531;(statearr_12540[8] = inst_12517);
(statearr_12540[7] = inst_12512__$1);
return statearr_12540;
})();var statearr_12541_12558 = state_12531__$1;(statearr_12541_12558[2] = null);
(statearr_12541_12558[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12532 === 8))
{var inst_12522 = cljs.core.async.close_BANG_.call(null,ch);var state_12531__$1 = state_12531;var statearr_12542_12559 = state_12531__$1;(statearr_12542_12559[2] = inst_12522);
(statearr_12542_12559[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12532 === 9))
{var state_12531__$1 = state_12531;var statearr_12543_12560 = state_12531__$1;(statearr_12543_12560[2] = null);
(statearr_12543_12560[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12532 === 10))
{var inst_12525 = (state_12531[2]);var state_12531__$1 = state_12531;var statearr_12544_12561 = state_12531__$1;(statearr_12544_12561[2] = inst_12525);
(statearr_12544_12561[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
var state_machine__5510__auto____0 = (function (){var statearr_12548 = [null,null,null,null,null,null,null,null,null];(statearr_12548[0] = state_machine__5510__auto__);
(statearr_12548[1] = 1);
return statearr_12548;
});
var state_machine__5510__auto____1 = (function (state_12531){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_12531);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e12549){if((e12549 instanceof Object))
{var ex__5513__auto__ = e12549;var statearr_12550_12562 = state_12531;(statearr_12550_12562[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12531);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12549;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12563 = state_12531;
state_12531 = G__12563;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_12531){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_12531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_12551 = f__5525__auto__.call(null);(statearr_12551[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto__);
return statearr_12551;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5526__auto__);
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
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj12565 = {};return obj12565;
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
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj12567 = {};return obj12567;
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
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
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
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
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
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12791 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12791 = (function (cs,ch,mult,meta12792){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12792 = meta12792;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12791.cljs$lang$type = true;
cljs.core.async.t12791.cljs$lang$ctorStr = "cljs.core.async/t12791";
cljs.core.async.t12791.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t12791");
});})(cs))
;
cljs.core.async.t12791.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12791.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12791.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12791.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12791.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12791.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12791.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12793){var self__ = this;
var _12793__$1 = this;return self__.meta12792;
});})(cs))
;
cljs.core.async.t12791.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12793,meta12792__$1){var self__ = this;
var _12793__$1 = this;return (new cljs.core.async.t12791(self__.cs,self__.ch,self__.mult,meta12792__$1));
});})(cs))
;
cljs.core.async.__GT_t12791 = ((function (cs){
return (function __GT_t12791(cs__$1,ch__$1,mult__$1,meta12792){return (new cljs.core.async.t12791(cs__$1,ch__$1,mult__$1,meta12792));
});})(cs))
;
}
return (new cljs.core.async.t12791(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5524__auto___13014 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_12928){var state_val_12929 = (state_12928[1]);if((state_val_12929 === 32))
{var inst_12796 = (state_12928[7]);var inst_12872 = (state_12928[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12928,31,Object,null,30);var inst_12879 = cljs.core.async.put_BANG_.call(null,inst_12872,inst_12796,done);var state_12928__$1 = state_12928;var statearr_12930_13015 = state_12928__$1;(statearr_12930_13015[2] = inst_12879);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12928__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12929 === 1))
{var state_12928__$1 = state_12928;var statearr_12931_13016 = state_12928__$1;(statearr_12931_13016[2] = null);
(statearr_12931_13016[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12929 === 33))
{var inst_12885 = (state_12928[9]);var inst_12887 = cljs.core.chunked_seq_QMARK_.call(null,inst_12885);var state_12928__$1 = state_12928;if(inst_12887)
{var statearr_12932_13017 = state_12928__$1;(statearr_12932_13017[1] = 36);
} else
{var statearr_12933_13018 = state_12928__$1;(statearr_12933_13018[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12929 === 2))
{var state_12928__$1 = state_12928;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12928__$1,4,ch);
} else
{if((state_val_12929 === 34))
{var state_12928__$1 = state_12928;var statearr_12934_13019 = state_12928__$1;(statearr_12934_13019[2] = null);
(statearr_12934_13019[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12929 === 3))
{var inst_12926 = (state_12928[2]);var state_12928__$1 = state_12928;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12928__$1,inst_12926);
} else
{if((state_val_12929 === 35))
{var inst_12910 = (state_12928[2]);var state_12928__$1 = state_12928;var statearr_12935_13020 = state_12928__$1;(statearr_12935_13020[2] = inst_12910);
(statearr_12935_13020[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12929 === 4))
{var inst_12796 = (state_12928[7]);var inst_12796__$1 = (state_12928[2]);var inst_12797 = (inst_12796__$1 == null);var state_12928__$1 = (function (){var statearr_12936 = state_12928;(statearr_12936[7] = inst_12796__$1);
return statearr_12936;
})();if(cljs.core.truth_(inst_12797))
{var statearr_12937_13021 = state_12928__$1;(statearr_12937_13021[1] = 5);
} else
{var statearr_12938_13022 = state_12928__$1;(statearr_12938_13022[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12929 === 36))
{var inst_12885 = (state_12928[9]);var inst_12889 = cljs.core.chunk_first.call(null,inst_12885);var inst_12890 = cljs.core.chunk_rest.call(null,inst_12885);var inst_12891 = cljs.core.count.call(null,inst_12889);var inst_12864 = inst_12890;var inst_12865 = inst_12889;var inst_12866 = inst_12891;var inst_12867 = 0;var state_12928__$1 = (function (){var statearr_12939 = state_12928;(statearr_12939[10] = inst_12864);
(statearr_12939[11] = inst_12865);
(statearr_12939[12] = inst_12866);
(statearr_12939[13] = inst_12867);
return statearr_12939;
})();var statearr_12940_13023 = state_12928__$1;(statearr_12940_13023[2] = null);
(statearr_12940_13023[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12929 === 5))
{var inst_12803 = cljs.core.deref.call(null,cs);var inst_12804 = cljs.core.seq.call(null,inst_12803);var inst_12805 = inst_12804;var inst_12806 = null;var inst_12807 = 0;var inst_12808 = 0;var state_12928__$1 = (function (){var statearr_12941 = state_12928;(statearr_12941[14] = inst_12805);
(statearr_12941[15] = inst_12808);
(statearr_12941[16] = inst_12806);
(statearr_12941[17] = inst_12807);
return statearr_12941;
})();var statearr_12942_13024 = state_12928__$1;(statearr_12942_13024[2] = null);
(statearr_12942_13024[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12929 === 37))
{var inst_12885 = (state_12928[9]);var inst_12894 = cljs.core.first.call(null,inst_12885);var state_12928__$1 = (function (){var statearr_12943 = state_12928;(statearr_12943[18] = inst_12894);
return statearr_12943;
})();var statearr_12944_13025 = state_12928__$1;(statearr_12944_13025[2] = null);
(statearr_12944_13025[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12929 === 6))
{var inst_12856 = (state_12928[19]);var inst_12855 = cljs.core.deref.call(null,cs);var inst_12856__$1 = cljs.core.keys.call(null,inst_12855);var inst_12857 = cljs.core.count.call(null,inst_12856__$1);var inst_12858 = cljs.core.reset_BANG_.call(null,dctr,inst_12857);var inst_12863 = cljs.core.seq.call(null,inst_12856__$1);var inst_12864 = inst_12863;var inst_12865 = null;var inst_12866 = 0;var inst_12867 = 0;var state_12928__$1 = (function (){var statearr_12945 = state_12928;(statearr_12945[10] = inst_12864);
(statearr_12945[11] = inst_12865);
(statearr_12945[12] = inst_12866);
(statearr_12945[13] = inst_12867);
(statearr_12945[19] = inst_12856__$1);
(statearr_12945[20] = inst_12858);
return statearr_12945;
})();var statearr_12946_13026 = state_12928__$1;(statearr_12946_13026[2] = null);
(statearr_12946_13026[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12929 === 38))
{var inst_12907 = (state_12928[2]);var state_12928__$1 = state_12928;var statearr_12947_13027 = state_12928__$1;(statearr_12947_13027[2] = inst_12907);
(statearr_12947_13027[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12929 === 7))
{var inst_12924 = (state_12928[2]);var state_12928__$1 = state_12928;var statearr_12948_13028 = state_12928__$1;(statearr_12948_13028[2] = inst_12924);
(statearr_12948_13028[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12929 === 39))
{var inst_12885 = (state_12928[9]);var inst_12903 = (state_12928[2]);var inst_12904 = cljs.core.next.call(null,inst_12885);var inst_12864 = inst_12904;var inst_12865 = null;var inst_12866 = 0;var inst_12867 = 0;var state_12928__$1 = (function (){var statearr_12949 = state_12928;(statearr_12949[10] = inst_12864);
(statearr_12949[11] = inst_12865);
(statearr_12949[12] = inst_12866);
(statearr_12949[13] = inst_12867);
(statearr_12949[21] = inst_12903);
return statearr_12949;
})();var statearr_12950_13029 = state_12928__$1;(statearr_12950_13029[2] = null);
(statearr_12950_13029[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12929 === 8))
{var inst_12808 = (state_12928[15]);var inst_12807 = (state_12928[17]);var inst_12810 = (inst_12808 < inst_12807);var inst_12811 = inst_12810;var state_12928__$1 = state_12928;if(cljs.core.truth_(inst_12811))
{var statearr_12951_13030 = state_12928__$1;(statearr_12951_13030[1] = 10);
} else
{var statearr_12952_13031 = state_12928__$1;(statearr_12952_13031[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12929 === 40))
{var inst_12894 = (state_12928[18]);var inst_12895 = (state_12928[2]);var inst_12896 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12897 = cljs.core.async.untap_STAR_.call(null,m,inst_12894);var state_12928__$1 = (function (){var statearr_12953 = state_12928;(statearr_12953[22] = inst_12896);
(statearr_12953[23] = inst_12895);
return statearr_12953;
})();var statearr_12954_13032 = state_12928__$1;(statearr_12954_13032[2] = inst_12897);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12928__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12929 === 9))
{var inst_12853 = (state_12928[2]);var state_12928__$1 = state_12928;var statearr_12955_13033 = state_12928__$1;(statearr_12955_13033[2] = inst_12853);
(statearr_12955_13033[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12929 === 41))
{var inst_12796 = (state_12928[7]);var inst_12894 = (state_12928[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12928,40,Object,null,39);var inst_12901 = cljs.core.async.put_BANG_.call(null,inst_12894,inst_12796,done);var state_12928__$1 = state_12928;var statearr_12956_13034 = state_12928__$1;(statearr_12956_13034[2] = inst_12901);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12928__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12929 === 10))
{var inst_12808 = (state_12928[15]);var inst_12806 = (state_12928[16]);var inst_12814 = cljs.core._nth.call(null,inst_12806,inst_12808);var inst_12815 = cljs.core.nth.call(null,inst_12814,0,null);var inst_12816 = cljs.core.nth.call(null,inst_12814,1,null);var state_12928__$1 = (function (){var statearr_12957 = state_12928;(statearr_12957[24] = inst_12815);
return statearr_12957;
})();if(cljs.core.truth_(inst_12816))
{var statearr_12958_13035 = state_12928__$1;(statearr_12958_13035[1] = 13);
} else
{var statearr_12959_13036 = state_12928__$1;(statearr_12959_13036[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12929 === 42))
{var state_12928__$1 = state_12928;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12928__$1,45,dchan);
} else
{if((state_val_12929 === 11))
{var inst_12805 = (state_12928[14]);var inst_12825 = (state_12928[25]);var inst_12825__$1 = cljs.core.seq.call(null,inst_12805);var state_12928__$1 = (function (){var statearr_12960 = state_12928;(statearr_12960[25] = inst_12825__$1);
return statearr_12960;
})();if(inst_12825__$1)
{var statearr_12961_13037 = state_12928__$1;(statearr_12961_13037[1] = 16);
} else
{var statearr_12962_13038 = state_12928__$1;(statearr_12962_13038[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12929 === 43))
{var state_12928__$1 = state_12928;var statearr_12963_13039 = state_12928__$1;(statearr_12963_13039[2] = null);
(statearr_12963_13039[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12929 === 12))
{var inst_12851 = (state_12928[2]);var state_12928__$1 = state_12928;var statearr_12964_13040 = state_12928__$1;(statearr_12964_13040[2] = inst_12851);
(statearr_12964_13040[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12929 === 44))
{var inst_12921 = (state_12928[2]);var state_12928__$1 = (function (){var statearr_12965 = state_12928;(statearr_12965[26] = inst_12921);
return statearr_12965;
})();var statearr_12966_13041 = state_12928__$1;(statearr_12966_13041[2] = null);
(statearr_12966_13041[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12929 === 13))
{var inst_12815 = (state_12928[24]);var inst_12818 = cljs.core.async.close_BANG_.call(null,inst_12815);var state_12928__$1 = state_12928;var statearr_12967_13042 = state_12928__$1;(statearr_12967_13042[2] = inst_12818);
(statearr_12967_13042[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12929 === 45))
{var inst_12918 = (state_12928[2]);var state_12928__$1 = state_12928;var statearr_12971_13043 = state_12928__$1;(statearr_12971_13043[2] = inst_12918);
(statearr_12971_13043[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12929 === 14))
{var state_12928__$1 = state_12928;var statearr_12972_13044 = state_12928__$1;(statearr_12972_13044[2] = null);
(statearr_12972_13044[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12929 === 15))
{var inst_12805 = (state_12928[14]);var inst_12808 = (state_12928[15]);var inst_12806 = (state_12928[16]);var inst_12807 = (state_12928[17]);var inst_12821 = (state_12928[2]);var inst_12822 = (inst_12808 + 1);var tmp12968 = inst_12805;var tmp12969 = inst_12806;var tmp12970 = inst_12807;var inst_12805__$1 = tmp12968;var inst_12806__$1 = tmp12969;var inst_12807__$1 = tmp12970;var inst_12808__$1 = inst_12822;var state_12928__$1 = (function (){var statearr_12973 = state_12928;(statearr_12973[27] = inst_12821);
(statearr_12973[14] = inst_12805__$1);
(statearr_12973[15] = inst_12808__$1);
(statearr_12973[16] = inst_12806__$1);
(statearr_12973[17] = inst_12807__$1);
return statearr_12973;
})();var statearr_12974_13045 = state_12928__$1;(statearr_12974_13045[2] = null);
(statearr_12974_13045[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12929 === 16))
{var inst_12825 = (state_12928[25]);var inst_12827 = cljs.core.chunked_seq_QMARK_.call(null,inst_12825);var state_12928__$1 = state_12928;if(inst_12827)
{var statearr_12975_13046 = state_12928__$1;(statearr_12975_13046[1] = 19);
} else
{var statearr_12976_13047 = state_12928__$1;(statearr_12976_13047[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12929 === 17))
{var state_12928__$1 = state_12928;var statearr_12977_13048 = state_12928__$1;(statearr_12977_13048[2] = null);
(statearr_12977_13048[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12929 === 18))
{var inst_12849 = (state_12928[2]);var state_12928__$1 = state_12928;var statearr_12978_13049 = state_12928__$1;(statearr_12978_13049[2] = inst_12849);
(statearr_12978_13049[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12929 === 19))
{var inst_12825 = (state_12928[25]);var inst_12829 = cljs.core.chunk_first.call(null,inst_12825);var inst_12830 = cljs.core.chunk_rest.call(null,inst_12825);var inst_12831 = cljs.core.count.call(null,inst_12829);var inst_12805 = inst_12830;var inst_12806 = inst_12829;var inst_12807 = inst_12831;var inst_12808 = 0;var state_12928__$1 = (function (){var statearr_12979 = state_12928;(statearr_12979[14] = inst_12805);
(statearr_12979[15] = inst_12808);
(statearr_12979[16] = inst_12806);
(statearr_12979[17] = inst_12807);
return statearr_12979;
})();var statearr_12980_13050 = state_12928__$1;(statearr_12980_13050[2] = null);
(statearr_12980_13050[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12929 === 20))
{var inst_12825 = (state_12928[25]);var inst_12835 = cljs.core.first.call(null,inst_12825);var inst_12836 = cljs.core.nth.call(null,inst_12835,0,null);var inst_12837 = cljs.core.nth.call(null,inst_12835,1,null);var state_12928__$1 = (function (){var statearr_12981 = state_12928;(statearr_12981[28] = inst_12836);
return statearr_12981;
})();if(cljs.core.truth_(inst_12837))
{var statearr_12982_13051 = state_12928__$1;(statearr_12982_13051[1] = 22);
} else
{var statearr_12983_13052 = state_12928__$1;(statearr_12983_13052[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12929 === 21))
{var inst_12846 = (state_12928[2]);var state_12928__$1 = state_12928;var statearr_12984_13053 = state_12928__$1;(statearr_12984_13053[2] = inst_12846);
(statearr_12984_13053[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12929 === 22))
{var inst_12836 = (state_12928[28]);var inst_12839 = cljs.core.async.close_BANG_.call(null,inst_12836);var state_12928__$1 = state_12928;var statearr_12985_13054 = state_12928__$1;(statearr_12985_13054[2] = inst_12839);
(statearr_12985_13054[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12929 === 23))
{var state_12928__$1 = state_12928;var statearr_12986_13055 = state_12928__$1;(statearr_12986_13055[2] = null);
(statearr_12986_13055[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12929 === 24))
{var inst_12825 = (state_12928[25]);var inst_12842 = (state_12928[2]);var inst_12843 = cljs.core.next.call(null,inst_12825);var inst_12805 = inst_12843;var inst_12806 = null;var inst_12807 = 0;var inst_12808 = 0;var state_12928__$1 = (function (){var statearr_12987 = state_12928;(statearr_12987[14] = inst_12805);
(statearr_12987[15] = inst_12808);
(statearr_12987[16] = inst_12806);
(statearr_12987[17] = inst_12807);
(statearr_12987[29] = inst_12842);
return statearr_12987;
})();var statearr_12988_13056 = state_12928__$1;(statearr_12988_13056[2] = null);
(statearr_12988_13056[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12929 === 25))
{var inst_12866 = (state_12928[12]);var inst_12867 = (state_12928[13]);var inst_12869 = (inst_12867 < inst_12866);var inst_12870 = inst_12869;var state_12928__$1 = state_12928;if(cljs.core.truth_(inst_12870))
{var statearr_12989_13057 = state_12928__$1;(statearr_12989_13057[1] = 27);
} else
{var statearr_12990_13058 = state_12928__$1;(statearr_12990_13058[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12929 === 26))
{var inst_12856 = (state_12928[19]);var inst_12914 = (state_12928[2]);var inst_12915 = cljs.core.seq.call(null,inst_12856);var state_12928__$1 = (function (){var statearr_12991 = state_12928;(statearr_12991[30] = inst_12914);
return statearr_12991;
})();if(inst_12915)
{var statearr_12992_13059 = state_12928__$1;(statearr_12992_13059[1] = 42);
} else
{var statearr_12993_13060 = state_12928__$1;(statearr_12993_13060[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12929 === 27))
{var inst_12865 = (state_12928[11]);var inst_12867 = (state_12928[13]);var inst_12872 = cljs.core._nth.call(null,inst_12865,inst_12867);var state_12928__$1 = (function (){var statearr_12994 = state_12928;(statearr_12994[8] = inst_12872);
return statearr_12994;
})();var statearr_12995_13061 = state_12928__$1;(statearr_12995_13061[2] = null);
(statearr_12995_13061[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12929 === 28))
{var inst_12864 = (state_12928[10]);var inst_12885 = (state_12928[9]);var inst_12885__$1 = cljs.core.seq.call(null,inst_12864);var state_12928__$1 = (function (){var statearr_12999 = state_12928;(statearr_12999[9] = inst_12885__$1);
return statearr_12999;
})();if(inst_12885__$1)
{var statearr_13000_13062 = state_12928__$1;(statearr_13000_13062[1] = 33);
} else
{var statearr_13001_13063 = state_12928__$1;(statearr_13001_13063[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12929 === 29))
{var inst_12912 = (state_12928[2]);var state_12928__$1 = state_12928;var statearr_13002_13064 = state_12928__$1;(statearr_13002_13064[2] = inst_12912);
(statearr_13002_13064[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12929 === 30))
{var inst_12864 = (state_12928[10]);var inst_12865 = (state_12928[11]);var inst_12866 = (state_12928[12]);var inst_12867 = (state_12928[13]);var inst_12881 = (state_12928[2]);var inst_12882 = (inst_12867 + 1);var tmp12996 = inst_12864;var tmp12997 = inst_12865;var tmp12998 = inst_12866;var inst_12864__$1 = tmp12996;var inst_12865__$1 = tmp12997;var inst_12866__$1 = tmp12998;var inst_12867__$1 = inst_12882;var state_12928__$1 = (function (){var statearr_13003 = state_12928;(statearr_13003[10] = inst_12864__$1);
(statearr_13003[11] = inst_12865__$1);
(statearr_13003[12] = inst_12866__$1);
(statearr_13003[13] = inst_12867__$1);
(statearr_13003[31] = inst_12881);
return statearr_13003;
})();var statearr_13004_13065 = state_12928__$1;(statearr_13004_13065[2] = null);
(statearr_13004_13065[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12929 === 31))
{var inst_12872 = (state_12928[8]);var inst_12873 = (state_12928[2]);var inst_12874 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12875 = cljs.core.async.untap_STAR_.call(null,m,inst_12872);var state_12928__$1 = (function (){var statearr_13005 = state_12928;(statearr_13005[32] = inst_12874);
(statearr_13005[33] = inst_12873);
return statearr_13005;
})();var statearr_13006_13066 = state_12928__$1;(statearr_13006_13066[2] = inst_12875);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12928__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
var state_machine__5510__auto____0 = (function (){var statearr_13010 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13010[0] = state_machine__5510__auto__);
(statearr_13010[1] = 1);
return statearr_13010;
});
var state_machine__5510__auto____1 = (function (state_12928){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_12928);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e13011){if((e13011 instanceof Object))
{var ex__5513__auto__ = e13011;var statearr_13012_13067 = state_12928;(statearr_13012_13067[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12928);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13011;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13068 = state_12928;
state_12928 = G__13068;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_12928){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_12928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_13013 = f__5525__auto__.call(null);(statearr_13013[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___13014);
return statearr_13013;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5526__auto__);
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
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
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
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj13070 = {};return obj13070;
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
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
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
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
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
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
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
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
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
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t13180 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13180 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta13181){
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
this.meta13181 = meta13181;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13180.cljs$lang$type = true;
cljs.core.async.t13180.cljs$lang$ctorStr = "cljs.core.async/t13180";
cljs.core.async.t13180.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t13180");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13180.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t13180.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13180.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13180.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13180.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13180.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13180.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13180.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13180.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13182){var self__ = this;
var _13182__$1 = this;return self__.meta13181;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13180.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13182,meta13181__$1){var self__ = this;
var _13182__$1 = this;return (new cljs.core.async.t13180(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta13181__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t13180 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13180(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta13181){return (new cljs.core.async.t13180(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta13181));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t13180(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5524__auto___13289 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_13247){var state_val_13248 = (state_13247[1]);if((state_val_13248 === 1))
{var inst_13186 = (state_13247[7]);var inst_13186__$1 = calc_state.call(null);var inst_13187 = cljs.core.seq_QMARK_.call(null,inst_13186__$1);var state_13247__$1 = (function (){var statearr_13249 = state_13247;(statearr_13249[7] = inst_13186__$1);
return statearr_13249;
})();if(inst_13187)
{var statearr_13250_13290 = state_13247__$1;(statearr_13250_13290[1] = 2);
} else
{var statearr_13251_13291 = state_13247__$1;(statearr_13251_13291[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13248 === 2))
{var inst_13186 = (state_13247[7]);var inst_13189 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13186);var state_13247__$1 = state_13247;var statearr_13252_13292 = state_13247__$1;(statearr_13252_13292[2] = inst_13189);
(statearr_13252_13292[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13248 === 3))
{var inst_13186 = (state_13247[7]);var state_13247__$1 = state_13247;var statearr_13253_13293 = state_13247__$1;(statearr_13253_13293[2] = inst_13186);
(statearr_13253_13293[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13248 === 4))
{var inst_13186 = (state_13247[7]);var inst_13192 = (state_13247[2]);var inst_13193 = cljs.core.get.call(null,inst_13192,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13194 = cljs.core.get.call(null,inst_13192,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13195 = cljs.core.get.call(null,inst_13192,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_13196 = inst_13186;var state_13247__$1 = (function (){var statearr_13254 = state_13247;(statearr_13254[8] = inst_13194);
(statearr_13254[9] = inst_13193);
(statearr_13254[10] = inst_13196);
(statearr_13254[11] = inst_13195);
return statearr_13254;
})();var statearr_13255_13294 = state_13247__$1;(statearr_13255_13294[2] = null);
(statearr_13255_13294[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13248 === 5))
{var inst_13196 = (state_13247[10]);var inst_13199 = cljs.core.seq_QMARK_.call(null,inst_13196);var state_13247__$1 = state_13247;if(inst_13199)
{var statearr_13256_13295 = state_13247__$1;(statearr_13256_13295[1] = 7);
} else
{var statearr_13257_13296 = state_13247__$1;(statearr_13257_13296[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13248 === 6))
{var inst_13245 = (state_13247[2]);var state_13247__$1 = state_13247;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13247__$1,inst_13245);
} else
{if((state_val_13248 === 7))
{var inst_13196 = (state_13247[10]);var inst_13201 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13196);var state_13247__$1 = state_13247;var statearr_13258_13297 = state_13247__$1;(statearr_13258_13297[2] = inst_13201);
(statearr_13258_13297[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13248 === 8))
{var inst_13196 = (state_13247[10]);var state_13247__$1 = state_13247;var statearr_13259_13298 = state_13247__$1;(statearr_13259_13298[2] = inst_13196);
(statearr_13259_13298[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13248 === 9))
{var inst_13204 = (state_13247[12]);var inst_13204__$1 = (state_13247[2]);var inst_13205 = cljs.core.get.call(null,inst_13204__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13206 = cljs.core.get.call(null,inst_13204__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13207 = cljs.core.get.call(null,inst_13204__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_13247__$1 = (function (){var statearr_13260 = state_13247;(statearr_13260[12] = inst_13204__$1);
(statearr_13260[13] = inst_13206);
(statearr_13260[14] = inst_13207);
return statearr_13260;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13247__$1,10,inst_13205);
} else
{if((state_val_13248 === 10))
{var inst_13211 = (state_13247[15]);var inst_13212 = (state_13247[16]);var inst_13210 = (state_13247[2]);var inst_13211__$1 = cljs.core.nth.call(null,inst_13210,0,null);var inst_13212__$1 = cljs.core.nth.call(null,inst_13210,1,null);var inst_13213 = (inst_13211__$1 == null);var inst_13214 = cljs.core._EQ_.call(null,inst_13212__$1,change);var inst_13215 = (inst_13213) || (inst_13214);var state_13247__$1 = (function (){var statearr_13261 = state_13247;(statearr_13261[15] = inst_13211__$1);
(statearr_13261[16] = inst_13212__$1);
return statearr_13261;
})();if(cljs.core.truth_(inst_13215))
{var statearr_13262_13299 = state_13247__$1;(statearr_13262_13299[1] = 11);
} else
{var statearr_13263_13300 = state_13247__$1;(statearr_13263_13300[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13248 === 11))
{var inst_13211 = (state_13247[15]);var inst_13217 = (inst_13211 == null);var state_13247__$1 = state_13247;if(cljs.core.truth_(inst_13217))
{var statearr_13264_13301 = state_13247__$1;(statearr_13264_13301[1] = 14);
} else
{var statearr_13265_13302 = state_13247__$1;(statearr_13265_13302[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13248 === 12))
{var inst_13226 = (state_13247[17]);var inst_13207 = (state_13247[14]);var inst_13212 = (state_13247[16]);var inst_13226__$1 = inst_13207.call(null,inst_13212);var state_13247__$1 = (function (){var statearr_13266 = state_13247;(statearr_13266[17] = inst_13226__$1);
return statearr_13266;
})();if(cljs.core.truth_(inst_13226__$1))
{var statearr_13267_13303 = state_13247__$1;(statearr_13267_13303[1] = 17);
} else
{var statearr_13268_13304 = state_13247__$1;(statearr_13268_13304[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13248 === 13))
{var inst_13243 = (state_13247[2]);var state_13247__$1 = state_13247;var statearr_13269_13305 = state_13247__$1;(statearr_13269_13305[2] = inst_13243);
(statearr_13269_13305[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13248 === 14))
{var inst_13212 = (state_13247[16]);var inst_13219 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13212);var state_13247__$1 = state_13247;var statearr_13270_13306 = state_13247__$1;(statearr_13270_13306[2] = inst_13219);
(statearr_13270_13306[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13248 === 15))
{var state_13247__$1 = state_13247;var statearr_13271_13307 = state_13247__$1;(statearr_13271_13307[2] = null);
(statearr_13271_13307[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13248 === 16))
{var inst_13222 = (state_13247[2]);var inst_13223 = calc_state.call(null);var inst_13196 = inst_13223;var state_13247__$1 = (function (){var statearr_13272 = state_13247;(statearr_13272[10] = inst_13196);
(statearr_13272[18] = inst_13222);
return statearr_13272;
})();var statearr_13273_13308 = state_13247__$1;(statearr_13273_13308[2] = null);
(statearr_13273_13308[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13248 === 17))
{var inst_13226 = (state_13247[17]);var state_13247__$1 = state_13247;var statearr_13274_13309 = state_13247__$1;(statearr_13274_13309[2] = inst_13226);
(statearr_13274_13309[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13248 === 18))
{var inst_13206 = (state_13247[13]);var inst_13207 = (state_13247[14]);var inst_13212 = (state_13247[16]);var inst_13229 = cljs.core.empty_QMARK_.call(null,inst_13207);var inst_13230 = inst_13206.call(null,inst_13212);var inst_13231 = cljs.core.not.call(null,inst_13230);var inst_13232 = (inst_13229) && (inst_13231);var state_13247__$1 = state_13247;var statearr_13275_13310 = state_13247__$1;(statearr_13275_13310[2] = inst_13232);
(statearr_13275_13310[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13248 === 19))
{var inst_13234 = (state_13247[2]);var state_13247__$1 = state_13247;if(cljs.core.truth_(inst_13234))
{var statearr_13276_13311 = state_13247__$1;(statearr_13276_13311[1] = 20);
} else
{var statearr_13277_13312 = state_13247__$1;(statearr_13277_13312[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13248 === 20))
{var inst_13211 = (state_13247[15]);var state_13247__$1 = state_13247;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13247__$1,23,out,inst_13211);
} else
{if((state_val_13248 === 21))
{var state_13247__$1 = state_13247;var statearr_13278_13313 = state_13247__$1;(statearr_13278_13313[2] = null);
(statearr_13278_13313[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13248 === 22))
{var inst_13204 = (state_13247[12]);var inst_13240 = (state_13247[2]);var inst_13196 = inst_13204;var state_13247__$1 = (function (){var statearr_13279 = state_13247;(statearr_13279[10] = inst_13196);
(statearr_13279[19] = inst_13240);
return statearr_13279;
})();var statearr_13280_13314 = state_13247__$1;(statearr_13280_13314[2] = null);
(statearr_13280_13314[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13248 === 23))
{var inst_13237 = (state_13247[2]);var state_13247__$1 = state_13247;var statearr_13281_13315 = state_13247__$1;(statearr_13281_13315[2] = inst_13237);
(statearr_13281_13315[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
var state_machine__5510__auto____0 = (function (){var statearr_13285 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13285[0] = state_machine__5510__auto__);
(statearr_13285[1] = 1);
return statearr_13285;
});
var state_machine__5510__auto____1 = (function (state_13247){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_13247);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e13286){if((e13286 instanceof Object))
{var ex__5513__auto__ = e13286;var statearr_13287_13316 = state_13247;(statearr_13287_13316[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13247);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13286;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13317 = state_13247;
state_13247 = G__13317;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_13247){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_13247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_13288 = f__5525__auto__.call(null);(statearr_13288[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___13289);
return statearr_13288;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5526__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj13319 = {};return obj13319;
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
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
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
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
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
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3403__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3403__auto__,mults){
return (function (p1__13320_SHARP_){if(cljs.core.truth_(p1__13320_SHARP_.call(null,topic)))
{return p1__13320_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13320_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3403__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13445 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13445 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13446){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13446 = meta13446;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13445.cljs$lang$type = true;
cljs.core.async.t13445.cljs$lang$ctorStr = "cljs.core.async/t13445";
cljs.core.async.t13445.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t13445");
});})(mults,ensure_mult))
;
cljs.core.async.t13445.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13445.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13445.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13445.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13445.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13445.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13445.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13445.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13447){var self__ = this;
var _13447__$1 = this;return self__.meta13446;
});})(mults,ensure_mult))
;
cljs.core.async.t13445.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13447,meta13446__$1){var self__ = this;
var _13447__$1 = this;return (new cljs.core.async.t13445(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13446__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13445 = ((function (mults,ensure_mult){
return (function __GT_t13445(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13446){return (new cljs.core.async.t13445(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13446));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13445(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5524__auto___13569 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_13521){var state_val_13522 = (state_13521[1]);if((state_val_13522 === 1))
{var state_13521__$1 = state_13521;var statearr_13523_13570 = state_13521__$1;(statearr_13523_13570[2] = null);
(statearr_13523_13570[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13522 === 2))
{var state_13521__$1 = state_13521;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13521__$1,4,ch);
} else
{if((state_val_13522 === 3))
{var inst_13519 = (state_13521[2]);var state_13521__$1 = state_13521;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13521__$1,inst_13519);
} else
{if((state_val_13522 === 4))
{var inst_13450 = (state_13521[7]);var inst_13450__$1 = (state_13521[2]);var inst_13451 = (inst_13450__$1 == null);var state_13521__$1 = (function (){var statearr_13524 = state_13521;(statearr_13524[7] = inst_13450__$1);
return statearr_13524;
})();if(cljs.core.truth_(inst_13451))
{var statearr_13525_13571 = state_13521__$1;(statearr_13525_13571[1] = 5);
} else
{var statearr_13526_13572 = state_13521__$1;(statearr_13526_13572[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13522 === 5))
{var inst_13457 = cljs.core.deref.call(null,mults);var inst_13458 = cljs.core.vals.call(null,inst_13457);var inst_13459 = cljs.core.seq.call(null,inst_13458);var inst_13460 = inst_13459;var inst_13461 = null;var inst_13462 = 0;var inst_13463 = 0;var state_13521__$1 = (function (){var statearr_13527 = state_13521;(statearr_13527[8] = inst_13463);
(statearr_13527[9] = inst_13461);
(statearr_13527[10] = inst_13462);
(statearr_13527[11] = inst_13460);
return statearr_13527;
})();var statearr_13528_13573 = state_13521__$1;(statearr_13528_13573[2] = null);
(statearr_13528_13573[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13522 === 6))
{var inst_13450 = (state_13521[7]);var inst_13500 = (state_13521[12]);var inst_13498 = (state_13521[13]);var inst_13498__$1 = topic_fn.call(null,inst_13450);var inst_13499 = cljs.core.deref.call(null,mults);var inst_13500__$1 = cljs.core.get.call(null,inst_13499,inst_13498__$1);var state_13521__$1 = (function (){var statearr_13529 = state_13521;(statearr_13529[12] = inst_13500__$1);
(statearr_13529[13] = inst_13498__$1);
return statearr_13529;
})();if(cljs.core.truth_(inst_13500__$1))
{var statearr_13530_13574 = state_13521__$1;(statearr_13530_13574[1] = 19);
} else
{var statearr_13531_13575 = state_13521__$1;(statearr_13531_13575[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13522 === 7))
{var inst_13517 = (state_13521[2]);var state_13521__$1 = state_13521;var statearr_13532_13576 = state_13521__$1;(statearr_13532_13576[2] = inst_13517);
(statearr_13532_13576[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13522 === 8))
{var inst_13463 = (state_13521[8]);var inst_13462 = (state_13521[10]);var inst_13465 = (inst_13463 < inst_13462);var inst_13466 = inst_13465;var state_13521__$1 = state_13521;if(cljs.core.truth_(inst_13466))
{var statearr_13536_13577 = state_13521__$1;(statearr_13536_13577[1] = 10);
} else
{var statearr_13537_13578 = state_13521__$1;(statearr_13537_13578[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13522 === 9))
{var inst_13496 = (state_13521[2]);var state_13521__$1 = state_13521;var statearr_13538_13579 = state_13521__$1;(statearr_13538_13579[2] = inst_13496);
(statearr_13538_13579[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13522 === 10))
{var inst_13463 = (state_13521[8]);var inst_13461 = (state_13521[9]);var inst_13462 = (state_13521[10]);var inst_13460 = (state_13521[11]);var inst_13468 = cljs.core._nth.call(null,inst_13461,inst_13463);var inst_13469 = cljs.core.async.muxch_STAR_.call(null,inst_13468);var inst_13470 = cljs.core.async.close_BANG_.call(null,inst_13469);var inst_13471 = (inst_13463 + 1);var tmp13533 = inst_13461;var tmp13534 = inst_13462;var tmp13535 = inst_13460;var inst_13460__$1 = tmp13535;var inst_13461__$1 = tmp13533;var inst_13462__$1 = tmp13534;var inst_13463__$1 = inst_13471;var state_13521__$1 = (function (){var statearr_13539 = state_13521;(statearr_13539[14] = inst_13470);
(statearr_13539[8] = inst_13463__$1);
(statearr_13539[9] = inst_13461__$1);
(statearr_13539[10] = inst_13462__$1);
(statearr_13539[11] = inst_13460__$1);
return statearr_13539;
})();var statearr_13540_13580 = state_13521__$1;(statearr_13540_13580[2] = null);
(statearr_13540_13580[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13522 === 11))
{var inst_13474 = (state_13521[15]);var inst_13460 = (state_13521[11]);var inst_13474__$1 = cljs.core.seq.call(null,inst_13460);var state_13521__$1 = (function (){var statearr_13541 = state_13521;(statearr_13541[15] = inst_13474__$1);
return statearr_13541;
})();if(inst_13474__$1)
{var statearr_13542_13581 = state_13521__$1;(statearr_13542_13581[1] = 13);
} else
{var statearr_13543_13582 = state_13521__$1;(statearr_13543_13582[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13522 === 12))
{var inst_13494 = (state_13521[2]);var state_13521__$1 = state_13521;var statearr_13544_13583 = state_13521__$1;(statearr_13544_13583[2] = inst_13494);
(statearr_13544_13583[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13522 === 13))
{var inst_13474 = (state_13521[15]);var inst_13476 = cljs.core.chunked_seq_QMARK_.call(null,inst_13474);var state_13521__$1 = state_13521;if(inst_13476)
{var statearr_13545_13584 = state_13521__$1;(statearr_13545_13584[1] = 16);
} else
{var statearr_13546_13585 = state_13521__$1;(statearr_13546_13585[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13522 === 14))
{var state_13521__$1 = state_13521;var statearr_13547_13586 = state_13521__$1;(statearr_13547_13586[2] = null);
(statearr_13547_13586[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13522 === 15))
{var inst_13492 = (state_13521[2]);var state_13521__$1 = state_13521;var statearr_13548_13587 = state_13521__$1;(statearr_13548_13587[2] = inst_13492);
(statearr_13548_13587[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13522 === 16))
{var inst_13474 = (state_13521[15]);var inst_13478 = cljs.core.chunk_first.call(null,inst_13474);var inst_13479 = cljs.core.chunk_rest.call(null,inst_13474);var inst_13480 = cljs.core.count.call(null,inst_13478);var inst_13460 = inst_13479;var inst_13461 = inst_13478;var inst_13462 = inst_13480;var inst_13463 = 0;var state_13521__$1 = (function (){var statearr_13549 = state_13521;(statearr_13549[8] = inst_13463);
(statearr_13549[9] = inst_13461);
(statearr_13549[10] = inst_13462);
(statearr_13549[11] = inst_13460);
return statearr_13549;
})();var statearr_13550_13588 = state_13521__$1;(statearr_13550_13588[2] = null);
(statearr_13550_13588[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13522 === 17))
{var inst_13474 = (state_13521[15]);var inst_13483 = cljs.core.first.call(null,inst_13474);var inst_13484 = cljs.core.async.muxch_STAR_.call(null,inst_13483);var inst_13485 = cljs.core.async.close_BANG_.call(null,inst_13484);var inst_13486 = cljs.core.next.call(null,inst_13474);var inst_13460 = inst_13486;var inst_13461 = null;var inst_13462 = 0;var inst_13463 = 0;var state_13521__$1 = (function (){var statearr_13551 = state_13521;(statearr_13551[16] = inst_13485);
(statearr_13551[8] = inst_13463);
(statearr_13551[9] = inst_13461);
(statearr_13551[10] = inst_13462);
(statearr_13551[11] = inst_13460);
return statearr_13551;
})();var statearr_13552_13589 = state_13521__$1;(statearr_13552_13589[2] = null);
(statearr_13552_13589[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13522 === 18))
{var inst_13489 = (state_13521[2]);var state_13521__$1 = state_13521;var statearr_13553_13590 = state_13521__$1;(statearr_13553_13590[2] = inst_13489);
(statearr_13553_13590[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13522 === 19))
{var state_13521__$1 = state_13521;var statearr_13554_13591 = state_13521__$1;(statearr_13554_13591[2] = null);
(statearr_13554_13591[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13522 === 20))
{var state_13521__$1 = state_13521;var statearr_13555_13592 = state_13521__$1;(statearr_13555_13592[2] = null);
(statearr_13555_13592[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13522 === 21))
{var inst_13514 = (state_13521[2]);var state_13521__$1 = (function (){var statearr_13556 = state_13521;(statearr_13556[17] = inst_13514);
return statearr_13556;
})();var statearr_13557_13593 = state_13521__$1;(statearr_13557_13593[2] = null);
(statearr_13557_13593[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13522 === 22))
{var inst_13511 = (state_13521[2]);var state_13521__$1 = state_13521;var statearr_13558_13594 = state_13521__$1;(statearr_13558_13594[2] = inst_13511);
(statearr_13558_13594[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13522 === 23))
{var inst_13498 = (state_13521[13]);var inst_13502 = (state_13521[2]);var inst_13503 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13498);var state_13521__$1 = (function (){var statearr_13559 = state_13521;(statearr_13559[18] = inst_13502);
return statearr_13559;
})();var statearr_13560_13595 = state_13521__$1;(statearr_13560_13595[2] = inst_13503);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13521__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13522 === 24))
{var inst_13450 = (state_13521[7]);var inst_13500 = (state_13521[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13521,23,Object,null,22);var inst_13507 = cljs.core.async.muxch_STAR_.call(null,inst_13500);var state_13521__$1 = state_13521;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13521__$1,25,inst_13507,inst_13450);
} else
{if((state_val_13522 === 25))
{var inst_13509 = (state_13521[2]);var state_13521__$1 = state_13521;var statearr_13561_13596 = state_13521__$1;(statearr_13561_13596[2] = inst_13509);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13521__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
var state_machine__5510__auto____0 = (function (){var statearr_13565 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13565[0] = state_machine__5510__auto__);
(statearr_13565[1] = 1);
return statearr_13565;
});
var state_machine__5510__auto____1 = (function (state_13521){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_13521);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e13566){if((e13566 instanceof Object))
{var ex__5513__auto__ = e13566;var statearr_13567_13597 = state_13521;(statearr_13567_13597[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13521);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13566;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13598 = state_13521;
state_13521 = G__13598;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_13521){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_13521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_13568 = f__5525__auto__.call(null);(statearr_13568[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___13569);
return statearr_13568;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5526__auto__);
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
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
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
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__5524__auto___13735 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_13705){var state_val_13706 = (state_13705[1]);if((state_val_13706 === 1))
{var state_13705__$1 = state_13705;var statearr_13707_13736 = state_13705__$1;(statearr_13707_13736[2] = null);
(statearr_13707_13736[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13706 === 2))
{var inst_13668 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13669 = 0;var state_13705__$1 = (function (){var statearr_13708 = state_13705;(statearr_13708[7] = inst_13668);
(statearr_13708[8] = inst_13669);
return statearr_13708;
})();var statearr_13709_13737 = state_13705__$1;(statearr_13709_13737[2] = null);
(statearr_13709_13737[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13706 === 3))
{var inst_13703 = (state_13705[2]);var state_13705__$1 = state_13705;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13705__$1,inst_13703);
} else
{if((state_val_13706 === 4))
{var inst_13669 = (state_13705[8]);var inst_13671 = (inst_13669 < cnt);var state_13705__$1 = state_13705;if(cljs.core.truth_(inst_13671))
{var statearr_13710_13738 = state_13705__$1;(statearr_13710_13738[1] = 6);
} else
{var statearr_13711_13739 = state_13705__$1;(statearr_13711_13739[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13706 === 5))
{var inst_13689 = (state_13705[2]);var state_13705__$1 = (function (){var statearr_13712 = state_13705;(statearr_13712[9] = inst_13689);
return statearr_13712;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13705__$1,12,dchan);
} else
{if((state_val_13706 === 6))
{var state_13705__$1 = state_13705;var statearr_13713_13740 = state_13705__$1;(statearr_13713_13740[2] = null);
(statearr_13713_13740[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13706 === 7))
{var state_13705__$1 = state_13705;var statearr_13714_13741 = state_13705__$1;(statearr_13714_13741[2] = null);
(statearr_13714_13741[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13706 === 8))
{var inst_13687 = (state_13705[2]);var state_13705__$1 = state_13705;var statearr_13715_13742 = state_13705__$1;(statearr_13715_13742[2] = inst_13687);
(statearr_13715_13742[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13706 === 9))
{var inst_13669 = (state_13705[8]);var inst_13682 = (state_13705[2]);var inst_13683 = (inst_13669 + 1);var inst_13669__$1 = inst_13683;var state_13705__$1 = (function (){var statearr_13716 = state_13705;(statearr_13716[10] = inst_13682);
(statearr_13716[8] = inst_13669__$1);
return statearr_13716;
})();var statearr_13717_13743 = state_13705__$1;(statearr_13717_13743[2] = null);
(statearr_13717_13743[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13706 === 10))
{var inst_13673 = (state_13705[2]);var inst_13674 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13705__$1 = (function (){var statearr_13718 = state_13705;(statearr_13718[11] = inst_13673);
return statearr_13718;
})();var statearr_13719_13744 = state_13705__$1;(statearr_13719_13744[2] = inst_13674);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13705__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13706 === 11))
{var inst_13669 = (state_13705[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13705,10,Object,null,9);var inst_13678 = chs__$1.call(null,inst_13669);var inst_13679 = done.call(null,inst_13669);var inst_13680 = cljs.core.async.take_BANG_.call(null,inst_13678,inst_13679);var state_13705__$1 = state_13705;var statearr_13720_13745 = state_13705__$1;(statearr_13720_13745[2] = inst_13680);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13705__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13706 === 12))
{var inst_13691 = (state_13705[12]);var inst_13691__$1 = (state_13705[2]);var inst_13692 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13691__$1);var state_13705__$1 = (function (){var statearr_13721 = state_13705;(statearr_13721[12] = inst_13691__$1);
return statearr_13721;
})();if(cljs.core.truth_(inst_13692))
{var statearr_13722_13746 = state_13705__$1;(statearr_13722_13746[1] = 13);
} else
{var statearr_13723_13747 = state_13705__$1;(statearr_13723_13747[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13706 === 13))
{var inst_13694 = cljs.core.async.close_BANG_.call(null,out);var state_13705__$1 = state_13705;var statearr_13724_13748 = state_13705__$1;(statearr_13724_13748[2] = inst_13694);
(statearr_13724_13748[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13706 === 14))
{var inst_13691 = (state_13705[12]);var inst_13696 = cljs.core.apply.call(null,f,inst_13691);var state_13705__$1 = state_13705;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13705__$1,16,out,inst_13696);
} else
{if((state_val_13706 === 15))
{var inst_13701 = (state_13705[2]);var state_13705__$1 = state_13705;var statearr_13725_13749 = state_13705__$1;(statearr_13725_13749[2] = inst_13701);
(statearr_13725_13749[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13706 === 16))
{var inst_13698 = (state_13705[2]);var state_13705__$1 = (function (){var statearr_13726 = state_13705;(statearr_13726[13] = inst_13698);
return statearr_13726;
})();var statearr_13727_13750 = state_13705__$1;(statearr_13727_13750[2] = null);
(statearr_13727_13750[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
var state_machine__5510__auto____0 = (function (){var statearr_13731 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13731[0] = state_machine__5510__auto__);
(statearr_13731[1] = 1);
return statearr_13731;
});
var state_machine__5510__auto____1 = (function (state_13705){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_13705);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e13732){if((e13732 instanceof Object))
{var ex__5513__auto__ = e13732;var statearr_13733_13751 = state_13705;(statearr_13733_13751[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13705);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13732;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13752 = state_13705;
state_13705 = G__13752;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_13705){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_13705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_13734 = f__5525__auto__.call(null);(statearr_13734[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___13735);
return statearr_13734;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5526__auto__);
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
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5524__auto___13860 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_13836){var state_val_13837 = (state_13836[1]);if((state_val_13837 === 1))
{var inst_13807 = cljs.core.vec.call(null,chs);var inst_13808 = inst_13807;var state_13836__$1 = (function (){var statearr_13838 = state_13836;(statearr_13838[7] = inst_13808);
return statearr_13838;
})();var statearr_13839_13861 = state_13836__$1;(statearr_13839_13861[2] = null);
(statearr_13839_13861[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13837 === 2))
{var inst_13808 = (state_13836[7]);var inst_13810 = cljs.core.count.call(null,inst_13808);var inst_13811 = (inst_13810 > 0);var state_13836__$1 = state_13836;if(cljs.core.truth_(inst_13811))
{var statearr_13840_13862 = state_13836__$1;(statearr_13840_13862[1] = 4);
} else
{var statearr_13841_13863 = state_13836__$1;(statearr_13841_13863[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13837 === 3))
{var inst_13834 = (state_13836[2]);var state_13836__$1 = state_13836;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13836__$1,inst_13834);
} else
{if((state_val_13837 === 4))
{var inst_13808 = (state_13836[7]);var state_13836__$1 = state_13836;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13836__$1,7,inst_13808);
} else
{if((state_val_13837 === 5))
{var inst_13830 = cljs.core.async.close_BANG_.call(null,out);var state_13836__$1 = state_13836;var statearr_13842_13864 = state_13836__$1;(statearr_13842_13864[2] = inst_13830);
(statearr_13842_13864[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13837 === 6))
{var inst_13832 = (state_13836[2]);var state_13836__$1 = state_13836;var statearr_13843_13865 = state_13836__$1;(statearr_13843_13865[2] = inst_13832);
(statearr_13843_13865[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13837 === 7))
{var inst_13815 = (state_13836[8]);var inst_13816 = (state_13836[9]);var inst_13815__$1 = (state_13836[2]);var inst_13816__$1 = cljs.core.nth.call(null,inst_13815__$1,0,null);var inst_13817 = cljs.core.nth.call(null,inst_13815__$1,1,null);var inst_13818 = (inst_13816__$1 == null);var state_13836__$1 = (function (){var statearr_13844 = state_13836;(statearr_13844[8] = inst_13815__$1);
(statearr_13844[10] = inst_13817);
(statearr_13844[9] = inst_13816__$1);
return statearr_13844;
})();if(cljs.core.truth_(inst_13818))
{var statearr_13845_13866 = state_13836__$1;(statearr_13845_13866[1] = 8);
} else
{var statearr_13846_13867 = state_13836__$1;(statearr_13846_13867[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13837 === 8))
{var inst_13808 = (state_13836[7]);var inst_13815 = (state_13836[8]);var inst_13817 = (state_13836[10]);var inst_13816 = (state_13836[9]);var inst_13820 = (function (){var c = inst_13817;var v = inst_13816;var vec__13813 = inst_13815;var cs = inst_13808;return ((function (c,v,vec__13813,cs,inst_13808,inst_13815,inst_13817,inst_13816,state_val_13837){
return (function (p1__13753_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13753_SHARP_);
});
;})(c,v,vec__13813,cs,inst_13808,inst_13815,inst_13817,inst_13816,state_val_13837))
})();var inst_13821 = cljs.core.filterv.call(null,inst_13820,inst_13808);var inst_13808__$1 = inst_13821;var state_13836__$1 = (function (){var statearr_13847 = state_13836;(statearr_13847[7] = inst_13808__$1);
return statearr_13847;
})();var statearr_13848_13868 = state_13836__$1;(statearr_13848_13868[2] = null);
(statearr_13848_13868[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13837 === 9))
{var inst_13816 = (state_13836[9]);var state_13836__$1 = state_13836;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13836__$1,11,out,inst_13816);
} else
{if((state_val_13837 === 10))
{var inst_13828 = (state_13836[2]);var state_13836__$1 = state_13836;var statearr_13850_13869 = state_13836__$1;(statearr_13850_13869[2] = inst_13828);
(statearr_13850_13869[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13837 === 11))
{var inst_13808 = (state_13836[7]);var inst_13825 = (state_13836[2]);var tmp13849 = inst_13808;var inst_13808__$1 = tmp13849;var state_13836__$1 = (function (){var statearr_13851 = state_13836;(statearr_13851[7] = inst_13808__$1);
(statearr_13851[11] = inst_13825);
return statearr_13851;
})();var statearr_13852_13870 = state_13836__$1;(statearr_13852_13870[2] = null);
(statearr_13852_13870[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
var state_machine__5510__auto____0 = (function (){var statearr_13856 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13856[0] = state_machine__5510__auto__);
(statearr_13856[1] = 1);
return statearr_13856;
});
var state_machine__5510__auto____1 = (function (state_13836){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_13836);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e13857){if((e13857 instanceof Object))
{var ex__5513__auto__ = e13857;var statearr_13858_13871 = state_13836;(statearr_13858_13871[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13836);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13857;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13872 = state_13836;
state_13836 = G__13872;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_13836){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_13836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_13859 = f__5525__auto__.call(null);(statearr_13859[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___13860);
return statearr_13859;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5526__auto__);
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
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5524__auto___13965 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_13942){var state_val_13943 = (state_13942[1]);if((state_val_13943 === 1))
{var inst_13919 = 0;var state_13942__$1 = (function (){var statearr_13944 = state_13942;(statearr_13944[7] = inst_13919);
return statearr_13944;
})();var statearr_13945_13966 = state_13942__$1;(statearr_13945_13966[2] = null);
(statearr_13945_13966[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13943 === 2))
{var inst_13919 = (state_13942[7]);var inst_13921 = (inst_13919 < n);var state_13942__$1 = state_13942;if(cljs.core.truth_(inst_13921))
{var statearr_13946_13967 = state_13942__$1;(statearr_13946_13967[1] = 4);
} else
{var statearr_13947_13968 = state_13942__$1;(statearr_13947_13968[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13943 === 3))
{var inst_13939 = (state_13942[2]);var inst_13940 = cljs.core.async.close_BANG_.call(null,out);var state_13942__$1 = (function (){var statearr_13948 = state_13942;(statearr_13948[8] = inst_13939);
return statearr_13948;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13942__$1,inst_13940);
} else
{if((state_val_13943 === 4))
{var state_13942__$1 = state_13942;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13942__$1,7,ch);
} else
{if((state_val_13943 === 5))
{var state_13942__$1 = state_13942;var statearr_13949_13969 = state_13942__$1;(statearr_13949_13969[2] = null);
(statearr_13949_13969[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13943 === 6))
{var inst_13937 = (state_13942[2]);var state_13942__$1 = state_13942;var statearr_13950_13970 = state_13942__$1;(statearr_13950_13970[2] = inst_13937);
(statearr_13950_13970[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13943 === 7))
{var inst_13924 = (state_13942[9]);var inst_13924__$1 = (state_13942[2]);var inst_13925 = (inst_13924__$1 == null);var inst_13926 = cljs.core.not.call(null,inst_13925);var state_13942__$1 = (function (){var statearr_13951 = state_13942;(statearr_13951[9] = inst_13924__$1);
return statearr_13951;
})();if(inst_13926)
{var statearr_13952_13971 = state_13942__$1;(statearr_13952_13971[1] = 8);
} else
{var statearr_13953_13972 = state_13942__$1;(statearr_13953_13972[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13943 === 8))
{var inst_13924 = (state_13942[9]);var state_13942__$1 = state_13942;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13942__$1,11,out,inst_13924);
} else
{if((state_val_13943 === 9))
{var state_13942__$1 = state_13942;var statearr_13954_13973 = state_13942__$1;(statearr_13954_13973[2] = null);
(statearr_13954_13973[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13943 === 10))
{var inst_13934 = (state_13942[2]);var state_13942__$1 = state_13942;var statearr_13955_13974 = state_13942__$1;(statearr_13955_13974[2] = inst_13934);
(statearr_13955_13974[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13943 === 11))
{var inst_13919 = (state_13942[7]);var inst_13929 = (state_13942[2]);var inst_13930 = (inst_13919 + 1);var inst_13919__$1 = inst_13930;var state_13942__$1 = (function (){var statearr_13956 = state_13942;(statearr_13956[10] = inst_13929);
(statearr_13956[7] = inst_13919__$1);
return statearr_13956;
})();var statearr_13957_13975 = state_13942__$1;(statearr_13957_13975[2] = null);
(statearr_13957_13975[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
var state_machine__5510__auto____0 = (function (){var statearr_13961 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13961[0] = state_machine__5510__auto__);
(statearr_13961[1] = 1);
return statearr_13961;
});
var state_machine__5510__auto____1 = (function (state_13942){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_13942);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e13962){if((e13962 instanceof Object))
{var ex__5513__auto__ = e13962;var statearr_13963_13976 = state_13942;(statearr_13963_13976[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13942);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13962;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13977 = state_13942;
state_13942 = G__13977;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_13942){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_13942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_13964 = f__5525__auto__.call(null);(statearr_13964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___13965);
return statearr_13964;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5526__auto__);
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
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5524__auto___14074 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_14049){var state_val_14050 = (state_14049[1]);if((state_val_14050 === 1))
{var inst_14026 = null;var state_14049__$1 = (function (){var statearr_14051 = state_14049;(statearr_14051[7] = inst_14026);
return statearr_14051;
})();var statearr_14052_14075 = state_14049__$1;(statearr_14052_14075[2] = null);
(statearr_14052_14075[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14050 === 2))
{var state_14049__$1 = state_14049;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14049__$1,4,ch);
} else
{if((state_val_14050 === 3))
{var inst_14046 = (state_14049[2]);var inst_14047 = cljs.core.async.close_BANG_.call(null,out);var state_14049__$1 = (function (){var statearr_14053 = state_14049;(statearr_14053[8] = inst_14046);
return statearr_14053;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14049__$1,inst_14047);
} else
{if((state_val_14050 === 4))
{var inst_14029 = (state_14049[9]);var inst_14029__$1 = (state_14049[2]);var inst_14030 = (inst_14029__$1 == null);var inst_14031 = cljs.core.not.call(null,inst_14030);var state_14049__$1 = (function (){var statearr_14054 = state_14049;(statearr_14054[9] = inst_14029__$1);
return statearr_14054;
})();if(inst_14031)
{var statearr_14055_14076 = state_14049__$1;(statearr_14055_14076[1] = 5);
} else
{var statearr_14056_14077 = state_14049__$1;(statearr_14056_14077[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14050 === 5))
{var inst_14029 = (state_14049[9]);var inst_14026 = (state_14049[7]);var inst_14033 = cljs.core._EQ_.call(null,inst_14029,inst_14026);var state_14049__$1 = state_14049;if(inst_14033)
{var statearr_14057_14078 = state_14049__$1;(statearr_14057_14078[1] = 8);
} else
{var statearr_14058_14079 = state_14049__$1;(statearr_14058_14079[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14050 === 6))
{var state_14049__$1 = state_14049;var statearr_14060_14080 = state_14049__$1;(statearr_14060_14080[2] = null);
(statearr_14060_14080[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14050 === 7))
{var inst_14044 = (state_14049[2]);var state_14049__$1 = state_14049;var statearr_14061_14081 = state_14049__$1;(statearr_14061_14081[2] = inst_14044);
(statearr_14061_14081[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14050 === 8))
{var inst_14026 = (state_14049[7]);var tmp14059 = inst_14026;var inst_14026__$1 = tmp14059;var state_14049__$1 = (function (){var statearr_14062 = state_14049;(statearr_14062[7] = inst_14026__$1);
return statearr_14062;
})();var statearr_14063_14082 = state_14049__$1;(statearr_14063_14082[2] = null);
(statearr_14063_14082[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14050 === 9))
{var inst_14029 = (state_14049[9]);var state_14049__$1 = state_14049;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14049__$1,11,out,inst_14029);
} else
{if((state_val_14050 === 10))
{var inst_14041 = (state_14049[2]);var state_14049__$1 = state_14049;var statearr_14064_14083 = state_14049__$1;(statearr_14064_14083[2] = inst_14041);
(statearr_14064_14083[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14050 === 11))
{var inst_14029 = (state_14049[9]);var inst_14038 = (state_14049[2]);var inst_14026 = inst_14029;var state_14049__$1 = (function (){var statearr_14065 = state_14049;(statearr_14065[10] = inst_14038);
(statearr_14065[7] = inst_14026);
return statearr_14065;
})();var statearr_14066_14084 = state_14049__$1;(statearr_14066_14084[2] = null);
(statearr_14066_14084[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
var state_machine__5510__auto____0 = (function (){var statearr_14070 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14070[0] = state_machine__5510__auto__);
(statearr_14070[1] = 1);
return statearr_14070;
});
var state_machine__5510__auto____1 = (function (state_14049){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_14049);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e14071){if((e14071 instanceof Object))
{var ex__5513__auto__ = e14071;var statearr_14072_14085 = state_14049;(statearr_14072_14085[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14049);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14071;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14086 = state_14049;
state_14049 = G__14086;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_14049){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_14049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_14073 = f__5525__auto__.call(null);(statearr_14073[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___14074);
return statearr_14073;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5526__auto__);
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
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5524__auto___14221 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_14191){var state_val_14192 = (state_14191[1]);if((state_val_14192 === 1))
{var inst_14154 = (new Array(n));var inst_14155 = inst_14154;var inst_14156 = 0;var state_14191__$1 = (function (){var statearr_14193 = state_14191;(statearr_14193[7] = inst_14156);
(statearr_14193[8] = inst_14155);
return statearr_14193;
})();var statearr_14194_14222 = state_14191__$1;(statearr_14194_14222[2] = null);
(statearr_14194_14222[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14192 === 2))
{var state_14191__$1 = state_14191;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14191__$1,4,ch);
} else
{if((state_val_14192 === 3))
{var inst_14189 = (state_14191[2]);var state_14191__$1 = state_14191;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14191__$1,inst_14189);
} else
{if((state_val_14192 === 4))
{var inst_14159 = (state_14191[9]);var inst_14159__$1 = (state_14191[2]);var inst_14160 = (inst_14159__$1 == null);var inst_14161 = cljs.core.not.call(null,inst_14160);var state_14191__$1 = (function (){var statearr_14195 = state_14191;(statearr_14195[9] = inst_14159__$1);
return statearr_14195;
})();if(inst_14161)
{var statearr_14196_14223 = state_14191__$1;(statearr_14196_14223[1] = 5);
} else
{var statearr_14197_14224 = state_14191__$1;(statearr_14197_14224[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14192 === 5))
{var inst_14164 = (state_14191[10]);var inst_14159 = (state_14191[9]);var inst_14156 = (state_14191[7]);var inst_14155 = (state_14191[8]);var inst_14163 = (inst_14155[inst_14156] = inst_14159);var inst_14164__$1 = (inst_14156 + 1);var inst_14165 = (inst_14164__$1 < n);var state_14191__$1 = (function (){var statearr_14198 = state_14191;(statearr_14198[10] = inst_14164__$1);
(statearr_14198[11] = inst_14163);
return statearr_14198;
})();if(cljs.core.truth_(inst_14165))
{var statearr_14199_14225 = state_14191__$1;(statearr_14199_14225[1] = 8);
} else
{var statearr_14200_14226 = state_14191__$1;(statearr_14200_14226[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14192 === 6))
{var inst_14156 = (state_14191[7]);var inst_14177 = (inst_14156 > 0);var state_14191__$1 = state_14191;if(cljs.core.truth_(inst_14177))
{var statearr_14202_14227 = state_14191__$1;(statearr_14202_14227[1] = 12);
} else
{var statearr_14203_14228 = state_14191__$1;(statearr_14203_14228[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14192 === 7))
{var inst_14187 = (state_14191[2]);var state_14191__$1 = state_14191;var statearr_14204_14229 = state_14191__$1;(statearr_14204_14229[2] = inst_14187);
(statearr_14204_14229[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14192 === 8))
{var inst_14164 = (state_14191[10]);var inst_14155 = (state_14191[8]);var tmp14201 = inst_14155;var inst_14155__$1 = tmp14201;var inst_14156 = inst_14164;var state_14191__$1 = (function (){var statearr_14205 = state_14191;(statearr_14205[7] = inst_14156);
(statearr_14205[8] = inst_14155__$1);
return statearr_14205;
})();var statearr_14206_14230 = state_14191__$1;(statearr_14206_14230[2] = null);
(statearr_14206_14230[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14192 === 9))
{var inst_14155 = (state_14191[8]);var inst_14169 = cljs.core.vec.call(null,inst_14155);var state_14191__$1 = state_14191;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14191__$1,11,out,inst_14169);
} else
{if((state_val_14192 === 10))
{var inst_14175 = (state_14191[2]);var state_14191__$1 = state_14191;var statearr_14207_14231 = state_14191__$1;(statearr_14207_14231[2] = inst_14175);
(statearr_14207_14231[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14192 === 11))
{var inst_14171 = (state_14191[2]);var inst_14172 = (new Array(n));var inst_14155 = inst_14172;var inst_14156 = 0;var state_14191__$1 = (function (){var statearr_14208 = state_14191;(statearr_14208[12] = inst_14171);
(statearr_14208[7] = inst_14156);
(statearr_14208[8] = inst_14155);
return statearr_14208;
})();var statearr_14209_14232 = state_14191__$1;(statearr_14209_14232[2] = null);
(statearr_14209_14232[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14192 === 12))
{var inst_14155 = (state_14191[8]);var inst_14179 = cljs.core.vec.call(null,inst_14155);var state_14191__$1 = state_14191;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14191__$1,15,out,inst_14179);
} else
{if((state_val_14192 === 13))
{var state_14191__$1 = state_14191;var statearr_14210_14233 = state_14191__$1;(statearr_14210_14233[2] = null);
(statearr_14210_14233[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14192 === 14))
{var inst_14184 = (state_14191[2]);var inst_14185 = cljs.core.async.close_BANG_.call(null,out);var state_14191__$1 = (function (){var statearr_14211 = state_14191;(statearr_14211[13] = inst_14184);
return statearr_14211;
})();var statearr_14212_14234 = state_14191__$1;(statearr_14212_14234[2] = inst_14185);
(statearr_14212_14234[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14192 === 15))
{var inst_14181 = (state_14191[2]);var state_14191__$1 = state_14191;var statearr_14213_14235 = state_14191__$1;(statearr_14213_14235[2] = inst_14181);
(statearr_14213_14235[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
var state_machine__5510__auto____0 = (function (){var statearr_14217 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14217[0] = state_machine__5510__auto__);
(statearr_14217[1] = 1);
return statearr_14217;
});
var state_machine__5510__auto____1 = (function (state_14191){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_14191);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e14218){if((e14218 instanceof Object))
{var ex__5513__auto__ = e14218;var statearr_14219_14236 = state_14191;(statearr_14219_14236[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14191);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14218;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14237 = state_14191;
state_14191 = G__14237;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_14191){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_14191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_14220 = f__5525__auto__.call(null);(statearr_14220[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___14221);
return statearr_14220;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5526__auto__);
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
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5524__auto___14380 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_14350){var state_val_14351 = (state_14350[1]);if((state_val_14351 === 1))
{var inst_14309 = [];var inst_14310 = inst_14309;var inst_14311 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_14350__$1 = (function (){var statearr_14352 = state_14350;(statearr_14352[7] = inst_14310);
(statearr_14352[8] = inst_14311);
return statearr_14352;
})();var statearr_14353_14381 = state_14350__$1;(statearr_14353_14381[2] = null);
(statearr_14353_14381[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14351 === 2))
{var state_14350__$1 = state_14350;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14350__$1,4,ch);
} else
{if((state_val_14351 === 3))
{var inst_14348 = (state_14350[2]);var state_14350__$1 = state_14350;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14350__$1,inst_14348);
} else
{if((state_val_14351 === 4))
{var inst_14314 = (state_14350[9]);var inst_14314__$1 = (state_14350[2]);var inst_14315 = (inst_14314__$1 == null);var inst_14316 = cljs.core.not.call(null,inst_14315);var state_14350__$1 = (function (){var statearr_14354 = state_14350;(statearr_14354[9] = inst_14314__$1);
return statearr_14354;
})();if(inst_14316)
{var statearr_14355_14382 = state_14350__$1;(statearr_14355_14382[1] = 5);
} else
{var statearr_14356_14383 = state_14350__$1;(statearr_14356_14383[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14351 === 5))
{var inst_14318 = (state_14350[10]);var inst_14314 = (state_14350[9]);var inst_14311 = (state_14350[8]);var inst_14318__$1 = f.call(null,inst_14314);var inst_14319 = cljs.core._EQ_.call(null,inst_14318__$1,inst_14311);var inst_14320 = cljs.core.keyword_identical_QMARK_.call(null,inst_14311,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_14321 = (inst_14319) || (inst_14320);var state_14350__$1 = (function (){var statearr_14357 = state_14350;(statearr_14357[10] = inst_14318__$1);
return statearr_14357;
})();if(cljs.core.truth_(inst_14321))
{var statearr_14358_14384 = state_14350__$1;(statearr_14358_14384[1] = 8);
} else
{var statearr_14359_14385 = state_14350__$1;(statearr_14359_14385[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14351 === 6))
{var inst_14310 = (state_14350[7]);var inst_14335 = inst_14310.length;var inst_14336 = (inst_14335 > 0);var state_14350__$1 = state_14350;if(cljs.core.truth_(inst_14336))
{var statearr_14361_14386 = state_14350__$1;(statearr_14361_14386[1] = 12);
} else
{var statearr_14362_14387 = state_14350__$1;(statearr_14362_14387[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14351 === 7))
{var inst_14346 = (state_14350[2]);var state_14350__$1 = state_14350;var statearr_14363_14388 = state_14350__$1;(statearr_14363_14388[2] = inst_14346);
(statearr_14363_14388[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14351 === 8))
{var inst_14318 = (state_14350[10]);var inst_14314 = (state_14350[9]);var inst_14310 = (state_14350[7]);var inst_14323 = inst_14310.push(inst_14314);var tmp14360 = inst_14310;var inst_14310__$1 = tmp14360;var inst_14311 = inst_14318;var state_14350__$1 = (function (){var statearr_14364 = state_14350;(statearr_14364[11] = inst_14323);
(statearr_14364[7] = inst_14310__$1);
(statearr_14364[8] = inst_14311);
return statearr_14364;
})();var statearr_14365_14389 = state_14350__$1;(statearr_14365_14389[2] = null);
(statearr_14365_14389[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14351 === 9))
{var inst_14310 = (state_14350[7]);var inst_14326 = cljs.core.vec.call(null,inst_14310);var state_14350__$1 = state_14350;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14350__$1,11,out,inst_14326);
} else
{if((state_val_14351 === 10))
{var inst_14333 = (state_14350[2]);var state_14350__$1 = state_14350;var statearr_14366_14390 = state_14350__$1;(statearr_14366_14390[2] = inst_14333);
(statearr_14366_14390[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14351 === 11))
{var inst_14318 = (state_14350[10]);var inst_14314 = (state_14350[9]);var inst_14328 = (state_14350[2]);var inst_14329 = [];var inst_14330 = inst_14329.push(inst_14314);var inst_14310 = inst_14329;var inst_14311 = inst_14318;var state_14350__$1 = (function (){var statearr_14367 = state_14350;(statearr_14367[12] = inst_14328);
(statearr_14367[13] = inst_14330);
(statearr_14367[7] = inst_14310);
(statearr_14367[8] = inst_14311);
return statearr_14367;
})();var statearr_14368_14391 = state_14350__$1;(statearr_14368_14391[2] = null);
(statearr_14368_14391[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14351 === 12))
{var inst_14310 = (state_14350[7]);var inst_14338 = cljs.core.vec.call(null,inst_14310);var state_14350__$1 = state_14350;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14350__$1,15,out,inst_14338);
} else
{if((state_val_14351 === 13))
{var state_14350__$1 = state_14350;var statearr_14369_14392 = state_14350__$1;(statearr_14369_14392[2] = null);
(statearr_14369_14392[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14351 === 14))
{var inst_14343 = (state_14350[2]);var inst_14344 = cljs.core.async.close_BANG_.call(null,out);var state_14350__$1 = (function (){var statearr_14370 = state_14350;(statearr_14370[14] = inst_14343);
return statearr_14370;
})();var statearr_14371_14393 = state_14350__$1;(statearr_14371_14393[2] = inst_14344);
(statearr_14371_14393[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14351 === 15))
{var inst_14340 = (state_14350[2]);var state_14350__$1 = state_14350;var statearr_14372_14394 = state_14350__$1;(statearr_14372_14394[2] = inst_14340);
(statearr_14372_14394[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
var state_machine__5510__auto____0 = (function (){var statearr_14376 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14376[0] = state_machine__5510__auto__);
(statearr_14376[1] = 1);
return statearr_14376;
});
var state_machine__5510__auto____1 = (function (state_14350){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_14350);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e14377){if((e14377 instanceof Object))
{var ex__5513__auto__ = e14377;var statearr_14378_14395 = state_14350;(statearr_14378_14395[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14350);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14377;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14396 = state_14350;
state_14350 = G__14396;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_14350){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_14350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_14379 = f__5525__auto__.call(null);(statearr_14379[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___14380);
return statearr_14379;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5526__auto__);
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

//# sourceMappingURL=async.js.map