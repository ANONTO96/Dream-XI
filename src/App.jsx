import { useState } from 'react'
import './App.css'
import Allplayers from './components/Allplayers/Allplayers'
import Navbar from './components/navbar/navbar'
import Togglebuttons from './components/Togglebuttons/Togglebuttons'
import Bannerimg from './components/Bannerimg/Bannerimg'
import Selectedplayers from './components/Selectedplayers/Selectedplayers'
import Newsletter from './components/Newsletter/Newsletter'
import Footer from './components/Footer/Footer'

function App() {
  const [isActive,setisActive] = useState({
  available:true,
  status:"available"
  })

  const [selectedPlayers,setSelectedPlayers] = useState([]);

  // handle functions

  //  for delete in player in selected section
  const handleDelete = (id) => {
   const remainingPlayer = selectedPlayers.filter((p)=> p.id != id);
   setSelectedPlayers(remainingPlayer);
  }

  // for existed player
  const handleSelectedPlayer = (player) => {
    const isExist= selectedPlayers.find((p)=> p.id==player.id);

    if(isExist){
      alert("Already Added This Player!!")
    }
    else{
      const addPlayer = [...selectedPlayers, player];

    setSelectedPlayers(addPlayer);
    }
    
  }

  // for active button
  const handleIsActive = (status) => {
    if (status == "available") {
      setisActive({
        available:true,
        status:"available"
      })
    }
    else{
      setisActive({
        available:false,
        status:"selected"
      })
    }
  }
  

  return (
    <>
      <nav className='md:w-[85%] lg:w-[75%] mx-auto my-4 sticky top-0 backdrop-blur-md backdrop-saturate-100'> 
      <Navbar selectedPlayers= {selectedPlayers}></Navbar>
      </nav>

      <section className='w-[95%] md:w-[85%] lg:w-[75%] mx-auto'>

        {/* banner section */}
        <div className='text-center my-10'>
          <Bannerimg></Bannerimg>
        </div>

        {/* button section */}
        <div className='my-10'>
          <Togglebuttons handleIsActive= {handleIsActive}
          isActive= {isActive}></Togglebuttons>
        </div>

        {/* all players / selected players */}
        {isActive.available?
        <Allplayers handleSelectedPlayer={handleSelectedPlayer}></Allplayers>:<Selectedplayers selectedPlayers={selectedPlayers} handleDelete={handleDelete} handleIsActive={handleIsActive}></Selectedplayers>
        }

        {/* newsletter */}
        <div className='w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] absolute left-[5%] sm:left-[10%] md:left-[15%] lg:left-[20%]'>
          <Newsletter></Newsletter>
        </div>
      </section>

      <footer className='bg-gray-800 mt-[430px] sm:mt-[330px] lg:mt-[270px]'>
          <Footer></Footer>
        </footer>
    </>
  )
}

export default App
