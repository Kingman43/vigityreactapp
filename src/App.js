import React from 'react';
import logo from './images/FrogFace_96x96.png';
import './App.css';
import { AmplifyAuthenticator, AmplifySignUp, AmplifySignIn, AmplifySignOut } from '@aws-amplify/ui-react'

function App() {

    return (
        <div className="App">
            <AmplifyAuthenticator usernameAlias="email">
                <header>
                    <img src={logo} alt="logo" />
                    <h1>Welcome to Test Vigity</h1>

                    <AmplifySignOut slot="sign-out"/>
                </header>

                <AmplifySignUp
                    slot="sign-up"
                    usernameAlias="email"
                    headerText="Create a new Vigity Account"
                    formFields={[
                        {
                            type: "email",
                            inputProps: { required: true, autocomplete: "username" },
                        },
                        {
                            type: "password",
                            inputProps: { required: true, autocomplete: "new-password" },
                        },
                    ]}
                />
                <AmplifySignIn
                    slot="sign-in"
                    usernameAlias="email"
                    headerText="Sign in to Vigity"
                />

            </AmplifyAuthenticator>
        </div>
    );
}
export default App;
//export default withAuthenticator(App);
//export default withAuthenticator(App, { usernameAlias: "email"} );

