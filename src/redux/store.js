import { dialogsReducer } from "./dialogsReducer";
import { profileReducer } from "./profileReducer";
import { sidebarReducer } from "./sidebarReducer";

let store = {
    _state: { // данные

        messagesPage: {
            dialogs: [
                { id: 1, name: 'Dima' },
                { id: 2, name: 'Irina' },
                { id: 3, name: 'Slava' },
                { id: 4, name: 'Maxim' },
                { id: 5, name: 'Ashot' }],
            messages: [
                { id: 1, message: 'text...1' },
                { id: 2, message: 'text...2' },
                { id: 3, message: 'text...3' },
                { id: 4, message: 'text...4' },
                { id: 5, message: 'text...5' },],
            textOnTextarea: '',
        },

        sidebar:{

        },

        profilePage: {
            posts: [
                { id: 1, text: 'post...1', likesqty: 56 },
                { id: 2, text: 'post...2', likesqty: 58 },
                { id: 3, text: 'post...3', likesqty: 10 }],
            textOnTextarea: '',
        }
    }, // конец данных


    getState() {
        return this._state;
    },

    subscribe(observer) { // ререндер страницы
        this._callSubscriber = observer;
    },

    _callSubscriber() {
        console.log('Rerendered')
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(); // оповещение слушателя об ререндере страницы
    }
}

export default store;