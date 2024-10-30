import './Newsletter.css'

const Newsletter = () => {
    return (
        <div className='p-4 border-2 border-purple-200 rounded-3xl'>
            <div className='bannerimg p-24 text-center rounded-3xl'>
            <h1 className='font-semibold text-3xl md:text-4xl'>Subscribe to our Newsletter</h1>
            <p className='text-gray-500 text-lg'>Get the latest updates and news right in your inbox!</p>
            <div className='sm:flex justify-center'>
            <input className='border-2 rounded-lg w-52 my-5 py-2 px-2' type="email" placeholder='Enter your email' />
            <br />
            <button className='bg-gradient-to-r from-red-400 to-sky-400 px-3 py-2 my-5 rounded-lg hover:text-black hover:from-red-300 hover:to-sky-300'>Subscribe</button>
            </div>
        </div>
        </div>
    );
};

export default Newsletter;