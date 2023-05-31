export default function Login(){
    return (
        <form className="login-form">
          <h3 className="login-heading">Login</h3>
          <div className="login-input-container">
            <label htmlFor="email" className="login-label">Email:</label>
            <input type="email" id="email" className="login-input" />
          </div>
          <div className="login-input-container">
            <label htmlFor="password" className="login-label">Password:</label>
            <input type="password" id="password" className="login-input" />
          </div>
          <button type="submit" className="login-button">Submit</button>
        </form>
      );
};
