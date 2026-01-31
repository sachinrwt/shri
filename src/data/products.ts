// Centralized product data for all products
// Each product has unique, professionally-written devotional descriptions

import ladduGopalDress from "@/assets/products/laddu-gopal-dress.jpg";
import ladduGopalDress2 from "@/assets/products/laddu-gopal-dress-2.jpg";
import ramMandirPoshak from "@/assets/products/ram-mandir-poshak.jpg";
import silkKhatuShyam from "@/assets/products/silk-khatu-shyam.jpg";
import ladduGopalMukut from "@/assets/products/laddu-gopal-mukut.jpg";
import ishauraFreshener from "@/assets/products/ishaura-freshener.jpg";
import guruNanakDashboard from "@/assets/products/guru-nanak-dashboard.jpg";
import khatuShyamDashboard from "@/assets/products/khatu-shyam-baba-dashboard.jpg";
import saiBabaDashboard from "@/assets/products/sai-baba-dashboard.jpg";
import khatuShyamStatue5inch from "@/assets/products/khatu-shyam-statue-5inch.jpg";
import khatuShyamStatue from "@/assets/products/khatu-shyam-statue.jpg";
import khatuShyamIdol from "@/assets/products/khatu-shyam-idol.jpg";
import ganeshStatue from "@/assets/products/ganesh-statue.jpg";
import saiBabaDress from "@/assets/products/sai-baba-dress.jpg";
import saiBabaPagdi from "@/assets/products/sai-baba-pagdi.jpg";
import mataDress from "@/assets/products/mata-dress.jpg";
import shivParvatiDashboard from "@/assets/products/shiv-parvati-dashboard.jpg";
import bhageshwarDashboard from "@/assets/products/bhageshwar-dashboard.jpg";
import ishauraVentClip from "@/assets/products/ishaura-vent-clip.jpg";
import ishauraAirFreshener from "@/assets/products/ishaura-air-freshener.jpg";
import kesarChandan from "@/assets/products/kesar-chandan.jpg";
import ashtagandhaPowder from "@/assets/products/ashtagandha-powder.jpg";
import chandanPowder from "@/assets/products/chandan-powder.jpg";
import kumkumSindur from "@/assets/products/kumkum-sindur.jpg";
import jaiShriShyamTilak from "@/assets/products/jai-shri-shyam-tilak.jpg";
import gangaJal from "@/assets/products/ganga-jal.jpg";
import rotoFabric from "@/assets/products/roto-fabric.jpg";

export interface ProductDescription {
  intro: string[];
  packaging: {
    type: string;
    piecesPerCarton: string;
    moq: string;
    handling: string;
  };
  suggestedUse: string[];
  careInstructions: string[];
}

export interface ProductAttributes {
  material: string;
  finish: string;
  weight?: string;
  position?: string;
  size?: string;
  usage: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  unit: string;
  category: string;
  subcategory?: string;
  images: string[];
  badge?: "hot" | "new" | string;
  rating: number;
  reviews: number;
  sku: string;
  sizes?: string[];
  shortDescription: string;
  fullDescription: ProductDescription;
  attributes: ProductAttributes;
  suitableFor: string;
  MOQ: string;
}

