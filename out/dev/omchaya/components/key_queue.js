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
omchaya.components.key_queue.event_modifiers = (function event_modifiers(e){return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(e.shiftKey)?"shift":null),(cljs.core.truth_(e.altKey)?"alt":null),(cljs.core.truth_(e.ctrlKey)?"ctrl":null),(cljs.core.truth_(e.metaKey)?"meta":null)], null)));
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
omchaya.components.key_queue.event__GT_key = (function event__GT_key(event){var mods = omchaya.components.key_queue.event_modifiers.call(null,event);var which = event.which;var key = (function (){var or__3403__auto__ = omchaya.components.key_queue.code__GT_key.call(null,which);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return String.fromCharCode(which).toLowerCase();
}
})();if(cljs.core.truth_((function (){var and__3391__auto__ = key;if(cljs.core.truth_(and__3391__auto__))
{return (!(cljs.core.empty_QMARK_.call(null,key))) && (cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([key], true),omchaya.components.key_queue.mod_keys)));
} else
{return and__3391__auto__;
}
})()))
{return clojure.string.join.call(null,"+",cljs.core.conj.call(null,mods,key));
} else
{return null;
}
});
omchaya.components.key_queue.log_keystroke = (function log_keystroke(e){omchaya.utils.log.call(null,"key event",e);
return e;
});
omchaya.components.key_queue.start_key_queue = (function start_key_queue(key_ch){return dommy.core.listen_BANG_.call(null,document,new cljs.core.Keyword(null,"keydown","keydown",4493897459),(function (p1__10860_SHARP_){var temp__4092__auto__ = omchaya.components.key_queue.event__GT_key.call(null,p1__10860_SHARP_);if(cljs.core.truth_(temp__4092__auto__))
{var k = temp__4092__auto__;return cljs.core.async.put_BANG_.call(null,key_ch,k);
} else
{return null;
}
}));
});
omchaya.components.key_queue.global_key_ch = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,1000));
omchaya.components.key_queue.start_key_queue.call(null,omchaya.components.key_queue.global_key_ch);
omchaya.components.key_queue.key_mult = cljs.core.async.mult.call(null,omchaya.components.key_queue.global_key_ch);
omchaya.components.key_queue.combo_match_QMARK_ = (function combo_match_QMARK_(keys,combo){var tail_keys = cljs.core.take_while.call(null,cljs.core.seq,cljs.core.iterate.call(null,cljs.core.rest,keys));return cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core._EQ_,combo),tail_keys);
});
omchaya.components.key_queue.combos_match_QMARK_ = (function combos_match_QMARK_(combo_or_combos,keys){var combos = ((cljs.core.coll_QMARK_.call(null,combo_or_combos))?combo_or_combos:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [combo_or_combos], null));var combos__$1 = cljs.core.map.call(null,((function (combos){
return (function (p1__10861_SHARP_){return clojure.string.split.call(null,p1__10861_SHARP_,/ /);
});})(combos))
,combos);return cljs.core.some.call(null,cljs.core.partial.call(null,omchaya.components.key_queue.combo_match_QMARK_,keys),combos__$1);
});
/**
* Given a keymap for the component and the most recent series of keys
* that were pressed (not the codes, but strings like 'shift+r' and
* stuff) return a handler fn associated with a key combo in the keys
* list or nil.
*/
omchaya.components.key_queue.match_keys = (function match_keys(keymap,keys){return cljs.core.first.call(null,cljs.core.keep.call(null,(function (p__10864){var vec__10865 = p__10864;var c = cljs.core.nth.call(null,vec__10865,0,null);var f = cljs.core.nth.call(null,vec__10865,1,null);if(cljs.core.truth_(omchaya.components.key_queue.combos_match_QMARK_.call(null,c,keys)))
{return f;
} else
{return null;
}
}),keymap));
});
omchaya.components.key_queue.KeyboardHandler = (function KeyboardHandler(app,owner,p__10866){var map__10952 = p__10866;var map__10952__$1 = ((cljs.core.seq_QMARK_.call(null,map__10952))?cljs.core.apply.call(null,cljs.core.hash_map,map__10952):map__10952);var error_ch = cljs.core.get.call(null,map__10952__$1,new cljs.core.Keyword(null,"error-ch","error-ch",2409970108));var keymap = cljs.core.get.call(null,map__10952__$1,new cljs.core.Keyword(null,"keymap","keymap",4174211599));var ch = cljs.core.async.chan.call(null);if(typeof omchaya.components.key_queue.t10953 !== 'undefined')
{} else
{
/**
* @constructor
*/
omchaya.components.key_queue.t10953 = (function (ch,keymap,error_ch,map__10952,p__10866,owner,app,KeyboardHandler,meta10954){
this.ch = ch;
this.keymap = keymap;
this.error_ch = error_ch;
this.map__10952 = map__10952;
this.p__10866 = p__10866;
this.owner = owner;
this.app = app;
this.KeyboardHandler = KeyboardHandler;
this.meta10954 = meta10954;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
omchaya.components.key_queue.t10953.cljs$lang$type = true;
omchaya.components.key_queue.t10953.cljs$lang$ctorStr = "omchaya.components.key-queue/t10953";
omchaya.components.key_queue.t10953.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"omchaya.components.key-queue/t10953");
});
omchaya.components.key_queue.t10953.prototype.om$core$IRender$ = true;
omchaya.components.key_queue.t10953.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.span({"className": "hidden"});
});
omchaya.components.key_queue.t10953.prototype.om$core$IWillUnmount$ = true;
omchaya.components.key_queue.t10953.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.untap.call(null,omchaya.components.key_queue.key_mult,self__.ch);
});
omchaya.components.key_queue.t10953.prototype.om$core$IDidMount$ = true;
omchaya.components.key_queue.t10953.prototype.om$core$IDidMount$did_mount$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;cljs.core.async.tap.call(null,omchaya.components.key_queue.key_mult,self__.ch);
var c__5524__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_11004){var state_val_11005 = (state_11004[1]);if((state_val_11005 === 1))
{var inst_10958 = cljs.core.PersistentVector.EMPTY;var inst_10959 = null;var state_11004__$1 = (function (){var statearr_11006 = state_11004;(statearr_11006[7] = inst_10958);
(statearr_11006[8] = inst_10959);
return statearr_11006;
})();var statearr_11007_11037 = state_11004__$1;(statearr_11007_11037[2] = null);
(statearr_11007_11037[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11005 === 2))
{var inst_10959 = (state_11004[8]);var state_11004__$1 = state_11004;if(cljs.core.truth_(inst_10959))
{var statearr_11008_11038 = state_11004__$1;(statearr_11008_11038[1] = 4);
} else
{var statearr_11009_11039 = state_11004__$1;(statearr_11009_11039[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11005 === 3))
{var inst_11002 = (state_11004[2]);var state_11004__$1 = state_11004;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11004__$1,inst_11002);
} else
{if((state_val_11005 === 4))
{var inst_10959 = (state_11004[8]);var state_11004__$1 = state_11004;var statearr_11010_11040 = state_11004__$1;(statearr_11010_11040[2] = inst_10959);
(statearr_11010_11040[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11005 === 5))
{var inst_10964 = cljs.core.async.chan.call(null);var state_11004__$1 = state_11004;var statearr_11011_11041 = state_11004__$1;(statearr_11011_11041[2] = inst_10964);
(statearr_11011_11041[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11005 === 6))
{var inst_10966 = (state_11004[2]);var inst_10967 = [self__.ch,inst_10966];var inst_10968 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10967,null));var state_11004__$1 = state_11004;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11004__$1,7,inst_10968);
} else
{if((state_val_11005 === 7))
{var inst_10970 = (state_11004[2]);var inst_10971 = cljs.core.nth.call(null,inst_10970,0,null);var inst_10972 = cljs.core.nth.call(null,inst_10970,1,null);var inst_10973 = cljs.core._EQ_.call(null,inst_10972,self__.ch);var state_11004__$1 = (function (){var statearr_11012 = state_11004;(statearr_11012[9] = inst_10971);
return statearr_11012;
})();if(inst_10973)
{var statearr_11013_11042 = state_11004__$1;(statearr_11013_11042[1] = 8);
} else
{var statearr_11014_11043 = state_11004__$1;(statearr_11014_11043[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11005 === 8))
{var inst_10977 = (state_11004[10]);var inst_10971 = (state_11004[9]);var inst_10958 = (state_11004[7]);var inst_10975 = (state_11004[11]);var inst_10975__$1 = cljs.core.conj.call(null,inst_10958,inst_10971);var inst_10976 = cljs.core.deref.call(null,self__.keymap);var inst_10977__$1 = omchaya.components.key_queue.match_keys.call(null,inst_10976,inst_10975__$1);var state_11004__$1 = (function (){var statearr_11015 = state_11004;(statearr_11015[10] = inst_10977__$1);
(statearr_11015[11] = inst_10975__$1);
return statearr_11015;
})();if(cljs.core.truth_(inst_10977__$1))
{var statearr_11016_11044 = state_11004__$1;(statearr_11016_11044[1] = 11);
} else
{var statearr_11017_11045 = state_11004__$1;(statearr_11017_11045[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11005 === 9))
{var inst_10958 = cljs.core.PersistentVector.EMPTY;var inst_10959 = null;var state_11004__$1 = (function (){var statearr_11018 = state_11004;(statearr_11018[7] = inst_10958);
(statearr_11018[8] = inst_10959);
return statearr_11018;
})();var statearr_11019_11046 = state_11004__$1;(statearr_11019_11046[2] = null);
(statearr_11019_11046[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11005 === 10))
{var inst_11000 = (state_11004[2]);var state_11004__$1 = state_11004;var statearr_11020_11047 = state_11004__$1;(statearr_11020_11047[2] = inst_11000);
(statearr_11020_11047[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11005 === 11))
{var state_11004__$1 = state_11004;var statearr_11021_11048 = state_11004__$1;(statearr_11021_11048[2] = null);
(statearr_11021_11048[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11005 === 12))
{var inst_10975 = (state_11004[11]);var inst_10993 = cljs.core.async.timeout.call(null,1000);var inst_10958 = inst_10975;var inst_10959 = inst_10993;var state_11004__$1 = (function (){var statearr_11022 = state_11004;(statearr_11022[7] = inst_10958);
(statearr_11022[8] = inst_10959);
return statearr_11022;
})();var statearr_11023_11049 = state_11004__$1;(statearr_11023_11049[2] = null);
(statearr_11023_11049[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11005 === 13))
{var inst_10996 = (state_11004[2]);var state_11004__$1 = state_11004;var statearr_11024_11050 = state_11004__$1;(statearr_11024_11050[2] = inst_10996);
(statearr_11024_11050[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11005 === 14))
{var inst_10990 = (state_11004[2]);var inst_10958 = cljs.core.PersistentVector.EMPTY;var inst_10959 = null;var state_11004__$1 = (function (){var statearr_11025 = state_11004;(statearr_11025[7] = inst_10958);
(statearr_11025[12] = inst_10990);
(statearr_11025[8] = inst_10959);
return statearr_11025;
})();var statearr_11026_11051 = state_11004__$1;(statearr_11026_11051[2] = null);
(statearr_11026_11051[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11005 === 15))
{var inst_10977 = (state_11004[10]);var inst_10971 = (state_11004[9]);var inst_10979 = (state_11004[2]);var inst_10980 = omchaya.utils.log_pr.call(null,"Error calling",inst_10977,"with key event",inst_10971,":");var inst_10981 = omchaya.utils.stack_trace.call(null,inst_10979);var inst_10982 = [new cljs.core.Keyword(null,"keyboard-handler-error","keyboard-handler-error",1374918097),inst_10979];var inst_10983 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10982,null));var inst_10984 = cljs.core.async.put_BANG_.call(null,self__.error_ch,inst_10983);var state_11004__$1 = (function (){var statearr_11027 = state_11004;(statearr_11027[13] = inst_10981);
(statearr_11027[14] = inst_10980);
return statearr_11027;
})();var statearr_11028_11052 = state_11004__$1;(statearr_11028_11052[2] = inst_10984);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11004__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11005 === 16))
{var inst_10977 = (state_11004[10]);var inst_10971 = (state_11004[9]);var ___$3 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11004,15,Object,null,14);var inst_10988 = inst_10977.call(null,inst_10971);var state_11004__$1 = state_11004;var statearr_11029_11053 = state_11004__$1;(statearr_11029_11053[2] = inst_10988);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11004__$1);
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
var state_machine__5510__auto____0 = (function (){var statearr_11033 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11033[0] = state_machine__5510__auto__);
(statearr_11033[1] = 1);
return statearr_11033;
});
var state_machine__5510__auto____1 = (function (state_11004){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_11004);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e11034){if((e11034 instanceof Object))
{var ex__5513__auto__ = e11034;var statearr_11035_11054 = state_11004;(statearr_11035_11054[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11004);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11034;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11055 = state_11004;
state_11004 = G__11055;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_11004){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_11004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_11036 = f__5525__auto__.call(null);(statearr_11036[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto__);
return statearr_11036;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5526__auto__);
}));
return c__5524__auto__;
});
omchaya.components.key_queue.t10953.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10955){var self__ = this;
var _10955__$1 = this;return self__.meta10954;
});
omchaya.components.key_queue.t10953.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10955,meta10954__$1){var self__ = this;
var _10955__$1 = this;return (new omchaya.components.key_queue.t10953(self__.ch,self__.keymap,self__.error_ch,self__.map__10952,self__.p__10866,self__.owner,self__.app,self__.KeyboardHandler,meta10954__$1));
});
omchaya.components.key_queue.__GT_t10953 = (function __GT_t10953(ch__$1,keymap__$1,error_ch__$1,map__10952__$2,p__10866__$1,owner__$1,app__$1,KeyboardHandler__$1,meta10954){return (new omchaya.components.key_queue.t10953(ch__$1,keymap__$1,error_ch__$1,map__10952__$2,p__10866__$1,owner__$1,app__$1,KeyboardHandler__$1,meta10954));
});
}
return (new omchaya.components.key_queue.t10953(ch,keymap,error_ch,map__10952__$1,p__10866,owner,app,KeyboardHandler,null));
});

//# sourceMappingURL=key_queue.js.map