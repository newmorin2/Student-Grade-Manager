function StudentList(props){

    const allStudents = props.students.map((dis) => (
        <div className="col-12 col-sm-6 col-lg-4" key={dis.id}>
            <div className="card h-100 p-2 shadow-sm">
                <h5>{dis.name}</h5>
                <h6>Age: {dis.age}</h6>
                <h6>Course: {dis.course}</h6>
                <h6>Grade: {dis.grade}</h6>
                <h6>Status: 
                    <span className={`badge ${dis.grade >= 50 ? 'text-success':'text-danger'}`}>
                        {dis.grade >= 50 ? 'Pass':'Fail'}
                    </span>
                </h6>
            </div>
        </div>
    ))
    return(
        <div className="row g-4">
            {allStudents}
        </div>
    )
}
export default StudentList