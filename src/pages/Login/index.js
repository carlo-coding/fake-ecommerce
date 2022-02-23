import { Box, TextField, Button } from "@mui/material";
import { useState } from "react";


const hover = {
    transform: "translateX(87%)",
}


export default function Login() {
    const [expanded, setExpanded] = useState(false);

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "100vh",
                background: "#1d1e26",
                position: "relative",
                "& .MuiOutlinedInput-input": {
                    color: "#FFF",
                    background: "#1d1e26",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                    border: "none"
                },
                "& .button-btn": {
                    border: "none",
                    position: "absolute",
                    borderRadius: "50%",
                    background: "rgba(25, 118, 210, 0.7)",

                    width: "50px",
                    height: "50px",
                    color: "#FFF",
                    right: "15px",
                    top: "2rem",
                    fontWeight: "bold",
                    cursor: "pointer"
                },
                ["& .container"]: {
                    maxWidth: "500px",
                    display: "flex",
                    background: "#444",
                    boxShadow: "3px 3px 5px 0 rgba(0,0,0,0.5)",
                    borderRadius: "10px",
                    position: "relative",
                    overflow: "hidden",
                    height: "auto",
                },
                ["& .login-cont"]: {
                    padding: "2rem 5rem",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    gap: "10px",
                    minHeight: "500px",
                    background: "#2b2b36"
                },
                ["& span"]: {
                    color: "#FFF",
                    fontSize: "0.8rem",
                    textDecoration: "none"
                },
                ["& .register-cont"]:{
                    cursor: "pointer",
                    background: expanded? "#2b2b36" : "#1d1e26",
                    padding: "2rem 5rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    right: "0",
                    top: "0",
                    transition: "all 150ms ease-in-out",
                    transform: expanded? "translateX(0)": "translateX(90%)",

                    ["&:hover"]: expanded? {} : hover,
                }
            }}
        >
            <div className="container">
                <div className="login-cont">
                <TextField placeholder="Ingresa tu email"/>
                    <TextField placeholder="Contraseña"/>
                    <Button>Iniciar sesión</Button>
                    <Button>Olvidé mi contraseña</Button>
                </div>
                <div className="register-cont" onClick={()=>setExpanded(true)}>
                    <TextField placeholder="Nombre"/>
                    <TextField placeholder="Apellido"/>
                    <TextField placeholder="Ingresa tu email"/>
                    <TextField placeholder="Contraseña"/>
                    <TextField placeholder="Confirmar contraseña"/>
                    <Button>Crear cuenta</Button>
                    
                </div>
                {expanded && <button onClick={()=>setExpanded(false)} className="button-btn">ATRAS</button>}
            </div>
        </Box>
    )
}