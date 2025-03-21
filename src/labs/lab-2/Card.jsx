function Card({title, content, children}) {
    return(
        <div
            style={{
                border: "1px solid #ccc",
                margin: "10px",
                padding: "10px",
                borderRadius: "5px",
                textAlign:"center",
                color: "red", 
                
            }}
        >
            <h3>{title}</h3>
            <p>{content}</p>
            {children && <div>{children}</div>}
        </div>
    )
}

export default Card