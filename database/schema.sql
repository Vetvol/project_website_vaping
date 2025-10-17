-- Database Schema for Neon PostgreSQL

-- Products table
CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  series VARCHAR(100) NOT NULL,
  status VARCHAR(20) DEFAULT 'active',
  stock INTEGER DEFAULT 0,
  price DECIMAL(10,2),
  image_url VARCHAR(500),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Users table (for admin panel)
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role VARCHAR(20) DEFAULT 'admin',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Orders table (for future e-commerce functionality)
CREATE TABLE IF NOT EXISTS orders (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  total_amount DECIMAL(10,2) NOT NULL,
  status VARCHAR(20) DEFAULT 'pending',
  shipping_address TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Order items table
CREATE TABLE IF NOT EXISTS order_items (
  id SERIAL PRIMARY KEY,
  order_id INTEGER REFERENCES orders(id),
  product_id INTEGER REFERENCES products(id),
  quantity INTEGER NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample products
INSERT INTO products (name, description, series, status, stock, price) VALUES
('Wild Strawberry Ice', 'Bursting with the sweet flavor of wild strawberries, this refreshing vape is perfectly balanced by a cool exhale.', 'SIC! SALTS', 'active', 150, 12.99),
('Raspberry Ice', 'Indulge in the irresistible flavor of juicy raspberries, perfectly complemented by a touch of cooler.', 'SIC! SALTS', 'active', 200, 12.99),
('Cherry Ice', 'Experience the bold, sweet taste of cherries with a frosty finish, vibrant flavor that lingers with every puff.', 'SIC! SALTS', 'active', 180, 12.99),
('Strawberry Mojito', 'A perfect blend of sweet strawberries and refreshing mojito, offering a vibrant, fruity flavor with a minty kick.', 'MOJITO', 'active', 120, 13.99),
('Green Tea Ice', 'Fragrant green tea leaves combined with a cooling sensation, delicate and nuanced flavor profile.', 'THEA', 'active', 100, 13.99),
('Elderflower Lychee Ice', 'Delicate elderflower blends with sweet lychee, creating a refreshing and floral flavor with a fruity twist.', 'DUPLEX', 'active', 90, 14.99);

-- Insert admin user (password: admin123 - change this!)
INSERT INTO users (email, password_hash, role) VALUES
('admin@sicsalts.com', '$2b$10$rQZ8K9mN2pL3oI4uY5vW6eR7tY8uI9oP0aS1dF2gH3jK4lM5nB6cV7xZ8', 'admin');
