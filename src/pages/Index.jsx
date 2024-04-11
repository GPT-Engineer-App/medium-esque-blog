import React, { useState } from "react";
import { FaPlus, FaSearch, FaUserCircle, FaRegBookmark, FaPenFancy, FaChevronDown, FaPen } from "react-icons/fa";

const Index = () => {
  const publishArticle = () => {
    if (newArticle.title && newArticle.excerpt && newArticle.author && newArticle.publishDate) {
      setArticles([
        ...articles,
        {
          id: articles.length + 1,
          ...newArticle,
        },
      ]);
      setNewArticle({
        title: "",
        excerpt: "",
        author: "",
        publishDate: "",
      });
      closeWritePanel();
    }
  };
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: "The Rise of React in Web Development",
      excerpt: "Discover how React has transformed the web development landscape...",
      author: "Jane Doe",
      publishDate: "April 5, 2023",
    },
    {
      id: 2,
      title: "10 Tips for Writing Clean Code",
      excerpt: "Improve your code quality with these essential tips...",
      author: "John Smith",
      publishDate: "April 8, 2023",
    },
    {
      id: 3,
      title: "Mastering CSS Grid Layout",
      excerpt: "Learn how to create complex layouts with CSS Grid...",
      author: "Sarah Johnson",
      publishDate: "April 10, 2023",
    },
    {
      id: 4,
      title: "Introduction to Machine Learning",
      excerpt: "Get started with the basics of machine learning...",
      author: "David Lee",
      publishDate: "April 12, 2023",
    },
    {
      id: 5,
      title: "Building RESTful APIs with Node.js",
      excerpt: "Discover how to create robust APIs using Node.js and Express...",
      author: "Emily Davis",
      publishDate: "April 15, 2023",
    },
  ]);

  const ArticleCard = ({ article }) => (
    <div className="border border-gray-300 rounded-md p-4">
      <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
      <p className="text-gray-600 mb-4">{article.excerpt}</p>
      <div className="flex items-center justify-between text-gray-500 text-sm">
        <span>By {article.author}</span>
        <span>{article.publishDate}</span>
      </div>
    </div>
  );

  const [isWritePanelOpen, setIsWritePanelOpen] = useState(false);
  const [newArticle, setNewArticle] = useState({
    title: "",
    excerpt: "",
    author: "",
    publishDate: "",
  });

  const openWritePanel = () => {
    setIsWritePanelOpen(true);
  };

  const closeWritePanel = () => {
    setIsWritePanelOpen(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <header className="flex justify-between items-center py-6">
        <h1 className="text-4xl font-bold">Medium</h1>
        <div className="flex items-center">
          <button className="flex items-center text-xl mr-4 focus:outline-none" onClick={openWritePanel}>
            <FaPen className="mr-1" />
            Write
          </button>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {isWritePanelOpen && (
        <section className="fixed top-0 right-0 bottom-0 w-1/2 bg-white shadow-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Write an Article</h2>
            <button className="text-gray-500 hover:text-gray-700 focus:outline-none" onClick={closeWritePanel}>
              <span className="sr-only">Close</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <form className="space-y-4">
            <input type="text" className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Title" value={newArticle.title} onChange={(e) => setNewArticle({ ...newArticle, title: e.target.value })} />
            <textarea className="w-full h-40 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Excerpt" value={newArticle.excerpt} onChange={(e) => setNewArticle({ ...newArticle, excerpt: e.target.value })}></textarea>
            <input type="text" className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Author" value={newArticle.author} onChange={(e) => setNewArticle({ ...newArticle, author: e.target.value })} />
            <input type="text" className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Publish Date" value={newArticle.publishDate} onChange={(e) => setNewArticle({ ...newArticle, publishDate: e.target.value })} />
          </form>
          <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={publishArticle}>
            Publish
          </button>
        </section>
      )}

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
