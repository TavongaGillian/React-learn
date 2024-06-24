import { useParams, useLoaderData, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaMapMarker } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Northenlights from "../assets/images/northenlights.jpg";

export const PlacePage = ({ deletePlace }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const places = useLoaderData();

  const onDeleteClick = (placesId) => {
    const confirm = window.confirm("Are you sure you want to delete?");
    if (!confirm) return;

    deletePlace(placesId);

    toast.success("Place deleted successfully");
    navigate("/places");
  };

  return (
    <>
      <section>
        <div className='container m-auto py-6 px-6'>
          <Link
            to='/places'
            className='text-blue-500 hover:text-blue-600 flex items-center'
          >
            <FaArrowLeft className='mr-2' /> Back to Place Listings
          </Link>
        </div>
      </section>

      <section
        className='bg-cover '
        style={{ background: `url("${Northenlights}")` }}
      >
        <div className='container m-auto py-10 px-6'>
          <div className='grid grid-cols-1 md:grid-cols-70/30 w-full gap-6'>
            <main>
              <div className='bg-white p-6 rounded-lg shadow-md text-center md:text-left'>
                <div className='text-gray-500 mb-4'>{places.type}</div>
                <h1 className='text-3xl font-bold mb-4'>{places.title}</h1>
                <div className='text-gray-500 mb-4 flex align-middle justify-center md:justify-start'>
                  <FaMapMarker className='text-orange-700 mr-2'></FaMapMarker>
                  <p className='text-orange-700'>{places.location}</p>
                </div>
              </div>

              <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
                <h3 className='text-blue-800 text-lg font-bold mb-6'>
                  Place Description
                </h3>

                <p className='mb-4'>{places.bestActivities}</p>

                <h3 className='text-blue-800 text-lg font-bold mb-2'>Budget</h3>

                <p className='mb-4'>{places.budget}</p>
              </div>
            </main>

            <aside>
              <div className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-bold mb-6'>More Information</h3>

                <h2 className='text-2xl'>{places.region.name}</h2>

                <p className='my-2'>{places.region.description}</p>

                <hr className='my-4' />

                <h3 className='text-xl'>Contact Email:</h3>

                <p className='my-2 bg-blue-100 p-2 font-bold'>
                  {places.region.contactEmail}
                </p>

                <h3 className='text-xl'>Contact Phone:</h3>

                <p className='my-2 bg-blue-100 p-2 font-bold'>
                  {places.region.contactPhone}
                </p>
              </div>

              <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
                <h3 className='text-xl font-bold mb-6'>Manage Place</h3>
                <Link
                  to={`/edit-places/${places.id}`}
                  className='bg-blue-500 hover:bg-blue-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block'
                >
                  Edit Place
                </Link>
                <button
                  onClick={() => onDeleteClick(places.id)}
                  className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block'
                >
                  Delete Place
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export const placeLoader = async ({ params }) => {
  const res = await fetch(`/api/places/${params.id}`);
  const data = await res.json();
  return data;
};
// export { PlacePage as default, placeLoader };
