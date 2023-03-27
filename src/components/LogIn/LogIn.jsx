import React from "react"
import { Card } from "../Card"
import "./styles.css"

const LogIn = () => {
	return (
		<Card>
			<Card isSmall>
				<label htmlFor="user">Usuario</label>
				<input type="text" name="user" />

				<label htmlFor="password">Contraseña</label>
				<input type="password" name="password" />

				<button>Aceptar</button>
			</Card>
		</Card>
	)
}

export default LogIn
