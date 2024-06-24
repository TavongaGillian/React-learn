import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { MainLayout } from "./layouts/MainLayout";
import { PlacePages } from "./pages/PlacePages";
import { NotFoundPage } from "./pages/NotFoundPage";
import { PlacePage, placeLoader } from "./pages/PlacePage";
import { AddPlacePage } from "./pages/AddPlacePage";
import { EditPlacePAge } from "./pages/EditPlacePAge";
import { GalleryPage } from "./pages/GalleryPage";

const App = () => {
  const addPlace = async (newPlace) => {
    await fetch("/api/places", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlace),
    });
    return;
  };

  const deletePlace = async (id) => {
    await fetch(`/api/places/${id}`, {
      method: "DELETE",
      headers: {},
      body: JSON.stringify(id),
    });
    return;
  };
  const updatePlace = async (places) => {
    await fetch(`/api/places/${places.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(places),
    });
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/places' element={<PlacePages />} />
        <Route
          path='/add-place'
          element={<AddPlacePage addPlaceSubmit={addPlace} />}
        />
        <Route
          path='/places/:id'
          element={<PlacePage deletePlace={deletePlace} />}
          loader={placeLoader}
        />
        <Route
          path='/edit-places/:id'
          element={<EditPlacePAge updatePlaceSubmit={updatePlace} />}
          loader={placeLoader}
        />
        <Route path='/gallery' element={<GalleryPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
