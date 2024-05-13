import styles from './pagination.module.scss';

type PaginationProps = {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  handlePageClick: (pageNumber: number) => void;
};

export const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  handlePageClick,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleClick = (pageNumber: number) => {
    handlePageClick(pageNumber);
  };

  return (
    <div className={styles.paginationContainer}>
      <ul className={styles.paginationList}>
        {[...Array(totalPages)].map((_, index) => (
          <li
            key={index + 1}
            className={`${styles.paginationItem} ${
              currentPage === index + 1 ? styles.activeLink : ''
            }`}
            onClick={() => handleClick(index + 1)}
          >
            <a href="#">{index + 1}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
