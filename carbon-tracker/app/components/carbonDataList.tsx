import { use } from "react"
import { CarbonData, getSectorData } from "../lib/utils/getCarbonData"

const getActivities = (sectorIndex: number) => {
    const carbonList = use(CarbonData())
    const currentYearList = carbonList[0]
    const sectorList = getSectorData(sectorIndex)

    if (!sectorList || !sectorList[0]) {
        return [];
    }

    var activities = [];

    for(let i = 0; i > sectorList[sectorIndex].length; i++){
      const activity = sectorList[sectorIndex].activties[i] 
      activities.push(activity) 
    }

    return activities;
}

export default function CarbonDataList(){
    const carbonList = use(CarbonData())
    const currentYearList = carbonList[0]

    const sectorList = getSectorData(0)
    const activitiesList = getActivities(0)
    console.log(activitiesList)
    

    console.log(typeof(carbonList))
    console.log(currentYearList)

    return (
       <>
        <h1 className="text-2xl">Hi</h1>
       </> 
    );

}