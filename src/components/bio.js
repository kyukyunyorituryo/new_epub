/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/profile-pic.png"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
      <>
        <p>
          <strong>{author.name}</strong> {author?.summary || null}
          {` `}
          <a href={`https://twitter.com/${social?.twitter || ``}`}>
            Twitterをフォロー
          </a>
          {`　`}
          <a href="https://kyukyunyorituryo.github.io/i/privacy-policy/">プライバシーポリシー</a>
        <br/>
        アンドロイドアプリ：<a href="https://www.amazon.co.jp/dp/B08NK73QGL?tag=99hatena-22&linkCode=ogi&th=1&psc=1">アマゾン</a>。<a href="https://play.google.com/store/apps/details?id=com.websarva.wings.android.newepubcheck&hl=ja">グーグル</a></p>
        </>
      )}
    </div>
  )
}

export default Bio
