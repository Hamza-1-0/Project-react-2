import Image from "../ImageCompon/image";


const ProductCard = () => {
  return( 
  <div className="border border-gray-600 flex flex-col rounded-md m-2  p-5">
<Image imageUrl="src\assets\Art Geek.jpeg" Alt={"Prodact Name"} Classname="rounded-s"/>

<h3 className="m-1">The product is very important</h3>

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit iusto, eum enim doloribus neque, doloremque deserunt nostrum omnis explicabo distinctio accusantium tenetur veritatis ut incidunt, tempora saepe. Voluptatem, nihil numquam!</p>

<div className="flex m-1">
<span className="bg-slate-950  w-6 h-6 rounded-full mr-1"  />
<span className="bg-gray-800  w-6 h-6 rounded-full mr-1"  />
<span className="bg-red-950  w-6 h-6 rounded-full mr-1"  />

</div>

<div className="flex  justify-between items-center my-4 space-x-2">
<span>500,00$</span>
<img src="src\assets\Art Geek.jpeg" alt=""  className="w-12 h-12 rounded-full"/>

</div>

<div className="flex justify-between gap-3 ">
<button className="border-red-700 bg-red-700  text-white p-4  rounded-xl flex-1 cursor-pointer ">EDIT</button>
<button className="border-blue-600 bg-slate-600  text-white p-4 rounded-xl flex-1 cursor-pointer">REMOVE</button>
</div>

  </div>
)};

export default  ProductCard;