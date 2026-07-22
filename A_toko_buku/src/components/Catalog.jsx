import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, ShoppingBag, Check, Eye } from 'lucide-react'
import { useCart } from '../context/CartContext'
import BookModal from './BookModal'

const categories = ["All", "Islamic Books", "Education", "Children", "General"]

const booksData = [
    { id: 1, title: "Modern Islamic Thought", category: "Islamic Books", price: "Rp 120.000", priceNum: 120000, image: "/assets/book-islamic-1.png", stock: true, description: "A comprehensive exploration of how Islamic philosophy adapts to and influences the modern world. Ideal for scholars and seekers of wisdom." },
    { id: 2, title: "The Art of Parenting in Islam", category: "Education", price: "Rp 95.000", priceNum: 95000, image: "/assets/book-parenting-1.png", stock: true, description: "Nurturing children with faith and love. This guide provides practical advice based on traditional Islamic values and modern psychology." },
    { id: 3, title: "Small Explorers: The Universe", category: "Children", price: "Rp 85.000", priceNum: 85000, image: "/assets/book-children-1.png", stock: true, description: "A vibrant journey through the stars for young minds. Encourages curiosity and wonder about the creation of the heavens." },
    { id: 4, title: "Holy Quran (Premium Edition)", category: "Islamic Books", price: "Rp 350.000", priceNum: 350000, image: "/assets/book-quran-1.png", stock: true, description: "A luxury edition of the Holy Quran featuring exquisite gold calligraphy and premium leather binding. A lifetime treasure for any home." },
    { id: 5, title: "Mathematics for Future Leaders", category: "Education", price: "Rp 65.000", priceNum: 65000, image: "/assets/book-math-1.png", stock: false, description: "Building strong analytical foundations for the next generation. A clear and engaging textbook for advanced students." },
    { id: 6, title: "Islamic History Volume 1", category: "Islamic Books", price: "Rp 150.000", priceNum: 150000, image: "/assets/book-history-1.png", stock: true, description: "An in-depth study of the early centuries of Islam, from the Golden Age to the spread of knowledge across continents." },
    { id: 7, title: "Bedtime Stories for Muslim Kids", category: "Children", price: "Rp 75.000", priceNum: 75000, image: "/assets/book-bedtime-1.png", stock: true, description: "Soothing tales that teach compassion, honesty, and faith. The perfect companion for a peaceful night's sleep." },
    { id: 8, title: "The Wise Owl & Friends", category: "General", price: "Rp 55.000", priceNum: 55000, image: "/assets/book-owl-1.png", stock: true, description: "A charming collection of fables featuring a wise owl and his forest friends, teaching valuable life lessons through artful storytelling." },
]

const ProductCard = ({ book, onOpen }) => {
    const { addToCart } = useCart();
    const [added, setAdded] = useState(false);

    const handleAdd = (e) => {
        e.stopPropagation();
        if (!book.stock) return;
        addToCart(book);
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    return (
        <motion.div
            layout
            className="book-card"
            onClick={() => onOpen(book)}
            style={{ cursor: 'pointer' }}
        >
            <div className="book-img-wrapper" style={{ position: 'relative' }}>
                <img src={book.image} alt={book.title} />
                <AnimatePresence>
                    {book.stock && (
                        <motion.div
                            className="card-hover-overlay"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            style={{
                                position: 'absolute', inset: 0,
                                display: 'flex', flexDirection: 'column',
                                alignItems: 'center', justifyContent: 'center',
                                padding: '16px', background: 'rgba(255,255,255,0.7)',
                                backdropFilter: 'blur(4px)',
                                gap: '12px'
                            }}
                        >
                            <button
                                onClick={handleAdd}
                                className="btn btn-primary"
                                style={{ width: '80%', borderRadius: '6px', fontSize: '0.875rem' }}
                            >
                                {added ? <Check size={18} /> : 'Add to Cart'}
                            </button>
                            <span style={{ fontSize: '0.75rem', fontWeight: '600', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <Eye size={14} /> Quick View
                            </span>
                        </motion.div>
                    )}
                </AnimatePresence>
                {!book.stock && (
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: '#999' }}>Sold Out</span>
                    </div>
                )}
            </div>
            <div className="book-info">
                <span className="book-category">{book.category}</span>
                <h3 className="book-title">{book.title}</h3>
                <p className="book-price">{book.price}</p>
            </div>
        </motion.div>
    );
};

const Catalog = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedBook, setSelectedBook] = useState(null);

    const filteredBooks = useMemo(() => {
        return booksData.filter(book => {
            const matchesCategory = activeCategory === "All" || book.category === activeCategory;
            const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchQuery]);

    return (
        <section id="catalog">
            <div className="container">
                <div className="section-title">
                    <span style={{ color: 'var(--accent)', fontWeight: '600', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.1em', marginBottom: '8px', display: 'block' }}>Collections</span>
                    <h2>The Catalog</h2>
                    <p>Carefully selected titles to inspire your journey.</p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', marginBottom: '64px' }}>
                    <div style={{ position: 'relative', width: '100%', maxWidth: '400px' }}>
                        <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#999' }} />
                        <input
                            type="text"
                            placeholder="Search titles..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            style={{
                                width: '100%', padding: '12px 12px 12px 40px',
                                borderRadius: '8px', border: '1px solid #EEE',
                                background: '#F9F9F9', outline: 'none', transition: 'all 0.2s',
                                fontSize: '0.9375rem'
                            }}
                        />
                    </div>

                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                style={{
                                    padding: '8px 20px', borderRadius: '50px', fontSize: '0.875rem', fontWeight: '500',
                                    background: activeCategory === cat ? 'var(--primary)' : 'transparent',
                                    color: activeCategory === cat ? 'white' : 'var(--secondary)',
                                    border: `1px solid ${activeCategory === cat ? 'var(--primary)' : '#EEE'}`,
                                    cursor: 'pointer', transition: 'all 0.2s'
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div layout className="book-grid">
                    <AnimatePresence mode='popLayout'>
                        {filteredBooks.map(book => (
                            <ProductCard
                                key={book.id}
                                book={book}
                                onOpen={(b) => setSelectedBook(b)}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            <BookModal
                book={selectedBook}
                isOpen={!!selectedBook}
                onClose={() => setSelectedBook(null)}
            />
        </section>
    )
}

export default Catalog
