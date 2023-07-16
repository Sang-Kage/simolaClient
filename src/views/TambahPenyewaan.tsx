import { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import TheBreadCrumb from "../components/TheBreadCrumb";
import Home from "./Home";
import useFlatPicker from "../utils/useFlatPicker";
import useBooking from "../utils/useBooking";
import UseApi from "../composables/UseApi";
import Flatpickr from "react-flatpickr";

export default function TambahPenyewaan() {
  const { options } = useFlatPicker();
  const { formik } = useBooking();
  const { getResource } = UseApi();
  useEffect(() => {
    getMobil();
    getAula();
    document.title = "Tambah Penyewaan";
  }, []);

  const [mobil, setMobil] = useState<any>([]);
  const getMobil = async () => {
    const response = await getResource("mobil");
    const result = response.data.data.filter(
      (i: any) => parseInt(i.status) == 1
    );
    setMobil(result);
  };

  const [aula, setAula] = useState<any>([]);
  const getAula = async () => {
    const response = await getResource("aula");
    const result = response.data.data.filter(
      (i: any) => parseInt(i.status) == 1
    );
    setAula(result);
  };

  return (
    <Home>
      <TheBreadCrumb title="Tambah Penyewaan"  />
      <BackButton></BackButton>

      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-12">
                  <div className="alert alert-top-border alert-warning">
                    <p className="mb-3">
                      Setelah menambahkan penyewaan, data yang disimpan akan
                      ditampilkan pada halaman penyewaan dan dapat dilihat
                      dimenu kalender.
                    </p>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="penanggung_jawab" className="form-label">
                    Penanggung Jawab:
                  </label>
                  <input
                    type="text"
                    name="penanggung_jawab"
                    id="penanggung_jawab"
                    value={formik.values.penanggung_jawab}
                    onChange={formik.handleChange}
                    className="form-control"
                    placeholder="Nama Penanggung Jawab"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="asal_surat" className="form-label">
                    Asal Surat:
                  </label>
                  <input
                    type="text"
                    name="asal_surat"
                    id="asal_surat"
                    className="form-control"
                    value={formik.values.asal_surat}
                    onChange={formik.handleChange}
                    placeholder="Organisasi / Perusahaan/ Individu"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="tanggal_mulai" className="form-label">
                    Waktu Mulai:
                  </label>
                  <Flatpickr
                    data-enable-time
                    options={options}
                    readOnly
                    className="form-control"
                    placeholder="Waktu Mulai"
                    onChange={([e]) => formik.setFieldValue("tanggal_mulai", e)}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="tanggal_selesai" className="form-label">
                    Waktu Selesai:
                  </label>
                  <Flatpickr
                    data-enable-time
                    options={options}
                    readOnly
                    placeholder="Waktu Selesai"
                    className="form-control"
                    onChange={([e]) =>
                      formik.setFieldValue("tanggal_selesai", e)
                    }
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="jenis_surat" className="form-label">
                    Jenis Penyewaan:
                  </label>
                  <select
                    name="jenis_surat"
                    id="jenis_surat"
                    className="form-select"
                    value={formik.values.jenis_surat}
                    onChange={formik.handleChange}
                  >
                    <option value="">Pilih Jenis Penyewaan</option>
                    {mobil.map((item: any, index: any) => (
                      <option value={`mobil-${item.merk}`} key={index}>
                        Mobil - {item.merk}
                      </option>
                    ))}
                    {aula.map((item: any, index: any) => (
                      <option value={`aula-${item.nama}`} key={index}>
                        Aula - {item.nama}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="lampiran" className="form-label">
                    Surat: <sup className="font-size-5">(Opsional)</sup>
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    name="lampiran"
                    id="lampiran"
                    placeholder="Lampiran"
                    accept="application/pdf, application/vnd.ms-excel, word/*"
                    onChange={(e) => {
                      formik.setFieldValue("lampiran", e.target.files![0]);
                    }}
                  />
                  <small className="text-muted">File yang diperbolehkan: pdf, doc, docx, xls, xlsx</small>
                </div>
                <div className="col-12 mb-3">
                  <label htmlFor="kegiatan" className="form-label">
                    Kegiatan:
                  </label>
                  <textarea
                    name="kegiatan"
                    id="kegiatan"
                    cols={30}
                    rows={10}
                    className="form-control"
                    value={formik.values.kegiatan}
                    placeholder="Contoh: Seminar, Workshop, Pelatihan, dll"
                    onChange={(e) =>
                      formik.setFieldValue("kegiatan", e.target.value)
                    }
                  ></textarea>
                </div>
                <hr />
                <div className="col-12 text-center">
                  <button
                    type="button"
                    className="btn btn-primary waves-node waves-light"
                    onClick={formik.handleSubmit}
                    disabled={
                      formik.isSubmitting || !formik.isValid || !formik.dirty
                    }
                  >
                    <i className="bx bx-send"></i> Simpan Penyewaan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Home>
  );
}
