import './Togglebuttons.css'

const Togglebuttons = ({handleIsActive,isActive}) => {
    return (
        <div className='flex justify-between'>
            <h1 className='text-2xl'>Available Players:</h1>
            <div className='flex gap-4'>
            <button onClick={() =>handleIsActive("available")} className={`${isActive.available?"active":"btn"} px-3 py-2 hover:bg-sky-300
            hover:rounded-md text-black hover:font-medium`}>Available</button>
            <button onClick={() =>handleIsActive("selected")} className={`${isActive.available?"btn":"active"} px-3 py-2 hover:bg-sky-300 hover:rounded-md text-black hover:font-medium`}>Selected</button>
            </div>
        </div> 
    );
};

export default Togglebuttons;