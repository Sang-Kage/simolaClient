export default function Pagination() {
  return (
    <div className="row mt-1">
      <div className="col-sm-12 col-md-5 col-lg-6 col-xl-6 col-xxl-6 mb-3">
        <div
          className="dataTables_info"
          id="datatable_info"
          role="status"
          aria-live="polite"
        >
          Menampilkan 1 - 10 dari 57 data
        </div>
      </div>
      <div className="col-sm-12 col-md-7 col-lg-6 col-xl-6 col-xxl-6 mb-3">
        <nav aria-label="...">
          <ul className="pagination pagination-sm mb-0 float-end">
            <li className="page-item disabled">
              <span className="page-link">
                <i className="mdi mdi-chevron-left"></i>
              </span>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item active">
              <span className="page-link">
                2<span className="sr-only">(current)</span>
              </span>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                <i className="mdi mdi-chevron-right"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
