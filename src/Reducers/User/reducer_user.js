import { USER_LOGIN } from "../../Actions/action_types";
let data = false;

export const userReducerAction = (state = data, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return action.payload;

        default:
            return state;
    }
}