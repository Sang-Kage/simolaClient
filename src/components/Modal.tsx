interface props {
  title: string;
  children: React.ReactNode;
}

export default function Modal({ title, children }: props) {
  return (
    <div
      className="modal fade"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="myLargeModalLabel"
      id="dynamic-modal"
      aria-modal="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="myLargeModalLabel">
              {title}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body mx-3">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
