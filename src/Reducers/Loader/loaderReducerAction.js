import { SHOW_LOADER } from "../../Actions/action_types";

export const loaderReducerAction = (state = false, action) => {
    switch (action.type) {
        case SHOW_LOADER:
            return action.payload;

        default:
            return state;
    }
}