import ProductCard from './components/Card/ProductCard'
import { productlist } from './components/data'

function App() {
//  Rendars
const Rendarproductlist =productlist.map(product => <ProductCard key={product.id} product={product}/> )  

  return (
    <main className="container ">
      <div className="p-8 grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3  xl:grid-cols-4  gap-3.5 ">
    {Rendarproductlist}
    </div>
</main>
    
  )
}

export default App
