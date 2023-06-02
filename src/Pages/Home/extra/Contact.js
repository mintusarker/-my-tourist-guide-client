import React from 'react';
import { toast } from 'react-hot-toast';

const Contact = () => {


    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success('Form submitted, Thanks for reaching out to me', 5000)
        e.target.reset()
    }
    return (
        <div className='bg-slate-100 '>
            <div className='px-16'>
                <p className='pb-1 text-3xl font-semibold font-serif inline border-b-4 border-gray-500'>Contact Us</p>
                <p className='pt-6'>Submit the form to get in touch with us</p>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 px-16 py-10 gap-9 items-baseline'>

                <div className='pl-32'>
                    <div className='py-8'>
                        <p className='text-lg'>Have a question?</p>
                        <span className='text-amber-800'>Email me at mintosarker707@gmail.com</span>
                        <p className='text-amber-800'>Phone / WhatsApp : +8801911697072</p>
                    </div>
                    <div>
                        <p className='text-lg'>Current Location</p>
                        <span className='text-amber-800'>Dhaka, Bangladesh</span>                           <p>We provide our service worldwide</p>
                    </div>
                </div>

                <div>
                    <form action="" onSubmit={handleSubmit} className='flex flex-col  w-full'>
                        <input type="text" name='name' placeholder='Enter your name' className='p-2 border-2 border-black rounded-md focus:outline-none' required />
                        <input type="email" name='name' placeholder='Enter your email' className='p-2 my-3  border-2 border-black  rounded-md focus:outline-none' required />

                        <textarea name="message" rows="10" placeholder='Enter your message' className='p-2 h-48  border-2  border-black  rounded-md focus:outline-none' required></textarea>

                        <button className='text-white bg-gradient-to-r from-red-500 to-green-500 mt-6 px-6 py-3 mx-auto flex items-center rounded-md hover:scale-105 duration-300'>Let's talk</button>
                    </form>
                </div>
            </div>
        </div>


        // <div className='w-full bg-slate-100 px-16'>
        //     {/* <div className='flex flex-col p-4 justify-center  mx-auto h-full'> */}
        //         {/* <div className='pb-8'>
        //             <p className='py-2 front-bold text-3xl inline border-b-4 border-gray-500'>Contact Me</p>
        //             <p className='pt-6'>Submit the form to get in touch with us</p>
        //         </div> */}

        //         <div className='lg:flex md:flex sm:flex-row gap-9 justify-center items-center'>

        //             <div className='lg:w-1/2 md:w-1/2 sm:w-full'>
        //                 <div className='tex'>
        //                     <div className='flex mb-7 items-center gap-6'>
        //                         {/* <div> <AiOutlineMail className='text-xl text-orange-400'></AiOutlineMail></div> */}
        //                         <div>
        //                             <p className='front-bold text-3xl inline border-b-4 border-gray-500'>Contact Me</p>
        //                             <p className='py-3'>Submit the form to get in touch with us</p>
        //                         </div>
        //                     </div>
        //                     <div className='flex mb-7 items-center gap-6'>
        //                         {/* <div> <AiOutlineMail className='text-xl text-orange-400'></AiOutlineMail></div> */}
        //                         <div>
        //                             <p className='text-lg'>Have a question?</p>
        //                             <span className='text-amber-800'>Email me at mintosarker707@gmail.com</span>
        //                             <p className='text-amber-800'>Phone / WhatsApp : +8801818897795</p>
        //                         </div>
        //                     </div>
        //                     <div className='flex items-center gap-6'>
        //                         {/* <div> <HiOutlineLocationMarker className='text-xl text-orange-400'></HiOutlineLocationMarker></div> */}
        //                         <div>
        //                             <p className='text-lg'>Current Location</p>
        //                             <span className='text-amber-800'>Dhaka, Bangladesh</span>
        //                             <p>We provide our service worldwide</p>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        // <form action="" onSubmit={handleSubmit} className='flex flex-col lg:w-1/2 md:w-1/2 sm:w-full'>
        //     <input type="text" name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
        //     <input type="email" name='name' placeholder='Enter your email' className='p-2 my-3 bg-transparent border-2 rounded-md text-white focus:outline-none' required />

        //     <textarea name="message" rows="10" placeholder='Enter your message' className='p-2 h-48 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>

        //     <button className='text-white bg-gradient-to-r from-red-500 to-green-500 mt-6 px-6 py-3 mx-auto flex items-center rounded-md hover:scale-105 duration-300'>Let's talk</button>
        // </form>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Contact;