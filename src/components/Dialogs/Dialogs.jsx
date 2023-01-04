import React from 'react';
import { Navigate } from 'react-router-dom';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Field, reduxForm } from "redux-form";
import { Textarea } from '../Common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../utils/validators/validators';


const Dialogs = function (props) {

    let addNewMessage = function (values) {
        props.sendMessageButton(values.newMessageBody);
    }

    let dialogsData = props.dialogsData.map((el) => (
        <DialogItem name={el.name} id={el.id} />
    ));

    let messagesData = props.messagesData.map((el) => (
        <Message text={el.message} />
    ));

    if (!props.isAuth) return <Navigate to={'/login'} />;

    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogsItems}>
                {dialogsData}
            </div>

            <div className={classes.messages}>
                <div>{messagesData}</div>

            </div>
            <AddMessageFormHOC onSubmit={addNewMessage}/>
        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="newMessageBody" placeholder='Enter new message...'
                validate={[required, maxLengthCreator(50)]} />
                <button>Send</button></div>
        </form>
    )
}

const AddMessageFormHOC = reduxForm({ form: "addMessageForm" })(AddMessageForm)

export default Dialogs