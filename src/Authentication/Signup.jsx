import { Link, useNavigate } from "react-router-dom";
import Style from "./auth.module.css";
import { GoEyeClosed, GoEye } from "react-icons/go";
import { useForm } from "react-hook-form";
import { useState } from "react";
import usePasswordToggle from "../CustomHooks/usePasswordToggle";
import Toast from "../Components/Toast/Toast";
import AuthBtn from "../Components/Button/AuthBtn";
import useToastMessageToggle from "../CustomHooks/useToastMessageToggle";
import banner from "/images/authmain.jpg";

export default function Signup() {
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

        const existingUser = userData.find((user) => user.email === data.email);

        if (existingUser) {
          setErrorMesssage("User already exists");
          setLoading(false);
          return;
        }

        userData.push(data);
        localStorage.setItem("userData", JSON.stringify(userData));

        setSuccessMessage("Sign up successfully");
        reset();
        setTimeout(() => {
          navigate("/", { replace: true });
        }, 2000);
      } catch (err) {
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

          {/* form main */}
          <form className={Style.formMain} onSubmit={handleSubmit(onSubmit)}>
            <div className={Style.formHeadingArea}>
              <div className={Style.formTitle}>Create an Account</div>
              <div className={Style.formPara}>
                <span>Already have an account?</span>
                <Link to="/" className={Style.formLink}>
                  Log in
                </Link>
              </div>
            </div>

            <div className={Style.formfieldArea}>
              {/* username field */}
              <div className={Style.formBox}>
                <input
                  type="text"
                  className={Style.formField}
                  placeholder="User Name"
                  {...register("username", {
                    required: "Username is required",
                    minLength: {
                      value: 3,
                      message: "Username must be at least 3 characters",
                    },
                    maxLength: {
                      value: 20,
                      message: "Username must not exceed 20 characters",
                    },
                    pattern: {
                      value: /^(?! )[A-Za-z0-9._ ]{3,20}(?<! )$/,
                      message:
                        "Spaces allowed only between words (not at start or end)",
                    },
                  })}
                />

                {errors.username && (
                  <p className={Style.errorMsg}>{errors.username.message}</p>
                )}
              </div>

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

              {/* password field */}
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

              {/* resister btn */}
              <div className={Style.formBtnArea}>
                <AuthBtn loaderCheck={loading}>Register</AuthBtn>
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
