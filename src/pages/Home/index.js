
import { Box, Button } from "@mui/material"
import products from "./products"


const id = ()=>  Math.random().toString(16).slice(2)

export default function Home () {
    return (
        <Box
            sx={{
                padding: "1rem",
                display: "grid",
                gridAutoRows: "auto",
                gridTemplateColumns: "repeat(auto-fill, minmax(15rem, 1fr))",
                gap: "10px",
                background: "#555"
                
            }}
        >
            {products.map(product=> (
                <ProductCard2 {...product} key={id()} className="card"/>
            ))}
        </Box>
    )
}


function ProductCard({ name, desc, image }) {
    return (
        <Styled>  
            <img src={ image }/>
            <h3>{ name }</h3>
            <p>{ desc }</p>
            <Button>Ver producto</Button>
        </Styled>
    )
}

function Styled({ children }) {
    return (
        <Box
            sx={{
                ["& img"]:{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                },
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                boxShadow: "3px 3px 5px 0px rgba(0,0,0, 0.5)",
                padding: "1rem",
            }}
        >   
            {children}
        </Box>
    )
}

function ProductCard2({ image, name, desc }) {
    return (
        <>
        <Box
          sx={{
            ["& .producto-card"]: {
              position: "relative",
              width: "100%",
              display: "block",
              margin:"0 auto",
              overflow: "hidden",
              height: "100%",
              ["& img"]: {
                width: "100%",
                height: "100%",
                objectFit: "cover"
              },
              ["& .title-price"]: {
                  position: "absolute",
                  top: "0",
                  background: "#444",
                  color: "#FFF",
                  padding: "0.5em",
                  transition: "all 200ms ease-in",
              },
            },
            ["& .producto-card:hover"]: {
              ["& .producto-card-info"]: {
                  opacity: "1"
              },
              ["& .title-price"]: {
                opacity: "0"
              }
            },
            ["& .producto-card-info"]: {
              position: "absolute",
              textAlign: "center",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              padding: "1.5rem",
              border: "thin solid white",
              backgroundColor: "rgba(0,0,0,0.5)",
              color: "#fff",
              opacity: "0",
              pointerEvents: "none",
              display: "flex",
              alignItems: "center",
              justifyCenter: "center",
              transition: "all 200ms ease-in",
              boxShadow: "inset 0 0 0 10px white",
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
           <a href="#producto" class="producto-card">
              <img src={image} alt="images"/>
              <div className="title-price">
                  <h3>{ name }</h3>
                  <legend>$500,000</legend>
              </div>
                <aside class="producto-card-info">
                <div>
                    <p>{ desc }</p>
                </div>
                </aside>
                </a>
          </Box>  
        </>
    )
}