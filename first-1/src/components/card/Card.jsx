import "./Card.css"
function Card({state}){

    return (
        <div className="cardUser">
              <img src={state.picture.medium} width="100%" height={"200"}/>
              <h3>{state.name.title} {state.name.first} {state.name.last}</h3> <br />
              <p>{state.gender}</p>
              <p>{state.location.city} </p>
              <p>{state.email} </p>
              <button>User Details</button>
        </div>
    )
}
export default Card;