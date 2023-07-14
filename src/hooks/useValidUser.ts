import { useSelector } from "react-redux";
import { RootState } from "../app/store";

export default function isValidUser() {
  const user = useSelector((state: RootState) => state.user);
  return user.role !== 'admin' ? false : true;
}