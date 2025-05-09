const Register = () => {
  return (
    <section className="sign__in">
        <img src="/create.png" alt="" />
        <div className="create__account">
            <h1>Create an account</h1>
            <form className="register">
                <span>Enter your details below</span>
                <input type="text" placeholder="Name"  required/>
                <input type="text" placeholder="Email or Phone Number" required/>
                <input type="text" placeholder="Password" required/>
                <button className="account">Create Account</button>
                <button className="google"><img src="/google.svg" alt="" />Sign up with Google</button>
            </form>
            <div className="already__have">
                <span>Already have account?</span>
                <a href="#">Log in</a>
            </div>
        </div>
    </section>
  )
}

export default Register