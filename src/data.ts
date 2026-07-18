import { MenuItem, SignatureDrink, Review, GalleryItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // COFFEE
  {
    id: 'c1',
    name: 'Espresso Romano',
    description: 'Double shot of our house origin heirloom beans with a refreshing twist of lemon peel.',
    price: 320,
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=600&q=80',
    isPopular: false
  },
  {
    id: 'c2',
    name: 'Vanilla Bean Flat White',
    description: 'Ristretto shots with velvety microfoam infused with organic Madagascar vanilla pod.',
    price: 390,
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=600&q=80',
    isPopular: true
  },
  {
    id: 'c3',
    name: 'Lavender Honey Cortado',
    description: 'Perfect balance of bold espresso and warm milk sweetened with local lavender-infused honey.',
    price: 380,
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
    isPopular: true
  },

  // TEA
  {
    id: 't1',
    name: 'Ceremonial Matcha Latte',
    description: 'Stone-ground Uji matcha whisked with pure water and topped with creamy oat milk.',
    price: 410,
    category: 'tea',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=600&q=80',
    isPopular: true
  },
  {
    id: 't2',
    name: 'Ruby Hibiscus Herbal Brew',
    description: 'Sun-dried hibiscus flowers, elderberries, and orange peel steeped to sweet, tart perfection.',
    price: 340,
    category: 'tea',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80',
    isPopular: false
  },
  {
    id: 't3',
    name: 'Earl Grey Rose Blossom',
    description: 'Classic black tea infused with double bergamot oil and organic pink rose petals.',
    price: 360,
    category: 'tea',
    image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=600&q=80',
    isPopular: false
  },

  // BREAKFAST
  {
    id: 'b1',
    name: 'Avocado & Heirloom Sourdough',
    description: 'Whipped avocado, multi-colored cherry tomatoes, feta, radishes, and toasted seeds on country sourdough.',
    price: 490,
    category: 'breakfast',
    image: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&w=600&q=80',
    isPopular: true
  },
  {
    id: 'b2',
    name: 'Brioche French Toast Platter',
    description: 'Thick-cut brioche soaked in rich egg custard, griddled golden, served with fresh berries and maple glaze.',
    price: 520,
    category: 'breakfast',
    image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=600&q=80',
    isPopular: false
  },
  {
    id: 'b3',
    name: 'Truffle Benedict',
    description: 'Perfectly poached cage-free eggs, smoked ham, and sauteed spinach on house-made English muffins with truffle hollandaise.',
    price: 580,
    category: 'breakfast',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80',
    isPopular: true
  },

  // PASTA
  {
    id: 'p1',
    name: 'Wild Mushroom Tagliatelle',
    description: 'Fresh artisanal egg pasta tossed with porcini and chanterelle mushrooms, white wine, and aged pecorino cream.',
    price: 640,
    category: 'pasta',
    image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=600&q=80',
    isPopular: true
  },
  {
    id: 'p2',
    name: 'Pesto Basilico Gnocchi',
    description: 'Hand-rolled potato gnocchi coated in a vibrant Genovese basil pesto, toasted pine nuts, and buffalo mozzarella.',
    price: 610,
    category: 'pasta',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80',
    isPopular: false
  },

  // PIZZA
  {
    id: 'pz1',
    name: 'Sourdough Margherita',
    description: 'San Marzano tomato coulis, fresh fior di latte mozzarella, fragrant basil leaves, and cold-pressed extra virgin olive oil.',
    price: 590,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
    isPopular: true
  },
  {
    id: 'pz2',
    name: 'Artisanal Prosciutto & Fig',
    description: 'Crisp hand-stretched crust topped with prosciutto di Parma, black mission figs, wild arugula, and a dark balsamic reduction.',
    price: 680,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=600&q=80',
    isPopular: false
  },

  // BURGER
  {
    id: 'bg1',
    name: 'Wagyu Truffle Burger',
    description: 'Premium Wagyu beef patty, melted gruyère, caramelised shallots, and house-made black truffle aioli on a toasted brioche bun.',
    price: 750,
    category: 'burger',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
    isPopular: true
  },
  {
    id: 'bg2',
    name: 'Spiced Chickpea & Avocado Burger',
    description: 'Crispy herb-infused organic chickpea patty, fresh avocado mash, rocket leaves, and dynamic harissa yogurt sauce.',
    price: 480,
    category: 'burger',
    image: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=600&q=80',
    isPopular: false
  },

  // DESSERTS
  {
    id: 'd1',
    name: 'Pistachio Croissant Rose',
    description: 'Twice-baked butter croissant loaded with creamy pistachio frangipane, topped with slivered nuts and dried rose petals.',
    price: 310,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80',
    isPopular: true
  },
  {
    id: 'd2',
    name: 'Basque Burnt Cheesecake',
    description: 'Rich, crustless Spanish classic baked high for a deeply caramelised exterior and a super-creamy, molten center.',
    price: 440,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80',
    isPopular: true
  },
  {
    id: 'd3',
    name: 'Salted Chocolate Ganache Tart',
    description: 'Dark Belgian chocolate ganache on a cocoa sable crust, kissed with Maldon sea salt flakes and gold leaf foil.',
    price: 390,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1508737027454-e6454ef45afd?auto=format&fit=crop&w=600&q=80',
    isPopular: false
  }
];

