import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import styles from "./pagination.module.scss";
import { useState } from "react";

export const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const previousPage = currentPage - 1;
  const nextPage = currentPage + 1;

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevState) => prevState - 1);
    }
  };

  const handleNextPage = () => {
    setCurrentPage((prevState) => prevState + 1);
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
