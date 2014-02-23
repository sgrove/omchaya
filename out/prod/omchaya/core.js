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
cljs.core.enable_console_print_BANG_();
omchaya.core.controls_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
omchaya.core.api_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
omchaya.core.app_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(omchaya.mock_data.initial_state(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$432,omchaya.core.controls_ch,cljs.core.constant$keyword$533,omchaya.core.api_ch], null)));
omchaya.core.main = (function main(target,state){var comms = cljs.core.constant$keyword$370.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));omchaya.routes.define_routes_BANG_(state,document.getElementById("history-container"));
om.core.root(omchaya.components.app.app,state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$402,target,cljs.core.constant$keyword$399,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$370,comms], null)], null));
var c__5524__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_21996){var state_val_21997 = (state_21996[1]);if((state_val_21997 === 1))
{var state_21996__$1 = state_21996;var statearr_21998_22028 = state_21996__$1;(statearr_21998_22028[2] = null);
(statearr_21998_22028[1] = 2);
return cljs.core.constant$keyword$318;
} else
{if((state_val_21997 === 2))
{var state_21996__$1 = state_21996;if(true)
{var statearr_21999_22029 = state_21996__$1;(statearr_21999_22029[1] = 4);
} else
{var statearr_22000_22030 = state_21996__$1;(statearr_22000_22030[1] = 5);
}
return cljs.core.constant$keyword$318;
} else
{if((state_val_21997 === 3))
{var inst_21994 = (state_21996[2]);var state_21996__$1 = state_21996;return cljs.core.async.impl.ioc_helpers.return_chan(state_21996__$1,inst_21994);
} else
{if((state_val_21997 === 4))
{var inst_21944 = (state_21996[7]);var inst_21945 = (state_21996[8]);var inst_21944__$1 = cljs.core.constant$keyword$432.cljs$core$IFn$_invoke$arity$1(comms);var inst_21945__$1 = cljs.core.constant$keyword$533.cljs$core$IFn$_invoke$arity$1(comms);var inst_21946 = [inst_21944__$1,inst_21945__$1];var inst_21947 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_21946,null));var state_21996__$1 = (function (){var statearr_22001 = state_21996;(statearr_22001[7] = inst_21944__$1);
(statearr_22001[8] = inst_21945__$1);
return statearr_22001;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_21996__$1,7,inst_21947);
} else
{if((state_val_21997 === 5))
{var state_21996__$1 = state_21996;var statearr_22002_22031 = state_21996__$1;(statearr_22002_22031[2] = null);
(statearr_22002_22031[1] = 6);
return cljs.core.constant$keyword$318;
} else
{if((state_val_21997 === 6))
{var inst_21992 = (state_21996[2]);var state_21996__$1 = state_21996;var statearr_22003_22032 = state_21996__$1;(statearr_22003_22032[2] = inst_21992);
(statearr_22003_22032[1] = 3);
return cljs.core.constant$keyword$318;
} else
{if((state_val_21997 === 7))
{var inst_21944 = (state_21996[7]);var inst_21949 = (state_21996[9]);var inst_21951 = (state_21996[10]);var inst_21949__$1 = (state_21996[2]);var inst_21950 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21949__$1,0,null);var inst_21951__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21949__$1,1,null);var inst_21952 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_21951__$1,inst_21944);var state_21996__$1 = (function (){var statearr_22004 = state_21996;(statearr_22004[9] = inst_21949__$1);
(statearr_22004[11] = inst_21950);
(statearr_22004[10] = inst_21951__$1);
return statearr_22004;
})();if(inst_21952)
{var statearr_22005_22033 = state_21996__$1;(statearr_22005_22033[1] = 8);
} else
{var statearr_22006_22034 = state_21996__$1;(statearr_22006_22034[1] = 9);
}
return cljs.core.constant$keyword$318;
} else
{if((state_val_21997 === 8))
{var inst_21949 = (state_21996[9]);var inst_21955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21949,0,null);var inst_21956 = cljs.core.deref(state);var inst_21957 = cljs.core.first(inst_21955);var inst_21958 = cljs.core.second(inst_21955);var inst_21959 = cljs.core.partial.cljs$core$IFn$_invoke$arity$4(omchaya.controllers.controls.control_event,target,inst_21957,inst_21958);var inst_21960 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,inst_21959);var inst_21961 = cljs.core.first(inst_21955);var inst_21962 = cljs.core.second(inst_21955);var inst_21963 = cljs.core.deref(state);var inst_21964 = (omchaya.controllers.post_controls.post_control_event_BANG_.cljs$core$IFn$_invoke$arity$5 ? omchaya.controllers.post_controls.post_control_event_BANG_.cljs$core$IFn$_invoke$arity$5(target,inst_21961,inst_21962,inst_21956,inst_21963) : omchaya.controllers.post_controls.post_control_event_BANG_.call(null,target,inst_21961,inst_21962,inst_21956,inst_21963));var state_21996__$1 = (function (){var statearr_22007 = state_21996;(statearr_22007[12] = inst_21960);
return statearr_22007;
})();var statearr_22008_22035 = state_21996__$1;(statearr_22008_22035[2] = inst_21964);
(statearr_22008_22035[1] = 10);
return cljs.core.constant$keyword$318;
} else
{if((state_val_21997 === 9))
{var inst_21945 = (state_21996[8]);var inst_21951 = (state_21996[10]);var inst_21966 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_21951,inst_21945);var state_21996__$1 = state_21996;if(inst_21966)
{var statearr_22009_22036 = state_21996__$1;(statearr_22009_22036[1] = 11);
} else
{var statearr_22010_22037 = state_21996__$1;(statearr_22010_22037[1] = 12);
}
return cljs.core.constant$keyword$318;
} else
{if((state_val_21997 === 10))
{var inst_21988 = (state_21996[2]);var state_21996__$1 = (function (){var statearr_22011 = state_21996;(statearr_22011[13] = inst_21988);
return statearr_22011;
})();var statearr_22012_22038 = state_21996__$1;(statearr_22012_22038[2] = null);
(statearr_22012_22038[1] = 2);
return cljs.core.constant$keyword$318;
} else
{if((state_val_21997 === 11))
{var inst_21949 = (state_21996[9]);var inst_21969 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_21949,0,null);var inst_21970 = cljs.core.deref(state);var inst_21971 = cljs.core.first(inst_21969);var inst_21972 = cljs.core.second(inst_21969);var inst_21973 = cljs.core.partial.cljs$core$IFn$_invoke$arity$4(omchaya.controllers.api.api_event,target,inst_21971,inst_21972);var inst_21974 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,inst_21973);var inst_21975 = cljs.core.first(inst_21969);var inst_21976 = cljs.core.second(inst_21969);var inst_21977 = cljs.core.deref(state);var inst_21978 = (omchaya.controllers.post_api.post_api_event_BANG_.cljs$core$IFn$_invoke$arity$5 ? omchaya.controllers.post_api.post_api_event_BANG_.cljs$core$IFn$_invoke$arity$5(target,inst_21975,inst_21976,inst_21970,inst_21977) : omchaya.controllers.post_api.post_api_event_BANG_.call(null,target,inst_21975,inst_21976,inst_21970,inst_21977));var state_21996__$1 = (function (){var statearr_22013 = state_21996;(statearr_22013[14] = inst_21974);
return statearr_22013;
})();var statearr_22014_22039 = state_21996__$1;(statearr_22014_22039[2] = inst_21978);
(statearr_22014_22039[1] = 13);
return cljs.core.constant$keyword$318;
} else
{if((state_val_21997 === 12))
{var inst_21951 = (state_21996[10]);var inst_21980 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_21951,cljs.core.constant$keyword$308);var state_21996__$1 = state_21996;if(inst_21980)
{var statearr_22015_22040 = state_21996__$1;(statearr_22015_22040[1] = 14);
} else
{var statearr_22016_22041 = state_21996__$1;(statearr_22016_22041[1] = 15);
}
return cljs.core.constant$keyword$318;
} else
{if((state_val_21997 === 13))
{var inst_21986 = (state_21996[2]);var state_21996__$1 = state_21996;var statearr_22017_22042 = state_21996__$1;(statearr_22017_22042[2] = inst_21986);
(statearr_22017_22042[1] = 10);
return cljs.core.constant$keyword$318;
} else
{if((state_val_21997 === 14))
{var inst_21950 = (state_21996[11]);var state_21996__$1 = state_21996;var statearr_22018_22043 = state_21996__$1;(statearr_22018_22043[2] = inst_21950);
(statearr_22018_22043[1] = 16);
return cljs.core.constant$keyword$318;
} else
{if((state_val_21997 === 15))
{var state_21996__$1 = state_21996;var statearr_22019_22044 = state_21996__$1;(statearr_22019_22044[2] = null);
(statearr_22019_22044[1] = 16);
return cljs.core.constant$keyword$318;
} else
{if((state_val_21997 === 16))
{var inst_21984 = (state_21996[2]);var state_21996__$1 = state_21996;var statearr_22020_22045 = state_21996__$1;(statearr_22020_22045[2] = inst_21984);
(statearr_22020_22045[1] = 13);
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
var state_machine__5510__auto____0 = (function (){var statearr_22024 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22024[0] = state_machine__5510__auto__);
(statearr_22024[1] = 1);
return statearr_22024;
});
var state_machine__5510__auto____1 = (function (state_21996){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__(state_21996);if(cljs.core.keyword_identical_QMARK_(result__5512__auto__,cljs.core.constant$keyword$318))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e22025){if((e22025 instanceof Object))
{var ex__5513__auto__ = e22025;var statearr_22026_22046 = state_21996;(statearr_22026_22046[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_21996);
return cljs.core.constant$keyword$318;
} else
{if(cljs.core.constant$keyword$307)
{throw e22025;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5511__auto__,cljs.core.constant$keyword$318))
{{
var G__22047 = state_21996;
state_21996 = G__22047;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_21996){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_21996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_22027 = (f__5525__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5525__auto__.cljs$core$IFn$_invoke$arity$0() : f__5525__auto__.call(null));(statearr_22027[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto__);
return statearr_22027;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5526__auto__);
}));
return c__5524__auto__;
});
omchaya.core.setup_BANG_ = (function setup_BANG_(){return omchaya.core.main(document.getElementById("app"),omchaya.core.app_state);
});
window.onload = omchaya.core.setup_BANG_;
omchaya.core.send_async_message = (function send_async_message(ch_name,message,data){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(omchaya.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$370,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(ch_name)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(message),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.array_seq([cljs.core.constant$keyword$313,true], 0))], null));
});
goog.exportSymbol('omchaya.core.send_async_message', omchaya.core.send_async_message);
omchaya.core.remove_channel_BANG_ = (function remove_channel_BANG_(channel_id){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(omchaya.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$370,cljs.core.constant$keyword$432], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$388,channel_id], null));
});
goog.exportSymbol('omchaya.core.remove_channel_BANG_', omchaya.core.remove_channel_BANG_);
setInterval((function (){return omchaya.api.mock.random_message(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(omchaya.core.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$370,cljs.core.constant$keyword$533], null)),cljs.core.rand_nth(cljs.core.keys(cljs.core.constant$keyword$368.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(omchaya.core.app_state)))));
}),250);
