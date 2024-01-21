import "./App.css";

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

function AboutUs() {
	return <p>This is an example of an about us page~</p>;
}

function Nav() {
	return (
		<div id="nav">
			<span>Home</span>
			<span>About</span>
		</div>
	);
}

function LandingPage() {
	return <h1>Welcome!</h1>;
}

function About() {
	return (
		<div>
			<SignUp />
			<Blurb />
		</div>
	);
}

function SignUp() {
	return <div>its SignUp component</div>;
}

function Blurb() {
	return <div>its Blurb component</div>;
}

function App() {
	localStorage["loggedIn"] = false;
	let isUserLoggedIn = localStorage.getItem("loggedIn");
	let componentToDisplay = isUserLoggedIn ? <LandingPage /> : <AboutUs />;

	return (
		<div className="app">
			<Nav />
			<About />
		</div>
	);
}

export default App;
