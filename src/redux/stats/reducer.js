import {
    // SKILL,
    MAX_SKILL,
    // STAMINA,
    MAX_STAMINA,
    // LUCK,
    MAX_LUCK,
} from './action-types';
  
const initialState = {
    skill: 0,
    maxSkill: 0,
    stamina: 0,
    maxStamina: 0,
    luck: 0,
    maxLuck: 0,
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case MAX_SKILL:
            return {
                ...state,
                maxSkill: action.payload,
                skill: action.payload
            }
        case MAX_STAMINA:
            return {
                ...state,
                maxStamina: action.payload,
                stamina: action.payload
            }
        case MAX_LUCK:
            return {
                ...state,
                maxLuck: action.payload,
                luck: action.payload
            }
        default:
            return state;
    }
};

export default reducer;
