import { useEffect } from "react";
import BackButton from "../components/BackButton";
import TheBreadCrumb from "../components/TheBreadCrumb";
import Home from "./Home";
import useFlatPicker from "../utils/useFlatPicker";
export default function TambahPenyewaan() {
  const { init } = useFlatPicker();
  useEffect(() => {
    init("#start_time");
    init("#finish_time");
  });
  return (
    <Home>
      <TheBreadCrumb title="Tambah Penyewaan" children="Administrator" />
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
                  <label htmlFor="kegiatan" className="form-label">
                    Penanggung Jawab:
                  </label>
                  <input
                    type="text"
                    name="kegiatan"
                    id="kegiatan"
                    className="form-control"
                    placeholder="Nama Penanggung Jawab"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="kegiatan" className="form-label">
                    Asal Surat:
                  </label>
                  <input
                    type="text"
                    name="kegiatan"
                    id="kegiatan"
                    className="form-control"
                    placeholder="Organisasi / Perusahaan/ Individu"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="start_time" className="form-label">
                    Tanggal Mulai:
                  </label>
                  <input
                    type="text"
                    name="start_time"
                    id="start_time"
                    className="form-control active flatpickr-input"
                    placeholder="Tanggal Mulai"
                    readOnly
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="finish_time" className="form-label">
                    Tanggal Selesai:
                  </label>
                  <input
                    type="text"
                    name="finish_time"
                    id="finish_time"
                    className="form-control"
                    placeholder="Tanggal Selesai"
                    readOnly
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="kegiatan" className="form-label">
                    Jenis Penyewaan:
                  </label>
                  <select
                    name="jenis_penyewaan"
                    id="jenis_penyewaan"
                    className="form-select"
                  >
                    <option value="">Pilih Jenis Penyewaan</option>
                    <option value="">Pilih Jenis Penyewaan</option>
                    <option value="">Pilih Jenis Penyewaan</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="kegiatan" className="form-label">
                    Surat:
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    accept="application/pdf, application/vnd.ms-excel, word/*"
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="kegiatan" className="form-label">
                    Kegiatan:
                  </label>
                  <textarea
                    name=""
                    id=""
                    cols={30}
                    rows={10}
                    className="form-control"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Home>
  );
}
