import { connect } from 'react-redux';
import { addMessageActionCreator, onMessageChangeCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

// const DialogsContainer = function (props) {


//     let state = props.store.getState();

//     let newMessageText = function (text) {
//         props.store.dispatch(onMessageChangeCreator(text))
//     }

//     let sendMessageButton = function () {
//         props.store.dispatch(addMessageActionCreator())
//     }

//     return (
//         <Dialogs
//             newMessageText={newMessageText}
//             sendMessageButton={sendMessageButton}
//             dialogsData={state.dialogsPage.dialogs}
//             messagesData={state.dialogsPage.messages}
//             textOnTextarea={state.dialogsPage.textOnTextarea} />
//     )
// }

let mapStateToProps = function (state) {
    return {
        dialogsData: state.dialogsPage.dialogs,
        messagesData: state.dialogsPage.messages,
        textOnTextarea: state.dialogsPage.textOnTextarea,
    };
}

let mapDispatchToProps = function (dispatch) {
    return {

        newMessageText: (text) => {
            dispatch(onMessageChangeCreator(text))
        },

        sendMessageButton: () => {
            dispatch(addMessageActionCreator())
        }
    };
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;