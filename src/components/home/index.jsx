import React, { useState, useEffect } from 'react';
import styles from './Home.module.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { DiffOutlined, LoadingOutlined } from '@ant-design/icons';
import { Pagination } from 'antd';
import ArticleItem from '../articles/item/index';
import { getAllArticles } from '../../redux/actions/articles/index';

const Home = ({
  isLoadingArticles,
  articles,
  getAllArticles,
  isAuth,
  token,
  isFirstValidate,
}) => {
  const [articlesCount, setArticlesCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesCountOnPage] = useState(10);

  const onChangeCurrentPage = (page) => setCurrentPage(page);
  useEffect(() => {
    const getArticles = async () => {
      const articlesCount = await getAllArticles(isAuth, token, currentPage);
      await setArticlesCount(articlesCount);
    };
    if (isFirstValidate) {
      getArticles();
    }
  }, [isAuth, currentPage, getAllArticles, token, isFirstValidate]);

  const renderArticles = () =>
    isLoadingArticles ? (
      <div className={styles.loaderWrap}>
        <LoadingOutlined style={{ fontSize: 40 }} />
      </div>
    ) : (
      articles.map((article) => (
        <ArticleItem
          key={article.id}
          {...article}
          token={token}
          isAuth={isAuth}
        />
      ))
    );

  return (
    <div className={styles.home}>
      <div className={styles.articlesHeader}>
        <h2 className={styles.articlesTitle}>Articles List:</h2>
        <Link to="/add" className={styles.articlesCreateLink}>
          <h3 className={styles.articlesCreateLinkText}>Create article</h3>
          <DiffOutlined />
        </Link>
      </div>
      <div className={styles.articlesWrap}>{renderArticles()}</div>
      <div className={styles.pagination}>
        <Pagination
          defaultCurrent={1}
          currentPage={currentPage}
          total={articlesCount || 10}
          pageSize={articlesCountOnPage}
          showSizeChanger={false}
          onChange={onChangeCurrentPage}
        />
      </div>
    </div>
  );
};

const mapStateToProp = (state) => ({
  isLoadingArticles: state.reducerArticles.isLoadingArticles,
  articles: state.reducerArticles.articles,
  isAuth: state.reducerAuth.currentUser.isAuth,
  token: state.reducerAuth.currentUser.token,
  isFirstValidate: state.reducerAuth.currentUser.isFirstValidate,
});

export default connect(mapStateToProp, { getAllArticles })(Home);
