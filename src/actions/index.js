export const ADD_CHARACTER = 'ADD_CHARACTER';

export function addCharacterById(id) {
    const action = {
        type: ADD_CHARACTER,
        id
        //  id:id :< this also same
    };
    return action;
}