export const SIGNATURE_DRINKS: SignatureDrink[] = [
  {
    id: 'sd1',
    name: 'Velvety Cappuccino Reserve',
    tagline: 'The timeless standard, elevated.',
    description: 'A harmonious blend of our special house espresso pulled with precision, topped with expertly steamed silk-textured milk, and finished with a delicate dusting of high-grade single-origin organic cocoa.',
    tasteProfile: ['Bold Espresso', 'Sweet Cream', 'Subtle Cocoa Notes'],
    ingredients: ['Specialty Heirloom Espresso', 'Organic Whole Milk', 'Organic Cocoa Powder'],
    price: 420,
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sd2',
    name: 'Nitro Cold Brew Infusion',
    tagline: 'Cool, crisp, and velvety smooth.',
    description: 'Slow-steeped in cold mountain spring water for 20 hours, then infused with pure nitrogen upon pour. This process creates a cascade of fine bubbles and a thick, creamy head that resembles a draft stout, with zero dairy.',
    tasteProfile: ['Bright Citrus', 'Rich Molasses', 'Silky Carbonation'],
    ingredients: ['Single-Origin Cold Brew', 'Liquid Nitrogen Infusion', 'Orange Zest Accord'],
    price: 460,
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sd3',
    name: 'Dark Orange Mocha',
    tagline: 'Art meets sensory indulgence.',
    description: 'A luxurious integration of 72% dark Venezuelan chocolate melted into double shots of espresso, accented with freshly grated sweet Valencia orange zest, and topped with light, aerated microfoam.',
    tasteProfile: ['Bittersweet Dark Chocolate', 'Citrus Aromatics', 'Full-Bodied Coffee'],
    ingredients: ['Venezuelan 72% Cocoa', 'Double Ristretto Shot', 'Valencia Orange Zest', 'Steam-processed Milk'],
    price: 480,
    image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sd4',
    name: 'Smoked Salt Caramel Latte',
    tagline: 'A savory-sweet classic reimagined.',
    description: 'A comforting, rich drink combining sweet butter caramel sauce cooked from scratch in-house, high-grade sea salt flakes smoked over applewood, smooth espresso, and perfectly steamed organic dairy.',
    tasteProfile: ['Warm Butterscotch', 'Smoky Applewood', 'Creamy Finish'],
    ingredients: ['House-cooked Caramel', 'Applewood Smoked Salt', 'Medium-Roast Espresso', 'Velvet Foam'],
    price: 490,
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    name: 'Ananya Sharma',
    role: 'Food Writer & Critic',
    text: 'Brew & Bloom is a revelation. Their pour-overs are treated like fine wine, and the interior is an oasis of calm. The sourdough avocado toast is by far the best in the city—absolute perfection!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80',
    date: '2 weeks ago'
  },
  {
    id: 'r2',
    name: 'Marcus Vance',
    role: 'Specialty Coffee Connoisseur',
    text: 'As someone who travels globally checking out coffee roasters, I was blown away by the Lavender Honey Cortado. They pull their shots on a custom La Marzocco and you can taste the absolute craft.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
    date: '1 month ago'
  },
  {
    id: 'r3',
    name: 'Elena Rostova',
    role: 'Interior Designer & Architect',
    text: 'The spatial planning here is brilliant. A masterclass in organic modernism—using premium ash woods, abundant indoor foliage, and soft ambient lighting that changes gracefully as evening falls.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80',
    date: '3 weeks ago'
  },
  {
    id: 'r4',
    name: 'Siddharth Roy',
    role: 'Tech Lead & Workspace Aficionado',
    text: 'Perfect WiFi, plenty of power outlets elegantly integrated into the wood panels, and a wonderful quiet-zone layout. The Nitro Cold Brew kept me going all afternoon. Fully recommend to professionals.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80',
    date: 'Yesterday'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80',
    caption: 'Our bright and airy coffee bar, designed with clean Scandinavian aesthetics.',
    category: 'cafe'
  },
  {
    id: 'g2',
    image: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&w=800&q=80',
    caption: 'The signature Avocado & Heirloom Sourdough plated fresh with seeds.',
    category: 'food'
  },
  {
    id: 'g3',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
    caption: 'Pour-over coffee dripping in slow motion over wooden countertops.',
    category: 'cafe'
  },
  {
    id: 'g4',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80',
    caption: 'Expert latte art crafted by our master baristas on a velvet cappuccino.',
    category: 'cafe'
  },
  {
    id: 'g5',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80',
    caption: 'Chilled Nitro Cold Brew cascade served fresh from the tap.',
    category: 'cafe'
  },
  {
    id: 'g6',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80',
    caption: 'Our signature Pistachio Croissants baked from scratch every single morning.',
    category: 'dessert'
  },
  {
    id: 'g7',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
    caption: 'Freshly baked hand-stretched Neapolitan Pizza baked at 450°C.',
    category: 'food'
  },
  {
    id: 'g8',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    caption: 'Wagyu Truffle Burger with hand-cut rosemary wedges.',
    category: 'food'
  },
  {
    id: 'g9',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80',
    caption: 'Molten Basque Burnt Cheesecake with golden caramelised crust.',
    category: 'dessert'
  },
  {
    id: 'g10',
    image: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=800&q=80',
    caption: 'Comfortable corner seating perfect for warm reading or quiet remote work.',
    category: 'seating'
  },
  {
    id: 'g11',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80',
    caption: 'Perfect Sunday brunch with golden eggs and seasonal berries.',
    category: 'food'
  },
  {
    id: 'g12',
    image: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=800&q=80',
    caption: 'Our shaded outdoor greenhouse patio filled with organic greenery and fresh air.',
    category: 'seating'
  }
];

