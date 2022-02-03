import { Heading, NLink } from '@siafoundation/design-system'
import { PlaceholderBlock } from '../../components/PlaceholderBlock'
import { Layout } from '../../components/Layout'
import { sitemap } from '../../config/site'

function Foundation() {
  return (
    <Layout>
      <Heading>About the Sia Foundation</Heading>
      <PlaceholderBlock title="Vision"></PlaceholderBlock>
      <PlaceholderBlock title="Team grid"></PlaceholderBlock>
      <PlaceholderBlock title="Quarterly reports"></PlaceholderBlock>
      <PlaceholderBlock title="Recent news">
        <NLink href={sitemap.newsroom.index}>News</NLink>
      </PlaceholderBlock>
      <PlaceholderBlock title="Contact form"></PlaceholderBlock>
    </Layout>
  )
}

export default Foundation