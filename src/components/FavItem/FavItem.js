import './FavItem.css';
export const FavItem = ({ title, index }) => {
  return (
    <tr className="favRow">
      <td>{index} </td>

      <td>{title}</td>
    </tr>
  );
};
