const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';



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
                { id: 5, message: 'text...5' }]
        },

        profilePage: {
            posts: [
                { id: 1, text: 'post...1', likesqty: 56 },
                { id: 2, text: 'post...2', likesqty: 58 },
                { id: 3, text: 'post...3', likesqty: 10 }],
            textOnTextarea: '',
        }
    }, // конец данных

    idCounter: 3,



    getState() {
        return this._state;
    },

    subscribe(observer) { // ререндер страницы
        this._callSubscriber = observer;
    },

    _callSubscriber() {
        console.log('Rerendered')
    },

    deletePost(id) {
        let index;
        for (let i = 0; i < this._state.profilePage.posts.length; i++) {
            if (this._state.profilePage.posts[i].id == id) index = i;
        }
        this._state.profilePage.posts.splice(index, 1);
        this._callSubscriber();
    },

    dispatch(action) {
        if (action.type == 'ADD-POST') { // метод добавления поста
            this.idCounter += 1;
            let id = this.idCounter;
            let text = this._state.profilePage.textOnTextarea;
            let newPost = {
                id: id,
                text: text,
                likesqty: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.textOnTextarea = '';
            this._callSubscriber()
        }

        else if (action.type == UPDATE_NEW_POST_TEXT) { // метод-слушатель текстового поля добавления новых постов 
            this._state.profilePage.textOnTextarea = action.text;
            this._callSubscriber()
        }

    },
}

export const addPostActionCreator = function () {
    return ({  
        type: ADD_POST
    })
}

export const onPostChangeCreator = function (text) {
    return ({
        type: UPDATE_NEW_POST_TEXT,
        text: text
    })
}

export default store;