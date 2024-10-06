import React from 'react'
import pic from "../assets/images/gardenImage.jpg"
import pic2 from "../assets/images/RemedyOnline-Logo.png"

const ResponsiveDesign = () => {
    return (
        <section className='grid gap-8 m-5'>
            <div className='imageHolder grid gap-2 md:grid-cols-2 md:items-center md:text-left'>
                <div>
                    <img src={pic} alt="" className='w-full rounded-2xl' />
                </div>
                <div className=''>
                    <h1 className='font-semibold text-3xl text-center px-5 mb-2 md:text-left lg:mb-5 lg:text-5xl'>Hello, God!</h1>
                    <p className='text-center px-5 md:text-left lg:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quos hic necessitatibus iste, enim, vel corrupti nostrum, earum expedita quod porro quasi optio odio id et ducimus! Voluptate, explicabo nisi? dignissimos corporis vero? Voluptate, explicabo nisi? dignissimos corporis vero? Voluptate, explicabo nisi? dignissimos corporis vero?
                    </p>
                </div>
            </div>

            <div className=' twoItems grid gap-2 sm:grid-cols-2'>
                <div className='bg-red-400 w-full h-24 rounded-2xl '></div>
                <div className='bg-green-400 w-full h-24 rounded-2xl '></div>
            </div>

            <div className='threeItems grid gap-2 sm:grid-cols-2 md:grid-cols-3'>
                <div className='bg-blue-400 w-full h-32 rounded-2xl '></div>
                <div className='bg-purple-400 w-full h-32 rounded-2xl '></div>
                <div className='bg-yellow-400 w-full h-32 rounded-2xl '></div>
            </div>
        </section >


        // <section className='grid gap-5'>
        //     <div>
        //         <img src={pic2} alt="garden-image" className='' />
        //     </div>
        //     <div>
        //         <h1 className='font-semibold text-3xl mb-3'>Hello World!</h1>
        //         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, blanditiis ipsa? Repudiandae alias quos exercitationem officiis eius quas natus porro nihil, labore quibusdam error saepe omnis est, autem illum voluptatibus.
        //             Quam ad nisi optio corporis fugiat! Labore odit in quasi accusamus dolorum accusantium. Repellat illum reprehenderit harum, id quae, cum porro quis rerum autem consectetur nemo alias repudiandae nostrum. Quisquam.</p>
        //     </div>
        // </section>
    )
}

export default ResponsiveDesign