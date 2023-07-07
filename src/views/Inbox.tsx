import { useEffect } from "react";
import Home from "./Home";
import TheBreadCrumb from "../components/TheBreadCrumb";
import useLetter from "../utils/useLetter";
import ListMessage from "../components/ListMessage";

const Letter = () => {
  const { isChecked, statusRead, handleRead, handleToggle, checkEnableButton } =
    useLetter();
  useEffect(() => {
    checkEnableButton();
    handleRead();
  }, [isChecked]);

  return (
    <Home>
      <TheBreadCrumb title="Surat Masuk" children="Administrator" />
      <div className="row">
        <div className="col-12">
          <div className="email mb-3">
            <div className="card">
              <div className="btn-toolbar gap-2 p-3" role="toolbar">
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-light waves-light waves-effect"
                    onClick={handleToggle}
                  >
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="formCheckRight2"
                      checked={isChecked}
                      readOnly
                    />
                  </button>
                </div>
                <div className="btn-group chat-button d-none">
                  <button
                    type="button"
                    className="btn btn-primary waves-light waves-effect"
                  >
                    <i className="fa fa-archive"></i>
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary waves-light waves-effect"
                    onClick={handleRead}
                  >
                    <i className={statusRead}></i>
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary waves-light waves-effect"
                  >
                    <i className="far fa-trash-alt"></i>
                  </button>
                </div>
              </div>
              <ListMessage checkEnableButton={checkEnableButton} />
            </div>
            <div className="row">
              <div className="col-7">Showing 1 - 20 of 1,524</div>
              <div className="col-5">
                <div className="btn-group float-end">
                  <button
                    type="button"
                    className="btn btn-sm btn-success waves-effect"
                  >
                    <i className="fa fa-chevron-left" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-success waves-effect"
                  >
                    <i className="fa fa-chevron-right" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Home>
  );
};

export default Letter;
