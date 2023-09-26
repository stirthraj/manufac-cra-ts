
export default function Header({data}:any){
    return <>
             <div className="flex">
     <div className="bold w200">Measure</div>
        {data.map((hd:string,index:number)=><div key={index} className="bold w200">Class {hd}</div>)}

     </div>
    </>
}


