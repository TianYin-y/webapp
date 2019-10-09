import React from "react"
import SlugButton from "./SlugButton"
import styles from './ArticleListItem.module.css'

const articlelistitem = ({article}) => {
    return(
        <div>
            <p><time dateTime={article.pubDate} className={styles.time}>{article.pubDate}</time> <SlugButton article={article}/>
            </p>

            </div>
            
    )
}

export default articlelistitem;
