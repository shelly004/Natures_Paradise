import React from "react";


export default function login() {
    return (

        <div class="loginBlock">
            <h3>AUTHENTICATION</h3>
            <div class="createAccount">
                <form>
                    <h2>Add Account</h2>
                    <p><label for="email">Email : </label>
                        <input type="email" name="email" required="required" /></p>
                    <p><label for="password">Password : </label>
                        <input type="password" name="password" required="required" /></p>
                    <p><a href="#"><input type="submit" value="Create Account" /></a></p>
                </form>
            </div>
            <div class="alreadyUser">
                <form>
                    <h2>Already a User??</h2>
                    <p><label for="email">Email : </label>
                        <input type="email" name="email" required="required" /></p>
                    <p><label for="password">Password : </label>
                        <input type="password" name="password" required="required" /></p>
                    <p><a href="#"><input type="submit" value="Login" /></a></p>
                </form>
            </div>
        </div>

    )

}