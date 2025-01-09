import ProductCard from "./components/Card/ProductCard";
import { colors, productlist } from "./components/data";
import { forminputlist } from "./components/data";
import { ChangeEvent, useState, FormEvent } from "react";
import Modal from "./components/ui/Modal";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import { IProduct } from "./components/interfaces";
import { ValidtionObj } from "./components/Validation";
import ErrorMassage from "./components/ui/ErrorMassage";
import Circlecolor from "./components/ui/Circlecolor";
import { v4 as uuidv4 } from "uuid";

function App() {
  const defaultprojectobj = {
    title: "",
    description: "",
    imageUrl: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageUrl: "",
    },
  };

  //------------State--------//
  const [products, setproducts] = useState<IProduct[]>(productlist);

  const [product, setproduct] = useState<IProduct>(defaultprojectobj);

  const [isOpen, setIsOpen] = useState(false);

  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageUrl: "",
    price: "",
  });

  const [tempcolor, setTempcolor] = useState<string[]>([]);

  //------------Handlers--------//

  const open = () => setIsOpen(true);

  const close = () => setIsOpen(false);

  const onchangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    setproduct({
      ...product,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const oncancel = () => {
    setproduct(defaultprojectobj);
    close();
  };

  const submitobject = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const { title, description, imageUrl, price } = product;

    const errors = ValidtionObj({ title, description, imageUrl, price });

    const hasErrorMsg =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");

    if (!hasErrorMsg) {
      setErrors(errors);
      return;
    }

    setproducts((prev) => [
      { ...product, id: uuidv4(), colors: tempcolor },
      ...prev,
    ]);
    setproduct(defaultprojectobj);
    setTempcolor([]);
    close();
  };

  //------------Rendars--------//

  const Rendarproductlist = products.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  const RendarsForminput = forminputlist.map((input) => (
    <div className="flex flex-col " key={input.id}>
      <label htmlFor="input" className="text-white mb-1">
        {input.label}
      </label>

      <Input
        type={input.type}
        name={input.name}
        id={input.id}
        value={product[input.name]}
        onChange={onchangeHandler}
      />

      <ErrorMassage msg={errors[input.name]} />
    </div>
  ));

  const RendarProductcolors = colors.map((color) => (
    <Circlecolor
      key={color}
      color={color}
      onClick={() => {
        if (tempcolor.includes(color)) {
          setTempcolor((prev) => prev.filter((item) => item !== color));
          return;
        }
        setTempcolor((prev) => [...prev, color]);
      }}
    />
  ));

  //------------Calls--------//

  return (
    <main className="container ">
      <Button className=" bg-red-700 " onClick={open}>
        Add
      </Button>

      <div className="p-8 grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3  xl:grid-cols-4  gap-3.5 ">
        {Rendarproductlist}
      </div>
      <Modal isOpen={isOpen} close={close} title="Add A NEW Product">
        <form className=" space-y-3" onSubmit={submitobject}>
          {RendarsForminput}
          <div className="flex items-center flex-wrap  space-x-2">
            {" "}
            {RendarProductcolors}
          </div>
          <div className="flex items-center flex-wrap space-x-2">
            {tempcolor.map((color) => (
              <span
                className="p-1 mr-1 mb-1 text-xs rounded-md text-white"
                style={{ backgroundColor: color }}
              >
                {color}
              </span>
            ))}
          </div>
          <div className="flex items-center  space-x-2">
            <Button className=" bg-red-700 text-white ">Submit</Button>
            <Button className=" bg-gray-700  text-white " onClick={oncancel}>
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
    </main>
  );
}

export default App;
