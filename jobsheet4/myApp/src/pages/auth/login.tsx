import Link from "next/link";
import { useRouter } from "next/router";

const halamanLogin = () => {
  const { push } = useRouter();
  const handleLogin = () => {
    // Simpan status login ke localStorage
    localStorage.setItem("isLoggedIn", "true");
    push("/produk");
  };

  return (
    <div>
      <h1>Halaman Login</h1>
      <button onClick={() => handleLogin()}>Login</button> <br />
      <Link href="/auth/register">Belum punya akun? Register</Link>
    </div>
  );
};

export default halamanLogin;
