import { useState, useEffect} from 'react'
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createEmployee, deleteEmployee } from '../../actions/employees';
import { Search } from '../../components/search/Search';
import '../../assets/display.css';
import '../../assets/fonts.css';
import './style.css'

const Admin = () => {
  
  const [createEmployeeData, setCreateEmployeeData] = useState({ ImageUrl: String(""), WorkTitle: String(""), Name: String("") })
  const [deleteEmployeeData, setDeleteEmployeeData] = useState({ id: String("")})

  const dispatch = useDispatch();

  const handleCreateSubmit = (e) => {
    e.preventDefault();
    setCreateEmployeeData({  ImageUrl: String(""), WorkTitle: String(""), Name: String("") })
    dispatch(createEmployee(createEmployeeData));
    localStorage.clear()
  };
  
  const handleDeleteSubmit = (e) => {
    dispatch(deleteEmployee(deleteEmployeeData));
    setDeleteEmployeeData({id: String("")});
    localStorage.clear()
    e.preventDefault();
  };
  
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
        </div>
      </form>
      <form style={{margin:'20px'}} onSubmit={handleDeleteSubmit}>
        <h3 >Delete Employee</h3>
        <input name="id"  label='id' placeholder='id' value={deleteEmployeeData.id} onChange={(e) => setDeleteEmployeeData({ _id: e.target.value})} />
        <button className={""} >Submit</button>
      </form>
      <Search page='admin' />
    </div>
  )
}
export default Admin;
