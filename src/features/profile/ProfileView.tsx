import { useAppSelector } from "../../app/hook"

const ProfileView = () => {
  const reservedRockets = useAppSelector((state) => state.rockets
  .rockets
  .filter((rocket) => rocket.reserved));
  const reservedMissions = useAppSelector((state) => state.missions
  .missions
  .filter((mission) => mission.reserved));
  console.log(reservedMissions);
  
  return (
    <main className=" grid grid-cols-2 gap-4 w-[90%] mx-auto">
      <section className="w-full">
        <h2 className='py-2 font-semibold'>My Missions</h2>
        {reservedMissions.length > 0 ? <ul className=" border">
          {
            reservedMissions.map((mission) => {
              const { mission_name } = mission;
              return <li className="border-t p-2">{mission_name}</li> 
            })
          }
        </ul>
        : <p className="text-xl">No Mission joined yet</p>
        }
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