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
<<<<<<< HEAD
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
=======
var c__5524__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_17515){var state_val_17516 = (state_17515[1]);if((state_val_17516 === 1))
{var state_17515__$1 = state_17515;var statearr_17517_17547 = state_17515__$1;(statearr_17517_17547[2] = null);
(statearr_17517_17547[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17516 === 2))
{var state_17515__$1 = state_17515;if(true)
{var statearr_17518_17548 = state_17515__$1;(statearr_17518_17548[1] = 4);
} else
{var statearr_17519_17549 = state_17515__$1;(statearr_17519_17549[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17516 === 3))
{var inst_17513 = (state_17515[2]);var state_17515__$1 = state_17515;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17515__$1,inst_17513);
} else
{if((state_val_17516 === 4))
{var inst_17464 = (state_17515[7]);var inst_17463 = (state_17515[8]);var inst_17463__$1 = new cljs.core.Keyword(null,"controls","controls",4741937704).cljs$core$IFn$_invoke$arity$1(comms);var inst_17464__$1 = new cljs.core.Keyword(null,"api","api",1014001036).cljs$core$IFn$_invoke$arity$1(comms);var inst_17465 = [inst_17463__$1,inst_17464__$1];var inst_17466 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_17465,null));var state_17515__$1 = (function (){var statearr_17520 = state_17515;(statearr_17520[7] = inst_17464__$1);
(statearr_17520[8] = inst_17463__$1);
return statearr_17520;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_17515__$1,7,inst_17466);
} else
{if((state_val_17516 === 5))
{var state_17515__$1 = state_17515;var statearr_17521_17550 = state_17515__$1;(statearr_17521_17550[2] = null);
(statearr_17521_17550[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17516 === 6))
{var inst_17511 = (state_17515[2]);var state_17515__$1 = state_17515;var statearr_17522_17551 = state_17515__$1;(statearr_17522_17551[2] = inst_17511);
(statearr_17522_17551[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17516 === 7))
{var inst_17468 = (state_17515[9]);var inst_17470 = (state_17515[10]);var inst_17463 = (state_17515[8]);var inst_17468__$1 = (state_17515[2]);var inst_17469 = cljs.core.nth.call(null,inst_17468__$1,0,null);var inst_17470__$1 = cljs.core.nth.call(null,inst_17468__$1,1,null);var inst_17471 = cljs.core._EQ_.call(null,inst_17470__$1,inst_17463);var state_17515__$1 = (function (){var statearr_17523 = state_17515;(statearr_17523[11] = inst_17469);
(statearr_17523[9] = inst_17468__$1);
(statearr_17523[10] = inst_17470__$1);
return statearr_17523;
})();if(inst_17471)
{var statearr_17524_17552 = state_17515__$1;(statearr_17524_17552[1] = 8);
} else
{var statearr_17525_17553 = state_17515__$1;(statearr_17525_17553[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17516 === 8))
{var inst_17468 = (state_17515[9]);var inst_17474 = cljs.core.nth.call(null,inst_17468,0,null);var inst_17475 = cljs.core.deref.call(null,state);var inst_17476 = cljs.core.first.call(null,inst_17474);var inst_17477 = cljs.core.second.call(null,inst_17474);var inst_17478 = cljs.core.partial.call(null,omchaya.controllers.controls.control_event,target,inst_17476,inst_17477);var inst_17479 = cljs.core.swap_BANG_.call(null,state,inst_17478);var inst_17480 = cljs.core.first.call(null,inst_17474);var inst_17481 = cljs.core.second.call(null,inst_17474);var inst_17482 = cljs.core.deref.call(null,state);var inst_17483 = omchaya.controllers.post_controls.post_control_event_BANG_.call(null,target,inst_17480,inst_17481,inst_17475,inst_17482);var state_17515__$1 = (function (){var statearr_17526 = state_17515;(statearr_17526[12] = inst_17479);
return statearr_17526;
})();var statearr_17527_17554 = state_17515__$1;(statearr_17527_17554[2] = inst_17483);
(statearr_17527_17554[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17516 === 9))
{var inst_17470 = (state_17515[10]);var inst_17464 = (state_17515[7]);var inst_17485 = cljs.core._EQ_.call(null,inst_17470,inst_17464);var state_17515__$1 = state_17515;if(inst_17485)
{var statearr_17528_17555 = state_17515__$1;(statearr_17528_17555[1] = 11);
} else
{var statearr_17529_17556 = state_17515__$1;(statearr_17529_17556[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17516 === 10))
{var inst_17507 = (state_17515[2]);var state_17515__$1 = (function (){var statearr_17530 = state_17515;(statearr_17530[13] = inst_17507);
return statearr_17530;
})();var statearr_17531_17557 = state_17515__$1;(statearr_17531_17557[2] = null);
(statearr_17531_17557[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17516 === 11))
{var inst_17468 = (state_17515[9]);var inst_17488 = cljs.core.nth.call(null,inst_17468,0,null);var inst_17489 = cljs.core.deref.call(null,state);var inst_17490 = cljs.core.first.call(null,inst_17488);var inst_17491 = cljs.core.second.call(null,inst_17488);var inst_17492 = cljs.core.partial.call(null,omchaya.controllers.api.api_event,target,inst_17490,inst_17491);var inst_17493 = cljs.core.swap_BANG_.call(null,state,inst_17492);var inst_17494 = cljs.core.first.call(null,inst_17488);var inst_17495 = cljs.core.second.call(null,inst_17488);var inst_17496 = cljs.core.deref.call(null,state);var inst_17497 = omchaya.controllers.post_api.post_api_event_BANG_.call(null,target,inst_17494,inst_17495,inst_17489,inst_17496);var state_17515__$1 = (function (){var statearr_17532 = state_17515;(statearr_17532[14] = inst_17493);
return statearr_17532;
})();var statearr_17533_17558 = state_17515__$1;(statearr_17533_17558[2] = inst_17497);
(statearr_17533_17558[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17516 === 12))
{var inst_17470 = (state_17515[10]);var inst_17499 = cljs.core._EQ_.call(null,inst_17470,new cljs.core.Keyword(null,"default","default",2558708147));var state_17515__$1 = state_17515;if(inst_17499)
{var statearr_17534_17559 = state_17515__$1;(statearr_17534_17559[1] = 14);
} else
{var statearr_17535_17560 = state_17515__$1;(statearr_17535_17560[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17516 === 13))
{var inst_17505 = (state_17515[2]);var state_17515__$1 = state_17515;var statearr_17536_17561 = state_17515__$1;(statearr_17536_17561[2] = inst_17505);
(statearr_17536_17561[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17516 === 14))
{var inst_17469 = (state_17515[11]);var state_17515__$1 = state_17515;var statearr_17537_17562 = state_17515__$1;(statearr_17537_17562[2] = inst_17469);
(statearr_17537_17562[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17516 === 15))
{var state_17515__$1 = state_17515;var statearr_17538_17563 = state_17515__$1;(statearr_17538_17563[2] = null);
(statearr_17538_17563[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17516 === 16))
{var inst_17503 = (state_17515[2]);var state_17515__$1 = state_17515;var statearr_17539_17564 = state_17515__$1;(statearr_17539_17564[2] = inst_17503);
(statearr_17539_17564[1] = 13);
>>>>>>> master
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
<<<<<<< HEAD
var state_machine__5510__auto____0 = (function (){var statearr_11725 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11725[0] = state_machine__5510__auto__);
(statearr_11725[1] = 1);
return statearr_11725;
});
var state_machine__5510__auto____1 = (function (state_11697){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_11697);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
=======
var state_machine__5510__auto____0 = (function (){var statearr_17543 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17543[0] = state_machine__5510__auto__);
(statearr_17543[1] = 1);
return statearr_17543;
});
var state_machine__5510__auto____1 = (function (state_17515){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_17515);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
>>>>>>> master
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
<<<<<<< HEAD
}catch (e11726){if((e11726 instanceof Object))
{var ex__5513__auto__ = e11726;var statearr_11727_11747 = state_11697;(statearr_11727_11747[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11697);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11726;
=======
}catch (e17544){if((e17544 instanceof Object))
{var ex__5513__auto__ = e17544;var statearr_17545_17565 = state_17515;(statearr_17545_17565[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17515);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17544;
>>>>>>> master
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
<<<<<<< HEAD
var G__11748 = state_11697;
state_11697 = G__11748;
=======
var G__17566 = state_17515;
state_17515 = G__17566;
>>>>>>> master
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
<<<<<<< HEAD
state_machine__5510__auto__ = function(state_11697){
=======
state_machine__5510__auto__ = function(state_17515){
>>>>>>> master
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
<<<<<<< HEAD
return state_machine__5510__auto____1.call(this,state_11697);
=======
return state_machine__5510__auto____1.call(this,state_17515);
>>>>>>> master
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
<<<<<<< HEAD
})();var state__5526__auto__ = (function (){var statearr_11728 = f__5525__auto__.call(null);(statearr_11728[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto__);
return statearr_11728;
=======
})();var state__5526__auto__ = (function (){var statearr_17546 = f__5525__auto__.call(null);(statearr_17546[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto__);
return statearr_17546;
>>>>>>> master
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
<<<<<<< HEAD
}),1500);
=======
}),250);
>>>>>>> master

//# sourceMappingURL=core.js.map