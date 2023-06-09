import { useRouter } from 'next/router'
import { useAppSettings } from '@siafoundation/react-core'
import { LockIcon } from '../../icons/LockIcon'
import { DiceIcon } from '../../icons/DiceIcon'
import { GearIcon } from '../../icons/GearIcon'
import { Panel } from '../../core/Panel'
import { Separator } from '../../core/Separator'
import { Link } from '../../core/Link'
import { Logo } from '../../core/Logo'
import { navbarAppHeight } from '../AppNavbar'
import { SidenavItemWallet } from './SidenavItemWallet'
import { SidenavItem } from './SidenavItem'
import { getRouteToSaveAsPrev } from '../../hooks/useMonitorConnAndLock'
import BigNumber from 'bignumber.js'

type Props = {
  routes: {
    lockscreen: string
    syncscreen: string
    home: string
    node: {
      index: string
    }
    wallet: {
      view: string
    }
  }
  walletBalance?: BigNumber
  openSettings: () => void
  children: React.ReactNode
}

export function Sidenav({
  routes,
  walletBalance,
  openSettings,
  children,
}: Props) {
  const { lock } = useAppSettings()
  const router = useRouter()
  return (
    <Panel className="relative overflow-hidden z-10 h-full w-[75px] rounded-none border-y-0">
      <div className="flex flex-col items-center h-full">
        <div
          className="flex items-center justify-center"
          style={{
            height: `${navbarAppHeight}px`,
          }}
        >
          <Link href={routes.home} underline="none">
            <Logo size={30} />
          </Link>
        </div>
        <div className="flex flex-col gap-6 items-center pt-4 pb-6 h-full">
          <div className="flex flex-col gap-6 items-center">{children}</div>
          <div className="flex-1" />
          <Separator className="w-full" />
          <SidenavItemWallet routes={routes} walletBalance={walletBalance} />
          <SidenavItem title="Blockchain node" route={routes.node.index}>
            <DiceIcon />
          </SidenavItem>
          <SidenavItem title="Settings" onClick={() => openSettings()}>
            <GearIcon />
          </SidenavItem>
          <SidenavItem
            title="Lock app"
            onClick={() => {
              lock()
              router.replace(getRouteToSaveAsPrev(router, routes))
            }}
          >
            <LockIcon />
          </SidenavItem>
        </div>
      </div>
    </Panel>
  )
}
