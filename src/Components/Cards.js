import React, { useState } from "react";
import Card from "./Card"; // Make sure to import the Card component

const Cards = ({ courses, category }) => {
  const [likeCourses, setLikeCourses] = useState([]);

  function getCourses() {
    let allCourses = [];

    if (category === "All") {
      Object.values(courses).forEach((coursesCategory) => {
        coursesCategory.forEach((course) => {
          allCourses.push(course);
        });
      });
      return allCourses;
    } else {
      return courses[category];
    }
  }

  return (
    <div className="flex flex-wrap justify-center gap-5 mb-3">
      {getCourses().map((course) => (
        <Card
          key={course.id}
          course={course}
          likeCourses={likeCourses}
          setLikeCourses={setLikeCourses}
        />
      ))}
    </div>
  );
};

export default Cards;
