import TheBreadCrumb from "../components/TheBreadCrumb";
import Home from "./Home";
import Pagination from "../components/Pagination";
import FormCar from "./FormCar";
import usePagination from "../composables/UsePagination";
import { useEffect, useState } from "react";
import useCar from "../utils/useCar";
import EmptyData from "../components/EmptyData";
import ListCar from "../components/ListCars";
export default function Room() {
  const [query, setQuery] = useState<string>("");
  const { getCarById } = useCar();
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
  } = usePagination("mobil", "", query);

  useEffect(() => {
    fetchData();
    document.title = "Mobil - SIMOLA";
  }, [currentPage]);

  useEffect(() => {
    generateButtons();
  }, [totalPage]);

  const [loading, setLoading] = useState<boolean>(false);

  const [car, setCar] = useState<any>(null);
  const [clearFormik, setClearFormik] = useState<boolean>(false);

  const emitValue = async (id: string) => {
    const response = await getCarById(id);
    const result = {
      id: response.data.id,
      merk: response.data.merk,
      kapasitas: response.data.kapasitas,
      plat_nomer:response.data.plat_nomer,
      warna: response.data.warna,
      status: parseInt(response.data.status),
    }
    setCar(result);
  };

  useEffect(() => {
    if (loading === true) {
      fetchData();
      setLoading(false);
    }
  }, [loading]);

  return (
    <Home>
      <TheBreadCrumb title="Mobil"  />

      <div className="card">
        <div className="card-body">
          <div className="row mb-3 d-none d-lg-block">
            <div className="col-md-10">
              <div
                className="alert alert-info alert-dismissible alert-label-icon label-arrow fade show mb-0"
                role="alert"
              >
                <i className="mdi mdi-alert-circle-outline label-icon"></i>
                <strong>Info</strong> - Untuk menambahkan mobilb baru, klik tombol tambah. Pastikan data yang diinputkan sudah benar.
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
                <button
                  className="btn btn-light"
                  type="button"
                  onClick={search}
                >
                  <i className="bx bx-search"></i>
                </button>
              </div>
            </div>
            <div className="col-md-5 mb-2"></div>
            <div className="col-md-4 mb-3">
              <button
                data-bs-target="#dynamic-modal"
                data-bs-toggle="modal"
                className="btn btn-success waves-effect waves-light float-end"
                onClick={() => {
                  setClearFormik(true);
                }}
              >
                <i className="bx bx-plus-circle"></i> Tambah
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="table-responsive-sm">
                <table className="table table-bordered table-hover table-striped font-size-13">
                  <thead className="align-middle" style={{textTransform: 'uppercase'}}>
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
                      <th
                        rowSpan={2}
                        style={{ width: "10%" }}
                        className="text-center"
                      >
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="align-middle">
                    {totalData !== 0 ? (
                      <ListCar
                        result={result}
                        startNumber={startNumber}
                        emitValue={emitValue}
                        setLoading={setLoading}
                      />
                    ) : (
                      EmptyData(7)
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
          <FormCar
            values={car}
            clearFormik={clearFormik}
            setLoading={setLoading}
          ></FormCar>
        </div>
      </div>
    </Home>
  );
}
