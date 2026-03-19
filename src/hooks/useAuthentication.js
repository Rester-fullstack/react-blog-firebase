import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";

export const useAuthentication = () => {

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log("Erro ao deslogar:", error);
    }
  };

  return { logout };
};