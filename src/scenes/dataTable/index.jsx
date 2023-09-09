import { DataGrid } from "@mui/x-data-grid";
import "./style.css";

import useGetAllPoksWithPower from "../../hooks/useGetAllPoksWithPower";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "name", headerName: "name", width: 200 },
  { field: "type", headerName: "type", width: 200 },
  { field: "hp", headerName: "health", type: "number", width: 120 },
  {
    field: "attack",
    headerName: "attack",
    type: "number",
    width: 120,
  },
  {
    field: "defense",
    headerName: "defense",
    type: "number",
    width: 130,
  },
  {
    field: "special_attack",
    headerName: "special_attack",
    type: "number",
    width: 160,
  },
  {
    field: "special_defense",
    headerName: "special_defense",
    type: "number",
    width: 180,
  },
  {
    field: "speed",
    headerName: "speed",
    type: "number",
    width: 120,
  },
  {
    field: "power",
    headerName: "power",
    type: "number",
    width: 120,
  },
];

export default function DataTable() {
  const finalPoksList = useGetAllPoksWithPower();

  return (
    <div className="table-container">
      <DataGrid
        rows={finalPoksList}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10, 15, 20]}
      />
    </div>
  );
}
