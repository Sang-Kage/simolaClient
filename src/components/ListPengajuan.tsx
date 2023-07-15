import moment from "moment";
import { Link } from "react-router-dom";
import Notify from "../helpers/Notify";
import useBooking from "../utils/useBooking";
interface props {
  checkEnableButton: () => void;
}

export default function ListPengajuan({ result, startNumber, setLoading }: any) {
  const { deleteBooking } = useBooking();

  const getFile = (file: string) => {
    const endpoint = `${import.meta.env.VITE_BASE_URL}${file}`;
    document.location.href = endpoint;
  };

  const destroy:any = async (id: string) => {
    Notify.confirm('Apakah anda yakin ingin menghapus data ini?', async () => {await deleteBooking(id); setLoading(true)});
  }

  return result.map((item: any, index: number) => (
    <tr key={index} className="font-size-13">
      <td className="text-center">{startNumber + index}</td>
      <td>{item.penanggung_jawab}</td>
      <td>{item.asal_surat}</td>
      <td>{item.jenis_surat}</td>
      <td>{item.tanggal_mulai}</td>
      <td>{item.tanggal_selesai}</td>
      <td className="text-center">
        <button
          type="button"
          className="btn btn-light btn-sm waves-effect btn-label waves-light"
          tabIndex={-1}
          formTarget="__blank"
          onClick={() => getFile(item.lampiran)}
        >
          <i className="bx bx-search label-icon"></i> Lihat
        </button>
      </td>
      <td className="text-center">
        <Link
          to={'/penyewaan/update/' + item.id}
          type="button"
          className="btn btn-warning btn-sm waves-effect btn-label waves-light mx-2"
        >
          <i className="bx bx-pencil label-icon"></i> Ubah
        </Link>
      </td>
      <td>
        <button
          type="button"
          className="btn btn-danger btn-sm waves-effect btn-label waves-light"
          onClick={() =>destroy(item.id)}
        >
          <i className="bx bx-trash label-icon"></i> Hapus
        </button>
      </td>
    </tr>
  ));
}
