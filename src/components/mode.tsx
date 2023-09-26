
export default function Mode({data,type}:{data:any,type:string}){
    return <>
        <div className="flex">
     <div className="bold w200">{type} Mode</div>
     {data.map((md:number,index:number)=><div key={index} className="w200"> {md}</div>)}
  
      
     </div>
    </>
}