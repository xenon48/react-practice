
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
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
}

export const dialogsReducer = function (state = initialState, action) {

    switch (action.type) {

        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                textOnTextarea: action.text
            };

        case ADD_MESSAGE:
            let text = state.textOnTextarea;
            return {
                ...state,
                textOnTextarea: '',
                messages: [...state.messages, { id: 6, message: text }],
            
            };

        default: return state;
    }
}

export const onMessageChangeCreator = function (text) {
    return ({
        type: UPDATE_NEW_MESSAGE_TEXT,
        text: text
    })
}

export const addMessageActionCreator = function () {
    return ({
        type: ADD_MESSAGE
    })
}