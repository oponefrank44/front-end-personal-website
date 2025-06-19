import { useLoaderData } from "react-router-dom";
import ProjectComponent from "./projects/ProjectComponent";
import classes from "./Project.module.css";
import Noprojects from "./projects/NoProjects";

function Projects() {
  const projects = useLoaderData();

  return (
    <div className={classes.projectPage}>
      <h1 className={classes.projectHeading}> Projects</h1>
      <div className={classes.project}>
       {
        projects && projects.length > 0 ? (
          projects.map((project) => (
            <ProjectComponent
              key={project.id}
              title={project.title}
              createdAt={project.createdAt}
              endDate={project.endDate}
              githubLink={project.githubLink}
              websiteLink={project.websiteLink}
              updatedAt={project.updatedAt}
              description={project.description}
            />
          ))
        ) : (
          <Noprojects title="NO PROJECT AVAILABLE"/>
        )
       }
      </div>
    </div>
  );
}

export default Projects;
