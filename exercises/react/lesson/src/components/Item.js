/** @format */

function Item({data}) {
  return (
    <div>
      <span>
        The item: {data.item}
      </span>
      <div> The price: {data.price}</div>
      <br></br>
    </div>
  );
}

export default Item;
