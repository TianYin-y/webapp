import React from "react"

const articlelistitem = ({article}) => {
    return(
        <div>
            <p><time dateTime={article.pubDate}>{article.pubDate}</time> 
            <button onClick={() => {alert(`${article.slug}`)}}>show article slug</button>
            </p>

            </div>
            
    )
}

export default articlelistitem;
