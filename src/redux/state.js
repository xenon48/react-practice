
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
                { id: 2, text: 'post...2', likesqty: 58 }],
            textOnTextarea: '',
        }
    }, // конец данных

    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('Rerendered')
    },

    addPost() { // метод добавления поста
        let id = 1 + this._state.profilePage.posts.length;
        let text = this._state.profilePage.textOnTextarea;
        let newPost = {
            id: id,
            text: text,
            likesqty: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.textOnTextarea = '';
        this._callSubscriber()
    },

    changeNewPostText(text) { // метод-слушатель текстового поля добавления новых постов 
        this._state.profilePage.textOnTextarea = text;
        this._callSubscriber()
    },

    subscribe(observer) { // ререндер страницы
        this._callSubscriber = observer;
    },

}

export default store;