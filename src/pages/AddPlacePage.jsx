import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AddPlacePage = ({ addPlaceSubmit }) => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [bestActivities, setbestActivities] = useState("");
  const [budget, setSalary] = useState("");
  const [regionName, setregionName] = useState("");
  const [regionDescription, setregionDescription] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();

    console.log("submit button clicked");

    const newPlace = {
      title,
      type,
      location,
      bestActivities,
      budget,
      region: {
        description: regionDescription,
        contactEmail,
        contactPhone,
      },
    };
    addPlaceSubmit(newPlace);

    toast.success("Place added successfully");

    return navigate("/places");
  };

  return (
    <>
      <section className='bg-blue-50'>
        <div className='container m-auto max-w-2xl py-24'>
          <div className='bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0'>
            <form onSubmit={submitForm}>
              <h2 className='text-3xl text-center font-semibold mb-6'>
                Add Place
              </h2>

              <div className='mb-4'>
                <label
                  htmlFor='type'
                  className='block text-gray-700 font-bold mb-2'
                >
                  Best Season
                </label>
                <select
                  id='type'
                  name='type'
                  className='border rounded w-full py-2 px-3'
                  required
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value='All year round'>All year round</option>
                  <option value='Summer'>Summer</option>
                  <option value='Winter'>Winter</option>
                  <option value='Spring'>Spring</option>
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
                  placeholder="eg. Earth's highest mountain above sea level "
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
                  Best Activities
                </label>
                <textarea
                  id='bestActivities'
                  name='bestActivities'
                  className='border rounded w-full py-2 px-3'
                  rows='4'
                  placeholder='Add any activities eg swimming, golf, etc'
                  value={bestActivities}
                  onChange={(e) => setbestActivities(e.target.value)}
                ></textarea>
              </div>

              <div className='mb-4'>
                <label
                  htmlFor='type'
                  className='block text-gray-700 font-bold mb-2'
                >
                  Budget
                </label>
                <select
                  id='budget'
                  name='budget'
                  className='border rounded w-full py-2 px-3'
                  required
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                >
                  <option value='Under $5K'>Under $5K</option>
                  <option value='$5K - 6K'>$5K - $6K</option>
                  <option value='$6K - 7K'>$6K - $7K</option>
                  <option value='$7K - 80K'>$7K - $8K</option>
                  <option value='$8K - 90K'>$8K - $9K</option>
                  <option value='$9K - 100K'>$9K - $10K</option>
                  <option value='$10K - 12K'>$10K - $12K</option>
                  <option value='$12K - 15K'>$12K - $15K</option>
                  <option value='$15K - 17K'>$15K - $17K</option>
                  <option value='$17K - 20K'>$17K - $20K</option>
                  <option value='Over $20K'>Over $20K</option>
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
                  placeholder='City, Country'
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>

              <h3 className='text-2xl mb-5'>More Information</h3>

              <div className='mb-4'>
                <label
                  htmlFor='region_description'
                  className='block text-gray-700 font-bold mb-2'
                >
                  Region Description
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
                  placeholder='Email address '
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
                  placeholder='Phone number'
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                />
              </div>

              <div>
                <button
                  className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline'
                  type='submit'
                >
                  Add Place
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
