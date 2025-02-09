import React from "react"
import { graphql } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Share from "../components/share"
import Search from "../components/search"

const LightNovel = ({
  data,
  location,
}) => {
var book = data.allJson.nodes
 const catesafe =data.site.siteMetadata.catesafe

const publist = book.map((num) => {
  return num.Publisher;
});

const pubtag=[...new Set(publist)];

const catelist = book.map((num) => {
  return num.Category.split(",");
}).flat();

var catetag=[...new Set(catelist)];
//console.log(catetag)

catetag=catetag.filter(x => catesafe.includes(x))
var freetitle=`ライトノベルの新刊一覧`
pubtag.length=30
//catetag.length=10
const siteTitle = data.site.siteMetadata?.title || `Title`
    return (
    <>
        <Layout location={location} title={siteTitle}>
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline"> {`「Kindleセール」`+ freetitle}</h1>
          <p>最近発売されたライトノベルの一覧ページ</p>
          {/*
          <p>{data.allJson.nodes[0].Date}　出版社：{pubtag && pubtag.length > 0 && pubtag.map(pubtag => {
          return (
                  //<Link to={`/tags/${kebabCase(tag)}/`} itemProp="url">
                    <button>{pubtag}</button>
                 // </Link>
          )
          })}カテゴリ：{catetag && catetag.length > 0 && catetag.map(catetag => {
          return (
                  //<Link to={`/tags/${kebabCase(tag)}/`} itemProp="url">
                    <button>{catetag}</button>
                 // </Link>
          )
          })}
          </p>
          */}
        </header>
        <Search book={book} catetag={catetag} pubtag={pubtag}/>
        <hr />
        <Share
          title={freetitle}
          url={`${data.site.siteMetadata.siteUrl}/free`}
          />
        <footer>
          <Bio />
        </footer>
          </article>
        </Layout>
        </>
    )
}
export const Head = ({ data}) => {
  return (
    <Seo
      title={`ライトノベルの新刊一覧`}
      ogpimage={data.allJson.nodes[0].ImageURL}
      description={`ライトノベルの新刊一覧、最近発売されたライトノベルを一覧で表示します。`}
    />
  )
}

export default LightNovel

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
//export const Head = () => <Seo title="kindle本セール品を一覧で表示する「kindleセールチェック」" />

export const pageQuery = graphql`
query MyQuery {
  allJson(filter: {Category: {regex: "/ライトノベル/"}}, sort: {Day: ASC}) {
    nodes {
      Asin
      Booktype
      Category
      Contributor
      ImageURL
      Points
      Price
      Publisher
      Title
      URL
      Day
    }
  }      site {
      siteMetadata {
        title
        siteUrl
        catesafe
      }
    }
}
`
