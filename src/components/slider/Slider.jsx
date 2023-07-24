import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { dotSlide, nextSlide, prevSlide } from "../../slice/sliderSlice";
import { sliderData } from "../../assets/data/dummyData";

const Slider = () => {
  const slideIndex = useSelector((state) => state.slider.value);
  console.log(slideIndex);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="relative pb-0">
        <div>
          {sliderData.map((item, index) => {
            return (
              <div
                key={item.id}
                className={
                  parseInt(item.id) === slideIndex
                    ? "opacity-100 duration-700 ease-in-out scale-100"
                    : "opacity-0 duration-700 ease-in-out scale-95 "
                }
              >
                <div>
                  {parseInt(item.id) === slideIndex && (
                    <img
                      className="h-[800px] w-full"
                      src={item.img}
                      alt="shoes"
                    />
                  )}
                </div>
                <div className="absolute top-44 mx-auto inset-x-1/4">
                  <p className="text-white text-4xl font-bold tracking-normal leading-none">
                    {parseInt(item.id) === slideIndex && item.text}
                  </p>
                </div>
              </div>
            );
          })}
          <div className="flex absolute bottom-12 left-[45%]">
            {sliderData.map((dot, index) => {
              return (
                <div className="mr-4" key={index}>
                  <div
                    className={
                      index === slideIndex
                        ? "bg-green-400 rounded-full p-4 cursor-pointer"
                        : "bg-white rounded-full p-4 cursor-pointer"
                    }
                    onClick={() => dispatch(dotSlide(index))}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <button
        className="absolute top-[70%] right-4 rounded-full bg-white p-2 hover:bg-green-300"
        onClick={() => dispatch(nextSlide(slideIndex + 1))}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
      <button
        className="absolute top-[70%] left-4 rounded-full bg-white p-2 hover:bg-green-300"
        onClick={() => dispatch(prevSlide(slideIndex - 1))}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default Slider;
