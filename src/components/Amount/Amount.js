export const Amount = ({ amount, onChange }) => {
  const handlePlus = () => {
    onChange(amount + 1);
  };
  const handleMinus = () => {
    onChange(amount - 1);
  };
  return (
    <div>
      <button onClick={handlePlus}>+</button> <span>{amount}</span>{' '}
      <button onClick={handleMinus}>-</button>
    </div>
  );
};
