import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";


//yup validation schema
const schema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().email("Invalid email format").matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/,"Invalid email").required("Email is required"),
  password: yup.string().required("Password is required").min(6, "Minimum 6 characters"),
  confirmPassword: yup.string().oneOf([yup.ref("password"),null], "Passwords must match"),
  });

//Password strength function
const getStrength = (password) => {
  if (!password) return "";
  if (password.length < 6) return "Weak";
  if (password.match(/[A-Z]/) && password.match(/[0-9]/)) return "Strong";
  return "Medium";
}

function RegistrationForm() {
const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ resolver: yupResolver(schema)});

  //track password strength
  const passwordValue = watch("password");
  const currentStrength = getStrength(passwordValue);

  const onSubmit = (data) => {
    navigate("/successRegisteration", {state: data });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{maxWidth: "200px", display: "inline-grid", padding: "20px"}}> 
      <h2>Register</h2>
      <label>First Name</label>
      <input {...register("firstName")}/>
      <p style={{color: "red"}}>{errors.firstName?.message}</p>
      
      <label>Last Name</label>
      <input {...register("lastName")}/>
      <p style={{color: "red"}}>{errors.lastName?.message}</p>

      <label>Email</label>
      <input {...register("email")}/>
      <p style={{color: "red"}}>{errors.email?.message}</p>

      <label>Password</label>
      <input type="password" {...register("password")}/>
      <p style={{color: "red"}}>{errors.password?.message}</p>

      {/*password strength meter*/}
      {passwordValue && (
        <p
          style={{
            color: 
              currentStrength === "Strong"
              ? "green"
              : currentStrength === "Medium"
              ? "orange"
              : "red",
          }}
          >
            Strength: {currentStrength}
          </p>
      )}

      <label>Confirm Password</label>
      <input type="password" {...register("confirmPassword")}/>
      <p style={{color: "red"}}>{errors.confirmPassword?.message}</p>

      <button type="submit" style={{marginTop: "25px"}}>Submit</button>
    </form>
  )
}

export default RegistrationForm
