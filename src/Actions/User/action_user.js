import { USER_LOGIN } from "../action_types";

export const userLoginAction = (data) => {
    console.log(data);
    return {
        name: USER_LOGIN,
        payload: data,
    }
}