import { useRouter } from "next/router";

export default function CategoryPage() {
  const { slug } = useRouter().query;
  const params = slug ? [slug].flat() : [];

  return (
    <div>
      <h1>Kategori</h1>
      {params.length === 0 ? (
        <p>Semua kategori</p>
      ) : (
        <>
          <ul>
            {params.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
