/** @format */

import Item from "./Item";

function Home({ data }) {
  return (
    <div>
      {data.store.map((d, index) => {
        return <Item key={index} data={d} />;
      })}
    </div>
  );
}

export default Home;
