import {useEffect} from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hook';
import { getRockets } from './rocketsSlice';

const RocketsView = () => {
  const dispatch = useAppDispatch();
  const {rockets, loading, error} = useAppSelector((state) => state.rockets)  
  useEffect(() => {
    dispatch(getRockets());
  }, [])

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
            const {name, id, description, flickr_images: images} = rocket;
            return (
                <li key={id} className="flex flex-col md:flex-row gap-6">
                  <img src={images[0]} 
                    alt=""
                    className="w-full md:w-[250px] object-cover"
                    />
                  <section className="flex flex-col items-start gap-3">
                    <h3 className="font-semibold text-2xl">{name}</h3>
                    <p className=" text-justify">{description}</p>
                    <button type="button" className=" bg-blue-700 text-white py-2 px-3 rounded-md">Reserve Rockets</button>
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