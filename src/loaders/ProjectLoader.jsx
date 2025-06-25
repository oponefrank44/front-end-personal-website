import axios from "axios";


export async function projectLoader() {
  const respond = await axios.get("https://frankwebsite.onrender.com/projects");
  if (!respond) {
    throw new Error("An error occured")
  }
  const projects = respond.data.projects;
  
  return projects;
}
