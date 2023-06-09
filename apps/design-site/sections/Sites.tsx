import {
  ContentItem,
  ContentGallery,
  Section,
  SiteHeading,
  Callout,
  ContentProject,
} from '@siafoundation/design-system'
import { times } from 'lodash'
import { SectionHeading } from '../components/SectionHeading'
import { SubsectionHeading } from '../components/SubsectionHeading'

export function Sites() {
  return (
    <>
      <Section>
        <SectionHeading>Headings</SectionHeading>
        <SubsectionHeading>SiteHeading</SubsectionHeading>
        <div className="flex flex-col gap-6">
          <SiteHeading
            size="20"
            title="Size 20"
            description={`
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, qui!
            `}
          />
          <SiteHeading
            size="24"
            title="Size 24"
            description={`
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, qui!
            `}
          />
          <SiteHeading
            size="32"
            title="Size 32"
            description={`
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, qui!
            `}
          />
          <SiteHeading
            size="64"
            title="Size 64"
            description={`
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, qui!
            `}
          />
          <SiteHeading
            size="64"
            eyebrow="Eyebrow"
            title="Heading with Eyebrow"
            description={`
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, qui!
            `}
          />
          <SiteHeading
            size="32"
            title="Heading 32 with Buttons"
            description={`
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, qui!
            `}
            links={[
              {
                title: 'Urbit',
                link: 'https://urbit.org',
                newTab: true,
              },
              {
                title: 'Scuttlebutt',
                link: 'https://ssbc.github.io/scuttlebutt-protocol-guide/',
                newTab: true,
              },
            ]}
          />
          <SiteHeading
            size="64"
            title="Heading 64 with Buttons"
            description={`
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, qui!
            `}
            links={[
              {
                title: 'Urbit',
                link: 'https://urbit.org',
                newTab: true,
              },
              {
                title: 'Scuttlebutt',
                link: 'https://ssbc.github.io/scuttlebutt-protocol-guide/',
                newTab: true,
              },
            ]}
          />
        </div>
      </Section>
      <Section>
        <SectionHeading>Content</SectionHeading>
        <SubsectionHeading>ContentItem</SubsectionHeading>
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <ContentItem
            title="Content Item"
            subtitle={`
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, qui!
            `}
            newTab
          />
          <ContentItem
            title="Content Item with external link"
            subtitle={`
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, qui!
            `}
            link={'https://urbit.org'}
            newTab
          />
          <ContentItem
            title="Content Item with date"
            date={'10/04/2022'}
            subtitle={`
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, qui!
            `}
            link={'https://urbit.org'}
            newTab
          />
          <ContentItem
            title="Content Item with date and icon"
            icon="CenterCircle"
            date={'10/04/2022'}
            subtitle={`
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, qui!
            `}
            link={'https://urbit.org'}
            newTab
          />
        </div>
        <SubsectionHeading>ContentProject</SubsectionHeading>
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <ContentProject
            title="Filebase"
            logo="filebase"
            tags={[]}
            subtitle={`
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, qui!
            `}
            link={'https://filebase.com'}
            newTab
          />
        </div>
      </Section>
      <Section>
        <SectionHeading>ContentGallery</SectionHeading>
        <SubsectionHeading>default</SubsectionHeading>
        <ContentGallery
          items={times(6, (i) => ({
            title: `Lorem ipsum dolor, sit amet consectetur elit. ${i + 1}`,
            tags: [`group_${(i % 3) + 1}`],
            description: `
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, qui!
                `,
            link: 'https://ssbc.github.io/scuttlebutt-protocol-guide/',
            newTab: true,
          }))}
        />
        <SubsectionHeading>columns 1</SubsectionHeading>
        <ContentGallery
          columnClassName="grid-cols-1"
          items={times(6, (i) => ({
            title: `Lorem ipsum dolor, sit amet consectetur elit. ${i + 1}`,
            tags: [`group_${(i % 3) + 1}`],
            link: 'https://urbit.org',
            newTab: true,
          }))}
        />
        <SubsectionHeading>variant filterable / columns 3</SubsectionHeading>
        <ContentGallery
          filterable="filterable"
          columnClassName="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          items={times(6, (i) => ({
            title: `Title ${i + 1}`,
            subtitle: 'Subtitle',
            tags: [`group_${(i % 3) + 1}`],
            description: `
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, qui!
                `,
            link: 'https://urbit.org',
            newTab: true,
          }))}
        />
      </Section>
      <Section>
        <SectionHeading>Callout</SectionHeading>
        <SubsectionHeading>size 1</SubsectionHeading>
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
          <Callout
            title="Title"
            description={`
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, qui!
          `}
            startTime={0}
            actionTitle="Urbit"
            actionLink="https://urbit.org"
            actionNewTab
          />
          <Callout
            title="Title"
            description={`
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, qui!
          `}
            startTime={20}
            actionTitle="Urbit"
            actionLink="https://urbit.org"
            actionNewTab
          />
        </div>
        <SubsectionHeading>size 2</SubsectionHeading>
        <Callout
          title="Title"
          size="2"
          description={`
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, qui!
          `}
          actionTitle="Urbit"
          startTime={0}
          actionLink="https://urbit.org"
          actionNewTab
        />
      </Section>
    </>
  )
}
