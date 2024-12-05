import ProductCard from './components/Card/ProductCard'
import { productlist } from './components/data'

function App() {
//  Rendars
const Rendarproductlist =productlist.map(product => <ProductCard key={product.id} product={product}/> )  

  return (
    <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  ">
    {Rendarproductlist}
    </div>

  )
}

export default App
