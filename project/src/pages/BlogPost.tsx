import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Tag, Clock, ArrowLeft, ChevronRight, User } from 'lucide-react';
import { Testimonials } from '../components/Testimonials';
import { getPostBySlug, posts, type ContentSegment, type BlogPost } from '../data/blogPosts';

const SITE = 'https://asquarehospital.com';

function ContentParagraph({ segments }: { segments: ContentSegment[] }) {
  return (
    <p className="text-gray-600 leading-relaxed">
      {segments.map((seg, i) => {
        if (typeof seg === 'string') return <span key={i}>{seg}</span>;
        const isExternal = seg.href.startsWith('http') || seg.href.startsWith('tel:');
        return (
          <Link
            key={i}
            to={seg.href}
            href={isExternal ? seg.href : undefined}
            title={seg.title}
            className="text-[#0077B6] font-semibold underline decoration-[#0077B6]/30 hover:decoration-[#0077B6] transition"
          >
            {seg.text}
          </Link>
        );
      })}
    </p>
  );
}

function RelatedPosts({ slugs }: { slugs: string[] }) {
  const related = slugs
    .map((s) => posts.find((p) => p.slug === s))
    .filter((p): p is BlogPost => Boolean(p))
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="mt-12 pt-8 border-t border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Articles</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {related.map((p) => (
          <Link
            key={p.slug}
            to={`/blog/${p.slug}`}
            className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all"
          >
            <img
              src={p.image}
              alt={p.imageAlt}
              className="w-full h-36 object-cover"
              loading="lazy"
            />
            <div className="p-4">
              <span className="inline-block text-xs font-semibold text-[#00B894] bg-green-50 px-2 py-0.5 rounded-full mb-2">
                {p.category}
              </span>
              <h3 className="text-sm font-bold text-gray-800 leading-snug group-hover:text-[#0077B6] transition">
                {p.title}
              </h3>
              <span className="inline-flex items-center gap-1 text-xs text-[#0077B6] font-semibold mt-3">
                Read Article <ChevronRight className="w-3 h-3" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <>
        <Helmet>
          <title>Article Not Found | A Square Hospital Jharsuguda</title>
          <meta name="robots" content="noindex" />
          <link rel="canonical" href={`${SITE}/blog`} />
        </Helmet>
        <div className="pt-32 pb-20 min-h-screen bg-gray-50">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-3">Article Not Found</h1>
            <p className="text-gray-600 mb-6">
              The article you are looking for does not exist or has been moved.
            </p>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0077B6] to-[#00B894] text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:shadow-lg transition"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
          </div>
        </div>
      </>
    );
  }

  const canonical = `${SITE}/blog/${post.slug}`;

  return (
    <>
      <Helmet>
        <title>{post.metaTitle}</title>
        <meta name="description" content={post.metaDescription} />
        <meta name="keywords" content={`${post.category.toLowerCase()}, ${post.title}, A Square Hospital Jharsuguda`} />
        <meta name="author" content={post.authorName} />
        <link rel="canonical" href={canonical} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content={post.metaTitle} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:image" content={post.image} />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="A Square Hospital Jharsuguda" />
        <meta property="article:published_time" content={post.datePublished} />
        <meta property="article:modified_time" content={post.dateModified} />
        <meta property="article:author" content={post.authorName} />
        <meta property="article:section" content={post.category} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={canonical} />
        <meta name="twitter:title" content={post.metaTitle} />
        <meta name="twitter:description" content={post.metaDescription} />
        <meta name="twitter:image" content={post.image} />

        {/* Structured data */}
        <script type="application/ld+json">{post.articleSchema}</script>
        <script type="application/ld+json">{post.faqSchema}</script>
      </Helmet>

      <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-6 flex items-center gap-1.5 flex-wrap" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-[#0077B6]">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/blog" className="hover:text-[#0077B6]">Blog</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gray-700 font-semibold truncate max-w-xs">{post.category}</span>
          </nav>

          {/* Header */}
          <header className="mb-6">
            <div className="flex items-center gap-3 mb-3 flex-wrap">
              <span className="inline-flex items-center gap-1 text-xs text-[#00B894] font-semibold bg-green-50 px-2.5 py-1 rounded-full">
                <Tag className="w-3 h-3" />{post.category}
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-gray-500">
                <Clock className="w-3 h-3" />{post.readTime}
              </span>
              <span className="text-xs text-gray-500">{post.date}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              {post.title}
            </h1>
            <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
              <User className="w-4 h-4" />
              <span>By <span className="font-semibold text-gray-700">{post.authorName}</span></span>
            </div>
          </header>

          {/* Hero image */}
          <img
            src={post.image}
            alt={post.imageAlt}
            className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-2xl shadow-sm mb-8"
          />

          {/* Article body */}
          <article className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-10 space-y-6">
            {post.content.map((section, i) => (
              <div key={i}>
                {section.heading && (
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 mt-2">
                    {section.heading}
                  </h2>
                )}
                <ContentParagraph segments={section.segments} />
              </div>
            ))}

            {/* FAQs */}
            {post.faqs.length > 0 && (
              <section className="mt-8 pt-6 border-t border-gray-100">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-5">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {post.faqs.map((faq, i) => (
                    <div key={i} className="bg-blue-50 rounded-xl p-4 sm:p-5">
                      <h3 className="font-semibold text-gray-800 text-base mb-2">{faq.q}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/#appointment"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0077B6] to-[#00B894] text-white px-6 py-2.5 rounded-xl font-semibold text-sm hover:shadow-lg transition"
              >
                Book Appointment
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-[#0077B6] text-[#0077B6] px-6 py-2.5 rounded-xl font-semibold text-sm hover:bg-blue-50 transition"
              >
                Contact Us
              </Link>
            </div>
          </article>

          {/* Related articles */}
          <RelatedPosts slugs={post.interlinks} />

          {/* Back to all articles */}
          <div className="mt-8 text-center">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-[#0077B6] font-semibold text-sm hover:gap-3 transition-all"
            >
              <ArrowLeft className="w-4 h-4" /> View All Health Articles
            </Link>
          </div>
        </div>
      </div>

      <Testimonials />
    </>
  );
}

export default BlogPost;
