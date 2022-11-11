
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

export const dialogsReducer = function (state, action) {

    switch (action.type) {

        case UPDATE_NEW_MESSAGE_TEXT:
            state.textOnTextarea = action.text;
            return state;

        case ADD_MESSAGE:
            let text = state.textOnTextarea;
            state.textOnTextarea = '';
            let newMessage = {
                id: 6,
                message: text
            }
            state.messages.push(newMessage);
            return state;

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