import React from 'react'

function Login() {
  return (
    <div style={styles.container}>
        <div style={styles.loginContainer}>            
            <h1>Login</h1>
            <form>  
                <div class="form-outline mb-4">
                    <input type="email" id="form2Example1" class="form-control" />
                    <label class="form-label" for="form2Example1">Email address</label>
                </div>                
                <div class="form-outline mb-4">
                    <input type="password" id="form2Example2" class="form-control" />
                    <label class="form-label" for="form2Example2">Password</label>
                </div>
                <button type="button" class="btn btn-primary btn-block mb-4">Sign in</button>
                
                <div class="text-center">
                    <p>Not registered? <a href="#!">Sign up</a></p>                                        
                </div>
            </form>
        </div>
    </div>
  )
}

const styles = {
    container: {

        display: "flex",
        justifyContent: "center",        
        alignItems: "center",
        height: "100vh",
        textAlign: "center"
    },
    loginContainer: {
        width: "25%",
        height: "60%",        
    }
}

export default Login