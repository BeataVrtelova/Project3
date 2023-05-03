const ROBO_GENERATOR_URL = "https://robohash.org/";
const AVATAR_SIZE = "?set=2&size=180x180";

import displayCard from "../components/card/characterCard.js";

const loadCharacters = async () => {
  try {
    console.log("-- Load users...");
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const characters = await res.json();
    console.log("-- Users loaded.");
    return characters;
  } catch (err) {
    console.error(err);
  }
};

const displayCards = (characterList, users) => {
  try {
    console.log("-- Display cards: ", Array.from(users).length);
    characterList.innerHTML = "";
    Array.from(users).forEach((user) => {
      const child = document.createElement("div");
      child.innerHTML = displayCard(user);
      characterList.appendChild(child);
    });
  } catch (err) {
    console.error(err);
  }
};

export { loadCharacters, displayCards };
