import { DataGrid } from '@mui/x-data-grid';
import './style.css';

import { useRecoilValue, useSetRecoilState } from 'recoil';
import { filteredPokList, pageMetaData } from '../../recoil_state';

const columns = [
  { field: 'id', headerName: 'ID', minWidth: 90, flex: 1 },
  { field: 'name', headerName: 'name', minWidth: 200, flex: 1 },
  { field: 'type', headerName: 'type', minWidth: 200, flex: 1 },
  { field: 'hp', headerName: 'health', type: 'number', minWidth: 120, flex: 1 },
  {
    field: 'attack',
    headerName: 'attack',
    type: 'number',
    minWidth: 120,
    flex: 1,
  },
  {
    field: 'defense',
    headerName: 'defense',
    type: 'number',
    minWidth: 130,
    flex: 1,
  },
  {
    field: 'special_attack',
    headerName: 'special_attack',
    type: 'number',
    minWidth: 160,
    flex: 1,
  },
  {
    field: 'special_defense',
    headerName: 'special_defense',
    type: 'number',
    minWidth: 180,
    flex: 1,
  },
  {
    field: 'speed',
    headerName: 'speed',
    type: 'number',
    minWidth: 120,
    flex: 1,
  },
  {
    field: 'power',
    headerName: 'power',
    type: 'number',
    minWidth: 120,
    flex: 1,
  },
];

export default function DataTable() {
  const poksList = useRecoilValue(filteredPokList);
  const setPageMetaData = useSetRecoilState(pageMetaData);

  const handleChange = (e) => {
    setPageMetaData(e.pagination.paginationModel);
  };

  return (
    <div className='table--container'>
      <DataGrid
        rows={poksList}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10, 15, 20]}
        onStateChange={handleChange}
      />
    </div>
  );
}
