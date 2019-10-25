import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    source: DS.attr(),
    author: DS.attr(),
    title: DS.attr(),
    description: DS.attr(),
    url: DS.attr(),
    urlToImage: DS.attr(),
    publishedAt: DS.attr(),

});
