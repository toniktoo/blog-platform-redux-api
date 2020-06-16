import React from 'react';
import { ErrorMessage } from 'formik';
import { Input } from 'formik-antd';

const renderError = (msg) => <span style={{ color: 'red' }}>{msg}</span>;

export const FormArea = ({ name, ...props }) => (
  <div>
    <Input.TextArea name={name} {...props} />
    <ErrorMessage name={name}>{(msg) => renderError(msg)}</ErrorMessage>
  </div>
);

export const FormInput = ({ name, ...props }) => (
  <div>
    <Input name={name} {...props} />
    <ErrorMessage name={name}>{(msg) => renderError(msg)}</ErrorMessage>
  </div>
);
