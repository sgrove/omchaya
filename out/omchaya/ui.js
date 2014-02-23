// Compiled by ClojureScript 0.0-2156
goog.provide('omchaya.ui');
goog.require('cljs.core');
goog.require('omchaya.useful');
goog.require('cljs.core.async');
goog.require('omchaya.components.app');
goog.require('omchaya.utils');
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
goog.require('omchaya.mock_data');
goog.require('omchaya.datetime');
goog.require('clojure.string');
goog.require('omchaya.components.app');
goog.require('omchaya.utils');
goog.require('om.dom');
goog.require('dommy.core');
goog.require('cljs.core.async');
goog.require('dommy.core');
omchaya.ui.scroll_to_latest_message_BANG_ = (function scroll_to_latest_message_BANG_(target,channel_id){var channel = dommy.template.__GT_node_like.call(null,target).querySelector(dommy.core.selector.call(null,[cljs.core.str("#channels-"),cljs.core.str(channel_id)].join('')));var activities = dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,channel).getElementsByClassName("activity"));var latest = cljs.core.last.call(null,activities);if(cljs.core.truth_((function (){var and__3391__auto__ = channel;if(cljs.core.truth_(and__3391__auto__))
{return latest;
} else
{return and__3391__auto__;
}
})()))
{return channel.scrollTop = latest.offsetTop;
} else
{return null;
}
});
/**
* If the second-to-last message is visible in the chat viewport, then
* scroll to the latest message
*/
omchaya.ui.scroll_to_latest_message_when_appropriate_BANG_ = (function scroll_to_latest_message_when_appropriate_BANG_(target,channel_id){var channel_el = dommy.template.__GT_node_like.call(null,target).querySelector(dommy.core.selector.call(null,[cljs.core.str("#channels-"),cljs.core.str(channel_id)].join('')));var activities_els = dommy.utils.__GT_Array.call(null,dommy.template.__GT_node_like.call(null,channel_el).getElementsByClassName("activity"));var second_latest_el = cljs.core.last.call(null,cljs.core.drop_last.call(null,activities_els));var latest_el = cljs.core.last.call(null,activities_els);if(cljs.core.truth_((function (){var and__3391__auto__ = channel_el;if(cljs.core.truth_(and__3391__auto__))
{return second_latest_el;
} else
{return and__3391__auto__;
}
})()))
{var channel_view_bottom = (channel_el.scrollTop + channel_el.clientHeight);if((channel_view_bottom > second_latest_el.offsetTop))
{return channel_el.scrollTop = latest_el.offsetTop;
} else
{return null;
}
} else
{return null;
}
});

//# sourceMappingURL=ui.js.map