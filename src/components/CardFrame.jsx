const CardFrame = ({ children, className }) => {
    return (
      <div className={"bg-black/40 p-3 rounded-lg backdrop-blur-sm text-white shadow-black/40 shadow-lg max-h-fit flex " + className}>
        {children}
      </div>
    );
  }
  
  export default CardFrame;
  