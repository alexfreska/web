import { Entity, nvgEntityTypes } from '../../../config/navigatorTypes'
import { Entity404 } from '../Entity404'

type Props = {
  entity: Entity
}

export function TxEntity404({ entity }: Props) {
  if (!nvgEntityTypes.includes(entity.type)) {
    return (
      <Entity404
        message={`The transaction (${entity.type}) is either not yet confirmed or may be invalid.`}
      />
    )
  }
  return (
    <Entity404
      message={`The transaction is either not yet confirmed or may be invalid.`}
    />
  )
}
