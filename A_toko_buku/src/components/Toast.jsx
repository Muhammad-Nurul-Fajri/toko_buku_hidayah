import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Toast = () => {
    const { toast } = useCart();

    return (
        <AnimatePresence>
            {toast && (
                <motion.div
                    initial={{ opacity: 0, y: 50, x: '-50%' }}
                    animate={{ opacity: 1, y: 0, x: '-50%' }}
                    exit={{ opacity: 0, y: 20, x: '-50%' }}
                    style={{
                        position: 'fixed',
                        bottom: '40px',
                        left: '50%',
                        backgroundColor: 'var(--primary)',
                        color: 'white',
                        padding: '12px 24px',
                        borderRadius: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        zIndex: 9999,
                        boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                        fontSize: '0.875rem',
                        fontWeight: '500',
                        whiteSpace: 'nowrap'
                    }}
                >
                    <CheckCircle size={18} color="#4ADE80" />
                    {toast}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Toast;
