import React, {useContext, useEffect, useState} from 'react'
import TransitionsModal from "../utils/TransitionsModal";
import {Button} from "../utils/Button";
import './ModalWindow.css'
import {DataContext} from "../../context/data/dataContext";


const AddModalWindow = () => {
    const {users, fetchUsers, addProject} = useContext(DataContext)
    const [selectedUsers, setSelectedUsers] = useState([])

    const [name, setName] = useState('')
    const [comments, setComments] = useState('')
    const [startDate, setStartDate] = useState('')
    const [finishDate, setFinishDate] = useState('')

    useEffect(() => {
        fetchUsers()
    }, [])

    const addProjectHandle = () => {

        addProject({
            name,  comments, teamLead: users[0], dateStart: startDate, dateFinish: finishDate, teams: selectedUsers
        })
        setName('')
        setComments('')
        setSelectedUsers([])
    }
    const addSelectUser = user => setSelectedUsers([...selectedUsers, user])
    return (
        <TransitionsModal title='Add new project' buttonClass='add-btn' buttonText='Add project'>

            <form className="modal-form">
                <input type="text" placeholder='input project name' value={name} onChange={e => setName(e.target.value)}/>
                <label htmlFor="startDate">Start date:</label>
                <input type="date" id="startDate" name="startDate" onChange={e => setStartDate(e.target.value)} />
                <label htmlFor="finishDate">Finish date:</label>
                <input type="date" id="finishDate" name="finishDate" onChange={e => setFinishDate(e.target.value)} />
                <textarea placeholder='input comments' name='comments' value={comments} onChange={e => setComments(e.target.value)} />
                <select>
                    {users.length > 0 ? users.map((user, idx) =>
                        selectedUsers.includes(user) ? null : <option onClick={() => addSelectUser(user)} key={idx + user.username}>{user.fullName}</option> )
                        : <option>Loading....</option>}
                </select>
                <div className="users-selected">
                    {selectedUsers.map((user, idx) => <div key={idx + user.username} className="user">{user.fullName}</div>)}
                </div>
                <Button onClick={addProjectHandle}>Add project</Button>
            </form>

        </TransitionsModal>
    )
}

export default AddModalWindow