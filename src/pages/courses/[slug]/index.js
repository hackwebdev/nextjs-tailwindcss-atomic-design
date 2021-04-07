import { useRouter } from 'next/router'

import H1 from 'ui/headings/h1'
import Page from 'ui/page'

export default function CourseDetailsPage() {
  const router = useRouter()
  console.log(router.query.slug)

  return (
    <div>
      <Page
        title={router.query.slug}
        description='this is my nextjs description'
      >
        <H1>{router.query.slug}</H1>
      </Page>
    </div>
  )
}
