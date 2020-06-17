import React from 'react';
import styles from '../Auth.module.css';
import { Formik } from 'formik';
import { Input } from 'formik-antd';
import * as yup from 'yup';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { UserAddOutlined, LoadingOutlined } from '@ant-design/icons';
import { FormInput } from '../../formFields/index';
import { signUpAuth } from '../../../redux/actions/auth';
import routes from '../../../constants/routes.constants/index';

const FormSignUp = (props) => {
  const renderForm = (handleSubmit) => {
    if (props.isLoadingAuth) {
      return (
        <div className={styles.loaderWrap}>
          <LoadingOutlined style={{ fontSize: 40 }} spin />
        </div>
      );
    } else {
      return (
        <form onSubmit={handleSubmit} className={styles.formAuth}>
          <h1 className={styles.title}>Registration</h1>
          <hr className={styles.lineBottomTitle} />
          <label>Username</label>
          <FormInput
            name="username"
            component="input"
            placeholder="enter username..."
          />
          <label>Email</label>
          <FormInput
            name="email"
            component="input"
            placeholder="enter email..."
          />
          <label>Password</label>
          <FormInput
            name="password"
            type="password"
            component="input"
            placeholder="enter password..."
          />
          <div className={styles.btnsWrap}>
            <Input type="submit" value="Sign in" style={{ width: '100px' }} />
            <Link to={routes['sign-in']} className="linkWithImageRigth">
              <span className="linkWithImageRigthText">Login</span>
              <UserAddOutlined />
            </Link>
          </div>
        </form>
      );
    }
  };

  const schema = yup.object().shape({
    username: yup
      .string()
      .max(50, 'no more than 50 characters')
      .required('Заполните имя'),
    email: yup.string().email('Not correct email').required('Enter email'),
    password: yup
      .string()
      .required('Enter password')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
        'Password between 8 and 40 characters, at least one number and one capital letter'
      ),
  });

  return (
    <div>
      <Formik
        initialValues={{
          email: 'toniktoo@mail.ru',
          password: 'Swimm1998er',
          username: 'toniktoo',
        }}
        validationSchema={() => schema}
        onSubmit={(values, { setFieldError }) => {
          const { email, password, username } = values;
          props.signUpAuth({ email, password, username, setFieldError });
        }}
      >
        {({ handleSubmit }) => {
          return renderForm(handleSubmit);
        }}
      </Formik>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoadingAuth: state.reducerAuth.currentUser.isLoadingAuth,
});

export default connect(mapStateToProps, { signUpAuth })(FormSignUp);
