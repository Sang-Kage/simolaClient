import UseApi from "../composables/UseApi";
import { typeRoom } from "../helpers/Type";
import Notify from "../helpers/Notify";
export default function useRoom() {
  const { postResource } = UseApi();

  async function storeRoom(room: typeRoom) {
    const response = await postResource('aula', room);
    if (response) {
      Notify.success('Data aula berhasil disimpan');
    }
  }

  return {
    storeRoom
  };
}