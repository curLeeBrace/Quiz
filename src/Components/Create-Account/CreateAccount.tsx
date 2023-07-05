import "./CreateAccount.css"
function CreateAccount() {
    return(
        <div id = "create-container">
            <div id = "box">
                <div id = "box1">

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
                <div id = "box2">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum omnis, excepturi voluptatem quis qui enim quae sint explicabo tenetur nihil autem culpa dolor voluptate suscipit, perspiciatis impedit quibusdam, ab ipsam.</p>
                </div>
            

            </div>
       

            

        </div>
    );

 

}
export default CreateAccount;