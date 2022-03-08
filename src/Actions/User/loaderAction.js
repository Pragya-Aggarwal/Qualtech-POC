import { SHOW_LOADER } from "../action_types"

export const showLoader = (bool) => {
    return {
        name: SHOW_LOADER,
        payload: bool,
    }
}