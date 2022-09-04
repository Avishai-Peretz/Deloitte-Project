/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createEmployee, deleteEmployee, getEmployees } from '../../actions/useHooks';
import { Search } from '../../components/search/Search';
import { DefaultNumbers, DefaultEmployeeData, DeleteEmployeeData, EmployeeData, Pages, SearchTerms } from '../../types';
import { RootState } from '../../reducers';
import axios from 'axios';
import { termsURI } from '../../api';
import '../../assets/display.css';
import '../../assets/fonts.css';
import './style.css'

const Admin = () => {

  const [createEmployeeData, setCreateEmployeeData] = useState<EmployeeData>(DefaultEmployeeData);
  const [deleteEmployeeData, setDeleteEmployeeData] = useState<DeleteEmployeeData>({ _id: "" });
  const [searchTerms, setSearchTerms] = useState<SearchTerms>({
    resultsNum: DefaultNumbers.resultsNum, charsToStart: DefaultNumbers.charsToStart, timer: DefaultNumbers.timer
  });

  const getCurrentID = useSelector((state: RootState) => state.autocomplete.ID);
  const dispatch:RootState  = useDispatch();

  const handleCreateSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCreateEmployeeData(DefaultEmployeeData );
    dispatch(createEmployee(createEmployeeData));
    localStorage.clear()
  };
  
  const handleDeleteSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(deleteEmployee(deleteEmployeeData));
    setDeleteEmployeeData({_id: ""});
    localStorage.clear()
  };
  const handleTermsSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.put<SearchTerms>(termsURI,{
      "resultsNum": searchTerms.resultsNum,
      "charsToStart": searchTerms.charsToStart,
      "timer": searchTerms.timer
    });
  };



  useEffect(() => { dispatch( getEmployees() ) },[]);
  useEffect(() => { setDeleteEmployeeData({_id : getCurrentID}) },[getCurrentID]);
  
  return (
    <div className='admin-container column-c-c' >
      <form style={{margin:'100px 20px 20px 20px'}} className='column-c-c' onSubmit={handleCreateSubmit}>
        <h3 >Create New Employee</h3>
        <div className='column-c-c'>
          <label>WorkTitle</label>
          <input name="WorkTitle"
            placeholder='Work Title'
            value={createEmployeeData.WorkTitle}
            onChange={(e) => setCreateEmployeeData({ ...createEmployeeData, WorkTitle: e.target.value })} />
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
        <input style={{ width: '250px' }} name="id" placeholder='id' value={deleteEmployeeData._id} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setDeleteEmployeeData({ _id: e.target.value})} />
        <button className={""} >Submit</button>
      </form>
      <form style={{margin:'20px'}} className='column-c-c' onSubmit={handleTermsSubmit}>
        <h3 >Edit Search Terms</h3>
        <label>Set number of results</label>
        <input type="number" style={{width:'100px'}} name="resultsNum"  value={searchTerms.resultsNum} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSearchTerms({ resultsNum: +e.target.value, charsToStart: searchTerms.charsToStart, timer: searchTerms.timer})
        }} />
        <label>Set number of character to start search</label>
        <input type="number" style={{width:'100px'}} name="charsToStart"  value={searchTerms.charsToStart} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSearchTerms({ charsToStart: +e.target.value, resultsNum: searchTerms.resultsNum, timer: searchTerms.timer })
        }} />
        <label>Set time from type to search (milliseconds)</label>
        <input type="number" style={{width:'100px'}} name="timer"  value={searchTerms.timer} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSearchTerms({ timer: +e.target.value, resultsNum: searchTerms.resultsNum, charsToStart: searchTerms.charsToStart })
        }} />
        <button className={""} >Submit</button>
      </form>
      <h4 style={{textAlign:'center'}}>For autocomplete, Mouse click or click Enter on the employee box. HINT: you can use the arrows to navigate </h4>
      <Search page={Pages.admin} />
    </div>
  )
}
export default Admin;
