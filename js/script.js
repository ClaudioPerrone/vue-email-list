/* 
Esercizio di oggi: Vue Email List

- Attraverso l'apposita API di Boolean "https://flynn.boolean.careers/exercises/api/random/mail"
- generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
*/


const { createApp } = Vue;

createApp({
    data() {
        return {
            //INPUT DATI
            //Array vuoto da riempire con le email
            emails:[]
    };
    },
    methods: {
        //ELABORAZIONE DATI
        //Creo funzione con un ciclo for per chiedere 10 email e inserirli nell'array
        getEmailFromAPI(){
            for (let i = 0; i < 10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    this.emails.push(response.data.response);
                });
            }
        }
    },
    //OUTPUT DATI
    //Funzione evocata
    mounted() {
        this.getEmailFromAPI();
    }

}).mount('#app')