import React, {useContext} from 'react'
import {DataContext} from "../../context/data/dataContext";
import TransitionsModal from "../utils/TransitionsModal";
import {Button} from "../utils/Button";


const DeleteModalWindow = ({project}) => {
    const {removeProject} = useContext(DataContext)
    return (
        <TransitionsModal title='Edit project' buttonClass='delete' buttonText='Delete'>

            <form className="modal-form">
                Are you sure you want to delete the project '{project.name}'?
                <Button onClick={() => removeProject(project)} className='delete'>Delete</Button>
            </form>

        </TransitionsModal>
    )
}

export default DeleteModalWindow