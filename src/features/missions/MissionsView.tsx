import {useEffect} from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hook'
import { getMissions, reserveMission } from './missionsSlice';

const MissionsView = () => {
  const dispatch = useAppDispatch();
  const {loading, missions, error} = useAppSelector((state) => state.missions);
  useEffect(() => {
    dispatch(getMissions());
  }, [])
  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>An errror occur</div>
  }
  const handleReserve = (id: string) => {        
    dispatch(reserveMission(id))
  }
  return (
    <main className="w-[90%] mx-auto mt-10">
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th className=" align-top w-[15%]"></th>
          </tr>
        </thead>
        <tbody>
          {
            missions.map((mission) => {
              const { mission_id: id, mission_name: name, description, reserved } = mission;
              return (
                <tr key={id}>
                <th>{name}</th>
                <td className=" text-sm">{description}</td>
                <td>
                  <button className={`${reserved && 'active--btn'} bg-slate-500 p-1 rounded-md text-xs text-center whitespace-nowrap text-white  uppercase`}>{reserved ? 'active member' : 'not a member'}</button>
                </td>
                <td>
                  <button 
                  className={`${reserved && 'leave--mission'} border w-[100%] border-slate-500 text-slate-700  p-1 capitalize`}
                  onClick={() => handleReserve(id)}
                  >{reserved ? 'leave mission' : 'join mission'}</button>
                </td>
               </tr>
              )
            })
          }   
        </tbody>
      </table>
    </main>
  )
}

export default MissionsView