import React, {useContext, useEffect} from 'react'

import {ProjectItem} from "./ProjectItem";
import {Loader} from "./utils/Loader";
import {DataContext} from "../context/data/dataContext";
import TransitionsModal from "./utils/TransitionsModal";

const projectList = [
    {
        id: 1,
        name: 'Test task',
        dateStart: new Date(2020, 11,13),
        dateFinish: new Date(2020, 11, 15),
        comments: 'No comments',
        teams: [
            'Trofimov E.V.',
            'Lirovski L.M.'
        ]
    },
    {
        id: 1,
        name: 'Test task',
        dateStart: new Date(2020, 11,13),
        dateFinish: new Date(2020, 11, 15),
        comments: 'No comments',
        teams: [
            'Trofimov E.V.',
            'Lirovski L.M.'
        ]
    }
]

export const Content = () => {

    const {loading, projectList, fetchProjectList} = useContext(DataContext)

    useEffect(() => {
        fetchProjectList()
    }, [])
    return (
        <div className='wrapper'>
            {loading ?  <Loader /> : projectList.map(project => <ProjectItem key={project.id} project={project}/>)}
        </div>
    )
}