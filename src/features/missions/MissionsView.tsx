import React from 'react'

const MissionsView = () => {
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
         <tr>
          <th>Thaicom</th>
          <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque officia accusantium et placeat iusto maxime qui reiciendis, eos commodi odit magni, atque corporis, 
            omnis cum provident? Saepe nostrum namarchitecto!</td>
          <td>
            <button className=' bg-slate-500  p-1 rounded-md text-xs text-center whitespace-nowrap text-white'>NOT A MEMBER</button>
          </td>
          <td>
            <button className=" border w-[100%] border-slate-500 p-1">Join Mission</button>
          </td>
         </tr>
         <tr>
          <th>Thaicom</th>
          <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque officia accusantium et placeat iusto maxime qui reiciendis, eos commodi odit magni, atque corporis, 
            omnis cum provident? Saepe nostrum namarchitecto!</td>
          <td>
            <button className=' bg-blue-400  p-1 rounded-md text-xs text-center whitespace-nowrap text-white'>ACTIVE MEMBER</button>
          </td>
          <td>
            <button className=" border w-[100%] border-red-500 p-1 text-red-500">LeaveMission</button>
          </td>
         </tr>
        </tbody>
      </table>
    </main>
  )
}

export default MissionsView