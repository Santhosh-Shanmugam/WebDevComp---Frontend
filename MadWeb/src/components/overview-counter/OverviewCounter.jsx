import React from 'react'
import CountUp from "react-countup"
const OverviewCounter = () => {
  return (
    <section className='container h-12 md:h-32'>
        <div className='grid grid-cols-4 divide-x divide-slate-700 mx-auto md:max-w-[800px] shadow-lg w-full bg-white -translate-y-10 md:-translate-y-16 my-4 md:p-8 dark:bg-gray-800 dark:text-white/70'>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl'>
                   <CountUp end={234} suffix="+" duration={2.75}/>
                </h1>
                <h1 className='sm:text-md text-xs md:text-lg'>clients</h1>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl'>
                   <CountUp end={129} suffix="+" duration={2.75}/>
                </h1>
                <h1 className='sm:text-md text-xs md:text-lg'>Developers</h1>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl'>
                   <CountUp end={1032} suffix="+" duration={2.75}/>
                </h1>
                <h1 className='sm:text-md text-xs md:text-lg'>Projects</h1>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl'>
                   <CountUp end={234} suffix="+" duration={2.75}/>
                </h1>
                <h1 className='sm:text-md text-xs md:text-lg'>Subscribers</h1>
            </div>
        </div>
    </section>
  )
}

export default OverviewCounter