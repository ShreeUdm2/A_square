import { useState } from 'react';
import { Testimonials } from '../components/Testimonials';
import { X } from 'lucide-react';

type BlogPost = {
  title: string;
  date: string;
  excerpt: string;
  content: string[];
  image: string;
};

export function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const posts: BlogPost[] = [
    {
      title: "Understanding Heart Health",
      date: "Oct 20, 2025",
      excerpt: "Expert advice on maintaining a healthy heart through diet and exercise.",
      image: "https://images.unsplash.com/photo-1505751172107-573225a94291?auto=format&fit=crop&q=80&w=800",
      content: [
        "Your heart is the engine of your body, keeping everything running smoothly. Maintaining its health is crucial for a long, vibrant life. Heart disease remains one of the leading causes of death worldwide, but the good news is that it is largely preventable.",
        "Diet plays a massive role in cardiovascular wellness. A heart-healthy diet is rich in fruits, vegetables, whole grains, and lean proteins. Try to minimize your intake of saturated fats, trans fats, and excess sodium. Omega-3 fatty acids, found in fish like salmon, are particularly beneficial.",
        "Physical activity is another cornerstone of a healthy heart. Just 30 minutes of moderate exercise a day can significantly lower your risk of heart problems. Whether it's a brisk walk, swimming, or cycling, keeping active helps lower blood pressure, reduce stress, and maintain a healthy weight.",
        "Lastly, regular checkups are vital. Monitoring your blood pressure, cholesterol levels, and blood sugar can catch potential issues before they become serious. Listen to your body and consult your cardiologist if you experience any unusual symptoms."
      ]
    },
    {
      title: "The Importance of Regular Health Checkups",
      date: "Oct 15, 2025",
      excerpt: "Why preventative care is the best approach to long-term wellness.",
      image: "https://images.unsplash.com/photo-1576091160550-2173bc999565?auto=format&fit=crop&q=80&w=800",
      content: [
        "Many people only visit the doctor when they feel sick. However, preventative healthcare through regular checkups is the most effective way to stay healthy and catch potential illnesses early.",
        "Routine checkups allow doctors to monitor your baseline health. By tracking your vital signs over time, physicians can easily spot deviations that might indicate underlying issues like hypertension, diabetes, or even certain cancers. Early detection often means simpler, more effective treatments.",
        "Moreover, age, family history, and lifestyle choices all dictate the kind of screenings you need. A comprehensive annual exam ensures you are up to date on vaccinations, blood tests, and necessary scans tailored to your specific risk profile.",
        "Don't wait for symptoms to appear. Make your health a priority by scheduling your annual comprehensive checkup today. Preventative care is an investment in your future well-being."
      ]
    }
  ];

  return (
    <>
      <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#00B894] font-semibold text-sm uppercase tracking-wider">Our Blog</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-4 text-gray-800">
              Health & <span className="bg-gradient-to-r from-[#0077B6] to-[#00B894] bg-clip-text text-transparent">Wellness</span>
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-[#0077B6] to-[#00B894] rounded mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition flex flex-col">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-sm text-[#00B894] font-medium">{post.date}</span>
                  <h2 className="text-xl font-bold mt-2 mb-3">{post.title}</h2>
                  <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
                  <button 
                    onClick={() => setSelectedPost(post)}
                    className="text-[#0077B6] font-semibold hover:underline text-left mt-auto"
                  >
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Testimonials />

      {/* Blog Post Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4">
          <div 
            className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 p-2 bg-white rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition z-10 shadow-sm"
            >
              <X className="w-6 h-6" />
            </button>
            
            <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-64 sm:h-80 object-cover" />
            
            <div className="p-6 sm:p-10">
              <span className="inline-block px-3 py-1 bg-green-50 text-[#00B894] rounded-full text-sm font-medium mb-4">
                {selectedPost.date}
              </span>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">{selectedPost.title}</h2>
              
              <div className="space-y-4">
                {selectedPost.content.map((paragraph, index) => (
                  <p key={index} className="text-gray-600 leading-relaxed text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-0 -z-10" onClick={() => setSelectedPost(null)} />
        </div>
      )}
    </>
  );
}
