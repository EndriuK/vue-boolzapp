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
            { id: 1, text: "Hai portato a spasso il cane?", sentByUser: false },
            { id: 2, text: "Ricordati di stendere i panni", sentByUser: false },
            { id: 3, text: "Tutto fatto!", sentByUser: true },
          ],
        },
        {
          id: 2,
          name: "Fabio",
          avatar: "./img/avatar_2.jpg",
          messages: [
            { id: 1, text: "Ciao Fabio!", sentByUser: true },
            { id: 2, text: "Ciao, come stai?", sentByUser: false },
          ],
        },
        {
          id: 3,
          name: "Samuele",
          avatar: "./img/avatar_3.jpg",
          messages: [
            { id: 1, text: "Ehi Samuele, ci sei?", sentByUser: true },
            { id: 2, text: "Sì, ci sono!", sentByUser: false },
          ],
        },
        {
          id: 4,
          name: "Alessandro B.",
          avatar: "./img/avatar_4.jpg",
          messages: [
            { id: 1, text: "Ciao Alessandro B.", sentByUser: true },
            { id: 2, text: "Ciao!", sentByUser: false },
          ],
        },
        {
          id: 5,
          name: "Alessandro L.",
          avatar: "./img/avatar_5.jpg",
          messages: [
            { id: 1, text: "Ciao Alessandro L.", sentByUser: true },
            { id: 2, text: "Ciao!", sentByUser: false },
          ],
        },
        {
          id: 6,
          name: "Claudia",
          avatar: "./img/avatar_6.jpg",
          messages: [
            { id: 1, text: "Ciao Claudia!", sentByUser: true },
            { id: 2, text: "Ciao, come va?", sentByUser: false },
          ],
        },
        {
          id: 7,
          name: "Federico",
          avatar: "./img/avatar_7.jpg",
          messages: [
            { id: 1, text: "Ciao Federico!", sentByUser: true },
            { id: 2, text: "Ciao!", sentByUser: false },
          ],
        },
        {
          id: 8,
          name: "Davide",
          avatar: "./img/avatar_8.jpg",
          messages: [
            { id: 1, text: "Ciao Davide!", sentByUser: true },
            { id: 2, text: "Ciao!", sentByUser: false },
          ],
        },
      ],
      activeContact: null,
      newMessage: "",
    };
  },
  methods: {
    selectContact(contact) {
      this.activeContact = contact;
    },
    sendMessage() {
      if (this.newMessage.trim() === "") return;

      const newMsg = {
        id: this.activeContact.messages.length + 1,
        text: this.newMessage,
        sentByUser: true,
      };

      this.activeContact.messages.push(newMsg);
      this.newMessage = "";

      setTimeout(() => {
        const replyMsg = {
          id: this.activeContact.messages.length + 1,
          text: "ok",
          sentByUser: false,
        };
        this.activeContact.messages.push(replyMsg);
      }, 1000);
    },
  },
}).mount("#app");
