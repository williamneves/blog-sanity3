// ** React Imports
import {Fragment, useEffect, useState} from "react";
import { client, groq, urlFor, PortableText } from "../config/sanity";
import CopyToClipboard from "react-copy-to-clipboard";
import Code from "../components/Code";
import '../styles/globals.css'

// Fetching Data
async function getData() {
  const query = groq`*[_type == "post" ]{
  ...,
  author->,
    categories[]->,
}`;
  const data = await client.fetch(query);
  return data;
}

// ** Rendered Element
interface PostProps {
  
}

const Post = (props: PostProps): JSX.Element => {
  const [posts, setPosts] = useState<any>([]);

  useEffect(() => {
    getData().then((data) => {
      setPosts(data);
    });
  }, []);

  if (!posts.length) <h1>Loading...</h1>

  return (
    <main
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >{
      posts.map((post: any) => (
        <article key={post._id} className={'prose mx-auto px-4 overflow-hidden py-6 bg-white rounded-lg dark:bg-blend-lighten my-6'}>
          <h1>{post.title}</h1>
          <hr/>
          <p>{post.author.name}</p>
          <span>{post.categories.map((category: any) => category.title)}</span>
          <hr/>
          <PortableText

            value={post.body}
            components={{
              types: {
                // @ts-ignore
                code: Code,
              }}}
          />
        </article>
      ))
    }</main>
  )
};

export default Post;