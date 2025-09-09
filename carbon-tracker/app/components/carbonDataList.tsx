'use client'

import { use } from "react"
import SectorLookup from "./sectorLookup"
import { CarbonData, getSectorData } from "../../lib/getCarbonData"




export default function CarbonDataList(){
    const carbonList = use(CarbonData())
    const currentYearList = carbonList[0]

    const sectorList = getSectorData(0)
    
    

    return (
       <>
        <h1 className="text-2xl">Hi</h1>
        <div>
            <h2 className="text-xl">Current Year Carbon Data</h2>
            <ul className="flex flex-col gap-2">
                {sectorList.map((data: any, index: any) => (
                    <li key={index}>
                        {data.sector}: {data.emissions_mtco2} tons
                    </li>
                ))}
            </ul>

            
        </div>
       </> 
    );

}