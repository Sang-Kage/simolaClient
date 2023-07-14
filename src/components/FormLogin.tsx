import { useRef } from "react";
import { isAuthorized, togglePassword } from "../utils/useAuthentication";
import * as yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
export default function FormLogin() {
  const formPassword = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();
  const schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
  });
  const formik: any = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      const response = await isAuthorized(values);
      if (response) {
        return navigate("/", { replace: true });
      }
    },
  });

  const handleKeyIcon = () => {
    togglePassword(formPassword);
  };

  return (
    <form className="mt-4 pt-2">
      <div className="mb-3">
        <label className="form-label">NIS / NPM</label>
        <input
          type="text"
          className="form-control"
          id="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          placeholder="NIS/NPM"
        />
      </div>
      <div className="mb-3">
        <div className="d-flex align-items-start">
          <div className="flex-grow-1">
            <label className="form-label">Password / PIN</label>
          </div>
          <div className="flex-shrink-0">
            <div className="">
              <a
                href="auth-recoverpw.html"
                className="text-muted"
                tabIndex={-1}
              >
                Forgot password?
              </a>
            </div>
          </div>
        </div>
        <div className="input-group auth-pass-inputgroup">
          <input
            type="password"
            className="form-control"
            placeholder="PASSWORD"
            id="password"
            ref={formPassword}
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <button
            className="btn btn-light shadow-none ms-0"
            type="button"
            id="password-addon"
            tabIndex={-1}
            onClick={handleKeyIcon}
          >
            <i className="mdi mdi-eye-outline" id="icon-pw" />
          </button>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="remember-check"
            />
            <label className="form-check-label" htmlFor="remember-check">
              Ingat Saya
            </label>
          </div>
        </div>
      </div>
      <div className="mb-3">
        <button
          className="btn btn-info w-100 waves-effect waves-light"
          type="button"
          onClick={formik.handleSubmit}
          disabled={formik.isSubmitting || !formik.dirty || !formik.isValid}
        >
          <i className="bx bxs-lock-open" /> Login
        </button>
      </div>
    </form>
  );
}
