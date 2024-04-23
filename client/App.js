import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, useNavigate } from 'react-router-dom';
import {
  fetchRobotAsync,
  selectAllRobots,
} from './store/features/Robot/allRobotSlice';
import {
  fetchProjectAsync,
  selectAllProjects,
} from './store/features/Projects/allProjectSlice';
import Home from './components/Home';
import Navbar from './components/Navbar';
import AllRobots from './components/AllRobots';
import AllProjects from './components/AllProjects';

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const robots = useSelector(selectAllRobots);
  // const projects = useSelector(selectAllProjects);

  // useEffect(() => {
  //   dispatch(fetchRobotAsync());
  //   dispatch(fetchProjectAsync());
  // }, [dispatch]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/robots" element={<AllRobots />} />
        <Route path="/projects" element={<AllProjects />} />
      </Routes>
    </div>
  );
};

export default App;
