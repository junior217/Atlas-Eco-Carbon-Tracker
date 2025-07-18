import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="bg-login flex flex-col items-center justify-center min-h-screen p-4 xl:flex xl:flex-row sm:p-y-25 sm:border-slate-900 ">
      <div className="hidden xl:block xl:w-full xl:max-w-[300px] xl:h-[550px] xl:mt-20 bg-carbon-dark border-carbon-dark rounded-lg shadow-lg p-6">

      </div>
      
      <div className="relative flex flex-col items-center justify-center w-full max-w-md h-[100%] bg-carbon-base border-carbon-dark rounded-lg shadow-lg p-6 mt-10 ">
        <Image
          src="/images/logo.png"
          alt="logoimage"
          className="object-cover justify-center absolute -top-40"
          width={250}
          height={250}
        ></Image>

        <h1 className="text-carbon-dark text-3xl font-bold text-center my-4 md:text-4xl xl:text-2xl">
          Atlas Carbon Tracker
        </h1>

        <form action="" className="flex flex-col items-center space-y-4 p-5">
          <button className="btn bg-white text-black border-[#e5e5e5]">
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>

          <p className="text-gray-500">or</p>
          <label className="input validator">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input type="email" placeholder="mail@site.com" required />
          </label>
          <label className="input validator">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
              </g>
            </svg>
            <input
              type="password"
              required
              placeholder="Password"
              minLength="8"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
            />
          </label>
          <button
            type="submit"
            className="btn bg-carbon-accent my-2 p-5 text-carbon-base"
          >
            Log In
          </button>
        </form>

        <p className="text-xs text-center py-5 sm:text-base sm:text-left">
          By continuing, you agree to our Terms and Privacy Policy.
        </p>
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
