import React from 'react'
import PropTypes from 'prop-types' // eslint-disable-line
import Img from 'gatsby-image'
import styled from 'styled-components'

import { articlePropTypes } from './articlePropTypes'

const colorAccent = '#0741AD'

const CardImageWrapper = styled.div`
  position: relative;
  flex: 220px 0 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;

  .gatsby-image-wrapper {
    height: 100%;
    position: static !important;
  }

  img {
    margin: 0;
    object-fit: cover;
    height: 100%;
    min-width: 100%;
  }
`

const CardImageDate = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 1;
  background: ${colorAccent};
  width: 3rem;
  height: 3rem;
  padding: 0.4rem 0;
  border-radius: 100%;
  color: white;
  font-weight: 700;
  text-align: center;

  .day {
    font-size: 1rem;
    line-height: 1.3;
  }

  .month {
    font-size: 0.7rem;
    line-height: 1;
    text-transform: uppercase;
  }
`

const CardImageType = styled.div`
  position: absolute;
  background: ${colorAccent};
  color: white;
  left: 0;
  bottom: 0;
  padding: 0.4em 0.9em;
`

const ArticleCardImage = ({ article }) => {
  const { date, mainImage, postType } = article
  const currentDate = new Date(date)
  const month = currentDate.toLocaleString('pl-PL', { month: 'short' })
  const day = currentDate.getDate()

  return (
    <CardImageWrapper>
      {mainImage && (
        <Img fluid={mainImage.fluid} alt={mainImage.description || ''} />
      )}
      <CardImageType>
        {postType && postType[0] === 'article' ? 'ARTYKUŁ' : 'NEWS'}
      </CardImageType>
      <CardImageDate>
        <div className="day">{day}</div>
        <div className="month">{month}</div>
      </CardImageDate>
    </CardImageWrapper>
  )
}

ArticleCardImage.propTypes = {
  article: PropTypes.shape(articlePropTypes.node).isRequired,
}

export default ArticleCardImage
