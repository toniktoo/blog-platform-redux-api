import React from 'react';
import styles from '../Auth.module.css';
import { Formik } from 'formik';
import { Input } from 'formik-antd';
import * as yup from 'yup';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { UserAddOutlined, LoadingOutlined } from '@ant-design/icons';
import { FormInput } from '../../formFields/index';
import { signInAuth } from '../../../redux/actions/auth';
import routes from '../../../constants/routes.constants/index';

const FormSignIn = (props) => {
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
          <h1 className={styles.title}>Login</h1>
          <hr className={styles.lineBottomTitle} />
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
            <Link to={routes['sign-up']} className="linkWithImageRigth">
              <span className='linkWithImageRigthText'>Registration</span>
              <UserAddOutlined />
            </Link>
          </div>
        </form>
      );
    }
  };

  const schema = yup.object().shape({
    email: yup.string().email('Not correct email').required('Enter email'),
    password: yup.string().required('Enter password'),
  });

  return (
    <div>
      <Formik
        initialValues={{
          email: 'toniktoo@gmail.com',
          password: 'Swimm1998er',
        }}
        validationSchema={() => schema}
        onSubmit={(values, { setFieldError }) => {
          const { email, password } = values;
          props.signInAuth({ email, password, setFieldError });
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

export default connect(mapStateToProps, { signInAuth })(FormSignIn);
