import {
  Badge,
  Button,
  Add16,
  Add20,
  DatumCard,
  Flex,
  ProgressBar,
  Text,
} from '@siafoundation/design-system'
import { humanBytes } from '@siafoundation/sia-js'
import { StorageFolderDropdownMenu } from '../../components/StorageFolderDropdownMenu'
import { AuthedLayout } from '../../components/AuthedLayout'
import { useDialog } from '../../contexts/dialog'
import { Table, TableColumn } from '../../components/Table'

type Data = {
  key: string
  path: string
  storageUsed: number
  storageCapacity: number
  status: string
  writeErrors: number
  readErrors: number
}

export default function StoragePage() {
  const { openDialog } = useDialog()

  const data: Data[] = [
    {
      key: '/Users/alex/data/sia/drive1',
      path: '/Users/alex/data/sia/drive1',
      storageUsed: 5_000_000_000,
      storageCapacity: 14_650_000_000,
      status: 'resizing',
      writeErrors: 5,
      readErrors: 34,
    },
    {
      key: '/Users/alex/fast',
      path: '/Users/alex/fast',
      storageUsed: 400_000_000,
      storageCapacity: 913_280_000,
      status: 'removing',
      writeErrors: 15,
      readErrors: 82,
    },
    {
      key: '/Users/alex/nvme',
      path: '/Users/alex/nvme',
      storageUsed: 309_000_000,
      storageCapacity: 313_280_000,
      status: 'ready',
      writeErrors: 0,
      readErrors: 0,
    },
  ]

  const columns: TableColumn<Data>[] = [
    {
      key: 'path',
      label: 'Path',
      size: 3,
      render: ({ path }) => (
        <Text font="mono" ellipsis>
          {path}
        </Text>
      ),
    },
    {
      key: 'storage',
      label: 'Storage',
      size: 3,
      render: ({ storageUsed, storageCapacity }) => (
        <Flex
          css={{
            width: '100%',
            maxWidth: '200px',
            paddingTop: '10px',
          }}
        >
          <ProgressBar
            variant="accent"
            value={storageUsed}
            max={storageCapacity}
            label={`${humanBytes(storageUsed)} / ${humanBytes(
              storageCapacity
            )}`}
          />
        </Flex>
      ),
    },
    {
      key: 'status',
      label: 'Status',
      size: 1,
      render: ({ status }) => <Badge variant="green">{status}</Badge>,
    },
    {
      key: 'errors',
      label: 'Errors',
      tip: 'Read | write',
      size: 1,
      render: ({ readErrors, writeErrors }) => (
        <Text font="mono">
          {readErrors}|{writeErrors}
        </Text>
      ),
    },
    {
      key: 'actions',
      label: '',
      size: 1,
      props: {
        justify: 'end',
      },
      render: ({ path }) => <StorageFolderDropdownMenu id={path} />,
    },
  ]

  const total = data.reduce((acc, i) => acc + i.storageCapacity, 0)
  const used = data.reduce((acc, i) => acc + i.storageUsed, 0)
  const free = total - used

  return (
    <AuthedLayout
      title="Storage"
      actions={
        <>
          <Button size="2" onClick={() => openDialog('storageFolderAdd')} icon>
            <Add20 />
            Add folder
          </Button>
        </>
      }
    >
      <Flex gap="2">
        <DatumCard label="Free storage" value={humanBytes(free)} />
        <DatumCard label="Total storage" value={humanBytes(total)} />
        <DatumCard label="Read failure rate" value={'4%'} />
        <DatumCard label="Write failure rate" value={'1%'} />
      </Flex>
      <Table data={data} columns={columns} />
    </AuthedLayout>
  )
}