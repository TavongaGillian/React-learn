import { Link } from "react-router-dom";
import { Card } from "./Card";

export const HomeCards = () => {
  return (
    <section className='py-4'>
      <div className='container-xl lg:container m-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
          <Card>
            <h2 className='text-2xl font-bold'>Vacation Ideas</h2>
            <p className='mt-2 mb-4'>
              Browse our saved top tourist destinations in the world.
            </p>
            <Link
              to='/places'
              className='inline-block bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-gray-700'
            >
              Browse Places
            </Link>
          </Card>
          <Card>
            <h2 className='text-2xl font-bold'>Enjoyed your trip</h2>
            <p className='mt-2 mb-4'>
              Feel free to help us help others by adding beautiful spots that
              you have visited.
            </p>
            <Link
              to='/add-place'
              className='inline-block bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600'
            >
              Add Place
            </Link>
          </Card>
          <Card>
            <h2 className='text-2xl font-bold'>Gallery</h2>

            <Link
              to='/gallery'
              className='inline-block bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600'
            >
              View Photos
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
};

// export default HomeCards
