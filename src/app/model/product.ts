export class Product {
 
  public desc:String='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, temporibus!';
   
   constructor (
    public name:string,
    public image:string,
    public price:number,
    public stock:number,
    public isOnSale:boolean
  ){
 
  }

}