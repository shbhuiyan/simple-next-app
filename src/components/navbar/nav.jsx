import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import React from 'react';


const Navbar = async() => {

    const {getUser} = getKindeServerSession();
    const user = await getUser();


  return (
    <div className="container mx-auto flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold">
        Logo
      </Link>
      <ul className="flex items-center gap-8 text-lg font-semibold">
        <li className="btn btn-outline">
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link className="btn btn-outline" href="/profile">Profile</Link>
        </li>
        <li className="btn btn-outline">
            {
                user? <LogoutLink>Logout</LogoutLink> : <LoginLink>Sign in</LoginLink> 
            }
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
