export const setLocalStorage = (key, value) => {
    if (getLocalStorage(key)){
        removeLocalStorage(key);
    }
    localStorage.setItem(key, value);
}

export const getLocalStorage = (key) => {
    return localStorage.getItem(key);
}

export const removeLocalStorage = (key) => {
    localStorage.removeItem(key);
}