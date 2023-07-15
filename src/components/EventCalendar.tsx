export default function EventCalendar({
  title,
  classNames,
  start_date,
  end_date,
  setTitle,
  setClassNames,
}: any) {
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
              Detail Kegiatan
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-hidden="true"
            />
          </div>
          <div className="modal-body px-4">
            <form
              className="needs-validation"
              name="event-form"
              id="form-event"
            >
              <div className="row">
                <div className="col-12">
                  <div className="mb-3">
                    <label className="form-label">Kegiatan</label>
                    <input
                      className="form-control"
                      placeholder="Insert Event Name"
                      type="text"
                      name="title"
                      id="event-title"
                      value={title}
                      onChange={(e: any) => setTitle(e.target.value)}
                      disabled
                    />
                    <input type="hidden" id="start_date" ref={start_date} />
                    <input type="hidden" id="end_date" ref={end_date} />
                    <div className="invalid-feedback">
                      Please provide a valid event name
                    </div>
                  </div>
                </div>
                <div className="col-12 mb-3">
                    <label htmlFor="tanggal_mulai">Waktu Mulai: </label>
                    <input type="text" className="form-control" id="tanggal_mulai" name="tanggal_mulai"/>
                </div>
                <div className="col-12 mb-3">
                    <label htmlFor="tanggal_selesai">Waktu Selesai: </label>
                    <input type="text" className="form-control" id="tanggal_selesai" name="tanggal_selesai"/>
                </div>
                <div className="col-12 mb-3">
                    <label htmlFor="penanggung_jawab">Penanggung Jawab: </label>
                    <input type="text" className="form-control" id="penanggung_jawab" name="penanggung_jawab"/>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
