import { useEffect } from "react";
import { useAppDispatch } from "./app/hook";
import { getRockets } from "./features/rockets/rocketsSlice";
function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getRockets());
  }, [])
  return (
    <>
    </>
  )
}

export default App
