import { makeAutoObservable } from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = false;
        this._user = {};
        makeAutoObservable(this); // Вызываем makeAutoObservable для текущего экземпляра
    }

    setIsAuth(isAuth) {
        this._isAuth = isAuth; // Метод для изменения _isAuth
    }

    setUser(user) {
        this._user = user; // Метод для изменения _user
    }

    get isAuth() {
        return this._isAuth; // Геттер для получения _isAuth
    }

    get user() {
        return this._user; // Геттер для получения _user
    }
}
