/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import './Selectedplayers.css'

const Selectedplayers = ({selectedPlayers,handleDelete,handleIsActive}) => {
    return (
        <div className='my-8'>
            {
                selectedPlayers.map((player) => (
                    <div className='flex justify-between items-center border-2 rounded-2xl my-2'>
                    <div className='flex items-center gap-2'>
                        <img className='w-20 h-20 m-2 rounded-full border-2 border-gray-300 object-contain' src={player.image} alt="" />
                        <div>
                            <h1 className='text-black font-semibold'>{player.name}</h1>
                            <h1 className='text-gray-500'>{player.batting_style}</h1>
                        </div>
                    </div>
                    <div>
                        <button onClick={() => handleDelete(player.id)}><img className='w-8' src="https://img.icons8.com/?size=100&id=83238&format=png&color=FA5252" alt="" /></button>
                    </div>
                 </div>
                ))
                
            }
            <div>
              <button onClick={() =>handleIsActive("available")} className='bg-sky-400 hover:bg-gradient-to-r px-3 py-4 my-5 rounded-lg hover:text-white hover:from-red-300 hover:to-sky-300'>Add more player</button>
            </div>
        </div>
    );
};

export default Selectedplayers;