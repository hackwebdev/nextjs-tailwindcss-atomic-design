import H1 from 'ui/headings/h1'
import Page from 'ui/page'

export default function LandingPage() {
  return (
    <div>
      <Page
        title='welcome to my nextJS app'
        description='this is my nextjs description'
      >
        <H1>Hello nextjs</H1>
      </Page>
    </div>
  )
}
