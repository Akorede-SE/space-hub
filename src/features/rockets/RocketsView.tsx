import React from 'react'

const RocketsView = () => {
  return (
    <main className='w-[90%] mx-auto py-4'>
      <ul className="grid gap-4">
        <li className="flex flex-col md:flex-row gap-6">
          <div>
            <img src="https://imgur.com/DaCfMsj.jpg" 
            alt=""
            className="w-[full] object-cover"
             />
          </div>
          <section className="flex flex-col items-start gap-3">
            <h3 className="font-semibold text-2xl">Falcon 1</h3>
            <p className=" text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium delectus, vitae quo culpa iusto optio at quod odio dolor neque natus assumenda minus laborum omnis et aut exercitationem debitis, molestiae vero. Numquam  magni rerum? Expedita incidunt obcaecati temporibus consequuntur unde aperiam quaerat Velit, laborum modi.</p>
            <button type="button" className=" bg-blue-700 text-white py-2 px-3 rounded-md">Reserve Rockets</button>
          </section>
        </li>
      </ul>
    </main>
  )
}

export default RocketsView