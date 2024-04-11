import React, { useState } from "react";
import { FaPlus, FaSearch, FaUserCircle, FaRegBookmark, FaPenFancy, FaChevronDown } from "react-icons/fa";

const Index = () => {
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: "The Rise of React in Web Development",
      excerpt: "Discover how React has transformed the web development landscape...",
      author: "Jane Doe",
      publishDate: "April 5, 2023",
    },
    // More articles would go here
  ]);

  const ArticleCard = ({ article }) => (
    <div className="border-b border-gray-300 py-6">
      <h3 className="text-2xl font-semibold mb-2">{article.title}</h3>
      <p className="text-gray-600 mb-4">{article.excerpt}</p>
      <div className="flex items-center justify-between text-gray-500">
        <span>By {article.author}</span>
        <span>{article.publishDate}</span>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <header className="flex justify-between items-center py-6">
        <h1 className="text-4xl font-bold">Medium</h1>
        <div className="flex items-center">
          <FaSearch className="text-xl mr-4" />
          <div className="relative">
            <button className="flex items-center focus:outline-none">
              <FaUserCircle className="text-3xl" />
              <FaChevronDown className="ml-1" />
            </button>
            <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20 hidden">
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">
                Profile
              </a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">
                Settings
              </a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">
                Sign out
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold">Featured Articles</h2>
            <FaRegBookmark className="text-2xl" />
          </div>
          <div>
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </section>

        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold">Latest Articles</h2>
            <FaPenFancy className="text-2xl" />
          </div>
          {/* This section would be similar to the Featured Articles section with an array mapping */}
          {/* More articles would be rendered here */}
        </section>
      </main>

      <footer className="py-6">
        <div className="flex justify-between items-center">
          <span>© 2023 Medium</span>
          <div className="flex items-center">
            <FaPlus className="text-2xl mr-4" />
            <span>Follow us</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
