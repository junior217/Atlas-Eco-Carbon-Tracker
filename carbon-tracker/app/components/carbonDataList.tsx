import { use } from "react"
import { CarbonData, getSectorData } from "../lib/utils/getCarbonData"

export default function CarbonDataList(){
    const carbonList = use(CarbonData())
    const currentYearList = carbonList[0]

    const sectorList = getSectorData(0)
    console.log(sectorList)
    

    console.log(typeof(carbonList))
    console.log(currentYearList)

    return (
      <div>
        {carbonList.map((data: any, index: number) => (<div key={index}></div>))}
      </div>
    );

}