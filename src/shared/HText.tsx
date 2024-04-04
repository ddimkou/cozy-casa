type Props = {
  children: React.ReactNode;
};

const HText = ({ children }: Props) => {
  return (
    <h1 className="text-2xl sm:text-3xl font-bold text-center sm:text-left">
      {children}
    </h1>
  );
};

export default HText;
