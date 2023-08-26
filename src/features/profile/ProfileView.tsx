import { useAppSelector } from "../../app/hook"

const ProfileView = () => {
  const reservedRockets = useAppSelector((state) => state.rockets.
                                          rockets
                                          .filter((rocket) => rocket.reserved));
  console.log(reservedRockets);
  
  return (
    <main className=" grid grid-cols-2 gap-4 w-[90%] mx-auto">
      <section className="w-full">
        <h2 className='py-2 font-semibold'>My Missions</h2>
        <ul className=" border">
          <li className="border-t p-2">Teslar</li>
          <li className="border-t p-2">Teslar</li>
          <li className="border-t p-2">Teslar</li>
          <li className="border-t p-2">Teslar</li>
          <li className="border-t p-2">Teslar</li>
        </ul>
      </section>
      <section className="w-full">
        <h2 className='py-2 font-semibold'>My Rockets</h2>
        {reservedRockets.length > 0 ? <ul className=" border">
          {
            reservedRockets.map((rocket) => {
              const { name } = rocket;
              return <li className="border-t p-2">{name}</li> 
            })
          }
        </ul>
        : <p className="text-xl">No rocket reserved yet</p>
        }
      </section>
    </main>
  )
}

export default ProfileView