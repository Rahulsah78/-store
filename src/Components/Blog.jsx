import { useEffect, useState } from "react";
import Layout from "./Layout";
import Loader from "../Loader/Loader";
import { motion } from "framer-motion";
import { SlideUp } from "../Animation/Motion";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Layout>
        {isLoading && (
          <div className="absolute flex items-center justify-center top-0 left-0 h-[100vh] z-50 w-full bg-[#fff]">
            <Loader />
          </div>
        )}

        {/* Hero Section */}
        <div className="h-screen relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-fixed z-10"
            style={{
              backgroundImage: "url('/blog.webp')",
              backgroundAttachment: "fixed",
            }}
          ></div>
        </div>

        <div className="min-h-screen text-gray-800">
          <main className="container mx-auto px-4 py-10 flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-10">
            {/* Main Blog Section */}
            <section className="w-full lg:w-3/4 space-y-8">
              <motion.article
                variants={SlideUp(0.8)}
                initial="initial"
                whileInView="animate"
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="text-2xl font-bold h-64 w-full overflow-hidden  text-indigo-700 hover:text-indigo-900 cursor-pointer">
                  <img
                    className="object-contain w-full h-full"
                    src="https://i.pinimg.com/474x/96/3d/9d/963d9dd17c1726f63a2a9bc3fbba1669.jpg"
                    alt="blog1"
                  />
                </div>
                <h2 className="mt-2 text-red-500 font-semibold text-2xl">Hits and Misses: Pakistani Lawn</h2>
                <p className="text-sm text-gray-500 mt-2">October 30, 2024 | By Author Name</p>
                <p className="mt-4 text-gray-700">
                  This is a short description of the blog post. It should capture the reader's attention and give them a reason to read more...
                </p>
                <a href="#" className="text-indigo-600 hover:text-red-500 hover:underline mt-4 inline-block">Read More</a>
              </motion.article>

              <motion.article
                variants={SlideUp(0.9)}
                initial="initial"
                whileInView="animate"
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="text-2xl font-bold h-64 w-full overflow-hidden  text-indigo-700 hover:text-indigo-900 cursor-pointer">
                  <img
                    className="object-contain w-full h-full"
                    src="https://i.pinimg.com/474x/96/3d/9d/963d9dd17c1726f63a2a9bc3fbba1669.jpg"
                    alt="blog1"
                  />
                </div>
                <h2 className="mt-2 text-red-500 font-semibold text-2xl">Hits and Misses: Pakistani Lawn</h2>
                <p className="text-sm text-gray-500 mt-2">October 30, 2024 | By Author Name</p>
                <p className="mt-4 text-gray-700">
                  This is a short description of the blog post. It should capture the reader's attention and give them a reason to read more...
                </p>
                <a href="#" className="text-indigo-600 hover:text-red-500 hover:underline mt-4 inline-block">Read More</a>
              </motion.article>
            </section>

            {/* Sidebar Section */}
            <aside className="w-full lg:w-1/4 space-y-6">
              <motion.div
                variants={SlideUp(0.8)}
                initial="initial"
                whileInView="animate"
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold text-red-500">Categories</h3>
                <ul className="mt-4 space-y-2">
                  <li><a href="#" className="text-gray-700 hover:text-red-500">Technology</a></li>
                  <li><a href="#" className="text-gray-700 hover:text-red-500">Health</a></li>
                  <li><a href="#" className="text-gray-700 hover:text-red-500">Lifestyle</a></li>
                  <li><a href="#" className="text-gray-700 hover:text-red-500">Finance</a></li>
                </ul>
              </motion.div>

              <motion.div
                variants={SlideUp(0.9)}
                initial="initial"
                whileInView="animate"
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold text-red-500">Recent Posts</h3>
                <ul className="mt-4 space-y-2">
                  <li><a href="#" className="text-gray-700 hover:text-red-500">How to Build a Personal Brand</a></li>
                  <li><a href="#" className="text-gray-700 hover:text-red-500">5 Tips for Healthy Living</a></li>
                  <li><a href="#" className="text-gray-700 hover:text-red-500">Understanding Cryptocurrency</a></li>
                </ul>
              </motion.div>
            </aside>
          </main>
        </div>
      </Layout>

    </>
  );
};

export default Blog;
