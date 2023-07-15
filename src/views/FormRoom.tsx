import Modal from "../components/Modal";
import * as yup from "yup";
import { useFormik } from "formik";
import useRoom from "../utils/useRoom";
import { useEffect } from "react";
interface Props {
  values: any;
  clearFormik: boolean;
  setLoading: (value: boolean) => void;
}
export default function FormRoom({ values, clearFormik, setLoading }: Props) {
  const { storeRoom } = useRoom();

  const schema = yup.object().shape({
    nama: yup.string().required().min(4).max(255),
    kapasitas: yup.number().required().min(1).max(10000000),
    lokasi: yup.string().required().min(4).max(255),
    deskripsi: yup.string(),
    status: yup.boolean(),
  });
  const formik: any = useFormik({
    validationSchema: schema,
    initialValues: {
      nama: "",
      kapasitas: '',
      lokasi: "",
      deskripsi: "",
      status: true,
    },
    onSubmit: async (values, actions) => {
      await storeRoom(values);
      actions.resetForm();
      actions.setSubmitting(false);
      setLoading(true);
    },
  });


  useEffect(()=> {
    if(values) {
      formik.setValues(values);
    }
  }, [values]);

  useEffect(() => {
    if (clearFormik) {
      formik.resetForm();
    }
  }, [clearFormik]);




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
              onChange={(e) => formik.setFieldValue("status", e.target.checked)}
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
            disabled={!formik.isValid || !formik.dirty || formik.isSubmitting}
            data-bs-dismiss="modal"
          >
            <i className="bx bx-send"></i> Simpan
          </button>
        </div>
      </div>
    </Modal>
  );
}
