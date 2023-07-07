import BackButton from "../components/BackButton";
import TheBreadCrumb from "../components/TheBreadCrumb";
import Home from "./Home";
export default function DetailInbox() {
  return (
    <Home>
      <TheBreadCrumb title="Surat Masuk" children="Administrator" />
      <BackButton />
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center mb-4">
                <div className="flex-shrink-0 me-3">
                  <img
                    className="rounded-circle avatar-sm"
                    src="/assets/images/users/avatar-2.jpg"
                    alt="Generic placeholder image"
                  />
                </div>
                <div className="flex-grow-1">
                  <h5 className="font-size-14 mb-0">Humberto D. Champion</h5>
                  <small className="text-muted">support@domain.com</small>
                </div>
              </div>
              <h4 className="font-size-16">This Week's Top Stories</h4>
              <p>Dear Lorem Ipsum,</p>
              <p>
                Praesent dui ex, dapibus eget mauris ut, finibus vestibulum
                enim. Quisque arcu leo, facilisis in fringilla id, luctus in
                tortor. Nunc vestibulum est quis orci varius viverra. Curabitur
                dictum volutpat massa vulputate molestie. In at felis ac velit
                maximus convallis.
              </p>
              <p>
                Sed elementum turpis eu lorem interdum, sed porttitor eros
                commodo. Nam eu venenatis tortor, id lacinia diam. Sed aliquam
                in dui et porta. Sed bibendum orci non tincidunt ultrices.
                Vivamus fringilla, mi lacinia dapibus condimentum, ipsum urna
                lacinia lacus, vel tincidunt mi nibh sit amet lorem.
              </p>
              <p>Sincerly,</p>
              <hr />
              <div className="row">
                <div className="col-xl-2 col-6">
                  <div className="card">
                    <img
                      className="card-img-top img-fluid"
                      src="/assets/images/small/img-3.jpg"
                      alt="Card image cap"
                    />
                    <div className="py-2 text-center">
                      <a
                        download="img-3.jpg"
                        href="/assets/images/small/img-3.jpg"
                        className="fw-medium"
                      >
                        Download
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-6">
                  <div className="card">
                    <img
                      className="card-img-top img-fluid"
                      src="/assets/images/small/img-4.jpg"
                      alt="Card image cap"
                    />
                    <div className="py-2 text-center">
                      <a
                        download="img-4.jpg"
                        href="/assets/images/small/img-4.jpg"
                        className="fw-medium"
                      >
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <a
                href="javascript: void(0);"
                className="btn btn-secondary waves-effect mt-4"
              >
                <i className="mdi mdi-reply me-1" /> Reply
              </a>
            </div>
          </div>
        </div>
      </div>
    </Home>
  );
}
