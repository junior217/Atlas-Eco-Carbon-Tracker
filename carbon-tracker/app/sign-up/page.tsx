'use client'; // This is a client component
import Image from "next/image"; // Next.js optimized image component
import Link from "next/link"; // Next.js client-side navigation
import { useState } from "react";
import personalSignUpFields from "../components/persSignUp";
import companySignUpFields from "../components/coSignUp";

export default function LoginPage() {
  const [entityType, setEntityType] = useState('Personal');
  const handleEntityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEntityType(e.target.value);
  }
 
  return (
    // Main container for the login page, with background and flex layout
    <div className="bg-login flex flex-col items-center justify-center min-h-screen p-4 xl:flex xl:flex-row sm:p-y-25 sm:border-slate-900 ">
      {/* Left panel for large screens, decorative only */}
      <div className="hidden xl:block xl:w-full xl:max-w-[300px] xl:h-[100%] xl:mt-20 bg-carbon-dark border-carbon-dark rounded-lg shadow-lg p-6">
        {/* Empty for now, can add illustration or info */}
      </div>

      {/* Login form container */}
      <div className="relative flex flex-col items-center justify-center w-full max-w-md h-[100%] bg-carbon-base border-carbon-dark rounded-lg shadow-lg p-6 mt-10 ">
        {/* Logo image, positioned above the form */}
        <Image
          src="/images/logo.png"
          alt="logoimage"
          className="object-cover justify-center absolute -top-40"
          width={250}
          height={250}
        ></Image>

        {/* App title */}
        <h1 className="text-carbon-dark text-3xl font-bold text-center my-4 md:text-4xl xl:text-2xl">
          Atlas Carbon Tracker
        </h1>

        {/* Login form */}
        <div> 
            <select defaultValue="Personal" onChange={handleEntityChange} className="select select-neutral py-2 ">
                <option disabled={true}>Entity Type</option>
                <option>Personal</option>
                <option>Company</option>
            </select>
            
            {/* This is where ill display the different forms using the useState function */}
            {entityType === 'Personal' ? personalSignUpFields() : <div>Company Form Coming Soon!</div>}
        </div>


        {/* Terms and privacy policy notice */}
        <p className="text-xs text-center py-5 sm:text-base sm:text-left">
          By continuing, you agree to our Terms and Privacy Policy.
        </p>

        {/* Link to sign up page */}
        <Link
          href="/sign-up"
          className="text-blue-500 hover:underline text-xs justify-center text-center"
        >
          Don't have an account? Sign Up
        </Link>
      </div>
    </div>
    // cabron List Claro
  );
}
