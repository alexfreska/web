import {
  Code,
  Codeblock,
  Flex,
  Grid,
  Heading,
  Kbd,
  NLink,
  Paragraph,
  Section,
  Text,
} from '@siafoundation/design-system'
import { SectionHeading } from '../components/SectionHeading'
import { SubsectionHeading } from '../components/SubsectionHeading'

const randomLink = 'https://urbit.org/'

export function Typography() {
  return (
    <Section>
      <SectionHeading>Typography</SectionHeading>
      <Section>
        <SubsectionHeading>Headings</SubsectionHeading>
        <Flex direction="column" gap="1">
          <Heading size="1">Heading 1</Heading>
          <Heading size="2">Heading 2</Heading>
          <Heading size="3">Heading 3</Heading>
          <Heading size="4">Heading 4</Heading>
        </Flex>
      </Section>
      <Section>
        <SubsectionHeading>Text</SubsectionHeading>
        <Flex direction="column" gap="1">
          <Text size="1">Text 1</Text>
          <Text size="2">Text 2</Text>
          <Text size="3">Text 3</Text>
          <Text size="4">Text 4</Text>
          <Text size="5">Text 5</Text>
          <Text size="6">Text 6</Text>
          <Text size="7">Text 7</Text>
          <Text size="8">Text 8</Text>
          <Text size="9">Text 9</Text>
        </Flex>
      </Section>
      <Section>
        <SubsectionHeading>Link</SubsectionHeading>
        <Flex direction="column" gap="2" align="start">
          <NLink href={randomLink} target="_blank" variant="green">
            Green link
          </NLink>
          <NLink href={randomLink} target="_blank" variant="subtle">
            Subtle link
          </NLink>
          <NLink href={randomLink} target="_blank" variant="contrast">
            Contrast link
          </NLink>
          <Text size="6">
            <NLink href={randomLink} target="_blank" variant="green">
              Green link inside Text size 6
            </NLink>
          </Text>
          <Text size="9">
            <NLink href={randomLink} target="_blank" variant="subtle">
              Subtle link inside Text size 9
            </NLink>
          </Text>
        </Flex>
      </Section>
      <Section>
        <SubsectionHeading>Code</SubsectionHeading>
        <Grid gap="2" justify="start">
          <Code variant="gray">{'fmt.Println("fibonacci")'}</Code>
          <Code variant="green">{'fmt.Println("fibonacci")'}</Code>
        </Grid>
      </Section>
      <Section>
        <SubsectionHeading>Codeblock</SubsectionHeading>
        <pre>
          <Codeblock>
            {`
func Fibonacci(n int) int {
    if n <= 1 {
        return n
    }
    return Fibonacci(n-1) + Fibonacci(n-2)
}
              `}
          </Codeblock>
        </pre>
        <Flex direction="column" gap="2" align="start"></Flex>
      </Section>
      <Section>
        <SubsectionHeading>Paragraph</SubsectionHeading>
        <Flex direction="column" gap="1">
          <Grid
            columns={{
              '@bp1': 1,
              '@bp2': 2,
            }}
            gap="2"
          >
            <Paragraph size="1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt <Code>{'fmt.Println("pizza")'}</Code> ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure{' '}
              <NLink variant="green" href={randomLink} target="_blank">
                example of an inline link
              </NLink>{' '}
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur.{' '}
              <NLink variant="contrast" href={randomLink} target="_blank">
                Example of an inline link
              </NLink>{' '}
              <Code variant="gray">{'fmt.Println("pasta")'}</Code>. Excepteur
              sint occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </Paragraph>
            <Paragraph size="2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt <Code>{'fmt.Println("pizza")'}</Code> ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure{' '}
              <NLink variant="green" href={randomLink} target="_blank">
                example of an inline link
              </NLink>{' '}
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur.{' '}
              <NLink variant="contrast" href={randomLink} target="_blank">
                Example of an inline link
              </NLink>{' '}
              <Code variant="gray">{'fmt.Println("pasta")'}</Code>. Excepteur
              sint occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </Paragraph>
          </Grid>
        </Flex>
      </Section>
      <Section>
        <SubsectionHeading>Keyboard</SubsectionHeading>
        <Flex direction="column" gap="3">
          <Flex direction="row" gap="1" wrap="wrap">
            <Kbd size="1">Q</Kbd>
            <Kbd size="1">W</Kbd>
            <Kbd size="1">E</Kbd>
            <Kbd size="1">R</Kbd>
            <Kbd size="1">T</Kbd>
            <Kbd size="1">Y</Kbd>
            <Kbd size="1" width="space">
              Space
            </Kbd>
            <Kbd size="1">⌘ + Tab</Kbd>
            <Kbd size="1">⌘</Kbd>
            <Kbd size="1">Tab</Kbd>
            <Kbd size="1">⇧</Kbd>
            <Kbd size="1">⌘</Kbd>
            <Kbd size="1">A</Kbd>
          </Flex>
          <Flex direction="row" gap="1" wrap="wrap">
            <Kbd size="2">Q</Kbd>
            <Kbd size="2">W</Kbd>
            <Kbd size="2">E</Kbd>
            <Kbd size="2">R</Kbd>
            <Kbd size="2">T</Kbd>
            <Kbd size="2">Y</Kbd>
            <Kbd size="2" width="space">
              Space
            </Kbd>
            <Kbd size="2">⌘ + Tab</Kbd>
            <Kbd size="2">⌘</Kbd>
            <Kbd size="2">Tab</Kbd>
            <Kbd size="2">⇧</Kbd>
            <Kbd size="2">⌘</Kbd>
            <Kbd>A</Kbd>
          </Flex>
        </Flex>
      </Section>
    </Section>
  )
}