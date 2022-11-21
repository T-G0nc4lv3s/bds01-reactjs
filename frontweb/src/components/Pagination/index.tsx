import './styles.css';
import { ReactComponent as ArrowIcon } from 'assets/images/Arrow.svg';
import ReactPaginate from 'react-paginate';

const Pagination = () => {
  return (
    <ReactPaginate
      pageCount={10}
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      containerClassName="pagination-container"
      pageLinkClassName="pagination-item"
      breakClassName="pagination-item"
      previousLabel={<ArrowIcon />}
      nextLabel={<ArrowIcon />}
      previousClassName="arrow-previous"
      nextClassName="arrow-next"
      activeLinkClassName="pagination-link-active"
      disabledClassName="arrow-inactive"
    />
  );
};

export default Pagination;
