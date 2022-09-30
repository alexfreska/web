import {
  AppAuthedLayout,
  Button,
  ControlGroup,
  Flex,
  IconButton,
  Close16,
} from '@siafoundation/design-system'
import { RenterSidenav } from '../../components/RenterSidenav'
import { routes } from '../../config/routes'
import { Text, Table } from '@siafoundation/design-system'
import { useDialog } from '../../contexts/dialog'
import { useHosts } from '../../hooks/useHosts'
import { HostsFilterDropdownMenu } from '../../components/HostsFilterDropdownMenu'
import { HostsViewDropdownMenu } from '../../components/HostsViewDropdownMenu'

export default function HostsPage() {
  const { openDialog } = useDialog()
  const { hosts, columns, filters, removeFilter } = useHosts()

  return (
    <AppAuthedLayout
      title="Hosts"
      routes={routes}
      sidenav={<RenterSidenav />}
      openSettings={() => openDialog('settings')}
      filters={
        <Flex gap="1" css={{ flex: 1 }}>
          {Object.entries(filters).map(([key, filter]) => (
            <ControlGroup key={key}>
              <Button disabled>
                <Text size="12">{key}</Text>
              </Button>
              <Button disabled>
                <Text size="12" color="subtle">
                  is
                </Text>
              </Button>
              <Button disabled>
                {filter.value && <Text size="12">{filter.value}</Text>}
                {filter.values && (
                  <Text size="12">
                    {filter.values.reduce((acc, val) =>
                      acc.concat(` or ${val}`)
                    )}
                  </Text>
                )}
              </Button>
              <IconButton
                variant="gray"
                size="1"
                onClick={() => removeFilter(key)}
              >
                <Close16 />
              </IconButton>
            </ControlGroup>
          ))}
          <HostsFilterDropdownMenu />
        </Flex>
      }
      actions={
        <Flex gap="1">
          <HostsViewDropdownMenu />
        </Flex>
      }
    >
      <Table data={hosts} columns={columns} rowSize="default" />
    </AppAuthedLayout>
  )
}