import { InputAdornment, TextField } from '@mui/material';
import { useSetRecoilState } from 'recoil';
import { pokFilterValue } from '../recoil_state';

const CustomInput = ({ placeHolder, icon, isTypeNumber }) => {
  const setFiltredPokList = useSetRecoilState(pokFilterValue);

  const handleChange = (e) => {
    setFiltredPokList(isNaN(e.target.value) ? e.target.value : +e.target.value);
  };
  return (
    <>
      <TextField
        id='outlined-basic'
        label={placeHolder}
        variant='outlined'
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>{icon}</InputAdornment>
          ),
        }}
        type={isTypeNumber ? 'number' : 'search'}
        onChange={handleChange}
      />
    </>
  );
};

export default CustomInput;
