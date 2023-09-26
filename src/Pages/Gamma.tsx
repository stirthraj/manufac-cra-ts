import Header from "../components/header"
import Mean from "../components/mean"
import Median from "../components/median"
import Mode from "../components/mode"
import { addingKey, classWiseGroup, modeFn, sortedArray } from "../utils/utility"
import data from "../winedata.json"
export default function Gamma(){
let gammaData=addingKey(data,"Gamma")
let formatGamma=classWiseGroup(gammaData,"Alcohol")
let valuesGamma=Object.values(formatGamma)
let sortedArGamma=sortedArray(valuesGamma,"Gamma")


    return    <div className="grid p20">
    <Header data={Object.keys(formatGamma)}/>
     <Mean data={ sortedArGamma.map((row:[])=>(row.reduce((pV,cI:{Gamma:number})=>pV+Number(cI.Gamma),0)/row.length).toFixed(3))} type={"Gamma"}/>
     <Median data={sortedArGamma.map((row:[{Gamma:number}])=>
      row.length%2===0?
      ((row[row.length/2-1].Gamma+row[Number(row.length/2)].Gamma)/2).toFixed(3):(row[Number((row.length-1)/2)].Gamma).toFixed(3)
     )}
     type={"Gamma"}
     />
     <Mode data={modeFn(valuesGamma,"Gamma")} type={"Gamma"}/>
    </div>
}