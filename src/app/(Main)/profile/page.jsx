import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const Profile = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user && !user?.email) {
    return redirect("/api/auth/login");
  }

  return (
    <div className="max-w-4xl text-center mx-auto my-20 card bg-base-100 border shadow-xl">
      <h1 className="pt-10 text-4xl font-bold text-blue-500">
        Welcome Your Profile
      </h1>
      <div className="card-body space-y-6">
        <h3 className="text-xl font-medium">ID: {user?.id}</h3>
        <h1 className="text-2xl font-bold">
          Name: {user?.given_name} {user?.family_name}
        </h1>
        <h3 className="text-xl font-medium">Email: {user?.email}</h3>
      </div>
    </div>
  );
};

export default Profile;
