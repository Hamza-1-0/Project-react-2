import ProductCard from './components/Card/ProductCard'
import { productlist } from './components/data'
import { useState } from 'react'
import Modal from './components/ui/Modal'
import Button from './components/ui/Button'

function App() {

//------------State--------//

const [isOpen, setIsOpen] = useState(false)

//------------Rendars--------//

function open() {
  setIsOpen(true)
}

function close() {
  setIsOpen(false)
}

//------------Rendars--------//

const Rendarproductlist =productlist.map(product => <ProductCard key={product.id} product={product}/> )  

  return (
    <main className="container ">
        <Button className=' bg-red-700 'onClick={open}>Add</Button>

       <Modal isOpen={isOpen}  close={close} title='Add A NEW Product'>
        <div className="flex items-center  space-x-2">
          <Button className=' bg-red-700 '>Submit</Button>
          <Button className=' bg-gray-700 '>Cancel</Button>
        </div>
      
       </Modal>
      <div className="p-8 grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3  xl:grid-cols-4  gap-3.5 ">
    {Rendarproductlist}
    </div>
</main>


    
  )
}

export default App
