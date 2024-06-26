//Helper file for localstorage apis

const KEY_NAME = "movieFinderWatchlist";

const setLocalStaorage = (val) => {
    localStorage.setItem(KEY_NAME, val);
}

export const addToWatchlist = (titleId, titleDetails) => {
    let watchlist = getWatchlist();
    let newObj = {};
    newObj[titleId] = titleDetails;
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
    return watchlist;
}

export const removeWatchlist = () => {
    localStorage.removeItem(KEY_NAME);
}