import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

const BookModal = ({ book, isOpen, onClose }) => {
    const { addToCart } = useCart();
    const [added, setAdded] = React.useState(false);

    if (!book) return null;

    const handleAdd = () => {
        addToCart(book);
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div
                    className="modal-overlay"
                    onClick={onClose}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        backgroundColor: 'rgba(0,0,0,0.1)',
                        backdropFilter: 'blur(8px)',
                        zIndex: 3000,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '24px'
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            backgroundColor: 'white',
                            width: '100%',
                            maxWidth: '800px',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
                            position: 'relative'
                        }}
                    >
                        <button
                            onClick={onClose}
                            style={{
                                position: 'absolute',
                                top: '20px',
                                right: '20px',
                                zIndex: 10,
                                color: '#666',
                                background: 'rgba(255,255,255,0.8)',
                                borderRadius: '50%',
                                padding: '8px',
                                backdropFilter: 'blur(4px)'
                            }}
                        >
                            <X size={20} />
                        </button>

                        <div style={{ background: '#F8F9FA', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px' }}>
                            <img
                                src={book.image}
                                alt={book.title}
                                style={{
                                    width: '100%',
                                    maxWidth: '240px',
                                    height: 'auto',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                    borderRadius: '4px'
                                }}
                            />
                        </div>

                        <div style={{ padding: '48px', display: 'flex', flexDirection: 'column' }}>
                            <span style={{ color: 'var(--accent)', fontWeight: '700', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px', display: 'block' }}>
                                {book.category}
                            </span>
                            <h2 style={{ fontSize: '1.75rem', marginBottom: '16px', color: 'var(--primary)' }}>{book.title}</h2>
                            <p style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '24px', color: 'var(--primary)' }}>{book.price}</p>

                            <p style={{ color: 'var(--secondary)', lineHeight: '1.7', marginBottom: '40px', fontSize: '0.9375rem' }}>
                                {book.description}
                            </p>

                            <div style={{ marginTop: 'auto' }}>
                                <button
                                    className="btn btn-primary"
                                    disabled={!book.stock}
                                    style={{ width: '100%', gap: '12px' }}
                                    onClick={handleAdd}
                                >
                                    {added ? <><Check size={18} /> Added to Cart</> : <><ShoppingBag size={18} /> Add to Cart</>}
                                </button>
                                {!book.stock && (
                                    <p style={{ marginTop: '12px', textAlign: 'center', fontSize: '0.8125rem', color: '#ed4337', fontWeight: '600' }}>
                                        Currently out of stock
                                    </p>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default BookModal;
