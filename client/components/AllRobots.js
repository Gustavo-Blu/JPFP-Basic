import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchRobotAsync,
  selectAllRobots,
} from '../store/features/Robot/allRobotSlice';

const AllRobots = (props) => {
  const dispatch = useDispatch();
  const robots = useSelector(selectAllRobots);

  useEffect(() => {
    dispatch(fetchRobotAsync());
  }, [dispatch]);

  return (
    <main>
      <section>
        {robots.map((robot) => (
          <div key={robot.id}>
            <div>{robot.name}</div>
            <div>{robot.fuelType}</div>
            <div>{robot.fuelLevel}</div>
            <div>{robot.imageUrl}</div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default AllRobots;
