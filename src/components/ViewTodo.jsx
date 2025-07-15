import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewTodo = () => {
    const [TodoData, changeTodoData] = useState(
        { "todos": [] }
    )

    const fetchData = () => {
        axios.get("https://dummyjson.com/todos")
            .then(
                (response) => {
                    changeTodoData(response.data)
                }
            )
            .catch(() => (
                alert("Something went wrong")
            ))
    }

    useEffect(() => { fetchData() }, [])


    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">todo</th>
                                    <th scope="col">Completed</th>
                                    <th scope="col">UserID</th>
                                </tr>
                            </thead>
                            <tbody>
                                {TodoData.todos.map((data, index) => {
                                    return (
                                        <tr>
                                            <td>{data.id}</td>
                                            <td>{data.todo}</td>
                                            <td>{data.completed ? <p className='text-success'>completed</p> : <p className='text-danger'>not completed</p>}</td>
                                            <td>{data.userId}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewTodo