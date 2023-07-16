import { Link } from "react-router-dom";
import Notify from "../helpers/Notify";
import useBooking from "../utils/useBooking";
import moment from "moment";

export default function ListPengajuan({ result, setLoading }: any) {
  const { deleteBooking } = useBooking();

  const getFile = (file: string) => {
    const endpoint = `${import.meta.env.VITE_BASE_URL}${file}`;
    document.location.href = endpoint;
  };

  const destroy: any = async (id: string) => {
    Notify.confirm("Apakah anda yakin ingin menghapus data ini?", async () => {
      await deleteBooking(id);
      setLoading(true);
    });
  };

  const convertDate = (start_date: any, end_date: any) => {
    return moment(start_date).format("DD-MM-YYYY") ==
      moment(end_date).format("DD-MM-YYYY")
      ? moment(start_date).format("DD-MM-YYYY")
      : moment(start_date).format("DD-MM-YYYY") +
          " s/d " +
          moment(end_date).format("DD-MM-YYYY");
  };

  const convertTime = (start_date: any, end_date: any) => {
    return moment(start_date).format("HH:mm") ==
      moment(end_date).format("HH:mm")
      ? moment(start_date).format("HH:mm") + " s/d selesai"
      : moment(start_date).format("HH:mm") +
          " s/d " +
          moment(end_date).format("HH:mm");
  };

  const perihal = (jenis_surat: string) => {
    switch (jenis_surat) {
      case "mobil":
        return "Penyewaan Mobil";
      case "aula":
        return "Penyewaan Aula";
      default:
        return "Penyewaan";
    }
  };

  return result.map((item: any, index: number) => (
    <tr key={index}>
      <td style={{ textTransform: "uppercase" }}>
        <span className="font-size-11 text-muted fw-light">
          {item.asal_surat}
        </span>
        <br />
        <span>{item.penanggung_jawab}</span>
      </td>

      <td>
        <span>
          {convertDate(item.tanggal_mulai, item.tanggal_selesai)}
        </span>
        <br />
        <span className="badge bg-success font-size-11">
          {convertTime(item.tanggal_mulai, item.tanggal_selesai)}
        </span>
      </td>
      <td style={{textTransform: 'uppercase'}}>
        <span className="text-muted fw-light font-size-11" >
          {perihal(item.type)}
        </span>
        <br />
        <span className="fw-1">{item.kegiatan}</span>
      </td>
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
          to={"/penyewaan/update/" + item.id}
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
          onClick={() => destroy(item.id)}
        >
          <i className="bx bx-trash label-icon"></i> Hapus
        </button>
      </td>
    </tr>
  ));
}
