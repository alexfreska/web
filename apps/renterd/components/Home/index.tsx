import { Heading, DatumCard } from '@siafoundation/design-system'
import { useAutopilotStatus } from '@siafoundation/react-core'
import { humanBytes } from '@siafoundation/sia-js'
import { RenterdAuthedLayout } from '../RenterdAuthedLayout'
import { RenterSidenav } from '../RenterSidenav'
import { routes } from '../../config/routes'
import { useDialog } from '../../contexts/dialog'

export function Home() {
  const { openDialog } = useDialog()
  const status = useAutopilotStatus({})

  return (
    <RenterdAuthedLayout
      title="Dashboard"
      routes={routes}
      sidenav={<RenterSidenav />}
      openSettings={() => openDialog('settings')}
    >
      <Heading>Activity</Heading>
      <div className="flex flex-wrap gap-7">
        <DatumCard label="Files stored" value={54} />
        <DatumCard label="Storage usage" value={humanBytes(403204020032)} />
        <DatumCard label="Active contracts" value={54} />
      </div>
      <Heading>Autopilot</Heading>
      <div className="flex flex-wrap gap-7">
        <DatumCard
          label="Current period"
          value={status.data?.currentPeriod.toLocaleString()}
        />
        <DatumCard label="Total allocated" value={54} />
        <DatumCard label="Total spent" value={54} />
        <DatumCard label="Storage spending" value={54} />
      </div>
    </RenterdAuthedLayout>
  )
}
