import * as React from "react"


const Amazons = ({ book }) => {
//console.log(book)
//数の制限
//book.length=20
var image_m
var image_s
for (let i = 0; i < book.length; i++) {
image_m=book[i].ImageURL_m || book[i].ImageURL.replace(/_SL500_/, '_SL160_');
image_s=book[i].ImageURL_s || book[i].ImageURL.replace(/_SL500_/, '_SL75_');
book[i].image_m=image_m;
book[i].image_s=image_s;
}
 //重複の削除
//https://qiita.com/allJokin/items/28cd023335641e8796c5
 const uniqueUsers = Array.from(new Map(book.map((user) => [user.Asin, user])).values()
);
    return (
    <div  id="book">
      {uniqueUsers.map(e => (
     <div key={e.Asin}>
        <a className="amazon-card-container" target="_blank" rel="noopener noreferrer" href={e.URL}>
          <div className="amazon-card-body">
            <div className="amazon-card-title">{e.Title}</div>
            <div className="amazon-card-domain">価格：{e?.Price}円、ポイント：{e.Points}、{e.Contributor}、出版社：{e.Publisher}、カテゴリー：{e.Category}、発売日：{e.Day.substr( 0, 4 )+"/"+e.Day.substr( 4, 2 )+"/"+e.Day.substr( 6, 2 )}</div>
          </div>
          <div className="amazon-card-image-container">
          <img className="amazon-card-image"
           srcSet={`${e.image_s} 320w, ${e.image_m} 640w, ${e.ImageURL} `}
     src={e.image_s}
     sizes="(max-width:1280px) 50vw, 1280px"
      loading="lazy" alt={e.Title}/>
          </div>
        </a>
      </div>
      ))}
      
    </div>
    )
}

export default Amazons
