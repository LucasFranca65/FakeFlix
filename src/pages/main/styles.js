import {Container, Card, Row, Col, Button} from 'react-bootstrap'
import styled  from "styled-components";

export const StyledContainer = styled(Container)`
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 300px;
`;
export const StyledRow = styled(Row)`
    display: flex;
    justify-content: center; 
`;
export const StyledCardImg = styled(Card.Img)`
    width: 200px;
    height: 300px;
    align-self: center;
    padding-top: 20px; 
    cursor: pointer;
`;
export const StyledCardBody = styled(Card.Body)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
export const StyledCardText = styled(Card.Text)`
    font-size: 8;
`;
export const StyledCard = styled(Card)`
    width: 250px;
    margin: 10px;
`;

export const StyledButton =styled(Button)`
    width: 100%
`;


