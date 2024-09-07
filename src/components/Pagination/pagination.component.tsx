import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import styles from "./pagination.module.scss";
import { useState } from "react";

type PaginationProps = {
  pagination: { count: number; pages: number; next: string; prev: string };
  fetchPreviousPage: (url: string) => void;
  fetchNextPage: (url: string) => void;
};

export const Pagination = ({
  pagination,
  fetchNextPage,
  fetchPreviousPage,
}: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const previousPage = currentPage - 1;
  const nextPage = currentPage + 1;

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevState) => prevState - 1);
      fetchPreviousPage(pagination.prev);
      window.scrollTo(0, 0);
    }
  };

  const handleNextPage = () => {
    setCurrentPage((prevState) => prevState + 1);
    fetchNextPage(pagination.next);
    window.scrollTo(0, 0);
  };

  return (
    <div className={styles.pagination}>
      <FaArrowLeft
        onClick={handlePreviousPage}
        className={currentPage === 1 ? styles.blockPage : ""}
      />
      <span>{previousPage}</span>
      <span className={styles.active}>{currentPage}</span>
      <span>{nextPage}</span>
      <FaArrowRight onClick={handleNextPage} />
    </div>
  );
};

export default Pagination;
