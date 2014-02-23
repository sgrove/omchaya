// Compiled by ClojureScript 0.0-2156
goog.provide('omchaya.api.mock');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('omchaya.mock_data');
goog.require('omchaya.mock_data');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
omchaya.api.mock.random_message = (function random_message(api_ch,channel){return cljs.core.async.put_BANG_.call(null,api_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channel-activity-received","channel-activity-received",3517943815),omchaya.mock_data.random_message.call(null,channel,true)], null));
});
omchaya.api.mock.send_user_message_BANG_ = (function send_user_message_BANG_(api_key,message){return cljs.core.print.call(null,"Send a message to the server");
});
omchaya.api.mock.destroy_channel_BANG_ = (function destroy_channel_BANG_(api_ch,channel_id){var c__5524__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_8816){var state_val_8817 = (state_8816[1]);if((state_val_8817 === 2))
{var inst_8811 = (state_8816[2]);var inst_8812 = [new cljs.core.Keyword(null,"channel-remotely-destroyed","channel-remotely-destroyed",2144502171),channel_id];var inst_8813 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_8812,null));var inst_8814 = cljs.core.async.put_BANG_.call(null,api_ch,inst_8813);var state_8816__$1 = (function (){var statearr_8818 = state_8816;(statearr_8818[7] = inst_8811);
return statearr_8818;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8816__$1,inst_8814);
} else
{if((state_val_8817 === 1))
{var inst_8809 = cljs.core.async.timeout.call(null,2500);var state_8816__$1 = state_8816;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8816__$1,2,inst_8809);
} else
{return null;
}
}
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_8822 = [null,null,null,null,null,null,null,null];(statearr_8822[0] = state_machine__5510__auto__);
(statearr_8822[1] = 1);
return statearr_8822;
});
var state_machine__5510__auto____1 = (function (state_8816){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_8816);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e8823){if((e8823 instanceof Object))
{var ex__5513__auto__ = e8823;var statearr_8824_8826 = state_8816;(statearr_8824_8826[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8816);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8823;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8827 = state_8816;
state_8816 = G__8827;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_8816){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_8816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_8825 = f__5525__auto__.call(null);(statearr_8825[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto__);
return statearr_8825;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5526__auto__);
}));
return c__5524__auto__;
});

//# sourceMappingURL=mock.js.map