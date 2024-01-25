/** @format */

import { useState } from "react";
import "./App.css";
import Company from "./components/Company";
import Hot from "./components/Hot";
import Cold from "./components/Cold";
import Home from "./components/Home";
import Landing from "./components/Landing";

// function App() {
//   const showCompany = (name, revenue) => { }
//   let companies = [
//     { name: "Tesla", revenue: 140 },
//     { name: "Microsoft", revenue: 300 },
//     { name: "Google", revenue: 600 }
//   ]
//   return (
//     <div className="ex-space">
//       <h4 className='ex-title'>Exercise 1</h4>
//       <div className="exercise" id="ex-1">
//         {companies.map((c,index)=>  <div key={index}> {c.name} makes {c.revenue} every year! </div>)}
//       </div>
//     </div>
//   )
// }

//Exe2
// function App() {
// 	const getClassName = (temperature) => {
// 		if (temperature < 15) {
// 			return "freezing";
// 		}
// 		return temperature >= 15 && temperature < 30 ? " fair" : "hell-scape";
// 	};

// 	return (
// 		<div className="ex-space">
// 			<h4 className="ex-title">Exercise 2</h4>
// 			<div className="exercise" id="ex-2">
// 				{getClassName(1)}
// 			</div>
// 		</div>
// 	);
// }

// function AboutUs() {
// 	return <p>This is an example of an about us page~</p>;
// }

// function Nav() {
// 	return (
// 		<div id="nav">
// 			<span>Home</span>
// 			<span>About</span>
// 		</div>
// 	);
// }

// function LandingPage() {
// 	return <h1>Welcome!</h1>;
// }

// function About() {
// 	return (
// 		<div>
// 			<SignUp />
// 			<Blurb />
// 		</div>
// 	);
// }

// function SignUp() {
// 	return <div>its SignUp component</div>;
// }

// function Blurb() {
// 	return <div>its Blurb component</div>;
// }

// function App() {
	const companiesData =[
		{ name: "Tesla", revenue: 140 },
		{ name: "Microsoft", revenue: 300 },
		{ name: "Google", revenue: 600 }
  ]
//   let [companies, setCompanies] = useState(companiesData)

// 	localStorage["loggedIn"] = false;
// 	let isUserLoggedIn = localStorage.getItem("loggedIn");
// 	let componentToDisplay = isUserLoggedIn ? <LandingPage /> : <AboutUs />;

// 	return (
// 		<div className="app">
// 			<Nav />
// 			<About />
// 			<button className="testBtn">Test</button>
// 			{companiesData .map((c)=> <Company company={c} />)}
// 		</div>
// 	);
// }

// export default App;

function Calendar({ reservations }) {
  console.log(reservations.name);
  return (
    <div id="calendar">
      {reservations.name + " has a reservation on " + reservations.day}
    </div>
  );
}

function Register() {
  return <div id="register">{/* your code here */}</div>;
}

const App = () => {
  //   const [toggle, setToggle] = useState(false);
  //   const [count, setCount] = useState(0);

  //   const toggleBtn = () => {
  //     toggle == false ? setToggle(true) : setToggle(false);
  //   };
  //   const likeBtn = () => {
  //     setCount(count + 1);
  //     console.log(count);
  //   };

  const data = {
    user: "Robyn",
    store: [
      { item: "XSPS Pro Player", price: 800, discount: 0.2, hottest: false },
      { item: "Gizem Backwatch", price: 230, discount: 0.6, hottest: false },
      {
        item: "Surround Sound Pelican",
        price: 3099,
        discount: 0.05,
        hottest: true,
      },
    ],
    shouldDiscount: false,
    currentPage: "Landing",
  };
//   const [currentPage,setCurrentPage]=useState("Home")

//   const findHottest =function() {
//     let hottest = data.store[0].price;
//     for (let i = 1; i <= data.store.length-1; i++) {
//       hottest > data.store[i].price ? (hottest = hottest) : (hottest = data.store[i].price);
//     }
//     return hottest;
//   };
//   const handleSwich=()=>{
// 	currentPage === "Landing"? setCurrentPage("Home"): setCurrentPage("Landing")
//   }

  return (
    <div>
		{/* {currentPage === "Landing"?<Landing  name={data.user} hot={findHottest} />: <Home data={data} />}
      <button onClick={handleSwich}>Switch</button>
      <br></br> */}

	  <Company name={companiesData[0].name} />
     
    </div>
  );
};

export default App;
