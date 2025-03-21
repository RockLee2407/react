import { useState } from "react";
import { Button, Container } from "react-bootstrap";

function Bai2_lab3() {
    const [counter, setCounter] = useState(0);
    const [message, setMessage] = useState("");
    const handleIncrease = () => {
        setCounter(counter + 1);
        setMessage("tăng");
    };
    const handleDecrease = () => {
        if (counter > 0) {
            setCounter(counter - 1);
            setMessage("giảm");
        }
    };
    return (
        <Container className="text-center mt-5">
            <h1>Giá hiện tại: {counter}</h1>
            <p>Trạng thái: {message} </p>
            <button variant="success" onClick={handleIncrease} className="me-2" >Tăng giá trị</button>
            <button variant="danger" onClick={handleDecrease} className="me-2" >Giảm giá trị</button>
        </Container>
    )
}

export default Bai2_lab3;   