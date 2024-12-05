import ProductCard from './components/Card/ProductCard'

function App() {
 

  return (
    <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  ">
     <ProductCard/>
     <ProductCard/>
     <ProductCard/>
     <ProductCard/>
    </div>

  )
}

export default App
