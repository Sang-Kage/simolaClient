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
    document.title = 'Pengajuan Penyewaan - SIMOLA'
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
      <TheBreadCrumb title="Penyewaan"  />

      <div className="card">
        <div className="card-body">
          <div className="row mb-3 d-none d-lg-block">
            <div className="col-md-12">
              <div
                className="alert alert-info alert-dismissible alert-label-icon label-arrow fade show mb-0"
                role="alert"
              >
                <i className="mdi mdi-alert-circle-outline label-icon"></i>
                <strong>Info</strong> - Pengajuan penyewaan secara default diurutkan berdasarkan waktu pengajuan yang paling dekat dengan waktu saat ini. Tombol <strong>Lihat</strong> akan disable jika pengajuan tidak mengikut sertakan lampiran.
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
                  name="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <button className="btn btn-light" type="button" onClick={search}>
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
              <div className="table-responsive">
                <table className="table table-bordered table-hover font-size-13">
                  <thead className="align-middle">
                    <tr>
                    
                      <th rowSpan={2} style={{ width: "18%" }}>
                        PENANGGUNG JAWAB
                      </th>
                      <th colSpan={2} className="text-center">
                        KETERANGAN
                      </th>
                      <th
                        rowSpan={2}
                        style={{ width: "7%" }}
                        className="text-center"
                      >
                        LAMPIRAN
                      </th>
                      <th
                        className="text-center"
                        style={{ width: "15%" }}
                        rowSpan={2}
                        colSpan={2}
                      >
                        AKSI
                      </th>
                    </tr>
                    <tr>
                      <th style={{width: '20%'}}>WAKTU</th>
                      <th style={{width: '25%'}}>KEGIATAN</th>
                    </tr>
                  </thead>
                  <tbody className="align-middle">
                    {totalData !== 0 ? (
                      <ListPengajuan
                        result={result}
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
