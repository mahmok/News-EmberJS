import Controller from '@ember/controller';

export default Controller.extend({

    country: "US",
    query: "",
    

    actions: {
        submit()
        {
            console.log(this.country, this.query);
            this.store.query("article", {country: this.country, q: this.query}).then(result => {
                console.log(result.toArray());
                this.set("model", result.toArray());

            }).catch(err => {
                console.log(err);
            })

        },

        countryChange(event)
        {
            console.log(event);
            this.country = event.target.value;
        }
    }
});
