
export default function Median({data,type}:{data:any,type:string}){
    return <>
             <div className="flex">
     <div className="bold w200">{type} Median</div>

        {data.map((med:number,index:number)=><div key={index} className="w200">{med}</div>)}

     </div>
    </>
}