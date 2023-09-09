import { InputAdornment, TextField } from "@mui/material";

const CustomInput = ({ placeHolder, icon }) => {
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
      />
    </>
  );
};

export default CustomInput;
