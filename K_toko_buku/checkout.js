// Checkout Page JavaScript
class CheckoutPage {
    constructor() {
        this.cart = JSON.parse(localStorage.getItem('cart')) || [];
        this.init();
    }

    init() {
        this.loadOrderSummary();
        this.bindEvents();
        
        // Redirect if cart is empty
        if (this.cart.length === 0) {
            alert('Your cart is empty. Redirecting to store...');
            window.location.href = 'index.html#catalog';
        }
    }

    bindEvents() {
        // Delivery method change
        document.querySelectorAll('input[name="delivery"]').forEach(radio => {
            radio.addEventListener('change', (e) => {
                this.handleDeliveryChange(e.target.value);
            });
        });

        // Form submission
        document.getElementById('checkout-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.processOrder();
        });

        // Phone number formatting
        document.getElementById('customer-phone').addEventListener('blur', (e) => {
            this.formatPhoneNumber(e.target);
        });
    }

    loadOrderSummary() {
        const itemsContainer = document.getElementById('summary-items');
        const subtotalEl = document.getElementById('summary-subtotal');
        const totalEl = document.getElementById('summary-total');

        // Render items
        itemsContainer.innerHTML = this.cart.map(item => `
            <div class="summary-item">
                <div class="item-details">
                    <span class="item-name">${item.title}</span>
                    <span class="item-quantity">Qty: ${item.quantity}</span>
                </div>
                <span class="item-price">Rp ${this.formatPrice(item.price * item.quantity)}</span>
            </div>
        `).join('');

        // Calculate totals
        const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        subtotalEl.textContent = `Rp ${this.formatPrice(subtotal)}`;
        totalEl.textContent = `Rp ${this.formatPrice(subtotal)}`;
    }

    handleDeliveryChange(method) {
        const addressSection = document.getElementById('delivery-address');
        const deliveryPrice = document.getElementById('summary-delivery');
        
        if (method === 'delivery') {
            addressSection.style.display = 'block';
            deliveryPrice.textContent = 'Contact for rates';
            // Make address fields required
            document.getElementById('address').required = true;
            document.getElementById('city').required = true;
            document.getElementById('postal-code').required = true;
        } else {
            addressSection.style.display = 'none';
            deliveryPrice.textContent = 'FREE';
            // Remove required from address fields
            document.getElementById('address').required = false;
            document.getElementById('city').required = false;
            document.getElementById('postal-code').required = false;
        }
    }

    formatPhoneNumber(input) {
        let value = input.value.replace(/\D/g, '');
        if (value.startsWith('0')) {
            value = '62' + value.substring(1);
        } else if (!value.startsWith('62')) {
            value = '62' + value;
        }
        input.value = '+' + value;
    }

    formatPrice(price) {
        return new Intl.NumberFormat('id-ID').format(price);
    }

    processOrder() {
        const formData = new FormData(document.getElementById('checkout-form'));
        const orderData = Object.fromEntries(formData.entries());

        // Validate required fields
        if (!this.validateForm(orderData)) {
            return;
        }

        // Create WhatsApp message
        const message = this.createWhatsAppMessage(orderData);
        
        // Send to WhatsApp
        window.open(`https://wa.me/6287782866044?text=${encodeURIComponent(message)}`, '_blank');
        
        // Clear cart and redirect
        localStorage.removeItem('cart');
        
        // Show success message
        alert('Order sent successfully! We will contact you shortly via WhatsApp.');
        
        // Redirect to home page
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);
    }

    validateForm(data) {
        const requiredFields = ['name', 'phone'];
        
        // Add delivery-specific required fields
        if (data.delivery === 'delivery') {
            requiredFields.push('address', 'city', 'postal_code');
        }

        for (const field of requiredFields) {
            if (!data[field] || data[field].trim() === '') {
                alert(`Please fill in the ${field.replace('_', ' ')} field.`);
                return false;
            }
        }

        // Validate phone number
        if (!data.phone.match(/^\+?62\d{8,12}$/)) {
            alert('Please enter a valid Indonesian phone number.');
            return false;
        }

        return true;
    }

    createWhatsAppMessage(orderData) {
        let message = `🛍️ *NEW ORDER - TokoBuku Hidayah*\n\n`;
        
        // Customer info
        message += `👤 *Customer Information:*\n`;
        message += `Name: ${orderData.name}\n`;
        message += `Phone: ${orderData.phone}\n`;
        if (orderData.email) {
            message += `Email: ${orderData.email}\n`;
        }
        message += `\n`;

        // Order items
        message += `📚 *Order Items:*\n`;
        this.cart.forEach(item => {
            message += `• ${item.title}\n`;
            message += `  Qty: ${item.quantity} × Rp ${this.formatPrice(item.price)} = Rp ${this.formatPrice(item.price * item.quantity)}\n`;
        });
        message += `\n`;

        // Delivery method
        message += `🚚 *Delivery Method:*\n`;
        if (orderData.delivery === 'pickup') {
            message += `In-Store Pickup (FREE)\n`;
            message += `Location: Plaza Indonesia - Lower Basement\n`;
        } else {
            message += `Home Delivery\n`;
            message += `Address: ${orderData.address}\n`;
            message += `City: ${orderData.city}\n`;
            message += `Postal Code: ${orderData.postal_code}\n`;
        }
        message += `\n`;

        // Total
        const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        message += `💰 *Order Total: Rp ${this.formatPrice(subtotal)}*\n`;
        
        // Additional notes
        if (orderData.notes) {
            message += `\n📝 *Additional Notes:*\n${orderData.notes}\n`;
        }

        message += `\n✅ Please confirm this order and let me know the next steps.`;

        return message;
    }
}

// Initialize checkout page
document.addEventListener('DOMContentLoaded', () => {
    new CheckoutPage();
});