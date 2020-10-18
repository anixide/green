import React from 'react'

const how = () => {
    return (
        <section className="pt-24 pb-24 container mx-auto md:max-w-1/2 border border-black">
            <div className="flex flex-col items-center space-y-6">
                <h1 className="self-center text-5xl text-gray-700 font-bold text-center mt-10">How It Works</h1>
                <p className="self-center max-w-3/4 text-center text-lg text-gray-700 font-light">Our goal is to make sure you always have everything you need to look, feel, and smell your best. Here’s how it all goes down:</p>
                <button className="mx-4 my-2 px-6 py-2 text-center items-center cursor-pointer rounded-lg bg-green-500 hover:bg-green-400 text-gray-100 font-semibold"> Start Now</button>
                <ul className="flex flex-wrap">
                    <li className="md:w-1/2 px-2 py-8">
                        <img className="mx-auto" src="../images/vegetables.svg"></img>
                        <h1 className="uppercase text-sm font-bold text-center">Get started</h1>
                        <p className="text-sm text-center">Choose one of our risk-free starter sets and try what the Club has to offer.</p>
                    </li>
                    <li className="md:w-1/2 px-2 py-8">
                        <img className="mx-auto" src="../images/vegetables.svg"></img>
                        <h1 className="uppercase text-sm font-bold text-center"> We Will Stock You</h1>
                        <p className="text-sm text-center">We will continue to deliver the greens of your choice a few times a month.</p>
                    </li>
                    <li className="md:w-1/2 px-2 py-8">
                        <img className="mx-auto" src="../images/vegetables.svg"></img>
                        <h1 className="uppercase text-sm font-bold text-center">You Say When</h1>
                        <p className="text-sm text-center">Tell us how often you want regular shipments, from every month to three times a year. You’re in the driver’s seat.</p>
                    </li>
                    <li className="md:w-1/2 px-2 py-8">
                        <img className="mx-auto" src="../images/vegetables.svg"></img>
                        <h1 className="uppercase text-sm font-bold text-center">Get started</h1>
                        <p className="text-sm text-center">Choose one of our risk-free starter sets and try what the Club has to offer.</p>
                    </li>
                    <li className="md:w-1/2 px-2 py-8">
                        <img className="mx-auto" src="../images/vegetables.svg"></img>
                        <h1 className="uppercase text-sm font-bold text-center">Get started</h1>
                        <p className="text-sm text-center">Choose one of our risk-free starter sets and try what the Club has to offer.</p>
                    </li>
                    <li className="md:w-1/2 px-2 py-8">
                        <img className="mx-auto" src="../images/vegetables.svg"></img>
                        <h1 className="uppercase text-sm font-bold text-center">Get started</h1>
                        <p className="text-sm text-center">Choose one of our risk-free starter sets and try what the Club has to offer.</p>
                    </li>
                    
                </ul>
            </div>
            
        
        </section>
    )
}

export default how
