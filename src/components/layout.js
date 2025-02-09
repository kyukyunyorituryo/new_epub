import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
    <>
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
        <p>
          
    <a href="https://kyukyunyorituryo.github.io/">サイトトップ</a>、
    <a href="https://kyukyunyorituryo.github.io/kindle_sale/">kindleセールチェック</a>、
    <a href="https://kyukyunyorituryo.github.io/new_pub/">紙の新刊</a>、
    <a href="https://kyukyunyorituryo.github.io/i/"> 電書ニュース</a>  </p>
<p>amazonで売られているKindle本の新刊を一覧で表示するサイトです。</p>
<p>出版社ごとのセール一覧：<Link to="/kadokawa">KADOKAWA</Link>、<Link to="/kodansha">講談社</Link>、<Link to="/akitashoten">秋田書店</Link>、<Link to="/hakusensha">白泉社</Link>、<Link to="/shueisha">集英社</Link>、<Link to="/tokuma">徳間書店</Link>、<Link to="/shougakukan">小学館</Link></p>
<p>カテゴリごとの新刊一覧：<Link to="/manga">漫画</Link>、<Link to="/lightnovel">ライトノベル</Link>、<Link to="/novel">小説</Link></p>
<p>発売日ごとの一覧：<Link to="/lastmonth">先月発売</Link>、<Link to="/thismonth">今月発売</Link>、<Link to="/nextmonth">来月発売</Link>、<Link to="/list">全一覧</Link></p>

      </>
    )
  } else {
    header = (
        <>
      <Link className="header-link-home" to="/">
        {title}
      </Link>
      <p>
    <a href="https://kyukyunyorituryo.github.io/">サイトトップ</a>、
    <a href="https://kyukyunyorituryo.github.io/kindle_sale/">kindleセールチェック</a>、
    <a href="https://kyukyunyorituryo.github.io/new_pub/">紙の新刊</a>、
    <a href="https://kyukyunyorituryo.github.io/i/"> 電書ニュース</a>  </p>
<p>amazonで売られているKindle本の新刊を一覧で表示するサイトです。</p>

<p>出版社ごとの新刊一覧：<Link to="/kadokawa">KADOKAWA</Link>、<Link to="/kodansha">講談社</Link>、<Link to="/akitashoten">秋田書店</Link>、<Link to="/hakusensha">白泉社</Link>、<Link to="/shueisha">集英社</Link>、<Link to="/tokuma">徳間書店</Link>、<Link to="/shougakukan">小学館</Link></p><p>カテゴリごとの新刊一覧：<Link to="/manga">漫画</Link>、<Link to="/lightnovel">ライトノベル</Link>、<Link to="/novel">小説</Link></p>
<p>発売日ごとの一覧：<Link to="/lastmonth">先月発売</Link>、<Link to="/thismonth">今月発売</Link>、<Link to="/nextmonth">来月発売</Link>、<Link to="/list">全一覧</Link></p>

      </>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()},
        {` `}
        <a href="https://github.com/kyukyunyorituryo">kyukyunyorituryo</a>
      </footer>
    </div>
  )
}

export default Layout
