import React, { useState, useEffect} from 'react'
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createEmployee, deleteEmployee } from '../../actions/employees';
import { Search } from '../../components/search/Search';
import '../../assets/display.css';
import '../../assets/fonts.css';
import './style.css'

const Admin = () => {
  const [createEmployeeData, setCreateEmployeeData] = useState({  ImageUrl: String(""), WorkTitle: String(""), Name: String("") })
  const [deleteEmployeeData, setDeleteEmployeeData] = useState({ _id: String("")})

  const dispatch = useDispatch();
  const getEmployees = useSelector((state) => state.employees);
  const handleCreateSubmit = (e) => {
    e.preventDefault();
    dispatch(createEmployee(createEmployeeData));
   };
  const handleDeleteSubmit = (e) => {
    e.preventDefault();
    dispatch(deleteEmployee(deleteEmployeeData));
  };
  
  useEffect(() => {}, [getEmployees])
  
  const clear = () => { };
  
  return (
    <div className='admin-container column-c-c' >
      <form style={{margin:'100px 20px 20px 20px'}} className='column-c-c' onSubmit={handleCreateSubmit}>
        <h3 >Create New Employee</h3>
        <div>
        <input name="WorkTitle" label='WorkTitle' placeholder='Work Title' value={createEmployeeData.WorkTitle} onChange={(e) => setCreateEmployeeData({ ...createEmployeeData, WorkTitle: e.target.value})} />
        <input name="Name"  label='Name' placeholder='Name' value={createEmployeeData.Name} onChange={(e) => setCreateEmployeeData({ ...createEmployeeData, Name: e.target.value})} />
        </div>
        <div className='row-c-c'>
          <div className={""}>
            <FileBase name="ImageUrl" type="file" multiple={false} onDone={({ base64 }) => setCreateEmployeeData({ ...createEmployeeData, ImageUrl: base64 })} />
          </div>
          <button className={""} >Submit</button>
          <button onClick={clear}>Clear</button>
        </div>
      </form>
      <form style={{margin:'20px'}} onSubmit={handleDeleteSubmit}>
        <h3 >Delete Employee</h3>
        <input name="id"  label='id' placeholder='id' value={deleteEmployeeData.id} onChange={(e) => setDeleteEmployeeData({ _id: e.target.value})} />
        <button className={""} >Submit</button>
        <button onClick={clear}>Clear</button>
      </form>
      <Search page='admin' />
      {/* <Employees page='admin' searchResult={[]} searchValue={''} searchTerms={[100,'Name']} /> */}
    </div>
  )
}
export default Admin;
