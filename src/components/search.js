import React, { useState } from 'react';

import Paginate from "../components/paginate"

const Search = ({ book, catetag, pubtag }) => {

  const [adult, setAdult] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selCate, setSelCate] = useState("");
  const [selPub, setSelPub] = useState("");
  // カテゴリーリスト
  const categories = catetag || ``;//["コミック","小説","少年コミック"]
  //アダルト除去


  //console.log(book)
  //console.log(removeadult)
  //出版社一覧
  const publishers = pubtag || ``;

  var filteredList = book.filter((post) => {
    //console.log(inputValue)
    //console.log(post)
    //アダルトa、カテゴリーc、出版社p、語句検索w、
    //return a && c && p && w
    //アダルト除去
    var a=true ; var c=true; var p=true; var w=true;
    if (!adult) {
      const cate = post.Category.split(',')
      a= [...cate].filter(item => !cate.includes('アダルト') && !cate.includes('HOTW_Test_アダルト')).length > 0
    }
    if (selCate === "all" && selPub === "all") {
      return book
    }
    // カテゴリー絞り込み
    if (selCate !== "") {
      //console.log(post.Category)
      const cate = post.Category.split(',')
      c= [...cate, ...selCate].filter(item => cate.includes(item) && selCate.includes(item)).length > 0
      //return book.Category === category
    }
    //出版社絞り込み
    if (selPub !== "") {
      //console.log(post.Category)
      const pub = post.Publisher.split(',')
      p= [...pub, ...selPub].filter(item => pub.includes(item) && selPub.includes(item)).length > 0
      //return book.Category === category
    }
    // フリーキーワードでの絞り込み
    if (inputValue !== "") {

      w= Object.values(post).filter(item =>
        item !== undefined && item !== null && item.toString().toUpperCase().indexOf(inputValue.toString().toUpperCase()) !== -1).length > 0
    }
    return a && c && p && w

  });
  const selectCategory = (category) => {
    setSelCate(category)
  }
  const selectPublisher = (publisher) => {
    setSelPub(publisher)
  }
  const reset = (e) => {
    setSelPub("")
    setSelCate("")
    setInputValue("")
  }
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  //console.log(filteredList)

  return (
    <>
      {/* カテゴリー選択ボタン */}
      <div>
        <h4>クリックしてカテゴリーと出版社で絞り込みが可能</h4>
        {/*<details> <summary><strong>クリックしてカテゴリー選択ボタンの表示</strong></summary>*/}
        <p>カテゴリー：アダルト許可 <input type="checkbox" id="switch" checked={adult}onChange={() => setAdult(prev => !prev)} /><button className="categorybutton" onClick={() => reset()}>全て</button>
          {categories.map((category) => (
            <button className="categorybutton" onClick={() => selectCategory(category)}>{category}</button>
          ))}</p>{/*</details>*/}
        {/* 出版社選択ボタン */}
        <details> <summary><strong>クリックして出版社選択ボタンの表示</strong></summary>
          <p>出版社：
            <button className="categorybutton" onClick={() => reset()}>全て</button>
            {publishers.map((publisher) => (
              <button className="categorybutton" onClick={() => selectPublisher(publisher)}>{publisher}</button>
            ))}</p></details>
      </div>

      {/* フリーキーワード検索フォーム */}
      <div>
        <h4>フリーキーワード検索</h4>
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </div>

      <Paginate itemsPerPage={10} items={filteredList} />
    </>
  );
}

export default Search
