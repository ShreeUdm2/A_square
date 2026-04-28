export function Blog() {
  const posts = [
    {
      title: "Understanding Heart Health",
      date: "Oct 20, 2025",
      excerpt: "Expert advice on maintaining a healthy heart through diet and exercise.",
      image: "https://images.unsplash.com/photo-1505751172107-573225a94291?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "The Importance of Regular Health Checkups",
      date: "Oct 15, 2025",
      excerpt: "Why preventative care is the best approach to long-term wellness.",
      image: "https://images.unsplash.com/photo-1576091160550-2173bc999565?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-12">Health & Wellness Blog</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <span className="text-sm text-[#00B894] font-medium">{post.date}</span>
                <h2 className="text-xl font-bold mt-2 mb-3">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <button className="text-[#0077B6] font-semibold hover:underline">Read More →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
