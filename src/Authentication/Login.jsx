import { Link, useNavigate } from "react-router-dom";
import Style from "./auth.module.css";
import { GoEyeClosed, GoEye } from "react-icons/go";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import usePasswordToggle from "../CustomHooks/usePasswordToggle";
import Toast from "../Components/Toast/Toast";
import AuthBtn from "../Components/Button/AuthBtn";
import useToastMessageToggle from "../CustomHooks/useToastMessageToggle";
import banner from "/images/authmain.jpg";

export default function Login() {
  // react hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // states
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMesssage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // navigate
  const navigate = useNavigate();

  // custom hook for eye toggle
  const { inputType, toggle, visible } = usePasswordToggle();

  // if login redirect to dashboard
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard", { replace: true });
    }
  }, [navigate]);

  // toast message toggle
  useToastMessageToggle({
    errorMessage,
    successMessage,
    clearError: setErrorMesssage,
    clearSuccess: setSuccessMessage,
  });

  function onSubmit(data) {
    setLoading(true);
    setErrorMesssage("");
    setSuccessMessage("");

    setTimeout(() => {
      try {
        const userData = JSON.parse(localStorage.getItem("userData") || "[]");

        const userFind = userData.find(
          (user) =>
            user.email === data.email && user.password === data.password,
        );

        if (userFind) {
          localStorage.setItem("token", "dash-token");
          localStorage.setItem("currentUser", JSON.stringify(userFind));
          setSuccessMessage("Login successfully");
          reset();
          setTimeout(() => {
            navigate("/dashboard", { replace: true });
          }, 2000);
          return;
        }

        setErrorMesssage("Invalid credentials");
      } catch (error) {
        setErrorMesssage("Something went wrong");
      } finally {
        setLoading(false);
      }
    }, 2000);
  }

  return (
    <div className="container">
      <div className={Style.formArea}>
        <div className={Style.formBoxCover}>
          {/* left image area */}
          <div className={Style.formImageArea}>
            <div className={Style.formLogo}>CorteX</div>
            <img src={banner} alt="banner" className={Style.formImage} />
          </div>

          {/* main form */}
          <form className={Style.formMain} onSubmit={handleSubmit(onSubmit)}>
            <div className={Style.formHeadingArea}>
              <div className={Style.formTitle}>Login</div>
              <div className={Style.formPara}>
                <span>Don't have an account?</span>
                <Link to="signup" className={Style.formLink}>
                  Sign up
                </Link>
              </div>
            </div>

            <div className={Style.formfieldArea}>
              {/* email field */}
              <div className={Style.formBox}>
                <input
                  type="text"
                  className={Style.formField}
                  placeholder="Email Address"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className={Style.errorMsg}>{errors.email.message}</p>
                )}
              </div>

              {/* passoword field */}
              <div className={Style.formBox}>
                <div className={Style.formPasswordField}>
                  <input
                    type={inputType}
                    className={Style.formField}
                    placeholder="Password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters",
                      },
                      pattern: {
                        value:
                          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        message:
                          "Include uppercase, lowercase, number & special character",
                      },
                    })}
                  />
                  <button
                    type="button"
                    onClick={toggle}
                    className={Style.eyeBtn}
                  >
                    {visible ? <GoEye /> : <GoEyeClosed />}
                  </button>
                </div>
                {errors.password && (
                  <p className={Style.errorMsg}>{errors.password.message}</p>
                )}
              </div>

              {/* login btn */}
              <div className={Style.formBtnArea}>
                <AuthBtn loaderCheck={loading}>Login</AuthBtn>
              </div>
            </div>
          </form>
        </div>

        {/* error / success message */}
        {errorMessage && <Toast type="error" toastMessage={errorMessage} />}
        {successMessage && (
          <Toast type="success" toastMessage={successMessage} />
        )}
      </div>
    </div>
  );
}
