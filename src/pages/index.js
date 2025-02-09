import React, { useState, useEffect } from "react"
import { graphql, navigate } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Share from "../components/share"
import Search from "../components/search"
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

const Index = ({
  data,
  location,
}) => {
// クエリ文字列を取得
var getQueryVars = function() {
	// return用の配列
	var vars = [];
	
	// クエリ文字列を取得して「&」で分割
	var query_list = location.search.substring(1).split('&');

	// 値取得用のテンポラリ変数
	var tmp_arr;
	
	// 分割したクエリ文字列の配列から、値を取り出す
	query_list.forEach( function(e, i, a) {
		tmp_arr = e.split('=');
		vars[ tmp_arr[0] ] = tmp_arr[1];
	})

	return vars;
}
  const catesafe = data.site.siteMetadata.catesafe
  var query_vars = getQueryVars();
  // クエリ文字列dayを取得
  var id = query_vars['day'];

//console.log( id );
  //現在の日付
  var date = new Date();
  var kyou= parseInt(date.toLocaleDateString('sv-SE').replaceAll('-', ''), 10).toString()
  if(id)kyou=id
  var value = kyou.substr( 0, 4 )+"-"+kyou.substr( 4, 2 )+"-"+kyou.substr( 6, 2 )
  var hiduke=kyou.substr( 0, 4 )+"年"+kyou.substr( 4, 2 )+"月"+kyou.substr( 6, 2 )
  var daytitle =hiduke+"日発売の新刊"
  const [loading, setLoading] = useState(true);
  const [bookData, setBookData] = useState([])
  const [cateTag, setCateTag] = useState([])
  const [pubTag, setPubtag] = useState([])
//  const [day, setDay] = useState(kyou)
  useEffect(() => {
    // get data from GitHub api
    fetch(`https://kyukyunyorituryo.github.io/new_epub/json/${kyou}.json`)
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        var book = resultData
        const publist = book.map((num) => {
          return num.Publisher;
        });

        const pubtag = [...new Set(publist)];
        const catelist = book.map((num) => {
          return num.Category.split(",");
        }).flat();
        var catetag = [...new Set(catelist)];

        catetag = catetag.filter(x => catesafe.includes(x))
        //console.log(pubtag)
        setBookData(resultData)
        setCateTag(catetag)
        setPubtag(pubtag)
        setLoading(false);
      }) // set data for the number of stars
  }, [kyou])
  var freetitle = `kindleの新刊一覧`
  //catetag.length=10
  const siteTitle = data.site.siteMetadata?.title || `Title`
  if (loading) {
    return <></>;
  }
  return (
    <>
      <Layout location={location} title={siteTitle}>
        <article
          className="blog-post"
          itemScope
          itemType="http://schema.org/Article"
        >
          <header>
            <h1 itemProp="headline"> {`「新刊チェック」` + freetitle}</h1>
            <p>{daytitle}キンドル本の一覧ページ</p>
          </header>
          <p>カレンダーの日付をクリックで発売日を変更</p>
          <Calendar
       locale="ja-JP"
       value={value}
        onClickDay={(e) => navigate(`?day=${(parseInt(new Date(e).toLocaleDateString('sv-SE').replaceAll('-', ''), 10))}`)
        }
      />
          <Search book={bookData} catetag={cateTag} pubtag={pubTag}/>
          <hr />
          <Share
            title={freetitle}
            url={``}
          />
          <footer>
            <Bio />
          </footer>
        </article>
      </Layout>
    </>
  )
}
export const Head = ({ data }) => {
  return (
    <Seo
      title={`kindleの新刊一覧`}
      ogpimage={'https://kyukyunyorituryo.github.io/new_epub/twitter.jpg'}
      description={`キンドルの新刊一覧、最近発売されたキンドル本を一覧で表示します。`}
    />
  )
}

export default Index

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
//export const Head = () => <Seo title="kindle本セール品を一覧で表示する「kindleセールチェック」" />

export const pageQuery = graphql`
query MyQuery {
  site {
    siteMetadata {
      title
      siteUrl
      catesafe
    }
  }
}
`
