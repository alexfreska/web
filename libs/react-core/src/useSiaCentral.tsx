import { useGetExternal } from './useGet'
import { SWROptions } from './types'
import { useAppSettings } from './useAppSettings'

type SiaCentralExchangeRateGET = {
  message: string
  type: string
  rates: {
    sc: {
      bch: string
      btc: string
      cad: string
      cny: string
      eth: string
      eur: string
      gbp: string
      jpy: string
      ltc: string
      rub: string
      scp: string
      sf: string
      usd: string
    }
  }
  timestamp: string
}

const api = 'https://api.siacentral.com/v2'

export function useSiaCentralMarketExchangeRate(
  options?: SWROptions<SiaCentralExchangeRateGET>
) {
  const { settings } = useAppSettings()
  return useGetExternal('/market/exchange-rate?currencies=sc', {
    ...options,
    api: options?.api || api,
    disabled: options?.disabled || !settings.siaCentral,
  })
}

type SiaCentralNetworkStats = {
  settings: {
    max_download_batch_size: number
    max_duration: number
    max_revise_batch_size: number
    remaining_storage: number
    sector_size: number
    total_storage: number
    window_size: number
    revision_number: number
    base_rpc_price: string
    collateral: string
    max_collateral: string
    contract_price: string
    download_price: string
    sector_access_price: string
    storage_price: string
    upload_price: string
  }
  price_table: {
    uid: string
    validity: number
    hostblockheight: number
    updatepricetablecost: string
    accountbalancecost: string
    fundaccountcost: string
    latestrevisioncost: string
    subscriptionmemorycost: string
    subscriptionnotificationcost: string
    initbasecost: string
    memorytimecost: string
    downloadbandwidthcost: string
    uploadbandwidthcost: string
    dropsectorsbasecost: string
    dropsectorsunitcost: string
    hassectorbasecost: string
    readbasecost: string
    readlengthcost: string
    renewcontractcost: string
    revisionbasecost: string
    swapsectorcost: string
    writebasecost: string
    writelengthcost: string
    writestorecost: string
    txnfeeminrecommended: string
    txnfeemaxrecommended: string
    contractprice: string
    collateralcost: string
    maxcollateral: string
    maxduration: number
    windowsize: number
    registryentriesleft: number
    registryentriestotal: number
  }
  benchmarks: {
    contract_time: number
    upload_time: number
    download_time: number
    data_size: number
  }
  benchmarks_rhp2?: {
    contract_time: number
    upload_time: number
    download_time: number
    data_size: number
  }
}

type SiaCentralNetworkAveragesGET = {
  message: string
  type: string
} & SiaCentralNetworkStats

export function useSiaCentralHostsNetworkAverages(
  options?: SWROptions<SiaCentralNetworkAveragesGET>
) {
  const { settings } = useAppSettings()
  return useGetExternal('/hosts/network/averages', {
    ...options,
    api: options?.api || api,
    disabled: options?.disabled || !settings.siaCentral,
  })
}

type SiaCentralNetworkMetricsGET = {
  message: string
  type: string
  average: SiaCentralNetworkStats
  top: SiaCentralNetworkStats
  bottom: SiaCentralNetworkStats
  totals: {
    remaining_registry_entries: number
    total_registry_entries: number
    remaining_storage: number
    total_storage: number
    active_hosts: number
    total_hosts: number
  }
}

export function useSiaCentralHostsNetworkMetrics(
  options?: SWROptions<SiaCentralNetworkMetricsGET>
) {
  const { settings } = useAppSettings()
  return useGetExternal('/hosts/network/metrics', {
    ...options,
    api: options?.api || api,
    disabled: options?.disabled || !settings.siaCentral,
  })
}
