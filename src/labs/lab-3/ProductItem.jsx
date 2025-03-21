import { Badge } from "react-bootstrap";

function ProductItem({ product }) {
    const formatPrice = (price) => {
        return new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
        }).format(price);
    }

    return (
        <tr>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>
                <img src={product.image} alt={product.name} style={{ width: "100px" }} />
            </td>
            <td>{product.quantity}</td>
            <td>
                <Badge bg={product.status === "Còn hàng" ? "success" : "danger"}>
                    {product.status}
                </Badge>
            </td>
            <td>{formatPrice(product.price)}</td>
        </tr>
    )
}

export default ProductItem;