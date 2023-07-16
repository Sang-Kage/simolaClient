import { useNavigate } from 'react-router-dom';

export default function BackButton() {
  const navigate = useNavigate();
  return (
    <div className="row">
      <div className="col-12 mt-1 mb-3">
        <button
          className="btn btn-secondary waves-effect"
          onClick={() => navigate(-1)}
        >
          <i className="bx bx-arrow-back"></i>{" "}
        </button>
      </div>
    </div>
  );
}
