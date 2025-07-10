import { use } from 'react';

export async function CarbonData(){
    const carbonDataList = await fetch('http://localhost:3000/api/carbondata');
    const carbonList = await carbonDataList.json();

    return carbonList
}

export function getSectorData(index: number){
    
    const carbonList = use(CarbonData());
    const sectorList = carbonList[index].sectors;
    const sectorData = []

    for (let i = 0; i < sectorList.length; i++) {
        const sector = sectorList[i];
        sectorData.push(sector);
        
    }
    return sectorData;
    
    
    
}
