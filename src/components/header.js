import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import HeaderImage from '../components/headerImage'


const header = props => {
    return (
        <div>
            <header className="container mx-auto flex max-w-3/4 justify-around mt-20">
                <div className="flex flex-col justify-items justify-between gap-4">
                    <h1 className="text-5xl font-bold text-gray-700"> 
                    <span className="text-green-400">Fresh</span> vegetables delivered to your doorstep</h1>
                    <button className=" mx-4 my-2 px-6 py-2 text-center cursor-pointer rounded-lg bg-green-500 hover:bg-green-400 text-gray-100 font-semibold">
                        <Link href="/startNow">
                            Try now
                        </Link>
                    </button>
                    <p> 40% discount on the first 3 months</p>
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
