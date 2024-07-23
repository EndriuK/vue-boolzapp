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
            {
              id: 1,
              text: "Hai portato a spasso il cane?",
              sent: false,
              time: "10:00",
            },
            {
              id: 2,
              text: "Ricordati di stendere i panni",
              sent: false,
              time: "10:05",
            },
            { id: 3, text: "Tutto fatto!", sent: true, time: "10:10" },
          ],
        },
        {
          id: 2,
          name: "Fabio",
          avatar: "./img/avatar_2.jpg",
          messages: [
            {
              id: 1,
              text: "Ciao Fabio, come stai?",
              sent: true,
              time: "11:00",
            },
            { id: 2, text: "Tutto bene, grazie!", sent: false, time: "11:05" },
          ],
        },
        {
          id: 3,
          name: "Samuele",
          avatar: "./img/avatar_3.jpg",
          messages: [
            {
              id: 1,
              text: "Hai visto il nuovo film?",
              sent: true,
              time: "12:00",
            },
            {
              id: 2,
              text: "Sì, è stato fantastico!",
              sent: false,
              time: "12:05",
            },
          ],
        },
        {
          id: 4,
          name: "Alessandro B.",
          avatar: "./img/avatar_4.jpg",
          messages: [
            { id: 1, text: "Vuoi venire a cena?", sent: false, time: "13:00" },
            {
              id: 2,
              text: "Certo, grazie per l'invito!",
              sent: true,
              time: "13:05",
            },
          ],
        },
        {
          id: 5,
          name: "Alessandro L.",
          avatar: "./img/avatar_5.jpg",
          messages: [
            { id: 1, text: "Quando ci vediamo?", sent: true, time: "14:00" },
            { id: 2, text: "Domani sera va bene?", sent: false, time: "14:05" },
          ],
        },
        {
          id: 6,
          name: "Claudia",
          avatar: "./img/avatar_6.jpg",
          messages: [
            {
              id: 1,
              text: "Hai finito il progetto?",
              sent: false,
              time: "15:00",
            },
            {
              id: 2,
              text: "Sì, l'ho appena completato!",
              sent: true,
              time: "15:05",
            },
          ],
        },
        {
          id: 7,
          name: "Federico",
          avatar: "./img/avatar_7.jpg",
          messages: [
            {
              id: 1,
              text: "Andiamo al mare questo weekend?",
              sent: true,
              time: "16:00",
            },
            {
              id: 2,
              text: "Sì, sarebbe fantastico!",
              sent: false,
              time: "16:05",
            },
          ],
        },
        {
          id: 8,
          name: "Davide",
          avatar: "./img/avatar_8.jpg",
          messages: [
            {
              id: 1,
              text: "Hai parlato con Mario?",
              sent: false,
              time: "17:00",
            },
            {
              id: 2,
              text: "Non ancora, lo farò oggi.",
              sent: true,
              time: "17:05",
            },
          ],
        },
      ],
      activeContact: null,
      searchQuery: "",
      newMessage: "",
      menuVisible: false,
      menuX: 0,
      menuY: 0,
      messageToDelete: null,
    };
  },
  computed: {
    filteredContacts() {
      return this.contacts
        .map((contact) => {
          const lastMessage = contact.messages[contact.messages.length - 1];
          return {
            ...contact,
            lastMessage: lastMessage ? lastMessage.text : "",
            lastMessageTime: lastMessage ? lastMessage.time : "",
          };
        })
        .filter((contact) =>
          contact.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
    },
  },
  methods: {
    setActiveContact(contact) {
      this.activeContact = contact;
    },
    sendMessage() {
      if (this.newMessage.trim() === "") return;
      const newMessageObject = {
        id: this.activeContact.messages.length + 1,
        text: this.newMessage,
        sent: true,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      this.activeContact.messages.push(newMessageObject);
      this.newMessage = "";
      setTimeout(() => {
        this.receiveMessage();
      }, 1000);
    },
    receiveMessage() {
      const responseMessage = {
        id: this.activeContact.messages.length + 1,
        text: "Ok",
        sent: false,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      this.activeContact.messages.push(responseMessage);
    },
    showMenu(event, message, index) {
      this.menuX = event.clientX;
      this.menuY = event.clientY;
      this.messageToDelete = index;
      this.menuVisible = true;
    },
    deleteMessage() {
      if (this.messageToDelete !== null && this.activeContact) {
        this.activeContact.messages.splice(this.messageToDelete, 1);
        this.messageToDelete = null;
        this.menuVisible = false;
      }
    },
  },
  mounted() {
    window.addEventListener("click", () => {
      this.menuVisible = false;
    });
  },
}).mount("#app");
