import Image from "../ImageCompon/Image";
import { IProduct } from "../interfaces";
import Button from "../ui/Button";
import Circlecolor from "../ui/Circlecolor";
import { lesstxt } from "../Utils/function";

interface Iprops {
  product: IProduct;
  setProductToEdit: (product: IProduct) => void;
  openModel: () => void;
  setproductToEditIdx(value: number): void;
  idx: number;
  openComfirmModel: () => void;
}

const ProductCard = ({
  product,
  setProductToEdit,
  openModel,
  idx,
  setproductToEditIdx,
  openComfirmModel,
}: Iprops) => {
  const { title, description, imageUrl, price, category, colors } = product;

  //------------Rendars--------//

  const RendarProductcolors = colors.map((color) => (
    <Circlecolor key={color} color={color} />
  ));

  //------------Handlers--------//
  const OnEdit = () => {
    setProductToEdit(product);
    openModel();
    setproductToEditIdx(idx);
  };
  const onRemove = () => {
    setProductToEdit(product);
    openComfirmModel();
  };
  return (
    <div className=" max-w-sm md:max-w-lg  mx-auto md:mx-0  border  flex flex-col rounded-lg p-2">
      <Image imageUrl={imageUrl} alt={"Prodact Name"} classname="rounded-lg" />

      <h3 className="text-lg font-semibold">{lesstxt(title, 25)}</h3>

      <p className="text-xs text-gray-600 break-words ">
        {lesstxt(description)}
      </p>
      <div className="flex items-center flex-wrap  space-x-2 mt-2">
        {RendarProductcolors}
      </div>

      <div className="flex  justify-between items-center my-4 space-x-2">
        <span className="text-lg  text-indigo-600 font-semibold">{price}</span>
        <Image
          imageUrl={category.imageUrl}
          alt={category.name}
          classname="w-12 h-12 rounded-full"
        />
      </div>

      <div className="flex items-center justify-between space-x-2 ">
        <Button
          className="border-red-700 bg-red-700  text-white  "
          onClick={OnEdit}
        >
          EDIT
        </Button>
        <Button
          className="border-blue-600 bg-slate-600  text-white"
          onClick={onRemove}
        >
          REMOVE
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
