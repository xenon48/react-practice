import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { addMessageActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

let mapStateToProps = function (state) {
    return {
        dialogsData: state.dialogsPage.dialogs,
        messagesData: state.dialogsPage.messages,
        textOnTextarea: state.dialogsPage.textOnTextarea,
    };
}

let mapDispatchToProps = function (dispatch) {
    return {
        sendMessageButton: (newMessageBody) => {
            dispatch(addMessageActionCreator(newMessageBody))
        }
    };
}

const connectCreator = function(Component) {
    return connect(mapStateToProps, mapDispatchToProps)(Component);
}

export default compose(
    connectCreator,
    withAuthRedirect
    )
    (Dialogs);