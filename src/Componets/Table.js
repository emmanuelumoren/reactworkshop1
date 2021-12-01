import React, { useState } from 'react';
import { Fragment } from 'react';

const Table=()=> {
    const initailData =[
        {id: 1, firstName: "Ruth", lastName: "Joe", age: 64, birthDay:"1963-03-05", country: "Maxico", city: "Maxicocity" },
        {id: 2, firstName: "Danie", lastName: "Jame", age:74, birthDay:"1953-04-05", country: "USA", city: "Ohio" },
        {id: 3, firstName: "Shawn", lastName: "Rice", age: 64, birthDay:"1973-03-07", country: "USA", city: "Califonia" },
        {id: 4, firstName: "Ula", lastName: "Jacob", age: 26, birthDay:"1990-03-05", country: "Maxico", city: "Maxicocity" },
        {id: 5, firstName: "Ruth", lastName: "Joe", age: 64, birthDay:"1963-03-05", country: "Maxico", city: "Maxicocity" },
        {id: 6, firstName: "Ruth", lastName: "Joe", age: 64, birthDay:"1963-03-05", country: "Maxico", city: "Maxicocity" },
        {id: 7, firstName: "Ruth", lastName: "Joe", age: 64, birthDay:"1963-03-05", country: "Maxico", city: "Maxicocity" }

    ];
// States> Studentlis is taking the objects from initalstate
// ShowData > useState returns an boolean false or true button details.
// studentDefaultData using the variables from the object student to use for the showdata and more
//
    const [studentList, setStudentList] = useState(initailData);
    const [showData, setShowData] = useState(false);
    const studentDefaultData = {id: 0, firstName: "", lastName: "", age: 0, birthDay: "", country: "", city: "" };
    const [student, setStudent] = useState(studentDefaultData);



    const TableHeader = () =>{
        return (
            <thead className="table-light">
                <td>id</td>
                <td>FirstName</td>
                <td>LastName</td>
                <td>Age</td>
                <td>Action</td>
            </thead>
        );
    };




    const TableRow = (props) =>{
        return (
            <tbody>
                {
                   props.studentList.map((student) =>{
                       const { id, firstName, lastName, age } = student;
                       return(
                           <tr key={id}>
                               <td>{id}</td>
                               <td>{firstName}</td>
                               <td>{lastName}</td>
                               <td>{age}</td>
                               <td><TableAction student={student}/></td>
                           </tr>

                    
                       )
                })
            }
            </tbody>
            
        )
    }




    const TableAction= ({student}) =>{
        const showData= () =>{
            setShowData(true);
            setStudent(student);
        
        };
        return (
            <button type="button" className="btn btn-primary" onClick={showData} >Details</button>
            
        )
    }



    const ShowStudentDetails = () =>{
        const { id, firstName, lastName, country, city,birthDay} = student;
        return (
            <Fragment>
                {
                    showData &&
                    <div className="card" style= {{ width: '500px'}} > 
                    <div className= "card-header bg-info text-white">
                        Student information
                    </div>
                    <div className = "card-body">
                        <h4 className="card-title"> {country}: {city}</h4>
                        <p className= "card-text">ID: {id}</p>
                        <p className= "card-text">Name: {firstName} {lastName}</p>
                        <p className= "card-text">Birthday: {birthDay}</p>

                    </div>
                    <div className="card-footer">
                        <button type="button" className="btn btn-info" onClick={() => {setShowData(false); setStudent(studentDefaultData) }}>Hide info</button>

                    </div>
                </div>
                }

    
            </Fragment>
           
            
        )
    }



    const TableChildren = ({children}) => <table className= "table table-striped">{children}</table>
       
    return (
        <div className="container">
            <h3> student List</h3>
            <TableChildren>
                <TableHeader/>
                <TableRow studentList={studentList}/>
            </TableChildren>
            <br/>
            <ShowStudentDetails/>
            
        </div>
    );
}

export default Table;