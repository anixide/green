import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import HeaderImage from '../components/headerImage'


const header = props => {
    return (
        <div className="pb-48 pt-24 border-black border">
            <header className="Large_Screen flex flex-col-reverse md:flex-row container mx-auto justify-around pt-20 mt-2 max-w-3/4 mx-auto">
                <div className=" md:block  flex flex-col justify-between mr-1">
                    <h1 className="text-5xl font-bold text-gray-700 md:text-4xl lg:text-5xl"> 
                    <span className="text-green-400">Fresh</span> vegetables delivered to your doorstep</h1>
                    <button className="w-32 mx-1 my-2 px-1 py-2 text-center cursor-pointer rounded-lg bg-green-500 hover:bg-green-400 text-gray-100 font-semibold">
                        Get started
                    </button>
                </div>
                <div>
                    <HeaderImage/>
                </div>
            </header>
        </div>
    )
}

header.propTypes = {

}

export default header



