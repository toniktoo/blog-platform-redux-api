import React, { useEffect } from 'react';
import styles from './ArticleInfo.module.css';
import { Avatar, Button } from 'antd';
import { LoadingOutlined, DeleteFilled, EditFilled } from '@ant-design/icons';
import { connect } from 'react-redux';
import { getFormatedDate } from '../../../utils/date';
import { getArticle } from '../../../redux/actions/articles';
import { Link } from 'react-router-dom';
import { deleteArticleApi } from '../../../api/articles';

const ArticleInfo = ({
  username,
  isAuth,
  isFirstValidate,
  location,
  article,
  author,
  getArticle,
  isLoadingArticles,
  history,
}) => {
  const { title, createdAt, updatedAt, description, body, tagList } = article;
  useEffect(() => {
    const path = location.pathname;
    if (isFirstValidate) {
      getArticle(path, isAuth);
    }
  }, [location, getArticle, isAuth, isFirstValidate]);

  const handleDeleteArticle = () => {
    const pathname = location.pathname;
    deleteArticleApi(pathname);
    history.goBack();
  };

  const renderArticle = () => {
    return (
      <div className={styles.article}>
        <div className={styles.articleProfile}>
          <Avatar src={author.image} size={120} />
          <h1 className={styles.articleTitle}>
            name: <span className={styles.textWrap}>{author.username}</span>
          </h1>
          <span className={styles.articleTitle}>
            bio: <span className={styles.textWrap}>{author.bio}</span>
          </span>
        </div>
        <div className={styles.articleContent}>
          <h1 className={styles.articleTitle}>
            title: <span className={styles.textWrap}>{title}</span>
          </h1>
          <h2 className={styles.articleSubtitle}>
            description:{' '}
            <span className={styles.articleText}>{description}</span>
          </h2>
          <span className={styles.articleDate}>
            createdAt:{' '}
            <span className={styles.articleText}>
              {getFormatedDate(createdAt)}
            </span>
          </span>
          <span className={styles.articleDate}>
            updatedAt:{' '}
            <span className={styles.articleText}>
              {getFormatedDate(updatedAt)}
            </span>
          </span>
          <span className={styles.articleBody}>
            body: <span className={styles.articleText}>{body}</span>
          </span>
          <span className={styles.tagList}>
            tags:{' '}
            {tagList.map((tag) => (
              <p key={tag} className={styles.tag}>
                {tag}
              </p>
            ))}
          </span>
          <div className={styles.lineUpFooter} />
          <div className={styles.footer}>
            <div className={styles.btnsWrap}>
              <Link
                to={`${location.pathname}/edit`}
                disabled={username !== author.username}
                className="linkWithImgRigth"
              >
                <span className="linkWithImageRigthText">Edit</span>
                <EditFilled />
              </Link>
              <Button
                type="link"
                disabled={username !== author.username}
                className={styles.btnDelete}
                onClick={handleDeleteArticle}
              >
                <span>Delete</span>
                <DeleteFilled />
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {isLoadingArticles ? (
        <div className={styles.loaderWrap}>
          <LoadingOutlined style={{ fontSize: 40 }} spin />
        </div>
      ) : (
        renderArticle()
      )}
    </>
  );
};
const mapStateToProps = (state) => ({
  article: state.reducerArticles.article,
  author: state.reducerArticles.article.author,
  isLoadingArticles: state.reducerArticles.isLoadingArticles,
  isAuth: state.reducerAuth.currentUser.isAuth,
  username: state.reducerAuth.currentUser.username,
  isFirstValidate: state.reducerAuth.currentUser.isFirstValidate,
});

export default connect(mapStateToProps, { getArticle })(ArticleInfo);
