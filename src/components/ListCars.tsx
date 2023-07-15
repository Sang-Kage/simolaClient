import Notify from "../helpers/Notify";
import useCar from "../utils/useCar";

export default function ListCar({
  result,
  startNumber,
  emitValue,
  setLoading,
}: any) {
  const { deleteCar } = useCar();
  const destroy: any = async (id: string) => {
    Notify.confirm("Apakah anda yakin ingin menghapus data ini?", async () => {
      await deleteCar(id);
      setLoading(true);
    });
  };
  return result.map((item: any, index: number) => (
    <tr key={index}>
      <td className="text-center">{startNumber + index}</td>
      <td>{item.merk}</td>
      <td>{item.kapasitas}</td>
      <td>{item.plat_nomer}</td>
      <td>{item.warna}</td>
      <td className="text-center">
        {item.status === 1 ? (
          <span className="badge bg-success">Aktif</span>
        ) : (
          <span className="badge bg-danger">Nonaktif</span>
        )}
      </td>
      <td className="text-center">
        <button
          type="button"
          className="btn btn-warning btn-sm waves-effect btn-label waves-light mx-2"
          data-bs-toggle="modal"
          data-bs-target="#dynamic-modal"
          onClick={() => emitValue(item.id)}
        >
          <i className="bx bx-pencil label-icon"></i> Ubah
        </button>
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
