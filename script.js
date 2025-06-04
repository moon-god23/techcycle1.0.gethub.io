document.addEventListener('DOMContentLoaded', () => {
    const productsData = [
        {
            id: 'resistor1',
            name: '10k Ohm Resistor (Pack of 10)',
            category: 'Passive Components',
            price: 50.00,
            image: 'images/resistor.jpg',
            description: 'Standard 1/4W Carbon Film Resistors. Ideal for general-purpose electronics. Tolerance: ±5%.',
            specs: {
                'Resistance': '10 kΩ',
                'Power Rating': '0.25 W',
                'Tolerance': '±5%',
                'Type': 'Carbon Film'
            },
            setup: 'Insert into breadboard or solder into circuit according to schematic. Ensure correct resistance value is used.',
            reviews: [
                { author: 'UserA', rating: 5, comment: 'Great quality, good value for money.' },
                { author: 'UserB', rating: 4, comment: 'Works as expected. Fast delivery.' }
            ]
        },
        {
            id: 'capacitor1',
            name: '100uF Electrolytic Capacitor',
            category: 'Passive Components',
            price: 75.00,
            image: 'images/capacitor.jpg',
            description: 'General purpose electrolytic capacitor. Suitable for power supply filtering and coupling.',
            specs: {
                'Capacitance': '100 µF',
                'Voltage Rating': '25 V',
                'Type': 'Electrolytic',
                'Pin Spacing': '5mm'
            },
            setup: 'Observe polarity (+/-) when connecting to a circuit. Incorrect polarity can damage the component.',
            reviews: [
                { author: 'UserC', rating: 5, comment: 'Essential for my audio projects. Very reliable.' },
                { author: 'UserD', rating: 3, comment: 'A bit large for my compact design, but performs well.' }
            ]
        },
        {
            id: 'arduino_uno',
            name: 'Arduino Uno R3',
            category: 'Active Components',
            price: 750.00,
            image: 'images/arduino_uno.jpg',
            description: 'The classic Arduino board. Perfect for beginners and advanced users alike. Based on the ATmega328P.',
            specs: {
                'Microcontroller': 'ATmega328P',
                'Operating Voltage': '5V',
                'Input Voltage (recommended)': '7-12V',
                'Digital I/O Pins': '14 (of which 6 provide PWM output)',
                'Analog Input Pins': '6'
            },
            setup: 'Connect via USB to your computer, install Arduino IDE, and upload your first sketch. Drivers may be required for some operating systems.',
            reviews: [
                { author: 'UserE', rating: 5, comment: 'Always reliable. A must-have for any electronics enthusiast.' },
                { author: 'UserF', rating: 5, comment: 'Great for learning microcontrollers. So many tutorials available.' }
            ]
        },
        {
            id: 'led_red',
            name: 'Red LED (Pack of 20)',
            category: 'Active Components',
            price: 40.00,
            image: 'images/led_red.jpg',
            description: 'Standard 5mm Red LEDs. Bright and energy efficient. Forward voltage: 1.8-2.2V.',
            specs: {
                'Color': 'Red',
                'Size': '5 mm',
                'Forward Voltage': '1.8-2.2 V',
                'Forward Current': '20 mA',
                'Luminosity': '1000-1200 mcd'
            },
            setup: 'Connect with a current-limiting resistor in series (e.g., 220 Ohm for 5V supply) to prevent damage. Longer leg is anode (+).',
            reviews: [
                { author: 'UserG', rating: 4, comment: 'Good brightness, good for indicators.' },
                { author: 'UserH', rating: 5, comment: 'Can\'t go wrong with these. Essential.' }
            ]
        },
        {
            id: 'pir_sensor',
            name: 'PIR Motion Sensor HC-SR501',
            category: 'Sensors & Modules',
            price: 220.00,
            image: 'images/pir_sensor.jpg',
            description: 'Adjustable PIR (Passive Infrared) sensor for motion detection. Ideal for security and automation projects.',
            specs: {
                'Operating Voltage': '4.5V - 20V',
                'Detection Angle': '120°',
                'Detection Distance': '3-7 m (adjustable)',
                'Output': 'High/Low signal (3.3V TTL)'
            },
            setup: 'Connect VCC to 5V, GND to Ground, and OUT to a digital input pin of your microcontroller. Adjust sensitivity and delay using onboard potentiometers.',
            reviews: [
                { author: 'UserI', rating: 5, comment: 'Works perfectly for my home automation system.' },
                { author: 'UserJ', rating: 4, comment: 'Easy to integrate with Arduino. Sensitivity is good.' }
            ]
        },
        {
            id: 'servo_motor',
            name: 'SG90 Micro Servo Motor',
            category: 'Robotics Parts',
            price: 180.00,
            image: 'images/servo_motor.jpg',
            description: 'Compact and lightweight servo motor. Great for small robotics projects, RC planes, and precise angle control.',
            specs: {
                'Operating Voltage': '4.8V - 6V',
                'Torque': '1.8 kg·cm (4.8V)',
                'Speed': '0.10 sec/60° (4.8V)',
                'Rotation': '0-180°'
            },
            setup: 'Connect brown wire to GND, red to 5V, and orange (signal) to a PWM pin of your microcontroller (e.g., Arduino). Use the Servo library.',
            reviews: [
                { author: 'UserK', rating: 4, comment: 'Good for the price, but sometimes a bit jumpy.' },
                { author: 'UserL', rating: 5, comment: 'Perfect for my robotic arm project!' }
            ]
        },
        // --- New Components Added Below ---
        {
            id: 'battery_9v',
            name: '9V Alkaline Battery (Single)',
            category: 'Power & Energy',
            price: 85.00,
            image: 'images/battery.jpg',
            description: 'Standard 9-volt alkaline battery for various electronic projects and devices. Long-lasting power.',
            specs: {
                'Voltage': '9 V',
                'Type': 'Alkaline',
                'Capacity': '550 mAh (typical)',
                'Shelf Life': '5 years'
            },
            setup: 'Insert into battery holder or connect with appropriate battery clips. Observe polarity (+/-).',
            reviews: [
                { author: 'PowerUser', rating: 5, comment: 'Reliable power, works great for my portable circuits.' },
                { author: 'GadgetFan', rating: 4, comment: 'Good battery, but wish it came in a multi-pack.' }
            ]
        },
        {
            id: 'level_shifter_4ch',
            name: '4-Channel Bi-directional Logic Level Shifter',
            category: 'Active Components',
            price: 150.00,
            image: 'images/level_shifter.jpg',
            description: 'Module to safely convert signals between different logic voltage levels (e.g., 3.3V to 5V and vice versa).',
            specs: {
                'Channels': '4',
                'Logic Voltage (Low)': '1.8V-3.6V',
                'Logic Voltage (High)': '2.8V-5.5V',
                'Compatibility': 'I2C, SPI, UART'
            },
            setup: 'Connect low voltage side to LV pins and high voltage side to HV pins. Ensure common ground connection.',
            reviews: [
                { author: 'MCU_Expert', rating: 5, comment: 'Essential for interfacing 3.3V sensors with 5V microcontrollers. Works flawlessly.' },
                { author: 'BeginnerBuilder', rating: 4, comment: 'A bit tricky to wire up at first, but once done, it performs well.' }
            ]
        },
        {
            id: 'mosfet_n_channel',
            name: 'N-Channel Power MOSFET (IRF520)',
            category: 'Active Components',
            price: 95.00,
            image: 'images/mosfet.jpg',
            description: 'N-Channel power MOSFET used for switching high current loads with a microcontroller. Commonly used for motors, LEDs, etc.',
            specs: {
                'Voltage Rating': '100 V',
                'Current Rating': '9.2 A',
                'Drain-Source Resistance': '0.27 Ω',
                'Type': 'N-Channel'
            },
            setup: 'Connect Gate to control signal (with a pull-down resistor), Drain to load, and Source to Ground. Observe datasheet for proper biasing.',
            reviews: [
                { author: 'MotorControl', rating: 5, comment: 'Great for controlling my DC motors. Handles current well.' },
                { author: 'DIY_Fan', rating: 4, comment: 'Reliable MOSFET, good value for small projects.' }
            ]
        },
        {
            id: 'motor_driver_l298n',
            name: 'L298N Dual H-Bridge Motor Driver Module',
            category: 'Robotics Parts',
            price: 320.00,
            image: 'images/motor_driver.jpg',
            description: 'Dual H-bridge driver module for controlling two DC motors or one stepper motor. Ideal for robotics and automation.',
            specs: {
                'Driver Chip': 'L298N',
                'Motor Voltage': '5V-35V',
                'Logic Voltage': '5V',
                'Output Current': '2A per channel (max 3A peak)'
            },
            setup: 'Connect motor power, logic power, and control signals (IN1-IN4) to your microcontroller. Use PWM for speed control.',
            reviews: [
                { author: 'RobotBuilder', rating: 5, comment: 'Powers my robot efficiently. Easy to use with Arduino.' },
                { author: 'Hobbyist', rating: 4, comment: 'Works well, but can get a bit warm with high loads.' }
            ]
        },
        {
            id: 'motor_wheel_kit',
            name: 'Smart Car Robot Wheel & DC Motor Kit (2 sets)',
            category: 'Robotics Parts',
            price: 450.00,
            image: 'images/motor_wheel.jpg',
            description: 'Includes two DC gear motors and matching wheels, perfect for building small robotic cars or chassis.',
            specs: {
                'Motor Voltage': '3V-6V',
                'Gear Ratio': '1:48',
                'Wheel Diameter': '66 mm',
                'Wheel Material': 'Rubber'
            },
            setup: 'Mount motors to a chassis, attach wheels. Connect motor leads to a motor driver (e.g., L298N).',
            reviews: [
                { author: 'CarDesigner', rating: 5, comment: 'Excellent kit for a beginner robot car. Good traction.' },
                { author: 'StudentProject', rating: 4, comment: 'Motors are decent, wheels fit well. No complaints.' }
            ]
        },
        {
            id: 'multimeter_dt830b',
            name: 'Digital Multimeter DT830B',
            category: 'Test Equipment',
            price: 600.00,
            image: 'images/multimeter.jpg',
            description: 'Basic digital multimeter for measuring voltage, current, resistance, continuity, and diode test. Essential for hobbyists.',
            specs: {
                'Display': '3.5 Digit LCD',
                'DC Voltage': 'Up to 1000V',
                'AC Voltage': 'Up to 750V',
                'DC Current': 'Up to 10A',
                'Resistance': 'Up to 2MΩ'
            },
            setup: 'Insert 9V battery (not included). Select desired measurement function with the rotary dial. Connect probes appropriately.',
            reviews: [
                { author: 'EE_Student', rating: 5, comment: 'Perfect for basic troubleshooting and learning. Accurate enough.' },
                { author: 'HomeDIYer', rating: 4, comment: 'Good affordable multimeter. Does what I need it to do.' }
            ]
        },
        {
            id: 'power_supply_module',
            name: 'MB102 Breadboard Power Supply Module',
            category: 'Power & Energy',
            price: 120.00,
            image: 'images/power_supply.jpg',
            description: 'Convenient module to power your breadboard projects from a DC barrel jack or USB. Provides 3.3V/5V regulated output.',
            specs: {
                'Input Voltage': '6.5V-12V DC',
                'Output Voltage': '3.3V / 5V (selectable)',
                'Max Output Current': '700mA',
                'Input Interface': 'DC 2.1mm Jack, USB'
            },
            setup: 'Plug into breadboard power rails. Connect DC adapter or USB cable. Select desired voltage via jumpers.',
            reviews: [
                { author: 'ProtoTyper', rating: 5, comment: 'Makes breadboarding so much cleaner and easier to power.' },
                { author: 'CircuitNewbie', rating: 4, comment: 'Very handy, no more messy wires for power. Good build quality.' }
            ]
        },
        {
            id: 'proximity_sensor_ir',
            name: 'Infrared Proximity Sensor Module (IR)',
            category: 'Sensors & Modules',
            price: 110.00,
            image: 'images/proximity_sensor.jpg',
            description: 'Simple IR obstacle avoidance sensor. Detects objects within a short range, outputting a digital signal.',
            specs: {
                'Operating Voltage': '3.3V-5V',
                'Detection Range': '2cm-30cm (adjustable)',
                'Output': 'Digital (High/Low)',
                'Wavelength': 'Infrared'
            },
            setup: 'Connect VCC to 5V, GND to Ground, and OUT to a digital input pin. Adjust sensitivity using the onboard potentiometer.',
            reviews: [
                { author: 'RobotNav', rating: 5, comment: 'Great for basic obstacle detection on my small robot.' },
                { author: 'Automator', rating: 3, comment: 'Works, but sometimes inconsistent in bright light.' }
            ]
        },
        {
            id: 'water_pump_mini',
            name: 'Mini DC Submersible Water Pump',
            category: 'Robotics Parts',
            price: 250.00,
            image: 'images/water_pump.jpg',
            description: 'Small submersible water pump, ideal for mini fountains, watering systems, or small fluid transfer projects.',
            specs: {
                'Operating Voltage': '2.5V-6V DC',
                'Flow Rate': '80-120 L/H',
                'Max Lift': '40-110 cm',
                'Current': '130-220 mA'
            },
            setup: 'Connect to a suitable DC power source. Submerge pump fully in water before operation. Do not run dry.',
            reviews: [
                { author: 'Hydroponics_Fan', rating: 5, comment: 'Perfect for my small hydroponic setup. Quiet and efficient.' },
                { author: 'MiniFountain', rating: 4, comment: 'Works well, good for the price. Remember to keep it submerged.' }
            ]
        },
        {
            id: 'water_sensor_soil',
            name: 'Soil Moisture Sensor Module',
            category: 'Sensors & Modules',
            price: 100.00,
            image: 'images/water_sensor.jpg',
            description: 'Detects soil moisture levels using two probes. Outputs analog and digital signals.',
            specs: {
                'Operating Voltage': '3.3V-5V',
                'Output': 'Analog & Digital',
                'Material': 'FR4 + Electronic Components',
                'Indicator': 'Power LED, Digital Output LED'
            },
            setup: 'Insert probes into soil. Connect VCC, GND. Connect Analog Out to an analog input pin, or Digital Out to a digital input pin.',
            reviews: [
                { author: 'PlantCare', rating: 5, comment: 'Helps me keep my plants perfectly watered. Very accurate.' },
                { author: 'Gardener', rating: 4, comment: 'Easy to use with Arduino. Great for automated watering.' }
            ]
        }
    ];

    const productList = document.querySelector('.product-list');
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartCountSpan = document.getElementById('cart-count');
    const cartTotalPriceSpan = document.getElementById('cart-total-price');
    const emptyCartMessage = document.getElementById('empty-cart');
    const categoriesContainer = document.querySelector('.categories');
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    let cart = JSON.parse(localStorage.getItem('cart')) || {};

    // --- Dark Mode Logic ---
    const applyDarkModePreference = () => {
        if (localStorage.getItem('dark-mode') === 'enabled') {
            document.body.classList.add('dark-mode');
            darkModeToggle.textContent = '☀️'; // Sun icon for light mode
        } else {
            document.body.classList.remove('dark-mode');
            darkModeToggle.textContent = '🌙'; // Moon icon for dark mode
        }
    };

    // Apply preference on initial load
    applyDarkModePreference();

    // Toggle dark mode on button click
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('dark-mode', 'enabled');
            darkModeToggle.textContent = '☀️';
        } else {
            localStorage.setItem('dark-mode', 'disabled');
            darkModeToggle.textContent = '🌙';
        }
    });

    // --- Product Rendering ---
    const renderProducts = (filteredProducts = productsData) => {
        productList.innerHTML = ''; // Clear previous products
        if (filteredProducts.length === 0) {
            productList.innerHTML = '<p>No products found for this category.</p>';
            return;
        }

        filteredProducts.forEach(product => {
            const productItem = document.createElement('div');
            productItem.classList.add('product-item');
            productItem.innerHTML = `
                <a href="product-detail.html?id=${product.id}" class="product-link">
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p class="price">₹${product.price.toFixed(2)}</p>
                </a>
                <button class="button add-to-cart" data-id="${product.id}">Add to Cart</button>
            `;
            productList.appendChild(productItem);
        });
    };

    // --- Category Filtering ---
    if (categoriesContainer) {
        // Dynamically create categories based on productsData
        const allCategories = new Set(productsData.map(p => p.category));
        let categoriesHtml = '<a href="#" class="category-link active-category" data-category="All Components">All Components</a>';
        allCategories.forEach(category => {
            categoriesHtml += `<a href="#" class="category-link" data-category="${category}">${category}</a>`;
        });
        categoriesContainer.innerHTML = categoriesHtml;

        categoriesContainer.addEventListener('click', (event) => {
            if (event.target.classList.contains('category-link')) {
                event.preventDefault();

                // Remove active class from all links
                document.querySelectorAll('.category-link').forEach(link => {
                    link.classList.remove('active-category');
                });

                // Add active class to clicked link
                event.target.classList.add('active-category');

                const category = event.target.dataset.category;
                if (category === 'All Components') {
                    renderProducts(productsData);
                } else {
                    const filtered = productsData.filter(product => product.category === category);
                    renderProducts(filtered);
                }
            }
        });
    }


    // --- Cart Management ---
    const updateCartDisplay = () => {
        cartItemsContainer.innerHTML = '';
        let total = 0;
        let count = 0;

        if (Object.keys(cart).length === 0) {
            emptyCartMessage.style.display = 'block';
            cartItemsContainer.style.display = 'none';
        } else {
            emptyCartMessage.style.display = 'none';
            cartItemsContainer.style.display = 'block';

            for (const productId in cart) {
                const product = productsData.find(p => p.id === productId);
                if (product) {
                    const item = cart[productId];
                    const cartItemDiv = document.createElement('div');
                    cartItemDiv.classList.add('cart-item');
                    cartItemDiv.innerHTML = `
                        <img src="${product.image}" alt="${product.name}">
                        <div class="cart-item-details">
                            <h4>${product.name}</h4>
                            <p>₹${product.price.toFixed(2)}</p>
                        </div>
                        <div class="cart-item-quantity">
                            <button class="quantity-button decrease" data-id="${product.id}">-</button>
                            <span class="item-quantity">${item.quantity}</span>
                            <button class="quantity-button increase" data-id="${product.id}">+</button>
                        </div>
                        <button class="remove-from-cart" data-id="${product.id}">Remove</button>
                    `;
                    cartItemsContainer.appendChild(cartItemDiv);
                    total += product.price * item.quantity;
                    count += item.quantity;
                }
            }
        }
        cartCountSpan.textContent = count;
        cartTotalPriceSpan.textContent = total.toFixed(2);
        localStorage.setItem('cart', JSON.stringify(cart));
    };

    const addToCart = (productId) => {
        if (cart[productId]) {
            cart[productId].quantity++;
        } else {
            cart[productId] = { quantity: 1 };
        }
        updateCartDisplay();
    };

    const removeFromCart = (productId) => {
        if (cart[productId]) {
            delete cart[productId];
            updateCartDisplay();
        }
    };

    const updateQuantity = (productId, change) => {
        if (cart[productId]) {
            cart[productId].quantity += change;
            if (cart[productId].quantity <= 0) {
                removeFromCart(productId);
            } else {
                updateCartDisplay();
            }
        }
    };

    // Event Delegation for Add to Cart, Quantity, Remove buttons
    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('add-to-cart')) {
            const productId = event.target.dataset.id;
            addToCart(productId);
            alert('Item added to cart!'); // User feedback
        } else if (event.target.classList.contains('remove-from-cart')) {
            const productId = event.target.dataset.id;
            removeFromCart(productId);
        } else if (event.target.classList.contains('quantity-button')) {
            const productId = event.target.dataset.id;
            if (event.target.classList.contains('increase')) {
                updateQuantity(productId, 1);
            } else if (event.target.classList.contains('decrease')) {
                updateQuantity(productId, -1);
            }
        } else if (event.target.classList.contains('checkout-button')) {
             if (Object.keys(cart).length > 0) {
                 alert('Proceeding to checkout! (This is a placeholder action)');
                 // Here you would typically redirect to a checkout page or initiate a payment process
                 cart = {}; // Clear cart after "checkout"
                 updateCartDisplay();
             } else {
                 alert('Your cart is empty. Please add items before checking out.');
             }
        }
    });

    // Initial render
    renderProducts();
    updateCartDisplay();
});