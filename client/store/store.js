import { configureStore } from '@reduxjs/toolkit';
import allRobotsReducer from './features/Robot/allRobotSlice';
import singleRobotReducer from './features/Robot/singleRobotSlice';

import allProjectReducer from './features/Projects/allProjectSlice';
import singleProjectReducer from './features/Projects/singleProjectSlice';

export const store = configureStore({
  reducer: {
    AllRobots: allRobotsReducer,
    SingleRobot: singleRobotReducer,

    AllProjects: allProjectReducer,
    SingleProject: singleProjectReducer,
  },
});
