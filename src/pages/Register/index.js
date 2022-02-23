import { Box, TextField, Button } from "@mui/material";




export default function Login() {


    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "100vh",
                background: "#333",
                ["& .login-cont"]: {
                    display: "flex",
                    background: "#444",
                    flexDirection: "column",
                    gap: "10px",
                    boxShadow: "3px 3px 5px 0 rgba(0,0,0,0.5)",
                    borderRadius: "10px",
                    padding: "2rem 5rem",
                    "& .MuiOutlinedInput-input": {
                        color: "#FFF",
                        background: "rgba(255, 255, 255, .1)"
                    }
                }
            }}
        >
            <div className="login-cont">
                <TextField placeholder="Nombre"/>
                <TextField placeholder="Apellido"/>
                <TextField placeholder="Ingresa tu email"/>
                <TextField placeholder="Contraseña"/>
                <TextField placeholder="Confirmar contraseña"/>
                <Button>Crear cuenta</Button>
            </div>
        </Box>
    )
}