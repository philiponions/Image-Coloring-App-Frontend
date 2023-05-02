import React from 'react'

function Register() {
  return (
    <div style={styles.container}>
        <div style={styles.loginContainer}>            
            <h1>Register</h1>
            <form>  
                <div class="form-outline mb-4">
                    <input type="email" id="form2Example1" class="form-control" />
                    <label class="form-label" for="form2Example1">Email address</label>
                </div>
                <div class="form-outline mb-4">
                    <input type="fname" id="form2Example1" class="form-control" />
                    <label class="form-label" for="form2Example1">First Name</label>
                </div>                
                <div class="form-outline mb-4">
                    <input type="lname" id="form2Example1" class="form-control" />
                    <label class="form-label" for="form2Example1">Last Name</label>
                </div>                
                <div class="form-outline mb-4">
                    <input type="password" id="form2Example2" class="form-control" />
                    <label class="form-label" for="form2Example2">Password</label>
                </div>
                <div class="form-outline mb-4">
                    <input type="password" id="form2Example2" class="form-control" />
                    <label class="form-label" for="form2Example2">Confirm password</label>
                </div>
                <button type="button" class="btn btn-primary btn-block mb-4">Sign up</button>                            
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

export default Register