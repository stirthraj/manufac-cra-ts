
export default function Mean({data,type}:{data:any,type:string}){
    return <>
             <div className="flex">
     <div className="bold w200">{type} Mean</div>
     {data.map((me:number,index:number)=><div key={index} className="w200"> {me}</div>)}
     </div>
    </>
}