import React, { useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Input } from 'antd';
import { connect } from 'react-redux';
import { FormInput, FormArea } from '../../formFields/index';
import { createArticleApi } from '../../../api/articles/index';
import { ModalSuccess } from '../../modal/index';

const schema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  body: yup.string().required(),
  tagList: yup.string(),
});

const handleCreateArticle = async (values, setIsCreateArticle) => {
  const data = {
    article: {
      ...values,
      tagList: [...new Set(values.tagList.split(' '))],
    },
  };
  try {
    await createArticleApi(data);
    setTimeout(() => {
      setIsCreateArticle(false);
    }, 1000);
  } catch (error) {
    console.log(error);
  }
};

const CreateArticle = () => {
  const [isCreateArticle, setIsCreateArticle] = useState(false);
  const renderForm = (handleSubmit) => {
    return (
      <form onSubmit={handleSubmit}>
        <div className="form">
          {isCreateArticle ? (
            <ModalSuccess />
          ) : (
            <>
              <h2 className="title">Create article</h2>
              <hr className="lineTitle" />
              <span>Title</span>
              <FormInput name="title" placeholder="enter title..." />
              <span>Description:</span>
              <FormInput
                name="description"
                placeholder="enter description..."
              />
              <span>Body:</span>
              <FormArea name="body" placeholder="enter body..." />
              <span>Tags:</span>
              <FormInput
                name="tagList"
                placeholder="write tags with a space..."
              />
              <Input
                type="submit"
                value="Create"
                style={{ marginTop: '8px' }}
              />
            </>
          )}
        </div>
      </form>
    );
  };

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
        onSubmit={(values, { resetForm }) => {
          handleCreateArticle(values, setIsCreateArticle);
          resetForm();
          setIsCreateArticle(true);
        }}
      >
        {({ handleSubmit }) => {
          return renderForm(handleSubmit);
        }}
      </Formik>
    </div>
  );
};

const mapStateToProps = (state) => ({});
export default connect(mapStateToProps)(CreateArticle);
