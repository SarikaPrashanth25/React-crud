import React, { useCallback, useEffect, useState} from 'react'
import axios from 'axios'  // default impory
import { toast } from 'react-toastify' // { typed import }

const URL = "https://dummyjson.com"

function Home(props) {
    const [users,setUsers] = useState([])

    const getUsers = useCallback(() => {
        const readUser = async () => {
            /* 
                fetch(`${URL}/users`, {
                    method: "GET",
                    headers: {"Content-Type": "application/json"}
                })
                .then(res => res.json())
                .then(out => {})
                .catch(err => {})
            */
        }
    })
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-primary">Home</h3>
                </div>
            </div>
        </div>
    )
}

export default Home