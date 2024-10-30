import './Footer.css'
import logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <div>
            <div className='place-items-center'>
            <img className='w-24 py-6 pt-36 sm:pt-40 lg:pt-48' src={logo} alt="" />
            </div>

            <div className='sm:flex justify-evenly'>

            <div className='my-3 mx-2'>
              <h3 className='text-gray-300 font-medium'>About Us</h3>
              <p className='text-gray-400'>We are a passionate team dedicated to <br /> providing the best services to our customers.</p>
            </div>

            <div className='my-3 mx-2'>
                <h3 className='text-gray-300 font-medium'>Quick Links</h3>
                <ul className='text-gray-400'>
                <li>Home</li>
                <li>Service</li>
                <li>About</li>
                <li>Contact</li>
               </ul> 
              </div>

              <div className='text-center sm:text-start my-3'>
                <h3 className='text-gray-300 font-medium'>Subscribe</h3>
                <p className='text-gray-400 text-lg'>Subscribe to our newsletter for the latest updates.</p>

            <div className='md:flex'>
            <input className='border-2 rounded-lg w-52 py-2 px-3' type="email" placeholder='Enter your email' />
            <button className='bg-gradient-to-r from-red-400 to-sky-400 px-3 py-2 rounded-lg hover:text-black hover:from-red-300 hover:to-sky-300'>Subscribe</button>
            </div>
    
              </div>
            </div>
            <p className='text-center text-gray-400 py-10'>@2024 Your Company All Rights Reserved.</p>
        </div>
    );
};

export default Footer;