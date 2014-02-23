// Compiled by ClojureScript 0.0-2156
goog.provide('omchaya.core');
goog.require('cljs.core');
goog.require('omchaya.useful');
goog.require('cljs.core.async');
goog.require('omchaya.components.app');
goog.require('omchaya.routes');
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
goog.require('omchaya.routes');
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
omchaya.core.main = (function main(target,state){var comms = new cljs.core.Keyword(null,"comms","comms",1108747865).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));omchaya.routes.define_routes_BANG_.call(null,state,document.getElementById("history-container"));
om.core.root.call(null,omchaya.components.app.app,state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",4427965699),target,new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comms","comms",1108747865),comms], null)], null));
var c__5524__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_11697){var state_val_11698 = (state_11697[1]);if((state_val_11698 === 1))
{var state_11697__$1 = state_11697;var statearr_11699_11729 = state_11697__$1;(statearr_11699_11729[2] = null);
(statearr_11699_11729[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11698 === 2))
{var state_11697__$1 = state_11697;if(true)
{var statearr_11700_11730 = state_11697__$1;(statearr_11700_11730[1] = 4);
} else
{var statearr_11701_11731 = state_11697__$1;(statearr_11701_11731[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11698 === 3))
{var inst_11695 = (state_11697[2]);var state_11697__$1 = state_11697;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11697__$1,inst_11695);
} else
{if((state_val_11698 === 4))
{var inst_11645 = (state_11697[7]);var inst_11646 = (state_11697[8]);var inst_11645__$1 = new cljs.core.Keyword(null,"controls","controls",4741937704).cljs$core$IFn$_invoke$arity$1(comms);var inst_11646__$1 = new cljs.core.Keyword(null,"api","api",1014001036).cljs$core$IFn$_invoke$arity$1(comms);var inst_11647 = [inst_11645__$1,inst_11646__$1];var inst_11648 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_11647,null));var state_11697__$1 = (function (){var statearr_11702 = state_11697;(statearr_11702[7] = inst_11645__$1);
(statearr_11702[8] = inst_11646__$1);
return statearr_11702;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11697__$1,7,inst_11648);
} else
{if((state_val_11698 === 5))
{var state_11697__$1 = state_11697;var statearr_11703_11732 = state_11697__$1;(statearr_11703_11732[2] = null);
(statearr_11703_11732[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11698 === 6))
{var inst_11693 = (state_11697[2]);var state_11697__$1 = state_11697;var statearr_11704_11733 = state_11697__$1;(statearr_11704_11733[2] = inst_11693);
(statearr_11704_11733[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11698 === 7))
{var inst_11652 = (state_11697[9]);var inst_11645 = (state_11697[7]);var inst_11650 = (state_11697[10]);var inst_11650__$1 = (state_11697[2]);var inst_11651 = cljs.core.nth.call(null,inst_11650__$1,0,null);var inst_11652__$1 = cljs.core.nth.call(null,inst_11650__$1,1,null);var inst_11653 = cljs.core._EQ_.call(null,inst_11652__$1,inst_11645);var state_11697__$1 = (function (){var statearr_11705 = state_11697;(statearr_11705[9] = inst_11652__$1);
(statearr_11705[11] = inst_11651);
(statearr_11705[10] = inst_11650__$1);
return statearr_11705;
})();if(inst_11653)
{var statearr_11706_11734 = state_11697__$1;(statearr_11706_11734[1] = 8);
} else
{var statearr_11707_11735 = state_11697__$1;(statearr_11707_11735[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11698 === 8))
{var inst_11650 = (state_11697[10]);var inst_11656 = cljs.core.nth.call(null,inst_11650,0,null);var inst_11657 = cljs.core.deref.call(null,state);var inst_11658 = cljs.core.first.call(null,inst_11656);var inst_11659 = cljs.core.second.call(null,inst_11656);var inst_11660 = cljs.core.partial.call(null,omchaya.controllers.controls.control_event,target,inst_11658,inst_11659);var inst_11661 = cljs.core.swap_BANG_.call(null,state,inst_11660);var inst_11662 = cljs.core.first.call(null,inst_11656);var inst_11663 = cljs.core.second.call(null,inst_11656);var inst_11664 = cljs.core.deref.call(null,state);var inst_11665 = omchaya.controllers.post_controls.post_control_event_BANG_.call(null,target,inst_11662,inst_11663,inst_11657,inst_11664);var state_11697__$1 = (function (){var statearr_11708 = state_11697;(statearr_11708[12] = inst_11661);
return statearr_11708;
})();var statearr_11709_11736 = state_11697__$1;(statearr_11709_11736[2] = inst_11665);
(statearr_11709_11736[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11698 === 9))
{var inst_11652 = (state_11697[9]);var inst_11646 = (state_11697[8]);var inst_11667 = cljs.core._EQ_.call(null,inst_11652,inst_11646);var state_11697__$1 = state_11697;if(inst_11667)
{var statearr_11710_11737 = state_11697__$1;(statearr_11710_11737[1] = 11);
} else
{var statearr_11711_11738 = state_11697__$1;(statearr_11711_11738[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11698 === 10))
{var inst_11689 = (state_11697[2]);var state_11697__$1 = (function (){var statearr_11712 = state_11697;(statearr_11712[13] = inst_11689);
return statearr_11712;
})();var statearr_11713_11739 = state_11697__$1;(statearr_11713_11739[2] = null);
(statearr_11713_11739[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11698 === 11))
{var inst_11650 = (state_11697[10]);var inst_11670 = cljs.core.nth.call(null,inst_11650,0,null);var inst_11671 = cljs.core.deref.call(null,state);var inst_11672 = cljs.core.first.call(null,inst_11670);var inst_11673 = cljs.core.second.call(null,inst_11670);var inst_11674 = cljs.core.partial.call(null,omchaya.controllers.api.api_event,target,inst_11672,inst_11673);var inst_11675 = cljs.core.swap_BANG_.call(null,state,inst_11674);var inst_11676 = cljs.core.first.call(null,inst_11670);var inst_11677 = cljs.core.second.call(null,inst_11670);var inst_11678 = cljs.core.deref.call(null,state);var inst_11679 = omchaya.controllers.post_api.post_api_event_BANG_.call(null,target,inst_11676,inst_11677,inst_11671,inst_11678);var state_11697__$1 = (function (){var statearr_11714 = state_11697;(statearr_11714[14] = inst_11675);
return statearr_11714;
})();var statearr_11715_11740 = state_11697__$1;(statearr_11715_11740[2] = inst_11679);
(statearr_11715_11740[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11698 === 12))
{var inst_11652 = (state_11697[9]);var inst_11681 = cljs.core._EQ_.call(null,inst_11652,new cljs.core.Keyword(null,"default","default",2558708147));var state_11697__$1 = state_11697;if(inst_11681)
{var statearr_11716_11741 = state_11697__$1;(statearr_11716_11741[1] = 14);
} else
{var statearr_11717_11742 = state_11697__$1;(statearr_11717_11742[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11698 === 13))
{var inst_11687 = (state_11697[2]);var state_11697__$1 = state_11697;var statearr_11718_11743 = state_11697__$1;(statearr_11718_11743[2] = inst_11687);
(statearr_11718_11743[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11698 === 14))
{var inst_11651 = (state_11697[11]);var state_11697__$1 = state_11697;var statearr_11719_11744 = state_11697__$1;(statearr_11719_11744[2] = inst_11651);
(statearr_11719_11744[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11698 === 15))
{var state_11697__$1 = state_11697;var statearr_11720_11745 = state_11697__$1;(statearr_11720_11745[2] = null);
(statearr_11720_11745[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11698 === 16))
{var inst_11685 = (state_11697[2]);var state_11697__$1 = state_11697;var statearr_11721_11746 = state_11697__$1;(statearr_11721_11746[2] = inst_11685);
(statearr_11721_11746[1] = 13);
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
var state_machine__5510__auto____0 = (function (){var statearr_11725 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11725[0] = state_machine__5510__auto__);
(statearr_11725[1] = 1);
return statearr_11725;
});
var state_machine__5510__auto____1 = (function (state_11697){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_11697);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e11726){if((e11726 instanceof Object))
{var ex__5513__auto__ = e11726;var statearr_11727_11747 = state_11697;(statearr_11727_11747[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11697);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11726;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11748 = state_11697;
state_11697 = G__11748;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_11697){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_11697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_11728 = f__5525__auto__.call(null);(statearr_11728[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto__);
return statearr_11728;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5526__auto__);
}));
return c__5524__auto__;
});
omchaya.core.setup_BANG_ = (function setup_BANG_(){return omchaya.core.main.call(null,document.getElementById("app"),omchaya.core.app_state);
});
window.onload = omchaya.core.setup_BANG_;
omchaya.core.send_async_message = (function send_async_message(ch_name,message,data){return cljs.core.async.put_BANG_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,omchaya.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",1108747865),cljs.core.keyword.call(null,ch_name)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,message),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true)], null));
});
goog.exportSymbol('omchaya.core.send_async_message', omchaya.core.send_async_message);
omchaya.core.remove_channel_BANG_ = (function remove_channel_BANG_(channel_id){return cljs.core.async.put_BANG_.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,omchaya.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",1108747865),new cljs.core.Keyword(null,"controls","controls",4741937704)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channel-remotely-destroyed","channel-remotely-destroyed",2144502171),channel_id], null));
});
goog.exportSymbol('omchaya.core.remove_channel_BANG_', omchaya.core.remove_channel_BANG_);
setInterval((function (){return omchaya.api.mock.random_message.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,omchaya.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comms","comms",1108747865),new cljs.core.Keyword(null,"api","api",1014001036)], null)),cljs.core.rand_nth.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"channels","channels",2446530370).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,omchaya.core.app_state)))));
}),1500);

//# sourceMappingURL=core.js.map