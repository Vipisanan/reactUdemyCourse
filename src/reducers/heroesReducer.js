import {ADD_CHARACTER} from "../actions";
import addHeroes from "./helpers";

function heroes(state = [], action) {
    switch (action.type) {
        case  ADD_CHARACTER:
            let heroes = addHeroes(action.id);
            return heroes;
        default:
            return state;
    }
}
export default heroes;