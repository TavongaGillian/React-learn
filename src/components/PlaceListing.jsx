import { Link } from "react-router-dom";
import { useState } from "react";
import { FaMapMarker } from "react-icons/fa";

export const PlaceListing = ({ place }) => {
  const [showFullBestActivities, setShowFullBestActivities] = useState(false);

  let bestActivities = place.bestActivities;

  if (!showFullBestActivities) {
    bestActivities = bestActivities.substring(0, 100) + "...";
  }

  return (
    <div className='bg-yellow-400 rounded-xl shadow-md relative'>
      <div className='p-4'>
        <div className='mb-6'>
          <div className='text-gray-600 my-2'>{place.type}</div>
          <h3 className='text-xl font-bold'>{place.title}</h3>
        </div>
        <div className='mb-5'>{bestActivities}</div>
        <button
          onClick={() => setShowFullBestActivities((prevState) => !prevState)}
          className='text-blue-500 mb-5 hover:text-blue-600'
        >
          {showFullBestActivities ? "less" : "more"}
        </button>
        <h3 className='text-blue-500 mb-2'>{place.budget} </h3>
        <div className='border border-gray-100 mb-5'></div>
        <div className='flex flex-col lg:flex-row justify-between mb-4'>
          <div className='text-orange-700 mb-3'>
            <FaMapMarker className='inline text-lg mb-1 mr-1' />
            {place.location}
          </div>
          <Link
            to={`/places/${place.id}`}
            className='h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm'
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

// export default PlaceListing;
