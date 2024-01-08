import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import { apiUrl, filterData } from "./data";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import Card from "./Components/Card";

import { toast } from "react-toastify";

import Spinner from "./Components/Spinner";

const App = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        if (!res.ok) {
          throw new Error(`Failed to fetch data. Status: ${res.status}`);
        }

        const output = await res.json();
        setCourses(output.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("Something went wrong while fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="flex flex-col  bg-slate-700">
      <div>
        <Navbar />
      </div>
      <div className=" bg-slate-700">
        <div>
          <Filter filterData={filterData} category={category} setCategory={setCategory} />
        </div>
        <div className="flex item-center flex-wrap mx-auto w-11/12 justify-center max-w-[1200px] min-h-[30vh]">
          {courses ? (
            <div>
              <Cards courses={courses} category={category} />
              {/* Depending on your logic, you might not need the Card component here */}
            </div>
          ) : (
            <div>No courses available</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
