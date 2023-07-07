import TheBreadCrumb from "../components/TheBreadCrumb";
import Home from "./Home";
import Pagination from "../components/Pagination";

export default function Sent() {
  return (
    <Home>
      <TheBreadCrumb title="Surat Keluar" children="Administrator" />

      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-4 d-none d-lg-block">
              <div
                className="alert alert-info alert-dismissible alert-label-icon label-arrow fade show mb-0"
                role="alert"
              >
                <i className="mdi mdi-alert-circle-outline label-icon"></i>
                <strong>Info</strong> - Surat keluar secara default di urutkan
                dari yang terbaru.
              </div>
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-4 mt-2 mb-5 text-end">
              <button className="btn btn-success waves-effect waves-light">
                <i className="bx bx-plus-circle"></i> Tambah Surat Keluar
              </button>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-3">
              <div className="input-group mb-3">
                <label className="mt-2 me-2">Tampilkan</label>
                <select className="form-select">
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
              </div>
            </div>
            <div className="col-md-6"></div>
            <div className="col-md-3">
              <div className="input-group mb-3">
                <label className="mt-2 me-2">Cari</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Masukkan kata kunci..."
                  id="search"
                />
                <button className="btn btn-primary" type="button">
                  <i className="bx bx-search"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="table-responsive-sm">
                <table className="table table-bordered table-striped table-hover">
                  <thead className="align-middle">
                    <tr>
                      <th style={{ width: "5%" }} className="text-center">
                        No
                      </th>
                      <th>Nomor Surat</th>
                      <th>Tanggal Surat</th>
                      <th>Perihal</th>
                      <th>Asal Surat</th>
                      <th className="text-center">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="align-middle">
                    <tr>
                      <td className="text-center">1</td>
                      <td>123/UN.05.1/PP.00/2021</td>
                      <td>2021-01-01</td>
                      <td>Permohonan</td>
                      <td>PT. ABC</td>
                      <td className="text-center">
                        <button className="btn btn-info btn-sm waves-effect waves-light">
                          Detail
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <Pagination />
        </div>
      </div>
    </Home>
  );
}
