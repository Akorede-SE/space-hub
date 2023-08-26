import { useEffect } from "react";
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import { useAppDispatch } from "./app/hook";
import { getRockets } from "./features/rockets/rocketsSlice";
import Layout from "./components/Layout";
import RocketsView from "./features/rockets/RocketsView";
import MissionsView from "./features/missions/MissionsView";
import ProfileView from "./features/profile/ProfileView";
import { getMissions } from "./features/missions/missionsSlice";

const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout />}>
    <Route index path="/" element={<RocketsView />}/>
    <Route path="missions" element={<MissionsView />}/>
    <Route path="profile" element={<ProfileView />}/>
  </Route>
))
function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
