import {useState , useEffect} from 'react'
import { useNavigate } from "react-router-dom"
import { axiosInstance } from "./lib/axios.js"

const Create = () => {

    const [name , setName] = useState("")
    const [age , setAge] = useState("")

    const nav = useNavigate()

    const submit = async (e) => {
        e.preventDefault()
        const data = {name , age}
        await axiosInstance.post('/createdata' , data)
        nav('/')
    }

    return (
        <div>
            <button onClick={() => {nav("/")}}>Home</button>
            <form onSubmit={submit}>
                <input type="text" placeholder="Name" value={name} required onChange={e => {setName(e.target.value)}}/>
                <input type="text" placeholder="Age" value={age} required onChange={e => {setAge(e.target.value)}} />
                <button type="submit">Create</button>
            </form>
        </div>
    )

}

export default Create