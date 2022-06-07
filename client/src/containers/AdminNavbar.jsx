import React from 'react';
import { Box } from '@mui/material'
import { styled } from '@mui/material/styles';
import DehazeIcon from '@mui/icons-material/Dehaze';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import MenuProfile from '../components/MenuProfile';
import { useDispatch, useSelector } from 'react-redux';
import { setShow, showing } from '../redux/show';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#f3f3f3',
    color: '#495057',
}));


const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const AdminNavbar = () => {
    const [searchValue, setSearchValue] = React.useState('');
    // console.log(searchValue);
    const show = useSelector(showing);
    const dispatch = useDispatch();
    const changeShow = () => {
        show ? dispatch(setShow(false)) : dispatch(setShow(true));
    }
    return (
        <Box display={'flex'} width={'96.5vw'} height={'4rem'} sx={{
            borderBottom: '1px solid #e0e0e0',
            alignItems: 'center',
        }}>
            {/* logo */}
            <Box width={'16rem'} sx={{
                display: 'flex',
                alignItems: 'center',
                paddingLeft: '1.5rem',
            }}>
                <img src="./images/logo-login.png" alt="logo" />
            </Box>
            <Box display={'flex'} alignItems={"center"} justifyContent={'space-between'} width={"100%"}>
                < DehazeIcon onClick={changeShow} sx={{
                    cursor: 'pointer',
                }} />
                <Box display={'flex'} pr={"1.5rem"}>
                    {/* Search */}
                    <Search sx={{ marginRight: '1rem' }} >
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                        />
                    </Search>
                    <MenuProfile />
                </Box>
            </Box>

        </Box >
    )
}

export default AdminNavbar
