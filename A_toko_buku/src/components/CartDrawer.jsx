import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

const CartDrawer = () => {
    const { cart, removeFromCart, updateQuantity, isDrawerOpen, toggleDrawer, cartTotal, clearCart } = useCart();
    const [isCheckout, setIsCheckout] = useState(false);
    const [formData, setFormData] = useState({ name: '', phone: '', method: 'Delivery' });

    const formatPrice = (num) => {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(num);
    };

    const handleCheckoutSubmit = (e) => {
        e.preventDefault();
        const orderItems = cart.map(item => `- ${item.title} (${item.quantity}x)`).join('%0A');
        const totalMsg = `Total: ${formatPrice(cartTotal)}`;
        const message = `Halo TokoBuku Hidayah, saya ingin memesan:%0A${orderItems}%0A%0A${totalMsg}%0A%0AData Pemesan:%0BNama: ${formData.name}%0AWhatsApp: ${formData.phone}%0AMetode: ${formData.method}`;
        window.open(`https://wa.me/6287782866044?text=${message}`, '_blank');
        clearCart();
        setIsCheckout(false);
        toggleDrawer();
    };

    return (
        <AnimatePresence>
            {isDrawerOpen && (
                <div className="cart-drawer-overlay" onClick={toggleDrawer} style={{ background: 'rgba(0,0,0,0.15)', backdropFilter: 'blur(4px)' }}>
                    <motion.div
                        className="cart-drawer"
                        onClick={(e) => e.stopPropagation()}
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        style={{ boxShadow: '-8px 0 32px rgba(0,0,0,0.05)' }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                            <h3 style={{ fontSize: '1.25rem' }}>{isCheckout ? 'Checkout' : 'Your Cart'}</h3>
                            <button onClick={toggleDrawer} style={{ color: '#999' }}><X size={24} /></button>
                        </div>

                        {!isCheckout ? (
                            <>
                                <div style={{ flex: 1, overflowY: 'auto' }}>
                                    {cart.length === 0 ? (
                                        <div style={{ textAlign: 'center', marginTop: '64px' }}>
                                            <ShoppingBag size={40} style={{ marginBottom: '16px', color: '#EEE' }} />
                                            <p style={{ color: '#999', fontSize: '0.875rem' }}>No items in your cart yet.</p>
                                        </div>
                                    ) : (
                                        cart.map((item) => (
                                            <div key={item.id} style={{ display: 'flex', gap: '16px', padding: '16px 0', borderBottom: '1px solid #F5F5F5' }}>
                                                <img src={item.image} alt={item.title} style={{ width: '56px', height: '72px', objectFit: 'cover', borderRadius: '4px' }} />
                                                <div style={{ flex: 1 }}>
                                                    <h4 style={{ fontSize: '0.875rem', fontWeight: '600', marginBottom: '4px' }}>{item.title}</h4>
                                                    <p style={{ fontSize: '0.875rem', fontWeight: '700', marginBottom: '8px' }}>{formatPrice(item.priceNum)}</p>
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                                        <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #EEE', borderRadius: '4px' }}>
                                                            <button onClick={() => updateQuantity(item.id, -1)} style={{ padding: '4px' }}><Minus size={14} /></button>
                                                            <span style={{ fontSize: '0.8125rem', width: '24px', textAlign: 'center' }}>{item.quantity}</span>
                                                            <button onClick={() => updateQuantity(item.id, 1)} style={{ padding: '4px' }}><Plus size={14} /></button>
                                                        </div>
                                                        <button onClick={() => removeFromCart(item.id)} style={{ marginLeft: 'auto', color: '#AAA' }}><Trash2 size={16} /></button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>

                                {cart.length > 0 && (
                                    <div style={{ paddingTop: '24px' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
                                            <span style={{ color: '#666' }}>Subtotal</span>
                                            <span style={{ fontWeight: '700', fontSize: '1.125rem' }}>{formatPrice(cartTotal)}</span>
                                        </div>
                                        <button
                                            className="btn btn-primary"
                                            style={{ width: '100%', fontSize: '0.875rem' }}
                                            onClick={() => setIsCheckout(true)}
                                        >
                                            Process Order
                                        </button>
                                        <button
                                            onClick={toggleDrawer}
                                            style={{ width: '100%', marginTop: '16px', fontSize: '0.8125rem', color: '#999', textAlign: 'center' }}
                                        >
                                            Continue Shopping
                                        </button>
                                    </div>
                                )}
                            </>
                        ) : (
                            <form onSubmit={handleCheckoutSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.8125rem', color: '#666' }}>Full Name</label>
                                    <input
                                        type="text"
                                        required
                                        style={{ width: '100%', padding: '10px', border: '1px solid #EEE', borderRadius: '6px', outline: 'none' }}
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.8125rem', color: '#666' }}>WhatsApp Number</label>
                                    <input
                                        type="tel"
                                        required
                                        style={{ width: '100%', padding: '10px', border: '1px solid #EEE', borderRadius: '6px', outline: 'none' }}
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '6px', fontSize: '0.8125rem', color: '#666' }}>Method</label>
                                    <select
                                        style={{ width: '100%', padding: '10px', border: '1px solid #EEE', borderRadius: '6px', outline: 'none', background: 'white' }}
                                        value={formData.method}
                                        onChange={(e) => setFormData({ ...formData, method: e.target.value })}
                                    >
                                        <option>Delivery</option>
                                        <option>In-store Pickup</option>
                                    </select>
                                </div>

                                <div style={{ borderTop: '1px solid #F5F5F5', paddingTop: '20px', marginTop: '10px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '700', marginBottom: '24px' }}>
                                        <span>Total</span>
                                        <span>{formatPrice(cartTotal)}</span>
                                    </div>
                                    <button type="submit" className="btn btn-primary" style={{ width: '100%', fontSize: '0.875rem' }}>
                                        Complete Order
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setIsCheckout(false)}
                                        style={{ width: '100%', marginTop: '16px', fontSize: '0.8125rem', color: '#999', textAlign: 'center' }}
                                    >
                                        Back to Cart
                                    </button>
                                </div>
                            </form>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default CartDrawer;
