import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Testimonials } from '../components/Testimonials';
import { Clock, Tag, ChevronRight } from 'lucide-react';
import { posts, categories } from '../data/blogPosts';

export function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All' ? posts : posts.filter((p) => p.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Health Blog — Tips & Advice for Jharsuguda | A Square Hospital</title>
        <meta name="description" content="Expert health articles from A Square Hospital Jharsuguda — covering women's health, maternity care, diabetes, heart health, paediatrics, NICU, orthopaedics & preventive care." />
        <meta name="keywords" content="health blog Jharsuguda, hospital blog Jharsuguda, women health tips Jharsuguda, diabetes care Jharsuguda, maternity care Jharsuguda, NICU Jharsuguda, A Square Hospital blog" />
        <link rel="canonical" href="https://asquarehospital.com/blog" />
      </Helmet>

      <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-10">
            <span className="text-[#00B894] font-semibold text-sm uppercase tracking-wider">Health Articles</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-4 text-gray-800">
              Health &amp; <span className="bg-gradient-to-r from-[#0077B6] to-[#00B894] bg-clip-text text-transparent">Wellness Blog</span>
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-[#0077B6] to-[#00B894] rounded mx-auto mb-4" />
            <p className="text-gray-500 max-w-2xl mx-auto text-base">Expert health advice from A Square Hospital, Jharsuguda — helping families across Odisha live healthier lives.</p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-[#0077B6] to-[#00B894] text-white shadow-md'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-[#0077B6]/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post) => (
              <article key={post.slug} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
                <Link to={`/blog/${post.slug}`} className="block">
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                </Link>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center gap-1 text-xs text-[#00B894] font-semibold bg-green-50 px-2.5 py-1 rounded-full">
                      <Tag className="w-3 h-3" />{post.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-gray-400">
                      <Clock className="w-3 h-3" />{post.readTime}
                    </span>
                  </div>
                  <span className="text-xs text-gray-400 mb-2">{post.date}</span>
                  <h2 className="text-base font-bold mt-1 mb-3 text-gray-800 leading-snug">
                    <Link to={`/blog/${post.slug}`} className="hover:text-[#0077B6] transition">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-500 text-sm mb-4 flex-grow leading-relaxed">{post.excerpt}</p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-[#0077B6] font-semibold text-sm hover:gap-2.5 transition-all mt-auto"
                  >
                    Read Full Article <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <Testimonials />
    </>
  );
}

export default Blog;
