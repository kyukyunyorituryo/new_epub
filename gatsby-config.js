/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
pathPrefix: "/new_epub",
  siteMetadata: {
    title: `kindle新刊チェック`,
    author: {
      name: `99`,
      summary: `電子書籍に関するものを公開しています。キンドルで電子書籍を出してます。`,
    },
    description: `kindleの新刊をジャンルごとに並べています。`,
    siteUrl: `https://kyukyunyorituryo.github.io/new_epub/`,
    social: {
      twitter: `99nyorituryo`,
    },
    icon: `https://kyukyunyorituryo.github.io/i/densho512.png`,
    catesafe:["文学・評論","人文・思想","社会・政治","ノンフィクション","歴史・地理","ビジネス・経済","投資・金融・会社経営","科学・テクノロジー","医学・薬学","コンピュータ・IT","アート・建築・デザイン","趣味・実用","スポーツ・アウトドア","資格・検定・就職","暮らし・健康・子育て","旅行ガイド・マップ","語学・辞事典・年鑑","教育・学参・受験","絵本・児童書","マンガ","ライトノベル","BL","タレント写真集","エンターテイメント","雑誌","楽譜・スコア・音楽書","アダルト","ティーンズラブ","コミック","日本の小説・文芸","少年マンガ","少年コミック","青年マンガ","ロマンス","ノンフィクション","哲学・思想","工学","投資・金融・会社経営","コンピュータサイエンス","生命科学","基礎医学","言語学","少女マンガ","美容・ダイエット","社会学","女性マンガ","少女コミック","ライトアダルト","日本文学","青年コミック","エッセー・随筆","日本文学研究","デザイン","固定レイアウト","4コマまんが","クッキング・レシピ","グラフィックデザイン","物理学","コミック・コミックエッセイ","小説・文芸",],
  },
  plugins: [
      `gatsby-plugin-sitemap`,
      {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: ['G-J8FW91ELEL'],
        pluginConfig: {
          head: true,
        },
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: `Json`, // a fixed string
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/\content/json/`,//\content\blog\json
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,/*
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allFile } }) => {
              return allFile.edges.map(node => {
                return Object.assign({}, node.childJson, {
                  date: node.childJson.Date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                })
              })
            },
            query: `{
             allFile(filter: {extension: {eq: "json"}}, sort: {childrenJson: {Date: DESC}}) {
               edges {
                 node {
                   fields {
                     slug
                   }
                   childJson {
                     Date
                     Saletitle
                   }
                 }
               }
             }
            }`,
            output: "/rss.xml",
            title: "kindleセールチェック RSS Feed",
          },
        ],
      },
    },*/
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `kindle新刊チェック`,
        short_name: `kindle新刊チェック`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/densho512.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
