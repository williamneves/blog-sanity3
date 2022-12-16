// ** React Imports
import {Fragment, Suspense} from "react";
import { client, groq, urlFor, PortableText } from "../config/sanity";
import CopyToClipboard from "react-copy-to-clipboard";
import Code from "../components/Code";

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
const Home = async  () => {

  const data = await getData();

  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <main
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >{
        data.map((post: any) => (
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
    </Suspense>
  )
};

export default Home;