import {useState} from "react"
import products from "../pages/Home/products"
import { Box, TextField } from "@mui/material";

function ProductCard({ image }) {
    return (
        <>
        <Box
          sx={{
            marginRight: "auto",
            marginLeft: "auto",
            maxWidth: "1200px",
            ["& .producto-card"]: {
              position: "relative",
              width: "100%",
              display: "block",
              margin:"0 auto",
              ["& img"]: {
                width: "100%",
                objectFit: "cover"
              }
            },
            ["& .producto-card:hover"]: {
              ["& .producto-card-info"]: {
                  opacity: "1"
              }
            },
            ["& .producto-card-info"]: {
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              padding: "1rem",
              backgroundColor: "rgba(0,0,0,0.5)",
              color: "#fff",
              opacity: "0",
              pointerEvents: "none",
              transition: " all 0.5s ease-in-out",
              ["& .producto-card:hover .producto-card-info"]: {
                  opacity: "1",
                  pointerEvents: "auto",
              },
              ["& .producto-card-info > div "]: {
                padding: "1rem",
                width:"100%",
                height:"100%",
                border:" thin solid red",
              }
                
              }}
            }
        >
          <div className="container">
           <a href="#producto" class="producto-card">
              <img src={image} alt="images"/>
                <aside class="producto-card-info">
                <div>
                  <h3>Producto 1</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quibusdam modi dolore, ab unde labore totam
                        repudiandae omnis quam nesciunt eveniet, sequi ipsam ad culpa voluptatibus delectus ex voluptas       provident?
                    </p>
                  </div>
                </aside>
                </a>
              </div>
          </Box>  
        </>
    )
}

const id = ()=>  Math.random().toString(16).slice(2)

const Login = () => {
  return <>
        <section>
         {products.map(product=> (
                <ProductCard {...product} key={id()}/>
            ))}
        </section>
   </>
}

export default Login