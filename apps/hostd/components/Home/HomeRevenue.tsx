import {
  ChartXY,
  Text,
  Heading,
  DatumCardConfigurable,
  DatumScrollArea,
} from '@siafoundation/design-system'
import { useData } from '../../contexts/data'
import { chartConfigs } from '../../config/charts'

export function HomeRevenue() {
  const { revenue } = useData()

  return (
    <div className="flex flex-col gap-7">
      <Heading>Revenue</Heading>
      <DatumScrollArea bleed>
        <DatumCardConfigurable
          label="Earned revenue"
          sc={revenue.stats['total']}
          defaultMode="total"
        />
        <DatumCardConfigurable
          label="Potential revenue"
          sc={revenue.stats['potential']}
          defaultMode="total"
          showChange={false}
        />
        <DatumCardConfigurable
          label="storage"
          color={chartConfigs.storage.color}
          sc={revenue.stats['storage']}
          defaultMode="total"
        />
        <DatumCardConfigurable
          label="registry"
          color={chartConfigs.registry.color}
          sc={revenue.stats['registry']}
          defaultMode="total"
        />
        <DatumCardConfigurable
          label="egress"
          color={chartConfigs.egress.color}
          sc={revenue.stats['egress']}
          defaultMode="total"
        />
        <DatumCardConfigurable
          label="ingress"
          color={chartConfigs.ingress.color}
          sc={revenue.stats['ingress']}
          defaultMode="total"
        />
        <DatumCardConfigurable
          label="other"
          color={chartConfigs.other.color}
          sc={revenue.stats['other']}
          defaultMode="total"
        />
      </DatumScrollArea>
      <ChartXY
        id="revenue"
        height={300}
        data={revenue.data}
        config={revenue.config}
        actionsLeft={
          <>
            <Text font="mono" weight="semibold">
              Revenue
            </Text>
          </>
        }
      />
    </div>
  )
}
