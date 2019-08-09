export const LoadState = () => {
    debugger
    try {
        let state = localStorage.getItem("state");
        if (!state)
            return undefined;
            return JSON.parse(state);
    }
    catch (err) {
        return undefined
    }
}

export const SaveState = state => {
    try {
        localStorage.setItem("state", JSON.stringify(state));
    }
    catch (err) {

    }
}