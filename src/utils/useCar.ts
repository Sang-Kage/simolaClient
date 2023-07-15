import UseApi from "../composables/UseApi";
import { typeCar } from "../helpers/Type";
import Notify from "../helpers/Notify";
export default function useCar() {
  const { postResource, getResource, putResource, deleteResource } = UseApi();

  async function storeCar(car: typeCar) {
    const response = car.id ? await putResource(`mobil/${car.id}`, car) : await postResource('mobil', car);
    if (response) {
      Notify.success(response.message);
    }
  }

  async function getCarById(id: string) {
    const response = await getResource(`mobil/${id}`);
    return response;
  }

  async function deleteCar(id: string) {
    await deleteResource(`mobil/${id}`);
  }

  return {
    storeCar,
    getCarById,
    deleteCar
  };
}