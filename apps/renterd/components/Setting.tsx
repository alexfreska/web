import { Heading, Paragraph, Text } from '@siafoundation/design-system'

type Props = {
  title: string
  description: React.ReactNode
  suggestion?: React.ReactNode
  control?: React.ReactNode
}

export function Setting({ title, description, suggestion, control }: Props) {
  return (
    <div className="flex gap-10 justify-between">
      <div className="flex flex-col gap-2 max-w-[600px]">
        <Heading size="20">{title}</Heading>
        <Paragraph size="14">{description}</Paragraph>
        {suggestion && <Text color="accent">Suggestion: {suggestion}</Text>}
      </div>
      <div className="">{control}</div>
    </div>
  )
}
