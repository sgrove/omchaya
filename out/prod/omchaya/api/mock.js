// Compiled by ClojureScript 0.0-2156
goog.provide('omchaya.api.mock');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('omchaya.mock_data');
goog.require('omchaya.mock_data');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
omchaya.api.mock.random_message = (function random_message(api_ch,channel){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(api_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$387,omchaya.mock_data.random_message.cljs$core$IFn$_invoke$arity$variadic(channel,cljs.core.array_seq([true], 0))], null));
});
omchaya.api.mock.send_user_message_BANG_ = (function send_user_message_BANG_(api_key,message){return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Send a message to the server"], 0));
});
omchaya.api.mock.destroy_channel_BANG_ = (function destroy_channel_BANG_(api_ch,channel_id){var c__5524__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_20337){var state_val_20338 = (state_20337[1]);if((state_val_20338 === 2))
{var inst_20332 = (state_20337[2]);var inst_20333 = [cljs.core.constant$keyword$388,channel_id];var inst_20334 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_20333,null));var inst_20335 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(api_ch,inst_20334);var state_20337__$1 = (function (){var statearr_20339 = state_20337;(statearr_20339[7] = inst_20332);
return statearr_20339;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_20337__$1,inst_20335);
} else
{if((state_val_20338 === 1))
{var inst_20330 = cljs.core.async.timeout(2500);var state_20337__$1 = state_20337;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20337__$1,2,inst_20330);
} else
{return null;
}
}
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_20343 = [null,null,null,null,null,null,null,null];(statearr_20343[0] = state_machine__5510__auto__);
(statearr_20343[1] = 1);
return statearr_20343;
});
var state_machine__5510__auto____1 = (function (state_20337){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__(state_20337);if(cljs.core.keyword_identical_QMARK_(result__5512__auto__,cljs.core.constant$keyword$318))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e20344){if((e20344 instanceof Object))
{var ex__5513__auto__ = e20344;var statearr_20345_20347 = state_20337;(statearr_20345_20347[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_20337);
return cljs.core.constant$keyword$318;
} else
{if(cljs.core.constant$keyword$307)
{throw e20344;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5511__auto__,cljs.core.constant$keyword$318))
{{
var G__20348 = state_20337;
state_20337 = G__20348;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_20337){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_20337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_20346 = (f__5525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5525__auto__.cljs$core$IFn$_invoke$arity$0() : f__5525__auto__.call(null));(statearr_20346[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto__);
return statearr_20346;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5526__auto__);
}));
return c__5524__auto__;
});
