import logo from '../../assets/logo.png'
const Navbar = ({selectedPlayers}) => {

    return (
        <div className="flex justify-between">
            <img className='w-16 sm:w-20' src={logo} alt="logo"/>
            <div className="flex items-center gap-8">
            <a href="">Home</a>
            <a href="">Fixtures</a>
            <a href="">Teams</a>
            <a href="">Schedule</a>
            <button className="flex items-center">$0 coin <img className="w-10" src="https://img.icons8.com/?size=100&id=Y2UM9OQtZ0Wn&format=png&color=000000" alt="logo" /></button>
            </div>
        </div>
    );
};

export default Navbar;