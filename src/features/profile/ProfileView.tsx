import React from 'react'

const ProfileView = () => {
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
        <ul className=" border">
          <li className="border-t p-2">Teslar</li>
          <li className="border-t p-2">Teslar</li>
          <li className="border-t p-2">Teslar</li>
          <li className="border-t p-2">Teslar</li>
          <li className="border-t p-2">Teslar</li>
        </ul>
      </section>
    </main>
  )
}

export default ProfileView