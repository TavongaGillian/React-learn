import Northenlights from "../assets/images/northenlights.jpg";
import Holiday from "../assets/images/holiday.jpg";
import Vacation from "../assets/images/vacation.jpg";
import React from "react";

export const GalleryPage = () => {
  return (
    <>
      <div className='p-10'>
        <div
          className=' m-10  h-96 w-auto  object-center '
          style={{ background: `url("${Vacation}")` }}
        ></div>
        <div
          className=' m-10 h-96 w-auto rounded-full  object-center
          '
          style={{ background: `url("${Holiday}")` }}
        ></div>
        <div
          className=' m-10  h-96 w-auto  object-center '
          style={{ background: `url("${Northenlights}")` }}
        ></div>
      </div>
    </>
  );
};
