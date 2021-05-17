const app = new Vue({
  el: '#app',

  data: {

    emailList: [],

  },

  mounted() {

    // una volta montata l'istanza Vue, chiamo la funzione
    this.getEmail('https://flynn.boolean.careers/exercises/api/random/mail');

  },

  methods: {

    // creo funzione che faccia chiamata API ad url custom
    // pusha la risposta (email) dentro l'array vuoto e se
    // la lunghezza dell'array è inferiore di 10 richiama se
    // stessa (riempie l'array con 10 indirizzi email).
    // Nel caso di errore lo mostra a console
    getEmail(url) {
      axios.get(url)
        .then(resp => {

          this.emailList.push(resp.data.response);
          if(this.emailList.length < 10) {
            this.getEmail(url);
          }

        }).catch(err => {

          console.log(err);

        }); //end chiamata API axios

    } //end getEmail

  } //end methods

}); //end app