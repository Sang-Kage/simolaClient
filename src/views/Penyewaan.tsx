import TheBreadCrumb from "../components/TheBreadCrumb";
import Home from "./Home";
import Pagination from "../components/Pagination";
import { Link } from "react-router-dom";
import usePagination from "../composables/UsePagination";
import { useState, useEffect } from "react";
import EmptyData from "../components/EmptyData";
import ListPengajuan from "../components/ListPengajuan";

export default function Sent() {
  const [query, setQuery] = useState<string>("");
  const {
    startNumber,
    result,
    totalData,
    currentPage,
    totalPage,
    pageList,
    search,
    isFirstPage,
    isLastPage,
    nextPage,
    prevPage,
    goToPage,
    fetchData,
    generateButtons,
  } = usePagination("penyewaan", "", query);
  useEffect(() => {
    fetchData();
  }, [currentPage]);

  useEffect(() => {
    generateButtons();
  }, [totalPage]);

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (loading === true) {
      fetchData();
      setLoading(false);
    }
  }, [loading]);

  return (
    <Home>
      <TheBreadCrumb title="Penyewaan" children="Administrator" />

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
            <div className="col-md-3 mb-3">
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
            <div className="col-md-5 mb-2"></div>
            <div className="col-md-4 mb-3">
              <Link
                to={"/penyewaan/create"}
                className="btn btn-success waves-effect waves-light float-end"
              >
                <i className="bx bx-plus-circle"></i> Tambah Pengajuan
              </Link>
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
                      <th rowSpan={2} style={{ width: "10%" }}>
                        Penanggung Jawab{" "}
                      </th>
                      <th rowSpan={2} style={{ width: "10%" }}>
                        Asal Surat
                      </th>
                      <th rowSpan={2} style={{ width: "10%" }}>
                        Perihal
                      </th>
                      <th colSpan={2} className="text-center">
                        Waktu
                      </th>
                      <th
                        rowSpan={2}
                        style={{ width: "7%" }}
                        className="text-center"
                      >
                        Lampiran
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
                      <th>Tanggal Mulai</th>
                      <th>Tanggal Selesai</th>
                    </tr>
                  </thead>
                  <tbody className="align-middle">
                    {totalData !== 0 ? (
                      <ListPengajuan
                        result={result}
                        startNumber={startNumber}
                        setLoading={setLoading}
                      />
                    ) : (
                      EmptyData(9)
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {totalData === 0 ? (
            ""
          ) : (
            <Pagination
              currentPage={currentPage}
              goToPage={goToPage}
              isFirstPage={isFirstPage}
              isLastPage={isLastPage}
              nextPage={nextPage}
              pageList={pageList}
              prevPage={prevPage}
              result={result}
              startNumber={startNumber}
              totalData={totalData}
              totalPage={totalPage}
            />
          )}
        </div>
      </div>
    </Home>
  );
}
