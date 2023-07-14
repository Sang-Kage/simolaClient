import Modal from "../components/Modal";
import * as yup from "yup";
import { useFormik } from "formik";
import useRoom from "../utils/useRoom";
export default function FormRoom() {
  const { storeRoom } = useRoom();
  const schema = yup.object().shape({
    nama: yup.string().required().min(4).max(255),
    kapasitas: yup.number().required().min(1).max(1000),
    lokasi: yup.string().required().min(4).max(255),
    deskripsi: yup.string(),
    status: yup.boolean(),
  });
  const formik: any = useFormik({
    validationSchema: schema,
    initialValues: {
      nama: "",
      kapasitas: 0,
      lokasi: "",
      deskripsi: "",
      status: true,
    },
    onSubmit: async (values) => {
      await storeRoom(values);
      formik.resetForm();
    },
  });
  return (
    <Modal title="Tambah Gedung/Aula">
      <div className="row">
        <div className="col-12 mb-3">
          <label htmlFor="nama">Nama Gedung/Aula:</label>
          <input
            type="text"
            className="form-control"
            id="nama"
            name="nama"
            value={formik.values.nama}
            onChange={formik.handleChange}
          />
        </div>
        <div className="col-12 mb-3">
          <label htmlFor="kapasitas">Kapasitas Ruang:</label>
          <input
            type="number"
            className="form-control"
            id="kapasitas"
            name="kapasitas"
            value={formik.values.kapasitas}
            onChange={formik.handleChange}
          />
        </div>
        <div className="col-12 mb-3">
          <label htmlFor="lokasi">Lokasi:</label>
          <input
            type="text"
            className="form-control"
            id="lokasi"
            name="lokasi"
            value={formik.values.lokasi}
            onChange={formik.handleChange}
          />
        </div>
        <div className="col-12 mb-3">
          <label htmlFor="deskripsi">Deskripsi:</label>
          <textarea
            className="form-control"
            id="deskripsi"
            name="deskripsi"
            rows={5}
            value={formik.values.deskripsi}
            onChange={formik.handleChange}
          ></textarea>
        </div>
        <div className="col-12">
          <div className="form-check form-switch form-switch-md mb-3" dir="ltr">
            <input
              type="checkbox"
              className="form-check-input"
              id="status"
              name="status"
              checked={formik.values.status}
              onChange={formik.handleChange}
            />
            <label className="form-check-label" htmlFor="status">
              Status
            </label>
          </div>
        </div>
        <div className="col-12 mb-3">
          <hr />
          <button
            className="btn btn-light node-waves waves-light"
            data-bs-dismiss="modal"
          >
            <i className="bx bx-x"></i> Batal
          </button>
          <button
            className="btn btn-primary float-end node-waves waves-light"
            type="button"
            onClick={formik.handleSubmit}
            disabled={formik.isSubmitting || !formik.isValid || !formik.dirty}
            data-bs-dismiss="modal"
          >
            <i className="bx bx-send"></i> Simpan
          </button>
        </div>
      </div>
    </Modal>
  );
}