export const products: Product[] = [
  // ============ GOD STATUES ============
  {
    id: "1",
    name: "5 Inch Khatu Shyam Idol God Statue",
    price: 170.0,
    unit: "Piece",
    category: "God Statues",
    subcategory: "Khatu Shyam",
    images: [khatuShyamStatue5inch, khatuShyamStatue, khatuShyamIdol],
    badge: "hot",
    rating: 4.5,
    reviews: 12,
    sku: "SSM-GS-001",
    sizes: ["4in", "5in", "6in"],
    shortDescription: "Khatu Shyam Ji is a revered deity in Hinduism, believed to be an incarnation of Barbarika, the grandson of Bhima from the Mahabharata. His idol or statue is typically designed to reflect his divine grace and aura.",
    fullDescription: {
      intro: [
        "Bring divine grace and spiritual serenity into your space with this beautifully crafted Khatu Shyam Baba Statue. Made from high-quality polyresin and finished with vibrant color coating, this statue reflects fine detailing and devotional elegance. Ideal for daily worship, home temples, and spiritual decor, the statue embodies calmness, faith, and reverence.",
        "Khatu Shyam Ji is a highly revered deity in Hinduism, believed to be the incarnation of Barbarika, the grandson of Bhima from the Mahabharata. Worshipped widely for blessings, devotion, and fulfillment of wishes, this statue is designed to radiate his divine aura and protective presence.",
        "The intricate craftsmanship captures every detail of the deity's serene expression and traditional attire, making it a centerpiece of devotion in any sacred space."
      ],
      packaging: {
        type: "Secure carton packing",
        piecesPerCarton: "As per order requirement",
        moq: "10 Pieces",
        handling: "Carefully packed to prevent damage during transit."
      },
      suggestedUse: [
        "Ideal for daily pooja and religious rituals",
        "Suitable for placement in home mandir, office temple, or gifting",
        "Can be used during festivals, religious occasions, and auspicious ceremonies"
      ],
      careInstructions: [
        "Clean gently with a dry or soft cloth",
        "Avoid using water or harsh chemicals",
        "Keep away from direct sunlight for long-lasting color",
        "Minor color or texture variations may occur due to handcrafted finishing."
      ]
    },
    attributes: {
      material: "Polyresin",
      finish: "Color Coated",
      weight: "Approx. 100 gm",
      position: "Standing",
      size: "5 Inch",
      usage: "Worship, Home Temple, Spiritual Décor"
    },
    suitableFor: "Home, Office, Temple",
    MOQ: "10 Pieces"
  },
  {
    id: "2",
    name: "4 Inch Khatu Shyam Baba God Statue",
    price: 85.0,
    unit: "Piece",
    category: "God Statues",
    subcategory: "Khatu Shyam",
    images: [khatuShyamStatue, khatuShyamStatue5inch, khatuShyamIdol],
    badge: "12%",
    rating: 4.3,
    reviews: 8,
    sku: "SSM-GS-002",
    sizes: ["3in", "4in", "5in"],
    shortDescription: "A compact and beautifully crafted Khatu Shyam Baba statue, perfect for small spaces, travel poujas, and personal altars. This 4-inch idol brings divine blessings wherever you go.",
    fullDescription: {
      intro: [
        "Experience the divine presence of Khatu Shyam Baba with this elegantly crafted 4-inch statue. Designed for devotees who seek spiritual connection in compact spaces, this idol is perfect for personal altars, travel poujas, or as a sacred addition to your car dashboard.",
        "The smaller size makes it ideal for those living in apartments or anyone seeking a portable devotional companion. Despite its compact dimensions, no detail has been spared in capturing the serene expression and graceful posture of Khatu Shyam Ji.",
        "Crafted from premium polyresin with a smooth color-coated finish, this statue maintains the same devotional elegance as larger versions while fitting perfectly in intimate spaces."
      ],
      packaging: {
        type: "Individual box packaging",
        piecesPerCarton: "24 pieces per carton",
        moq: "12 Pieces",
        handling: "Each piece wrapped in protective foam for safe delivery."
      },
      suggestedUse: [
        "Perfect for small home mandirs and personal altars",
        "Ideal for travel pooja kits and hotel room worship",
        "Suitable for car dashboards and office desks",
        "Makes a thoughtful devotional gift for loved ones"
      ],
      careInstructions: [
        "Dust regularly with a soft, dry cloth",
        "Avoid exposure to moisture or humidity",
        "Handle with care during travel",
        "Store in a clean, dry place when not in use"
      ]
    },
    attributes: {
      material: "Polyresin",
      finish: "Glossy Color Coated",
      weight: "Approx. 60 gm",
      position: "Standing",
      size: "4 Inch",
      usage: "Personal Worship, Travel Pooja, Car Dashboard"
    },
    suitableFor: "Small Spaces, Travel, Personal Altar",
    MOQ: "12 Pieces"
  },
  {
    id: "3",
    name: "Khatu Shyam Idol Premium Statue",
    price: 250.0,
    unit: "Piece",
    category: "God Statues",
    subcategory: "Khatu Shyam",
    images: [khatuShyamIdol, khatuShyamStatue5inch, khatuShyamStatue],
    badge: "hot",
    rating: 4.8,
    reviews: 15,
    sku: "SSM-GS-003",
    sizes: ["6in", "8in", "10in"],
    shortDescription: "A premium handcrafted Khatu Shyam idol featuring intricate detailing and superior finish. This masterpiece statue is designed for devotees seeking an exceptional piece for their home temple.",
    fullDescription: {
      intro: [
        "Elevate your devotional space with this Premium Khatu Shyam Idol, a masterpiece of spiritual artistry. Every curve and contour has been meticulously crafted by skilled artisans who pour their devotion into each creation, resulting in a statue that truly captures the divine essence of Shyam Baba.",
        "This premium idol stands apart with its exceptional detailing—from the ornate crown to the delicate features of the deity's face, every element reflects superior craftsmanship. The rich color palette and lustrous finish create a statue that commands reverence and admiration.",
        "Whether placed in your home mandir as the central deity or gifted to a fellow devotee during auspicious occasions, this idol serves as a timeless symbol of faith and devotion to Khatu Shyam Ji."
      ],
      packaging: {
        type: "Premium gift box with velvet lining",
        piecesPerCarton: "12 pieces per carton",
        moq: "6 Pieces",
        handling: "Double-layered protection with thermocol and bubble wrap."
      },
      suggestedUse: [
        "Centerpiece for home mandir or temple",
        "Premium devotional gift for special occasions",
        "Ideal for Khatu Shyam Jayanti celebrations",
        "Perfect for new home griha pravesh ceremonies"
      ],
      careInstructions: [
        "Clean with a soft microfiber cloth",
        "Apply occasional polish for maintaining shine",
        "Keep in a covered area to prevent dust accumulation",
        "Handle with extra care due to intricate details"
      ]
    },
    attributes: {
      material: "Premium Polyresin with Metal Accents",
      finish: "Hand-Painted with Lacquer Coating",
      weight: "Approx. 300 gm",
      position: "Standing with raised hand blessing",
      size: "6-10 Inch options",
      usage: "Main Temple Idol, Premium Gift, Spiritual Décor"
    },
    suitableFor: "Home Temple, Premium Gifting, Religious Events",
    MOQ: "6 Pieces"
  },
  {
    id: "4",
    name: "Ganesh Statue Blessing Idol",
    price: 195.0,
    unit: "Piece",
    category: "God Statues",
    subcategory: "Ganesh",
    images: [ganeshStatue, khatuShyamIdol, khatuShyamStatue5inch],
    badge: "new",
    rating: 4.7,
    reviews: 20,
    sku: "SSM-GS-004",
    sizes: ["4in", "5in", "6in", "8in"],
    shortDescription: "Lord Ganesha, the remover of obstacles and harbinger of prosperity, is beautifully captured in this divine statue. Invite success, wisdom, and good fortune into your home with this auspicious idol.",
    fullDescription: {
      intro: [
        "Welcome Lord Ganesha, the beloved elephant-headed deity, into your sacred space with this exquisitely crafted blessing idol. Known as Vighnaharta (remover of obstacles) and Mangalmurti (symbol of auspiciousness), Ganesh Ji is worshipped at the beginning of every new venture, journey, and ceremony.",
        "This statue depicts Lord Ganesha in his classic seated blessing posture (Abhaya Mudra), with one hand raised in divine blessing while the other holds his favorite modak sweet. The intricate detailing of his crown, trunk, and ornaments reflects the craftsmanship of traditional Indian artistry.",
        "According to Vaastu Shastra, placing a Ganesh idol at the entrance of your home or in the northeast corner invites positive energy, prosperity, and protection. This statue serves as both a spiritual focal point and a beautiful piece of devotional art."
      ],
      packaging: {
        type: "Decorative box packaging",
        piecesPerCarton: "20 pieces per carton",
        moq: "10 Pieces",
        handling: "Each statue individually wrapped in protective material."
      },
      suggestedUse: [
        "Place at home entrance for Vaastu benefits",
        "Ideal for Ganesh Chaturthi celebrations",
        "Perfect for new business inauguration or griha pravesh",
        "Suitable for daily worship in home mandir"
      ],
      careInstructions: [
        "Wipe clean with a soft dry cloth",
        "Avoid placing in direct sunlight or damp areas",
        "Clean the trunk area gently to preserve detailing",
        "Traditional abhishek can be performed occasionally"
      ]
    },
    attributes: {
      material: "Polyresin",
      finish: "Multi-Color Hand Painted",
      weight: "Approx. 150-400 gm (size dependent)",
      position: "Seated Blessing Posture",
      size: "4-8 Inch options",
      usage: "Home Entrance, Mandir, Vaastu, New Beginnings"
    },
    suitableFor: "Home, Office, Shop, New Ventures",
    MOQ: "10 Pieces"
  },

  // ============ CAR DASHBOARD IDOLS ============
  {
    id: "5",
    name: "Guru Nanak Dev Ji Car Dashboard Idol",
    price: 70.0,
    unit: "Piece",
    category: "Car Dashboard Idols",
    subcategory: "Sikh",
    images: [guruNanakDashboard, saiBabaDashboard, shivParvatiDashboard],
    badge: "12%",
    rating: 4.6,
    reviews: 18,
    sku: "SSM-CD-001",
    shortDescription: "Carry the blessings of Guru Nanak Dev Ji on every journey with this beautifully crafted car dashboard idol. A symbol of Sikh faith and spiritual protection for safe travels.",
    fullDescription: {
      intro: [
        "Embark on every journey with the divine blessings of Guru Nanak Dev Ji, the founder of Sikhism and the first of the ten Sikh Gurus. This thoughtfully designed car dashboard idol brings spiritual protection, peace, and the teachings of Waheguru into your daily travels.",
        "The idol depicts Guru Nanak Ji in his characteristic serene posture, hands raised in blessing, reminding devotees of his timeless message: 'Kirat Karo, Naam Japo, Vand Chhako' (Work honestly, meditate on God's name, share with others). The peaceful expression instills calmness and focus during drives.",
        "Crafted with attention to detail, this dashboard companion features a non-slip base that keeps it secure on your car's dashboard, ensuring that Guru Ji's blessings accompany you through every road, every destination."
      ],
      packaging: {
        type: "Individual blister packaging",
        piecesPerCarton: "50 pieces per carton",
        moq: "20 Pieces",
        handling: "Compact packaging for easy retail display."
      },
      suggestedUse: [
        "Car dashboard for travel blessings",
        "Office desk for work inspiration",
        "Home altar for daily remembrance",
        "Perfect gift for Gurpurab celebrations"
      ],
      careInstructions: [
        "Wipe with a soft cloth to remove dust",
        "Avoid exposure to extreme heat inside parked cars",
        "The non-slip base can be cleaned with mild soap if needed",
        "Keep away from air freshener liquids that may damage finish"
      ]
    },
    attributes: {
      material: "High-Quality Resin",
      finish: "Matte Color Finish",
      weight: "Approx. 50 gm",
      size: "3 x 2 Inch (Dashboard Size)",
      usage: "Car Dashboard, Office Desk, Small Altar"
    },
    suitableFor: "Sikh Devotees, Vehicle Owners, Spiritual Travelers",
    MOQ: "20 Pieces"
  },
  {
    id: "6",
    name: "Khatu Shyam Baba Car Dashboard Idol",
    price: 70.0,
    unit: "Piece",
    category: "Car Dashboard Idols",
    subcategory: "Hindu",
    images: [khatuShyamDashboard, guruNanakDashboard, saiBabaDashboard],
    badge: "8%",
    rating: 4.5,
    reviews: 22,
    sku: "SSM-CD-002",
    shortDescription: "Keep Khatu Shyam Baba as your divine travel companion with this elegant car dashboard idol. Experience his protective blessings on every journey you undertake.",
    fullDescription: {
      intro: [
        "Transform your car into a moving sanctuary with this divine Khatu Shyam Baba Car Dashboard Idol. For the countless devotees who chant 'Jai Shree Shyam' with every breath, this idol serves as a constant reminder of Baba's protective grace during all travels.",
        "Khatu Shyam Ji, known for his unwavering commitment to truth and his sacrifice in the Mahabharata, continues to bless his devotees with courage, protection, and the strength to overcome life's obstacles. Having his idol on your dashboard brings these blessings into every commute, road trip, and journey.",
        "The compact yet detailed design captures Shyam Baba's divine essence perfectly. The sturdy non-slip base ensures the idol remains stable even during bumpy rides, while the vibrant colors remain fade-resistant against sunlight."
      ],
      packaging: {
        type: "Individual box with foam insert",
        piecesPerCarton: "48 pieces per carton",
        moq: "24 Pieces",
        handling: "Shock-resistant packaging for safe transit."
      },
      suggestedUse: [
        "Place on car dashboard facing the driver",
        "Suitable for truck cabins and commercial vehicles",
        "Can be placed on office desk or bedside table",
        "Perfect for devotees visiting Khatu Dham"
      ],
      careInstructions: [
        "Clean regularly with a dry microfiber cloth",
        "Remove from dashboard during extreme summer if car is parked in direct sun for long hours",
        "The base adhesive can be refreshed if needed",
        "Avoid using chemical cleaners on the painted surface"
      ]
    },
    attributes: {
      material: "Durable Resin Composite",
      finish: "Vibrant Color Painted",
      weight: "Approx. 55 gm",
      size: "3 x 2.5 Inch",
      usage: "Vehicle Dashboard, Travel Protection"
    },
    suitableFor: "Vehicles, Office, Personal Altar",
    MOQ: "24 Pieces"
  },
  {
    id: "7",
    name: "Sai Baba Car Dashboard Idol",
    price: 70.0,
    unit: "Piece",
    category: "Car Dashboard Idols",
    subcategory: "Hindu",
    images: [saiBabaDashboard, guruNanakDashboard, khatuShyamDashboard],
    badge: "15%",
    rating: 4.7,
    reviews: 35,
    sku: "SSM-CD-003",
    shortDescription: "Shirdi Sai Baba's divine presence accompanies you on every journey with this beautiful dashboard idol. 'Sabka Malik Ek' – One God for all, blessing all travelers alike.",
    fullDescription: {
      intro: [
        "Invite the universal blessings of Shirdi Sai Baba into your vehicle with this lovingly crafted car dashboard idol. Sai Baba, whose message of 'Sabka Malik Ek' (One God for all) transcends religious boundaries, continues to guide and protect millions of devotees worldwide.",
        "This dashboard idol captures Sai Baba in his iconic seated posture, right leg crossed over the left, hand raised in the Abhaya Mudra of protection. His serene expression and gentle gaze remind travelers to remain calm, patient, and faithful regardless of the road ahead.",
        "For devotees who seek Baba's guidance in all aspects of life, having his presence in their vehicle transforms every journey into a pilgrimage. Whether commuting to work or embarking on a long road trip, Sai Baba's blessings ensure safe passage and inner peace."
      ],
      packaging: {
        type: "Premium gift box",
        piecesPerCarton: "40 pieces per carton",
        moq: "20 Pieces",
        handling: "Individually cushioned packaging."
      },
      suggestedUse: [
        "Car dashboard for protection during travel",
        "Auto-rickshaws and taxis for commercial vehicles",
        "Office desk for workplace blessings",
        "Ideal gift for Sai devotees"
      ],
      careInstructions: [
        "Dust gently with a soft brush",
        "Wipe occasionally with a slightly damp cloth, then dry immediately",
        "Avoid prolonged exposure to extreme temperatures",
        "Thursday is considered auspicious for cleaning and offering prayers"
      ]
    },
    attributes: {
      material: "Premium Resin",
      finish: "Hand-Painted Matte",
      weight: "Approx. 60 gm",
      size: "3 x 2.5 Inch",
      usage: "Vehicle Dashboard, Office, Home Altar"
    },
    suitableFor: "All Vehicles, Universal Devotees",
    MOQ: "20 Pieces"
  },
  {
    id: "8",
    name: "Shiv Parvati Ji Car Dashboard Idol",
    price: 75.0,
    unit: "Piece",
    category: "Car Dashboard Idols",
    subcategory: "Hindu",
    images: [shivParvatiDashboard, saiBabaDashboard, guruNanakDashboard],
    badge: "8%",
    rating: 4.4,
    reviews: 14,
    sku: "SSM-CD-004",
    shortDescription: "The divine couple Lord Shiva and Mata Parvati bless your travels with this elegant dashboard idol. A symbol of cosmic balance, marital harmony, and family protection.",
    fullDescription: {
      intro: [
        "Adorn your vehicle with the divine presence of Lord Shiva and Mata Parvati, the cosmic couple who represent the perfect union of masculine and feminine energies. This beautifully crafted dashboard idol brings their blessings of protection, harmony, and spiritual strength to your every journey.",
        "Lord Shiva, the destroyer of evil and transformer of the universe, combined with Mata Parvati, the goddess of fertility, love, and devotion, create a powerful symbol of family unity and cosmic balance. Their presence in your vehicle invokes protection for the entire family during travels.",
        "The idol depicts the divine couple in a loving posture, Shiva with his iconic attributes and Parvati in her graceful form. The intricate detailing and vibrant colors capture the essence of their divine union, making this idol both a spiritual anchor and an aesthetic addition to your car."
      ],
      packaging: {
        type: "Decorative box packaging",
        piecesPerCarton: "36 pieces per carton",
        moq: "18 Pieces",
        handling: "Secure foam padding for fragile details."
      },
      suggestedUse: [
        "Car dashboard for family vehicle protection",
        "Ideal for newlywed couples' vehicles",
        "Office desk for work-life balance",
        "Perfect Maha Shivaratri gift"
      ],
      careInstructions: [
        "Handle with care due to detailed figurine",
        "Clean gently with a soft dry cloth",
        "Avoid harsh chemicals that may affect paint",
        "Keep away from direct heat sources"
      ]
    },
    attributes: {
      material: "Poly-Marble Composite",
      finish: "Detailed Multi-Color Paint",
      weight: "Approx. 70 gm",
      size: "3.5 x 2.5 Inch",
      usage: "Vehicle Dashboard, Family Altar, Couple's Gift"
    },
    suitableFor: "Family Vehicles, Married Couples, Shiv Bhakts",
    MOQ: "18 Pieces"
  },
  {
    id: "9",
    name: "Bhageshwar Dham Car Dashboard Idol",
    price: 65.0,
    unit: "Piece",
    category: "Car Dashboard Idols",
    subcategory: "Hindu",
    images: [bhageshwarDashboard, khatuShyamDashboard, saiBabaDashboard],
    badge: "new",
    rating: 4.3,
    reviews: 28,
    sku: "SSM-CD-005",
    shortDescription: "Carry the blessings of Dhirendra Krishna Shastri and Bhageshwar Dham Sarkar with this devotional dashboard idol. A modern spiritual guide for faith-filled journeys.",
    fullDescription: {
      intro: [
        "Embrace the spiritual energy of Bhageshwar Dham Sarkar with this specially designed car dashboard idol. Inspired by the growing faith in Dhirendra Krishna Shastri Ji and the miraculous experiences at Bhageshwar Dham in Chhatarpur, this idol brings contemporary devotion to your daily travels.",
        "For the millions who have witnessed the power of faith at Bhageshwar Dham, this dashboard companion serves as a constant connection to those spiritual experiences. Whether you've been blessed with a darshan or hold Shastri Ji's teachings close to your heart, this idol keeps that divine connection alive.",
        "The idol is designed to capture the essence of the Bhageshwar Dham tradition, serving as a reminder of the power of Sanatan Dharma and the blessings that flow from unwavering faith. Perfect for devotees who find strength in the teachings and presence of Dhirendra Krishna Shastri Ji."
      ],
      packaging: {
        type: "Branded box packaging",
        piecesPerCarton: "50 pieces per carton",
        moq: "25 Pieces",
        handling: "Retail-ready individual packaging."
      },
      suggestedUse: [
        "Car dashboard for spiritual protection",
        "Home altar for daily prayers",
        "Ideal gift for fellow Bhageshwar Dham devotees",
        "Office desk for spiritual inspiration"
      ],
      careInstructions: [
        "Wipe clean with a soft cloth",
        "Keep away from water and liquids",
        "Avoid dropping as resin may chip",
        "Clean base periodically for better adhesion"
      ]
    },
    attributes: {
      material: "Quality Resin",
      finish: "Smooth Color Finish",
      weight: "Approx. 45 gm",
      size: "3 x 2 Inch",
      usage: "Vehicle Dashboard, Home Altar, Office"
    },
    suitableFor: "Bhageshwar Dham Devotees, Modern Spiritual Seekers",
    MOQ: "25 Pieces"
  },

  // ============ LADDU GOPAL DRESSES & ACCESSORIES ============
  {
    id: "10",
    name: "Laddu Gopal Ji Dress",
    price: 70.0,
    unit: "Piece",
    category: "Deity Dresses",
    subcategory: "Laddu Gopal",
    images: [ladduGopalDress, ladduGopalDress2, ramMandirPoshak],
    badge: "hot",
    rating: 4.6,
    reviews: 45,
    sku: "SSM-DD-001",
    sizes: ["Size 0", "Size 1", "Size 2", "Size 3", "Size 4", "Size 5"],
    shortDescription: "Dress your beloved Laddu Gopal Ji in this beautiful, festival-ready outfit. Soft fabric with intricate embroidery, perfect for daily worship and special occasions.",
    fullDescription: {
      intro: [
        "Adorn your beloved Thakur Ji with this exquisite Laddu Gopal dress, crafted with love and devotion for the little Krishna who resides in millions of Hindu homes. Each dress is designed to bring joy to both the deity and the devotee, transforming daily worship into a celebration of divine love.",
        "This beautiful outfit features soft, skin-friendly fabric that's gentle on your Laddu Gopal's delicate form. The vibrant colors and intricate embroidery work reflect traditional Indian craftsmanship, making your Kanha Ji look resplendent during daily aarti and special pujas.",
        "In Hindu tradition, dressing Laddu Gopal Ji is an act of profound devotion (seva). This dress helps you express your love for baby Krishna, treating him as the beloved child of the household who deserves the finest attire and care."
      ],
      packaging: {
        type: "Transparent poly bag with hanger",
        piecesPerCarton: "100 pieces per carton",
        moq: "50 Pieces",
        handling: "Folded neatly to prevent creasing."
      },
      suggestedUse: [
        "Daily worship and aarti",
        "Janmashtami celebrations",
        "Holi, Diwali, and other festivals",
        "Gifting to fellow Krishna devotees"
      ],
      careInstructions: [
        "Hand wash gently in cold water",
        "Do not bleach or use harsh detergents",
        "Iron on low heat before dressing the deity",
        "Store in a clean, dry place when not in use"
      ]
    },
    attributes: {
      material: "Soft Cotton with Embroidery",
      finish: "Embroidered and Sequined",
      usage: "Deity Dressing, Daily Puja, Festivals"
    },
    suitableFor: "Laddu Gopal (Various Sizes)",
    MOQ: "50 Pieces"
  },
  {
    id: "11",
    name: "Laddu Gopal Ji Woollen Dress",
    price: 40.0,
    unit: "Piece",
    category: "Deity Dresses",
    subcategory: "Laddu Gopal",
    images: [ladduGopalDress2, ladduGopalDress, ramMandirPoshak],
    badge: "12%",
    rating: 4.4,
    reviews: 32,
    sku: "SSM-DD-002",
    sizes: ["Size 0", "Size 1", "Size 2", "Size 3", "Size 4"],
    shortDescription: "Keep your Laddu Gopal Ji warm during winter months with this cozy woollen dress. Soft, comfortable, and adorable – perfect for cold weather worship.",
    fullDescription: {
      intro: [
        "As the winter chill sets in, wrap your beloved Laddu Gopal Ji in this warm and cozy woollen dress. Just as a mother bundles up her child against the cold, this dress allows you to care for Thakur Ji with the same maternal love and devotion during the winter months.",
        "Made from soft, high-quality wool, this dress keeps your Krishna idol warm while maintaining the festive charm that makes daily worship special. The gentle texture is perfect for your Laddu Gopal's delicate form, and the vibrant colors brighten up even the coldest winter days.",
        "In the Pushti Marg tradition, caring for Shrinathji includes dressing him according to the seasons. This woollen dress continues that beautiful tradition, allowing devotees to express their love through seasonal seva."
      ],
      packaging: {
        type: "Individual poly packaging",
        piecesPerCarton: "120 pieces per carton",
        moq: "60 Pieces",
        handling: "Compressed flat to save space."
      },
      suggestedUse: [
        "Winter months (October to February)",
        "Cold hill station temples",
        "Air-conditioned home mandirs",
        "Makar Sankranti and winter festivals"
      ],
      careInstructions: [
        "Hand wash in lukewarm water with mild detergent",
        "Do not wring – squeeze gently",
        "Dry flat in shade, away from direct sunlight",
        "Store with camphor to prevent moth damage"
      ]
    },
    attributes: {
      material: "Soft Acrylic Wool Blend",
      finish: "Knitted with Decorative Borders",
      usage: "Winter Deity Dressing, Cold Weather Puja"
    },
    suitableFor: "Laddu Gopal (Winter Season)",
    MOQ: "60 Pieces"
  },
  {
    id: "12",
    name: "Laddu Gopal Mukut",
    price: 60.0,
    unit: "Piece",
    category: "Deity Accessories",
    subcategory: "Laddu Gopal",
    images: [ladduGopalMukut, ladduGopalDress, ladduGopalDress2],
    badge: "10%",
    rating: 4.5,
    reviews: 28,
    sku: "SSM-DA-001",
    sizes: ["Small", "Medium", "Large"],
    shortDescription: "Crown your Laddu Gopal Ji with this beautiful mukut (crown) featuring the iconic peacock feather. A divine accessory that completes the Krishna look.",
    fullDescription: {
      intro: [
        "Complete your Laddu Gopal Ji's divine attire with this beautifully crafted Mukut (crown), featuring the iconic peacock feather that is synonymous with Lord Krishna. The mukut transforms your little Kanha into the resplendent prince of Vrindavan, ready for worship and adoration.",
        "In Hindu iconography, Krishna's peacock feather crown represents his connection with nature, his playful spirit, and his supreme beauty that captivated the gopis of Vrindavan. This mukut captures that essence, adding a touch of divine royalty to your daily worship.",
        "Crafted with attention to detail, this crown features a comfortable fit that stays secure on your Laddu Gopal while the peacock feather design stands proud. The shimmering finish catches the light beautifully during aarti, creating a mesmerizing effect."
      ],
      packaging: {
        type: "Individual card mounting",
        piecesPerCarton: "200 pieces per carton",
        moq: "100 Pieces",
        handling: "Mounted to preserve feather shape."
      },
      suggestedUse: [
        "Daily worship to complete Krishna attire",
        "Janmashtami decorations",
        "Special occasion dress-up",
        "Photography of decorated deities"
      ],
      careInstructions: [
        "Handle the peacock feather gently",
        "Store flat or hanging to maintain shape",
        "Dust with a soft brush",
        "Keep away from moisture and humidity"
      ]
    },
    attributes: {
      material: "Metal Frame with Fabric and Feather",
      finish: "Decorative Stone and Beadwork",
      usage: "Deity Crown, Krishna Accessory"
    },
    suitableFor: "Laddu Gopal (All Sizes)",
    MOQ: "100 Pieces"
  },
  {
    id: "13",
    name: "RAM MANDIR POSHAK",
    price: 90.0,
    unit: "Piece",
    category: "Deity Dresses",
    subcategory: "Special Collection",
    images: [ramMandirPoshak, ladduGopalDress, silkKhatuShyam],
    badge: "8%",
    rating: 4.8,
    reviews: 56,
    sku: "SSM-DD-003",
    sizes: ["Size 1", "Size 2", "Size 3", "Size 4", "Size 5"],
    shortDescription: "Celebrate the historic Ram Mandir with this special edition poshak inspired by the Ayodhya temple. A commemorative dress for your Laddu Gopal or Ram Lalla idol.",
    fullDescription: {
      intro: [
        "Commemorate the historic consecration of the Ram Mandir in Ayodhya with this special edition RAM MANDIR POSHAK. Inspired by the grandeur of the temple and the divine form of Ram Lalla, this dress allows devotees to bring a piece of this momentous occasion into their homes.",
        "The poshak features design elements inspired by the temple architecture and the traditional attire seen in the Ayodhya Ram Mandir. The rich saffron and gold color scheme reflects the spiritual significance of the temple, while the intricate embroidery pays homage to the craftsmanship that went into building this sacred site.",
        "For millions of Ram Bhakts who witnessed the Pran Pratishtha ceremony and those who continue to celebrate Lord Ram's return to his birthplace, this dress serves as a daily reminder of faith, devotion, and the fulfillment of a 500-year-old dream."
      ],
      packaging: {
        type: "Premium box with Ram Mandir imagery",
        piecesPerCarton: "60 pieces per carton",
        moq: "30 Pieces",
        handling: "Gift-ready packaging with blessing card."
      },
      suggestedUse: [
        "Ram Navami celebrations",
        "Daily worship of Ram Lalla or Laddu Gopal",
        "Commemorative collection for Ram Bhakts",
        "Special gift for devotees who visited Ayodhya"
      ],
      careInstructions: [
        "Dry clean recommended for best results",
        "Hand wash gently if needed",
        "Iron on low heat, avoiding embroidery directly",
        "Store carefully to preserve special edition quality"
      ]
    },
    attributes: {
      material: "Premium Silk Blend with Zari Work",
      finish: "Gold Embroidery with Temple Motifs",
      usage: "Ram Lalla Dressing, Commemorative Collection"
    },
    suitableFor: "Ram Lalla Idol, Laddu Gopal, Special Occasions",
    MOQ: "30 Pieces"
  },
  {
    id: "14",
    name: "Mata Dress Divine Collection",
    price: 60.0,
    unit: "Piece",
    category: "Deity Dresses",
    subcategory: "Mata",
    images: [mataDress, ramMandirPoshak, ladduGopalDress],
    badge: "hot",
    rating: 4.5,
    reviews: 38,
    sku: "SSM-DD-004",
    sizes: ["Small", "Medium", "Large"],
    shortDescription: "Adorn your Mata Ji idol with this elegant divine dress. Perfect for Durga, Lakshmi, Vaishno Devi, and other goddess idols in your home temple.",
    fullDescription: {
      intro: [
        "Clothe your beloved Mata Ji in this elegant divine dress, specially designed for goddess idols worshipped in Hindu homes. Whether you worship Durga Mata, Lakshmi Ji, Vaishno Devi, or any form of the Divine Mother, this dress brings grace and sanctity to your deity.",
        "The dress features a beautiful combination of traditional design elements that complement the divine feminine energy. Rich colors, intricate borders, and quality fabric come together to create an offering worthy of the goddess who blesses your home with her presence.",
        "In Hindu tradition, dressing and decorating goddess idols is an expression of love and devotion (shringar). This dress enables you to perform this sacred seva with joy, transforming your home mandir into a miniature temple befitting the Divine Mother."
      ],
      packaging: {
        type: "Elegant poly bag with decorative header",
        piecesPerCarton: "80 pieces per carton",
        moq: "40 Pieces",
        handling: "Carefully folded to prevent wrinkles."
      },
      suggestedUse: [
        "Daily worship of Mata Ji",
        "Navratri celebrations",
        "Lakshmi Puja during Diwali",
        "Friday worship and special occasions"
      ],
      careInstructions: [
        "Hand wash separately in cold water",
        "Use mild detergent without bleach",
        "Air dry in shade",
        "Light ironing may be needed before use"
      ]
    },
    attributes: {
      material: "Silk-Cotton Blend",
      finish: "Embroidered Border with Sequins",
      usage: "Goddess Idol Dressing, Daily Puja"
    },
    suitableFor: "Durga, Lakshmi, Vaishno Devi Idols",
    MOQ: "40 Pieces"
  },

  // ============ SAI BABA COLLECTION ============
  {
    id: "15",
    name: "Sai Baba Dress Pure White",
    price: 85.0,
    unit: "Piece",
    category: "Deity Dresses",
    subcategory: "Sai Baba",
    images: [saiBabaDress, saiBabaPagdi, mataDress],
    badge: "new",
    rating: 4.6,
    reviews: 24,
    sku: "SSM-DD-005",
    sizes: ["8 Inch", "10 Inch", "12 Inch", "18 Inch"],
    shortDescription: "Authentic Shirdi Sai Baba dress in pure white, reflecting Baba's simple yet spiritually profound appearance. Perfect for Sai Baba idols of various sizes.",
    fullDescription: {
      intro: [
        "Honor the simplicity and spiritual purity of Shirdi Sai Baba with this authentic pure white dress, crafted to reflect Baba's modest yet divine appearance. Just as Sai Baba lived a life of simplicity, this dress embodies that same essence – pure, unadorned, yet profoundly spiritual.",
        "The white color symbolizes Sai Baba's teachings of purity, truth, and the light of divine wisdom that he shared with all who came to him. Dressing your Sai Baba idol in this traditional attire is an act of devotion that connects you with the Shirdi tradition.",
        "Made from quality cotton fabric, this dress drapes naturally around your Sai Baba idol, creating the iconic look that millions of devotees recognize and revere. The comfortable fit works with various idol sizes, ensuring Baba's divine form is always presented with dignity."
      ],
      packaging: {
        type: "Clean white packaging",
        piecesPerCarton: "50 pieces per carton",
        moq: "25 Pieces",
        handling: "Ironed and folded, ready for use."
      },
      suggestedUse: [
        "Daily worship of Sai Baba idol",
        "Thursday Sai Baba puja",
        "Sai Baba Jayanti celebrations",
        "Shirdi pilgrimage souvenirs"
      ],
      careInstructions: [
        "Wash in cold water with mild detergent",
        "Bleach can be used sparingly to maintain whiteness",
        "Dry in sunlight for natural whitening",
        "Iron for crisp, neat appearance"
      ]
    },
    attributes: {
      material: "Pure Cotton",
      finish: "Simple White with Clean Hem",
      usage: "Sai Baba Idol Dressing, Shirdi Style"
    },
    suitableFor: "Sai Baba Idols (8-18 Inch)",
    MOQ: "25 Pieces"
  },
  {
    id: "16",
    name: "Sai Baba Pagdi Traditional",
    price: 45.0,
    unit: "Piece",
    category: "Deity Accessories",
    subcategory: "Sai Baba",
    images: [saiBabaPagdi, saiBabaDress, khatuShyamDashboard],
    badge: "hot",
    rating: 4.4,
    reviews: 19,
    sku: "SSM-DA-002",
    sizes: ["Small", "Medium", "Large"],
    shortDescription: "Complete your Sai Baba idol's look with this traditional pagdi (turban). Authentic Shirdi style headwear that reflects Baba's iconic appearance.",
    fullDescription: {
      intro: [
        "Crown your Sai Baba idol with this authentic traditional Pagdi, recreating the iconic look of Shirdi Sai Baba that has been etched in the hearts of millions. The pagdi is an essential element of Baba's appearance, representing his unique spiritual identity.",
        "This carefully crafted headwear reflects the style Sai Baba wore during his time in Shirdi. The traditional wrapping style and appropriate proportions ensure your idol looks authentic, as if Baba himself blessed the pagdi.",
        "For Sai devotees who wish to dress their Baba with complete traditional attire, this pagdi is the perfect complement to the white kafni dress. Together, they create the complete Shirdi Sai look that inspires devotion and reverence."
      ],
      packaging: {
        type: "Individual box for shape preservation",
        piecesPerCarton: "100 pieces per carton",
        moq: "50 Pieces",
        handling: "Structured packaging to maintain pagdi shape."
      },
      suggestedUse: [
        "Complete Sai Baba dressing",
        "Thursday special puja",
        "Guru Purnima celebrations",
        "Sai Baba Jayanti decorations"
      ],
      careInstructions: [
        "Store on a round surface to maintain shape",
        "Spot clean if needed",
        "Keep away from dust when not in use",
        "Handle gently to preserve structure"
      ]
    },
    attributes: {
      material: "Fabric on Wire Frame",
      finish: "Pre-Shaped Traditional Style",
      usage: "Sai Baba Idol Headwear"
    },
    suitableFor: "Sai Baba Idols (Various Sizes)",
    MOQ: "50 Pieces"
  },
  {
    id: "17",
    name: "Silk Khatu Shyam Dress",
    price: 100.0,
    unit: "Piece",
    category: "Deity Dresses",
    subcategory: "Khatu Shyam",
    images: [silkKhatuShyam, ramMandirPoshak, ladduGopalDress],
    badge: "hot",
    rating: 4.7,
    reviews: 33,
    sku: "SSM-DD-006",
    sizes: ["6 Inch", "8 Inch", "10 Inch", "12 Inch"],
    shortDescription: "Premium silk dress for Khatu Shyam Baba idols, featuring rich embroidery and traditional design. Perfect for festivals and special pujas.",
    fullDescription: {
      intro: [
        "Dress your Khatu Shyam Baba in this luxurious silk outfit, crafted for devotees who wish to offer the finest attire to their beloved deity. The rich silk fabric and intricate embroidery reflect the reverence and love that Shyam Bhakts hold for Baba.",
        "This premium dress features traditional motifs and a color palette that complements the divine form of Khatu Shyam Ji. The silk's natural sheen creates a beautiful play of light during aarti, enhancing the spiritual ambiance of your pooja.",
        "For special occasions like Khatu Shyam Jayanti, Falgun Mela, and other festivals, this silk dress ensures your deity looks resplendent. It's also perfect for devotees who return from Khatu Dham and wish to dress their home idol in celebration."
      ],
      packaging: {
        type: "Premium silk pouch packaging",
        piecesPerCarton: "40 pieces per carton",
        moq: "20 Pieces",
        handling: "Folded with tissue paper to prevent creasing."
      },
      suggestedUse: [
        "Khatu Shyam Jayanti celebrations",
        "Falgun Mela special puja",
        "Sunday worship",
        "Special vrat and mannat fulfillment"
      ],
      careInstructions: [
        "Dry clean recommended",
        "If hand washing, use cold water and silk detergent",
        "Never wring silk – roll in towel to remove water",
        "Iron on silk setting with cloth barrier"
      ]
    },
    attributes: {
      material: "Pure Silk with Zari",
      finish: "Hand Embroidered with Stone Work",
      usage: "Premium Deity Dressing, Festival Wear"
    },
    suitableFor: "Khatu Shyam Baba Idols (6-12 Inch)",
    MOQ: "20 Pieces"
  },

  // ============ POOJA ITEMS & POWDERS ============
  {
    id: "18",
    name: "25 gm Kesar Ashtagandha Chandan Powder",
    price: 200.0,
    unit: "Jar",
    category: "Pooja Items",
    subcategory: "Chandan & Tilak",
    images: [kesarChandan, chandanPowder, ashtagandhaPowder],
    badge: "hot",
    rating: 4.8,
    reviews: 67,
    sku: "SSM-PI-001",
    shortDescription: "Premium temple-grade Kesar Ashtagandha Chandan powder for tilak and pooja. Authentic sandalwood fragrance with saffron infusion for divine rituals.",
    fullDescription: {
      intro: [
        "Experience the divine fragrance of pure sandalwood blended with saffron and the sacred Ashtagandha (eight fragrances) in this premium chandan powder. Used for centuries in Hindu temples and homes, this tilak powder connects you with the ancient traditions of Vedic worship.",
        "The Ashtagandha blend includes eight aromatic substances that are considered auspicious in Hindu rituals: sandalwood, saffron, camphor, musk, agaru, and three other sacred ingredients. Together, they create a fragrance that purifies the atmosphere and pleases the deities.",
        "This chandan powder is prepared following traditional methods, ensuring that the spiritual potency and aromatic quality meet the standards expected in temple worship. The fine texture creates a smooth tilak that adheres well and lasts throughout the day."
      ],
      packaging: {
        type: "Airtight glass jar with screw lid",
        piecesPerCarton: "48 jars per carton",
        moq: "24 Jars",
        handling: "Protected packaging to preserve fragrance."
      },
      suggestedUse: [
        "Daily tilak application",
        "Deity abhishek and decoration",
        "Special pujas and havans",
        "Temple and home worship"
      ],
      careInstructions: [
        "Store in cool, dry place",
        "Keep lid tightly closed to preserve fragrance",
        "Use clean, dry spoon for removal",
        "Best used within 12 months of opening"
      ]
    },
    attributes: {
      material: "Sandalwood, Saffron, Ashtagandha Blend",
      finish: "Fine Powder Form",
      weight: "25 gm",
      usage: "Tilak, Pooja, Abhishek"
    },
    suitableFor: "Daily Worship, Temple Rituals, Special Occasions",
    MOQ: "24 Jars"
  },
  {
    id: "19",
    name: "100 Gm Kashi Dev Abhyang Ubtan Powder",
    price: 40.0,
    unit: "Pack",
    category: "Pooja Items",
    subcategory: "Sacred Powders",
    images: [ashtagandhaPowder, kesarChandan, chandanPowder],
    badge: "12%",
    rating: 4.5,
    reviews: 42,
    sku: "SSM-PI-002",
    shortDescription: "Traditional Kashi (Varanasi) Abhyang Ubtan for sacred bathing rituals. A purifying blend used in deity abhishek and personal spiritual cleansing.",
    fullDescription: {
      intro: [
        "From the sacred ghats of Kashi (Varanasi), comes this traditional Abhyang Ubtan powder, prepared according to ancient recipes passed down through generations of temple priests. This sacred blend is used for deity abhishek and personal spiritual purification.",
        "The Abhyang ritual, mentioned in Ayurvedic and Vedic texts, involves applying this special ubtan before ceremonial bathing. The blend of herbs and sacred ingredients cleanses not just the body but also purifies the aura, preparing one for worship and meditation.",
        "Each ingredient in this ubtan is selected for its spiritual significance and purifying properties. When used for deity abhishek, it serves as an offering of purity; when used personally, it connects the devotee with the cleansing traditions of Kashi's ancient temples."
      ],
      packaging: {
        type: "Sealed pouch with zip lock",
        piecesPerCarton: "100 packs per carton",
        moq: "50 Packs",
        handling: "Moisture-proof packaging for longevity."
      },
      suggestedUse: [
        "Deity abhishek during special pujas",
        "Personal use before temple visits",
        "Ganges bathing rituals",
        "Shradh and pitru ceremonies"
      ],
      careInstructions: [
        "Store in dry place away from moisture",
        "Reseal zip lock after each use",
        "Keep away from direct sunlight",
        "Use within 18 months of manufacture"
      ]
    },
    attributes: {
      material: "Traditional Herbal Blend",
      finish: "Coarse Powder",
      weight: "100 gm",
      usage: "Abhishek, Spiritual Bathing, Purification"
    },
    suitableFor: "Deity Abhishek, Personal Cleansing, Rituals",
    MOQ: "50 Packs"
  },
  {
    id: "20",
    name: "Ashtagandha Chandan Powder Temple Grade",
    price: 180.0,
    unit: "Pack",
    category: "Pooja Items",
    subcategory: "Chandan & Tilak",
    images: [chandanPowder, kesarChandan, ashtagandhaPowder],
    badge: "8%",
    rating: 4.6,
    reviews: 38,
    sku: "SSM-PI-003",
    shortDescription: "Temple-grade Ashtagandha Chandan powder with authentic sandalwood base. The eight divine fragrances create an atmosphere of sanctity and peace.",
    fullDescription: {
      intro: [
        "Elevate your worship with this temple-grade Ashtagandha Chandan powder, crafted to meet the exacting standards of traditional Hindu temples. The blend of eight sacred fragrances (Ashtagandha) with pure sandalwood creates an offering worthy of the divine.",
        "In Sanskrit, 'Ashta' means eight and 'Gandha' means fragrance. This sacred blend combines eight aromatic substances that have been used in Hindu worship since Vedic times. Each fragrance is believed to please different aspects of the divine, making this blend perfect for comprehensive worship.",
        "The sandalwood base provides the classic cooling sensation and divine fragrance associated with Hindu rituals, while the additional seven ingredients add layers of spiritual significance. The result is a chandan that transforms your pooja space into a sacred temple."
      ],
      packaging: {
        type: "Resealable standup pouch",
        piecesPerCarton: "60 packs per carton",
        moq: "30 Packs",
        handling: "Vacuum-sealed for freshness."
      },
      suggestedUse: [
        "Temple pooja and rituals",
        "Deity tilak and decoration",
        "Havan and yagna ceremonies",
        "Special occasion worship"
      ],
      careInstructions: [
        "Store in airtight container after opening",
        "Keep in cool, dark place",
        "Avoid contact with water until use",
        "Best fragrance within 6 months of opening"
      ]
    },
    attributes: {
      material: "Sandalwood with Eight Fragrance Blend",
      finish: "Extra Fine Powder",
      weight: "50 gm",
      usage: "Temple Worship, Tilak, Deity Offering"
    },
    suitableFor: "Temples, Home Mandirs, Priests",
    MOQ: "30 Packs"
  },
  {
    id: "21",
    name: "Kumkum Sindur Maroon",
    price: 135.0,
    unit: "Kg",
    category: "Pooja Items",
    subcategory: "Kumkum & Sindur",
    images: [kumkumSindur, kesarChandan, ashtagandhaPowder],
    badge: "9%",
    rating: 4.7,
    reviews: 89,
    sku: "SSM-PI-004",
    shortDescription: "Premium quality maroon Kumkum Sindur for pooja and personal use. Auspicious vermilion color symbolizing prosperity, fertility, and marital bliss.",
    fullDescription: {
      intro: [
        "Bring the auspicious power of Kumkum into your worship and daily life with this premium maroon sindur. In Hindu tradition, Kumkum represents the divine feminine energy (Shakti), and its application is considered highly auspicious for both deity worship and personal adornment.",
        "The rich maroon color of this kumkum is achieved through traditional preparation methods, ensuring both the color's vibrancy and its spiritual potency. For married women, the sindur in the hair parting symbolizes their married status and invokes blessings for their husband's longevity.",
        "This kumkum is equally essential for deity worship, where it adorns the foreheads of goddesses and gods alike. The vermilion mark (tilak) made with this kumkum after pooja signifies that the devotee has received divine blessings and protection."
      ],
      packaging: {
        type: "Food-grade sealed packets",
        piecesPerCarton: "20 kg per carton (various pack sizes)",
        moq: "5 Kg",
        handling: "Moisture-proof sealed packaging."
      },
      suggestedUse: [
        "Deity tilak and decoration",
        "Married women's sindur application",
        "Navratri and Durga Puja",
        "Wedding and auspicious ceremonies"
      ],
      careInstructions: [
        "Store in dry, airtight container",
        "Keep away from moisture to prevent clumping",
        "Use clean, dry fingers or spoon",
        "Check for skin sensitivity before facial use"
      ]
    },
    attributes: {
      material: "Natural Mineral-Based",
      finish: "Fine Powder",
      usage: "Tilak, Sindur, Deity Decoration"
    },
    suitableFor: "Pooja, Married Women, Temple Use",
    MOQ: "5 Kg"
  },
  {
    id: "22",
    name: "Jai Shri Shyam Tilak",
    price: 17.0,
    unit: "Piece",
    category: "Pooja Items",
    subcategory: "Ready Tilak",
    images: [jaiShriShyamTilak, kesarChandan, kumkumSindur],
    rating: 4.3,
    reviews: 156,
    sku: "SSM-PI-005",
    shortDescription: "Ready-to-apply Jai Shri Shyam tilak for instant devotion on-the-go. Pre-prepared with sacred ingredients for Khatu Shyam Bhakts.",
    fullDescription: {
      intro: [
        "For the devoted Shyam Bhakts who carry their faith everywhere, this ready-to-apply Jai Shri Shyam Tilak offers instant connection with Baba. No preparation needed – simply apply the sacred tilak and feel Khatu Shyam Ji's blessings accompany you throughout the day.",
        "This convenient tilak is prepared with traditional ingredients blessed for Khatu Shyam devotees. Whether you're at work, traveling, or away from your home mandir, this portable tilak ensures you can always carry the mark of your devotion.",
        "The 'Jai Shri Shyam' inscription on the packaging serves as a constant reminder of Baba's name, while the tilak itself connects you with millions of fellow devotees who proudly wear this sacred mark. Perfect for those who chant 'Khatu wale Shyam Baba ki Jai' with every breath."
      ],
      packaging: {
        type: "Compact individual sachets",
        piecesPerCarton: "500 pieces per carton",
        moq: "100 Pieces",
        handling: "Travel-friendly sealed packaging."
      },
      suggestedUse: [
        "Daily tilak before leaving home",
        "After visiting Khatu Shyam temple",
        "During travel and pilgrimages",
        "Office and workplace devotion"
      ],
      careInstructions: [
        "Open sachet carefully",
        "Apply on clean, dry forehead",
        "Use within 1 year of manufacture",
        "Store away from extreme heat"
      ]
    },
    attributes: {
      material: "Chandan-Kumkum Blend",
      finish: "Paste Form (Ready to Apply)",
      usage: "Personal Tilak, Travel Worship"
    },
    suitableFor: "Khatu Shyam Devotees, Daily Use, Travel",
    MOQ: "100 Pieces"
  },
  {
    id: "23",
    name: "50ml Ganga Jal",
    price: 10.0,
    unit: "Piece",
    category: "Pooja Items",
    subcategory: "Holy Water",
    images: [gangaJal, kesarChandan, kumkumSindur],
    badge: "9%",
    rating: 4.9,
    reviews: 234,
    sku: "SSM-PI-006",
    shortDescription: "Sacred Ganga Jal (Holy Ganges Water) for purification rituals, pooja, and spiritual ceremonies. Sourced from the sacred Ganges river.",
    fullDescription: {
      intro: [
        "Bring the sacred purifying waters of Mother Ganga into your home with this authentic Ganga Jal. For millions of Hindus, the Ganges is not just a river but a goddess – Ganga Mata – whose waters have the power to purify the soul and wash away sins.",
        "This holy water is sourced from the sacred Ganges river and carefully bottled to preserve its spiritual potency. Whether used for daily pooja, mixing with other waters for rituals, or kept at home for auspicious occasions, Ganga Jal is an essential element of Hindu worship.",
        "The spiritual significance of Ganga Jal extends beyond life itself – it is used in final rites to ensure the departed soul's peaceful journey. Having Ganga Jal at home provides both daily spiritual benefit and the assurance of its availability when most needed."
      ],
      packaging: {
        type: "Sealed plastic bottle with sacred imagery",
        piecesPerCarton: "200 bottles per carton",
        moq: "50 Pieces",
        handling: "Leak-proof sealed bottles."
      },
      suggestedUse: [
        "Daily pooja and aarti",
        "Deity abhishek and sprinkling",
        "Purification of new purchases and spaces",
        "Mixing with regular water for sacred bath"
      ],
      careInstructions: [
        "Store in a clean, sacred space",
        "Keep bottle sealed until use",
        "Do not contaminate with impure substances",
        "Handle with reverence as sacred water"
      ]
    },
    attributes: {
      material: "Holy Ganges River Water",
      finish: "Clear Sacred Water",
      weight: "50 ml",
      usage: "Pooja, Abhishek, Purification, Last Rites"
    },
    suitableFor: "All Hindu Rituals, Home Worship, Temples",
    MOQ: "50 Pieces"
  },

  // ============ FRESHENERS & FRAGRANCES ============
  {
    id: "24",
    name: "ISHAURA ROOM FRESHENERS",
    price: 70.0,
    unit: "Piece",
    category: "Fresheners",
    subcategory: "Room Fresheners",
    images: [ishauraFreshener, ishauraAirFreshener, ishauraVentClip],
    badge: "hot",
    rating: 4.5,
    reviews: 78,
    sku: "SSM-FR-001",
    shortDescription: "Transform your space with the divine fragrances of Ishaura Room Fresheners. Temple-inspired scents that create a calming, spiritual atmosphere at home.",
    fullDescription: {
      intro: [
        "Create a temple-like atmosphere in your home with Ishaura Room Fresheners, specially formulated to evoke the serene fragrance of sacred spaces. Just as the scent of incense and flowers fills temples with divine energy, these fresheners bring that same spiritual ambiance into your daily life.",
        "The Ishaura range features carefully crafted fragrances inspired by traditional pooja aromas – sandalwood, rose, jasmine, and other sacred scents. Whether in your pooja room, living room, or bedroom, these fresheners transform the atmosphere, making every breath a reminder of the divine.",
        "Unlike chemical-heavy commercial fresheners, Ishaura products are designed with the spiritual aesthetic in mind. The fragrances are calming rather than overwhelming, creating an environment conducive to meditation, prayer, and peaceful living."
      ],
      packaging: {
        type: "Spray bottle with decorative label",
        piecesPerCarton: "48 pieces per carton",
        moq: "24 Pieces",
        handling: "Upright packaging to prevent leakage."
      },
      suggestedUse: [
        "Pooja room ambiance",
        "Living room and bedroom freshening",
        "Before meditation and prayer",
        "Guest welcome and special occasions"
      ],
      careInstructions: [
        "Spray away from face and eyes",
        "Keep away from open flames",
        "Store in cool place away from direct sunlight",
        "Keep out of reach of children"
      ]
    },
    attributes: {
      material: "Water-Based Fragrance Solution",
      finish: "Fine Mist Spray",
      usage: "Room Freshening, Spiritual Atmosphere"
    },
    suitableFor: "Homes, Temples, Meditation Spaces, Offices",
    MOQ: "24 Pieces"
  },
  {
    id: "25",
    name: "Ishaura Hanging Car Diffuser & Wardrobe Freshener",
    price: 50.0,
    unit: "Piece",
    category: "Fresheners",
    subcategory: "Car & Wardrobe",
    images: [ishauraAirFreshener, ishauraFreshener, ishauraVentClip],
    badge: "new",
    rating: 4.4,
    reviews: 45,
    sku: "SSM-FR-002",
    shortDescription: "Long-lasting hanging diffuser perfect for cars and wardrobes. Elegant design with temple-inspired fragrances for continuous freshness.",
    fullDescription: {
      intro: [
        "Enjoy the divine fragrance of temples wherever you go with the Ishaura Hanging Car Diffuser. Designed for both vehicles and wardrobes, this elegant diffuser provides continuous, long-lasting freshness with sacred, calming scents that transform your environment.",
        "The hanging design makes it perfect for rear-view mirrors in cars, adding a touch of spirituality to your daily commute. When used in wardrobes, it keeps your clothes fresh with a subtle, pleasant aroma that's not overpowering but definitely noticeable.",
        "Each diffuser is crafted with care, featuring an attractive design that complements any setting. The fragrance is released slowly over weeks, providing extended use and consistent scent without the need for electricity or regular replacement."
      ],
      packaging: {
        type: "Individual blister pack with hook",
        piecesPerCarton: "100 pieces per carton",
        moq: "50 Pieces",
        handling: "Display-ready retail packaging."
      },
      suggestedUse: [
        "Hang from car rear-view mirror",
        "Place in wardrobe or closet",
        "Use in small rooms or bathrooms",
        "Gift with other devotional items"
      ],
      careInstructions: [
        "Remove outer seal to activate fragrance",
        "Hang in well-ventilated area for best diffusion",
        "Keep away from direct sunlight to extend life",
        "Replace when fragrance fades (typically 4-6 weeks)"
      ]
    },
    attributes: {
      material: "Fragrance-Infused Gel/Fabric",
      finish: "Decorative Hanging Design",
      usage: "Car, Wardrobe, Small Spaces"
    },
    suitableFor: "Vehicles, Wardrobes, Gift Items",
    MOQ: "50 Pieces"
  },
  {
    id: "26",
    name: "Ishaura Car Vent Clip Freshener",
    price: 55.0,
    unit: "Piece",
    category: "Fresheners",
    subcategory: "Car",
    images: [ishauraVentClip, ishauraFreshener, ishauraAirFreshener],
    badge: "8%",
    rating: 4.3,
    reviews: 34,
    sku: "SSM-FR-003",
    shortDescription: "Compact clip-on car freshener that attaches to your AC vent. Enjoy continuous divine fragrance powered by your car's air conditioning.",
    fullDescription: {
      intro: [
        "Transform your driving experience with the Ishaura Car Vent Clip Freshener, a compact and innovative solution that uses your car's AC system to diffuse divine fragrances throughout the cabin. Simply clip onto your air vent and let the air conditioning do the rest.",
        "The design is sleek and unobtrusive, adding fragrance without cluttering your dashboard or obstructing your view. When the AC is running, the air passing through the vent activates the fragrance, filling your car with a temple-like scent that calms the mind during traffic stress.",
        "Perfect for devotees who want their vehicle to feel like a sacred space. The fragrance creates a peaceful atmosphere that complements the dashboard idol, turning every journey into a spiritual experience."
      ],
      packaging: {
        type: "Blister card packaging",
        piecesPerCarton: "72 pieces per carton",
        moq: "36 Pieces",
        handling: "Clip protected during shipping."
      },
      suggestedUse: [
        "Clip onto car AC vent",
        "Use in office cubicle with desk fan",
        "Attach to portable fans",
        "Multiple clips for larger vehicles"
      ],
      careInstructions: [
        "Clip securely onto vent fins",
        "Adjust AC direction for optimal diffusion",
        "Replace cartridge when fragrance weakens",
        "Clean vent regularly for best air flow"
      ]
    },
    attributes: {
      material: "ABS Plastic with Fragrance Cartridge",
      finish: "Compact Clip Design",
      usage: "Car AC Vent, Continuous Freshening"
    },
    suitableFor: "All Car Types, AC Vents",
    MOQ: "36 Pieces"
  },

  // ============ FABRICS ============
  {
    id: "27",
    name: "White Roto Fabric",
    price: 12.0,
    unit: "Meter",
    category: "Pooja Fabrics",
    subcategory: "Mandir Decoration",
    images: [rotoFabric, mataDress, ladduGopalDress],
    rating: 4.4,
    reviews: 28,
    sku: "SSM-PF-001",
    shortDescription: "Pure white Roto fabric for mandir decoration, deity draping, and creating custom pooja items. Versatile, clean, and spiritually appropriate.",
    fullDescription: {
      intro: [
        "Create a pristine, sacred atmosphere in your home mandir with this pure white Roto fabric. White symbolizes purity, peace, and spiritual clarity in Hindu tradition, making this fabric perfect for mandir decoration, deity draping, and various pooja applications.",
        "The Roto fabric is known for its smooth texture, durability, and excellent draping quality. Whether you're creating custom deity clothes, draping your mandir backdrop, or making covers for sacred items, this fabric provides a clean, professional finish.",
        "This versatile material can be cut and tailored to your specific needs. Many devotees use it to create matching sets for their entire mandir, ensuring a cohesive, pure white aesthetic that enhances the sanctity of their worship space."
      ],
      packaging: {
        type: "Rolled on cardboard tube",
        piecesPerCarton: "100 meters per roll",
        moq: "50 Meters",
        handling: "Wrapped in protective plastic."
      },
      suggestedUse: [
        "Mandir backdrop and draping",
        "Custom deity dress creation",
        "Covering sacred items and books",
        "Festival decoration and pandal setup"
      ],
      careInstructions: [
        "Machine wash in cold water",
        "Use mild detergent without bleach (to maintain softness)",
        "Iron on medium heat for smooth finish",
        "Store in clean, dry place"
      ]
    },
    attributes: {
      material: "Polyester Roto Fabric",
      finish: "Smooth, Slightly Glossy",
      usage: "Mandir Decoration, Custom Tailoring"
    },
    suitableFor: "Home Mandirs, Temples, Custom Deity Clothes",
    MOQ: "50 Meters"
  }
];

// Helper function to get product by ID
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

// Helper function to get related products (same category, excluding current product)
export const getRelatedProducts = (productId: string, limit: number = 4): Product[] => {
  const currentProduct = getProductById(productId);
  if (!currentProduct) return [];
  
  return products
    .filter(p => p.category === currentProduct.category && p.id !== productId)
    .slice(0, limit);
};

// Helper function to get products by category
export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

// Helper function to get top selling products (for sidebar)
export const getTopSellingProducts = (limit: number = 3): Product[] => {
  return products
    .filter(p => p.badge === "hot")
    .slice(0, limit);
};

// Get all unique categories
export const getCategories = (): { name: string; count: number }[] => {
  const categoryMap = new Map<string, number>();
  
  products.forEach(product => {
    const count = categoryMap.get(product.category) || 0;
    categoryMap.set(product.category, count + 1);
  });
  
  return Array.from(categoryMap.entries()).map(([name, count]) => ({
    name,
    count
  }));
};
