import { useEffect, useState } from 'react'
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createEmployee, deleteEmployee, getEmployees } from '../../actions/useHooks';
import { Search } from '../../components/search/Search';
import '../../assets/display.css';
import '../../assets/fonts.css';
import './style.css'
import { DeleteEmployeeData, EmployeeData } from '../../interfaces/test';
import { AnyAction } from 'redux';
import { RootState } from '../../reducers';

const Admin = () => {

  const [createEmployeeData, setCreateEmployeeData] = useState<EmployeeData>({ImageUrl: "", WorkTitle: "", Name: "", _id: ""})
  const [deleteEmployeeData, setDeleteEmployeeData] = useState<DeleteEmployeeData>({ _id: ""} )

  const getCurrentID = useSelector((state:RootState) => state.autocomplete.ID);
  const dispatch:AnyAction|any  = useDispatch();

  const handleCreateSubmit = (e:any) => {
    e.preventDefault();
    setCreateEmployeeData({  ImageUrl: "", WorkTitle: "", Name: "" , _id:""})
    dispatch(createEmployee(createEmployeeData));
    localStorage.clear()
  };
  
  const handleDeleteSubmit = (e:any) => {
    dispatch(deleteEmployee(deleteEmployeeData));
    setDeleteEmployeeData({_id: ""});
    localStorage.clear()
    e.preventDefault();
  };

  useEffect(() => { dispatch( getEmployees() ) },[]);
  useEffect(() => { setDeleteEmployeeData({_id : getCurrentID}) },[getCurrentID]);
  
  return (
    <div className='admin-container column-c-c' >
      <form style={{margin:'100px 20px 20px 20px'}} className='column-c-c' onSubmit={handleCreateSubmit}>
        <h3 >Create New Employee</h3>
        <div className='column-c-c'>
          <label>WorkTitle</label>
          <input name="WorkTitle" placeholder='Work Title' value={createEmployeeData.WorkTitle} onChange={(e) => setCreateEmployeeData({ ...createEmployeeData, WorkTitle: e.target.value})} />
          <label>Name</label>
          <input name="Name" placeholder='Name' value={createEmployeeData.Name} onChange={(e) => setCreateEmployeeData({ ...createEmployeeData, Name: e.target.value})} />
        </div>
        <div className='row-c-c'>
          <div style={{maxWidth:'170px'}} >
            <FileBase name="ImageUrl" type="file" multiple={false} onDone={({ base64 }: any) => setCreateEmployeeData({ ...createEmployeeData, ImageUrl: base64 })} />
          </div>
          <button className={""} >Submit</button>
        </div>
      </form>
      <form style={{margin:'20px'}} onSubmit={handleDeleteSubmit}>
        <h3 >Delete Employee</h3>
          <label>ID</label>
        <input style={{width:'250px'}} name="id"  placeholder='id' value={deleteEmployeeData._id} onChange={(e:any) => setDeleteEmployeeData({ _id: e.target.value})} />
        <button className={""} >Submit</button>
      </form>
      <h4 style={{textAlign:'center'}}>For autocomplete, Mouse click or click Enter on the employee box. HINT: you can use the arrows to navigate </h4>
      <Search page='admin' />
    </div>
  )
}
export default Admin;
