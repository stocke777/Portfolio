import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";
import {AnimatePresence} from 'framer-motion'
const AnimatedRoutes = () => {
	const location= useLocation()
	return (
		<>
			<Navbar />
			<AnimatePresence>
			<Routes location={location} key={location.pathname}>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/projects'
					element={<Projects />}
				/>
				<Route
					path='/project/:id'
					element={<ProjectDisplay />}
				/>
				<Route
					path='/experience'
					element={<Experience />}
				/>
			</Routes>
			</AnimatePresence>
			<Footer />
		</>
	);
};

export default AnimatedRoutes;
