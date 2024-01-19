import React, { useState } from 'react'


export const Home = () => {

    const [name, setname] = useState("");
    const [age, setage] = useState("");

    const emp1 = [
        {
            id: "1",
            ename: "viraj",
            age: "36"
        },
        {
            id: "2",
            ename: "sahil",
            age: "30"
        },
        {
            id: "3",
            ename: "abhira",
            age: "35"
        },
    ];
    const [Employee, setEmployee] = useState(emp1);

    const [uname, setuname] = useState("")

    function handleSubmit(event) {
        event.preventDefault();
        const name = event.target.elements.name.value;
        const age = event.target.elements.age.value;
        const newlists = {
            id: Employee.length + 1, ename: name, age: age
        }
        setEmployee((prevemplist) => {
            return prevemplist.concat(newlists);
        })
    }


    const DeleteObject = (id) => {
        const newEmployeeList = Employee.filter((s) => s.id !== id);
        setEmployee(newEmployeeList);
    }


    const handleChange = event => {
        const tempname = event.target.name;
        const tempvalue = event.target.value;
        if ("upname" === tempname) {
            setname(tempvalue);

            console.log(name);

        } if ('upage' === tempname) {
            setage(tempvalue);
            console.log(age);

        }
    }

    const updateRecord = (eid) => {
        // console.log(Employee[id].ename = name);
        // console.log(Employee[id].age = age);
        // console.log(Employee[id]);
        // setEmployee(Employee);

        const newEmpList = Employee.map((i) => {
            if (i.id == eid) {
                i.ename = name;
                i.age = age;
            }
            return i;
        });
        setEmployee(newEmpList);
    }

    const sortbyage = (i) => {
        const newSortbyageList = Employee.sort((a, b) => { return a.age > b.age ? 1 : -1 });
        setEmployee(newSortbyageList);
        console.log(newSortbyageList);

    }

    return (
        <>
            <div class="container mt-5" >
                <div class="">
                    <h3> Employees Information System</h3>
                </div>
                <div class="">
                    <button type="button" class="btn btn-outline-success rounded-pill" data-bs-toggle="modal"
                        data-bs-target="#addemployee" data-bs-whatever="@mdo"> Add Information </button>
                    &nbsp; &nbsp;  <button type="button" class="btn btn-outline-success rounded-pill" onClick={() => sortbyage(11)}> sort by age </button>
                    <div class="modal fade" id="addemployee" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Enter the Employees Information </h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form onSubmit={handleSubmit}>
                                        <div class="mb-3">
                                            <label for="recipient-name" class="col-form-label">Enter Employees name :</label>
                                            <input type="text" class="form-control" name='name' id="recipient-name" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="message-text" class="col-form-label" > Enter Employees age :</label>
                                            <input class="form-control" id="message-text" type='number' name='age' />
                                        </div>
                                        <div class="modal-footer">

                                            <button type="submit" class="btn btn-primary "> Save </button>

                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

                <div class="mt-3">
                    {
                        <div class="container">
                            <table class="table ">
                                <thead>
                                    <tr>
                                        <th scope="col"> ID </th>
                                        <th scope="col" > Employees name</th>
                                        <th scope="col">Employees age</th>
                                        <th scope="col">Update</th>
                                        <th scope="col">Delete</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        Employee && Employee.length > 0 ?
                                            Employee.map((i) => {
                                                return (
                                                    <tr>
                                                        <td>{i.id}</td>
                                                        <td>{i.ename}</td>
                                                        <td>{i.age}</td>

                                                        <td>
                                                            <button type="button" class="btn btn-outline-primary rounded-pill" data-bs-toggle="modal"
                                                                data-bs-target={'#exampleModal' + i.id + ""} data-bs-whatever="@mdo"> Update </button>

                                                        </td><td>
                                                            <button type="button" class="btn btn-outline-danger rounded-pill" onClick={() => DeleteObject(i.id)} data-bs-dismiss="modal">Delete</button>
                                                        </td>
                                                        <div class="modal fade" id={'exampleModal' + i.id + ""} tabindex="-1" aria-labelledby="exampleModalLabel"
                                                            aria-hidden="true">
                                                            <div class="modal-dialog">
                                                                <div class="modal-content">
                                                                    <div class="modal-header">
                                                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Employees id : {i.id}</h1>
                                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                    </div>
                                                                    <div class="modal-body">
                                                                        <form >
                                                                            <div class="mb-3">
                                                                                <label for="recipient-name" class="col-form-label">Employees name :</label>
                                                                                <input type="text" class="form-control" name="upname" onInput={handleChange} id="recipient-upname" />
                                                                            </div>
                                                                            <div class="mb-3">
                                                                                <label for="message-text" class="col-form-label">Employees age :</label>
                                                                                <input class="form-control" name="upage" id="message-upage" onChange={handleChange} />
                                                                            </div>
                                                                            <div class="modal-footer">
                                                                                <button type="button" class="btn btn-primary" onClick={() => updateRecord(i.id)} >Update</button>

                                                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                            </div>
                                                                        </form>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </tr>

                                                );
                                            })
                                            : "no Data Is Available"
                                    }
                                </tbody>
                            </table>
                        </div>


                    }
                </div>
            </div >
        </>
    )
}


export default Home;