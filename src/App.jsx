import { useState } from 'react'
import students from './data/students'
import './App.css'
import StudentList from './components/StudentList'

function App() {
  const [search,setSearch] = useState('')
  const [dropDown,setDropDown] = useState('All Students')

  const filteredStudents = students.filter((stud) => {
      const matchesSearch = stud.name
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesPerformance =
        dropDown === 'All Students' ||
        dropDown === 'Passed' && stud.grade >= 50 ||
        dropDown === 'Failed' && stud.grade < 50;

    return matchesSearch && matchesPerformance;
    })

  const handleChange = (event) => {
    setDropDown(event.target.value)
  }

  return(
    <div className='bg-dark text-white'>
      <div className='container py-3'>
        <h3 className='text-center mt-4 mb-5'>Student Grade Manager</h3>

        <div>
          <input 
          type="text" 
          className='form-control mb-4'
          value={search} 
          placeholder='Search student...'
          onChange={(event)=> setSearch(event.target.value)} 
          />

          <form className=' mb-4'>
            <select value={dropDown} onChange={handleChange}>
              <option value="All Students">All Students</option>
              <option value="Passed">Passed</option>
              <option value="Failed">Failed</option>
            </select>
          </form>

          <StudentList students={filteredStudents} />
        </div>
      </div>
    </div>

  )
}

export default App
