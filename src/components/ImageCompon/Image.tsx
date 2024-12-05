
interface Iprops {
    imageUrl : string,
    Alt: string,
    Classname:string 
}

const Image = ({imageUrl ,Alt ,Classname}:Iprops) => {
  return <img src={imageUrl} alt={Alt} className={Classname} />;
};

export default  Image;