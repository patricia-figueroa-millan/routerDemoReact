import {useNavigate} from "react-router-dom";

function Luigi(){
    const navigate = useNavigate();
    return(
        <div>
            <h2> Hi I'm Luigi!</h2>
            <p>The Mario's brother!!!</p>
            <button onClick={()=>navigate("/")}>
                You can go to main page, click here!!
            </button>
        </div>
    );
}

export default Luigi;