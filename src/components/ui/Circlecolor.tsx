interface Iprops extends React.HTMLAttributes<HTMLSpanElement> {
  color: string;
}

const Circlecolor = ({ color, ...rest }: Iprops) => {
  return (
    <span
      className={`block  w-6 h-6 rounded-full mr-1 cursor-pointer `}
      style={{ backgroundColor: color }}
      {...rest}
    />
  );
};

export default Circlecolor;
