import TheBreadCrumb from "../components/TheBreadCrumb";
import Home from "./Home";
import Pagination from "../components/Pagination";
import FormCar from "./FormCar";

export default function Room() {
  return (
    <Home>
      <TheBreadCrumb title="Mobil" children="Administrator" />

      <div className="card">
        <div className="card-body">
          <div className="row mb-3 d-none d-lg-block">
            <div className="col-md-8">
              <div
                className="alert alert-info alert-dismissible alert-label-icon label-arrow fade show mb-0"
                role="alert"
              >
                <i className="mdi mdi-alert-circle-outline label-icon"></i>
                <strong>Info</strong> - Pengajuan penyewaan secara default di
                urutkan dari yang terbaru.
              </div>
            </div>
            <div className="col-md-3"></div>
            <div className="col-md-4 mb-3 text-end"></div>
          </div>
          <div className="row">
            <div className="col-md-2 mb-3">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Masukkan kata kunci..."
                  id="search"
                />
                <button className="btn btn-light" type="button">
                  <i className="bx bx-search"></i>
                </button>
              </div>
            </div>
            <div className="col-md-6 mb-2"></div>
            <div className="col-md-4 mb-3">
              <button
                data-bs-target="#dynamic-modal"
                data-bs-toggle="modal"
                className="btn btn-success waves-effect waves-light float-end"
              >
                <i className="bx bx-plus-circle"></i> Tambah
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="table-responsive-sm">
                <table className="table table-bordered table-hover">
                  <thead className="align-middle">
                    <tr>
                      <th
                        rowSpan={2}
                        style={{ width: "5%" }}
                        className="text-center"
                      >
                        No
                      </th>
                      <th colSpan={5} className="text-center">
                        Keterangan
                      </th>
                      <th
                        className="text-center"
                        style={{ width: "15%" }}
                        rowSpan={2}
                        colSpan={2}
                      >
                        Aksi
                      </th>
                    </tr>
                    <tr>
                      <th
                        rowSpan={2}
                        style={{ width: "10%" }}
                        className="text-center"
                      >
                        Merk
                      </th>
                      <th rowSpan={2} style={{ width: "10%" }}>
                        Kapasitas Penumpang
                      </th>
                      <th rowSpan={2} style={{ width: "15%" }}>
                        Plat Nomor
                      </th>
                      <th rowSpan={2} style={{ width: "10%" }}>
                        Warna
                      </th>
                      <th rowSpan={2} style={{ width: "10%" }} className="text-center">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="align-middle">
                    <tr>
                      <td className="text-center">1</td>
                      <td>Aula PKM</td>
                      <td>100</td>
                      <td>Gdung PKM lantai 3</td>
                      <td className="text-center">
                        <button
                          type="button"
                          className="btn btn-light btn-sm waves-effect btn-label waves-light"
                        >
                          <i className="bx bx-search label-icon"></i> Lihat
                        </button>
                      </td>
                      <td className="text-center">
                        <span className="badge bg-success">Tersedia</span>
                      </td>
                      <td className="text-center">
                        <button
                          type="button"
                          className="btn btn-warning btn-sm waves-effect btn-label waves-light mx-2"
                        >
                          <i className="bx bx-pencil label-icon"></i> Ubah
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-danger btn-sm waves-effect btn-label waves-light"
                        >
                          <i className="bx bx-trash label-icon"></i> Hapus
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <Pagination />
          <FormCar></FormCar>
        </div>
      </div>
    </Home>
  );
}