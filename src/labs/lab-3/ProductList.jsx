import { useState } from "react";
import ProductItem from "./ProductItem";
import { Container, Table } from "react-bootstrap";

function ProductList() {
    const [products] = useState([
        {
            id: 1,
            name: "Laptop Acer Aspire Lite AL16-51P-55N7 i5 1235U/16GB/512GB/16 WUXGA/Win11",
            image: "https://cdn2.fptshop.com.vn/unsafe/750x0/filters:quality(100)/00909218_acer_aspire_lite_al16_51p_55n7_2d7003f055.png",
            quantity: 10,
            status: "Còn hàng",
            price: 13790000,
        },
        {
            id: 2,
            name: "Laptop Lenovo V15 G4 IRU i5 13420H/16GB/512GB/15.6FHD/Win 11",
            image: "https://cdn2.fptshop.com.vn/unsafe/750x0/filters:quality(100)/2024_5_23_638520742943731792_83A100G0VN.jpg",
            quantity: 10,
            status: "Còn hàng",
            price: 14990000,
        },
        {
            id: 3,
            name: "Laptop Asus Vivobook Flip TN3402YA-LZ188W R5-7530U/16GB/512GB/14 Touch/Win11",
            image: "https://cdn2.fptshop.com.vn/unsafe/750x0/filters:quality(100)/2023_3_24_638152764193437366_asus-vivobook-flip-tn3402y-bac-1.jpg",
            quantity: 10,
            status: "Còn hàng",
            price: 15990000,
        },
    ])
    return (
        <Container className="mt-5">
            <h1 className="text-center">Danh sách sản phẩm</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên sản phẩm</th>
                        <th>Ảnh</th>
                        <th>Số lượng</th>
                        <th>Trạng thái</th>
                        <th>Giá</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) =>
                        <ProductItem key={product.id} product={product} />)}
                </tbody>
            </Table>
        </Container>
    )
}

export default ProductList;