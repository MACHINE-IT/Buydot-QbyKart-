import { AddShoppingCartOutlined } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, handleAddToCart}) => {

  // const handleAddCart = () => {
  //   // console.log( "line 18 in productcard", token, items, products, product.productId, 1)
  //   // handleAddToCart(token, items, products, product._id, 1)
  // }
  return (
    // <Card className="card">
    // </Card>
    <div>
      <Card className="card" sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={product.image}
            alt={product.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.name}
            </Typography>
            <Typography variant="body2" color="black" fontWeight="700">
              ${product.cost}
            </Typography>
            <Rating
              name="read-only"
              value={product.rating}
              precision={0.5}
              readOnly
            />
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            className="card-button"
            variant="contained"
            fullWidth
            startIcon={<AddShoppingCartOutlined/>}
            onClick={() => {handleAddToCart(product._id, 1)}}
          >
            ADD TO CART
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default ProductCard;
