import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';



function NavBar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    

    const onMouseEnter = () => {
         if(window.innerWidth < 960) {
             setDropdown(false)
         } else {
             setDropdown(true)
         }
    };


    const onMouseLeave = () => {
        if(window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(false)
        }
   };


   
   return (
    <>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js" integrity="sha384-eMNCOe7tC1doHpGoWe/6oMVemdAVTMs2xqW4mwXrXsW0L84Iytr2wi5v2QjrP/xp" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.min.js" integrity="sha384-cn7l7gDp0eyniUwwAZgrzD06kc/tftFf19TOAs2zVinnD/C7E91j9yyk5//jjpt/" crossorigin="anonymous"></script>
     
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-light">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/"> <img src="/images/actual-logo.png" width="70" height="70"></img> <span>Sunshine Action</span></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav ms-auto">
        
          
      <li class="nav-item">
          <Link class="nav-link" to="/home">Home</Link>
        </li>
       

  

        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="/our-work" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            About Us
          </Link>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link class="dropdown-item" to="/our-story">Our Story</Link></li>
            <li><Link class="dropdown-item" to="/beneficaries">Beneficiaries</Link></li>
            <li><Link class="dropdown-item" to="/reports">Performance Reports</Link></li>
          </ul>
        </li>

        <li class="nav-item">
          <Link class="nav-link" to="projects">Projects</Link>
        </li>
        {<li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="/projects" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Projects
          </Link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link class="dropdown-item" to="/projects">Hong Kong</Link></li>
            <li><Link class="dropdown-item" to="/global">Global</Link></li>
          </ul>
        </li>}
        
        
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="/our-work" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Students
          </Link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link class="dropdown-item" to="/ambassadors">Sunshine Ambassadors</Link></li>
            <li><Link class="dropdown-item" to="/fourty-five-club">Sunshine 45 Club</Link></li>
          </ul>
        </li>
        
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="/our-work" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Get Involved
          </Link>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link class="dropdown-item" to="/volunteers">Volunteers</Link></li>
            <li><Link class="dropdown-item" to="/companies">Companies</Link></li>
          </ul>
        </li>
        

        <li class="nav-item">
          <Link class="nav-link" to="/contact-us">Contact Us</Link>
        </li>
        <li class="nav-item" id='donatebutton'>
        <Link class="nav-link" text-color="white" to="/donate"><b>Donate</b></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
     
    </>
  );
}

export default NavBar;