import { typePagination } from "../helpers/Type";
export default function Pagination({
  currentPage,
  goToPage,
  isFirstPage,
  isLastPage,
  nextPage,
  pageList,
  prevPage,
  result,
  startNumber,
  totalData,
}: any) {
  return (
    <div className="row mt-1">
      <div className="col-sm-12 col-md-5 col-lg-6 col-xl-6 col-xxl-6 mb-3">
        <div
          className="dataTables_info"
          id="datatable_info"
          role="status"
          aria-live="polite"
        >
          Menampilkan {startNumber} - {result.length} dari {totalData} data
        </div>
      </div>
      <div className="col-sm-12 col-md-7 col-lg-6 col-xl-6 col-xxl-6 mb-3">
        <nav aria-label="...">
          <ul className="pagination pagination-sm mb-0 float-end">
          <li className={`page-item ${isFirstPage() ? "disabled" : ""}`}>
              <button className="page-link" onClick={prevPage}>
                <i className="mdi mdi-chevron-left"></i>
              </button>
            </li>
            {pageList.map((page: any) => (
              <li
                className={`page-item ${currentPage === page ? "active" : ""}`}
                key={page}
              >
                <button className="page-link" onClick={() => goToPage(page)}>
                  {page}
                </button>
              </li>
            ))}
            <li className={`page-item ${isLastPage() ? "disabled" : ""}`}>
              <button className="page-link" onClick={nextPage}>
                <i className="mdi mdi-chevron-right"></i>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
