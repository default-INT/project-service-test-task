import React, {useContext, useEffect, useState} from 'react'
import {DataContext} from "../../context/data/dataContext";
import TransitionsModal from "../utils/TransitionsModal";
import {Button} from "../utils/Button";

const UserItem = ({user, setSelectedUsers, selectedUsers}) => (
    <div className='user-item'>
        <div className="user-title">{user.fullName}</div>
        <Button onClick={() => setSelectedUsers(selectedUsers.filter(u => u.id !== user.id))}  className="delete-times">&times;</Button>
    </div>
)


const EditModalWindow = ({project}) => {
    const {users, fetchUsers, editProject} = useContext(DataContext)
    const [selectedUsers, setSelectedUsers] = useState(project.teams)

    const [name, setName] = useState(project.name)
    const [comments, setComments] = useState(project.comments)
    const [startDate, setStartDate] = useState(project.dateStart)
    const [finishDate, setFinishDate] = useState(project.dateFinish)

    useEffect(() => {
        fetchUsers()
    }, [])

    const updateProjectHandle = () => {

        editProject({
            id: project.id, name,  comments, teamLead: users[0], dateStart: startDate, dateFinish: finishDate, teams: selectedUsers
        })
        setName('')
        setComments('')
    }
    const addSelectUser = user => setSelectedUsers([...selectedUsers, user])
    return (
        <TransitionsModal title='Edit project' buttonClass='update' buttonText='Edit'>

            <form className="modal-form">
                <input type="text" placeholder='input project name' value={name} onChange={e => setName(e.target.value)}/>
                <label htmlFor="startDate">Start date:</label>
                <input type="date" id="startDate" name="startDate" value={startDate} onChange={e => setStartDate(e.target.value)} />
                <label htmlFor="finishDate">Finish date:</label>
                <input type="date" id="finishDate" name="finishDate" value={finishDate} onChange={e => setFinishDate(e.target.value)} />
                <textarea placeholder='input comments' name='comments' value={comments} onChange={e => setComments(e.target.value)} />
                <select>
                    {users.length > 0 ? users.map((user, idx) =>
                            selectedUsers.map(user => user.username).includes(user.username) ? null : <option onClick={() => addSelectUser(user)} key={idx + user.username}>{user.fullName}</option> )
                        : <option>Loading....</option>}
                </select>
                <div className="users-selected">
                    {selectedUsers.map((user, idx) => <UserItem key={idx + user.username} user={user}
                                                                selectedUsers={selectedUsers}
                                                                setSelectedUsers={setSelectedUsers} />)}
                </div>
                <Button onClick={updateProjectHandle} className='update'>Edit project</Button>
            </form>

        </TransitionsModal>
    )
}

export default EditModalWindow