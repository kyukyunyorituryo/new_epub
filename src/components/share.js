import React from "react"
import {
  FacebookShareButton,
  TwitterShareButton,
  LineShareButton,
  HatenaShareButton,
  FacebookIcon,
  TwitterIcon,
  LineIcon,
  HatenaIcon,
} from "react-share"

const Share = props => {
  const articleTitle = props.title
  const articleUrl = props.url
  // const articleDescription = props.description // 現時点では未使用
  const iconSize = 40

  return (
    <div className="share">
      <p className="share__title">SHARE!</p>
      <div className="social-links">
        <div className="social-links__icon">
          <TwitterShareButton url={articleUrl} title={"「Amazon新刊」\n"+articleTitle + " #ad"}>
            <TwitterIcon round size={iconSize} />
          </TwitterShareButton>
        </div>
        <div className="social-links__icon">
          <FacebookShareButton url={articleUrl}>
            <FacebookIcon round size={iconSize} />
          </FacebookShareButton>
        </div>
        <div className="social-links__icon">
          <LineShareButton url={articleUrl} title={articleTitle}>
            <LineIcon round size={iconSize} />
          </LineShareButton>
        </div>
        <div className="social-links__icon">
          <HatenaShareButton url={articleUrl} title={articleTitle}>
            <HatenaIcon round size={iconSize} />
          </HatenaShareButton>
        </div>
      </div>
    </div>
  )
}

export default Share