import { CarbonDataEntry } from "../carbon-data";
import Link from "next/link";

export default function CarbonPage({carbondata = [] }:{carbondata: CarbonDataEntry[]}){

    return (
        <div>
            {carbondata.map(emissions => (<div><p>{emissions.year}</p></div>))}
        </div>
    )
}