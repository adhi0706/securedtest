import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Pagination = ({
  itemsPerPage,
  currentPage,
  totalPages,
  onPageChange,
  totalLength,
}) => {
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };
  return (
    <div className="sss-pagination-container">
      <div className="sss-pagination">
        <div className="sss-pagination-items">
          Showing {Math.min(itemsPerPage, totalLength)} from{" "}
          {(currentPage - 1) * itemsPerPage + 1} - {totalLength}
        </div>
        <div className="sss-pagination-buttons">
          <div
            className="sss-pagination-button-container"
            onClick={handlePreviousPage}
            style={{ cursor: currentPage === 1 ? "not-allowed" : "pointer" }}
          >
            <FontAwesomeIcon
              className="sss-pagination-button"
              icon={faChevronLeft}
            />
          </div>
          {Array.from({ length: totalPages }, (_, index) => (
            <div
              key={index}
              className={`sss-pagination-button-container ${
                index + 1 === currentPage && "sss-pagination-current-button"
              }`}
              onClick={() => onPageChange(index + 1)}
              style={{ cursor: "pointer" }}
            >
              <div className="sss-pagination-button">{index + 1}</div>
            </div>
          ))}
          <div
            className="sss-pagination-button-container"
            onClick={handleNextPage}
            style={{
              cursor: currentPage === totalPages ? "not-allowed" : "pointer",
            }}
          >
            <FontAwesomeIcon
              className="sss-pagination-button"
              icon={faChevronRight}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
