import Link from 'next/link'
import Layout from '../components/Layout'
import Button from '@material-ui/core/Button';

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
    <Button variant="contained" color="primary">
      Hello World
    </Button>
    </p>
  </Layout>
)

export default IndexPage
