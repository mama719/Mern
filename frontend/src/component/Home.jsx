import { axiosInstance } from  "./lib/axios.js"
import { useNavigate } from "react-router-dom"
import { useState , useEffect } from 'react'

const Home = () => {

    const [data , setData] = useState([{name : "" , age : "" }])

    const nav = useNavigate()

    useEffect(
        () =>{
            const dt  = async () => {
                const res = await axiosInstance.get("/getdata")
                const data = await res.data 
                setData(data.data)
            }
            dt()
        } , []
    )
    console.log(data)

    let count = 0

    return (
        <div>
            <button onClick={() => { nav("/create") }}>Create</button>
            <table border="1"> 
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>            
                </thead>
                <tbody>
                    {
                        data.length < 1 ? <h1>This is Still Empty</h1> : data.map( (d) => { 
                            count += 1
                            return (
                                <tr key={count} >
                                    <td>{d.name}</td>
                                    <td>{d.age}</td>
                                </tr>
                            )
                        } )
                    }
                </tbody>
            </table>
        </div>
    )

}

export default Home