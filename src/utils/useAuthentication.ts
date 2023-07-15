import { typeAuthentication } from '../helpers/Type';
import UseToken from '../composables/UseToken';
import Notify from '../helpers/Notify';

const { setToken } = UseToken();
const isAuthorized = async ({ username, password }: typeAuthentication) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    if(response.ok) {
      const data = await response.json();
      setToken(data.data.access_token);
      sessionStorage.setItem('is_simat', data.data.is_simat);
      return;
    }
    throw new Error('Username atau password salah');
  } catch (error: any) {
    Notify.error(error.message);
  }
};


const togglePassword = (formPassword: any) => {
  formPassword.current.type = formPassword.current.type === "password" ? "text" : "password";
  document.getElementById("icon-pw")?.classList.remove("mdi-eye-outline");
  document.getElementById("icon-pw")?.classList.remove("mdi-eye-off-outline");
  document.getElementById("icon-pw")?.classList.add(formPassword.current.type === "password" ? "mdi-eye-outline" : "mdi-eye-off-outline");
};


export { isAuthorized, togglePassword };