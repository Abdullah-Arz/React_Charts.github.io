import React,{forwardRef,useEffect} from 'react'
import '../sass/Table_Comp.scss';
// import {data} from '../Json FIles/User_Detail_Comp.json';
import MaterialTable from '@material-table/core';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import AddIcon from "@material-ui/icons/AddAlarm";
import IconButton from "@material-ui/core/IconButton";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Col, Container, Row } from 'react-bootstrap';
import icon from '../Assests/responsive.png';

function Table_Comp() {
  
const tableRef = React.createRef();
const addActionRef = React.useRef();
const now = 80;
  const data = require('../Json FIles/Table.json')
  const columns = [
    { title: 'Name', field: 'name' },
    { title: 'Position', field: 'position' },
    { title: 'Office', field: 'office'
    // ,
    // render: (rowData) =>
    // rowData && (
    //   <p className='udc-name-p'>{rowData.name}</p>
    // ) 
  },
    { title: 'Age', field: 'age'
    // ,
    // render: (rowData) =>
    // rowData && (
    //   <p className='udc-name-p'>{rowData.company}</p>
    // ) 
  },
    { title: 'Start date', field: 'date'
    // ,
    // // editable: true,
    // render: (rowData) => 
    
    // rowData.status == 'canceled' ? (
    //   <p className='status-p'>{rowData.status}</p>
    // ) : 
    // rowData.status && (
    //   rowData.status == 'on hold' ? (
    //     <p className='status-hold-p'>{rowData.status}</p>
    //   )  : (rowData.status == 'in progress') ? (
    //     <p className='status-prog-p'>{rowData.status}</p>
    //   ) : (
    //     <p className='status-comp-p'>{rowData.status}</p>
    //   )
      
    // )
     
  },
   
    { title: 'Salary', field: 'salary' },
  ];

  // const tableIcons = {
  //   Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  //   Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  //   Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  //   Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  //   DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  //   Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  //   Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  //   Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  //   FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  //   LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  //   NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  //   PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  //   ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  //   Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  //   SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  //   ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  //   ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  // };
  
  return (
    <Container className='tc-container'>
      <Row className='tc-top-row'>
        <Col className='tc-col'>
        <img src={icon} className='tc-icon'/>
        <p className='tc-top'>Easy Dynamic Table</p>
        </Col>
      </Row>
    <Row className='tc-row'>
      <Col>
      <MaterialTable 
    columns={columns} 
    data={data} 
    // icons={tableIcons}  
    options={{
      root: {
        '&.MuiTableRow-hover:hover': {
            backgroundColor: 'blue',
        },
    },
      sorting:true,
      rowStyle: x => {
        if (x.tableData.id % 2) {
            return {backgroundColor: "#f2f2f2"}
        }
    },
    
    }}
    
    // title='Books Directory'
    />
      </Col>
    </Row>
  </Container>
  )
}

export default Table_Comp;
