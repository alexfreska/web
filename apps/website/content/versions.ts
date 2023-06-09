import { readContentDirCachedJsonFile } from '../lib/cache'
import { getMinutesInSeconds } from '../lib/time'

export type Versions = {
  sia: {
    latest: string
    testnet: string
  }
  embarcadero: {
    latest: string
  }
}

const maxAge = getMinutesInSeconds(5)

export async function getCacheVersions(): Promise<Versions> {
  return readContentDirCachedJsonFile(
    'versions.json',
    {
      sia: {
        latest: '1.5.9',
        testnet: '1.5.9',
      },
      embarcadero: {
        latest: '1.0.0',
      },
    },
    maxAge
  )
}
