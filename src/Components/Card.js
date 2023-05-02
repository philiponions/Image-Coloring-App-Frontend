import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Card.css'

function CardComp(props) {
  return (
    <div class="card-container">
        <Card>
        <Card.Img variant="top" src="https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQkrjYxSfSHeCEA7hkPy8e2JphDsfFHZVKqx-3t37E4XKr-AT7DML8IwtwY0TnZsUcQ" />
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
            {props.date}
            </Card.Text>
            <div style={styles.optionsContainer}>
                <Button variant="primary">View this image</Button>        
                <div style={styles.button}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 96 960 960" width="48"><path d="M220 896q-24 0-42-18t-18-42V693h60v143h520V693h60v143q0 24-18 42t-42 18H220Zm260-153L287 550l43-43 120 120V256h60v371l120-120 43 43-193 193Z"/></svg>
                </div>
            </div>
        </Card.Body>
        </Card>
    </div>
  );
}

const styles = {
    optionsContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    },
    button: {
        cursor: "pointer"
    },
    container: {
        maxWidth: '18rem',
        minWidth: '18rem',
        flex: "25%",
    //     backgroundColor: "green",
    //     "@media (max-width: 767px)": {            
    //         backgroundColor: "red"
    //     },

    }
}

export default CardComp;