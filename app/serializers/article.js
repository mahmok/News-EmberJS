import DS from 'ember-data';
import { v1 } from "ember-uuid";
export default DS.JSONSerializer.extend({

    serialize(snapshot, options) {
        let json = this._super(...arguments);
    
        console.log(json);
    
        return json;
      },


      normalizeQueryResponse(store, primaryModelClass, payload, id, requestType) {
        for(let i = 0; i < payload.articles.length; i++)
        {
          payload.articles[i].id = v1();
        }
        payload = payload.articles;

        return this.normalizeArrayResponse(store, primaryModelClass, payload, id, requestType);
      }
});