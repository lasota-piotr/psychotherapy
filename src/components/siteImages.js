import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const withImageData = WrappedComponent => props => (
  <StaticQuery
    query={query} // eslint-disable-line no-use-before-define
    render={data => <WrappedComponent {...props} imageData={data} />}
  />
)

export const MottoImage = withImageData(props => (
  <Img
    fluid={props.imageData.mottoImage.childImageSharp.fluid}
    alt=""
    {...props}
  />
))

export const BalloonsImage = withImageData(props => (
  <Img
    fluid={props.imageData.balloonsImage.childImageSharp.fluid}
    alt="Balony w chmurach"
    {...props}
  />
))

export const JournalImage = withImageData(props => (
  <Img
    fluid={props.imageData.journalImage.childImageSharp.fluid}
    alt="Kalendarz, zapisywanie dat"
    {...props}
  />
))

export const LaptopImage = withImageData(props => (
  <Img
    fluid={props.imageData.laptopImage.childImageSharp.fluid}
    alt="Laptop i kawa na biurku"
    {...props}
  />
))

export const DeskPaperImage = withImageData(props => (
  <Img
    fluid={props.imageData.deskPaperImage.childImageSharp.fluid}
    alt="Kartka na stole"
    {...props}
  />
))

export const JarPlantImage = withImageData(props => (
  <Img
    fluid={props.imageData.jarPlantImage.childImageSharp.fluid}
    alt="Roślina w słoiku"
    {...props}
  />
))

export const RescueBuoyImage = withImageData(props => (
  <Img
    fluid={props.imageData.rescueBuoyImage.childImageSharp.fluid}
    alt="Koło ratunkowe"
    {...props}
  />
))

export const TypewriterImage = withImageData(props => (
  <Img
    fluid={props.imageData.typewriterImage.childImageSharp.fluid}
    alt="Maszyna do pisania"
    {...props}
  />
))

export const query = graphql`
  query SiteImagesQuery {
    mottoImage: file(
      relativePath: { regex: "/dziewczyna-w-kapeluszu-usmiechnieta.jpg/" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1280, maxHeight: 500, quality: 85) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    balloonsImage: file(
      relativePath: { regex: "/page-terapia-balony-chmury.jpg/" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1920, maxHeight: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    journalImage: file(relativePath: { regex: "/page-cennik-kalendarz.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 1920, maxHeight: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    laptopImage: file(
      relativePath: { regex: "/page-kontakt-laptop-kawa.jpg/" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1920, maxHeight: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    deskPaperImage: file(
      relativePath: { regex: "/page-o-mnie-kartka-stol.jpg/" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1920, maxHeight: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    jarPlantImage: file(
      relativePath: { regex: "/page-terapia-roslina-w-sloiku.jpg/" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1920, maxHeight: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    rescueBuoyImage: file(
      relativePath: { regex: "/page-w-czym-pomagam-kolo-ratunkowe.jpg/" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1920, maxHeight: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    typewriterImage: file(
      relativePath: { regex: "/page-artykuly-maszyna-do-pisania.jpg/" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1920, maxHeight: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
