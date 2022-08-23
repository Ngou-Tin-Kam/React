function Product(props) {
    const {name, cost, quantity} = props;

    return (
        <div>
            <p>Name: {name}</p>
            <p>Cost: {cost}</p>
            <p>Quantity: {quantity}</p>
        </div>
    )
}

export default Product;

Product.defaultProps = {
    name: "Chocolate bar",
    cost: 5.00,
    quantity: 50,
};