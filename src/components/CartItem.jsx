import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

function CartItem({ item }) {
  const { title, description, price, imageUrl } = item;

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imageUrl} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {description && (
          <Card.Subtitle className="mb-2 text-muted">
            {description}
          </Card.Subtitle>
        )}
        <Card.Text>{price}</Card.Text>
        {/* Add other necessary details */}
      </Card.Body>
    </Card>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string, // Add description validation
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default CartItem;
