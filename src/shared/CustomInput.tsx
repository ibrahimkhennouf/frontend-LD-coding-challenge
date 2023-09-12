import { InputAdornment, TextField } from '@mui/material';
import { useSetRecoilState } from 'recoil';
import { pokFilterValue } from '../recoil_state.ts';
import { ChangeEvent, ReactNode } from 'react';

const CustomInput = ({
  placeHolder,
  icon,
  isTypeNumber,
  name,
}: {
  placeHolder: string;
  icon: ReactNode;
  isTypeNumber: boolean;
  name: string;
}) => {
  const setFiltredPokList = useSetRecoilState(pokFilterValue);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFiltredPokList(
      !isTypeNumber || isNaN(e.target.value as unknown as number)
        ? { name: name, val: e.target.value }
        : { name: name, val: +e.target.value }
    );
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
