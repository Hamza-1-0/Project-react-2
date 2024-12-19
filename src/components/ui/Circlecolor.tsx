interface Iprops {
  color: string;
}

const Circlecolor = ({ color }: Iprops) => {
  return (
    <span
      className={`block   w-6 h-6 rounded-full mr-1 cursor-pointer `}
      style={{ backgroundColor: color }}
    />
  );
};

export default Circlecolor;
