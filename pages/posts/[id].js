import Link from 'next/link'
import { getAllPostIds, getPostData } from '../../lib/posts'

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}
export default function Post({ postData }) {
  return (
    <div className="container">
      <p className="text-lg font-bold">{postData.title}</p>
      <br />
      <div className="bg-white p-8" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      <Link href="/Projects">
        <a>뒤로가기</a>
      </Link>
    </div>
    )
}
