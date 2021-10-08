import { makeObservable, observable, action } from "mobx";
export class SettingsStore {
    isDarkTheme: boolean = false;
    constructor() {
        makeObservable(this, {
            isDarkTheme: observable,
            toggleDarkTheme: action.bound,
            init: action,
        });
        this.init();
    }
    toggleDarkTheme() {
        this.isDarkTheme = !this.isDarkTheme;
        localStorage.setItem("isDarkTheme", String(this.isDarkTheme))
    }
    init() {
        this.isDarkTheme = localStorage.getItem('isDarkTheme') === "true"
    }
}

export default new SettingsStore();
