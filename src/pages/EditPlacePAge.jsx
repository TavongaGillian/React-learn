import { useParams, useLoaderData, useNavigate } from "react-router-dom";
import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";

export const EditPlacePAge = ({ updatePlaceSubmit }) => {
  const places = useLoaderData();

  const [title, setTitle] = useState(places.title);
  const [type, setType] = useState(places.type);
  const [location, setLocation] = useState(places.location);
  const [description, setDescription] = useState(places.description);
  const [budget, setSalary] = useState(places.budget);
  const [regionName, setregionName] = useState(places.region.name);
  const [regionDescription, setregionDescription] = useState(
    places.region.description
  );
  const [contactEmail, setContactEmail] = useState(places.region.contactEmail);
  const [contactPhone, setContactPhone] = useState(places.contactPhone);

  const navigate = useNavigate();
  const { id } = useParams();

  const submitForm = (event) => {
    event.preventDefault();

    const updatedPlace = {
      id,
      title,
      type,
      location,
      description,
      budget,
      region: {
        name: regionName,
        description: regionDescription,
        contactEmail,
        contactPhone,
      },
    };
    updatePlaceSubmit(updatedPlace);

    toast.success("Place updated successfully");

    return navigate(`/places/${id}`);
  };

  return (
    <section className='bg-blue-50'>
      <div className='container m-auto max-w-2xl py-24'>
        <div className='bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0'>
          <form onSubmit={submitForm}>
            <h2 className='text-3xl text-center font-semibold mb-6'>
              Update J ob
            </h2>

            <div className='mb-4'>
              <label
                htmlFor='type'
                className='block text-gray-700 font-bold mb-2'
              >
                Place Type
              </label>
              <select
                id='type'
                name='type'
                className='border rounded w-full py-2 px-3'
                required
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value='Full-Time'>Full-Time</option>
                <option value='Part-Time'>Part-Time</option>
                <option value='Remote'>Remote</option>
                <option value='Internship'>Internship</option>
              </select>
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Place Listing Name
              </label>
              <input
                type='text'
                id='title'
                name='title'
                className='border rounded w-full py-2 px-3 mb-2'
                placeholder='eg. Beautiful Apartment In Miami'
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className='mb-4'>
              <label
                htmlFor='description'
                className='block text-gray-700 font-bold mb-2'
              >
                Description
              </label>
              <textarea
                id='description'
                name='description'
                className='border rounded w-full py-2 px-3'
                rows='4'
                placeholder='Add any place duties, expectations, requirements, etc'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div className='mb-4'>
              <label
                htmlFor='type'
                className='block text-gray-700 font-bold mb-2'
              >
                Salary
              </label>
              <select
                id='budget'
                name='budget'
                className='border rounded w-full py-2 px-3'
                required
                value={budget}
                onChange={(e) => setSalary(e.target.value)}
              >
                <option value='Under $50K'>Under $50K</option>
                <option value='$50K - 60K'>$50K - $60K</option>
                <option value='$60K - 70K'>$60K - $70K</option>
                <option value='$70K - 80K'>$70K - $80K</option>
                <option value='$80K - 90K'>$80K - $90K</option>
                <option value='$90K - 100K'>$90K - $100K</option>
                <option value='$100K - 125K'>$100K - $125K</option>
                <option value='$125K - 150K'>$125K - $150K</option>
                <option value='$150K - 175K'>$150K - $175K</option>
                <option value='$175K - 200K'>$175K - $200K</option>
                <option value='Over $200K'>Over $200K</option>
              </select>
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Location
              </label>
              <input
                type='text'
                id='location'
                name='location'
                className='border rounded w-full py-2 px-3 mb-2'
                placeholder='region Location'
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <h3 className='text-2xl mb-5'>region Info</h3>

            <div className='mb-4'>
              <label
                htmlFor='region'
                className='block text-gray-700 font-bold mb-2'
              >
                region Name
              </label>
              <input
                type='text'
                id='region'
                name='region'
                className='border rounded w-full py-2 px-3'
                placeholder='region Name'
                value={regionName}
                onChange={(e) => setregionName(e.target.value)}
              />
            </div>

            <div className='mb-4'>
              <label
                htmlFor='region_description'
                className='block text-gray-700 font-bold mb-2'
              >
                region Description
              </label>
              <textarea
                id='region_description'
                name='region_description'
                className='border rounded w-full py-2 px-3'
                rows='4'
                placeholder='What does your region do?'
                value={regionDescription}
                onChange={(e) => setregionDescription(e.target.value)}
              ></textarea>
            </div>

            <div className='mb-4'>
              <label
                htmlFor='contact_email'
                className='block text-gray-700 font-bold mb-2'
              >
                Contact Email
              </label>
              <input
                type='email'
                id='contact_email'
                name='contact_email'
                className='border rounded w-full py-2 px-3'
                placeholder='Email address for applicants'
                required
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
              />
            </div>
            <div className='mb-4'>
              <label
                htmlFor='contact_phone'
                className='block text-gray-700 font-bold mb-2'
              >
                Contact Phone
              </label>
              <input
                type='tel'
                id='contact_phone'
                name='contact_phone'
                className='border rounded w-full py-2 px-3'
                placeholder='Optional phone for applicants'
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
              />
            </div>

            <div>
              <button
                className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline'
                type='submit'
              >
                Update Place
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
