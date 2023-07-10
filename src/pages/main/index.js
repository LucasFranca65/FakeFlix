import React, {useState, useEffect } from 'react';
//import firebase from 'firebase/compat';
import { auth, db } from '../../services/firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../components/Header';
import {StyledContainer, StyledRow,StyledCard, StyledCardImg, StyledButton, StyledCardText, StyledCardBody} from './styles.js';
import {Container, Card, Row, Col, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Main(){
  const [movies, setMovies] = useState([])

  useEffect(()=>{
    async function loadMovies() {
      db.collection('movies').get().then((moviesSnapshot)=>{
        const temporary = []
        moviesSnapshot.forEach((doc)=>{
          console.log(doc.data())
          temporary.push(doc.data())
        })
        setMovies(temporary)
      })
      
    }
    loadMovies()
   
  },[])

    return(
        <>
          <Header />
          <StyledContainer>
            <h1 style={{ color: '#fff', marginTop: '20' }}>FakeFlix</h1>            
            <StyledRow >

            {movies.map(movie=>
              <StyledCard key = {movie.id}>
              <StyledCardImg
                variant="top"
                src={movie.image}
              />
              <StyledCardBody>
                <Card.Title>{movie.title}</Card.Title>
                <StyledCardText>
                  {movie.description}
                </StyledCardText>
                <StyledButton variant="outline-dark">Assistir</StyledButton>
              </StyledCardBody>
            </StyledCard>
            )}

            </StyledRow>
          </StyledContainer>
        </>
      );
}

export default Main;
