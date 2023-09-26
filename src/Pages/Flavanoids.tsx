import Header from "../components/header"
import Mean from "../components/mean"
import Median from "../components/median"
import Mode from "../components/mode"
import data from "../winedata.json"
import { classWiseGroup, modeFn, sortedArray } from "../utils/utility"
export default function Flavanoids(){
    let format:{}=classWiseGroup(data,"Alcohol")
    let values=Object.values(format)
    let sortedAr=sortedArray(values,"Flavanoids")



    return <div className="grid p20">
    <Header data={Object.keys(format)}/>


     <Mean data={ sortedAr.map((row:[],ind:number)=>(row.reduce((pV:number,cI:{
        Flavanoids:number
     })=>pV+Number(cI.Flavanoids),0)/row.length).toFixed(3))} type={"Flavanoids"}/>

     
     <Median data={sortedAr.map((row:any)=>
      row.length%2===0?
      ((row[row.length/2-1].Flavanoids+row[Number(row.length/2)].Flavanoids)/2).toFixed(3):(row[Number((row.length-1)/2)].Flavanoids).toFixed(3)
     )}
     type={"Flavanoids"}
     />
     <Mode data={modeFn(values,"Flavanoids")} type={"Flavanoids"}/>
    </div>
}