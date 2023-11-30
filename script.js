// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.


const { createApp } = Vue;

createApp({
    data() {
        return { message: 'Micio miao',
       immagine: 'https://i0.wp.com/pawesomecats.com/wp-content/uploads/2016/04/European-Shorthair-Cat.jpg?fit=740%2C529&ssl=1',
        
        }
    },
}).mount('#app');