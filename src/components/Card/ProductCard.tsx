import Image from "../ImageCompon/Image";
import { IProduct } from "../interfaces";
import Button from "../ui/Button";
import { lesstxt } from "../Utils/function";

interface Iprops{
  product: IProduct;
}

const ProductCard = ({product}:Iprops) => {
  const{ title , description , imageUrl,price ,category}= product
    return( 
  <div className=" max-w-sm md:max-w-lg  mx-auto md:mx-0  border  flex flex-col rounded-lg p-2">

<Image imageUrl={imageUrl} alt={"Prodact Name"} classname="rounded-lg"/>

<h3 >{title}</h3>

<p>{lesstxt(description)}</p>
<div className="flex m-1">
<span className="bg-slate-950  w-6 h-6 rounded-full mr-1 cursor-pointer"  />
<span className="bg-gray-800  w-6 h-6 rounded-full mr-1 cursor-pointer"  />
<span className="bg-red-950  w-6 h-6 rounded-full mr-1 cursor-pointer"  />

</div>

<div className="flex  justify-between items-center my-4 space-x-2">
<span>{price}</span>
<Image imageUrl={category.imageUrl} alt={category.name} classname="w-12 h-12 rounded-full"/>

</div>

<div className="flex justify-between gap-2 ">
<Button className="border-red-700 bg-red-700  text-white ">EDIT</Button>
<Button className="border-blue-600 bg-slate-600  text-white">REMOVE</Button>
</div>

  </div>
)};

export default  ProductCard;