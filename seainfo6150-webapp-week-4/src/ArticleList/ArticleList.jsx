import React from "react";
import PropTypes from 'prop-types'
import ArticleListItem from './ArticleListItem'
import styles from './ArticleList.module.css'

const ArticleList = props => {
  return (
   <html>
    <head>
     
      </head>
    <body className={styles.body}>
    <ul>
      {props.articles.map(article => (
        <li className={styles.li}>
          <h2 className={styles.h2}>{article.title}</h2>
          <p className={styles.p}>{article.shortText}</p>
          <ArticleListItem article={article}/>
        </li>
      ))}
    </ul>
    </body>
   </html>

  );
};

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
};
export default ArticleList;
