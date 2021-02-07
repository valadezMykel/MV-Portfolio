import React from 'react'
import ProjectRow from './projectCards/projectRow'

export default function Projects() {
    return (
        <div>
            <ProjectRow 
            title='Workout Magic'
            repoLink='https://github.com/valadezMykel/Workout_Magic' 
            deployLink='https://infinite-eyrie-49427.herokuapp.com/?id=6004b20a4b1ddd0015e9b362'
            description='This project is designed as a way for clients to track their workouts in a way that gave them a way to visually track their projects.  As an exercise this project helped me to refine my ability to work with non-relational databases, specifically mongooseDB.  Exploring the advantages and disadvantages of a nosql database and how to use it effectively.'
            isReversed={false}
            image='/projectImgs/workout_magic.png'
            />
            <ProjectRow 
            title='Workout Magic'
            repoLink='https://github.com/valadezMykel/Workout_Magic' 
            deployLink='https://infinite-eyrie-49427.herokuapp.com/?id=6004b20a4b1ddd0015e9b362'
            description='This project is designed as a way for clients to track their workouts in a way that gave them a way to visually track their projects.  As an exercise this project helped me to refine my ability to work with non-relational databases, specifically mongooseDB.  Exploring the advantages and disadvantages of a nosql database and how to use it effectively.'
            isReversed={true}
            image='/projectImgs/workout_magic.png'
            />
            <ProjectRow 
            title='Workout Magic'
            repoLink='https://github.com/valadezMykel/Workout_Magic' 
            deployLink='https://infinite-eyrie-49427.herokuapp.com/?id=6004b20a4b1ddd0015e9b362'
            description='This project is designed as a way for clients to track their workouts in a way that gave them a way to visually track their projects.  As an exercise this project helped me to refine my ability to work with non-relational databases, specifically mongooseDB.  Exploring the advantages and disadvantages of a nosql database and how to use it effectively.'
            isReversed={false}
            image='/projectImgs/workout_magic.png'
            />
        </div>
    )
}
