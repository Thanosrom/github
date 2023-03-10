//React Imports
import React,{useEffect,useState} from 'react';
import { useNavigate, useParams } from "react-router-dom";

//CSS Imports
import '../CSS/Home.css';

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

function Home() {

  const username = useParams();
  const navigate = useNavigate();

  const [data,setData] = useState([]);

  useEffect(()=>{
      fetch("https://api.github.com/users/"+username.username)
      .then((response)=> response.json())
      .then((data) => {setData(data)})
      .catch((error)=> {
        console.log(error)
        navigate('/ErrorPage.js');
      })
  },[])
  
  try{
    global.username = username.username;
  }catch{
    alert("Something Went wrong");
  }

    return (
    <>
      {/* Header Component */}
      <Header />

        {/* Div Home Container */}
        <div className = 'divHome' >

          {/* For Header Items Next To Avatar */}
          <div id ='profileHeader'>
            <BsBook color='white'/>
            <button className='buttonProfile'>Overview</button>
            <BiBookBookmark id = 'iconRepositories'/>
            <button onClick={()=>{navigate('/Repositories.js',{state:username.username})}} className='buttonProfile'>Repositories</button>
            <RxGrid color='white'/>
            <button className='buttonProfile'>Projects</button>
            <VscPackage color='white'/>
            <button className='buttonProfile'>Packages</button>
            <AiOutlineStar color='white'/>
            <button className='buttonProfile'>Stars</button>
          </div>

  
          {/* For Profile Avatar and infos */}
          <div id='divProfileAvatar' >
            <img id='imageProfileAvatar' src={data.avatar_url} alt='error in image avatar' />
            <h2>{data.name}</h2>
            <h3>{data.login}</h3>
            <p>{data.bio}</p>
            <div className = 'divInfos'>
              <ImLocation color='grey'/>
              <p className='pForLocationAndRepos'>{data.location}</p>
            </div>
            <div className = 'divInfos'>
              <BiBookBookmark id = 'iconRepositories'/>
              <p className='pForLocationAndRepos'>Public repositories {data.public_repos}</p>
            </div>
            <div className='divInfos'>
              <BsFillPeopleFill color='grey'/>
              <button id = 'buttonFollowers' onClick={()=>{navigate('/Followers.js',{state:username.username})}}>Followers {data.followers}</button>
            </div>
            <button className='buttonEditProfile'>Edit Profile</button>
          </div>

        </div>

      {/* Footer Component */}
      <Footer />
    </>
   
  );
}

export default Home;
