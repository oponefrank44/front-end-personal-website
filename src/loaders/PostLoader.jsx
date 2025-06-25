

import axios from "axios";


export async function postLoader() {
  const respond = await axios.get("https://frankwebsite.onrender.com/posts");
  if (!respond) {
    throw new Error("An error occured")
  }
  const projects = respond.data.projects;
  
  return projects;
}

