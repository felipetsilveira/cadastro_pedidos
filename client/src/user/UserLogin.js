import React, { useState } from 'react'
import '../style/UserLogin.css'

export default function UserLogin(props) {
    return(
        <div className="form-login">
            <h1>Login</h1>
            <form>
                <input type="text" className="input" placeholder="Usuário" name="user"></input><br />
                <input type="password" className="input" placeholder="Senha" name="password"></input>
                <br />
                <button className="input">Entrar</button>
                <hr />
            </form>
        </div>
    )
}