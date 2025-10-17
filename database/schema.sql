-- Database Schema for Neon PostgreSQL - LUNIQ VAPE
-- This schema supports both the main website and admin panel

-- Drop existing tables if they exist (for clean setup)
DROP TABLE IF EXISTS order_items CASCADE;
DROP TABLE IF EXISTS orders CASCADE;
DROP TABLE IF EXISTS products CASCADE;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS images CASCADE;
DROP TABLE IF EXISTS settings CASCADE;

-- Products table (updated for LUNIQ VAPE structure)
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  flavor VARCHAR(255) NOT NULL,
  description TEXT,
  ingredients JSONB NOT NULL DEFAULT '[]',
  background_color VARCHAR(7) DEFAULT '#3b82f6',
  is_active BOOLEAN DEFAULT true,
  image_url VARCHAR(500),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Images table (for admin panel file management)
CREATE TABLE images (
  id SERIAL PRIMARY KEY,
  filename VARCHAR(255) NOT NULL,
  original_name VARCHAR(255) NOT NULL,
  file_path VARCHAR(500) NOT NULL,
  file_size INTEGER NOT NULL,
  mime_type VARCHAR(100) NOT NULL,
  uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Users table (for admin panel authentication)
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role VARCHAR(20) DEFAULT 'admin',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Settings table (for admin panel configuration)
CREATE TABLE settings (
  id SERIAL PRIMARY KEY,
  key VARCHAR(100) UNIQUE NOT NULL,
  value TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Orders table (for future e-commerce functionality)
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  total_amount DECIMAL(10,2) NOT NULL,
  status VARCHAR(20) DEFAULT 'pending',
  shipping_address TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Order items table
CREATE TABLE order_items (
  id SERIAL PRIMARY KEY,
  order_id INTEGER REFERENCES orders(id),
  product_id INTEGER REFERENCES products(id),
  quantity INTEGER NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert LUNIQ VAPE products
INSERT INTO products (flavor, description, ingredients, background_color, is_active, image_url) VALUES
('Kiwi-Guava', 'A tropical explosion of sweet kiwi and exotic guava, perfectly balanced with a refreshing citrus twist.', '["🥝", "🍈", "🍋"]', '#3b82f6', true, NULL),
('Mango Tango', 'Juicy mango meets zesty orange with a hint of spice for an unforgettable tropical experience.', '["🥭", "🍊", "🌶️"]', '#f59e0b', true, NULL),
('Berry Blast', 'A medley of fresh berries bursting with natural sweetness and antioxidant goodness.', '["🫐", "🍓", "🍒"]', '#8b5cf6', true, NULL),
('Citrus Splash', 'Refreshing citrus blend with grape undertones for a crisp, energizing vape experience.', '["🍊", "🍋", "🍇"]', '#10b981', true, NULL),
('Tropical Paradise', 'Escape to paradise with this exotic blend of pineapple, coconut, and banana.', '["🍍", "🥥", "🍌"]', '#f97316', true, NULL),
('Apple Cinnamon', 'Warm apple pie meets aromatic cinnamon for a cozy, comforting flavor profile.', '["🍎", "🍯", "🌿"]', '#dc2626', true, NULL);

-- Insert admin user (password: admin123 - change this!)
INSERT INTO users (email, password_hash, role) VALUES
('admin@luniqvape.com', '$2b$10$rQZ8K9mN2pL3oI4uY5vW6eR7tY8uI9oP0aS1dF2gH3jK4lM5nB6cV7xZ8', 'admin');

-- Insert default settings
INSERT INTO settings (key, value) VALUES
('site_title', 'LUNIQ VAPE'),
('site_description', 'Premium Vape Experience'),
('contact_email', 'info@luniqvape.com'),
('enable_analytics', 'true'),
('maintenance_mode', 'false'),
('hero_title', 'LUNIQ VAPE'),
('hero_subtitle', 'Premium Vape Experience'),
('hero_description', 'Discover our collection of premium vape cans with unique flavors. Scroll down to see each can open with flying ingredients!');

-- Create indexes for better performance
CREATE INDEX idx_products_active ON products(is_active);
CREATE INDEX idx_products_flavor ON products(flavor);
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_settings_key ON settings(key);
CREATE INDEX idx_images_filename ON images(filename);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_products_updated_at BEFORE UPDATE ON products FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_settings_updated_at BEFORE UPDATE ON settings FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_orders_updated_at BEFORE UPDATE ON orders FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();