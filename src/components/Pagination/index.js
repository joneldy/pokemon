import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({
  forcePage,
  pageCount,
  pageRangeDisplayed,
  onPageChange,
}) => (
  <div className="mt-5 mb-5">
    <ReactPaginate
      forcePage={forcePage}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={pageRangeDisplayed}
      onPageChange={onPageChange}
      activeClassName="active"
      previousLabel="prev"
      nextLabel="next"
      breakLabel="..."
      breakClassName="break-me"
      containerClassName="pagination"
      subContainerClassName="pages pagination"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-link"
      nextClassName="page-link"
      disabledClassName="page-item disabled"
    />
  </div>
);

export default Pagination;
