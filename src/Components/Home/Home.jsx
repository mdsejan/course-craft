import { useState } from "react";
import { useEffect } from "react";
import Cart from "../Cart/Cart";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [allCourses, setAllCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [remaining, setRemaining] = useState([]);
  const [totalCredit, setTotalCredit] = useState([]);
  const [totalPrice, setTotalPrice] = useState([]);

  useEffect(() => {
    fetch("./Courses.json")
      .then((res) => res.json())
      .then((data) => setAllCourses(data));
  }, []);

  const handleSelectCourse = (course) => {
    const isExist = selectedCourse.find((item) => item.id == course.id);

    let creditCount = course.credit;
    let countPrice = course.price;

    if (isExist) {
      toast.error("Alredy Added this Course", {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      selectedCourse.forEach((item) => {
        creditCount += item.credit;
      });
      const creditRemaining = 20 - creditCount;

      selectedCourse.forEach((item) => {
        countPrice += item.price;
      });

      if (creditCount > 20) {
        return toast.error("Insufficent Credit", {
          position: "bottom-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        setTotalCredit(creditCount);
        setTotalPrice(countPrice);
        setRemaining(creditRemaining);
        setSelectedCourse([...selectedCourse, course]);
      }
    }
  };

  return (
    <div className="max-w-screen-2xl mx-auto pt-16 pb-36">
      <div className=" grid grid-cols-1 xl:grid-cols-3 gap-4 px-6 xl:ml-6">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 col-span-2 order-2 xl:order-1">
          {allCourses.map((course) => (
            <div key={course.id} className="card bg-base-100 shadow-md">
              <figure className="px-5 pt-5">
                <img
                  src={course.image}
                  alt="Shoes"
                  className="rounded-md w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="font-semibold">{course.title} </h2>
                <p>{course.description} </p>
                <div className="grid grid-cols-2 gap-4 font-semibold text-[#1C1B1B99] mt-4">
                  <div>
                    <h3>
                      $ <span>Price: {course.price}</span>
                    </h3>
                  </div>
                  <div className="flex justify-center items-center">
                    <span>
                      <img
                        className="w-4 h-4"
                        src="https://i.ibb.co/p2Y2qpF/Frame.png"
                      />
                    </span>
                    <span>&nbsp; Credit: {course.credit}hr</span>
                  </div>
                </div>
                <button
                  onClick={() => handleSelectCourse(course)}
                  className="btn w-full bg-[#2F80ED] hover:bg-black text-white mt-5"
                >
                  Select
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="col-span-1 lg:mx-8 order-1 xl:order-2">
          <Cart
            selectedCourse={selectedCourse}
            remaining={remaining}
            totalCredit={totalCredit}
            totalPrice={totalPrice}
          ></Cart>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Home;
