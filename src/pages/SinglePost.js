import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import client from '../client'
import BlockContent from '@sanity/block-content-to-react'

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const { slug } = useParams()

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"] {
        title,
        body,
        mainImage {
          asset -> {
            _id,
            url,
          },
          alt,
        },
        "authorName": author -> name,
      }`
      )
      .then((data) => setSinglePost(data[0]))
    setIsLoading(false)
  }, [slug])

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <section>
          <h1>{singlePost.title}</h1>
          {singlePost.mainImage && singlePost.mainImage.asset && (
            <img
              src={singlePost.mainImage.asset.url}
              alt={singlePost.title}
              title={singlePost.title}
            />
          )}
          <p>By {singlePost.authorName}</p>

          <Link to="/blog">Return to articles</Link>

          <div>
            <BlockContent
              blocks={singlePost.body}
              projectId="xkcis0az"
              dataset="production"
            />
          </div>
        </section>
      )}
    </>
  )
}
