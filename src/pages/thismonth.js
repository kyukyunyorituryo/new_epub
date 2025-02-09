// src/pages/page.js
import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Share from "../components/share"

const ThisMonth = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allFile.nodes
//  const catesafe =data.site.siteMetadata.catesafe
//先月分を取得
  const fposts=posts.filter(num => {
//現在の日付
  var date = new Date();
//今月の月初め

date.setDate(1)
var kongetu=new Date(date);
kongetu=parseInt(kongetu.toLocaleDateString('sv-SE').replaceAll('-', ''), 10)
var raigetu=new Date(date.setMonth(date.getMonth() + 1));
raigetu=parseInt(raigetu.toLocaleDateString('sv-SE').replaceAll('-', ''), 10)
//再来月の月初め
var saraigetu = new Date(date.setMonth(date.getMonth() + 1));
saraigetu = parseInt(saraigetu.toLocaleDateString('sv-SE').replaceAll('-', ''), 10)
return  parseInt(num.name, 10) < raigetu && parseInt(num.name, 10) >= kongetu

}
  );
  console.log(fposts)
  return (
      <Layout location={location} title={siteTitle}>

                  <h1 class="main-heading">今月発売の一覧</h1>
                  <ol style={{ listStyle: `none` }}
      >
        {fposts.map(post => {
        var day = post.name
        var hiduke=day.substr( 0, 4 )+"年"+day.substr( 4, 2 )+"月"+day.substr( 6, 2 )
        var daytitle =hiduke+"日発売の新刊"
          const title = daytitle || post.fields.slug


          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{hiduke}</small>

                </header>
              </article>
            </li>
          )
        })}
      </ol>
        <Share
          title={siteTitle}
          url={`${data.site.siteMetadata.siteUrl}`}
          />
            <Bio />
          </Layout>
  )
}

export default ThisMonth

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = ({data}) => <Seo title={data.site.siteMetadata.title} ogpimage="https://kyukyunyorituryo.github.io/new_pub/twitter.jpg" description={data.site.siteMetadata.description}/>

export const pageQuery = graphql`
query MyQuery {
  site {
    siteMetadata {
      title
      catesafe
      siteUrl
      description
    }
  }
  allFile(
    sort: {fields: {slug: ASC}}
    limit: 1000
    filter: {extension: {eq: "json"}}
  ) {
    nodes {
      childJson {
        Title
      }
      fields {
        slug
      }
      name
    }
  }
}
`
