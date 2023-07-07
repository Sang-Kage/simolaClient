import { Link } from 'react-router-dom';
interface props {
  checkEnableButton: () => void
}

export default function ListMessage ({checkEnableButton}: props) {
  return (              
  <ul className="message-list">
  <li className="border-bottom unread">
    <div className="col-mail col-mail-1">
      <div className="checkbox-wrapper-mail">
        <input
          type="checkbox"
          id="chk19"
          onChange={checkEnableButton}
        />
        <label htmlFor="chk19" className="toggle" />
      </div>
      <Link to="/inbox/2" className="title">
        Himatif
      </Link>
    </div>
    <div className="col-mail col-mail-2">
      <Link to="/inbox/2" className="subject">
        <span className="bg-primary badge me-2">
          Undangan Rapat
        </span>
        <span className="teaser">
          Kami mengundang anda untuk menghadiri rapat pada tanggal
          ...
        </span>
      </Link>
      <div className="date">12/06/2023</div>
    </div>
  </li>
</ul>)
}