import Image from "next/image";
import CarbonDataList from "./components/carbonDataList";

export default async function Home() {


  return (
    <>
      <h1 className="text-xl font-semibold text-cyan-400 text-center">Carbon Tracker Home Page</h1>
      <CarbonDataList/>
    </>
  );
}
