// Compiled by ClojureScript 0.0-2156
goog.provide('omchaya.core');
goog.require('cljs.core');
goog.require('omchaya.useful');
goog.require('cljs.core.async');
goog.require('omchaya.components.app');
goog.require('omchaya.controllers.post_controls');
goog.require('omchaya.utils');
goog.require('omchaya.controllers.api');
goog.require('omchaya.controllers.api');
goog.require('cljs.core.async');
goog.require('omchaya.api.mock');
goog.require('omchaya.useful');
goog.require('omchaya.mock_data');
goog.require('omchaya.useful');
goog.require('om.dom');
goog.require('om.core');
goog.require('clojure.string');
goog.require('omchaya.api.mock');
goog.require('omchaya.datetime');
goog.require('om.core');
goog.require('omchaya.controllers.post_api');
goog.require('omchaya.mock_data');
goog.require('omchaya.datetime');
goog.require('clojure.string');
goog.require('omchaya.components.app');
goog.require('omchaya.utils');
goog.require('om.dom');
goog.require('omchaya.controllers.post_api');
goog.require('omchaya.controllers.controls');
goog.require('dommy.core');
goog.require('cljs.core.async');
goog.require('omchaya.controllers.controls');
goog.require('omchaya.controllers.post_controls');
goog.require('dommy.core');
cljs.core.enable_console_print_BANG_.call(null);
omchaya.core.controls_ch = cljs.core.async.chan.call(null);
omchaya.core.api_ch = cljs.core.async.chan.call(null);
omchaya.core.app_state = cljs.core.atom.call(null,omchaya.mock_data.initial_state.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"controls","controls",4741937704),omchaya.core.controls_ch,new cljs.core.Keyword(null,"api","api",1014001036),omchaya.core.api_ch], null)));
omchaya.core.main = (function main(target,state){var comms = new cljs.core.Keyword(null,"comms","comms",1108747865).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));om.core.root.call(null,omchaya.components.app.app,state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",4427965699),target,new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comms","comms",1108747865),comms], null)], null));
var c__5524__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_10690){var state_val_10691 = (state_10690[1]);if((state_val_10691 === 1))
{var state_10690__$1 = state_10690;var statearr_10692_10722 = state_10690__$1;(statearr_10692_10722[2] = null);
(statearr_10692_10722[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10691 === 2))
{var state_10690__$1 = state_10690;if(true)
{var statearr_10693_10723 = state_10690__$1;(statearr_10693_10723[1] = 4);
} else
{var statearr_10694_10724 = state_10690__$1;(statearr_10694_10724[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10691 === 3))
{var inst_10688 = (state_10690[2]);var state_10690__$1 = state_10690;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10690__$1,inst_10688);
} else
{if((state_val_10691 === 4))
{var inst_10638 = (state_10690[7]);var inst_10639 = (state_10690[8]);var inst_10638__$1 = new cljs.core.Keyword(null,"controls","controls",4741937704).cljs$core$IFn$_invoke$arity$1(comms);var inst_10639__$1 = new cljs.core.Keyword(null,"api","api",1014001036).cljs$core$IFn$_invoke$arity$1(comms);var inst_10640 = [inst_10638__$1,inst_10639__$1];var inst_10641 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_10640,null));var state_10690__$1 = (function (){var statearr_10695 = state_10690;(statearr_10695[7] = inst_10638__$1);
(statearr_10695[8] = inst_10639__$1);
return statearr_10695;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_10690__$1,7,inst_10641);
} else
{if((state_val_10691 === 5))
{var state_10690__$1 = state_10690;var statearr_10696_10725 = state_10690__$1;(statearr_10696_10725[2] = null);
(statearr_10696_10725[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10691 === 6))
{var inst_10686 = (state_10690[2]);var state_10690__$1 = state_10690;var statearr_10697_10726 = state_10690__$1;(statearr_10697_10726[2] = inst_10686);
(statearr_10697_10726[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10691 === 7))
{var inst_10643 = (state_10690[9]);var inst_10645 = (state_10690[10]);var inst_10638 = (state_10690[7]);var inst_10643__$1 = (state_10690[2]);var inst_10644 = cljs.core.nth.call(null,inst_10643__$1,0,null);var inst_10645__$1 = cljs.core.nth.call(null,inst_10643__$1,1,null);var inst_10646 = cljs.core._EQ_.call(null,inst_10645__$1,inst_10638);var state_10690__$1 = (function (){var statearr_10698 = state_10690;(statearr_10698[9] = inst_10643__$1);
(statearr_10698[11] = inst_10644);
(statearr_10698[10] = inst_10645__$1);
return statearr_10698;
})();if(inst_10646)
{var statearr_10699_10727 = state_10690__$1;(statearr_10699_10727[1] = 8);
} else
{var statearr_10700_10728 = state_10690__$1;(statearr_10700_10728[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10691 === 8))
{var inst_10643 = (state_10690[9]);var inst_10649 = cljs.core.nth.call(null,inst_10643,0,null);var inst_10650 = cljs.core.deref.call(null,state);var inst_10651 = cljs.core.first.call(null,inst_10649);var inst_10652 = cljs.core.second.call(null,inst_10649);var inst_10653 = cljs.core.partial.call(null,omchaya.controllers.controls.control_event,target,inst_10651,inst_10652);var inst_10654 = cljs.core.swap_BANG_.call(null,state,inst_10653);var inst_10655 = cljs.core.first.call(null,inst_10649);var inst_10656 = cljs.core.second.call(null,inst_10649);var inst_10657 = cljs.core.deref.call(null,state);var inst_10658 = omchaya.controllers.post_controls.post_control_event_BANG_.call(null,target,inst_10655,inst_10656,inst_10650,inst_10657);var state_10690__$1 = (function (){var statearr_10701 = state_10690;(statearr_10701[12] = inst_10654);
return statearr_10701;
})();var statearr_10702_10729 = state_10690__$1;(statearr_10702_10729[2] = inst_10658);
(statearr_10702_10729[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10691 === 9))
{var inst_10645 = (state_10690[10]);var inst_10639 = (state_10690[8]);var inst_10660 = cljs.core._EQ_.call(null,inst_10645,inst_10639);var state_10690__$1 = state_10690;if(inst_10660)
{var statearr_10703_10730 = state_10690__$1;(statearr_10703_10730[1] = 11);
} else
{var statearr_10704_10731 = state_10690__$1;(statearr_10704_10731[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10691 === 10))
{var inst_10682 = (state_10690[2]);var state_10690__$1 = (function (){var statearr_10705 = state_10690;(statearr_10705[13] = inst_10682);
return statearr_10705;
})();var statearr_10706_10732 = state_10690__$1;(statearr_10706_10732[2] = null);
(statearr_10706_10732[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10691 === 11))
{var inst_10643 = (state_10690[9]);var inst_10663 = cljs.core.nth.call(null,inst_10643,0,null);var inst_10664 = cljs.core.deref.call(null,state);var inst_10665 = cljs.core.first.call(null,inst_10663);var inst_10666 = cljs.core.second.call(null,inst_10663);var inst_10667 = cljs.core.partial.call(null,omchaya.controllers.api.api_event,target,inst_10665,inst_10666);var inst_10668 = cljs.core.swap_BANG_.call(null,state,inst_10667);var inst_10669 = cljs.core.first.call(null,inst_10663);var inst_10670 = cljs.core.second.call(null,inst_10663);var inst_10671 = cljs.core.deref.call(null,state);var inst_10672 = omchaya.controllers.post_api.post_api_event_BANG_.call(null,target,inst_10669,inst_10670,inst_10664,inst_10671);var state_10690__$1 = (function (){var statearr_10707 = state_10690;(statearr_10707[14] = inst_10668);
return statearr_10707;
})();var statearr_10708_10733 = state_10690__$1;(statearr_10708_10733[2] = inst_10672);
(statearr_10708_10733[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10691 === 12))
{var inst_10645 = (state_10690[10]);var inst_10674 = cljs.core._EQ_.call(null,inst_10645,new cljs.core.Keyword(null,"default","default",2558708147));var state_10690__$1 = state_10690;if(inst_10674)
{var statearr_10709_10734 = state_10690__$1;(statearr_10709_10734[1] = 14);
} else
{var statearr_10710_10735 = state_10690__$1;(statearr_10710_10735[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10691 === 13))
{var inst_10680 = (state_10690[2]);var state_10690__$1 = state_10690;var statearr_10711_10736 = state_10690__$1;(statearr_10711_10736[2] = inst_10680);
(statearr_10711_10736[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10691 === 14))
{var inst_10644 = (state_10690[11]);var state_10690__$1 = state_10690;var statearr_10712_10737 = state_10690__$1;(statearr_10712_10737[2] = inst_10644);
(statearr_10712_10737[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10691 === 15))
{var state_10690__$1 = state_10690;var statearr_10713_10738 = state_10690__$1;(statearr_10713_10738[2] = null);
(statearr_10713_10738[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10691 === 16))
{var inst_10678 = (state_10690[2]);var state_10690__$1 = state_10690;var statearr_10714_10739 = state_10690__$1;(statearr_10714_10739[2] = inst_10678);
(statearr_10714_10739[1] = 13);
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
var state_machine__5510__auto____0 = (function (){var statearr_10718 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10718[0] = state_machine__5510__auto__);
(statearr_10718[1] = 1);
return statearr_10718;
});
var state_machine__5510__auto____1 = (function (state_10690){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_10690);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e10719){if((e10719 instanceof Object))
{var ex__5513__auto__ = e10719;var statearr_10720_10740 = state_10690;(statearr_10720_10740[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10690);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10719;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10741 = state_10690;
state_10690 = G__10741;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_10690){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_10690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_10721 = f__5525__auto__.call(null);(statearr_10721[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto__);
return statearr_10721;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5526__auto__);
}));
return c__5524__auto__;
});
omchaya.core.setup_BANG_ = (function setup_BANG_(){return omchaya.core.main.call(null,document.getElementById("app"),omchaya.core.app_state);
});
window.onload = omchaya.core.setup_BANG_;
omchaya.core.send_async_message = (function send_async_message(ch_name,message,data){return cljs.core.async.put_BANG_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,omchaya.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",1108747865),cljs.core.keyword.call(null,ch_name)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,message),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true)], null));
});
setInterval((function (){return omchaya.api.mock.random_message.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,omchaya.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",1108747865),new cljs.core.Keyword(null,"api","api",1014001036)], null)),cljs.core.rand_nth.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"channels","channels",2446530370).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,omchaya.core.app_state)))));
}),1500);

//# sourceMappingURL=core.js.map