import {useNavigate} from "react-router-dom";

function Mario(){
    const navigate = useNavigate();

    return(
        <div>
            <h2> Hi I'm Mario Bross!</h2>
            <button onClick={()=>navigate("/profile")}>
            You can go to main page, click here!!
            </button>
        </div>
    );
}

export default Mario;