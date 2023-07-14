import { useDispatch, useSelector } from "react-redux";
import { userState } from "../helpers/Type";

export default function useUserSlice() {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  async function setUser(payload: userState) {
    dispatch({
      type: "user/setUser",
      payload
    });
  }

  function getUser() {
    return user;
  }

  return {
    setUser, getUser
  }
}