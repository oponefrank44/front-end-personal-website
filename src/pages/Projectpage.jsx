import { useLoaderData } from "react-router-dom";
import ProjectComponent from "./projects/ProjectComponent";
import classes from "./Project.module.css";
import Noprojects from "./projects/NoProjects";
import { useEffect, useState } from "react";
import LoadingSpin from "./loadingspinner/loadingSpin";

function Projects() {
  const data = useLoaderData();
  const [projects, setProject] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setProject(data);
    setLoading(false);
  }, [data]);

  const ProjectArray =
    projects && projects.length > 0 ? (
      <div className={classes.project}>
        {projects.map((project) => (
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
        ))}
      </div>
    ) : (
      <Noprojects title="NO PROJECT AVAILABLE" />
    );

  return (
    <div className={classes.projectPage}>
      <h1 className={classes.projectHeading}> Projects</h1>
     
      {loading ? <LoadingSpin /> : ProjectArray}
    </div>
  );
}

export default Projects;
