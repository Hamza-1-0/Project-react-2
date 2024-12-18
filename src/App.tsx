import ProductCard from './components/Card/ProductCard'
import { productlist } from './components/data'
import { forminputlist } from './components/data'
import { ChangeEvent, useState ,FormEvent } from 'react'
import Modal from './components/ui/Modal'
import Button from './components/ui/Button'
import Input from './components/ui/Input'
import { IProduct } from './components/interfaces'
import { ValidtionObj } from './components/Validation'

function App() {
const defaultprojectobj = {
title :'',
description:'',
imageUrl:'',
price:'',
colors :[],
category:{
  name:"",
  imageUrl:""
},
};



//------------State--------//

const [isOpen, setIsOpen] = useState(false)

const[product,setproduct] = useState<IProduct>(defaultprojectobj)

//------------Handlers--------//

const open = ()=> setIsOpen(true)

const close = ()=> setIsOpen(false)

const onchangeHandler = (event:ChangeEvent<HTMLInputElement>)=>{
  const {value , name} = event.target

  setproduct ({
    ...product,
    [name]:value,
  });
};

const oncancel = () => {
     setproduct(defaultprojectobj);
     close();
  };

  const submitobject = (event: FormEvent<HTMLFormElement>): void => {
   event.preventDefault();
const errors = ValidtionObj({title: product.title , description:product.description , imageUrl: product.imageUrl , price : product.price})

   console.log(errors);
  };
 
//------------Rendars--------//

const Rendarproductlist =productlist.map(product => <ProductCard key={product.id} product={product}/> )  

const RendarsForminput =forminputlist.map(input => 

<div className='flex flex-col' key={input.id}>

  <label htmlFor="input" className='text-white mb-1'>{input.label}</label>

<Input  type={input.type} name={input.name} id={input.id} value={product[input.name]} onChange={onchangeHandler}/>

</div> )
 


                //------------Calls--------//


  return (
    <main className="container ">
        <Button className=' bg-red-700 'onClick={open}>Add</Button>

    <div className="p-8 grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3  xl:grid-cols-4  gap-3.5 ">
       {Rendarproductlist}
    </div>
       <Modal isOpen={isOpen}  close={close} title='Add A NEW Product'>
        <form className=" space-y-3" onSubmit={submitobject}> 
          {RendarsForminput}

        <div className="flex items-center  space-x-2">
          <Button className=' bg-red-700 text-white '>Submit</Button>
          <Button className=' bg-gray-700  text-white ' onClick={oncancel}>Cancel</Button>
        </div>

        </form>      
       </Modal>
      
</main>


    
  )
}

export default App
