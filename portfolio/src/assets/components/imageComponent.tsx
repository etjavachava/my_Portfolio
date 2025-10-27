export interface ImageProp{
    src:string;
    width?:number|undefined
    height?:number|undefined
}
export  const Image=({src,width,height}:ImageProp)=>{
    return(
<img src={src} width={width} height={height}/>
    )

}