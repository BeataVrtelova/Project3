const ROBO_GENERATOR_URL = "https://robohash.org/";

const createCard = (character) => {
  return `     
          <div class="character">
            <h2>${character.name}</h2>
            <p>Company: ${character.company.name}</p>
            <p>Job: ${character.company.catchPhrase}</p>
            <p>Phone: ${character.phone}</p>
            <p>E-mail: ${character.email}</p>
            <p>WEB: ${character.website}</p>
            <img src="http://robohash.org/${character.name}.png"></img>
          </div>
         `;
};

export default createCard;
