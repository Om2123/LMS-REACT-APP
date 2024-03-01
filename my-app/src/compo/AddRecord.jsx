import React, { useState } from 'react'
import { createRecord } from '../appwrite/database';

export default function AddRecord() {
    const [stdName, setStdName] = useState("");
    const [enr, setEnr] = useState("");
    const [email, setEmail] = useState("");
    const [mob, setMob] = useState("");
    const [course, setCourse] = useState("");
    const [sem, setSem] = useState("");
    const addRecord = () => {

        let res = createRecord(stdName, enr, email, mob, course, sem)
        if (res == false) {
            alert("Record Added unsuccess")
        } else {
            alert("Record Added Success")
        }
    }

return (
    <main class="mt-1 pt-3">
        <div class="container-fluid">


            <div class="row dashboard-counts">
                <div class="col-md-12">
                    <h4 class="fw-bold text-uppercase"> Add Student </h4>
                </div>
                <div class="col-md-12">


                    <div class="card">
                        <div class="card-header">
                            Fill the form
                        </div>
                        <div class="card-body">

                            <div>
                                <div class="row">

                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">
                                                <i class="fa-solid fa-face-smile"></i>
                                                Student Name</label>

                                            <input type="text" class="form-control"
                                                value={stdName}
                                                onChange={(e) => setStdName(e.target.value)} id="exampleInputEmail1"
                                                aria-describedby="emailHelp" />
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label for="exampleInputPassword1" class="form-label">
                                                <i class="fa-solid fa-id-card"></i>
                                                Enrollment Number</label>

                                            <input type="text" class="form-control" id="exampleInputPassword1" value={enr}
                                                onChange={(e) => setEnr(e.target.value)} />
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label for="exampleInputPassword1" class="form-label">
                                                <i class="fa-solid fa-envelope"></i> Email Address
                                            </label>

                                            <input type="text" class="form-control" id="exampleInputPassword1"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)} />
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label for="exampleInputPassword1" class="form-label">
                                                <i class="fa-solid fa-phone"></i>
                                                Phone Number</label>

                                            <input type="text" class="form-control" id="exampleInputPassword1"
                                                value={mob}
                                                onChange={(e) => setMob(e.target.value)} />
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label for="exampleInputPassword1" class="form-label">Course</label>

                                            <select class="form-control"
                                                value={course}
                                                onChange={(e) => {
                                                    setCourse(e.target.value)
                                                    console.log(e.target);
                                                }}
                                            >
                                                <option value=""> Please select </option>
                                                <option value="Computer Engineering"> Computer Engineering </option>
                                                <option value="Civil Engineering"> Civil Engineering</option>
                                                <option value="Printing Engineering"> Printing Engineering</option>
                                                <option value="Electronics Engineerig"> Electronics Engineering</option>
                                                <option value="Electrical Engineering"> Electrical Engineering</option>
                                                <option value="Mechanical Engineering"> Mechanical Engineering </option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label for="exampleInputPassword1" class="form-label">Semester</label>

                                            <select class="form-control"
                                                value={sem} onChange={(e) => { setSem(e.target.value) }}>
                                                <option value=""> Select Semester </option>
                                                <option value="First"> First Semester </option>
                                                <option value="Second"> Second Semester</option>
                                                <option value="Third"> Third Semester</option>
                                                <option value="Fourth"> Fourth Semester</option>
                                                <option value="Fifth"> Fifth Semester</option>
                                                <option value="Sixth"> Sixth Semester </option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="col-md-12">
                                        <button type="submit" onClick={addRecord}  class="btn btn-success">Publish</button>
                                        <button type="reset" class="btn btn-secondary">Cancel</button>
                                    </div>


                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </main >
)
}
