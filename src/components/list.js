import * as React from "react"
const List = ({ url,title }) => {

    return (
                 <li >
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                <a rel="noreferrer" target="_blank" href={url}>
                    {title}
                </a>
                  </h2>
                </header>
              </article>
            </li>
    )
}

export default List
