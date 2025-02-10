
import React from "react"
import { graphql } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Share from "../components/share"
import Search from "../components/search"

const BlogPostTemplate = ({
  data,
  location,
}) => {
var book = data.file.childrenJson
 const catesafe =data.site.siteMetadata.catesafe
// console.log(book)

const publist = book.map((num) => {
  return num.Publisher;
});

const pubtag=[...new Set(publist)];

const catelist = book.map((num) => {
  return num.Category.split(",");
}).flat();

var catetag=[...new Set(catelist)];

catetag=catetag.filter(x => catesafe.includes(x))
var day = data.file.name
var hiduke=day.substr( 0, 4 )+"年"+day.substr( 4, 2 )+"月"+day.substr( 6, 2 )+"日発売の新刊"

const siteTitle = hiduke || `Title`
    return (
    <>
        <Layout location={location} title={data.site.siteMetadata?.title }>
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{siteTitle}</h1>
         <p>{day.substr( 0, 4 )+"年"+day.substr( 4, 2 )+"月"+day.substr( 6, 2 )+"日"}</p>
        </header>
        <Search book={book} catetag={catetag} pubtag={pubtag}/>
        <hr />
        <Share
          title={siteTitle}
          url={`${data.site.siteMetadata.siteUrl}${data.file.fields.slug}`}
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
var day = data.file.name
var hiduke=day.substr( 0, 4 )+"年"+day.substr( 4, 2 )+"月"+day.substr( 6, 2 )+"日発売の新刊"

  return (
    <Seo
      title={hiduke}
      ogpimage={data.file.childrenJson[0].ImageURL}
      description={hiduke}
    />
  )
}

export default BlogPostTemplate


export  const query = graphql`
query MyQuery($slug: String!)  {
  file(extension: {eq: "json"},fields: {slug: { eq: $slug } }) {
    childrenJson {
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
      fields {
      slug
    }
   name
  }
      site {
      siteMetadata {
        title
        siteUrl
        catesafe
      }
    }
}`
