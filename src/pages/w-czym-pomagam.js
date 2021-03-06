import React from 'react'
import { graphql } from 'gatsby'

import ButtonLink from '../components/buttonLink'
import DisordersListing from '../components/disorders/disordersListing'
import Layout from '../components/layout'
import PageHeader from '../components/pageHeader'
import Section from '../components/section'
import SEO from '../components/seo'
import { RescueBuoyImage } from '../components/siteImages'

const CONTENT_WIDTH = '70%'

const DisordersIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const disorders = data.allContentfulDisorder.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="Artykuły"
        description="Pomocy psychoterapeutyczna osobom dorosłym i młodzieży. Zakres pomocy jest dostosowany do indywidualnych potrzeb. Obszary, w których psychoterapia może pomóc."
        keywords={[
          `psychoterapia`,
          `depresja`,
          `lęk`,
          `stres`,
          `emocje`,
          `niska samoocena`,
          `nerwica`,
        ]}
      />
      <PageHeader backgroundImg={<RescueBuoyImage />} maxWidth={CONTENT_WIDTH}>
        <h1>W czym pomagam</h1>
      </PageHeader>
      <Section maxWidth={CONTENT_WIDTH}>
        <DisordersListing disorders={disorders} />
      </Section>
      <Section maxWidth={CONTENT_WIDTH} backgroundColor="#eee">
        <h2>Poznaj moją ofertę terapeutyczną</h2>
        <ButtonLink to="/terapia/" lightTheme transparent arrow alignRight>
          Rodzaje terapii
        </ButtonLink>
      </Section>
    </Layout>
  )
}

export default DisordersIndex

export const articlesPageQuery = graphql`
  query DisordersQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulDisorder(
      filter: { node_locale: { eq: "pl-PL" } }
      sort: { fields: [order], order: ASC }
    ) {
      ...AllContentfulDisorders
    }
  }
`
