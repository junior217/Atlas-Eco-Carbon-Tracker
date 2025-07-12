import Image from "next/image";
//import CarbonDataList from "./components/carbonDataList";

export default async function Home() {
  return (
    <>
      <h1 className="text-2xl font-semibold text-cyan-400 text-center">
        Carbon Tracker Home Page
      </h1>
      <div className="flex flex-col items-center justify-center mt-10 md:flex-row md:space-x-10">
        <div>
          <button className="btn btn-primary w-1/2 h-10">Button</button>
        </div>
        <form action="submit">
          <div className="form-control w-60 mb-4">
            <label className="label floating-label">
              <span className="label-text">Enter your carbon data</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input-ghost input-bordered w-full input-success"
            />
          </div>
          <button type="submit" className="btn btn-primary w-60 h-10">
            Submit
          </button>
        </form>
  
      </div>
    </>
  );
}
