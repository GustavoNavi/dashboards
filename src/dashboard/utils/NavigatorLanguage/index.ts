/**
 * @description Gets navitagor default language.
 * @returns Navigator default language.
 */
export function getNavigatorLanguage() {
 return navigator.language.split('-')[0].toUpperCase() || "EN";
}

/**
 * @description Gets a item from LocalStorage.
 * @param {string} item item name.
 * @returns local storage param item.
 */
export function getLocalStorageItem(item: string) {
 return localStorage.getItem(item);
}

/**
 * @description Sets item to LocalStorage.
 * @param {key} key item name.
 * @param {value} value item value.
 * @param {doReload} doReload reload page condition.
 */
export function setLocalStorageItem(
 key: string,
 value: string,
 doReload: boolean
) {
 localStorage.setItem(key, value);
 if (doReload) window.location.reload();
}