import './App.css';
import Table from "./components/table";
import React, {useState} from "react";

function App() {

    const [list, setList] = useState([
        {id: 1, name: "Dovudhon", lastName: "Husanov", phone: "+998976815007"}
    ])

    const [value, setValue] = useState({
        name: "",
        lastName: "",
        phone: ""
    })

    function handleChange(e) {
        setValue({...value, [e.target.name]: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault()
        setList([
            ...list,
            {
                id: Date.now(),
                name: value.name,
                lastName: value.lastName,
                phone: value.phone
            }
        ])
        setValue({
            name: "",
            lastName: "",
            phone: ""
        })
    }

    return (
        <>
            <div className="container">
                <div className="mt-4 w-100 mx-auto">
                    <h1 className="display-5 text-center"><span className="text-success">To Do</span> list
                    </h1>
                    <form id="book-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="name"
                                name="name"
                                value={value.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group my-3">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                type="text"
                                id="lastName"
                                className="form-control"
                                placeholder="Last Name"
                                name="lastName"
                                value={value.lastName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="number">Phone Number</label>
                            <input
                                type="number"
                                id="number"
                                className="form-control"
                                placeholder="+998 *** ** **"
                                pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
                                required=""
                                name="phone"
                                value={value.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-success btn-block mt-3">Add</button>
                    </form>
                    <Table list={list}/>
                </div>
            </div>
        </>
    );
}

export default App;
