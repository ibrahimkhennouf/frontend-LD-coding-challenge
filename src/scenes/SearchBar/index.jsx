import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CustomInput from "../../shared/CustomInput";
import "./style.css";

const inpData = [
  { placeHolder: "Search...", icon: <SearchOutlinedIcon /> },
  { placeHolder: "Power threshold", icon: <FavoriteBorderIcon /> },
];

function SearchBar() {
  return (
    <div className="searchBar">
      <div className="searchBar_inp">
        {inpData.map((data, i) => {
          return <CustomInput {...data} key={i} />;
        })}
      </div>
      <div className="searchBar_power-txt">
        <p>Min power : 255</p>
        <p>Max power : 540</p>
      </div>
    </div>
  );
}

export default SearchBar;
