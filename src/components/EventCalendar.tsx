export default function EventCalendar({ title, classNames, start_date, end_date, setTitle, setClassNames, saveEvent }: any) {
  return (
    <div
      className="modal fade"
      id="event-modal"
      tabIndex={-1}
      aria-modal="true"
      role="dialog"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header py-3 px-4 border-bottom-0">
            <h5 className="modal-title" id="modal-title">
              Add Event
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-hidden="true"
            />
          </div>
          <div className="modal-body p-4">
            <form
              className="needs-validation"
              name="event-form"
              id="form-event"
            >
              <div className="row">
                <div className="col-12">
                  <div className="mb-3">
                    <label className="form-label">Event Name</label>
                    <input
                      className="form-control"
                      placeholder="Insert Event Name"
                      type="text"
                      name="title"
                      id="event-title"
                      value={title}
                      onChange={(e: any) => setTitle(e.target.value)}
                    />
                    <input type="hidden" id="start_date" ref={start_date} />
                    <input type="hidden" id="end_date" ref={end_date} />
                    <div className="invalid-feedback">
                      Please provide a valid event name
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="mb-3">
                    <label className="form-label">Category</label>
                    <select
                      className="form-control form-select"
                      name="category"
                      id="event-category"
                      value={classNames} // Replace this line with the corrected code
                      onChange={(e: any) => setClassNames(e.target.value)}
                    >
                      <option> --Select-- </option>
                      <option value="bg-danger">Danger</option>
                      <option value="bg-success">Success</option>
                      <option value="bg-primary">Primary</option>
                      <option value="bg-info">Info</option>
                      <option value="bg-dark">Dark</option>
                      <option value="bg-warning">Warning</option>
                    </select>

                    <div className="invalid-feedback">
                      Please select a valid event category
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-6">
                  <button
                    type="button"
                    className="btn btn-danger"
                    id="btn-delete-event"
                  >
                    Delete
                  </button>
                </div>
                <div className="col-6 text-end">
                  <button
                    type="button"
                    className="btn btn-light me-1"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-success"
                    id="btn-save-event"
                    onClick={saveEvent}
                    data-bs-dismiss="modal"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}