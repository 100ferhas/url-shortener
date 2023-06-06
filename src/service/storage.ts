import IShorten from "../models/shortens";

const HISTORY_KEY = "history";
const MAX_ITEMS = 5;

const readHistory = (localStorage: Storage): IShorten[] => {
    let history = localStorage.getItem(HISTORY_KEY);
    return history ? JSON.parse(history) : [];
}

const saveHistory = (localStorage: Storage, shorten: IShorten) => {
    let history = readHistory(localStorage);

    while (history.length >= MAX_ITEMS) {
        history.pop();
    }

    history.unshift(shorten);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
}

export {
    HISTORY_KEY,
    MAX_ITEMS,
    readHistory,
    saveHistory
};