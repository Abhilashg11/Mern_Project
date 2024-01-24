import { useNavigate } from 'react-router-dom'
import { useEffect,useState } from 'react';
import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import '../buttons.css'


const Summary = () => {
  const [RowData, setRowData] = useState(null)

  const BtnCellRenderer = (params) => {
    return (<div>
      <button className="read button" onClick={()=>HandleReadClick(params.data._id)}>Read</button>
      <button  className="delete button" onClick={()=>handleDeleteClick(params.data._id)}>Delete</button>
      <button  className="update button" onClick={()=>handleUpdateClick(params.data._id)}>Update</button>
      
      </div>
    );
  };

  
  const columnDefs = [
    { headerName: 'Product Name', field: 'name' },
    { headerName: 'Description', field: 'description' },
    { headerName: 'Category', field: 'category' },
    { headerName: 'Quantity', field: 'quantity' },
    { headerName: 'Price', field: 'price' },
    {field: 'Action',
        cellRenderer: BtnCellRenderer,    
    }
  ];  
  const defaultColDef={sortable:true,flex:1}

  const getUsers = () => {
    fetch('http://localhost:4000/api/hello')
    .then(resp => resp.json())
    .then(resp => setRowData(resp))
  }
  

  const handleDeleteClick = (_id) =>{
    const confirmed = window.confirm('Are you sure you want to delete this Product');

    if(confirmed){
      fetch('http://localhost:4000/api/hello'+`/${_id}`,{method:'DELETE'})
      .then((resp) => {
        if (!resp.ok) {
          throw new Error(`HTTP error! Status: ${resp.status}`);
        }
        return resp.json();
      })
      .then((data) => {
        getUsers();
      })
      .catch((error) => {
        console.error('Error deleting user:', error);
      });
  }
};
  const NavigateD = useNavigate()
  const HandleReadClick =(_id) =>{NavigateD('/Read'+`/${_id}`)}
  const handleUpdateClick =(_id) =>{NavigateD('/Update'+`/${_id}`)}


  useEffect(() => {
    fetchData();
  },[]);
    // Fetch data from your API endpoint
    const fetchData = async () => {
        const response = await fetch('http://localhost:4000/api/hello')
        const json = await response.json()
        .then((response) => setRowData(response))
    };

  return (
    <div className="ag-theme-alpine" style={{ height: '400px'}}>
        
      <AgGridReact
        columnDefs={columnDefs}
        rowData={RowData}
        defaultColDef = {defaultColDef}
      />
    </div>
  );
};

export default Summary;

