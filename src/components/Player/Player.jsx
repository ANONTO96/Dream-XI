import './Player.css'

const Player = ({player, handleSelectedPlayer}) => {

    const {name,image,price,country,type,rating,batting_style}= player;
    return (
        <div className='p-2 my-5 mx-3 border-2 border-blue-200 rounded-xl shadow-2xl'>
            <img className='h-96 w-full object-contain rounded-lg' src={image} alt="" />
            <h5 className='flex items-center text-lg font-medium my-2'><img className='w-6' src="https://img.icons8.com/?size=100&id=ABBSjQJK83zf&format=png&color=000000" alt="" />{name}</h5>
            <div className='flex justify-between my-3'>
            <h5 className='flex items-center text-gray-600'><img className='w-5' src="https://img.icons8.com/?size=100&id=94712&format=png&color=000000" alt="" />{country}</h5>
            <h5>{type}</h5>
            </div>
            <hr />
            <h5 className='mt-2'>Rating: {rating}</h5>
            <h5 className='flex justify-between'>Batting Style: <span className='text-gray-600'>{batting_style}</span></h5>
            <div className='flex justify-between'>
            <h5>Price: ${price}</h5>
            <button onClick={()=>handleSelectedPlayer(player)} className='px-2 border-2 border-gray-500 m-2 rounded-md hover:font-medium hover:border-dashed'>Choose Player</button>
            </div>
        </div>
    );
};

export default Player;