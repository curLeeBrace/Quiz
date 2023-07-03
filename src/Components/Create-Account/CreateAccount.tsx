import "./CreateAccount.css"
function CreateAccount() {
    return(
        <div id = "create-container">
            <div id = "box">
                <div>Sign Up</div>
            <div>
                 <form>
                    <div id = "form-container">
                    <div>
                            <label>
                                Email <br/>
                                <input type="email"/>
                            </label>
                        </div>
                        <div>
                            <label>
                                Username <br/>
                                <input type="text"/>
                            </label>
                        </div>
                        <div>
                            <label>
                                Password <br/>
                                <input type="password"/>
                            </label>
                        </div>
                        <div>
                            <label>
                                Re-Type Password <br/>
                                <input type="password"/>
                            </label>
                        </div>
                    
                        <div>
                            <button>Create</button>
                        </div>
                        
                        
                        </div>
                </form>
            </div>

            </div>

        </div>
    );

 

}
export default CreateAccount;