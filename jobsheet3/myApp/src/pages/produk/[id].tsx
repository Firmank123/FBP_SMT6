import { useRouter } from 'next/router';
import { use } from 'react';

const HalamanProduk = () => {
    // const router = useRouter();
    const { query } = useRouter();
    return (
        <div>
            <h1>Halaman Produk</h1>
            <p>Produk: {query.id}</p>
        </div>
    );
}

export default HalamanProduk;