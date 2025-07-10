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
      <p>UnIT Emissions:  {cbData.activities.map((activity: any, i: any) => <div key={i}> <p>Activiy: {activity.activity}</p> <p>Activity Emissions: {activity.emissions_mtco2}</p> <p>Activiy Unit Emissions: {activity.unit_emission['unit']}  Unit Emission Value: {activity.unit_emission['value_kgco2']}</p></div> )}</p>
    </div>
  ))}
    </>
  );
}
