import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Popover } from 'antd';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { getFormatedDate } from '../../../utils/index';
import styles from './Article.module.css';
import { fetchArticleApi } from '../../../api/articles/index';
import { toggleLikeArticle } from '../../../redux/actions/articles/index';

const ArticleItem = ({
  title,
  author,
  createdAt,
  tagList,
  favoritesCount,
  slug,
  favorited,
  toggleLikeArticle,
  isAuth,
}) => {
  const handleLikeArticle = async (event) => {
    event.preventDefault();
    try {
      const res = await fetchArticleApi(slug);
      const isLike = res.data.article.favorited;
      toggleLikeArticle(isLike, slug);
    } catch (error) {
      console.log(`error component article ${error}`);
    }
  };
  const contenPopover = (
    <div style={{ width: '200px' }}>
      <p>
        {isAuth
          ? 'like or dislike this article'
          : 'sign in to like this article'}
      </p>
    </div>
  );

  return (
    <Link to={`/articles/${slug}`} className={styles.articleLinkWrap}>
      <div className={styles.article}>
        <div className={styles.contentWrap}>
          <span className={styles.date}>{getFormatedDate(createdAt)}</span>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.autorWrap}>
            Autor
            <span className={styles.author}>{author.username}</span>
          </div>
          <div>
            <div className={styles.tags}>
              Tags:
              {tagList.map((tag) => (
                <p key={tag} className={styles.tag}>
                  {tag}
                </p>
              ))}
            </div>
            <Popover
              title="Note"
              trigger="hover"
              content={contenPopover}
              className={styles.likes}
              onClick={handleLikeArticle}
            >
              {favorited ? <HeartFilled /> : <HeartOutlined />}
              {` ${favoritesCount}`}
            </Popover>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default connect(null, { toggleLikeArticle })(ArticleItem);
