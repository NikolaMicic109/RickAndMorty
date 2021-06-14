import { useEffect, useState } from "react"
import "./Characters.css"
import Character from "../Character/Character"

const Characters = (props) => {


    const [char, setChar] = useState([])



    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
            .then(res => res.json())
            .then(data => {
                console.log(data.results)
                return setChar(data.results)
            })
    }, [])

    return (
        <div className="characters-container">
            {char.map(e => <Character data={e} onIdChange={props.onIdChange} />)}
        </div>
    )

}

export default Characters