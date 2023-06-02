import { loadCharacters, displayCards } from "./utils/roboUsers.js";

const input = document.querySelector("#mySearch");
const characterList = document.getElementById("characterList");
const icon = document.querySelector(".icon");
const search = document.querySelector(".search");

icon.addEventListener("click", function () {
  search.classList.toggle("active");
});

let allCharacter;
let nameParts;
let nameIsSuitable;

loadCharacters().then((loaded) => {
  allCharacter = loaded;
  displayCards(characterList, loaded);
});

const getInput = () => {
  return input.value;
};

const filterUsers = (pattern) => {
  let patternLength = pattern.length;
  const filteredArray = allCharacter.filter((character) => {
    nameParts = character.name.split(" ");
    nameIsSuitable = false;
    nameParts.forEach(function (namePart) {
      if (
        namePart.substring(0, patternLength).toUpperCase() ==
        pattern.toUpperCase()
      ) {
        nameIsSuitable = true;
      }
    });

    return nameIsSuitable;
  });
  return filteredArray;
};

search.addEventListener("click", () => {
  const input = getInput();
  filterUsers(input);
});

input.addEventListener("input", () => {
  const filteredUsers = filterUsers(input.value);
  displayCards(characterList, filteredUsers);
});
