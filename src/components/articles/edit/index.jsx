import React, { useEffect, useState } from 'react';
import styles from '../../auth/Auth.module.css';
import { Formik } from 'formik';
import { Input } from 'formik-antd';
import * as yup from 'yup';
import { connect } from 'react-redux';
import { LoadingOutlined } from '@ant-design/icons';
import { FormInput } from '../../formFields/index';
import { getArticle } from '../../../redux/actions/articles';
import { updateArticleApi } from '../../../api/articles';
import _ from 'lodash';
import { ModalSuccess } from '../../modal/index';
import { useHistory, useRouteMatch } from 'react-router-dom';

const ComponentEditArticle = ({
  isLoadingArticles,
  article,
  token,
  isAuth,
  getArticle,
  isFirstValidate,
}) => {
  const { title, description, body, tagList } = article;
  const [isEditSuccess, setIsEditSuccess] = useState(false);
  const history = useHistory();
  const match = useRouteMatch('/articles/:slug');
  useEffect(() => {
    if (isFirstValidate) {
      let path = match.url;
      getArticle(path, isAuth);
    }
  }, [isAuth, getArticle, isFirstValidate]);

  const handleEditArticle = (values) => {
    const valuesWithoutEmptyFields = _.omitBy(
      values,
      (value, key) => value === ''
    );
    const data = {
      article: {
        ...valuesWithoutEmptyFields,
        tagList: [...new Set(values.tagList.split(' '))],
      },
    };
    let path = window.location.pathname;
    path = match.url;
    updateArticleApi(path, token, data);
    setTimeout(() => {
      setIsEditSuccess(false);
      history.goBack();
    }, 1000);
  };

  const renderForm = (handleSubmit) => {
    return (
      <form onSubmit={handleSubmit} className={styles.formAuth}>
        {isEditSuccess ? (
          <ModalSuccess />
        ) : (
          <>
            <h1 className={styles.title}>Edit article</h1>
            <hr className={styles.lineBottomTitle} />
            <label>title</label>
            <FormInput name="title" component="input" placeholder={title} />
            <label>description</label>
            <FormInput
              name="description"
              component="input"
              placeholder={description}
            />
            <label>body</label>
            <FormInput name="body" component="input" placeholder={body} />
            <label>tagList</label>
            <FormInput name="tagList" component="input" placeholder={tagList} />
            <div className={styles.btnsWrap}>
              <Input type="submit" value="Edit" style={{ width: '100px' }} />
            </div>
          </>
        )}
      </form>
    );
  };

  const schema = yup.object().shape({
    title: yup.string(),
    description: yup.string(),
    body: yup.string(),
    tagList: yup.string(),
  });

  return (
    <div>
      <Formik
        initialValues={{
          title: '',
          description: '',
          body: '',
          tagList: '',
        }}
        validationSchema={() => schema}
        onSubmit={(values) => {
          handleEditArticle(values);
          setIsEditSuccess(true);
        }}
      >
        {({ handleSubmit }) => {
          return (
            <>
              {isLoadingArticles ? (
                <div className={styles.loaderWrap}>
                  <LoadingOutlined style={{ fontSize: 40 }} spin />
                </div>
              ) : (
                renderForm(handleSubmit)
              )}
            </>
          );
        }}
      </Formik>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoadingAuth: state.reducerAuth.currentUser.isLoadingAuth,
  isFirstValidate: state.reducerAuth.currentUser.isFirstValidate,
  token: state.reducerAuth.currentUser.token,
  isAuth: state.reducerAuth.currentUser.isAuth,
  isLoadingArticles: state.reducerArticles.isLoadingArticles,
  article: state.reducerArticles.article,
});

export default connect(mapStateToProps, { getArticle })(ComponentEditArticle);
