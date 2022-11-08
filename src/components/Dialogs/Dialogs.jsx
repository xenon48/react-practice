import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = function (props) {

    let newMessageText = React.createRef();

    let sendMessageButton = function () {
        let text = newMessageText.current.value;
        alert(text)
    }

    let dialogsData = props.state.dialogs.map( (el) => (
        <DialogItem name={el.name} id={el.id} />
    ));

    let messagesData = props.state.messages.map( (el) => (
        <Message text={el.message} />
    ));

    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogsItems}>
                {dialogsData}
            </div>

            <div className={classes.messages}>
                {messagesData}
                <div><textarea ref={newMessageText}></textarea></div>
                <div><button onClick={sendMessageButton}>Send</button></div>
            </div>

        </div>
    )
}

export default Dialogs