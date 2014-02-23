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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t13219 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13219 = (function (f,fn_handler,meta13220){
this.f = f;
this.fn_handler = fn_handler;
this.meta13220 = meta13220;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13219.cljs$lang$type = true;
cljs.core.async.t13219.cljs$lang$ctorStr = "cljs.core.async/t13219";
cljs.core.async.t13219.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t13219");
});
cljs.core.async.t13219.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13219.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t13219.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t13219.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13221){var self__ = this;
var _13221__$1 = this;return self__.meta13220;
});
cljs.core.async.t13219.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13221,meta13220__$1){var self__ = this;
var _13221__$1 = this;return (new cljs.core.async.t13219(self__.f,self__.fn_handler,meta13220__$1));
});
cljs.core.async.__GT_t13219 = (function __GT_t13219(f__$1,fn_handler__$1,meta13220){return (new cljs.core.async.t13219(f__$1,fn_handler__$1,meta13220));
});
}
return (new cljs.core.async.t13219(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__13223 = buff;if(G__13223)
{var bit__4053__auto__ = null;if(cljs.core.truth_((function (){var or__3403__auto__ = bit__4053__auto__;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return G__13223.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__13223.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13223);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13223);
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
{var val_13224 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_13224);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_13224);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4251__auto___13225 = n;var x_13226 = 0;while(true){
if((x_13226 < n__4251__auto___13225))
{(a[x_13226] = 0);
{
var G__13227 = (x_13226 + 1);
x_13226 = G__13227;
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
var G__13228 = (i + 1);
i = G__13228;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t13232 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13232 = (function (flag,alt_flag,meta13233){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta13233 = meta13233;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13232.cljs$lang$type = true;
cljs.core.async.t13232.cljs$lang$ctorStr = "cljs.core.async/t13232";
cljs.core.async.t13232.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t13232");
});
cljs.core.async.t13232.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13232.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t13232.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t13232.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13234){var self__ = this;
var _13234__$1 = this;return self__.meta13233;
});
cljs.core.async.t13232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13234,meta13233__$1){var self__ = this;
var _13234__$1 = this;return (new cljs.core.async.t13232(self__.flag,self__.alt_flag,meta13233__$1));
});
cljs.core.async.__GT_t13232 = (function __GT_t13232(flag__$1,alt_flag__$1,meta13233){return (new cljs.core.async.t13232(flag__$1,alt_flag__$1,meta13233));
});
}
return (new cljs.core.async.t13232(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t13238 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13238 = (function (cb,flag,alt_handler,meta13239){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta13239 = meta13239;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13238.cljs$lang$type = true;
cljs.core.async.t13238.cljs$lang$ctorStr = "cljs.core.async/t13238";
cljs.core.async.t13238.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t13238");
});
cljs.core.async.t13238.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13238.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t13238.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t13238.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13240){var self__ = this;
var _13240__$1 = this;return self__.meta13239;
});
cljs.core.async.t13238.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13240,meta13239__$1){var self__ = this;
var _13240__$1 = this;return (new cljs.core.async.t13238(self__.cb,self__.flag,self__.alt_handler,meta13239__$1));
});
cljs.core.async.__GT_t13238 = (function __GT_t13238(cb__$1,flag__$1,alt_handler__$1,meta13239){return (new cljs.core.async.t13238(cb__$1,flag__$1,alt_handler__$1,meta13239));
});
}
return (new cljs.core.async.t13238(cb,flag,alt_handler,null));
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
return (function (p1__13241_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13241_SHARP_,port], null));
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
var G__13242 = (i + 1);
i = G__13242;
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
var alts_BANG___delegate = function (ports,p__13243){var map__13245 = p__13243;var map__13245__$1 = ((cljs.core.seq_QMARK_.call(null,map__13245))?cljs.core.apply.call(null,cljs.core.hash_map,map__13245):map__13245);var opts = map__13245__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__13243 = null;if (arguments.length > 1) {
  p__13243 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__13243);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__13246){
var ports = cljs.core.first(arglist__13246);
var p__13243 = cljs.core.rest(arglist__13246);
return alts_BANG___delegate(ports,p__13243);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t13254 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13254 = (function (ch,f,map_LT_,meta13255){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13255 = meta13255;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13254.cljs$lang$type = true;
cljs.core.async.t13254.cljs$lang$ctorStr = "cljs.core.async/t13254";
cljs.core.async.t13254.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t13254");
});
cljs.core.async.t13254.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13254.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t13254.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13254.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t13257 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13257 = (function (fn1,_,meta13255,ch,f,map_LT_,meta13258){
this.fn1 = fn1;
this._ = _;
this.meta13255 = meta13255;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13258 = meta13258;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13257.cljs$lang$type = true;
cljs.core.async.t13257.cljs$lang$ctorStr = "cljs.core.async/t13257";
cljs.core.async.t13257.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t13257");
});
cljs.core.async.t13257.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13257.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t13257.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t13257.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__13247_SHARP_){return f1.call(null,(((p1__13247_SHARP_ == null))?null:self__.f.call(null,p1__13247_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t13257.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13259){var self__ = this;
var _13259__$1 = this;return self__.meta13258;
});
cljs.core.async.t13257.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13259,meta13258__$1){var self__ = this;
var _13259__$1 = this;return (new cljs.core.async.t13257(self__.fn1,self__._,self__.meta13255,self__.ch,self__.f,self__.map_LT_,meta13258__$1));
});
cljs.core.async.__GT_t13257 = (function __GT_t13257(fn1__$1,___$2,meta13255__$1,ch__$2,f__$2,map_LT___$2,meta13258){return (new cljs.core.async.t13257(fn1__$1,___$2,meta13255__$1,ch__$2,f__$2,map_LT___$2,meta13258));
});
}
return (new cljs.core.async.t13257(fn1,___$1,self__.meta13255,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t13254.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13254.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13254.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13256){var self__ = this;
var _13256__$1 = this;return self__.meta13255;
});
cljs.core.async.t13254.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13256,meta13255__$1){var self__ = this;
var _13256__$1 = this;return (new cljs.core.async.t13254(self__.ch,self__.f,self__.map_LT_,meta13255__$1));
});
cljs.core.async.__GT_t13254 = (function __GT_t13254(ch__$1,f__$1,map_LT___$1,meta13255){return (new cljs.core.async.t13254(ch__$1,f__$1,map_LT___$1,meta13255));
});
}
return (new cljs.core.async.t13254(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t13263 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13263 = (function (ch,f,map_GT_,meta13264){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta13264 = meta13264;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13263.cljs$lang$type = true;
cljs.core.async.t13263.cljs$lang$ctorStr = "cljs.core.async/t13263";
cljs.core.async.t13263.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t13263");
});
cljs.core.async.t13263.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13263.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t13263.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13263.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13263.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13263.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13263.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13265){var self__ = this;
var _13265__$1 = this;return self__.meta13264;
});
cljs.core.async.t13263.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13265,meta13264__$1){var self__ = this;
var _13265__$1 = this;return (new cljs.core.async.t13263(self__.ch,self__.f,self__.map_GT_,meta13264__$1));
});
cljs.core.async.__GT_t13263 = (function __GT_t13263(ch__$1,f__$1,map_GT___$1,meta13264){return (new cljs.core.async.t13263(ch__$1,f__$1,map_GT___$1,meta13264));
});
}
return (new cljs.core.async.t13263(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t13269 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13269 = (function (ch,p,filter_GT_,meta13270){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta13270 = meta13270;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13269.cljs$lang$type = true;
cljs.core.async.t13269.cljs$lang$ctorStr = "cljs.core.async/t13269";
cljs.core.async.t13269.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t13269");
});
cljs.core.async.t13269.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13269.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t13269.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13269.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13269.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13269.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13269.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13271){var self__ = this;
var _13271__$1 = this;return self__.meta13270;
});
cljs.core.async.t13269.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13271,meta13270__$1){var self__ = this;
var _13271__$1 = this;return (new cljs.core.async.t13269(self__.ch,self__.p,self__.filter_GT_,meta13270__$1));
});
cljs.core.async.__GT_t13269 = (function __GT_t13269(ch__$1,p__$1,filter_GT___$1,meta13270){return (new cljs.core.async.t13269(ch__$1,p__$1,filter_GT___$1,meta13270));
});
}
return (new cljs.core.async.t13269(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5524__auto___13354 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_13333){var state_val_13334 = (state_13333[1]);if((state_val_13334 === 1))
{var state_13333__$1 = state_13333;var statearr_13335_13355 = state_13333__$1;(statearr_13335_13355[2] = null);
(statearr_13335_13355[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13334 === 2))
{var state_13333__$1 = state_13333;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13333__$1,4,ch);
} else
{if((state_val_13334 === 3))
{var inst_13331 = (state_13333[2]);var state_13333__$1 = state_13333;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13333__$1,inst_13331);
} else
{if((state_val_13334 === 4))
{var inst_13315 = (state_13333[7]);var inst_13315__$1 = (state_13333[2]);var inst_13316 = (inst_13315__$1 == null);var state_13333__$1 = (function (){var statearr_13336 = state_13333;(statearr_13336[7] = inst_13315__$1);
return statearr_13336;
})();if(cljs.core.truth_(inst_13316))
{var statearr_13337_13356 = state_13333__$1;(statearr_13337_13356[1] = 5);
} else
{var statearr_13338_13357 = state_13333__$1;(statearr_13338_13357[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13334 === 5))
{var inst_13318 = cljs.core.async.close_BANG_.call(null,out);var state_13333__$1 = state_13333;var statearr_13339_13358 = state_13333__$1;(statearr_13339_13358[2] = inst_13318);
(statearr_13339_13358[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13334 === 6))
{var inst_13315 = (state_13333[7]);var inst_13320 = p.call(null,inst_13315);var state_13333__$1 = state_13333;if(cljs.core.truth_(inst_13320))
{var statearr_13340_13359 = state_13333__$1;(statearr_13340_13359[1] = 8);
} else
{var statearr_13341_13360 = state_13333__$1;(statearr_13341_13360[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13334 === 7))
{var inst_13329 = (state_13333[2]);var state_13333__$1 = state_13333;var statearr_13342_13361 = state_13333__$1;(statearr_13342_13361[2] = inst_13329);
(statearr_13342_13361[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13334 === 8))
{var inst_13315 = (state_13333[7]);var state_13333__$1 = state_13333;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13333__$1,11,out,inst_13315);
} else
{if((state_val_13334 === 9))
{var state_13333__$1 = state_13333;var statearr_13343_13362 = state_13333__$1;(statearr_13343_13362[2] = null);
(statearr_13343_13362[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13334 === 10))
{var inst_13326 = (state_13333[2]);var state_13333__$1 = (function (){var statearr_13344 = state_13333;(statearr_13344[8] = inst_13326);
return statearr_13344;
})();var statearr_13345_13363 = state_13333__$1;(statearr_13345_13363[2] = null);
(statearr_13345_13363[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13334 === 11))
{var inst_13323 = (state_13333[2]);var state_13333__$1 = state_13333;var statearr_13346_13364 = state_13333__$1;(statearr_13346_13364[2] = inst_13323);
(statearr_13346_13364[1] = 10);
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
var state_machine__5510__auto____0 = (function (){var statearr_13350 = [null,null,null,null,null,null,null,null,null];(statearr_13350[0] = state_machine__5510__auto__);
(statearr_13350[1] = 1);
return statearr_13350;
});
var state_machine__5510__auto____1 = (function (state_13333){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_13333);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e13351){if((e13351 instanceof Object))
{var ex__5513__auto__ = e13351;var statearr_13352_13365 = state_13333;(statearr_13352_13365[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13333);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13351;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13366 = state_13333;
state_13333 = G__13366;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_13333){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_13333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_13353 = f__5525__auto__.call(null);(statearr_13353[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___13354);
return statearr_13353;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5524__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_13518){var state_val_13519 = (state_13518[1]);if((state_val_13519 === 1))
{var state_13518__$1 = state_13518;var statearr_13520_13557 = state_13518__$1;(statearr_13520_13557[2] = null);
(statearr_13520_13557[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13519 === 2))
{var state_13518__$1 = state_13518;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13518__$1,4,in$);
} else
{if((state_val_13519 === 3))
{var inst_13516 = (state_13518[2]);var state_13518__$1 = state_13518;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13518__$1,inst_13516);
} else
{if((state_val_13519 === 4))
{var inst_13464 = (state_13518[7]);var inst_13464__$1 = (state_13518[2]);var inst_13465 = (inst_13464__$1 == null);var state_13518__$1 = (function (){var statearr_13521 = state_13518;(statearr_13521[7] = inst_13464__$1);
return statearr_13521;
})();if(cljs.core.truth_(inst_13465))
{var statearr_13522_13558 = state_13518__$1;(statearr_13522_13558[1] = 5);
} else
{var statearr_13523_13559 = state_13518__$1;(statearr_13523_13559[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13519 === 5))
{var inst_13467 = cljs.core.async.close_BANG_.call(null,out);var state_13518__$1 = state_13518;var statearr_13524_13560 = state_13518__$1;(statearr_13524_13560[2] = inst_13467);
(statearr_13524_13560[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13519 === 6))
{var inst_13464 = (state_13518[7]);var inst_13469 = f.call(null,inst_13464);var inst_13474 = cljs.core.seq.call(null,inst_13469);var inst_13475 = inst_13474;var inst_13476 = null;var inst_13477 = 0;var inst_13478 = 0;var state_13518__$1 = (function (){var statearr_13525 = state_13518;(statearr_13525[8] = inst_13475);
(statearr_13525[9] = inst_13478);
(statearr_13525[10] = inst_13477);
(statearr_13525[11] = inst_13476);
return statearr_13525;
})();var statearr_13526_13561 = state_13518__$1;(statearr_13526_13561[2] = null);
(statearr_13526_13561[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13519 === 7))
{var inst_13514 = (state_13518[2]);var state_13518__$1 = state_13518;var statearr_13527_13562 = state_13518__$1;(statearr_13527_13562[2] = inst_13514);
(statearr_13527_13562[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13519 === 8))
{var inst_13478 = (state_13518[9]);var inst_13477 = (state_13518[10]);var inst_13480 = (inst_13478 < inst_13477);var inst_13481 = inst_13480;var state_13518__$1 = state_13518;if(cljs.core.truth_(inst_13481))
{var statearr_13528_13563 = state_13518__$1;(statearr_13528_13563[1] = 10);
} else
{var statearr_13529_13564 = state_13518__$1;(statearr_13529_13564[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13519 === 9))
{var inst_13511 = (state_13518[2]);var state_13518__$1 = (function (){var statearr_13530 = state_13518;(statearr_13530[12] = inst_13511);
return statearr_13530;
})();var statearr_13531_13565 = state_13518__$1;(statearr_13531_13565[2] = null);
(statearr_13531_13565[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13519 === 10))
{var inst_13478 = (state_13518[9]);var inst_13476 = (state_13518[11]);var inst_13483 = cljs.core._nth.call(null,inst_13476,inst_13478);var state_13518__$1 = state_13518;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13518__$1,13,out,inst_13483);
} else
{if((state_val_13519 === 11))
{var inst_13475 = (state_13518[8]);var inst_13489 = (state_13518[13]);var inst_13489__$1 = cljs.core.seq.call(null,inst_13475);var state_13518__$1 = (function (){var statearr_13535 = state_13518;(statearr_13535[13] = inst_13489__$1);
return statearr_13535;
})();if(inst_13489__$1)
{var statearr_13536_13566 = state_13518__$1;(statearr_13536_13566[1] = 14);
} else
{var statearr_13537_13567 = state_13518__$1;(statearr_13537_13567[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13519 === 12))
{var inst_13509 = (state_13518[2]);var state_13518__$1 = state_13518;var statearr_13538_13568 = state_13518__$1;(statearr_13538_13568[2] = inst_13509);
(statearr_13538_13568[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13519 === 13))
{var inst_13475 = (state_13518[8]);var inst_13478 = (state_13518[9]);var inst_13477 = (state_13518[10]);var inst_13476 = (state_13518[11]);var inst_13485 = (state_13518[2]);var inst_13486 = (inst_13478 + 1);var tmp13532 = inst_13475;var tmp13533 = inst_13477;var tmp13534 = inst_13476;var inst_13475__$1 = tmp13532;var inst_13476__$1 = tmp13534;var inst_13477__$1 = tmp13533;var inst_13478__$1 = inst_13486;var state_13518__$1 = (function (){var statearr_13539 = state_13518;(statearr_13539[8] = inst_13475__$1);
(statearr_13539[14] = inst_13485);
(statearr_13539[9] = inst_13478__$1);
(statearr_13539[10] = inst_13477__$1);
(statearr_13539[11] = inst_13476__$1);
return statearr_13539;
})();var statearr_13540_13569 = state_13518__$1;(statearr_13540_13569[2] = null);
(statearr_13540_13569[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13519 === 14))
{var inst_13489 = (state_13518[13]);var inst_13491 = cljs.core.chunked_seq_QMARK_.call(null,inst_13489);var state_13518__$1 = state_13518;if(inst_13491)
{var statearr_13541_13570 = state_13518__$1;(statearr_13541_13570[1] = 17);
} else
{var statearr_13542_13571 = state_13518__$1;(statearr_13542_13571[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13519 === 15))
{var state_13518__$1 = state_13518;var statearr_13543_13572 = state_13518__$1;(statearr_13543_13572[2] = null);
(statearr_13543_13572[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13519 === 16))
{var inst_13507 = (state_13518[2]);var state_13518__$1 = state_13518;var statearr_13544_13573 = state_13518__$1;(statearr_13544_13573[2] = inst_13507);
(statearr_13544_13573[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13519 === 17))
{var inst_13489 = (state_13518[13]);var inst_13493 = cljs.core.chunk_first.call(null,inst_13489);var inst_13494 = cljs.core.chunk_rest.call(null,inst_13489);var inst_13495 = cljs.core.count.call(null,inst_13493);var inst_13475 = inst_13494;var inst_13476 = inst_13493;var inst_13477 = inst_13495;var inst_13478 = 0;var state_13518__$1 = (function (){var statearr_13545 = state_13518;(statearr_13545[8] = inst_13475);
(statearr_13545[9] = inst_13478);
(statearr_13545[10] = inst_13477);
(statearr_13545[11] = inst_13476);
return statearr_13545;
})();var statearr_13546_13574 = state_13518__$1;(statearr_13546_13574[2] = null);
(statearr_13546_13574[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13519 === 18))
{var inst_13489 = (state_13518[13]);var inst_13498 = cljs.core.first.call(null,inst_13489);var state_13518__$1 = state_13518;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13518__$1,20,out,inst_13498);
} else
{if((state_val_13519 === 19))
{var inst_13504 = (state_13518[2]);var state_13518__$1 = state_13518;var statearr_13547_13575 = state_13518__$1;(statearr_13547_13575[2] = inst_13504);
(statearr_13547_13575[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13519 === 20))
{var inst_13489 = (state_13518[13]);var inst_13500 = (state_13518[2]);var inst_13501 = cljs.core.next.call(null,inst_13489);var inst_13475 = inst_13501;var inst_13476 = null;var inst_13477 = 0;var inst_13478 = 0;var state_13518__$1 = (function (){var statearr_13548 = state_13518;(statearr_13548[8] = inst_13475);
(statearr_13548[9] = inst_13478);
(statearr_13548[10] = inst_13477);
(statearr_13548[11] = inst_13476);
(statearr_13548[15] = inst_13500);
return statearr_13548;
})();var statearr_13549_13576 = state_13518__$1;(statearr_13549_13576[2] = null);
(statearr_13549_13576[1] = 8);
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
var state_machine__5510__auto____0 = (function (){var statearr_13553 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13553[0] = state_machine__5510__auto__);
(statearr_13553[1] = 1);
return statearr_13553;
});
var state_machine__5510__auto____1 = (function (state_13518){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_13518);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e13554){if((e13554 instanceof Object))
{var ex__5513__auto__ = e13554;var statearr_13555_13577 = state_13518;(statearr_13555_13577[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13518);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13554;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13578 = state_13518;
state_13518 = G__13578;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_13518){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_13518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_13556 = f__5525__auto__.call(null);(statearr_13556[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto__);
return statearr_13556;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5524__auto___13659 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_13638){var state_val_13639 = (state_13638[1]);if((state_val_13639 === 1))
{var state_13638__$1 = state_13638;var statearr_13640_13660 = state_13638__$1;(statearr_13640_13660[2] = null);
(statearr_13640_13660[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13639 === 2))
{var state_13638__$1 = state_13638;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13638__$1,4,from);
} else
{if((state_val_13639 === 3))
{var inst_13636 = (state_13638[2]);var state_13638__$1 = state_13638;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13638__$1,inst_13636);
} else
{if((state_val_13639 === 4))
{var inst_13621 = (state_13638[7]);var inst_13621__$1 = (state_13638[2]);var inst_13622 = (inst_13621__$1 == null);var state_13638__$1 = (function (){var statearr_13641 = state_13638;(statearr_13641[7] = inst_13621__$1);
return statearr_13641;
})();if(cljs.core.truth_(inst_13622))
{var statearr_13642_13661 = state_13638__$1;(statearr_13642_13661[1] = 5);
} else
{var statearr_13643_13662 = state_13638__$1;(statearr_13643_13662[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13639 === 5))
{var state_13638__$1 = state_13638;if(cljs.core.truth_(close_QMARK_))
{var statearr_13644_13663 = state_13638__$1;(statearr_13644_13663[1] = 8);
} else
{var statearr_13645_13664 = state_13638__$1;(statearr_13645_13664[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13639 === 6))
{var inst_13621 = (state_13638[7]);var state_13638__$1 = state_13638;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13638__$1,11,to,inst_13621);
} else
{if((state_val_13639 === 7))
{var inst_13634 = (state_13638[2]);var state_13638__$1 = state_13638;var statearr_13646_13665 = state_13638__$1;(statearr_13646_13665[2] = inst_13634);
(statearr_13646_13665[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13639 === 8))
{var inst_13625 = cljs.core.async.close_BANG_.call(null,to);var state_13638__$1 = state_13638;var statearr_13647_13666 = state_13638__$1;(statearr_13647_13666[2] = inst_13625);
(statearr_13647_13666[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13639 === 9))
{var state_13638__$1 = state_13638;var statearr_13648_13667 = state_13638__$1;(statearr_13648_13667[2] = null);
(statearr_13648_13667[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13639 === 10))
{var inst_13628 = (state_13638[2]);var state_13638__$1 = state_13638;var statearr_13649_13668 = state_13638__$1;(statearr_13649_13668[2] = inst_13628);
(statearr_13649_13668[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13639 === 11))
{var inst_13631 = (state_13638[2]);var state_13638__$1 = (function (){var statearr_13650 = state_13638;(statearr_13650[8] = inst_13631);
return statearr_13650;
})();var statearr_13651_13669 = state_13638__$1;(statearr_13651_13669[2] = null);
(statearr_13651_13669[1] = 2);
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
var state_machine__5510__auto____0 = (function (){var statearr_13655 = [null,null,null,null,null,null,null,null,null];(statearr_13655[0] = state_machine__5510__auto__);
(statearr_13655[1] = 1);
return statearr_13655;
});
var state_machine__5510__auto____1 = (function (state_13638){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_13638);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e13656){if((e13656 instanceof Object))
{var ex__5513__auto__ = e13656;var statearr_13657_13670 = state_13638;(statearr_13657_13670[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13638);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13656;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13671 = state_13638;
state_13638 = G__13671;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_13638){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_13638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_13658 = f__5525__auto__.call(null);(statearr_13658[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___13659);
return statearr_13658;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5524__auto___13758 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_13736){var state_val_13737 = (state_13736[1]);if((state_val_13737 === 1))
{var state_13736__$1 = state_13736;var statearr_13738_13759 = state_13736__$1;(statearr_13738_13759[2] = null);
(statearr_13738_13759[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13737 === 2))
{var state_13736__$1 = state_13736;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13736__$1,4,ch);
} else
{if((state_val_13737 === 3))
{var inst_13734 = (state_13736[2]);var state_13736__$1 = state_13736;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13736__$1,inst_13734);
} else
{if((state_val_13737 === 4))
{var inst_13717 = (state_13736[7]);var inst_13717__$1 = (state_13736[2]);var inst_13718 = (inst_13717__$1 == null);var state_13736__$1 = (function (){var statearr_13739 = state_13736;(statearr_13739[7] = inst_13717__$1);
return statearr_13739;
})();if(cljs.core.truth_(inst_13718))
{var statearr_13740_13760 = state_13736__$1;(statearr_13740_13760[1] = 5);
} else
{var statearr_13741_13761 = state_13736__$1;(statearr_13741_13761[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13737 === 5))
{var inst_13720 = cljs.core.async.close_BANG_.call(null,tc);var inst_13721 = cljs.core.async.close_BANG_.call(null,fc);var state_13736__$1 = (function (){var statearr_13742 = state_13736;(statearr_13742[8] = inst_13720);
return statearr_13742;
})();var statearr_13743_13762 = state_13736__$1;(statearr_13743_13762[2] = inst_13721);
(statearr_13743_13762[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13737 === 6))
{var inst_13717 = (state_13736[7]);var inst_13723 = p.call(null,inst_13717);var state_13736__$1 = state_13736;if(cljs.core.truth_(inst_13723))
{var statearr_13744_13763 = state_13736__$1;(statearr_13744_13763[1] = 9);
} else
{var statearr_13745_13764 = state_13736__$1;(statearr_13745_13764[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13737 === 7))
{var inst_13732 = (state_13736[2]);var state_13736__$1 = state_13736;var statearr_13746_13765 = state_13736__$1;(statearr_13746_13765[2] = inst_13732);
(statearr_13746_13765[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13737 === 8))
{var inst_13729 = (state_13736[2]);var state_13736__$1 = (function (){var statearr_13747 = state_13736;(statearr_13747[9] = inst_13729);
return statearr_13747;
})();var statearr_13748_13766 = state_13736__$1;(statearr_13748_13766[2] = null);
(statearr_13748_13766[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13737 === 9))
{var state_13736__$1 = state_13736;var statearr_13749_13767 = state_13736__$1;(statearr_13749_13767[2] = tc);
(statearr_13749_13767[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13737 === 10))
{var state_13736__$1 = state_13736;var statearr_13750_13768 = state_13736__$1;(statearr_13750_13768[2] = fc);
(statearr_13750_13768[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13737 === 11))
{var inst_13717 = (state_13736[7]);var inst_13727 = (state_13736[2]);var state_13736__$1 = state_13736;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13736__$1,8,inst_13727,inst_13717);
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
var state_machine__5510__auto____0 = (function (){var statearr_13754 = [null,null,null,null,null,null,null,null,null,null];(statearr_13754[0] = state_machine__5510__auto__);
(statearr_13754[1] = 1);
return statearr_13754;
});
var state_machine__5510__auto____1 = (function (state_13736){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_13736);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e13755){if((e13755 instanceof Object))
{var ex__5513__auto__ = e13755;var statearr_13756_13769 = state_13736;(statearr_13756_13769[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13736);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13755;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13770 = state_13736;
state_13736 = G__13770;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_13736){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_13736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_13757 = f__5525__auto__.call(null);(statearr_13757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___13758);
return statearr_13757;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5524__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_13817){var state_val_13818 = (state_13817[1]);if((state_val_13818 === 7))
{var inst_13813 = (state_13817[2]);var state_13817__$1 = state_13817;var statearr_13819_13835 = state_13817__$1;(statearr_13819_13835[2] = inst_13813);
(statearr_13819_13835[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13818 === 6))
{var inst_13803 = (state_13817[7]);var inst_13806 = (state_13817[8]);var inst_13810 = f.call(null,inst_13803,inst_13806);var inst_13803__$1 = inst_13810;var state_13817__$1 = (function (){var statearr_13820 = state_13817;(statearr_13820[7] = inst_13803__$1);
return statearr_13820;
})();var statearr_13821_13836 = state_13817__$1;(statearr_13821_13836[2] = null);
(statearr_13821_13836[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13818 === 5))
{var inst_13803 = (state_13817[7]);var state_13817__$1 = state_13817;var statearr_13822_13837 = state_13817__$1;(statearr_13822_13837[2] = inst_13803);
(statearr_13822_13837[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13818 === 4))
{var inst_13806 = (state_13817[8]);var inst_13806__$1 = (state_13817[2]);var inst_13807 = (inst_13806__$1 == null);var state_13817__$1 = (function (){var statearr_13823 = state_13817;(statearr_13823[8] = inst_13806__$1);
return statearr_13823;
})();if(cljs.core.truth_(inst_13807))
{var statearr_13824_13838 = state_13817__$1;(statearr_13824_13838[1] = 5);
} else
{var statearr_13825_13839 = state_13817__$1;(statearr_13825_13839[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13818 === 3))
{var inst_13815 = (state_13817[2]);var state_13817__$1 = state_13817;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13817__$1,inst_13815);
} else
{if((state_val_13818 === 2))
{var state_13817__$1 = state_13817;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13817__$1,4,ch);
} else
{if((state_val_13818 === 1))
{var inst_13803 = init;var state_13817__$1 = (function (){var statearr_13826 = state_13817;(statearr_13826[7] = inst_13803);
return statearr_13826;
})();var statearr_13827_13840 = state_13817__$1;(statearr_13827_13840[2] = null);
(statearr_13827_13840[1] = 2);
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
var state_machine__5510__auto____0 = (function (){var statearr_13831 = [null,null,null,null,null,null,null,null,null];(statearr_13831[0] = state_machine__5510__auto__);
(statearr_13831[1] = 1);
return statearr_13831;
});
var state_machine__5510__auto____1 = (function (state_13817){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_13817);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e13832){if((e13832 instanceof Object))
{var ex__5513__auto__ = e13832;var statearr_13833_13841 = state_13817;(statearr_13833_13841[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13817);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13832;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13842 = state_13817;
state_13817 = G__13842;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_13817){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_13817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_13834 = f__5525__auto__.call(null);(statearr_13834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto__);
return statearr_13834;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5524__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_13904){var state_val_13905 = (state_13904[1]);if((state_val_13905 === 1))
{var inst_13884 = cljs.core.seq.call(null,coll);var inst_13885 = inst_13884;var state_13904__$1 = (function (){var statearr_13906 = state_13904;(statearr_13906[7] = inst_13885);
return statearr_13906;
})();var statearr_13907_13925 = state_13904__$1;(statearr_13907_13925[2] = null);
(statearr_13907_13925[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13905 === 2))
{var inst_13885 = (state_13904[7]);var state_13904__$1 = state_13904;if(cljs.core.truth_(inst_13885))
{var statearr_13908_13926 = state_13904__$1;(statearr_13908_13926[1] = 4);
} else
{var statearr_13909_13927 = state_13904__$1;(statearr_13909_13927[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13905 === 3))
{var inst_13902 = (state_13904[2]);var state_13904__$1 = state_13904;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13904__$1,inst_13902);
} else
{if((state_val_13905 === 4))
{var inst_13885 = (state_13904[7]);var inst_13888 = cljs.core.first.call(null,inst_13885);var state_13904__$1 = state_13904;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13904__$1,7,ch,inst_13888);
} else
{if((state_val_13905 === 5))
{var state_13904__$1 = state_13904;if(cljs.core.truth_(close_QMARK_))
{var statearr_13910_13928 = state_13904__$1;(statearr_13910_13928[1] = 8);
} else
{var statearr_13911_13929 = state_13904__$1;(statearr_13911_13929[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13905 === 6))
{var inst_13900 = (state_13904[2]);var state_13904__$1 = state_13904;var statearr_13912_13930 = state_13904__$1;(statearr_13912_13930[2] = inst_13900);
(statearr_13912_13930[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13905 === 7))
{var inst_13885 = (state_13904[7]);var inst_13890 = (state_13904[2]);var inst_13891 = cljs.core.next.call(null,inst_13885);var inst_13885__$1 = inst_13891;var state_13904__$1 = (function (){var statearr_13913 = state_13904;(statearr_13913[7] = inst_13885__$1);
(statearr_13913[8] = inst_13890);
return statearr_13913;
})();var statearr_13914_13931 = state_13904__$1;(statearr_13914_13931[2] = null);
(statearr_13914_13931[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13905 === 8))
{var inst_13895 = cljs.core.async.close_BANG_.call(null,ch);var state_13904__$1 = state_13904;var statearr_13915_13932 = state_13904__$1;(statearr_13915_13932[2] = inst_13895);
(statearr_13915_13932[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13905 === 9))
{var state_13904__$1 = state_13904;var statearr_13916_13933 = state_13904__$1;(statearr_13916_13933[2] = null);
(statearr_13916_13933[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13905 === 10))
{var inst_13898 = (state_13904[2]);var state_13904__$1 = state_13904;var statearr_13917_13934 = state_13904__$1;(statearr_13917_13934[2] = inst_13898);
(statearr_13917_13934[1] = 6);
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
var state_machine__5510__auto____0 = (function (){var statearr_13921 = [null,null,null,null,null,null,null,null,null];(statearr_13921[0] = state_machine__5510__auto__);
(statearr_13921[1] = 1);
return statearr_13921;
});
var state_machine__5510__auto____1 = (function (state_13904){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_13904);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e13922){if((e13922 instanceof Object))
{var ex__5513__auto__ = e13922;var statearr_13923_13935 = state_13904;(statearr_13923_13935[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13904);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13922;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13936 = state_13904;
state_13904 = G__13936;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_13904){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_13904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_13924 = f__5525__auto__.call(null);(statearr_13924[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto__);
return statearr_13924;
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
cljs.core.async.Mux = (function (){var obj13938 = {};return obj13938;
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
cljs.core.async.Mult = (function (){var obj13940 = {};return obj13940;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t14164 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14164 = (function (cs,ch,mult,meta14165){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta14165 = meta14165;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14164.cljs$lang$type = true;
cljs.core.async.t14164.cljs$lang$ctorStr = "cljs.core.async/t14164";
cljs.core.async.t14164.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t14164");
});})(cs))
;
cljs.core.async.t14164.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t14164.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t14164.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t14164.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t14164.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14164.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t14164.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14166){var self__ = this;
var _14166__$1 = this;return self__.meta14165;
});})(cs))
;
cljs.core.async.t14164.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14166,meta14165__$1){var self__ = this;
var _14166__$1 = this;return (new cljs.core.async.t14164(self__.cs,self__.ch,self__.mult,meta14165__$1));
});})(cs))
;
cljs.core.async.__GT_t14164 = ((function (cs){
return (function __GT_t14164(cs__$1,ch__$1,mult__$1,meta14165){return (new cljs.core.async.t14164(cs__$1,ch__$1,mult__$1,meta14165));
});})(cs))
;
}
return (new cljs.core.async.t14164(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5524__auto___14387 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_14301){var state_val_14302 = (state_14301[1]);if((state_val_14302 === 32))
{var inst_14245 = (state_14301[7]);var inst_14169 = (state_14301[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14301,31,Object,null,30);var inst_14252 = cljs.core.async.put_BANG_.call(null,inst_14245,inst_14169,done);var state_14301__$1 = state_14301;var statearr_14303_14388 = state_14301__$1;(statearr_14303_14388[2] = inst_14252);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14301__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14302 === 1))
{var state_14301__$1 = state_14301;var statearr_14304_14389 = state_14301__$1;(statearr_14304_14389[2] = null);
(statearr_14304_14389[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14302 === 33))
{var inst_14258 = (state_14301[9]);var inst_14260 = cljs.core.chunked_seq_QMARK_.call(null,inst_14258);var state_14301__$1 = state_14301;if(inst_14260)
{var statearr_14305_14390 = state_14301__$1;(statearr_14305_14390[1] = 36);
} else
{var statearr_14306_14391 = state_14301__$1;(statearr_14306_14391[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14302 === 2))
{var state_14301__$1 = state_14301;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14301__$1,4,ch);
} else
{if((state_val_14302 === 34))
{var state_14301__$1 = state_14301;var statearr_14307_14392 = state_14301__$1;(statearr_14307_14392[2] = null);
(statearr_14307_14392[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14302 === 3))
{var inst_14299 = (state_14301[2]);var state_14301__$1 = state_14301;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14301__$1,inst_14299);
} else
{if((state_val_14302 === 35))
{var inst_14283 = (state_14301[2]);var state_14301__$1 = state_14301;var statearr_14308_14393 = state_14301__$1;(statearr_14308_14393[2] = inst_14283);
(statearr_14308_14393[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14302 === 4))
{var inst_14169 = (state_14301[8]);var inst_14169__$1 = (state_14301[2]);var inst_14170 = (inst_14169__$1 == null);var state_14301__$1 = (function (){var statearr_14309 = state_14301;(statearr_14309[8] = inst_14169__$1);
return statearr_14309;
})();if(cljs.core.truth_(inst_14170))
{var statearr_14310_14394 = state_14301__$1;(statearr_14310_14394[1] = 5);
} else
{var statearr_14311_14395 = state_14301__$1;(statearr_14311_14395[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14302 === 36))
{var inst_14258 = (state_14301[9]);var inst_14262 = cljs.core.chunk_first.call(null,inst_14258);var inst_14263 = cljs.core.chunk_rest.call(null,inst_14258);var inst_14264 = cljs.core.count.call(null,inst_14262);var inst_14237 = inst_14263;var inst_14238 = inst_14262;var inst_14239 = inst_14264;var inst_14240 = 0;var state_14301__$1 = (function (){var statearr_14312 = state_14301;(statearr_14312[10] = inst_14240);
(statearr_14312[11] = inst_14239);
(statearr_14312[12] = inst_14238);
(statearr_14312[13] = inst_14237);
return statearr_14312;
})();var statearr_14313_14396 = state_14301__$1;(statearr_14313_14396[2] = null);
(statearr_14313_14396[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14302 === 5))
{var inst_14176 = cljs.core.deref.call(null,cs);var inst_14177 = cljs.core.seq.call(null,inst_14176);var inst_14178 = inst_14177;var inst_14179 = null;var inst_14180 = 0;var inst_14181 = 0;var state_14301__$1 = (function (){var statearr_14314 = state_14301;(statearr_14314[14] = inst_14178);
(statearr_14314[15] = inst_14179);
(statearr_14314[16] = inst_14180);
(statearr_14314[17] = inst_14181);
return statearr_14314;
})();var statearr_14315_14397 = state_14301__$1;(statearr_14315_14397[2] = null);
(statearr_14315_14397[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14302 === 37))
{var inst_14258 = (state_14301[9]);var inst_14267 = cljs.core.first.call(null,inst_14258);var state_14301__$1 = (function (){var statearr_14316 = state_14301;(statearr_14316[18] = inst_14267);
return statearr_14316;
})();var statearr_14317_14398 = state_14301__$1;(statearr_14317_14398[2] = null);
(statearr_14317_14398[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14302 === 6))
{var inst_14229 = (state_14301[19]);var inst_14228 = cljs.core.deref.call(null,cs);var inst_14229__$1 = cljs.core.keys.call(null,inst_14228);var inst_14230 = cljs.core.count.call(null,inst_14229__$1);var inst_14231 = cljs.core.reset_BANG_.call(null,dctr,inst_14230);var inst_14236 = cljs.core.seq.call(null,inst_14229__$1);var inst_14237 = inst_14236;var inst_14238 = null;var inst_14239 = 0;var inst_14240 = 0;var state_14301__$1 = (function (){var statearr_14318 = state_14301;(statearr_14318[10] = inst_14240);
(statearr_14318[11] = inst_14239);
(statearr_14318[12] = inst_14238);
(statearr_14318[19] = inst_14229__$1);
(statearr_14318[13] = inst_14237);
(statearr_14318[20] = inst_14231);
return statearr_14318;
})();var statearr_14319_14399 = state_14301__$1;(statearr_14319_14399[2] = null);
(statearr_14319_14399[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14302 === 38))
{var inst_14280 = (state_14301[2]);var state_14301__$1 = state_14301;var statearr_14320_14400 = state_14301__$1;(statearr_14320_14400[2] = inst_14280);
(statearr_14320_14400[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14302 === 7))
{var inst_14297 = (state_14301[2]);var state_14301__$1 = state_14301;var statearr_14321_14401 = state_14301__$1;(statearr_14321_14401[2] = inst_14297);
(statearr_14321_14401[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14302 === 39))
{var inst_14258 = (state_14301[9]);var inst_14276 = (state_14301[2]);var inst_14277 = cljs.core.next.call(null,inst_14258);var inst_14237 = inst_14277;var inst_14238 = null;var inst_14239 = 0;var inst_14240 = 0;var state_14301__$1 = (function (){var statearr_14322 = state_14301;(statearr_14322[10] = inst_14240);
(statearr_14322[11] = inst_14239);
(statearr_14322[12] = inst_14238);
(statearr_14322[13] = inst_14237);
(statearr_14322[21] = inst_14276);
return statearr_14322;
})();var statearr_14323_14402 = state_14301__$1;(statearr_14323_14402[2] = null);
(statearr_14323_14402[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14302 === 8))
{var inst_14180 = (state_14301[16]);var inst_14181 = (state_14301[17]);var inst_14183 = (inst_14181 < inst_14180);var inst_14184 = inst_14183;var state_14301__$1 = state_14301;if(cljs.core.truth_(inst_14184))
{var statearr_14324_14403 = state_14301__$1;(statearr_14324_14403[1] = 10);
} else
{var statearr_14325_14404 = state_14301__$1;(statearr_14325_14404[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14302 === 40))
{var inst_14267 = (state_14301[18]);var inst_14268 = (state_14301[2]);var inst_14269 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14270 = cljs.core.async.untap_STAR_.call(null,m,inst_14267);var state_14301__$1 = (function (){var statearr_14326 = state_14301;(statearr_14326[22] = inst_14269);
(statearr_14326[23] = inst_14268);
return statearr_14326;
})();var statearr_14327_14405 = state_14301__$1;(statearr_14327_14405[2] = inst_14270);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14301__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14302 === 9))
{var inst_14226 = (state_14301[2]);var state_14301__$1 = state_14301;var statearr_14328_14406 = state_14301__$1;(statearr_14328_14406[2] = inst_14226);
(statearr_14328_14406[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14302 === 41))
{var inst_14169 = (state_14301[8]);var inst_14267 = (state_14301[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14301,40,Object,null,39);var inst_14274 = cljs.core.async.put_BANG_.call(null,inst_14267,inst_14169,done);var state_14301__$1 = state_14301;var statearr_14329_14407 = state_14301__$1;(statearr_14329_14407[2] = inst_14274);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14301__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14302 === 10))
{var inst_14179 = (state_14301[15]);var inst_14181 = (state_14301[17]);var inst_14187 = cljs.core._nth.call(null,inst_14179,inst_14181);var inst_14188 = cljs.core.nth.call(null,inst_14187,0,null);var inst_14189 = cljs.core.nth.call(null,inst_14187,1,null);var state_14301__$1 = (function (){var statearr_14330 = state_14301;(statearr_14330[24] = inst_14188);
return statearr_14330;
})();if(cljs.core.truth_(inst_14189))
{var statearr_14331_14408 = state_14301__$1;(statearr_14331_14408[1] = 13);
} else
{var statearr_14332_14409 = state_14301__$1;(statearr_14332_14409[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14302 === 42))
{var state_14301__$1 = state_14301;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14301__$1,45,dchan);
} else
{if((state_val_14302 === 11))
{var inst_14178 = (state_14301[14]);var inst_14198 = (state_14301[25]);var inst_14198__$1 = cljs.core.seq.call(null,inst_14178);var state_14301__$1 = (function (){var statearr_14333 = state_14301;(statearr_14333[25] = inst_14198__$1);
return statearr_14333;
})();if(inst_14198__$1)
{var statearr_14334_14410 = state_14301__$1;(statearr_14334_14410[1] = 16);
} else
{var statearr_14335_14411 = state_14301__$1;(statearr_14335_14411[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14302 === 43))
{var state_14301__$1 = state_14301;var statearr_14336_14412 = state_14301__$1;(statearr_14336_14412[2] = null);
(statearr_14336_14412[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14302 === 12))
{var inst_14224 = (state_14301[2]);var state_14301__$1 = state_14301;var statearr_14337_14413 = state_14301__$1;(statearr_14337_14413[2] = inst_14224);
(statearr_14337_14413[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14302 === 44))
{var inst_14294 = (state_14301[2]);var state_14301__$1 = (function (){var statearr_14338 = state_14301;(statearr_14338[26] = inst_14294);
return statearr_14338;
})();var statearr_14339_14414 = state_14301__$1;(statearr_14339_14414[2] = null);
(statearr_14339_14414[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14302 === 13))
{var inst_14188 = (state_14301[24]);var inst_14191 = cljs.core.async.close_BANG_.call(null,inst_14188);var state_14301__$1 = state_14301;var statearr_14340_14415 = state_14301__$1;(statearr_14340_14415[2] = inst_14191);
(statearr_14340_14415[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14302 === 45))
{var inst_14291 = (state_14301[2]);var state_14301__$1 = state_14301;var statearr_14344_14416 = state_14301__$1;(statearr_14344_14416[2] = inst_14291);
(statearr_14344_14416[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14302 === 14))
{var state_14301__$1 = state_14301;var statearr_14345_14417 = state_14301__$1;(statearr_14345_14417[2] = null);
(statearr_14345_14417[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14302 === 15))
{var inst_14178 = (state_14301[14]);var inst_14179 = (state_14301[15]);var inst_14180 = (state_14301[16]);var inst_14181 = (state_14301[17]);var inst_14194 = (state_14301[2]);var inst_14195 = (inst_14181 + 1);var tmp14341 = inst_14178;var tmp14342 = inst_14179;var tmp14343 = inst_14180;var inst_14178__$1 = tmp14341;var inst_14179__$1 = tmp14342;var inst_14180__$1 = tmp14343;var inst_14181__$1 = inst_14195;var state_14301__$1 = (function (){var statearr_14346 = state_14301;(statearr_14346[14] = inst_14178__$1);
(statearr_14346[15] = inst_14179__$1);
(statearr_14346[16] = inst_14180__$1);
(statearr_14346[17] = inst_14181__$1);
(statearr_14346[27] = inst_14194);
return statearr_14346;
})();var statearr_14347_14418 = state_14301__$1;(statearr_14347_14418[2] = null);
(statearr_14347_14418[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14302 === 16))
{var inst_14198 = (state_14301[25]);var inst_14200 = cljs.core.chunked_seq_QMARK_.call(null,inst_14198);var state_14301__$1 = state_14301;if(inst_14200)
{var statearr_14348_14419 = state_14301__$1;(statearr_14348_14419[1] = 19);
} else
{var statearr_14349_14420 = state_14301__$1;(statearr_14349_14420[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14302 === 17))
{var state_14301__$1 = state_14301;var statearr_14350_14421 = state_14301__$1;(statearr_14350_14421[2] = null);
(statearr_14350_14421[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14302 === 18))
{var inst_14222 = (state_14301[2]);var state_14301__$1 = state_14301;var statearr_14351_14422 = state_14301__$1;(statearr_14351_14422[2] = inst_14222);
(statearr_14351_14422[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14302 === 19))
{var inst_14198 = (state_14301[25]);var inst_14202 = cljs.core.chunk_first.call(null,inst_14198);var inst_14203 = cljs.core.chunk_rest.call(null,inst_14198);var inst_14204 = cljs.core.count.call(null,inst_14202);var inst_14178 = inst_14203;var inst_14179 = inst_14202;var inst_14180 = inst_14204;var inst_14181 = 0;var state_14301__$1 = (function (){var statearr_14352 = state_14301;(statearr_14352[14] = inst_14178);
(statearr_14352[15] = inst_14179);
(statearr_14352[16] = inst_14180);
(statearr_14352[17] = inst_14181);
return statearr_14352;
})();var statearr_14353_14423 = state_14301__$1;(statearr_14353_14423[2] = null);
(statearr_14353_14423[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14302 === 20))
{var inst_14198 = (state_14301[25]);var inst_14208 = cljs.core.first.call(null,inst_14198);var inst_14209 = cljs.core.nth.call(null,inst_14208,0,null);var inst_14210 = cljs.core.nth.call(null,inst_14208,1,null);var state_14301__$1 = (function (){var statearr_14354 = state_14301;(statearr_14354[28] = inst_14209);
return statearr_14354;
})();if(cljs.core.truth_(inst_14210))
{var statearr_14355_14424 = state_14301__$1;(statearr_14355_14424[1] = 22);
} else
{var statearr_14356_14425 = state_14301__$1;(statearr_14356_14425[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14302 === 21))
{var inst_14219 = (state_14301[2]);var state_14301__$1 = state_14301;var statearr_14357_14426 = state_14301__$1;(statearr_14357_14426[2] = inst_14219);
(statearr_14357_14426[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14302 === 22))
{var inst_14209 = (state_14301[28]);var inst_14212 = cljs.core.async.close_BANG_.call(null,inst_14209);var state_14301__$1 = state_14301;var statearr_14358_14427 = state_14301__$1;(statearr_14358_14427[2] = inst_14212);
(statearr_14358_14427[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14302 === 23))
{var state_14301__$1 = state_14301;var statearr_14359_14428 = state_14301__$1;(statearr_14359_14428[2] = null);
(statearr_14359_14428[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14302 === 24))
{var inst_14198 = (state_14301[25]);var inst_14215 = (state_14301[2]);var inst_14216 = cljs.core.next.call(null,inst_14198);var inst_14178 = inst_14216;var inst_14179 = null;var inst_14180 = 0;var inst_14181 = 0;var state_14301__$1 = (function (){var statearr_14360 = state_14301;(statearr_14360[29] = inst_14215);
(statearr_14360[14] = inst_14178);
(statearr_14360[15] = inst_14179);
(statearr_14360[16] = inst_14180);
(statearr_14360[17] = inst_14181);
return statearr_14360;
})();var statearr_14361_14429 = state_14301__$1;(statearr_14361_14429[2] = null);
(statearr_14361_14429[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14302 === 25))
{var inst_14240 = (state_14301[10]);var inst_14239 = (state_14301[11]);var inst_14242 = (inst_14240 < inst_14239);var inst_14243 = inst_14242;var state_14301__$1 = state_14301;if(cljs.core.truth_(inst_14243))
{var statearr_14362_14430 = state_14301__$1;(statearr_14362_14430[1] = 27);
} else
{var statearr_14363_14431 = state_14301__$1;(statearr_14363_14431[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14302 === 26))
{var inst_14229 = (state_14301[19]);var inst_14287 = (state_14301[2]);var inst_14288 = cljs.core.seq.call(null,inst_14229);var state_14301__$1 = (function (){var statearr_14364 = state_14301;(statearr_14364[30] = inst_14287);
return statearr_14364;
})();if(inst_14288)
{var statearr_14365_14432 = state_14301__$1;(statearr_14365_14432[1] = 42);
} else
{var statearr_14366_14433 = state_14301__$1;(statearr_14366_14433[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14302 === 27))
{var inst_14240 = (state_14301[10]);var inst_14238 = (state_14301[12]);var inst_14245 = cljs.core._nth.call(null,inst_14238,inst_14240);var state_14301__$1 = (function (){var statearr_14367 = state_14301;(statearr_14367[7] = inst_14245);
return statearr_14367;
})();var statearr_14368_14434 = state_14301__$1;(statearr_14368_14434[2] = null);
(statearr_14368_14434[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14302 === 28))
{var inst_14258 = (state_14301[9]);var inst_14237 = (state_14301[13]);var inst_14258__$1 = cljs.core.seq.call(null,inst_14237);var state_14301__$1 = (function (){var statearr_14372 = state_14301;(statearr_14372[9] = inst_14258__$1);
return statearr_14372;
})();if(inst_14258__$1)
{var statearr_14373_14435 = state_14301__$1;(statearr_14373_14435[1] = 33);
} else
{var statearr_14374_14436 = state_14301__$1;(statearr_14374_14436[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14302 === 29))
{var inst_14285 = (state_14301[2]);var state_14301__$1 = state_14301;var statearr_14375_14437 = state_14301__$1;(statearr_14375_14437[2] = inst_14285);
(statearr_14375_14437[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14302 === 30))
{var inst_14240 = (state_14301[10]);var inst_14239 = (state_14301[11]);var inst_14238 = (state_14301[12]);var inst_14237 = (state_14301[13]);var inst_14254 = (state_14301[2]);var inst_14255 = (inst_14240 + 1);var tmp14369 = inst_14239;var tmp14370 = inst_14238;var tmp14371 = inst_14237;var inst_14237__$1 = tmp14371;var inst_14238__$1 = tmp14370;var inst_14239__$1 = tmp14369;var inst_14240__$1 = inst_14255;var state_14301__$1 = (function (){var statearr_14376 = state_14301;(statearr_14376[10] = inst_14240__$1);
(statearr_14376[31] = inst_14254);
(statearr_14376[11] = inst_14239__$1);
(statearr_14376[12] = inst_14238__$1);
(statearr_14376[13] = inst_14237__$1);
return statearr_14376;
})();var statearr_14377_14438 = state_14301__$1;(statearr_14377_14438[2] = null);
(statearr_14377_14438[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14302 === 31))
{var inst_14245 = (state_14301[7]);var inst_14246 = (state_14301[2]);var inst_14247 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14248 = cljs.core.async.untap_STAR_.call(null,m,inst_14245);var state_14301__$1 = (function (){var statearr_14378 = state_14301;(statearr_14378[32] = inst_14247);
(statearr_14378[33] = inst_14246);
return statearr_14378;
})();var statearr_14379_14439 = state_14301__$1;(statearr_14379_14439[2] = inst_14248);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14301__$1);
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
var state_machine__5510__auto____0 = (function (){var statearr_14383 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14383[0] = state_machine__5510__auto__);
(statearr_14383[1] = 1);
return statearr_14383;
});
var state_machine__5510__auto____1 = (function (state_14301){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_14301);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e14384){if((e14384 instanceof Object))
{var ex__5513__auto__ = e14384;var statearr_14385_14440 = state_14301;(statearr_14385_14440[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14301);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14384;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14441 = state_14301;
state_14301 = G__14441;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_14301){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_14301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_14386 = f__5525__auto__.call(null);(statearr_14386[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___14387);
return statearr_14386;
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
cljs.core.async.Mix = (function (){var obj14443 = {};return obj14443;
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
;var m = (function (){if(typeof cljs.core.async.t14553 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14553 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta14554){
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
this.meta14554 = meta14554;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14553.cljs$lang$type = true;
cljs.core.async.t14553.cljs$lang$ctorStr = "cljs.core.async/t14553";
cljs.core.async.t14553.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t14553");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14553.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t14553.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14553.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14553.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14553.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14553.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14553.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14553.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14553.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14555){var self__ = this;
var _14555__$1 = this;return self__.meta14554;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14553.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14555,meta14554__$1){var self__ = this;
var _14555__$1 = this;return (new cljs.core.async.t14553(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta14554__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t14553 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t14553(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta14554){return (new cljs.core.async.t14553(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta14554));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t14553(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5524__auto___14662 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_14620){var state_val_14621 = (state_14620[1]);if((state_val_14621 === 1))
{var inst_14559 = (state_14620[7]);var inst_14559__$1 = calc_state.call(null);var inst_14560 = cljs.core.seq_QMARK_.call(null,inst_14559__$1);var state_14620__$1 = (function (){var statearr_14622 = state_14620;(statearr_14622[7] = inst_14559__$1);
return statearr_14622;
})();if(inst_14560)
{var statearr_14623_14663 = state_14620__$1;(statearr_14623_14663[1] = 2);
} else
{var statearr_14624_14664 = state_14620__$1;(statearr_14624_14664[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14621 === 2))
{var inst_14559 = (state_14620[7]);var inst_14562 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14559);var state_14620__$1 = state_14620;var statearr_14625_14665 = state_14620__$1;(statearr_14625_14665[2] = inst_14562);
(statearr_14625_14665[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14621 === 3))
{var inst_14559 = (state_14620[7]);var state_14620__$1 = state_14620;var statearr_14626_14666 = state_14620__$1;(statearr_14626_14666[2] = inst_14559);
(statearr_14626_14666[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14621 === 4))
{var inst_14559 = (state_14620[7]);var inst_14565 = (state_14620[2]);var inst_14566 = cljs.core.get.call(null,inst_14565,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_14567 = cljs.core.get.call(null,inst_14565,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_14568 = cljs.core.get.call(null,inst_14565,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_14569 = inst_14559;var state_14620__$1 = (function (){var statearr_14627 = state_14620;(statearr_14627[8] = inst_14569);
(statearr_14627[9] = inst_14568);
(statearr_14627[10] = inst_14567);
(statearr_14627[11] = inst_14566);
return statearr_14627;
})();var statearr_14628_14667 = state_14620__$1;(statearr_14628_14667[2] = null);
(statearr_14628_14667[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14621 === 5))
{var inst_14569 = (state_14620[8]);var inst_14572 = cljs.core.seq_QMARK_.call(null,inst_14569);var state_14620__$1 = state_14620;if(inst_14572)
{var statearr_14629_14668 = state_14620__$1;(statearr_14629_14668[1] = 7);
} else
{var statearr_14630_14669 = state_14620__$1;(statearr_14630_14669[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14621 === 6))
{var inst_14618 = (state_14620[2]);var state_14620__$1 = state_14620;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14620__$1,inst_14618);
} else
{if((state_val_14621 === 7))
{var inst_14569 = (state_14620[8]);var inst_14574 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14569);var state_14620__$1 = state_14620;var statearr_14631_14670 = state_14620__$1;(statearr_14631_14670[2] = inst_14574);
(statearr_14631_14670[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14621 === 8))
{var inst_14569 = (state_14620[8]);var state_14620__$1 = state_14620;var statearr_14632_14671 = state_14620__$1;(statearr_14632_14671[2] = inst_14569);
(statearr_14632_14671[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14621 === 9))
{var inst_14577 = (state_14620[12]);var inst_14577__$1 = (state_14620[2]);var inst_14578 = cljs.core.get.call(null,inst_14577__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_14579 = cljs.core.get.call(null,inst_14577__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_14580 = cljs.core.get.call(null,inst_14577__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_14620__$1 = (function (){var statearr_14633 = state_14620;(statearr_14633[13] = inst_14579);
(statearr_14633[12] = inst_14577__$1);
(statearr_14633[14] = inst_14580);
return statearr_14633;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14620__$1,10,inst_14578);
} else
{if((state_val_14621 === 10))
{var inst_14585 = (state_14620[15]);var inst_14584 = (state_14620[16]);var inst_14583 = (state_14620[2]);var inst_14584__$1 = cljs.core.nth.call(null,inst_14583,0,null);var inst_14585__$1 = cljs.core.nth.call(null,inst_14583,1,null);var inst_14586 = (inst_14584__$1 == null);var inst_14587 = cljs.core._EQ_.call(null,inst_14585__$1,change);var inst_14588 = (inst_14586) || (inst_14587);var state_14620__$1 = (function (){var statearr_14634 = state_14620;(statearr_14634[15] = inst_14585__$1);
(statearr_14634[16] = inst_14584__$1);
return statearr_14634;
})();if(cljs.core.truth_(inst_14588))
{var statearr_14635_14672 = state_14620__$1;(statearr_14635_14672[1] = 11);
} else
{var statearr_14636_14673 = state_14620__$1;(statearr_14636_14673[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14621 === 11))
{var inst_14584 = (state_14620[16]);var inst_14590 = (inst_14584 == null);var state_14620__$1 = state_14620;if(cljs.core.truth_(inst_14590))
{var statearr_14637_14674 = state_14620__$1;(statearr_14637_14674[1] = 14);
} else
{var statearr_14638_14675 = state_14620__$1;(statearr_14638_14675[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14621 === 12))
{var inst_14585 = (state_14620[15]);var inst_14580 = (state_14620[14]);var inst_14599 = (state_14620[17]);var inst_14599__$1 = inst_14580.call(null,inst_14585);var state_14620__$1 = (function (){var statearr_14639 = state_14620;(statearr_14639[17] = inst_14599__$1);
return statearr_14639;
})();if(cljs.core.truth_(inst_14599__$1))
{var statearr_14640_14676 = state_14620__$1;(statearr_14640_14676[1] = 17);
} else
{var statearr_14641_14677 = state_14620__$1;(statearr_14641_14677[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14621 === 13))
{var inst_14616 = (state_14620[2]);var state_14620__$1 = state_14620;var statearr_14642_14678 = state_14620__$1;(statearr_14642_14678[2] = inst_14616);
(statearr_14642_14678[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14621 === 14))
{var inst_14585 = (state_14620[15]);var inst_14592 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14585);var state_14620__$1 = state_14620;var statearr_14643_14679 = state_14620__$1;(statearr_14643_14679[2] = inst_14592);
(statearr_14643_14679[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14621 === 15))
{var state_14620__$1 = state_14620;var statearr_14644_14680 = state_14620__$1;(statearr_14644_14680[2] = null);
(statearr_14644_14680[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14621 === 16))
{var inst_14595 = (state_14620[2]);var inst_14596 = calc_state.call(null);var inst_14569 = inst_14596;var state_14620__$1 = (function (){var statearr_14645 = state_14620;(statearr_14645[8] = inst_14569);
(statearr_14645[18] = inst_14595);
return statearr_14645;
})();var statearr_14646_14681 = state_14620__$1;(statearr_14646_14681[2] = null);
(statearr_14646_14681[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14621 === 17))
{var inst_14599 = (state_14620[17]);var state_14620__$1 = state_14620;var statearr_14647_14682 = state_14620__$1;(statearr_14647_14682[2] = inst_14599);
(statearr_14647_14682[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14621 === 18))
{var inst_14579 = (state_14620[13]);var inst_14585 = (state_14620[15]);var inst_14580 = (state_14620[14]);var inst_14602 = cljs.core.empty_QMARK_.call(null,inst_14580);var inst_14603 = inst_14579.call(null,inst_14585);var inst_14604 = cljs.core.not.call(null,inst_14603);var inst_14605 = (inst_14602) && (inst_14604);var state_14620__$1 = state_14620;var statearr_14648_14683 = state_14620__$1;(statearr_14648_14683[2] = inst_14605);
(statearr_14648_14683[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14621 === 19))
{var inst_14607 = (state_14620[2]);var state_14620__$1 = state_14620;if(cljs.core.truth_(inst_14607))
{var statearr_14649_14684 = state_14620__$1;(statearr_14649_14684[1] = 20);
} else
{var statearr_14650_14685 = state_14620__$1;(statearr_14650_14685[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14621 === 20))
{var inst_14584 = (state_14620[16]);var state_14620__$1 = state_14620;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14620__$1,23,out,inst_14584);
} else
{if((state_val_14621 === 21))
{var state_14620__$1 = state_14620;var statearr_14651_14686 = state_14620__$1;(statearr_14651_14686[2] = null);
(statearr_14651_14686[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14621 === 22))
{var inst_14577 = (state_14620[12]);var inst_14613 = (state_14620[2]);var inst_14569 = inst_14577;var state_14620__$1 = (function (){var statearr_14652 = state_14620;(statearr_14652[8] = inst_14569);
(statearr_14652[19] = inst_14613);
return statearr_14652;
})();var statearr_14653_14687 = state_14620__$1;(statearr_14653_14687[2] = null);
(statearr_14653_14687[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14621 === 23))
{var inst_14610 = (state_14620[2]);var state_14620__$1 = state_14620;var statearr_14654_14688 = state_14620__$1;(statearr_14654_14688[2] = inst_14610);
(statearr_14654_14688[1] = 22);
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
var state_machine__5510__auto____0 = (function (){var statearr_14658 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14658[0] = state_machine__5510__auto__);
(statearr_14658[1] = 1);
return statearr_14658;
});
var state_machine__5510__auto____1 = (function (state_14620){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_14620);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e14659){if((e14659 instanceof Object))
{var ex__5513__auto__ = e14659;var statearr_14660_14689 = state_14620;(statearr_14660_14689[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14620);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14659;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14690 = state_14620;
state_14620 = G__14690;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_14620){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_14620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_14661 = f__5525__auto__.call(null);(statearr_14661[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___14662);
return statearr_14661;
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
cljs.core.async.Pub = (function (){var obj14692 = {};return obj14692;
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
return (function (p1__14693_SHARP_){if(cljs.core.truth_(p1__14693_SHARP_.call(null,topic)))
{return p1__14693_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__14693_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3403__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t14818 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14818 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta14819){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta14819 = meta14819;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14818.cljs$lang$type = true;
cljs.core.async.t14818.cljs$lang$ctorStr = "cljs.core.async/t14818";
cljs.core.async.t14818.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t14818");
});})(mults,ensure_mult))
;
cljs.core.async.t14818.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t14818.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t14818.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t14818.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t14818.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t14818.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14818.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t14818.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14820){var self__ = this;
var _14820__$1 = this;return self__.meta14819;
});})(mults,ensure_mult))
;
cljs.core.async.t14818.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14820,meta14819__$1){var self__ = this;
var _14820__$1 = this;return (new cljs.core.async.t14818(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta14819__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t14818 = ((function (mults,ensure_mult){
return (function __GT_t14818(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14819){return (new cljs.core.async.t14818(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14819));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t14818(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5524__auto___14942 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_14894){var state_val_14895 = (state_14894[1]);if((state_val_14895 === 1))
{var state_14894__$1 = state_14894;var statearr_14896_14943 = state_14894__$1;(statearr_14896_14943[2] = null);
(statearr_14896_14943[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14895 === 2))
{var state_14894__$1 = state_14894;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14894__$1,4,ch);
} else
{if((state_val_14895 === 3))
{var inst_14892 = (state_14894[2]);var state_14894__$1 = state_14894;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14894__$1,inst_14892);
} else
{if((state_val_14895 === 4))
{var inst_14823 = (state_14894[7]);var inst_14823__$1 = (state_14894[2]);var inst_14824 = (inst_14823__$1 == null);var state_14894__$1 = (function (){var statearr_14897 = state_14894;(statearr_14897[7] = inst_14823__$1);
return statearr_14897;
})();if(cljs.core.truth_(inst_14824))
{var statearr_14898_14944 = state_14894__$1;(statearr_14898_14944[1] = 5);
} else
{var statearr_14899_14945 = state_14894__$1;(statearr_14899_14945[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14895 === 5))
{var inst_14830 = cljs.core.deref.call(null,mults);var inst_14831 = cljs.core.vals.call(null,inst_14830);var inst_14832 = cljs.core.seq.call(null,inst_14831);var inst_14833 = inst_14832;var inst_14834 = null;var inst_14835 = 0;var inst_14836 = 0;var state_14894__$1 = (function (){var statearr_14900 = state_14894;(statearr_14900[8] = inst_14833);
(statearr_14900[9] = inst_14834);
(statearr_14900[10] = inst_14835);
(statearr_14900[11] = inst_14836);
return statearr_14900;
})();var statearr_14901_14946 = state_14894__$1;(statearr_14901_14946[2] = null);
(statearr_14901_14946[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14895 === 6))
{var inst_14823 = (state_14894[7]);var inst_14873 = (state_14894[12]);var inst_14871 = (state_14894[13]);var inst_14871__$1 = topic_fn.call(null,inst_14823);var inst_14872 = cljs.core.deref.call(null,mults);var inst_14873__$1 = cljs.core.get.call(null,inst_14872,inst_14871__$1);var state_14894__$1 = (function (){var statearr_14902 = state_14894;(statearr_14902[12] = inst_14873__$1);
(statearr_14902[13] = inst_14871__$1);
return statearr_14902;
})();if(cljs.core.truth_(inst_14873__$1))
{var statearr_14903_14947 = state_14894__$1;(statearr_14903_14947[1] = 19);
} else
{var statearr_14904_14948 = state_14894__$1;(statearr_14904_14948[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14895 === 7))
{var inst_14890 = (state_14894[2]);var state_14894__$1 = state_14894;var statearr_14905_14949 = state_14894__$1;(statearr_14905_14949[2] = inst_14890);
(statearr_14905_14949[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14895 === 8))
{var inst_14835 = (state_14894[10]);var inst_14836 = (state_14894[11]);var inst_14838 = (inst_14836 < inst_14835);var inst_14839 = inst_14838;var state_14894__$1 = state_14894;if(cljs.core.truth_(inst_14839))
{var statearr_14909_14950 = state_14894__$1;(statearr_14909_14950[1] = 10);
} else
{var statearr_14910_14951 = state_14894__$1;(statearr_14910_14951[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14895 === 9))
{var inst_14869 = (state_14894[2]);var state_14894__$1 = state_14894;var statearr_14911_14952 = state_14894__$1;(statearr_14911_14952[2] = inst_14869);
(statearr_14911_14952[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14895 === 10))
{var inst_14833 = (state_14894[8]);var inst_14834 = (state_14894[9]);var inst_14835 = (state_14894[10]);var inst_14836 = (state_14894[11]);var inst_14841 = cljs.core._nth.call(null,inst_14834,inst_14836);var inst_14842 = cljs.core.async.muxch_STAR_.call(null,inst_14841);var inst_14843 = cljs.core.async.close_BANG_.call(null,inst_14842);var inst_14844 = (inst_14836 + 1);var tmp14906 = inst_14833;var tmp14907 = inst_14834;var tmp14908 = inst_14835;var inst_14833__$1 = tmp14906;var inst_14834__$1 = tmp14907;var inst_14835__$1 = tmp14908;var inst_14836__$1 = inst_14844;var state_14894__$1 = (function (){var statearr_14912 = state_14894;(statearr_14912[8] = inst_14833__$1);
(statearr_14912[14] = inst_14843);
(statearr_14912[9] = inst_14834__$1);
(statearr_14912[10] = inst_14835__$1);
(statearr_14912[11] = inst_14836__$1);
return statearr_14912;
})();var statearr_14913_14953 = state_14894__$1;(statearr_14913_14953[2] = null);
(statearr_14913_14953[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14895 === 11))
{var inst_14847 = (state_14894[15]);var inst_14833 = (state_14894[8]);var inst_14847__$1 = cljs.core.seq.call(null,inst_14833);var state_14894__$1 = (function (){var statearr_14914 = state_14894;(statearr_14914[15] = inst_14847__$1);
return statearr_14914;
})();if(inst_14847__$1)
{var statearr_14915_14954 = state_14894__$1;(statearr_14915_14954[1] = 13);
} else
{var statearr_14916_14955 = state_14894__$1;(statearr_14916_14955[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14895 === 12))
{var inst_14867 = (state_14894[2]);var state_14894__$1 = state_14894;var statearr_14917_14956 = state_14894__$1;(statearr_14917_14956[2] = inst_14867);
(statearr_14917_14956[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14895 === 13))
{var inst_14847 = (state_14894[15]);var inst_14849 = cljs.core.chunked_seq_QMARK_.call(null,inst_14847);var state_14894__$1 = state_14894;if(inst_14849)
{var statearr_14918_14957 = state_14894__$1;(statearr_14918_14957[1] = 16);
} else
{var statearr_14919_14958 = state_14894__$1;(statearr_14919_14958[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14895 === 14))
{var state_14894__$1 = state_14894;var statearr_14920_14959 = state_14894__$1;(statearr_14920_14959[2] = null);
(statearr_14920_14959[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14895 === 15))
{var inst_14865 = (state_14894[2]);var state_14894__$1 = state_14894;var statearr_14921_14960 = state_14894__$1;(statearr_14921_14960[2] = inst_14865);
(statearr_14921_14960[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14895 === 16))
{var inst_14847 = (state_14894[15]);var inst_14851 = cljs.core.chunk_first.call(null,inst_14847);var inst_14852 = cljs.core.chunk_rest.call(null,inst_14847);var inst_14853 = cljs.core.count.call(null,inst_14851);var inst_14833 = inst_14852;var inst_14834 = inst_14851;var inst_14835 = inst_14853;var inst_14836 = 0;var state_14894__$1 = (function (){var statearr_14922 = state_14894;(statearr_14922[8] = inst_14833);
(statearr_14922[9] = inst_14834);
(statearr_14922[10] = inst_14835);
(statearr_14922[11] = inst_14836);
return statearr_14922;
})();var statearr_14923_14961 = state_14894__$1;(statearr_14923_14961[2] = null);
(statearr_14923_14961[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14895 === 17))
{var inst_14847 = (state_14894[15]);var inst_14856 = cljs.core.first.call(null,inst_14847);var inst_14857 = cljs.core.async.muxch_STAR_.call(null,inst_14856);var inst_14858 = cljs.core.async.close_BANG_.call(null,inst_14857);var inst_14859 = cljs.core.next.call(null,inst_14847);var inst_14833 = inst_14859;var inst_14834 = null;var inst_14835 = 0;var inst_14836 = 0;var state_14894__$1 = (function (){var statearr_14924 = state_14894;(statearr_14924[8] = inst_14833);
(statearr_14924[9] = inst_14834);
(statearr_14924[10] = inst_14835);
(statearr_14924[11] = inst_14836);
(statearr_14924[16] = inst_14858);
return statearr_14924;
})();var statearr_14925_14962 = state_14894__$1;(statearr_14925_14962[2] = null);
(statearr_14925_14962[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14895 === 18))
{var inst_14862 = (state_14894[2]);var state_14894__$1 = state_14894;var statearr_14926_14963 = state_14894__$1;(statearr_14926_14963[2] = inst_14862);
(statearr_14926_14963[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14895 === 19))
{var state_14894__$1 = state_14894;var statearr_14927_14964 = state_14894__$1;(statearr_14927_14964[2] = null);
(statearr_14927_14964[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14895 === 20))
{var state_14894__$1 = state_14894;var statearr_14928_14965 = state_14894__$1;(statearr_14928_14965[2] = null);
(statearr_14928_14965[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14895 === 21))
{var inst_14887 = (state_14894[2]);var state_14894__$1 = (function (){var statearr_14929 = state_14894;(statearr_14929[17] = inst_14887);
return statearr_14929;
})();var statearr_14930_14966 = state_14894__$1;(statearr_14930_14966[2] = null);
(statearr_14930_14966[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14895 === 22))
{var inst_14884 = (state_14894[2]);var state_14894__$1 = state_14894;var statearr_14931_14967 = state_14894__$1;(statearr_14931_14967[2] = inst_14884);
(statearr_14931_14967[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14895 === 23))
{var inst_14871 = (state_14894[13]);var inst_14875 = (state_14894[2]);var inst_14876 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14871);var state_14894__$1 = (function (){var statearr_14932 = state_14894;(statearr_14932[18] = inst_14875);
return statearr_14932;
})();var statearr_14933_14968 = state_14894__$1;(statearr_14933_14968[2] = inst_14876);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14894__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14895 === 24))
{var inst_14823 = (state_14894[7]);var inst_14873 = (state_14894[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14894,23,Object,null,22);var inst_14880 = cljs.core.async.muxch_STAR_.call(null,inst_14873);var state_14894__$1 = state_14894;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14894__$1,25,inst_14880,inst_14823);
} else
{if((state_val_14895 === 25))
{var inst_14882 = (state_14894[2]);var state_14894__$1 = state_14894;var statearr_14934_14969 = state_14894__$1;(statearr_14934_14969[2] = inst_14882);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14894__$1);
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
var state_machine__5510__auto____0 = (function (){var statearr_14938 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14938[0] = state_machine__5510__auto__);
(statearr_14938[1] = 1);
return statearr_14938;
});
var state_machine__5510__auto____1 = (function (state_14894){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_14894);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e14939){if((e14939 instanceof Object))
{var ex__5513__auto__ = e14939;var statearr_14940_14970 = state_14894;(statearr_14940_14970[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14894);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14939;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14971 = state_14894;
state_14894 = G__14971;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_14894){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_14894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_14941 = f__5525__auto__.call(null);(statearr_14941[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___14942);
return statearr_14941;
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
,cljs.core.range.call(null,cnt));var c__5524__auto___15108 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_15078){var state_val_15079 = (state_15078[1]);if((state_val_15079 === 1))
{var state_15078__$1 = state_15078;var statearr_15080_15109 = state_15078__$1;(statearr_15080_15109[2] = null);
(statearr_15080_15109[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15079 === 2))
{var inst_15041 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_15042 = 0;var state_15078__$1 = (function (){var statearr_15081 = state_15078;(statearr_15081[7] = inst_15042);
(statearr_15081[8] = inst_15041);
return statearr_15081;
})();var statearr_15082_15110 = state_15078__$1;(statearr_15082_15110[2] = null);
(statearr_15082_15110[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15079 === 3))
{var inst_15076 = (state_15078[2]);var state_15078__$1 = state_15078;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15078__$1,inst_15076);
} else
{if((state_val_15079 === 4))
{var inst_15042 = (state_15078[7]);var inst_15044 = (inst_15042 < cnt);var state_15078__$1 = state_15078;if(cljs.core.truth_(inst_15044))
{var statearr_15083_15111 = state_15078__$1;(statearr_15083_15111[1] = 6);
} else
{var statearr_15084_15112 = state_15078__$1;(statearr_15084_15112[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15079 === 5))
{var inst_15062 = (state_15078[2]);var state_15078__$1 = (function (){var statearr_15085 = state_15078;(statearr_15085[9] = inst_15062);
return statearr_15085;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15078__$1,12,dchan);
} else
{if((state_val_15079 === 6))
{var state_15078__$1 = state_15078;var statearr_15086_15113 = state_15078__$1;(statearr_15086_15113[2] = null);
(statearr_15086_15113[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15079 === 7))
{var state_15078__$1 = state_15078;var statearr_15087_15114 = state_15078__$1;(statearr_15087_15114[2] = null);
(statearr_15087_15114[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15079 === 8))
{var inst_15060 = (state_15078[2]);var state_15078__$1 = state_15078;var statearr_15088_15115 = state_15078__$1;(statearr_15088_15115[2] = inst_15060);
(statearr_15088_15115[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15079 === 9))
{var inst_15042 = (state_15078[7]);var inst_15055 = (state_15078[2]);var inst_15056 = (inst_15042 + 1);var inst_15042__$1 = inst_15056;var state_15078__$1 = (function (){var statearr_15089 = state_15078;(statearr_15089[10] = inst_15055);
(statearr_15089[7] = inst_15042__$1);
return statearr_15089;
})();var statearr_15090_15116 = state_15078__$1;(statearr_15090_15116[2] = null);
(statearr_15090_15116[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15079 === 10))
{var inst_15046 = (state_15078[2]);var inst_15047 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_15078__$1 = (function (){var statearr_15091 = state_15078;(statearr_15091[11] = inst_15046);
return statearr_15091;
})();var statearr_15092_15117 = state_15078__$1;(statearr_15092_15117[2] = inst_15047);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15078__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15079 === 11))
{var inst_15042 = (state_15078[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15078,10,Object,null,9);var inst_15051 = chs__$1.call(null,inst_15042);var inst_15052 = done.call(null,inst_15042);var inst_15053 = cljs.core.async.take_BANG_.call(null,inst_15051,inst_15052);var state_15078__$1 = state_15078;var statearr_15093_15118 = state_15078__$1;(statearr_15093_15118[2] = inst_15053);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15078__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15079 === 12))
{var inst_15064 = (state_15078[12]);var inst_15064__$1 = (state_15078[2]);var inst_15065 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15064__$1);var state_15078__$1 = (function (){var statearr_15094 = state_15078;(statearr_15094[12] = inst_15064__$1);
return statearr_15094;
})();if(cljs.core.truth_(inst_15065))
{var statearr_15095_15119 = state_15078__$1;(statearr_15095_15119[1] = 13);
} else
{var statearr_15096_15120 = state_15078__$1;(statearr_15096_15120[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15079 === 13))
{var inst_15067 = cljs.core.async.close_BANG_.call(null,out);var state_15078__$1 = state_15078;var statearr_15097_15121 = state_15078__$1;(statearr_15097_15121[2] = inst_15067);
(statearr_15097_15121[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15079 === 14))
{var inst_15064 = (state_15078[12]);var inst_15069 = cljs.core.apply.call(null,f,inst_15064);var state_15078__$1 = state_15078;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15078__$1,16,out,inst_15069);
} else
{if((state_val_15079 === 15))
{var inst_15074 = (state_15078[2]);var state_15078__$1 = state_15078;var statearr_15098_15122 = state_15078__$1;(statearr_15098_15122[2] = inst_15074);
(statearr_15098_15122[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15079 === 16))
{var inst_15071 = (state_15078[2]);var state_15078__$1 = (function (){var statearr_15099 = state_15078;(statearr_15099[13] = inst_15071);
return statearr_15099;
})();var statearr_15100_15123 = state_15078__$1;(statearr_15100_15123[2] = null);
(statearr_15100_15123[1] = 2);
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
var state_machine__5510__auto____0 = (function (){var statearr_15104 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15104[0] = state_machine__5510__auto__);
(statearr_15104[1] = 1);
return statearr_15104;
});
var state_machine__5510__auto____1 = (function (state_15078){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_15078);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e15105){if((e15105 instanceof Object))
{var ex__5513__auto__ = e15105;var statearr_15106_15124 = state_15078;(statearr_15106_15124[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15078);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15105;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15125 = state_15078;
state_15078 = G__15125;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_15078){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_15078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_15107 = f__5525__auto__.call(null);(statearr_15107[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___15108);
return statearr_15107;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5524__auto___15233 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_15209){var state_val_15210 = (state_15209[1]);if((state_val_15210 === 1))
{var inst_15180 = cljs.core.vec.call(null,chs);var inst_15181 = inst_15180;var state_15209__$1 = (function (){var statearr_15211 = state_15209;(statearr_15211[7] = inst_15181);
return statearr_15211;
})();var statearr_15212_15234 = state_15209__$1;(statearr_15212_15234[2] = null);
(statearr_15212_15234[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15210 === 2))
{var inst_15181 = (state_15209[7]);var inst_15183 = cljs.core.count.call(null,inst_15181);var inst_15184 = (inst_15183 > 0);var state_15209__$1 = state_15209;if(cljs.core.truth_(inst_15184))
{var statearr_15213_15235 = state_15209__$1;(statearr_15213_15235[1] = 4);
} else
{var statearr_15214_15236 = state_15209__$1;(statearr_15214_15236[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15210 === 3))
{var inst_15207 = (state_15209[2]);var state_15209__$1 = state_15209;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15209__$1,inst_15207);
} else
{if((state_val_15210 === 4))
{var inst_15181 = (state_15209[7]);var state_15209__$1 = state_15209;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15209__$1,7,inst_15181);
} else
{if((state_val_15210 === 5))
{var inst_15203 = cljs.core.async.close_BANG_.call(null,out);var state_15209__$1 = state_15209;var statearr_15215_15237 = state_15209__$1;(statearr_15215_15237[2] = inst_15203);
(statearr_15215_15237[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15210 === 6))
{var inst_15205 = (state_15209[2]);var state_15209__$1 = state_15209;var statearr_15216_15238 = state_15209__$1;(statearr_15216_15238[2] = inst_15205);
(statearr_15216_15238[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15210 === 7))
{var inst_15188 = (state_15209[8]);var inst_15189 = (state_15209[9]);var inst_15188__$1 = (state_15209[2]);var inst_15189__$1 = cljs.core.nth.call(null,inst_15188__$1,0,null);var inst_15190 = cljs.core.nth.call(null,inst_15188__$1,1,null);var inst_15191 = (inst_15189__$1 == null);var state_15209__$1 = (function (){var statearr_15217 = state_15209;(statearr_15217[10] = inst_15190);
(statearr_15217[8] = inst_15188__$1);
(statearr_15217[9] = inst_15189__$1);
return statearr_15217;
})();if(cljs.core.truth_(inst_15191))
{var statearr_15218_15239 = state_15209__$1;(statearr_15218_15239[1] = 8);
} else
{var statearr_15219_15240 = state_15209__$1;(statearr_15219_15240[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15210 === 8))
{var inst_15190 = (state_15209[10]);var inst_15188 = (state_15209[8]);var inst_15189 = (state_15209[9]);var inst_15181 = (state_15209[7]);var inst_15193 = (function (){var c = inst_15190;var v = inst_15189;var vec__15186 = inst_15188;var cs = inst_15181;return ((function (c,v,vec__15186,cs,inst_15190,inst_15188,inst_15189,inst_15181,state_val_15210){
return (function (p1__15126_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__15126_SHARP_);
});
;})(c,v,vec__15186,cs,inst_15190,inst_15188,inst_15189,inst_15181,state_val_15210))
})();var inst_15194 = cljs.core.filterv.call(null,inst_15193,inst_15181);var inst_15181__$1 = inst_15194;var state_15209__$1 = (function (){var statearr_15220 = state_15209;(statearr_15220[7] = inst_15181__$1);
return statearr_15220;
})();var statearr_15221_15241 = state_15209__$1;(statearr_15221_15241[2] = null);
(statearr_15221_15241[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15210 === 9))
{var inst_15189 = (state_15209[9]);var state_15209__$1 = state_15209;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15209__$1,11,out,inst_15189);
} else
{if((state_val_15210 === 10))
{var inst_15201 = (state_15209[2]);var state_15209__$1 = state_15209;var statearr_15223_15242 = state_15209__$1;(statearr_15223_15242[2] = inst_15201);
(statearr_15223_15242[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15210 === 11))
{var inst_15181 = (state_15209[7]);var inst_15198 = (state_15209[2]);var tmp15222 = inst_15181;var inst_15181__$1 = tmp15222;var state_15209__$1 = (function (){var statearr_15224 = state_15209;(statearr_15224[7] = inst_15181__$1);
(statearr_15224[11] = inst_15198);
return statearr_15224;
})();var statearr_15225_15243 = state_15209__$1;(statearr_15225_15243[2] = null);
(statearr_15225_15243[1] = 2);
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
var state_machine__5510__auto____0 = (function (){var statearr_15229 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15229[0] = state_machine__5510__auto__);
(statearr_15229[1] = 1);
return statearr_15229;
});
var state_machine__5510__auto____1 = (function (state_15209){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_15209);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e15230){if((e15230 instanceof Object))
{var ex__5513__auto__ = e15230;var statearr_15231_15244 = state_15209;(statearr_15231_15244[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15209);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15230;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15245 = state_15209;
state_15209 = G__15245;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_15209){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_15209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_15232 = f__5525__auto__.call(null);(statearr_15232[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___15233);
return statearr_15232;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5524__auto___15338 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_15315){var state_val_15316 = (state_15315[1]);if((state_val_15316 === 1))
{var inst_15292 = 0;var state_15315__$1 = (function (){var statearr_15317 = state_15315;(statearr_15317[7] = inst_15292);
return statearr_15317;
})();var statearr_15318_15339 = state_15315__$1;(statearr_15318_15339[2] = null);
(statearr_15318_15339[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15316 === 2))
{var inst_15292 = (state_15315[7]);var inst_15294 = (inst_15292 < n);var state_15315__$1 = state_15315;if(cljs.core.truth_(inst_15294))
{var statearr_15319_15340 = state_15315__$1;(statearr_15319_15340[1] = 4);
} else
{var statearr_15320_15341 = state_15315__$1;(statearr_15320_15341[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15316 === 3))
{var inst_15312 = (state_15315[2]);var inst_15313 = cljs.core.async.close_BANG_.call(null,out);var state_15315__$1 = (function (){var statearr_15321 = state_15315;(statearr_15321[8] = inst_15312);
return statearr_15321;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15315__$1,inst_15313);
} else
{if((state_val_15316 === 4))
{var state_15315__$1 = state_15315;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15315__$1,7,ch);
} else
{if((state_val_15316 === 5))
{var state_15315__$1 = state_15315;var statearr_15322_15342 = state_15315__$1;(statearr_15322_15342[2] = null);
(statearr_15322_15342[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15316 === 6))
{var inst_15310 = (state_15315[2]);var state_15315__$1 = state_15315;var statearr_15323_15343 = state_15315__$1;(statearr_15323_15343[2] = inst_15310);
(statearr_15323_15343[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15316 === 7))
{var inst_15297 = (state_15315[9]);var inst_15297__$1 = (state_15315[2]);var inst_15298 = (inst_15297__$1 == null);var inst_15299 = cljs.core.not.call(null,inst_15298);var state_15315__$1 = (function (){var statearr_15324 = state_15315;(statearr_15324[9] = inst_15297__$1);
return statearr_15324;
})();if(inst_15299)
{var statearr_15325_15344 = state_15315__$1;(statearr_15325_15344[1] = 8);
} else
{var statearr_15326_15345 = state_15315__$1;(statearr_15326_15345[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15316 === 8))
{var inst_15297 = (state_15315[9]);var state_15315__$1 = state_15315;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15315__$1,11,out,inst_15297);
} else
{if((state_val_15316 === 9))
{var state_15315__$1 = state_15315;var statearr_15327_15346 = state_15315__$1;(statearr_15327_15346[2] = null);
(statearr_15327_15346[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15316 === 10))
{var inst_15307 = (state_15315[2]);var state_15315__$1 = state_15315;var statearr_15328_15347 = state_15315__$1;(statearr_15328_15347[2] = inst_15307);
(statearr_15328_15347[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15316 === 11))
{var inst_15292 = (state_15315[7]);var inst_15302 = (state_15315[2]);var inst_15303 = (inst_15292 + 1);var inst_15292__$1 = inst_15303;var state_15315__$1 = (function (){var statearr_15329 = state_15315;(statearr_15329[10] = inst_15302);
(statearr_15329[7] = inst_15292__$1);
return statearr_15329;
})();var statearr_15330_15348 = state_15315__$1;(statearr_15330_15348[2] = null);
(statearr_15330_15348[1] = 2);
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
var state_machine__5510__auto____0 = (function (){var statearr_15334 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15334[0] = state_machine__5510__auto__);
(statearr_15334[1] = 1);
return statearr_15334;
});
var state_machine__5510__auto____1 = (function (state_15315){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_15315);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e15335){if((e15335 instanceof Object))
{var ex__5513__auto__ = e15335;var statearr_15336_15349 = state_15315;(statearr_15336_15349[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15315);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15335;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15350 = state_15315;
state_15315 = G__15350;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_15315){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_15315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_15337 = f__5525__auto__.call(null);(statearr_15337[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___15338);
return statearr_15337;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5524__auto___15447 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_15422){var state_val_15423 = (state_15422[1]);if((state_val_15423 === 1))
{var inst_15399 = null;var state_15422__$1 = (function (){var statearr_15424 = state_15422;(statearr_15424[7] = inst_15399);
return statearr_15424;
})();var statearr_15425_15448 = state_15422__$1;(statearr_15425_15448[2] = null);
(statearr_15425_15448[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15423 === 2))
{var state_15422__$1 = state_15422;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15422__$1,4,ch);
} else
{if((state_val_15423 === 3))
{var inst_15419 = (state_15422[2]);var inst_15420 = cljs.core.async.close_BANG_.call(null,out);var state_15422__$1 = (function (){var statearr_15426 = state_15422;(statearr_15426[8] = inst_15419);
return statearr_15426;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15422__$1,inst_15420);
} else
{if((state_val_15423 === 4))
{var inst_15402 = (state_15422[9]);var inst_15402__$1 = (state_15422[2]);var inst_15403 = (inst_15402__$1 == null);var inst_15404 = cljs.core.not.call(null,inst_15403);var state_15422__$1 = (function (){var statearr_15427 = state_15422;(statearr_15427[9] = inst_15402__$1);
return statearr_15427;
})();if(inst_15404)
{var statearr_15428_15449 = state_15422__$1;(statearr_15428_15449[1] = 5);
} else
{var statearr_15429_15450 = state_15422__$1;(statearr_15429_15450[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15423 === 5))
{var inst_15399 = (state_15422[7]);var inst_15402 = (state_15422[9]);var inst_15406 = cljs.core._EQ_.call(null,inst_15402,inst_15399);var state_15422__$1 = state_15422;if(inst_15406)
{var statearr_15430_15451 = state_15422__$1;(statearr_15430_15451[1] = 8);
} else
{var statearr_15431_15452 = state_15422__$1;(statearr_15431_15452[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15423 === 6))
{var state_15422__$1 = state_15422;var statearr_15433_15453 = state_15422__$1;(statearr_15433_15453[2] = null);
(statearr_15433_15453[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15423 === 7))
{var inst_15417 = (state_15422[2]);var state_15422__$1 = state_15422;var statearr_15434_15454 = state_15422__$1;(statearr_15434_15454[2] = inst_15417);
(statearr_15434_15454[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15423 === 8))
{var inst_15399 = (state_15422[7]);var tmp15432 = inst_15399;var inst_15399__$1 = tmp15432;var state_15422__$1 = (function (){var statearr_15435 = state_15422;(statearr_15435[7] = inst_15399__$1);
return statearr_15435;
})();var statearr_15436_15455 = state_15422__$1;(statearr_15436_15455[2] = null);
(statearr_15436_15455[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15423 === 9))
{var inst_15402 = (state_15422[9]);var state_15422__$1 = state_15422;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15422__$1,11,out,inst_15402);
} else
{if((state_val_15423 === 10))
{var inst_15414 = (state_15422[2]);var state_15422__$1 = state_15422;var statearr_15437_15456 = state_15422__$1;(statearr_15437_15456[2] = inst_15414);
(statearr_15437_15456[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15423 === 11))
{var inst_15402 = (state_15422[9]);var inst_15411 = (state_15422[2]);var inst_15399 = inst_15402;var state_15422__$1 = (function (){var statearr_15438 = state_15422;(statearr_15438[10] = inst_15411);
(statearr_15438[7] = inst_15399);
return statearr_15438;
})();var statearr_15439_15457 = state_15422__$1;(statearr_15439_15457[2] = null);
(statearr_15439_15457[1] = 2);
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
var state_machine__5510__auto____0 = (function (){var statearr_15443 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15443[0] = state_machine__5510__auto__);
(statearr_15443[1] = 1);
return statearr_15443;
});
var state_machine__5510__auto____1 = (function (state_15422){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_15422);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e15444){if((e15444 instanceof Object))
{var ex__5513__auto__ = e15444;var statearr_15445_15458 = state_15422;(statearr_15445_15458[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15422);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15444;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15459 = state_15422;
state_15422 = G__15459;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_15422){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_15422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_15446 = f__5525__auto__.call(null);(statearr_15446[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___15447);
return statearr_15446;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5524__auto___15594 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_15564){var state_val_15565 = (state_15564[1]);if((state_val_15565 === 1))
{var inst_15527 = (new Array(n));var inst_15528 = inst_15527;var inst_15529 = 0;var state_15564__$1 = (function (){var statearr_15566 = state_15564;(statearr_15566[7] = inst_15528);
(statearr_15566[8] = inst_15529);
return statearr_15566;
})();var statearr_15567_15595 = state_15564__$1;(statearr_15567_15595[2] = null);
(statearr_15567_15595[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15565 === 2))
{var state_15564__$1 = state_15564;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15564__$1,4,ch);
} else
{if((state_val_15565 === 3))
{var inst_15562 = (state_15564[2]);var state_15564__$1 = state_15564;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15564__$1,inst_15562);
} else
{if((state_val_15565 === 4))
{var inst_15532 = (state_15564[9]);var inst_15532__$1 = (state_15564[2]);var inst_15533 = (inst_15532__$1 == null);var inst_15534 = cljs.core.not.call(null,inst_15533);var state_15564__$1 = (function (){var statearr_15568 = state_15564;(statearr_15568[9] = inst_15532__$1);
return statearr_15568;
})();if(inst_15534)
{var statearr_15569_15596 = state_15564__$1;(statearr_15569_15596[1] = 5);
} else
{var statearr_15570_15597 = state_15564__$1;(statearr_15570_15597[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15565 === 5))
{var inst_15532 = (state_15564[9]);var inst_15537 = (state_15564[10]);var inst_15528 = (state_15564[7]);var inst_15529 = (state_15564[8]);var inst_15536 = (inst_15528[inst_15529] = inst_15532);var inst_15537__$1 = (inst_15529 + 1);var inst_15538 = (inst_15537__$1 < n);var state_15564__$1 = (function (){var statearr_15571 = state_15564;(statearr_15571[10] = inst_15537__$1);
(statearr_15571[11] = inst_15536);
return statearr_15571;
})();if(cljs.core.truth_(inst_15538))
{var statearr_15572_15598 = state_15564__$1;(statearr_15572_15598[1] = 8);
} else
{var statearr_15573_15599 = state_15564__$1;(statearr_15573_15599[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15565 === 6))
{var inst_15529 = (state_15564[8]);var inst_15550 = (inst_15529 > 0);var state_15564__$1 = state_15564;if(cljs.core.truth_(inst_15550))
{var statearr_15575_15600 = state_15564__$1;(statearr_15575_15600[1] = 12);
} else
{var statearr_15576_15601 = state_15564__$1;(statearr_15576_15601[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15565 === 7))
{var inst_15560 = (state_15564[2]);var state_15564__$1 = state_15564;var statearr_15577_15602 = state_15564__$1;(statearr_15577_15602[2] = inst_15560);
(statearr_15577_15602[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15565 === 8))
{var inst_15537 = (state_15564[10]);var inst_15528 = (state_15564[7]);var tmp15574 = inst_15528;var inst_15528__$1 = tmp15574;var inst_15529 = inst_15537;var state_15564__$1 = (function (){var statearr_15578 = state_15564;(statearr_15578[7] = inst_15528__$1);
(statearr_15578[8] = inst_15529);
return statearr_15578;
})();var statearr_15579_15603 = state_15564__$1;(statearr_15579_15603[2] = null);
(statearr_15579_15603[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15565 === 9))
{var inst_15528 = (state_15564[7]);var inst_15542 = cljs.core.vec.call(null,inst_15528);var state_15564__$1 = state_15564;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15564__$1,11,out,inst_15542);
} else
{if((state_val_15565 === 10))
{var inst_15548 = (state_15564[2]);var state_15564__$1 = state_15564;var statearr_15580_15604 = state_15564__$1;(statearr_15580_15604[2] = inst_15548);
(statearr_15580_15604[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15565 === 11))
{var inst_15544 = (state_15564[2]);var inst_15545 = (new Array(n));var inst_15528 = inst_15545;var inst_15529 = 0;var state_15564__$1 = (function (){var statearr_15581 = state_15564;(statearr_15581[12] = inst_15544);
(statearr_15581[7] = inst_15528);
(statearr_15581[8] = inst_15529);
return statearr_15581;
})();var statearr_15582_15605 = state_15564__$1;(statearr_15582_15605[2] = null);
(statearr_15582_15605[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15565 === 12))
{var inst_15528 = (state_15564[7]);var inst_15552 = cljs.core.vec.call(null,inst_15528);var state_15564__$1 = state_15564;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15564__$1,15,out,inst_15552);
} else
{if((state_val_15565 === 13))
{var state_15564__$1 = state_15564;var statearr_15583_15606 = state_15564__$1;(statearr_15583_15606[2] = null);
(statearr_15583_15606[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15565 === 14))
{var inst_15557 = (state_15564[2]);var inst_15558 = cljs.core.async.close_BANG_.call(null,out);var state_15564__$1 = (function (){var statearr_15584 = state_15564;(statearr_15584[13] = inst_15557);
return statearr_15584;
})();var statearr_15585_15607 = state_15564__$1;(statearr_15585_15607[2] = inst_15558);
(statearr_15585_15607[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15565 === 15))
{var inst_15554 = (state_15564[2]);var state_15564__$1 = state_15564;var statearr_15586_15608 = state_15564__$1;(statearr_15586_15608[2] = inst_15554);
(statearr_15586_15608[1] = 14);
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
var state_machine__5510__auto____0 = (function (){var statearr_15590 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15590[0] = state_machine__5510__auto__);
(statearr_15590[1] = 1);
return statearr_15590;
});
var state_machine__5510__auto____1 = (function (state_15564){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_15564);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e15591){if((e15591 instanceof Object))
{var ex__5513__auto__ = e15591;var statearr_15592_15609 = state_15564;(statearr_15592_15609[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15564);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15591;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15610 = state_15564;
state_15564 = G__15610;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_15564){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_15564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_15593 = f__5525__auto__.call(null);(statearr_15593[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___15594);
return statearr_15593;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5524__auto___15753 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_15723){var state_val_15724 = (state_15723[1]);if((state_val_15724 === 1))
{var inst_15682 = [];var inst_15683 = inst_15682;var inst_15684 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_15723__$1 = (function (){var statearr_15725 = state_15723;(statearr_15725[7] = inst_15683);
(statearr_15725[8] = inst_15684);
return statearr_15725;
})();var statearr_15726_15754 = state_15723__$1;(statearr_15726_15754[2] = null);
(statearr_15726_15754[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15724 === 2))
{var state_15723__$1 = state_15723;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15723__$1,4,ch);
} else
{if((state_val_15724 === 3))
{var inst_15721 = (state_15723[2]);var state_15723__$1 = state_15723;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15723__$1,inst_15721);
} else
{if((state_val_15724 === 4))
{var inst_15687 = (state_15723[9]);var inst_15687__$1 = (state_15723[2]);var inst_15688 = (inst_15687__$1 == null);var inst_15689 = cljs.core.not.call(null,inst_15688);var state_15723__$1 = (function (){var statearr_15727 = state_15723;(statearr_15727[9] = inst_15687__$1);
return statearr_15727;
})();if(inst_15689)
{var statearr_15728_15755 = state_15723__$1;(statearr_15728_15755[1] = 5);
} else
{var statearr_15729_15756 = state_15723__$1;(statearr_15729_15756[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15724 === 5))
{var inst_15691 = (state_15723[10]);var inst_15687 = (state_15723[9]);var inst_15684 = (state_15723[8]);var inst_15691__$1 = f.call(null,inst_15687);var inst_15692 = cljs.core._EQ_.call(null,inst_15691__$1,inst_15684);var inst_15693 = cljs.core.keyword_identical_QMARK_.call(null,inst_15684,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_15694 = (inst_15692) || (inst_15693);var state_15723__$1 = (function (){var statearr_15730 = state_15723;(statearr_15730[10] = inst_15691__$1);
return statearr_15730;
})();if(cljs.core.truth_(inst_15694))
{var statearr_15731_15757 = state_15723__$1;(statearr_15731_15757[1] = 8);
} else
{var statearr_15732_15758 = state_15723__$1;(statearr_15732_15758[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15724 === 6))
{var inst_15683 = (state_15723[7]);var inst_15708 = inst_15683.length;var inst_15709 = (inst_15708 > 0);var state_15723__$1 = state_15723;if(cljs.core.truth_(inst_15709))
{var statearr_15734_15759 = state_15723__$1;(statearr_15734_15759[1] = 12);
} else
{var statearr_15735_15760 = state_15723__$1;(statearr_15735_15760[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15724 === 7))
{var inst_15719 = (state_15723[2]);var state_15723__$1 = state_15723;var statearr_15736_15761 = state_15723__$1;(statearr_15736_15761[2] = inst_15719);
(statearr_15736_15761[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15724 === 8))
{var inst_15691 = (state_15723[10]);var inst_15687 = (state_15723[9]);var inst_15683 = (state_15723[7]);var inst_15696 = inst_15683.push(inst_15687);var tmp15733 = inst_15683;var inst_15683__$1 = tmp15733;var inst_15684 = inst_15691;var state_15723__$1 = (function (){var statearr_15737 = state_15723;(statearr_15737[11] = inst_15696);
(statearr_15737[7] = inst_15683__$1);
(statearr_15737[8] = inst_15684);
return statearr_15737;
})();var statearr_15738_15762 = state_15723__$1;(statearr_15738_15762[2] = null);
(statearr_15738_15762[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15724 === 9))
{var inst_15683 = (state_15723[7]);var inst_15699 = cljs.core.vec.call(null,inst_15683);var state_15723__$1 = state_15723;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15723__$1,11,out,inst_15699);
} else
{if((state_val_15724 === 10))
{var inst_15706 = (state_15723[2]);var state_15723__$1 = state_15723;var statearr_15739_15763 = state_15723__$1;(statearr_15739_15763[2] = inst_15706);
(statearr_15739_15763[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15724 === 11))
{var inst_15691 = (state_15723[10]);var inst_15687 = (state_15723[9]);var inst_15701 = (state_15723[2]);var inst_15702 = [];var inst_15703 = inst_15702.push(inst_15687);var inst_15683 = inst_15702;var inst_15684 = inst_15691;var state_15723__$1 = (function (){var statearr_15740 = state_15723;(statearr_15740[12] = inst_15701);
(statearr_15740[7] = inst_15683);
(statearr_15740[8] = inst_15684);
(statearr_15740[13] = inst_15703);
return statearr_15740;
})();var statearr_15741_15764 = state_15723__$1;(statearr_15741_15764[2] = null);
(statearr_15741_15764[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15724 === 12))
{var inst_15683 = (state_15723[7]);var inst_15711 = cljs.core.vec.call(null,inst_15683);var state_15723__$1 = state_15723;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15723__$1,15,out,inst_15711);
} else
{if((state_val_15724 === 13))
{var state_15723__$1 = state_15723;var statearr_15742_15765 = state_15723__$1;(statearr_15742_15765[2] = null);
(statearr_15742_15765[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15724 === 14))
{var inst_15716 = (state_15723[2]);var inst_15717 = cljs.core.async.close_BANG_.call(null,out);var state_15723__$1 = (function (){var statearr_15743 = state_15723;(statearr_15743[14] = inst_15716);
return statearr_15743;
})();var statearr_15744_15766 = state_15723__$1;(statearr_15744_15766[2] = inst_15717);
(statearr_15744_15766[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15724 === 15))
{var inst_15713 = (state_15723[2]);var state_15723__$1 = state_15723;var statearr_15745_15767 = state_15723__$1;(statearr_15745_15767[2] = inst_15713);
(statearr_15745_15767[1] = 14);
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
var state_machine__5510__auto____0 = (function (){var statearr_15749 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15749[0] = state_machine__5510__auto__);
(statearr_15749[1] = 1);
return statearr_15749;
});
var state_machine__5510__auto____1 = (function (state_15723){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_15723);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e15750){if((e15750 instanceof Object))
{var ex__5513__auto__ = e15750;var statearr_15751_15768 = state_15723;(statearr_15751_15768[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15723);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15750;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15769 = state_15723;
state_15723 = G__15769;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_15723){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_15723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_15752 = f__5525__auto__.call(null);(statearr_15752[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___15753);
return statearr_15752;
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