const KEY_NAME = "movieFinderWatchlist";

const setLocalStaorage = (val) => {
    localStorage.setItem(KEY_NAME, val);
}

export const addToWatchlist = (titleId) => {
    let watchlist = getWatchlist();
    let newObj = {};
    newObj[titleId] = true;
    watchlist = Object.assign({}, watchlist, newObj)
    setLocalStaorage(JSON.stringify(watchlist));
}

export const isInWatchlist = (titleId) => {
    let watchlist = getWatchlist();
    return Object.hasOwn(watchlist, titleId);
}

export const getWatchlist = () => {
    let watchlist = localStorage.getItem(KEY_NAME);
    if (!watchlist) return {};
    return JSON.parse(watchlist);
}

export const removeFromWatchlist = (titleId) => {
    let watchlist = getWatchlist();
    delete watchlist[titleId];
    setLocalStaorage(JSON.stringify(watchlist));
}

export const removeWatchlist = () => {
    localStorage.removeItem(KEY_NAME);
}