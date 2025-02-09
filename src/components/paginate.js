import React, {  useState } from 'react';

import ReactPaginate from 'react-paginate';
import Amazons from "../components/amazons"

const Paginate = ({ itemsPerPage,items }) => {
  function Items({ currentItems }) {
    return (
      <>
<Amazons book={currentItems} />
      </>
    );
  }
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);
  
    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + itemsPerPage;
//    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);
  
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % items.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };
  
    return (
      <>
           <ReactPaginate
          breakLabel="..."
          nextLabel="次へ>"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="<前へ"
          renderOnZeroPageCount={null}
          containerClassName={'pagination'} /* as this work same as bootstrap class */
subContainerClassName={'pages pagination'} /* as this work same as bootstrap class */
activeClassName={'active'} /* as this work same as bootstrap class */
        />
        <Items currentItems={currentItems} />
        <ReactPaginate
          breakLabel="..."
          nextLabel="次へ>"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="<前へ"
          renderOnZeroPageCount={null}
          containerClassName={'pagination'} /* as this work same as bootstrap class */
subContainerClassName={'pages pagination'} /* as this work same as bootstrap class */
activeClassName={'active'} /* as this work same as bootstrap class */
        />
      </>
    );
  }

export default Paginate
