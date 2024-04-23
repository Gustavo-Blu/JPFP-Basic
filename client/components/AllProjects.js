import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchProjectAsync,
  selectAllProjects,
} from '../store/features/Projects/allProjectSlice';

const AllProjects = (props) => {
  const dispatch = useDispatch();
  const projects = useSelector(selectAllProjects);

  useEffect(() => {
    dispatch(fetchProjectAsync());
  }, [dispatch]);

  return (
    <main>
      <section>
        {projects.map((project) => (
          <div key={project.id}>
            <div>{project.title}</div>
            <div>{project.deadline}</div>
            <div>{project.priority}</div>
            <div>{`${project.completed}`}</div>
            <div>{project.description}</div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default AllProjects;
