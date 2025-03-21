import { useState } from "react";
import { Button, Container } from "react-bootstrap";

function Bai1_lab3() {
    const [count, setCount] = useState(0);
    return (
        <Container className="text-center mt-5">
            <h1>Số lần nhấn nút: {count}</h1>
            <Button variant="secondary" onClick={() => setCount(count + 1)}>Nhấn tôi</Button>
        </Container>
    )
}

export default Bai1_lab3