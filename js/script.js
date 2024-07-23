const { createApp } = Vue;

createApp({
  data() {
    return {
      contacts: [
        {
          id: 1,
          name: "Michele",
          avatar: "./img/avatar_1.jpg",
          messages: [
            { id: 1, text: "Hai portato a spasso il cane?", sent: false },
            { id: 2, text: "Ricordati di stendere i panni", sent: false },
            { id: 3, text: "Tutto fatto!", sent: true },
          ],
        },
        {
          id: 2,
          name: "Fabio",
          avatar: "./img/avatar_2.jpg",
          messages: [
            { id: 1, text: "Ciao Fabio, come stai?", sent: true },
            { id: 2, text: "Tutto bene, grazie!", sent: false },
          ],
        },
        {
          id: 3,
          name: "Samuele",
          avatar: "./img/avatar_3.jpg",
          messages: [
            { id: 1, text: "Hai visto il nuovo film?", sent: true },
            { id: 2, text: "Sì, è stato fantastico!", sent: false },
          ],
        },
        {
          id: 4,
          name: "Alessandro B.",
          avatar: "./img/avatar_4.jpg",
          messages: [
            { id: 1, text: "Vuoi venire a cena?", sent: false },
            { id: 2, text: "Certo, grazie per l'invito!", sent: true },
          ],
        },
        {
          id: 5,
          name: "Alessandro L.",
          avatar: "./img/avatar_5.jpg",
          messages: [
            { id: 1, text: "Quando ci vediamo?", sent: true },
            { id: 2, text: "Domani sera va bene?", sent: false },
          ],
        },
        {
          id: 6,
          name: "Claudia",
          avatar: "./img/avatar_6.jpg",
          messages: [
            { id: 1, text: "Hai finito il progetto?", sent: false },
            { id: 2, text: "Sì, l'ho appena completato!", sent: true },
          ],
        },
        {
          id: 7,
          name: "Federico",
          avatar: "./img/avatar_7.jpg",
          messages: [
            { id: 1, text: "Andiamo al mare questo weekend?", sent: true },
            { id: 2, text: "Sì, sarebbe fantastico!", sent: false },
          ],
        },
        {
          id: 8,
          name: "Davide",
          avatar: "./img/avatar_8.jpg",
          messages: [
            { id: 1, text: "Hai parlato con Mario?", sent: false },
            { id: 2, text: "Non ancora, lo farò oggi.", sent: true },
          ],
        },
      ],
      activeContact: null,
    };
  },
  methods: {
    setActiveContact(contact) {
      this.activeContact = contact;
    },
  },
}).mount("#app");
