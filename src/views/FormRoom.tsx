import Modal from "../components/Modal";

export default function FormRoom() {
  return (
    <Modal title="Tambah Gedung/Aula">
      <div className="row">
        <div className="col-12 mb-3">
          <label htmlFor="name">Nama Gedung/Aula:</label>
          <input type="text" className="form-control" id="name" name="name" />
        </div>
        <div className="col-12 mb-3">
          <label htmlFor="capacity">Kapasitas Ruang:</label>
          <input
            type="number"
            className="form-control"
            id="capacity"
            name="capacity"
          />
        </div>
        <div className="col-12 mb-3">
          <label htmlFor="location">Lokasi:</label>
          <input
            type="text"
            className="form-control"
            id="location"
            name="location"
          />
        </div>
        <div className="col-12 mb-3">
          <label htmlFor="description">Deskripsi:</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            rows={5}
          ></textarea>
        </div>
        <div className="col-12 mb-3">
          <hr />
          <button className="btn btn-light node-waves waves-light" data-bs-dismiss="modal"><i className="bx bx-x"></i> Batal</button>
          <button className="btn btn-primary float-end node-waves waves-light" data-bs-dismiss="modal"><i className="bx bx-send"></i> Simpan</button>
        </div>
      </div>
    </Modal>
  );
}
