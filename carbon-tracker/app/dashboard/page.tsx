'use client'

import { use } from "react"
import SectorLookup from "../components/sectorLookup"
import { CarbonData, getSectorData } from "../lib/utils/getCarbonData"


export default function CarbonDataList() {
    const carbonList = use(CarbonData())
    const currentYearList = carbonList[0]

    const sectorList = getSectorData(0)

    return (
       <>
        <h1 className="text-2xl">Carbon Data Overview</h1>
        <div>
            <h2 className="text-xl">Activity Data: Per Industry</h2>
            <SectorLookup sectorList={sectorList} />
        </div>
       </> 
    );
}