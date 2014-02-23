// Compiled by ClojureScript 0.0-2156
goog.provide('omchaya.components.key_queue');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('omchaya.utils');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('om.core');
goog.require('om.core');
goog.require('clojure.string');
goog.require('omchaya.utils');
goog.require('dommy.core');
goog.require('cljs.core.async');
goog.require('dommy.core');
/**
* map from a character code (read from events with event.which)
* to a string representation of it.
* Only need to add 'special' things here.
*/
omchaya.components.key_queue.code__GT_key = cljs.core.PersistentHashMap.fromArrays([37,38,39,40,13,46,186,27,191],["left","up","right","down","enter","del",";","esc","slash"]);
/**
* Given a keydown event, return the modifier keys that were being held.
*/
omchaya.components.key_queue.event_modifiers = (function event_modifiers(e){return cljs.core.into(cljs.core.PersistentVector.EMPTY,cljs.core.filter(cljs.core.identity,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(e.shiftKey)?"shift":null),(cljs.core.truth_(e.altKey)?"alt":null),(cljs.core.truth_(e.ctrlKey)?"ctrl":null),(cljs.core.truth_(e.metaKey)?"meta":null)], null)));
});
/**
* A vector of the modifier keys that we use to compare against to make
* sure that we don't report things like pressing the shift key as independent events.
* This may not be desirable behavior, depending on the use case, but it works for
* what I need.
*/
omchaya.components.key_queue.mod_keys = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [String.fromCharCode(16),String.fromCharCode(17),String.fromCharCode(18)], null);
/**
* Given an event, return a string like 'up' or 'shift+l' or 'ctrl+;'
* describing the key that was pressed.
* This fn will never return just 'shift' or any other lone modifier key.
*/
omchaya.components.key_queue.event__GT_key = (function event__GT_key(event){var mods = omchaya.components.key_queue.event_modifiers(event);var which = event.which;var key = (function (){var or__3403__auto__ = (omchaya.components.key_queue.code__GT_key.cljs$core$IFn$_invoke$arity$1 ? omchaya.components.key_queue.code__GT_key.cljs$core$IFn$_invoke$arity$1(which) : omchaya.components.key_queue.code__GT_key.call(null,which));if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return String.fromCharCode(which).toLowerCase();
}
})();if(cljs.core.truth_((function (){var and__3391__auto__ = key;if(cljs.core.truth_(and__3391__auto__))
{return (!(cljs.core.empty_QMARK_(key))) && (cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.fromArray([key], true),omchaya.components.key_queue.mod_keys)));
} else
{return and__3391__auto__;
}
})()))
{return clojure.string.join.cljs$core$IFn$_invoke$arity$2("+",cljs.core.conj.cljs$core$IFn$_invoke$arity$2(mods,key));
} else
{return null;
}
});
omchaya.components.key_queue.log_keystroke = (function log_keystroke(e){(omchaya.utils.log.cljs$core$IFn$_invoke$arity$2 ? omchaya.utils.log.cljs$core$IFn$_invoke$arity$2("key event",e) : omchaya.utils.log.call(null,"key event",e));
return e;
});
omchaya.components.key_queue.start_key_queue = (function start_key_queue(key_ch){return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(document,cljs.core.array_seq([cljs.core.constant$keyword$491,(function (p1__21159_SHARP_){var temp__4092__auto__ = omchaya.components.key_queue.event__GT_key(p1__21159_SHARP_);if(cljs.core.truth_(temp__4092__auto__))
{var k = temp__4092__auto__;return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(key_ch,k);
} else
{return null;
}
})], 0));
});
omchaya.components.key_queue.global_key_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer(1000));
omchaya.components.key_queue.start_key_queue(omchaya.components.key_queue.global_key_ch);
omchaya.components.key_queue.key_mult = cljs.core.async.mult(omchaya.components.key_queue.global_key_ch);
omchaya.components.key_queue.combo_match_QMARK_ = (function combo_match_QMARK_(keys,combo){var tail_keys = cljs.core.take_while(cljs.core.seq,cljs.core.iterate(cljs.core.rest,keys));return cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,combo),tail_keys);
});
omchaya.components.key_queue.combos_match_QMARK_ = (function combos_match_QMARK_(combo_or_combos,keys){var combos = ((cljs.core.coll_QMARK_(combo_or_combos))?combo_or_combos:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [combo_or_combos], null));var combos__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (combos){
return (function (p1__21160_SHARP_){return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__21160_SHARP_,/ /);
});})(combos))
,combos);return cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(omchaya.components.key_queue.combo_match_QMARK_,keys),combos__$1);
});
/**
* Given a keymap for the component and the most recent series of keys
* that were pressed (not the codes, but strings like 'shift+r' and
* stuff) return a handler fn associated with a key combo in the keys
* list or nil.
*/
omchaya.components.key_queue.match_keys = (function match_keys(keymap,keys){return cljs.core.first(cljs.core.keep((function (p__21163){var vec__21164 = p__21163;var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21164,0,null);var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21164,1,null);if(cljs.core.truth_(omchaya.components.key_queue.combos_match_QMARK_(c,keys)))
{return f;
} else
{return null;
}
}),keymap));
});
omchaya.components.key_queue.KeyboardHandler = (function KeyboardHandler(app,owner,p__21165){var map__21251 = p__21165;var map__21251__$1 = ((cljs.core.seq_QMARK_(map__21251))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21251):map__21251);var error_ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21251__$1,cljs.core.constant$keyword$492);var keymap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21251__$1,cljs.core.constant$keyword$493);var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();if(typeof omchaya.components.key_queue.t21252 !== 'undefined')
{} else
{
/**
* @constructor
*/
omchaya.components.key_queue.t21252 = (function (ch,keymap,error_ch,map__21251,p__21165,owner,app,KeyboardHandler,meta21253){
this.ch = ch;
this.keymap = keymap;
this.error_ch = error_ch;
this.map__21251 = map__21251;
this.p__21165 = p__21165;
this.owner = owner;
this.app = app;
this.KeyboardHandler = KeyboardHandler;
this.meta21253 = meta21253;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
omchaya.components.key_queue.t21252.cljs$lang$type = true;
omchaya.components.key_queue.t21252.cljs$lang$ctorStr = "omchaya.components.key-queue/t21252";
omchaya.components.key_queue.t21252.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write(writer__3971__auto__,"omchaya.components.key-queue/t21252");
});
omchaya.components.key_queue.t21252.prototype.om$core$IRender$ = true;
omchaya.components.key_queue.t21252.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.span({"className": "hidden"});
});
omchaya.components.key_queue.t21252.prototype.om$core$IWillUnmount$ = true;
omchaya.components.key_queue.t21252.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.untap(omchaya.components.key_queue.key_mult,self__.ch);
});
omchaya.components.key_queue.t21252.prototype.om$core$IDidMount$ = true;
omchaya.components.key_queue.t21252.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2(omchaya.components.key_queue.key_mult,self__.ch);
var c__5524__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_21303){var state_val_21304 = (state_21303[1]);if((state_val_21304 === 1))
{var inst_21257 = cljs.core.PersistentVector.EMPTY;var inst_21258 = null;var state_21303__$1 = (function (){var statearr_21305 = state_21303;(statearr_21305[7] = inst_21257);
(statearr_21305[8] = inst_21258);
return statearr_21305;
})();var statearr_21306_21336 = state_21303__$1;(statearr_21306_21336[2] = null);
(statearr_21306_21336[1] = 2);
return cljs.core.constant$keyword$318;
} else
{if((state_val_21304 === 2))
{var inst_21258 = (state_21303[8]);var state_21303__$1 = state_21303;if(cljs.core.truth_(inst_21258))
{var statearr_21307_21337 = state_21303__$1;(statearr_21307_21337[1] = 4);
} else
{var statearr_21308_21338 = state_21303__$1;(statearr_21308_21338[1] = 5);
}
return cljs.core.constant$keyword$318;
} else
{if((state_val_21304 === 3))
{var inst_21301 = (state_21303[2]);var state_21303__$1 = state_21303;return cljs.core.async.impl.ioc_helpers.return_chan(state_21303__$1,inst_21301);
} else
{if((state_val_21304 === 4))
{var inst_21258 = (state_21303[8]);var state_21303__$1 = state_21303;var statearr_21309_21339 = state_21303__$1;(statearr_21309_21339[2] = inst_21258);
(statearr_21309_21339[1] = 6);
return cljs.core.constant$keyword$318;
} else
{if((state_val_21304 === 5))
{var inst_21263 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var state_21303__$1 = state_21303;var statearr_21310_21340 = state_21303__$1;(statearr_21310_21340[2] = inst_21263);
(statearr_21310_21340[1] = 6);
return cljs.core.constant$keyword$318;
} else
{if((state_val_21304 === 6))
{var inst_21265 = (state_21303[2]);var inst_21266 = [self__.ch,inst_21265];var inst_21267 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_21266,null));var state_21303__$1 = state_21303;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_21303__$1,7,inst_21267);
} else
{if((state_val_21304 === 7))
{var inst_21269 = (state_21303[2]);var inst_21270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21269,0,null);var inst_21271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21269,1,null);var inst_21272 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_21271,self__.ch);var state_21303__$1 = (function (){var statearr_21311 = state_21303;(statearr_21311[9] = inst_21270);
return statearr_21311;
})();if(inst_21272)
{var statearr_21312_21341 = state_21303__$1;(statearr_21312_21341[1] = 8);
} else
{var statearr_21313_21342 = state_21303__$1;(statearr_21313_21342[1] = 9);
}
return cljs.core.constant$keyword$318;
} else
{if((state_val_21304 === 8))
{var inst_21257 = (state_21303[7]);var inst_21274 = (state_21303[10]);var inst_21270 = (state_21303[9]);var inst_21276 = (state_21303[11]);var inst_21274__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(inst_21257,inst_21270);var inst_21275 = cljs.core.deref(self__.keymap);var inst_21276__$1 = omchaya.components.key_queue.match_keys(inst_21275,inst_21274__$1);var state_21303__$1 = (function (){var statearr_21314 = state_21303;(statearr_21314[10] = inst_21274__$1);
(statearr_21314[11] = inst_21276__$1);
return statearr_21314;
})();if(cljs.core.truth_(inst_21276__$1))
{var statearr_21315_21343 = state_21303__$1;(statearr_21315_21343[1] = 11);
} else
{var statearr_21316_21344 = state_21303__$1;(statearr_21316_21344[1] = 12);
}
return cljs.core.constant$keyword$318;
} else
{if((state_val_21304 === 9))
{var inst_21257 = cljs.core.PersistentVector.EMPTY;var inst_21258 = null;var state_21303__$1 = (function (){var statearr_21317 = state_21303;(statearr_21317[7] = inst_21257);
(statearr_21317[8] = inst_21258);
return statearr_21317;
})();var statearr_21318_21345 = state_21303__$1;(statearr_21318_21345[2] = null);
(statearr_21318_21345[1] = 2);
return cljs.core.constant$keyword$318;
} else
{if((state_val_21304 === 10))
{var inst_21299 = (state_21303[2]);var state_21303__$1 = state_21303;var statearr_21319_21346 = state_21303__$1;(statearr_21319_21346[2] = inst_21299);
(statearr_21319_21346[1] = 3);
return cljs.core.constant$keyword$318;
} else
{if((state_val_21304 === 11))
{var state_21303__$1 = state_21303;var statearr_21320_21347 = state_21303__$1;(statearr_21320_21347[2] = null);
(statearr_21320_21347[1] = 16);
return cljs.core.constant$keyword$318;
} else
{if((state_val_21304 === 12))
{var inst_21274 = (state_21303[10]);var inst_21292 = cljs.core.async.timeout(1000);var inst_21257 = inst_21274;var inst_21258 = inst_21292;var state_21303__$1 = (function (){var statearr_21321 = state_21303;(statearr_21321[7] = inst_21257);
(statearr_21321[8] = inst_21258);
return statearr_21321;
})();var statearr_21322_21348 = state_21303__$1;(statearr_21322_21348[2] = null);
(statearr_21322_21348[1] = 2);
return cljs.core.constant$keyword$318;
} else
{if((state_val_21304 === 13))
{var inst_21295 = (state_21303[2]);var state_21303__$1 = state_21303;var statearr_21323_21349 = state_21303__$1;(statearr_21323_21349[2] = inst_21295);
(statearr_21323_21349[1] = 10);
return cljs.core.constant$keyword$318;
} else
{if((state_val_21304 === 14))
{var inst_21289 = (state_21303[2]);var inst_21257 = cljs.core.PersistentVector.EMPTY;var inst_21258 = null;var state_21303__$1 = (function (){var statearr_21324 = state_21303;(statearr_21324[7] = inst_21257);
(statearr_21324[8] = inst_21258);
(statearr_21324[12] = inst_21289);
return statearr_21324;
})();var statearr_21325_21350 = state_21303__$1;(statearr_21325_21350[2] = null);
(statearr_21325_21350[1] = 2);
return cljs.core.constant$keyword$318;
} else
{if((state_val_21304 === 15))
{var inst_21270 = (state_21303[9]);var inst_21276 = (state_21303[11]);var inst_21278 = (state_21303[2]);var inst_21279 = (omchaya.utils.log_pr.cljs$core$IFn$_invoke$arity$5 ? omchaya.utils.log_pr.cljs$core$IFn$_invoke$arity$5("Error calling",inst_21276,"with key event",inst_21270,":") : omchaya.utils.log_pr.call(null,"Error calling",inst_21276,"with key event",inst_21270,":"));var inst_21280 = (omchaya.utils.stack_trace.cljs$core$IFn$_invoke$arity$1 ? omchaya.utils.stack_trace.cljs$core$IFn$_invoke$arity$1(inst_21278) : omchaya.utils.stack_trace.call(null,inst_21278));var inst_21281 = [cljs.core.constant$keyword$494,inst_21278];var inst_21282 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_21281,null));var inst_21283 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.error_ch,inst_21282);var state_21303__$1 = (function (){var statearr_21326 = state_21303;(statearr_21326[13] = inst_21279);
(statearr_21326[14] = inst_21280);
return statearr_21326;
})();var statearr_21327_21351 = state_21303__$1;(statearr_21327_21351[2] = inst_21283);
cljs.core.async.impl.ioc_helpers.process_exception(state_21303__$1);
return cljs.core.constant$keyword$318;
} else
{if((state_val_21304 === 16))
{var inst_21270 = (state_21303[9]);var inst_21276 = (state_21303[11]);var ___$3 = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_21303,15,Object,null,14);var inst_21287 = (inst_21276.cljs$core$IFn$_invoke$arity$1 ? inst_21276.cljs$core$IFn$_invoke$arity$1(inst_21270) : inst_21276.call(null,inst_21270));var state_21303__$1 = state_21303;var statearr_21328_21352 = state_21303__$1;(statearr_21328_21352[2] = inst_21287);
cljs.core.async.impl.ioc_helpers.process_exception(state_21303__$1);
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
var state_machine__5510__auto____0 = (function (){var statearr_21332 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21332[0] = state_machine__5510__auto__);
(statearr_21332[1] = 1);
return statearr_21332;
});
var state_machine__5510__auto____1 = (function (state_21303){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__(state_21303);if(cljs.core.keyword_identical_QMARK_(result__5512__auto__,cljs.core.constant$keyword$318))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e21333){if((e21333 instanceof Object))
{var ex__5513__auto__ = e21333;var statearr_21334_21353 = state_21303;(statearr_21334_21353[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21303);
return cljs.core.constant$keyword$318;
} else
{if(cljs.core.constant$keyword$307)
{throw e21333;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5511__auto__,cljs.core.constant$keyword$318))
{{
var G__21354 = state_21303;
state_21303 = G__21354;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_21303){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_21303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_21335 = (f__5525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5525__auto__.cljs$core$IFn$_invoke$arity$0() : f__5525__auto__.call(null));(statearr_21335[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto__);
return statearr_21335;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5526__auto__);
}));
return c__5524__auto__;
});
omchaya.components.key_queue.t21252.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21254){var self__ = this;
var _21254__$1 = this;return self__.meta21253;
});
omchaya.components.key_queue.t21252.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21254,meta21253__$1){var self__ = this;
var _21254__$1 = this;return (new omchaya.components.key_queue.t21252(self__.ch,self__.keymap,self__.error_ch,self__.map__21251,self__.p__21165,self__.owner,self__.app,self__.KeyboardHandler,meta21253__$1));
});
omchaya.components.key_queue.__GT_t21252 = (function __GT_t21252(ch__$1,keymap__$1,error_ch__$1,map__21251__$2,p__21165__$1,owner__$1,app__$1,KeyboardHandler__$1,meta21253){return (new omchaya.components.key_queue.t21252(ch__$1,keymap__$1,error_ch__$1,map__21251__$2,p__21165__$1,owner__$1,app__$1,KeyboardHandler__$1,meta21253));
});
}
return (new omchaya.components.key_queue.t21252(ch,keymap,error_ch,map__21251__$1,p__21165,owner,app,KeyboardHandler,null));
});
