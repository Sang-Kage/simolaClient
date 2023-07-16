import { useFormik } from "formik";
import Modal from "../components/Modal";
import * as yup from "yup";
import useCar from "../utils/useCar";
import { useEffect } from "react";
export default function FormCar({ values, clearFormik, setLoading }: any) {
  const { storeCar } = useCar();

  const schema = yup.object().shape({
    merk: yup.string().required().min(4).max(255),
    kapasitas: yup.string().required().min(1).max(2),
    plat_nomer: yup.string().required().min(4).max(255),
    warna: yup.string().required().min(4).max(255),
    status: yup.boolean(),
  });

  const formik: any = useFormik({
    initialValues: {
      merk: "",
      kapasitas: "",
      plat_nomer: "",
      warna: "",
      status: true,
    },
    validationSchema: schema,
    onSubmit: async (values, actions) => {
      await storeCar(values);
      actions.resetForm();
      actions.setSubmitting(false);
      setLoading(true);
    },
  });

  useEffect(() => {
    if (values) {
      formik.setValues(values);
    }
  }, [values]);

  useEffect(() => {
    if (clearFormik) {
      formik.resetForm();
    }
  }, [clearFormik]);

  return (
    <Modal title="Tambah Mobil">
      <div className="row">
        <div className="col-12 mb-3">
          <label htmlFor="merk">Merk:</label>
          <input
            type="text"
            className="form-control"
            id="merk"
            name="merk"
            value={formik.values.merk}
            onChange={formik.handleChange}
          />
        </div>
        <div className="col-12 mb-3">
          <label htmlFor="kapasitas">Kapasitas Penumpang:</label>
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
          <label htmlFor="plat_nomer">Plat Nomor:</label>
          <input
            type="text"
            className="form-control"
            id="plat_nomer"
            name="plat_nomer"
            value={formik.values.plat_nomer}
            onChange={formik.handleChange}
          />
        </div>
        <div className="col-12 mb-3">
          <label htmlFor="warna">Warna:</label>
          <input
            type="text"
            name="warna"
            id="warna"
            className="form-control"
            value={formik.values.warna}
            onChange={formik.handleChange}
          />
        </div>
        <div className="col-12 mb-3">
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
            data-bs-dismiss="modal"
            onClick={formik.handleSubmit}
            disabled={formik.isSubmitting || !formik.isValid}
          >
            <i className="bx bx-send"></i> Simpan
          </button>
        </div>
      </div>
    </Modal>
  );
}
