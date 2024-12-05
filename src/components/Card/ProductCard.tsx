import Image from "../ImageCompon/Image";
import Button from "../ui/Button";

const ProductCard = () => {
  return( 
  <div className="border border-gray-600 flex flex-col rounded-md m-3  p-5">

<Image imageUrl="src\assets\Art Geek.jpeg" alt={"Prodact Name"} classname="rounded-s"/>

<h3 className="m-1">The product is very important</h3>

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit iusto, eum enim doloribus neque, doloremque deserunt nostrum omnis explicabo distinctio accusantium tenetur veritatis ut incidunt, tempora saepe. Voluptatem, nihil numquam!</p>

<div className="flex m-1">
<span className="bg-slate-950  w-6 h-6 rounded-full mr-1 cursor-pointer"  />
<span className="bg-gray-800  w-6 h-6 rounded-full mr-1 cursor-pointer"  />
<span className="bg-red-950  w-6 h-6 rounded-full mr-1 cursor-pointer"  />

</div>

<div className="flex  justify-between items-center my-4 space-x-2">
<span>500,00$</span>
<Image imageUrl="src\assets\Art Geek.jpeg" alt={"Prodact Name"} classname="w-12 h-12 rounded-full"/>

</div>

<div className="flex justify-between gap-2 ">
<Button className="border-red-700 bg-red-700  text-white ">EDIT</Button>
<Button className="border-blue-600 bg-slate-600  text-white">REMOVE</Button>
</div>

  </div>
)};

export default  ProductCard;