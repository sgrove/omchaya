// Compiled by ClojureScript 0.0-2156
goog.provide('omchaya.plugins');
goog.require('cljs.core');
goog.require('omchaya.emoticons');
goog.require('omchaya.emoticons');
goog.require('clojure.string');
goog.require('clojure.string');
omchaya.plugins.mention = (function mention(name){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$434,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$435,name], null)," "], null);
});
omchaya.plugins.mentions = (function mentions(activity_pieces,current_user_email,users,settings,author){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (piece){var vec__22059 = cljs.core.re_find(/(.*)@(\w+)(.*)/,piece);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22059,0,null);var pre = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22059,1,null);var username = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22059,2,null);var post = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22059,3,null);var temp__4090__auto__ = (function (){var and__3391__auto__ = typeof piece === 'string';if(and__3391__auto__)
{return cljs.core.some(cljs.core.PersistentHashSet.fromArray([username], true),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$386,cljs.core.second),users));
} else
{return and__3391__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var at = temp__4090__auto__;return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,post),omchaya.plugins.mention(username)),pre);
} else
{return piece;
}
}),activity_pieces);
});
omchaya.plugins.emoticon = (function emoticon(emoji){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$436,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$344,cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(emoji),cljs.core.constant$keyword$333,cljs.core.constant$keyword$433.cljs$core$IFn$_invoke$arity$1(emoji),cljs.core.constant$keyword$353,cljs.core.constant$keyword$353.cljs$core$IFn$_invoke$arity$1(emoji)], null)], null);
});
omchaya.plugins.emoticons = (function emoticons(activity_pieces){var helper = (function (piece){if(typeof piece === 'string')
{var temp__4090__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(omchaya.emoticons.known_emoticons,clojure.string.trim(piece));if(cljs.core.truth_(temp__4090__auto__))
{var emoji = temp__4090__auto__;return omchaya.plugins.emoticon(emoji);
} else
{return piece;
}
} else
{return piece;
}
});return cljs.core.map.cljs$core$IFn$_invoke$arity$2(helper,activity_pieces);
});
omchaya.plugins.links = (function links(activity_pieces){var helper = (function (piece){var temp__4090__auto__ = (function (){var and__3391__auto__ = typeof piece === 'string';if(and__3391__auto__)
{return cljs.core.re_find(/https?:\/\/.*/,piece);
} else
{return and__3391__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var link = temp__4090__auto__;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$437,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$402,"_blank",cljs.core.constant$keyword$413,link], null),link], null);
} else
{return piece;
}
});return cljs.core.map.cljs$core$IFn$_invoke$arity$2(helper,activity_pieces);
});
omchaya.plugins.pastie = (function pastie(activity_pieces){var max_preview_length = 300;var max_preview_lines = 4;var original = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",activity_pieces);if(cljs.core.truth_(cljs.core.re_find(/\n.*\n/,original)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$438,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$439,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$413,"#",cljs.core.constant$keyword$440,cljs.core.constantly(false)], null),"View pastie"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$441], null),(function (){var preview = (function (){var preview = original;var preview__$1 = (((cljs.core.count(clojure.string.split.cljs$core$IFn$_invoke$arity$2(/\n/,preview)) > max_preview_lines))?clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.take(max_preview_lines,clojure.string.split.cljs$core$IFn$_invoke$arity$2(/\n/,preview))):preview);var preview__$2 = (((cljs.core.count(preview__$1) > max_preview_length))?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(preview__$1,0,max_preview_length):preview__$1);return preview__$2;
})();return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(preview),cljs.core.count(original)))?"...":null)),preview);
})()], null)], null);
} else
{return activity_pieces;
}
});
omchaya.plugins.slash_me = (function slash_me(activity_pieces,current_user_email,users){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(activity_pieces),"/me"))
{var user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(users,current_user_email);return cljs.core.assoc_in(activity_pieces,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [0], null),cljs.core.constant$keyword$386.cljs$core$IFn$_invoke$arity$1(user));
} else
{return activity_pieces;
}
});
omchaya.plugins.slash_play = (function slash_play(activity_pieces){var vec__22061 = activity_pieces;var command = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22061,0,null);var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22061,1,null);var rest = cljs.core.nthnext(vec__22061,2);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(command,"/play"))
{return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$442,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$443,"Playing ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$415,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$402,"_blank",cljs.core.constant$keyword$413,url], null),url], null)], null)], null)], null),rest);
} else
{return activity_pieces;
}
});
omchaya.plugins.rgb_embed = (function rgb_embed(activity_pieces){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (piece){var temp__4090__auto__ = cljs.core.re_find(/(.*)rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)(.*)/,piece);if(cljs.core.truth_(temp__4090__auto__))
{var vec__22063 = temp__4090__auto__;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22063,0,null);var pre = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22063,1,null);var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22063,2,null);var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22063,3,null);var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22063,4,null);var post = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22063,5,null);return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,post),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$444,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$332,{"background-color": [cljs.core.str("rgb("),cljs.core.str(r),cljs.core.str(","),cljs.core.str(g),cljs.core.str(","),cljs.core.str(b),cljs.core.str(")")].join('')}], null)], null)),pre);
} else
{return piece;
}
}),activity_pieces);
});
omchaya.plugins.hex_embed = (function hex_embed(activity_pieces){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (piece){var temp__4090__auto__ = cljs.core.re_find(/(.*)#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})(.*)/,piece);if(cljs.core.truth_(temp__4090__auto__))
{var vec__22065 = temp__4090__auto__;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22065,0,null);var pre = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22065,1,null);var hex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22065,2,null);var post = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22065,3,null);return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,post),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$444,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$332,{"background-color": [cljs.core.str("#"),cljs.core.str(hex)].join('')}], null)], null)),pre);
} else
{return piece;
}
}),activity_pieces);
});
omchaya.plugins.image_embed = (function image_embed(activity_pieces){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (piece){if(cljs.core.truth_(cljs.core.re_find(/http.*\.(jpg|jpeg|gif|png)/,piece)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$445,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$415,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$402,"_blank",cljs.core.constant$keyword$413,piece], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$446,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$344,piece], null)], null)], null)], null);
} else
{return piece;
}
}),activity_pieces);
});
omchaya.plugins.youtube_embed = (function youtube_embed(activity_pieces){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (piece){var temp__4090__auto__ = (function (){var and__3391__auto__ = cljs.core.re_find(/https?.+www.youtube.com.+watch/,piece);if(cljs.core.truth_(and__3391__auto__))
{return cljs.core.re_find(/\Wv=([\w|\-]*)/,piece);
} else
{return and__3391__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var vec__22067 = temp__4090__auto__;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22067,0,null);var video_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22067,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$447,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$448,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$449,"560",cljs.core.constant$keyword$450,"315",cljs.core.constant$keyword$344,[cljs.core.str("http://www.youtube.com/embed/"),cljs.core.str(video_id)].join(''),cljs.core.constant$keyword$451,0,cljs.core.constant$keyword$452,true], null)], null)], null);
} else
{return piece;
}
}),activity_pieces);
});
omchaya.plugins.vimeo_embed = (function vimeo_embed(activity_pieces){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (piece){var temp__4090__auto__ = cljs.core.re_find(/^https?:\/\/vimeo.com\/(\d+)/,piece);if(cljs.core.truth_(temp__4090__auto__))
{var vec__22069 = temp__4090__auto__;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22069,0,null);var video_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22069,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$453,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$448,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$449,"500",cljs.core.constant$keyword$450,"281",cljs.core.constant$keyword$344,[cljs.core.str("http://player.vimeo.com/video/"),cljs.core.str(video_id)].join(''),cljs.core.constant$keyword$451,0,cljs.core.constant$keyword$454,true,cljs.core.constant$keyword$455,true,cljs.core.constant$keyword$452,true], null)], null)], null);
} else
{return piece;
}
}),activity_pieces);
});
