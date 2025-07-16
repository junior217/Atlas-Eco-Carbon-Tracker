import Image from "next/image";
import Link from "next/link";
//import CarbonDataList from "./components/carbonDataList";

export default async function Home() {
  return (
    <div className="bg-home flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <div
        className="hero min-h-[300px]"
        
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl font-bold text-carbon-accent">Track Your Carbon Footprint — One Action at a Time 🌱</h1>
            <p className="mb-5 text-carbon-base">
             Know your impact. Visualize your emissions. Start building a cleaner, smarter future today.
            </p>
            <button className="btn bg-carbon-dark border-carbon-dark hover:btn-wide text-carbon-accent hover:bg-carbon-accent">Get Started</button>
          </div>
        </div>
      </div>

      <div className="w-full mx-10 flex flex-col items-center justify-center mt-10">
        <h1 className="text-6xl text-carbon-dark">Key Features</h1>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"> 
            <div className="card bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <Image
                  src="/images/realTrack.png"
                  alt="Carbon Data"
                  width={400}
                  height={300}
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">🔋 Real-Time Emission Tracking</h2>
                <p>Monitor your carbon output across energy, transportation, food, and daily activities — all visualized in clean, easy-to-read data charts.</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <Image
                  src="/images/dataInsight.png"
                  alt="Carbon Data"
                  width={400}
                  height={300}
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">📊 Data-Driven Insights</h2>
                <p>Break down your emissions by sector and time. Spot trends, set reduction goals, and measure your progress week by week.</p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <Image
                  src="/images/ecoSusTips.png"
                  alt="Carbon Data"
                  width={400}
                  height={300}
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">🌿 Personalized Sustainability Tips </h2>
                <p>Get actionable suggestions tailored to your lifestyle — from greener commute options to diet adjustments and eco swaps.</p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <Image
                  src="/images/offsetImprove.png"
                  alt="Carbon Data"
                  width={400}
                  height={300}
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">💧 Offset and Improve  </h2>
                <p>Discover how to balance your emissions by supporting verified offset projects or optimizing your habits directly.</p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <Image
                  src="/images/mobileFriend.png"
                  alt="Carbon Data"
                  width={400}
                  height={300}
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">📱 Mobile Friendly + Secure</h2>
                <p>Access your carbon data from any device with bank-level encryption and seamless syncing.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
