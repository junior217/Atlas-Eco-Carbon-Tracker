import Image from "next/image";

export default async function Home() {
  const carbonData =  await fetch('https://effective-cod-vwp7vvw5r47266pw.github.dev/api/carbondata', {cache: 'no-cache'})
  
   if (!carbonData.ok) {
    const errorText = await carbonData.text(); // grab HTML or error message
    console.error('Fetch failed:', errorText);
    throw new Error(`Failed to fetch carbon data: ${carbonData.status}`);
  }

  const carbonRes = await carbonData.json()

  return (
    <>
      <h1 className="text-2xl text-center font-semibold text-cyan-300">Carbon Footrpint Tracker</h1>
      <div>
        {carbonRes}
      </div>
    </>
  );
}
