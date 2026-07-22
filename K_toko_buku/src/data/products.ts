import { Product } from '@/store/cartStore'

export const products: Product[] = [
  {
    id: 1,
    title: "Al-Quran Terjemahan Indonesia",
    category: "islamic",
    price: 125000,
    inStock: true,
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=500&fit=crop",
    description: "Al-Quran dengan terjemahan bahasa Indonesia yang mudah dipahami"
  },
  {
    id: 2,
    title: "Shahih Bukhari - Complete Collection",
    category: "islamic",
    price: 350000,
    inStock: true,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=500&fit=crop",
    description: "Koleksi lengkap hadits Shahih Bukhari dengan terjemahan"
  },
  {
    id: 3,
    title: "Tafsir Ibn Kathir (8 Volumes)",
    category: "islamic",
    price: 750000,
    inStock: true,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    description: "Tafsir Al-Quran karya Ibn Kathir dalam 8 jilid lengkap"
  },
  {
    id: 4,
    title: "Mathematics Grade 10 - Curriculum 2013",
    category: "educational",
    price: 85000,
    inStock: true,
    image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=400&h=500&fit=crop",
    description: "Buku matematika kelas 10 sesuai kurikulum 2013"
  },
  {
    id: 5,
    title: "English Grammar in Use",
    category: "educational",
    price: 165000,
    inStock: true,
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=500&fit=crop",
    description: "Panduan lengkap tata bahasa Inggris untuk pemula hingga mahir"
  },
  {
    id: 6,
    title: "Indonesian History Textbook",
    category: "educational",
    price: 95000,
    inStock: false,
    image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=500&fit=crop",
    description: "Buku sejarah Indonesia untuk tingkat SMA"
  },
  {
    id: 7,
    title: "Islamic Stories for Children",
    category: "children",
    price: 45000,
    inStock: true,
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=500&fit=crop",
    description: "Kumpulan cerita Islami yang mendidik untuk anak-anak"
  },
  {
    id: 8,
    title: "Learn Arabic Alphabet",
    category: "children",
    price: 35000,
    inStock: true,
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=500&fit=crop",
    description: "Buku belajar huruf hijaiyah untuk anak-anak"
  },
  {
    id: 9,
    title: "Prophet Stories Collection",
    category: "children",
    price: 65000,
    inStock: true,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=500&fit=crop",
    description: "Koleksi kisah para nabi untuk anak-anak"
  },
  {
    id: 10,
    title: "Indonesian Literature Classics",
    category: "literature",
    price: 120000,
    inStock: true,
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=500&fit=crop",
    description: "Kumpulan karya sastra Indonesia klasik"
  },
  {
    id: 11,
    title: "Modern Islamic Poetry",
    category: "literature",
    price: 85000,
    inStock: true,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    description: "Koleksi puisi Islami kontemporer"
  },
  {
    id: 12,
    title: "Contemporary Indonesian Writers",
    category: "literature",
    price: 110000,
    inStock: false,
    image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=500&fit=crop",
    description: "Karya-karya penulis Indonesia kontemporer"
  }
]

export const categories = [
  { id: 'all', label: 'All Books', icon: '📚' },
  { id: 'islamic', label: 'Islamic', icon: '🕌' },
  { id: 'educational', label: 'Educational', icon: '🎓' },
  { id: 'children', label: 'Children', icon: '👶' },
  { id: 'literature', label: 'Literature', icon: '📖' },
]