import React from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CustomInput from '../../shared/CustomInput';
import './style.css';
import useGetMinMaxPower from '../../hooks/useGetMinMaxPower';

const inpData = [
  {
    placeHolder: 'Search...',
    icon: <SearchOutlinedIcon />,
    isTypeNumber: false,
  },
  {
    placeHolder: 'Power threshold',
    icon: <FavoriteBorderIcon />,
    isTypeNumber: true,
  },
];

function SearchBar() {
  const { max, min } = useGetMinMaxPower();
  return (
    <div className='searchBar'>
      <div className='searchBar_inp'>
        {inpData.map((data, i) => {
          return <CustomInput {...data} key={i} />;
        })}
      </div>
      <div className='searchBar_power-txt'>
        <p>Min power : {min != Infinity ? min : 0}</p>
        <p>Max power : {max != -Infinity ? max : 0}</p>
      </div>
    </div>
  );
}

export default SearchBar;
