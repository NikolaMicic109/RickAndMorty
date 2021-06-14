import "./Character.css"

const Character = (props) => {

    const getID = () => {
        props.onIdChange(props.data.id)
    }


    return (<div className="character-container" key={props.data.id}>
        <img src={props.data.image} alt=""></img>
        <h4 onClick={getID}>{props.data.name}</h4>
        <button>Like</button>
    </div>
    )
}

export default Character



