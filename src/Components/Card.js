import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = ({ course, likeCourses, setLikeCourses }) => {
  if (!course) {
    return null;
  }

  const { id, image, title, description } = course;

  function changeHandler() {
    if (likeCourses.includes(id)) {
      setLikeCourses((prev) => prev.filter((cid) => cid !== id));
      toast.warning("Like Removed");
    } else {
      if (likeCourses.length === 0) {
        setLikeCourses([id]);
      } else {
        setLikeCourses((prev) => [...prev, id]);
      }
      toast.success("Liked successfully");
    }
  }

  return (
    <div className="w-[300px] bg-slate-800 flex flex-col overflow-hidden justify-center items-center rounded-xl text-white">
      <div className="relative">
        {/* Assuming image.url is a valid URL */}
        <img src={image.url} alt={title} />
        <div>
          <button
            onClick={changeHandler}
            className="w-[40px] bg-white absolute h-[40px] right-2 bottom-[-12px] rounded-full grid place-items-center"
          >
            {likeCourses.includes(id) ? (
              <FcLike fontSize="1.5rem" />
            ) : (
              <FcLikePlaceholder fontSize="1.5rem" />
            )}
          </button>
        </div>
      </div>
      <div className="p-4">
        <p className="font-semibold text-lg leading-6">{title}</p>
        <p className="mt-3">
          {description.length > 100
            ? description.substr(0, 100) + "  ... "
            : description}
        </p>
      </div>
    </div>
  );
};

export default Card;

