import React from 'react'
import {Button} from "./utils/Button";
import TransitionsModal from "./utils/TransitionsModal";
import EditModalWindow from "./windows/EditModalWindow";
import DeleteModalWindow from "./windows/DeleteModalWindow";

const dateFormatter = (date) => {
    const day = '' + date.getDate() > 9 ? date.getDate() : '0' + date.getDate()
    const month = '' + date.getMonth() > 9 ? date.getMonth() : '0' + date.getMonth()
    const year = '' + date.getFullYear()
    return `${day}.${month}.${year}`
}

export const ProjectItem = ({project}) => {
    return (
        <div className="fragment light-shadow">
            <div className="head">
                <div className="name">
                    {project.name}
                </div>
                <div className="dates">
                    <div className="info-line">
                        Date start: {project.dateStart}
                    </div>
                    <div className="info-line">
                        Date finish: {project.dateFinish}
                    </div>
                </div>
            </div>
            <div className="info-box">
                <div className="info">
                    <div className="title">
                        Comments
                    </div>
                    <div className="info-item">
                        <div className="text">
                            {project.comments}
                        </div>
                    </div>
                </div>
                <div className="info teams">
                    <div className="title">
                        Teams
                    </div>
                    <div className="info-item">
                        {project.teams.map((team, idx) =>
                            <div key={team + idx} className="team-item">{team.fullName}</div>)}
                    </div>

                </div>
            </div>
            <div className="btn-controls">
                <EditModalWindow project={project}/>
                <DeleteModalWindow project={project} />
            </div>
        </div>
    )
}