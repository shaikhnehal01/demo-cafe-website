import { Instagram as InstaIcon, Heart, MessageCircle } from 'lucide-react';

export default function Instagram() {
  const posts = [
    {
      id: 'ig1',
      image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=400&q=80',
      likes: '284',
      comments: '12'
    },
    {
      id: 'ig2',
      image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=400&q=80',
      likes: '341',
      comments: '19'
    },
    {
      id: 'ig3',
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=400&q=80',
      likes: '512',
      comments: '44'
    },
    {
      id: 'ig4',
      image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=400&q=80',
      likes: '198',
      comments: '8'
    },
    {
      id: 'ig5',
      image: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&w=400&q=80',
      likes: '422',
      comments: '31'
    },
    {
      id: 'ig6',
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=400&q=80',
      likes: '612',
      comments: '56'
    }
  ];

  return (
    <section id="instagram" className="py-20 bg-beige/20 border-t border-b border-beige">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header link */}
        <div className="text-center mb-12">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-serif text-lg font-bold text-espresso hover:text-terracotta transition-colors group"
            id="instagram-link"
          >
            <InstaIcon className="w-5 h-5 text-terracotta group-hover:scale-110 transition-transform" />
            <span>@brewbloom_delhi</span>
          </a>
          <p className="font-sans text-xs text-espresso/60 mt-1">
            Follow our organic daily updates, brewing clips, and fresh pastry drops.
          </p>
        </div>

        {/* 6-Column Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4" id="instagram-grid">
          {posts.map((post) => (
            <a
              key={post.id}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square overflow-hidden rounded-2xl group border border-beige/60 shadow-sm"
              id={`ig-post-${post.id}`}
            >
              <img
                src={post.image}
                alt="Instagram coffee lifestyle post"
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Cover Stats Overlay */}
              <div className="absolute inset-0 bg-espresso/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 text-cream">
                <div className="flex items-center gap-1.5 text-sm font-semibold">
                  <Heart className="w-4 h-4 fill-cream" />
                  <span>{post.likes}</span>
                </div>
                <div className="flex items-center gap-1.5 text-sm font-semibold">
                  <MessageCircle className="w-4 h-4 fill-cream" />
                  <span>{post.comments}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
