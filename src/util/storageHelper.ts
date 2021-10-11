const storageKey = "storageKey";

export default {
  getLocalStorage(keyName: string) {
    let result =
      window.localStorage.getItem(`${storageKey}__${keyName}`) || null;
    if (result) {
      return JSON.parse(result);
    } else {
      return null;
    }
  },
  setLocalStorage(keyName: string, data: any) {
    window.localStorage.setItem(
      `${storageKey}__${keyName}`,
      JSON.stringify(data)
    );
  },
  removeLocalStorage(keyName: string) {
    window.localStorage.removeItem(`${storageKey}__${keyName}`);
  },
};
