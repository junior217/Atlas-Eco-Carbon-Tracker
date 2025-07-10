import Image from "next/image";

export default async function Home() {
  const carbonData =  await fetch('https://effective-cod-vwp7vvw5r47266pw-3000.app.github.dev/api/carbondata')
  
  const res = await carbonData.json()
  

  return (
    <>
     {res[0].sectors.map((cbData: any, index: any) => (
    <div key={index}>
      <p>Sector: {cbData.sector}</p>
      <p>Emissions: {cbData.emissions_mtco2} MtCO₂</p>
      <p>UnIT Emissions: {cbData.unit_emission}</p>
    </div>
  ))}
    </>
  );
}
