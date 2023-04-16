import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styled from 'styled-components';

const NewsCarouselContainer = styled.div`
    max-width: 600px;
    position: relative;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    .carousel .control-dots {
        text-align: end;
    }
`

const NewsContainer = styled.div`
  /* Styles pour le conteneur d'une actualité */
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 16px;
`;

const NewsLeftContainer = styled.div`
    flex: 1;
`;

const NewsRightContainer = styled.div`
    flex: 1;
    flex-direction: column;
    align-items: center;
`;

const NewsImage = styled.img`
  /* Styles pour l'image d'une actualité */
  max-width: 250px; /* Réduire la largeur de l'image */
  object-fit: cover;
  margin-right: 16px;
`;

const NewsTitle = styled.h3`
  /* Styles pour le titre d'une actualité */
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const NewsSummary = styled.p`
  /* Styles pour le contenu d'une actualité */
  font-size: 14px;
  text-align: left;
`;

interface NewsProps {
    title: string
    summary: string
    imageUrl: string
}

const News = ({ title, summary, imageUrl }: NewsProps) => {
    return (
        <NewsContainer>
            <NewsLeftContainer>
                <NewsImage src={imageUrl} alt={title} />
            </NewsLeftContainer>
          <NewsRightContainer>
            <NewsTitle>{title}</NewsTitle>
            <NewsSummary>{summary}</NewsSummary>
          </NewsRightContainer>
        </NewsContainer>
      )
  }

const NewsCarousel = () => {

  const newsData = [
    { id: 1, title: 'Sortie scolaire au musée', summary: 'Les élèves de 5e ont visité le musée local pour en apprendre davantage sur l\'histoire de la région.', imageUrl: 'https://images.unsplash.com/photo-1572953109213-3be62398eb95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' },
    { id: 2, title: 'Compétition de déclamation de poésie', summary: 'Les élèves de 8e ont participé à une compétition de déclamation de poésie, démontrant leur talent littéraire.', imageUrl: 'https://images.unsplash.com/photo-1473186505569-9c61870c11f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' },
    { id: 3, title: 'Conférence sur la culture islamique', summary: 'Une conférence sur la culture islamique a été organisée pour les élèves et le personnel, avec des intervenants invités spécialisés dans le sujet.', imageUrl: 'https://img.freepik.com/photos-gratuite/black-microphone-dans-salle-conference_1232-3128.jpg?w=1800&t=st=1681680033~exp=1681680633~hmac=36b647b6f69b30e31cfc19f177be9dde8adddeaa6f2cf83bae0447f9e7e72fb5' },
  ];

  return (
    <NewsCarouselContainer>
      <Carousel showArrows={false} showThumbs={false} autoPlay infiniteLoop interval={15000} showStatus={false}>
        {newsData.map(news => (
            <News key={news.id} {...news} />
        ))}
      </Carousel>
    </NewsCarouselContainer>
  )
}

export default NewsCarousel
