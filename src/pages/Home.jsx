import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    function handleClick() {
        navigate("/create");
      }
      
    return (
        <>
            <h1>HOME PAGE</h1>
            <div className="create-button-div">
                <button onClick={handleClick} className="create-button">+</button>
            </div>
        </>
    );
}

export default Home;