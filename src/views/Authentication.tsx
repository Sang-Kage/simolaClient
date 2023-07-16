import { useEffect } from "react";
import FormLogin from "../components/FormLogin";
import { isDisableLayer } from "../helpers/Preloader";
export default function Authentication() {
  useEffect(() => {
    document.title = "Login - SIMOLA";
    isDisableLayer();
  }, []);
  return (
    <div className="auth-page">
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div className="col-xxl-3 col-lg-4 col-md-5">
            <div className="auth-full-page-content d-flex p-sm-5 p-4 py-4">
              <div className="w-100">
                <div className="d-flex flex-column h-100">
                  <div className="text-center">
                    <a href="index.html" className="d-block auth-logo">
                      <img
                        src="https://unira.ac.id/img/logo.png"
                        alt=""
                        height={70}
                      />
                    </a>
                  </div>
                  <div className="auth-content pt-4 mt-2">
                    <div className="text-center">
                      <h5 className="mb-0">SIMOLA</h5>
                      <p className="text-muted mt-2">
                        Sistem Informasi Manajemen Mobil dan Aula
                      </p>
                    </div>
                    <FormLogin></FormLogin>
                  </div>
                  <div className="mt-4 mt-md-5 text-center">
                    <p className="mb-0">
                      © 2023, Simola.
                      <i className="mdi mdi-heart text-danger" /> by ProJs
                      Universitas Madura
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-9 col-lg-8 col-md-7">
            <div className="auth-bg pt-md-5 p-4 d-flex">
              <div className="bg-overlay bg-info" />
              <ul className="bg-bubbles">
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
                <li />
              </ul>
              <div className="row justify-content-center align-items-center">
                <div className="col-xl-7">
                  <div className="p-0 p-sm-4 px-xl-0">
                    <div
                      id="reviewcarouselIndicators"
                      className="carousel slide"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-indicators carousel-indicators-rounded justify-content-start ms-0 mb-0">
                        <button
                          type="button"
                          data-bs-target="#reviewcarouselIndicators"
                          data-bs-slide-to={0}
                          className="active"
                          aria-current="true"
                          aria-label="Slide 1"
                        />
                        <button
                          type="button"
                          data-bs-target="#reviewcarouselIndicators"
                          data-bs-slide-to={1}
                          aria-label="Slide 2"
                        />
                        <button
                          type="button"
                          data-bs-target="#reviewcarouselIndicators"
                          data-bs-slide-to={2}
                          aria-label="Slide 3"
                        />
                      </div>
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <div className="testi-contain text-white">
                            <i className="bx bxs-quote-alt-left text-success display-6" />
                            <h4 className="mt-4 fw-medium lh-base text-white">
                              "Dapatkan informasi mengenai penyewaan Mobil dan Aula di Universitas Madura"
                            </h4>
                            <div className="mt-4 pt-3 pb-5"></div>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div className="testi-contain text-white">
                            <i className="bx bxs-quote-alt-left text-success display-6" />
                            <h4 className="mt-4 fw-medium lh-base text-white">
                              "Masukkan akun yang telah terdaftar di SIMAT dan
                              dapatkan akses untuk mempermudah dalam pengelolaan
                              mobil dan aula di Universitas Madura"
                            </h4>
                            <div className="mt-4 pt-3 pb-5"></div>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div className="testi-contain text-white">
                            <i className="bx bxs-quote-alt-left text-success display-6" />
                            <h4 className="mt-4 fw-medium lh-base text-white">
                              "SIMOLA adalah sistem informasi manajemen yang
                              digunakan untuk mempermudah dalam pengelolaan
                              mobil dan aula di Universitas Madura"
                            </h4>
                            <div className="mt-4 pt-3 pb-5"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
