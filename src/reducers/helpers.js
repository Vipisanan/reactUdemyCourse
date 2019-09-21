import characters_json from "../data/characters";

function addHeroes(id) {
    let character = characters_json.find(c=>c.id === id);
    return character;
}
export default addHeroes;