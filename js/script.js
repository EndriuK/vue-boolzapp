const { createApp } = Vue;

createApp({
  data() {
    return {
      contacts: [
        {
          id: 1,
          name: "Michele",
          avatar: "./img/avatar_1.jpg",
        },
        {
          id: 2,
          name: "Fabio",
          avatar: "./img/avatar_2.jpg",
        },
        {
          id: 3,
          name: "Samuele",
          avatar: "./img/avatar_3.jpg",
        },
        {
          id: 4,
          name: "Alessandro B.",
          avatar: "./img/avatar_4.jpg",
        },
        {
          id: 5,
          name: "Alessandro L.",
          avatar: "./img/avatar_5.jpg",
        },
        {
          id: 6,
          name: "Claudia",
          avatar: "./img/avatar_6.jpg",
        },
        {
          id: 7,
          name: "Federico",
          avatar: "./img/avatar_7.jpg",
        },
        {
          id: 8,
          name: "Davide",
          avatar: "./img/avatar_8.jpg",
        },
      ],
    };
  },
}).mount("#app");
