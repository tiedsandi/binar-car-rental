import "./tableorder.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";

const TableOrder = () => {
    return (
        <div className="datatable">
            <div className="datatableTitle">
                <p>Table Order</p>
            </div>
            <DataGrid
                className="datagrid"
                rows={userRows}
                columns={userColumns}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
            />
        </div>
    );
}

export default TableOrder
