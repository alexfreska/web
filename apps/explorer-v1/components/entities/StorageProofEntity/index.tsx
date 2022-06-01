import { useMemo } from 'react'
import {
  getEntityTxInputs,
  getEntityTxOutputs,
  getTotalTransacted,
} from '../../../lib/transaction'
import { StorageProofEntity } from '../../../config/types'
import { ValueItemProps } from '../../Datum'
import { TxEntityLayout } from '../../TxEntityLayout'

type Props = {
  entity: StorageProofEntity
}

export function StorageProofEntity({ entity }: Props) {
  const { data } = entity

  const values = useMemo(() => {
    const list: ValueItemProps[] = [
      {
        label: 'Total transacted',
        sc: getTotalTransacted(entity).sc,
      },
      {
        label: 'Proof for contract ID',
        entityType: 'contract',
        entityValue: data[1].ContractId,
      },
    ]
    return list
  }, [entity, data])

  const inputs = useMemo(() => getEntityTxInputs(entity), [entity])
  const outputs = useMemo(() => getEntityTxOutputs(entity), [entity])

  return (
    <TxEntityLayout
      entity={entity}
      values={values}
      inputs={inputs}
      outputs={outputs}
    />
  )
}
