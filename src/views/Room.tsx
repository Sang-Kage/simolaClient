import TheBreadCrumb from "../components/TheBreadCrumb";
import Home from "./Home";
import Pagination from "../components/Pagination";
import FormRoom from "./FormRoom";
import usePagination from "../composables/UsePagination";
import { useEffect, useState } from "react";
import EmptyData from "../components/EmptyData";
import { ListRooms } from "../components/ListRooms";
import useRoom from "../utils/useRoom";
export default function Room() {
  const { getRoomById } = useRoom();
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
  } = usePagination("aula", "", query);

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  useEffect(() => {
    generateButtons();
  }, [totalPage]);

  const [loading, setLoading] = useState<boolean>(false);

  const [room, setRoom] = useState<any>(null);
  const [clearFormik, setClearFormik] = useState<boolean>(false);
  const emitValue = async (id: string) => {
    const response = await getRoomById(id);
    setRoom(response.data);
  };

  useEffect(() => {
    if(loading === true) {
      fetchData();
      setLoading(false);
    }
  }, [loading]);

  return (
    <Home>
      <TheBreadCrumb title="Aula" children="Administrator" />
      <div className="card">
        <div className="card-body">
          <div className="row mb-3 d-none d-lg-block">
            <div className="col-md-12">
              <div className="alert alert-info alert-top-border" role="alert">
                <p className="text-center mb-0">
                  Untuk menambahkan aula baru, silahkan klik tombol{" "}
                  <strong>Tambah</strong> dibawah ini. Setelah itu, silahkan isi
                  form yang telah disediakan. Pastikan data yang dinputkan telah
                  valid
                </p>
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
            <div className="col-md-5 mb-4"></div>
            <div className="col-md-4 mb-4">
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
                <table className="table table-bordered table-hover table-striped">
                  <thead className="align-middle">
                    <tr>
                      <th
                        rowSpan={2}
                        style={{ width: "5%" }}
                        className="text-center"
                      >
                        No
                      </th>
                      <th rowSpan={2} style={{ width: "15%" }}>
                        Nama Aula / Gedung
                      </th>
                      <th colSpan={4} className="text-center">
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
                        Kapasitas Ruang
                      </th>
                      <th rowSpan={2} style={{ width: "15%" }}>
                        Lokasi
                      </th>
                      <th rowSpan={2} style={{ width: "10%" }}>
                        Deskripsi
                      </th>
                      <th
                        rowSpan={2}
                        style={{ width: "5%" }}
                        className="text-center"
                      >
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="align-middle">
                    {totalData !== 0 ? (
                      <ListRooms
                        result={result}
                        startNumber={startNumber}
                        emitValue={emitValue}
                        setLoading={setLoading}
                      />
                    ) : (
                      EmptyData(8)
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
          <FormRoom
            values={room}
            clearFormik={clearFormik}
            setLoading={setLoading}
          />
        </div>
      </div>
    </Home>
  );
}
