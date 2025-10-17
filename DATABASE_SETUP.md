# LUNIQ VAPE - Database Setup Guide

## 🗄️ Database Setup Instructions

### Step 1: Create Neon Database
1. Go to [neon.tech](https://neon.tech) and create an account
2. Create a new project called "luniq-vape"
3. Copy your database connection string

### Step 2: Run Database Schema
1. Open your Neon SQL editor
2. Copy and paste the entire contents of `database/schema.sql`
3. Execute the SQL to create all tables and insert sample data

### Step 3: Environment Variables
1. Copy `env.example` to `.env.local` in both projects:
   - Main website: `project_website_vaping/.env.local`
   - Admin panel: `project_website_vaping_admin/.env.local`

2. Update the `DATABASE_URL` with your Neon connection string:
   ```
   DATABASE_URL=postgresql://username:password@hostname:port/database_name
   ```

### Step 4: Deploy Both Projects
1. **Main Website**: Deploy to Vercel with environment variables
2. **Admin Panel**: Deploy to Vercel with environment variables

## 🔄 How Admin Panel Controls Main Website

### Database Structure
- **Products Table**: Stores all vape can flavors and details
- **Images Table**: Manages uploaded product images
- **Settings Table**: Controls site-wide settings
- **Users Table**: Admin authentication

### Admin Panel Features
- ✅ **Product Management**: Add/edit/delete vape flavors
- ✅ **Image Upload**: Upload product images
- ✅ **Settings Control**: Change site title, description, etc.
- ✅ **Real-time Updates**: Changes appear immediately on main site

### Main Website Features
- ✅ **Dynamic Content**: Reads products from database
- ✅ **Fallback System**: Uses mock data if database fails
- ✅ **Real-time Display**: Shows admin changes instantly

## 🚀 Deployment Checklist

### Main Website (`project_website_vaping`)
- [ ] Set `DATABASE_URL` environment variable
- [ ] Deploy to Vercel
- [ ] Test product display

### Admin Panel (`project_website_vaping_admin`)
- [ ] Set `DATABASE_URL` environment variable
- [ ] Set `ADMIN_EMAIL` and `ADMIN_PASSWORD`
- [ ] Deploy to Vercel
- [ ] Test admin login

### Database
- [ ] Run schema.sql in Neon
- [ ] Verify tables created
- [ ] Test connection from both sites

## 🔧 Admin Panel Capabilities

Once set up, you can:
1. **Login** to admin panel with `admin@luniqvape.com` / `admin123`
2. **Add New Products**: Create new vape flavors with ingredients
3. **Edit Existing Products**: Change descriptions, colors, ingredients
4. **Upload Images**: Add product photos
5. **Manage Settings**: Change site title, contact info, etc.
6. **View Analytics**: See product performance

## 📱 Testing the Connection

1. **Main Website**: Visit your main site - should show LUNIQ VAPE products
2. **Admin Panel**: Login and add a new product
3. **Check Main Site**: Refresh - new product should appear immediately
4. **Edit Product**: Change description in admin panel
5. **Verify Update**: Check main site shows updated content

## 🆘 Troubleshooting

### Database Connection Issues
- Verify `DATABASE_URL` is correct
- Check Neon database is running
- Ensure tables exist (run schema.sql)

### Admin Panel Issues
- Check `next.config.js` doesn't have deprecated options
- Verify all dependencies installed
- Check environment variables set

### Main Website Issues
- Verify API routes work (`/api/products`)
- Check database connection in API
- Ensure fallback mock data works

## 📞 Support

If you need help:
1. Check the logs in Vercel dashboard
2. Verify environment variables are set
3. Test database connection separately
4. Check both repositories are deployed correctly
