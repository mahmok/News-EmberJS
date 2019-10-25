import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    namespace: "v2/top-headlines",
    host: 'https://newsapi.org',

    pathForType: function(type) {
        return "";
    },

    init() {
        this._super(...arguments);
    
        this.set('headers', {
          'X-Api-Key': '220c80a598fe4f5fa746dc2220abefec',
        });
    }
});
