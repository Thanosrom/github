//React Imports
import React,{useEffect,useState} from 'react';
import { useLocation, useNavigate } from "react-router-dom";

//CSS Imports
import '../CSS/Repositories.css';

//File Imports
import  Header from './Header.js';
import  Footer from './Footer.js';

//Icons Imports
import { BsBook ,BsFillPeopleFill} from "react-icons/bs";
import { BiBookBookmark } from "react-icons/bi";
import { RxGrid } from "react-icons/rx";
import { VscPackage } from "react-icons/vsc";
import { AiOutlineStar } from "react-icons/ai";
import { ImLocation } from "react-icons/im";

function Repositories() {

  const {state} = useLocation();
  const navigate = useNavigate();

  const [data1,setData1] = useState([]);
  const [data2,setData2] = useState([]);

  useEffect(()=>{
    fetch('https://api.github.com/users/'+state+'/repos')
    .then((response)=> response.json())
    .then((data) => {setData1(data)})
    .catch((error)=> {
      console.log(error)
      navigate('/ErrorPage.js');
  })
  },[])

  useEffect(()=>{
      fetch("https://api.github.com/users/"+state)
      .then((response)=> response.json())
      .then((data) => {setData2(data)})
      .catch((error)=> {
        console.log(error)
        navigate('/ErrorPage.js');
      })
  },[])


  return (
    <>
      {/* Header Component */}
      <Header />

         {/* Div Home Container */}
        <div className = 'divHome' >

          {/* For Header Items Next To Avatar */}
          <div id ='profileHeaderForRepoAndFollowers'>
            <BsBook color='white'/>
            <button className='buttonProfile'>Overview</button>
            <BiBookBookmark id = 'iconRepositories'/>
            <button className='buttonProfile'>Repositories</button>
            <RxGrid color='white'/>
            <button className='buttonProfile'>Projects</button>
            <VscPackage color='white'/>
            <button className='buttonProfile'>Packages</button>
            <AiOutlineStar color='white'/>
            <button className='buttonProfile'>Stars</button>
          </div>

          {/* For Profile Avatar and infos */}
          <div id='ProfileAndRepository'>
            <div id='divProfileAvatar' >
              <img id='imageProfileAvatar' src={data2.avatar_url} alt='error in image avatar' />
              <h2>{data2.name}</h2>
              <h3>{data2.login}</h3>
              <p> {data2.bio}</p>
              <div className='divInfos'>
                <ImLocation color='grey'/>
                <p className='pForLocationAndRepos'>{data2.location}</p>
              </div>
              <div className='divInfos'>
                <BiBookBookmark id = 'iconRepositories'/>
                <p className = 'pForLocationAndRepos'>Public repositories {data2.public_repos}</p>
              </div>
              <div className='divInfos'>
                <BsFillPeopleFill color='grey'/>
                <button id='buttonFollowers' onClick={()=>{navigate('/Followers.js',{state:state})}}>Followers {data2.followers}</button>
              </div>
              <button className='buttonEditProfile'>Edit Profile</button>
            </div>
       
            {/* Map All Repos  */}
            <div id='divRepositoriesOrder'>
              {data1.map((dataCurrent)=>{
                return(
                  <div id='divForRepositories' key={dataCurrent.id}>
                    <p className='pName'>{dataCurrent.name}</p>
                    <p className='pDescription'>{dataCurrent.description}</p>
                    <div id='divStar'>
                      <AiOutlineStar color='grey'/>
                      <p className='pStars'>{dataCurrent.stargazers_count}</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      <Footer />  

    </>
   
  );
}

export default Repositories;
