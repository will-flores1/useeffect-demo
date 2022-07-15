import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
	const [name, setName] = useState("");
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	// On every render
	useEffect(() => {
		console.log("I re-rendered");
	}, []);

	// On first render/Mount only! - componentdidMount alternative
	useEffect(() => {
		console.log("The component mounted");
	}, []);

	// On first Render + whenever dependacy changes! - componentDidUpdate alternative
	useEffect(() => {
		console.log(`The name changed! ${name}`);

		return () => {
			//clean-up...
			console.log("We unmounted!");
		};
	}, [name]);

	// FOllows the same rules, except this handles the unmounting on a component! - componentWillUnmount Alternative
	useEffect(() => {
		console.log("Attach listener");
		window.addEventListener("resize", updateWindowWidth);
	}, []);

	const updateWindowWidth = () => {
		setWindowWidth(window.innerWidth);
	};

	return (
		<div className="App">
			<center>
				<h1>The useEffect Hook</h1>
				<h2>The window width is: {windowWidth}</h2>

				<input
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder="Enter a name"
				/>
			</center>
		</div>
	);
}

export default App;
