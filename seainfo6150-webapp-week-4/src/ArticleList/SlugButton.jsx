import React from "react"
import styles from './SlugButton.module.css'

const SlugButton = ({article}) => {
    return(

            <button className={styles.button} onClick={() => {alert(`${article.slug}`)}}>{article.author}</button>
        

    )
}

export default SlugButton;
