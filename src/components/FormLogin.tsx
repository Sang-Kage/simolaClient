export default function FormLogin() {
  return (
    <form className="mt-4 pt-2">
      <div className="mb-3">
        <label className="form-label">Username</label>
        <input
          type="text"
          className="form-control"
          id="username"
          placeholder="Enter username"
        />
      </div>
      <div className="mb-3">
        <div className="d-flex align-items-start">
          <div className="flex-grow-1">
            <label className="form-label">Password</label>
          </div>
          <div className="flex-shrink-0">
            <div className="">
              <a href="auth-recoverpw.html" className="text-muted">
                Forgot password?
              </a>
            </div>
          </div>
        </div>
        <div className="input-group auth-pass-inputgroup">
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            aria-label="Password"
            aria-describedby="password-addon"
          />
          <button
            className="btn btn-light shadow-none ms-0"
            type="button"
            id="password-addon"
          >
            <i className="mdi mdi-eye-outline" />
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
          type="submit"
        >
          <i className="bx bxs-lock-open" /> Login
        </button>
      </div>
    </form>
  );
}
