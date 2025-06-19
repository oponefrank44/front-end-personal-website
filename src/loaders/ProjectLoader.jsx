import axios from "axios";


export async function projectLoader() {
  const respond = await axios.get("http://localhost:3000/home/projects");
  if (!respond) {
    throw new Error("An error occured")
  }
  const projects = respond.data.projects;
  
  return projects;
}
