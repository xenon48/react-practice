import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { addMessageActionCreator, onMessageChangeCreator } from '../../redux/dialogsReducer';

const Dialogs = function (props) {

    let newMessageText = function(event){
        let text = event.target.value;
        props.dispatch(onMessageChangeCreator(text))
    }

    let sendMessageButton = function () {
        props.dispatch(addMessageActionCreator())
    }

    let dialogsData = props.state.dialogs.map((el) => (
        <DialogItem name={el.name} id={el.id} />
    ));

    let messagesData = props.state.messages.map((el) => (
        <Message text={el.message} />
    ));

    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogsItems}>
                {dialogsData}
            </div>

            <div className={classes.messages}>
                <div>{messagesData}</div>
                <div>
                    <div><textarea onChange={newMessageText} value={props.state.textOnTextarea} placeholder='Enter new message...'></textarea></div>
                    <div><button onClick={sendMessageButton}>Send</button></div>
                </div>
            </div>

        </div>
    )
}

export default Dialogs