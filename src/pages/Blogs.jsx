import { useLoaderData } from "react-router-dom";
import BlogDesign from "./blogs/BlogDesign";
import BlogComponent from "./blogs/BlogComponent";
import classes from "./Blogs.module.css";
import Noprojects from "./projects/NoProjects";

export default function Blogs() {
  const Posts = useLoaderData();
  console.log(Posts);

  return (
    <div className={classes.blogpage}>
      <BlogDesign />
      {Posts && Posts.length > 0 ? (
        Posts.map((post) => (
          <BlogComponent
            key={post.title}
            title={post.title}
            content={post.content}
            crtdate={post.createdAt}
          />
        ))
      ) : (
        <Noprojects title="NO Post AVAILABLE" />
      )}
    </div>
  );
}
