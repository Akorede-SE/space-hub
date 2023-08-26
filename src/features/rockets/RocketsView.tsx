import {useEffect} from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hook';
import { getRockets, reserveRocket } from './rocketsSlice';

const RocketsView = () => {
  const dispatch = useAppDispatch();
  const {rockets, loading, error} = useAppSelector((state) => state.rockets)  
 

  const handleReserve = (id: string) => {
    dispatch(reserveRocket(id));
  }
  if (loading) {
    return <div>Loading ...</div>
  }
  if (error) {
    return <div>An error occur</div>
  }
  
  return (
    <main className='w-[90%] mx-auto py-4'>
      <ul className="grid gap-4">
        {
          rockets.map((rocket) => {
            const {name, id, description, flickr_images: images, reserved} = rocket;
            return (
                <li key={id} className="flex flex-col md:flex-row gap-6">
                  <img src={images[0]} 
                    alt=""
                    className="w-full md:w-[250px] object-cover"
                    />
                  <section className="flex flex-col items-start gap-3">
                    <h3 className="font-semibold text-2xl">{name}</h3>
                    <p className=" text-justify">
                      { reserved && <button 
                      className="bg-blue-700 
                      text-xs p-1 rounded-md
                      text-white mr-1">
                        Reserved
                      </button>}
                      {description}
                    </p>
                    <button type="button" className={`
                    ${reserved ? 'reserved' : 'not-reserved'} py-2 px-3 rounded-md capitalize`} onClick={() => handleReserve(id)}>{reserved ? 'cancel reservation': 'Reserve Rockets'}</button>
                  </section>
          </li>
            )
          })
        }
      </ul>
    </main>
  )
}

export default RocketsView