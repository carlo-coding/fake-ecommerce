import { Box } from "@mui/material";
import React from "react";
import { Link } from "wouter";
import { ImMenu } from "react-icons/im";
//import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';


export default function Layout({ children }) {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                ["& header"]:  {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "#222",
                    padding: "1em",
                    ["& img"]: {
                        borderRadius: "50%",
                        width: "40px",
                        cursor: "pointer"
                    },
                    ["& nav"]: {
                        display: "flex",
                        gap: "30px",
                        color: "#FFF",
                        ["& a"]: {
                            color: "#FFF",
                            textDecoration: "none"
                        }
                    },
                    ["@media (min-width: 600px)"]: {
                        ["& .icon"]: {
                            display: "none",
                            color: "#FFF"
                        },
                        ["& nav"]: {
                            display: "inline-block"
                        }
                    }
                }
            }}
        >
            <header>
                <div><Link href="/"><img src="https://picsum.photos/100/100?grayscale" /></Link></div>
                <nav>
                    <Link href="/login">Inicia sesión / Registrarse</Link>
                </nav> 
                <ImMenu className="icon"/>
            </header>
            <React.Fragment>
                {children}
            </React.Fragment>
        </Box>
    )
}