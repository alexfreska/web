import { useAppSettings } from '@siafoundation/react-core'
import { NextRouter, useRouter } from 'next/router'
import { useEffect } from 'react'
import { useConnectivity } from './useConnectivity'

type Routes = {
  home: string
  lockscreen: string
  syncscreen: string
}

export function getRouteToSaveAsPrev(router: NextRouter, routes: Routes) {
  if ([routes.syncscreen, routes.lockscreen].includes(router.asPath)) {
    return routes.home
  }
  return router.asPath
}

export function getRedirectRouteFromQuery(router: NextRouter, routes: Routes) {
  return router.query['prev']
    ? decodeURIComponent(router.query['prev'] as string)
    : routes.home
}

export function useMonitorConnAndLock(routes: Routes) {
  const { isConnected, isSynced } = useConnectivity()
  const { settings, setSettings } = useAppSettings()
  const router = useRouter()

  useEffect(() => {
    const isProtectedPath = router.pathname !== routes.lockscreen
    const noPasswordOrDisconnected = !settings.password || !isConnected
    if (isProtectedPath && noPasswordOrDisconnected) {
      setSettings({ password: '' })
      router.push({
        pathname: routes.lockscreen,
        query: {
          prev: getRouteToSaveAsPrev(router, routes),
        },
      })
      return
    }
    if (isProtectedPath && !isSynced) {
      router.push({
        pathname: routes.syncscreen,
        query: {
          prev: getRouteToSaveAsPrev(router, routes),
        },
      })
    }
    const isOnSyncscreen = router.pathname === routes.syncscreen
    if (isOnSyncscreen && isSynced) {
      router.push(getRedirectRouteFromQuery(router, routes))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router, isConnected, isSynced])
}
