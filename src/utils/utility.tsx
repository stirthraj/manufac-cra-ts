
export function classWiseGroup(data: any[], element: string): any {
  return data.reduce((a: any, b: any) => {
     a[b[element]] = a[b[element]] ? [...a[b[element]], b] : [b];
     return a;
  }, {});
}


  export function modeFn(values: any[], element: string): string[] {
    return values.map((m: any[]) => {
        let obj: { [key: string]: number } = {};
        m.map((ele: any) => obj[ele[element]] ? obj[ele[element]] = obj[ele[element]] + 1 : obj[ele[element]] = 1);
        return Number(Object.keys(obj)[Object.values(obj).indexOf(Math.max(...Object.values(obj)))]).toFixed(3);
    });
}

  export function sortedArray(values:any[],element:string){
    return values.map(value=>value.sort((a:any,b:any)=>a[element]-b[element])) 
  }


  export function addingKey(data:any[],element:string){
    return data.map(remElement=>{return {...remElement,[element]:Number((remElement.Ash*remElement.Hue/remElement.Magnesium).toFixed(3)) }})
       
  }
