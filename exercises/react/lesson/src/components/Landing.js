/** @format */

function Landing({ name, hot }) {
  return (
    <>
      <div>Welcome {name}</div>
      <div>The Hottest Item : {hot()}</div>
    </>
  );
}

export default Landing;
