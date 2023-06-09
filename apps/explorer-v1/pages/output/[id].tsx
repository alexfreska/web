import { fetchEntity, getEntityKey, useEntity } from '../../hooks/useEntity'
import { useRouter } from 'next/router'
import { OutputEntity } from '../../components/entities/OutputEntity'
import { OutputEntitySkeleton } from '../../components/entities/OutputEntitySkeleton'
import { Entity404 } from '../../components/entities/Entity404'
import { Layout } from '../../components/Layout'
import { routes } from '../../config/routes'
import { getTitleId } from '@siafoundation/design-system'

export default function ViewOutput() {
  const router = useRouter()
  const id = (router.query.id || '') as string
  const entity = useEntity(id)

  const title = getTitleId('Output', id, 6)
  const description = getTitleId('View details for output', id, 6)
  const path = routes.output.view.replace('[id]', id)

  if (entity.data?.type === 'output') {
    return (
      <Layout title={title} description={description} path={path}>
        <OutputEntity entity={entity.data} />
      </Layout>
    )
  }

  if (entity.data?.type === 'error') {
    return (
      <Layout title={title} description={description} path={path}>
        <Entity404 message="Not found, double check the output and try again." />
      </Layout>
    )
  }

  return (
    <Layout title={title} description={description} path={path}>
      <OutputEntitySkeleton />
    </Layout>
  )
}

export async function getServerSideProps({ params }) {
  try {
    const id: string = params.id
    const entity = await fetchEntity(id)

    return {
      props: {
        fallback: {
          [getEntityKey(id)]: entity,
        },
      },
    }
  } catch (e) {
    return {
      props: {},
    }
  }
}
