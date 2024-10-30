import './Bannerimg.css'
import bannerMain from '../../assets/banner-main.png'

const Bannerimg = () => {
    return (
        <div className='rounded-3xl p-16 bannerimg bg-black flex flex-col justify-center items-center gap-5'>
            <img src={bannerMain} alt="" />
            <h1 className='text-4xl font-semibold text-white'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <h3 className='text-white'>Beyond Boundaries Beyond Limits</h3>
            <div className='border border-black rounded-2xl bg-gradient-to-r from-red-400 to-sky-400  hover:from-red-500 hover:to-sky-500'>
            <button className='border border-black m-1 px-3 py-3 rounded-2xl text-black hover:font-medium'>Claim Free Credit</button>
            </div>
        </div>
    );
};

export default Bannerimg;