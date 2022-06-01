import {
  Box,
  Flex,
  ImageProps,
  SiteLayout,
  webLinks,
} from '@siafoundation/design-system'
import { Stats } from '../content/stats'
import { Footer } from './Footer'
import { PageHead } from './PageHead'
import { Navbar } from './Navbar'
import { sitemap } from '../config/site'

type Props = {
  heading: React.ReactNode
  children: React.ReactNode
  title: string
  description: string
  date?: string
  path: string
  backgroundImage: ImageProps
  previewImage: ImageProps
  stats?: Stats
  focus?: React.ReactNode
  transitions?: boolean
  transitionDuration?: number
}

export function Layout({
  heading,
  children,
  title,
  description,
  date,
  path,
  stats,
  backgroundImage,
  previewImage,
  focus,
  transitions,
  transitionDuration,
}: Props) {
  return (
    <Box
      css={{
        backgroundColor: '$loContrast',
        height: '100%',
        overflowX: 'hidden',
        overflowY: 'auto',
      }}
    >
      <PageHead
        title={title}
        description={description}
        image={previewImage.src}
        date={date}
        path={path}
      />
      <SiteLayout
        focus={focus}
        transitions={transitions}
        transitionDuration={transitionDuration}
        heading={heading}
        externalLinks={[
          {
            link: webLinks.github,
            title: 'GitHub',
          },
          {
            link: webLinks.discord,
            title: 'Discord',
          },
        ]}
        menuLinks={[
          {
            link: sitemap.home.index,
            title: 'Home',
          },
          {
            link: sitemap.developers.index,
            title: 'Developers',
          },
          {
            link: sitemap.learn.index,
            title: 'Learn',
          },
          {
            link: sitemap.community.index,
            title: 'Community & Ecosystem',
          },
          {
            link: sitemap.foundation.index,
            title: 'The Sia Foundation',
          },
          {
            link: sitemap.newsroom.index,
            title: 'Newsroom',
          },
        ]}
        footer={<Footer stats={stats} />}
        backgroundImage={backgroundImage}
        navbar={<Navbar />}
      >
        <Flex direction="column" css={{ padding: '$6 0 $max 0' }}>
          {children}
        </Flex>
      </SiteLayout>
    </Box>
  )
}