export const TIMELINE_STEPS = [
  {
    year: '2016',
    title: 'The Seed is Planted',
    description: 'Brew & Bloom began as a humble mobile coffee cart, serving curated micro-lot coffees at local farmers markets with a goal to celebrate pure craftsmanship.'
  },
  {
    year: '2018',
    title: 'A Sanctuary in the City',
    description: 'We opened our first physical brick-and-mortar location. We designed the interior with warm reclaimed wood, soft architectural lines, and a dedicated in-house bakery.'
  },
  {
    year: '2021',
    title: 'Direct Trade Initiative',
    description: 'Launched our direct-trade sourcing program. We now partner closely with family-owned coffee estates in Karnataka and Colombia, ensuring ethical premium prices.'
  },
  {
    year: '2024',
    title: 'Culinary Expansion',
    description: 'Expanded our menu beyond coffee and pastries, bringing in expert chefs to create our now-famous sourdough dishes, artisanal pasta, and dynamic organic burgers.'
  }
];

export const CAFE_INFO = {
  address: '12, Woodside Boulevard, Green Park, New Delhi - 110016',
  phone: '+91 98765 43210',
  email: 'hello@brewandbloomcafe.com',
  workingHours: [
    { days: 'Monday - Friday', hours: '7:30 AM - 10:00 PM' },
    { days: 'Saturday - Sunday', hours: '8:00 AM - 11:00 PM' }
  ],
  socials: {
    instagram: 'https://instagram.com/brewbloom',
    facebook: 'https://facebook.com/brewbloom',
    whatsapp: 'https://wa.me/919876543210'
  }
};
