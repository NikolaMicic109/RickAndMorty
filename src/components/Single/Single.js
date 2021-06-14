import { useEffect, useState } from "react"
import "./Single.css"


const Single = (props) => {


    const [single, setSingle] = useState({})

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${props.id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                return setSingle(data)

            })
    }, [])


    return (
        <div className="singleChar">
            <h4>{single.name}</h4>
            <img src={single.image} />
            <h4>{single.gender}</h4>
            <h4>{single.species}</h4>
            <h4>{single.status}</h4>
        </div>
    )
}


export default Single