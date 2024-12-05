export interface IProduct {
    id?:number  ,
    title :string ,
    description :string,
    imageUrl:string,
    price: string,
    colors:string[],
    category :{
        name: string;
        imageUrl:string;
    };
}