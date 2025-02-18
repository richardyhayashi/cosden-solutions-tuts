import React,  { useEffect, useRef, useState } from 'react'

const BASE_URL = 'https://jsonplaceholder.typicode.com';

interface Post {
   userId: number,
   id: number;
   title: string;
   body: string;
}

const Demo = () => {
   const [error, setError] = useState();
   const [isLoading, setIsLoading] = useState(false);
   const [posts, setPosts] = useState<Post[]>([]);
   const [page, setPage] = useState(0);
   
   const abortControllerRef = useRef<AbortController | null>(null);

   useEffect(() => {
      const fetchPosts = async () => {
         abortControllerRef.current?.abort();
         abortControllerRef.current = new AbortController();
         setIsLoading(true);
         
         try {
            const response = await fetch(`${BASE_URL}/posts?page=${page}`, {
               signal: abortControllerRef.current?.signal
            });
            const posts = await response.json() as Post[];
            
            setPosts(posts);
         } catch (e: any) {
            if (e.name === "AbortError") {
               console.log('Aborted!');
               return;
            }

            setError(e);
         } finally {
            setIsLoading(false);
         }
      }

      fetchPosts();
   }, [page]);

   //if (isLoading) {
   //   return <div>Loading...</div>;
   //}

   if (error) {
      return <div>Soemthing went wrong! Please try again.</div>;
   }

   return (
      <div className="tutorial">
         <h1 className="mb-4 text-2xl">Data Fetching</h1>
         <button onClick={() => setPage((p) => p + 1)}>Increase Page</button>
         {isLoading && <div>Loading...</div>}
         {!isLoading && (
            <ul>
            {posts.map((post) => {
               return <li key={post.id}>{post.title}</li>;
            })}
            </ul>
         )}
      </div>
   );
}

export default Demo