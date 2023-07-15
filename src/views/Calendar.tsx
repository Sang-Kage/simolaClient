import { useEffect} from "react";
import TheBreadCrumb from "../components/TheBreadCrumb";
import Home from "./Home";
import EventCalendar from "../components/EventCalendar";
import { Link } from "react-router-dom";
import useCalendar from "../utils/useCalendar";
import useUserSlice from "../hooks/useUserSlice";
declare const CalendarPage: any;

export default function Calendar() {
  const { getUser } = useUserSlice();
  const { classNames, end_date, start_date, title, setTitle, setClassNames, setCalendar} = useCalendar();
  useEffect(()=> {
    const newCalendar = new CalendarPage();
    newCalendar.init();
    setCalendar(newCalendar);
    return () => {
      newCalendar.calendar.destroy();
    }
  }, []);


  return (
    <Home>
      <TheBreadCrumb title="Kalender" children="Administrator" />
      <div className="row">
        <div className="col-12">
          <div className="row">
            <div className="col-xl-3 col-lg-4">
              <div className="card">
                <div className="card-body">
                  <div className="d-grid">
                    {getUser().role == 'Administrator' ?(
                    <Link to={'/penyewaan/create'}
                      className="btn font-16 btn-warning"
                      
                    >
                      <i className="mdi mdi-plus-circle-outline" /> Tambah Penyewaan
                    </Link>
                    ) : ''}
                    <button
                      className="btn font-16 btn-primary d-none"
                      id="btn-new-event"
                      data-bs-toggle="modal"
                      data-bs-target="#event-modal"
                    >
                      <i className="mdi mdi-plus-circle-outline" /> Tambah Penyewaan
                    </button>
                  </div>
                  <div id="external-events" className="mt-2">
                    <br />
                    <p className="text-muted">
                      Daftar <b className="fw-bold text-danger">penyewaan</b> dapat dilihat dengan <strong className="text-info">mengklik tanda</strong> pada kalender.
                    </p>
                  </div>
                  <div className="row justify-content-center mt-5">
                    <div className="col-lg-12 col-sm-6">
                      <img
                        src="assets/images/undraw-calendar.svg"
                        alt=""
                        className="img-fluid d-block"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-8">
              <div className="card">
                <div className="card-body">
                  <div id="calendar" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <EventCalendar
        title={title}
        classNames={classNames}
        start_date={start_date}
        end_date={end_date}
        setTitle={setTitle}
        setClassNames={setClassNames}
      />
    </Home>
  );
}
