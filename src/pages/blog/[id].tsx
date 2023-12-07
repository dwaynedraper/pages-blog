import { GetStaticPaths, GetStaticProps } from "next";
import clientPromise from "@/db"; // Import your MongoDB client
import { ObjectId } from "mongodb"; // Import MongoClient and ObjectId
import BlogPost from "@/components/BlogPost";

interface BlogPostPageProps {
  post: any; // Replace 'any' with your post type
}

export default function BlogPostPage({ post }: BlogPostPageProps) {
  console.log("post", post);
  // Render your blog post using the 'post' prop
  return <BlogPost>{`post.post.title`}</BlogPost>; // Example rendering
}

export const getStaticPaths: GetStaticPaths = async () => {
  const client = await clientPromise;
  const db = client.db("blog");
  const collection = db.collection("posts");

  const posts = await collection
    .find({}, { projection: { _id: 1 } })
    .sort({ createdAt: -1 })
    .toArray();
  console.log("posts", posts);
  const paths = posts.map((post) => ({
    params: { id: post._id.toString() },
  }));
  console.log("paths", paths);

  return {
    paths,
    fallback: false, // or 'blocking' if you want to enable ISR
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;
  const client = await clientPromise;
  const db = client.db("blog");
  const collection = db.collection("posts");

  const post = await collection.findOne({ _id: new ObjectId(id as string) });

  return {
    props: {
      post: JSON.parse(JSON.stringify(post)), // Serialize the MongoDB data
    },
  };
};
