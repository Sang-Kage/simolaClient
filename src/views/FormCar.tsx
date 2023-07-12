import Modal from "../components/Modal";

export default function FormCar() {
  return (
    <Modal title="Tambah Mobil">
      <div className="row">
        <div className="col-12 mb-3">
          <label htmlFor="name">Merk:</label>
          <input type="text" className="form-control" id="name" name="name" />
        </div>
        <div className="col-12 mb-3">
          <label htmlFor="capacity">Kapasitas Penumpang:</label>
          <input
            type="number"
            className="form-control"
            id="capacity"
            name="capacity"
          />
        </div>
        <div className="col-12 mb-3">
          <label htmlFor="plat_nomer">Plat Nomor:</label>
          <input
            type="text"
            className="form-control"
            id="plat_nomer"
            name="plat_nomer"
          />
        </div>
        <div className="col-12 mb-3">
          <label htmlFor="color">Warna:</label>
          <input type="text" name="color" id="color" className="form-control"/>
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
