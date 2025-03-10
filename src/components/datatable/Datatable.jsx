import { DataGrid } from "@mui/x-data-grid";
import "./datatable.scss";
import { userColumns, userRows } from "../../datatablescource";
import { Link } from "react-router-dom";
import { useState } from "react";

const Datatable = () => {
    const [data,setData] = useState(userRows)

    const handleDelete= (id)=>{
        setData(data.filter(item=>item.id !== id))
    }

    const actionColumns = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link to="/users/test" style={{textDecoration:"none"}}>
                        <div className="viewButton">View</div>
                        </Link>
                        <div className="deleteButton" onClick={()=>handleDelete(params.row.id)}>Delete</div>
                    </div>
                );
            },
        },
    ];

    return (
        <div className="datatable">
            <div className="datatableTitle">
                Add New User
                <Link to="/users/new" style={{textDecoration:"none"}} className="Link">
                Add New
                </Link>
                </div>           
            <DataGrid
                className="datagrid"
                rows={data}
                columns={userColumns.concat(actionColumns)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
            />
        </div>
    );
};

export default Datatable;
