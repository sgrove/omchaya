// Compiled by ClojureScript 0.0-2156
goog.provide('omchaya.controllers.api');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
omchaya.controllers.api.append_activity_to_channel = (function append_activity_to_channel(state,channel_id,activity){return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",2446530370),channel_id,new cljs.core.Keyword(null,"activities","activities",3062509407)], null),cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.sort_by,new cljs.core.Keyword(null,"created_at","created_at",2383584348)),cljs.core.conj),activity);
});
omchaya.controllers.api.drop_old_activity_from_channel = (function drop_old_activity_from_channel(state,channel_id,message_limit){return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"channels","channels",2446530370),channel_id,new cljs.core.Keyword(null,"activities","activities",3062509407)], null),cljs.core.partial.call(null,cljs.core.take_last,message_limit));
});
omchaya.controllers.api.api_event = (function (){var method_table__4261__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__4262__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__4263__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__4264__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__4265__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("api-event",(function (target,message,args,state){return message;
}),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__4265__auto__,method_table__4261__auto__,prefer_table__4262__auto__,method_cache__4263__auto__,cached_hierarchy__4264__auto__));
})();
cljs.core._add_method.call(null,omchaya.controllers.api.api_event,new cljs.core.Keyword(null,"channel-activity-received","channel-activity-received",3517943815),(function (target,message,activity,state){var message_limit = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",2448535445),new cljs.core.Keyword(null,"message-limit","message-limit",2656236007)], null));return omchaya.controllers.api.drop_old_activity_from_channel.call(null,omchaya.controllers.api.append_activity_to_channel.call(null,state,new cljs.core.Keyword(null,"channel-id","channel-id",3378014615).cljs$core$IFn$_invoke$arity$1(activity),activity),new cljs.core.Keyword(null,"channel-id","channel-id",3378014615).cljs$core$IFn$_invoke$arity$1(activity),message_limit);
}));

//# sourceMappingURL=api.js.map