import TheBreadCrumb from "../components/TheBreadCrumb";
import Home from "./Home";
import { useEffect } from "react";
export default function Dashboard() {
  useEffect(() => {
    document.title = "Dashboard - SIMOLA";
  }, []);

  return (
    <Home>
      <TheBreadCrumb title="Dashboard"  />
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body overflow-hidden position-relative">
              <i className="bx bx-info-circle widget-box-1-icon text-primary"></i>
              <h5 className="mb-3">SELAMAT DATANG DI SIMOLA</h5>
              <p className=" mb-0 text-muted">
                Anda dapat menggunakan menu di samping untuk mengakses fitur.
                Jika terdapat kendala, silahkan hubungi administrator.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Home>
  );
}
