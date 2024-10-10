import { useRouter } from 'next/router';

export default function Post() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold">Post {id}</h1>
      <p className="mt-4">This is the content for post {id}.</p>
    </div>
  );
}