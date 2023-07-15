import UseApi from "../composables/UseApi";
import { typeRoom } from "../helpers/Type";
import Notify from "../helpers/Notify";
export default function useRoom() {
  const { postResource, getResource, putResource, deleteResource } = UseApi();

  async function storeRoom(room: typeRoom) {
    const response = room.id ? await putResource(`aula/${room.id}`, room) : await postResource('aula', room);
    if (response) {
      Notify.success(response.message);
    }
  }

  async function getRoomById(id: string) {
    const response = await getResource(`aula/${id}`);
    return response;
  }

  async function deleteRoom(id: string) {
    await deleteResource(`aula/${id}`);
  }

  return {
    storeRoom,
    getRoomById,
    deleteRoom
  };
}