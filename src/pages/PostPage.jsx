import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { url } from "../constants/api";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Reviews from "../components/posts/Reviews";

function PostPage() {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const [cart, setCart] = useState(
    () => JSON.parse(localStorage.getItem("cart")) || []
  );

  useEffect(() => {
    async function getData(url) {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetch(url);
        const json = await response.json();

        setPost(json);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getData(`${url}/${id}`);
  }, [id]);

  const handleAddToCart = () => {
    const isPostInCart = cart.some((item) => item.id === post.id);

    if (!isPostInCart) {
      const postForCart = {
        id: post.id,
        title: post.title,
        price: post.price,
      };

      const updatedCart = [...cart, postForCart];
      setCart(updatedCart);

      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
    navigate("/cart");
  };

  if (isLoading || !post) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }
  const { title, description, price, imageUrl, reviews } = post;
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imageUrl} alt={title} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {description}
          </Card.Subtitle>
          <Card.Text>{price}</Card.Text>
          {reviews.length > 0 && <Reviews reviews={reviews} />}
          <Button variant="dark" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default PostPage;
