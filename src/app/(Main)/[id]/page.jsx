import getPost from "@/lib/getPost";
import Link from "next/link";

const Details = async ({ params }) => {
  const { id } = params;
  const post = await getPost(id);
  const { userId, title, body } = post;

  return (
    <div className="my-32 container  mx-auto space-y-10">
    <h1 className="text-4xl font-bold text-blue-500 text-center">This Is Post Details Page</h1>
    <div className="card bg-base-100 border shadow-xl max-w-2xl mx-auto min-h-96">
      <div className="card-body text-center space-y-6">
        <div className="flex justify-evenly">
        <h2 className="card-title">Post ID : {id}</h2>
        <h2 className="card-title">User ID : {userId}</h2>
        </div>
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="text-lg font-medium">{body}</p>
        <Link href="/" className="btn btn-neutral">Go Back</Link>
      </div>
    </div>
    </div>
  );
};

export default Details;
