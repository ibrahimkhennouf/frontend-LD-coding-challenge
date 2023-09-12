/* eslint-disable react/prop-types */

import { InputAdornment, TextField } from "@mui/material";
import { useSetRecoilState } from "recoil";
import { pokFilterValue } from "../recoil_state";

const CustomInput = ({ placeHolder, icon, isTypeNumber, name }) => {
  const setFiltredPokList = useSetRecoilState(pokFilterValue);

  const handleChange = (e) => {
    setFiltredPokList(
      !isTypeNumber || isNaN(e.target.value)
        ? { name: name, val: e.target.value }
        : { name: name, val: +e.target.value }
    );
  };
  return (
    <>
      <TextField
        id="outlined-basic"
        label={placeHolder}
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">{icon}</InputAdornment>
          ),
        }}
        type={isTypeNumber ? "number" : "search"}
        onChange={handleChange}
      />
    </>
  );
};

export default CustomInput;
