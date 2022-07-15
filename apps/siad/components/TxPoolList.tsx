import { EntityList, getTransactionTotals } from '@siafoundation/design-system'
import { useTxPoolTransactions } from '@siafoundation/react-siad'

export function TxPoolList() {
  const txPool = useTxPoolTransactions()

  return (
    <EntityList
      title="Transaction pool"
      emptyMessage="No transactions in pool"
      entities={txPool.data?.map((t) => ({
        type: 'transaction',
        hash: String(t.ID),
        sc: getTransactionTotals(t).sc,
        sf: getTransactionTotals(t).sf,
      }))}
    />
  )
}