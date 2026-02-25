import { useRouter } from 'next/router';
import { useState, useEffect, use } from 'react';

const produk = () => {
    const [isLogin, setIsLogin] = useState(false);
    const { push } = useRouter();
    useEffect(() => {
        if (!isLogin) {
            push('/auth/login');
        }
    }, []);
    return (
        <div>
            <h1>Halaman Produk</h1>
            <p>Daftar Fireman produk.</p>
        </div>
    );
}

export default produk;