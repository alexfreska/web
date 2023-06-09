export const routes = {
  home: '/',
  storage: {
    index: '/storage',
  },
  contracts: {
    index: '/contracts',
  },
  config: {
    index: '/config',
  },
  wallet: {
    view: '/wallet',
  },
  node: {
    index: '/node',
    txPool: '/node/txpool',
    peers: '/node/peers',
  },
  lockscreen: '/unlock',
  syncscreen: '/sync',
}

export const connectivityRoute = '/state/consensus'
