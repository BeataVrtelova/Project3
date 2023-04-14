const ROBO_GENERATOR_URL = "https://robohash.org/";
const AVATAR_SIZE = "?set=2&size=180x180";

var charactersArray;

const charakterList = document.getElementById("charakterList");

const loadCharacters = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    let rmCharacters = await res.json();
    charactersArray = rmCharacters;
    //TODO generateImages(charactersArray);
    displayCharacters(charactersArray);
    console.log(charactersArray);
  } catch (err) {
    console.error(err);
  }
};

/* const generateImages = (charactersArray) => {
  charactersArray.array.forEach((element) => {
    const avatar = generateAvatar(element);
    element.image = avatar;
  });
}; */

const generateAvatar = async (element) => {
  const res = await fetch(ROBO_GENERATOR_URL + element.name + "AVATAR_SIZE");
  //TODO return ...;
};

const showFiltered = (pattern) => {
  let filteredCharactersArray = filterCharacters(pattern);
  displayCharacters(filteredCharactersArray);
};

const filterCharacters = (pattern) => {
  let pLlength = pattern.length;
  return charactersArray.filter((character) => {
    return (
      character.name.substring(0, pLlength).toUpperCase() ==
      pattern.toUpperCase()
    );
  });
};

const displayCharacters = (characters) => {
  const htmlString = characters
    .map((character) => {
      return `
      <ul>
        <li class="character">
            <h2>${character.name}</h2>
            <p>Company: ${character.company.name}</p>
            <p>Job: ${character.company.catchPhrase}</p>
            <p>Phone: ${character.phone}</p>
            <p>E-mail: ${character.email}</p>
            <p>WEB: ${character.website}</p>
            <img src="${character.image}"></img>
       </li>
       </ul>
         `;
    })
    .join("");
  charakterList.innerHTML = htmlString;
};

loadCharacters();
