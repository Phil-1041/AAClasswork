import {connect} from 'react-redux';
import {login} from '../../actions/session';
import loginForm from './login_form';

const mapDispatchToProps = dispatch => ({
    login: formUser => dispatch(login(formUser))
});

export default connect(null, mapDispatchToProps)(loginForm)