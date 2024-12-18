interface Iprops {
  imageUrl: string;
  alt: string;
  classname: string;
}

const Image = ({ imageUrl, alt, classname }: Iprops) => {
  return <img src={imageUrl} alt={alt} className={classname} />;
};

export default Image;
