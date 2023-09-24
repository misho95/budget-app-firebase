const Container = ({ children }) => {
  return (
    <div className="w-full h-screen bg-neutral-500 flex justify-center items-center">
      {children}
    </div>
  );
};

export default Container;
