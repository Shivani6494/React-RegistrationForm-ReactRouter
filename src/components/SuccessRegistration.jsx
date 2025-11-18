import { useLocation, useNavigate } from 'react-router-dom';

function SuccessRegisteration() {
  const {state} = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return <p>No Data Found, Please Submit the Form First.</p>
  }

  return (
    <div>
      <h2>Registration Successful!</h2>
      <p><strong>Welcome </strong> {state.firstName} {state.lastName} !!</p>

    <button style={{ marginTop: "20px" }} onClick={() => navigate("/")}>Go Back</button>    
    </div>
  )
}

export default SuccessRegisteration
