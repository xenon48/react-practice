
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
}

export const dialogsReducer = function (state = initialState, action) {

    switch (action.type) {

        case ADD_MESSAGE:
            let text = action.text;
            return {
                ...state,
                messages: [...state.messages, { id: 6, message: text }],
            
            };

        default: return state;
    }
}

export const addMessageActionCreator = function (newMessageBody) {
    return ({
        type: ADD_MESSAGE,
        text: newMessageBody
    })
}