import { useRouter } from 'next/router';
import React from 'react';

export default function BlogDetailPage() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>Blog Page</h1>
      <p>Blog page: <strong>{slug}</strong></p>
    </div>
  );
}