import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useAuth = () => {
  const { push } = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!loggedIn) {
      push("/auth/login");
    } else {
      setIsLoggedIn(true);
    }
  }, []);

  return { isLoggedIn };
};

export default useAuth;
