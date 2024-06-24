import { Link } from "react-router-dom";

export const ViewAllPlaces = () => {
  return (
    <section className=' m-auto max-w-lg my-10 px-6'>
      <Link
        to='places'
        className='block bg-blue-600 text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700'
      >
        View All Places
      </Link>
    </section>
  );
};

// export default ViewAllPlaces
