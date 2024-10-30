import { useEffect, useState } from 'react'
import './Allplayers.css'
import Player from '../Player/Player';

const Allplayers = ({handleSelectedPlayer}) => {
    const [Allplayers,setAllplayers] = useState([])

    useEffect(() => {
        fetch("./data.json")
        .then(res=> res.json())
        .then(data=> setAllplayers(data))
    },[])
    return (
        <div className='grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3'>
            {
        
            Allplayers.map((player)=><Player handleSelectedPlayer={handleSelectedPlayer} key={player.id} player={player}></Player>)
            }
        </div>
        
    );
};

export default Allplayers;