import React, { useRef } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import './style.css';
import Logo from '../../assets/logo.png';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import InstagramIcon from '@mui/icons-material/Instagram';
import styled from '@emotion/styled';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

const Search = styled('div')({
    position: 'relative',
    borderRadius: '50px',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
    },
    margin: "0 2rem",
    width: '100%',
});

const SearchIconWrapper = styled('div')({
    padding: '8px',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

const StyledInputBase = styled(InputBase)({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: '8px 8px 8px 0',
        paddingLeft: 'calc(1em + 32px)',
        transition: 'width 0.3s ease',
        width: '100%',
        '@media (min-width: 600px)': {
            width: '20ch',
        },
    },
});



const Header = () => {
    const navRef = useRef();
    const showNav = () => {
        navRef.current.classList.toggle('mobile');
    }
    return (
        <div>
            <AppBar position="static" color='transparent' elevation={0}>
            <div className='nav' >
                <Toolbar  >
                    <img className='image' src={Logo} alt="" />
                    <div className='search' >
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </div>

                    <div className='link' ref={navRef} >
                        <div style={{ margin: '0 1rem' }} >
                            <ul className='menu'  >
                                <li>MENU</li>
                                <li>MENU</li>
                                <li>MENU</li>
                                <li>MENU</li>
                            </ul>
                        </div>
                        <div style={{ margin: '0 1rem' }} >
                            <ul className='menu1'  >
                                <li><InstagramIcon /></li>
                                <li><LinkedInIcon /></li>
                                <li><GitHubIcon /></li>
                                <li><XIcon /></li>
                            </ul>
                        </div>

                    </div>
                    <div className='open' onClick={showNav} >
                        <IconButton style={{ color: 'white' }}  ><MenuIcon /></IconButton>
                    </div>
                </Toolbar>
            </div>
        </AppBar>
        </div>
    );
};

export default Header;
