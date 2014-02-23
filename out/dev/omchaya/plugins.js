// Compiled by ClojureScript 0.0-2156
goog.provide('omchaya.plugins');
goog.require('cljs.core');
goog.require('omchaya.emoticons');
goog.require('omchaya.emoticons');
goog.require('clojure.string');
goog.require('clojure.string');
omchaya.plugins.mention = (function mention(name){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.mention","span.mention",4255198904),name], null)," "], null);
});
omchaya.plugins.mentions = (function mentions(activity_pieces,current_user_email,users,settings,author){return cljs.core.map.call(null,(function (piece){var vec__11760 = cljs.core.re_find.call(null,/(.*)@(\w+)(.*)/,piece);var _ = cljs.core.nth.call(null,vec__11760,0,null);var pre = cljs.core.nth.call(null,vec__11760,1,null);var username = cljs.core.nth.call(null,vec__11760,2,null);var post = cljs.core.nth.call(null,vec__11760,3,null);var temp__4090__auto__ = (function (){var and__3391__auto__ = typeof piece === 'string';if(and__3391__auto__)
{return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([username], true),cljs.core.map.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"username","username",748190792),cljs.core.second),users));
} else
{return and__3391__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var at = temp__4090__auto__;return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,post),omchaya.plugins.mention.call(null,username)),pre);
} else
{return piece;
}
}),activity_pieces);
});
omchaya.plugins.emoticon = (function emoticon(emoji){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.emoticon-embed.small","img.emoticon-embed.small",3640115624),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",1014018390),new cljs.core.Keyword(null,"src","src",1014018390).cljs$core$IFn$_invoke$arity$1(emoji),new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.Keyword(null,"css","css",1014003061).cljs$core$IFn$_invoke$arity$1(emoji),new cljs.core.Keyword(null,"title","title",1124275658),new cljs.core.Keyword(null,"title","title",1124275658).cljs$core$IFn$_invoke$arity$1(emoji)], null)], null);
});
omchaya.plugins.emoticons = (function emoticons(activity_pieces){var helper = (function (piece){if(typeof piece === 'string')
{var temp__4090__auto__ = cljs.core.get.call(null,omchaya.emoticons.known_emoticons,clojure.string.trim.call(null,piece));if(cljs.core.truth_(temp__4090__auto__))
{var emoji = temp__4090__auto__;return omchaya.plugins.emoticon.call(null,emoji);
} else
{return piece;
}
} else
{return piece;
}
});return cljs.core.map.call(null,helper,activity_pieces);
});
omchaya.plugins.links = (function links(activity_pieces){var helper = (function (piece){var temp__4090__auto__ = (function (){var and__3391__auto__ = typeof piece === 'string';if(and__3391__auto__)
{return cljs.core.re_find.call(null,/https?:\/\/.*/,piece);
} else
{return and__3391__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var link = temp__4090__auto__;return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.href","a.href",3836624906),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",4427965699),"_blank",new cljs.core.Keyword(null,"href","href",1017115293),link], null),link], null);
} else
{return piece;
}
});return cljs.core.map.call(null,helper,activity_pieces);
});
omchaya.plugins.pastie = (function pastie(activity_pieces){var max_preview_length = 300;var max_preview_lines = 4;var original = clojure.string.join.call(null," ",activity_pieces);if(cljs.core.truth_(cljs.core.re_find.call(null,/\n.*\n/,original)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.pastie","pre.pastie",1693117899),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.pastie-link","a.pastie-link",3223124766),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",1017115293),"#",new cljs.core.Keyword(null,"on-click","on-click",1416542092),cljs.core.constantly.call(null,false)], null),"View pastie"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",1013907394)], null),(function (){var preview = (function (){var preview = original;var preview__$1 = (((cljs.core.count.call(null,clojure.string.split.call(null,/\n/,preview)) > max_preview_lines))?clojure.string.join.call(null,"\n",cljs.core.take.call(null,max_preview_lines,clojure.string.split.call(null,/\n/,preview))):preview);var preview__$2 = (((cljs.core.count.call(null,preview__$1) > max_preview_length))?cljs.core.subs.call(null,preview__$1,0,max_preview_length):preview__$1);return preview__$2;
})();return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,((cljs.core.not_EQ_.call(null,cljs.core.count.call(null,preview),cljs.core.count.call(null,original)))?"...":null)),preview);
})()], null)], null);
} else
{return activity_pieces;
}
});
omchaya.plugins.slash_me = (function slash_me(activity_pieces,current_user_email,users){if(cljs.core._EQ_.call(null,cljs.core.first.call(null,activity_pieces),"/me"))
{var user = cljs.core.get.call(null,users,current_user_email);return cljs.core.assoc_in.call(null,activity_pieces,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [0], null),new cljs.core.Keyword(null,"username","username",748190792).cljs$core$IFn$_invoke$arity$1(user));
} else
{return activity_pieces;
}
});
omchaya.plugins.slash_play = (function slash_play(activity_pieces){var vec__11762 = activity_pieces;var command = cljs.core.nth.call(null,vec__11762,0,null);var url = cljs.core.nth.call(null,vec__11762,1,null);var rest = cljs.core.nthnext.call(null,vec__11762,2);if(cljs.core._EQ_.call(null,command,"/play"))
{return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",4416891401),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.audio-play","a.audio-play",1097712106),"Playing ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",4427965699),"_blank",new cljs.core.Keyword(null,"href","href",1017115293),url], null),url], null)], null)], null)], null),rest);
} else
{return activity_pieces;
}
});
omchaya.plugins.rgb_embed = (function rgb_embed(activity_pieces){return cljs.core.map.call(null,(function (piece){var temp__4090__auto__ = cljs.core.re_find.call(null,/(.*)rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)(.*)/,piece);if(cljs.core.truth_(temp__4090__auto__))
{var vec__11764 = temp__4090__auto__;var _ = cljs.core.nth.call(null,vec__11764,0,null);var pre = cljs.core.nth.call(null,vec__11764,1,null);var r = cljs.core.nth.call(null,vec__11764,2,null);var g = cljs.core.nth.call(null,vec__11764,3,null);var b = cljs.core.nth.call(null,vec__11764,4,null);var post = cljs.core.nth.call(null,vec__11764,5,null);return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,post),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.color-preview","span.color-preview",4358700844),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),{"background-color": [cljs.core.str("rgb("),cljs.core.str(r),cljs.core.str(","),cljs.core.str(g),cljs.core.str(","),cljs.core.str(b),cljs.core.str(")")].join('')}], null)], null)),pre);
} else
{return piece;
}
}),activity_pieces);
});
omchaya.plugins.hex_embed = (function hex_embed(activity_pieces){return cljs.core.map.call(null,(function (piece){var temp__4090__auto__ = cljs.core.re_find.call(null,/(.*)#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})(.*)/,piece);if(cljs.core.truth_(temp__4090__auto__))
{var vec__11766 = temp__4090__auto__;var _ = cljs.core.nth.call(null,vec__11766,0,null);var pre = cljs.core.nth.call(null,vec__11766,1,null);var hex = cljs.core.nth.call(null,vec__11766,2,null);var post = cljs.core.nth.call(null,vec__11766,3,null);return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,post),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.color-preview","span.color-preview",4358700844),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",1123684643),{"background-color": [cljs.core.str("#"),cljs.core.str(hex)].join('')}], null)], null)),pre);
} else
{return piece;
}
}),activity_pieces);
});
omchaya.plugins.image_embed = (function image_embed(activity_pieces){return cljs.core.map.call(null,(function (piece){if(cljs.core.truth_(cljs.core.re_find.call(null,/http.*\.(jpg|jpeg|gif|png)/,piece)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.image-preview","div.image-preview",3251488299),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",4427965699),"_blank",new cljs.core.Keyword(null,"href","href",1017115293),piece], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.image-embed","img.image-embed",3682275758),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),piece], null)], null)], null)], null);
} else
{return piece;
}
}),activity_pieces);
});
omchaya.plugins.youtube_embed = (function youtube_embed(activity_pieces){return cljs.core.map.call(null,(function (piece){var temp__4090__auto__ = (function (){var and__3391__auto__ = cljs.core.re_find.call(null,/https?.+www.youtube.com.+watch/,piece);if(cljs.core.truth_(and__3391__auto__))
{return cljs.core.re_find.call(null,/\Wv=([\w|\-]*)/,piece);
} else
{return and__3391__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var vec__11768 = temp__4090__auto__;var _ = cljs.core.nth.call(null,vec__11768,0,null);var video_id = cljs.core.nth.call(null,vec__11768,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.youtube-preview","div.youtube-preview",4543886131),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iframe","iframe",4117657110),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",1127031096),"560",new cljs.core.Keyword(null,"height","height",4087841945),"315",new cljs.core.Keyword(null,"src","src",1014018390),[cljs.core.str("http://www.youtube.com/embed/"),cljs.core.str(video_id)].join(''),new cljs.core.Keyword(null,"frameBorder","frameBorder",4678186859),0,new cljs.core.Keyword(null,"allowFullScreen","allowFullScreen",4370862966),true], null)], null)], null);
} else
{return piece;
}
}),activity_pieces);
});
omchaya.plugins.vimeo_embed = (function vimeo_embed(activity_pieces){return cljs.core.map.call(null,(function (piece){var temp__4090__auto__ = cljs.core.re_find.call(null,/^https?:\/\/vimeo.com\/(\d+)/,piece);if(cljs.core.truth_(temp__4090__auto__))
{var vec__11770 = temp__4090__auto__;var _ = cljs.core.nth.call(null,vec__11770,0,null);var video_id = cljs.core.nth.call(null,vec__11770,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.vimeo-preview","div.vimeo-preview",2625657364),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iframe","iframe",4117657110),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",1127031096),"500",new cljs.core.Keyword(null,"height","height",4087841945),"281",new cljs.core.Keyword(null,"src","src",1014018390),[cljs.core.str("http://player.vimeo.com/video/"),cljs.core.str(video_id)].join(''),new cljs.core.Keyword(null,"frameBorder","frameBorder",4678186859),0,new cljs.core.Keyword(null,"webkitAllowFullScreen","webkitAllowFullScreen",923010068),true,new cljs.core.Keyword(null,"mozAllowFullScreen","mozAllowFullScreen",4100002110),true,new cljs.core.Keyword(null,"allowFullScreen","allowFullScreen",4370862966),true], null)], null)], null);
} else
{return piece;
}
}),activity_pieces);
});

//# sourceMappingURL=plugins.js.map