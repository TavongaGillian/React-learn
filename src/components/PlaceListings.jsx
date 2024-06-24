import { useState, useEffect } from "react";
import { Spinner } from "./Spinner";

import { PlaceListing } from "./PlaceListing";

export const PlaceListings = ({ isHome = false }) => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlaces = async () => {
      const apiUrl = isHome ? "/api/places?_limit=6" : "/api/places";
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setPlaces(data);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaces();
  }, []);

  return (
    <section className='bg-blue-50 px-4 py-10'>
      <div className='container-xl lg:container m-auto'>
        <h2 className='text-3xl font-bold text-blue-500 mb-6 text-center'>
          Browse Places
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {places.map((place) => (
              <PlaceListing key={place.id} place={place} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
