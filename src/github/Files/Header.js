//React Imports
import React,{ useEffect,useState } from 'react';
import { useNavigate } from "react-router-dom";

//CSS Imports
import '../CSS/Header.css';

//Icon Imports
import { IoNotificationsOutline } from "react-icons/io5";
import { AiOutlineGithub, AiOutlinePlus } from "react-icons/ai";

function Header() {

    const navigate = useNavigate();
    const [data,setData] = useState([]);
    const [users,setUsers] = useState([]);
    const [search,setSearch] = useState([]);

    useEffect(()=>{
        fetch("https://api.github.com/users/"+global.username)
        .then((response)=> response.json())
        .then((data) => {setData(data)})
        .catch((error)=> {
            console.log(error)
            navigate('/ErrorPage.js');
        })
    },[])

    useEffect(()=>{
        fetch("https://api.github.com/users")
        .then((response)=> response.json())
        .then((data) => {setUsers(data)})
        .catch((error)=> {
            console.log(error)
            navigate('/ErrorPage.js');
        })
    },[])

    function handleSearcher(){

        users.map((userSearch) => {
            if(userSearch.login != search){
                console.log("User does not exist")
            } 
        })

    }
    
    

    return (
    <>
        {/* Header Div */}
        <div id = 'divHeader' >

            {/* Cat Avatar */}
            <AiOutlineGithub id = 'imageCat'/>
            
            {/* Search Bar */}
            <div id = 'divSearchBar'>
                <input id = 'inputSearchBar' placeholder = 'Search or jump to...' onChange={(e)=>{setSearch(e.target.value)}}/>
                <button id = 'buttonSearch' onClick={()=>{handleSearcher()}}>Submit</button>
            </div>

            {/* All links Next to Search Bar */}
            <a href='#' className='ahrefHeader'>Pull requests</a>
            <a href='#' className='ahrefHeader'>Issues</a>
            <a href='#' className='ahrefHeader'>Codespaces</a>
            <a href='#' className='ahrefHeader'>MarketPlace</a>
            <a href='#' className='ahrefHeader'>Explore</a>
            
            <div id = 'divEndButtons'>

                {/* Notification button */}
                <IoNotificationsOutline id='iconNotification'/>
                
                {/* Plus Icon */}
                <div id = 'divDetailsPlusIcon'>
                    <AiOutlinePlus color='white' />
                </div>

                {/* Avatar icon */}
                <div id = 'divDetailsAvatar'>
                   <img id = 'imgAvatar' src={data.avatar_url} alt='image error'/>
                </div>

            </div>

        </div>
    </>
   
  );
}

export default Header;
