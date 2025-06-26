import Testimonies from "./Testimony.js";
import classes from "./Testimoniepage.module.css";
import TestimonyComponent from "./TestimanyComponent";

function TestimoniesPage() {
  return (
    <div className={classes["testimony-page"]}>
      <h1 className={classes["testimony-head"]}> feedbacks</h1>
      {Testimonies.map((testimony) => (
        <div className={classes["testimony"]}>
          <TestimonyComponent
            src={testimony.src}
            job={testimony.job}
            name={testimony.name}
            review={testimony.review}
            key={testimony.id}
          />
        </div>
      ))}
    </div>
  );
}

export default TestimoniesPage;
