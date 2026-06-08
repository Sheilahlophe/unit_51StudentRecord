// Product Inventory
const laptopName      = 'Laptop';
const headphonesName  = 'Headphones';
const laptopBagName   = 'Laptop Bag';
const usbHubName      = 'USB Hub';
const mouseName       = 'Mouse';

//declaration
let laptopPrice      = 15999;
let headphonesPrice  = 899;
let laptopBagPrice   = 450;
let usbHubPrice      = 299;
let mousePrice       = 199;

//display inventory

console.log('--- SHOP INVENTORY ---');
console.log(`${laptopName}       — R${laptopPrice}`);
console.log(`${headphonesName}   — R${headphonesPrice}`);
console.log(`${laptopBagName}    — R${laptopBagPrice}`);
console.log(`${usbHubName}       — R${usbHubPrice}`);
console.log(`${mouseName}        — R${mousePrice}`);

console.log('--- TYPE CHECK ---');
console.log(`laptopName is a: ${typeof laptopName}`);
console.log(`laptopPrice is a: ${typeof laptopPrice}`);
console.log(`headphonesName is a: ${typeof headphonesName}`);
console.log(`headphonesPrice is a: ${typeof headphonesPrice}`);

// Shopping Cart
let cartItem1      = laptopName;
let cartItem1Price = laptopPrice;
let cartItem2      = headphonesName;
let cartItem2Price = headphonesPrice;
let cartItem3      = mouseName;
let cartItem3Price = mousePrice;

let cartSubtotal = cartItem1Price + cartItem2Price + cartItem3Price;
console.log(`Cart Subtotal: R${cartSubtotal}`);

// Loyalty Discount
let loyaltyDiscount = 500;
console.log(`Initial discount: R${loyaltyDiscount}`);

loyaltyDiscount += 250;
console.log(`After laptop bonus: R${loyaltyDiscount}`);

loyaltyDiscount *= 2;
console.log(`After flash sale: R${loyaltyDiscount}`);

// Discount and VAT
const discountedTotal = cartSubtotal - loyaltyDiscount;
const VAT_RATE        = 0.15;
const vatAmount       = discountedTotal * VAT_RATE;
const finalTotal      = discountedTotal + vatAmount;

console.log(`Discounted Total: R${discountedTotal}`);
console.log(`VAT Amount: R${vatAmount}`);
console.log(`Final Total: R${finalTotal}`);

// Cart Statistics
const avgPricePerItem  = cartSubtotal / 3;
const mostExpensive    = Math.max(cartItem1Price, cartItem2Price, cartItem3Price);
const leastExpensive   = Math.min(cartItem1Price, cartItem2Price, cartItem3Price);
const savingsPercent   = Math.round((loyaltyDiscount / cartSubtotal) * 100 * 100) / 100;
const finalTotalRounded = Math.round(finalTotal);

console.log(`Average Price Per Item: R${avgPricePerItem}`);
console.log(`Most Expensive Item: R${mostExpensive}`);
console.log(`Least Expensive Item: R${leastExpensive}`);
console.log(`Savings Percentage: ${savingsPercent}%`);
console.log(`Final Total Rounded: R${finalTotalRounded}`);

// Customer Details
const customerName    = 'Thandi Mokoena';
const customerAge     = 19;
const accountBalance  = 18500;
const isVerified      = true;
const hasDeliveryAddr = true;
const creditScore     = 720;
const paymentMethod   = 'card';

// Validation
const canAfford          = accountBalance >= finalTotal;
const isAdult            = customerAge >= 18;
const hasGoodCredit      = creditScore > 650;
const usesCard           = paymentMethod === 'card';
const usesCash           = paymentMethod === 'cash';
const usesValidMethod    = usesCard || usesCash;
const orderCanProcess    = canAfford && isVerified && hasDeliveryAddr && usesValidMethod;
const needsCreditCheck   = finalTotal > 10000 && !hasGoodCredit;
const isEligibleForFinance = isAdult && hasGoodCredit && !canAfford;

//displaying customer details
console.log(`customerName: ${customerName}`);
console.log(`customerAge: ${customerAge}`);
console.log(`accountBalance: ${accountBalance}`);
console.log(`isVerified: ${isVerified}`);
console.log(`hasDeliveryAddr: ${hasDeliveryAddr}`);
console.log(`creditScore: ${creditScore}`);
console.log(`paymentMethod: ${paymentMethod}`)

//display validation
console.log(`canAfford: ${canAfford}`);
console.log(`isAdult: ${isAdult}`);
console.log(`hasGoodCredit: ${hasGoodCredit}`);
console.log(`usesCard: ${usesCard}`);
console.log(`usesCash: ${usesCash}`);
console.log(`usesValidMethod: ${usesValidMethod}`);
console.log(`orderCanProcess: ${orderCanProcess}`);
console.log(`needCreditCheck: ${needsCreditCheck}`);
console.log(`isEligibleForFinance: ${isEligibleForFinance}`);

// Final Receipt
console.log('================================');
console.log(`WELCOME TO ${'online shop'.toUpperCase()}`);
console.log('================================');

console.log(`Customer: ${customerName}`);

console.log('--- ITEMS PURCHASED ---');
console.log(`${cartItem1}       — R${cartItem1Price}`);
console.log(`${cartItem2}  — R${cartItem2Price}`);
console.log(`${cartItem3}        — R${cartItem3Price}`);

console.log('--- PRICING BREAKDOWN ---');
console.log(`Subtotal:          R${cartSubtotal}`);
console.log(`Loyalty Discount:  R${loyaltyDiscount}`);
console.log(`VAT (15%):         R${vatAmount}`);
console.log(`Final Total:       R${finalTotal}`);
console.log(`Savings:           ${savingsPercent}%`);

console.log('--- ORDER STATUS ---');
console.log(`Order Approved: ${orderCanProcess}`);
console.log(`Eligible for Finance: ${isEligibleForFinance}`);

console.log('--- DATA TYPES ---');
console.log(`finalTotal is a: ${typeof finalTotal}`);
console.log(`orderCanProcess is a: ${typeof orderCanProcess}`);
console.log('================================');
console.log('Thank you for shopping with us!');
console.log('================================');

// Split the name into an array: ['Thandi', 'Mokoena']
const nameParts = customerName.split(' ');

// Access each part
const firstName = nameParts[0];  // 'Thandi'
const lastName  = nameParts[1];  // 'Mokoena'

// Rearrange and uppercase the last name
const formattedName = `${lastName.toUpperCase()}, ${firstName}`;
console.log(formattedName);
