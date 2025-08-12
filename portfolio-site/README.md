# Kofi Green's Farm Portfolio Website

A responsive, modern portfolio website for Kofi Green, a fictional organic farmer from Ghana. Built with React, featuring interactive components, responsive design, and a clean user interface.

## 🌟 Features

### Home Page
- **Hero Section**: Eye-catching background image with compelling call-to-action
- **Featured Products/Services**: Showcase of key offerings with hover effects
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Call-to-Action**: Direct link to explore products

### Products Page
- **Product Grid**: Beautiful card-based layout showcasing farm products
- **Search Functionality**: Real-time search filtering by product name
- **Category Filtering**: Dropdown to filter by product categories
- **Responsive Cards**: Hover effects and consistent styling

### Contact Page
- **Contact Form**: Name, email, and message fields with validation
- **Form Validation**: Real-time error messages and input validation
- **Google Maps Integration**: Embedded map showing farm location
- **Success Feedback**: Confirmation message after form submission

### Technical Features
- **Dark/Light Mode Toggle**: Theme switching functionality
- **React Hooks**: useState for state management
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
- **Modern UI/UX**: Clean, professional design with smooth animations

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Kojo_farm_portfolio/portfolio-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🛠️ Built With

- **React 18** - Frontend framework
- **React Router** - Navigation and routing
- **CSS3** - Styling and responsive design
- **JavaScript ES6+** - Modern JavaScript features
- **HTML5** - Semantic markup

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🎨 Design Features

- **Color Scheme**: Green-based theme representing nature and farming
- **Typography**: Clean, readable fonts with proper hierarchy
- **Animations**: Smooth hover effects and transitions
- **Cards**: Modern card design with shadows and hover effects
- **Forms**: User-friendly input fields with validation feedback

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx      # Navigation header
│   ├── Footer.jsx      # Site footer
│   └── ProductCard.jsx # Product display component
├── pages/              # Main page components
│   ├── Home.jsx        # Home page with hero and featured sections
│   ├── Products.jsx    # Products listing with filters
│   └── Contact.jsx     # Contact form and map
├── data/               # Static data
│   └── products.js     # Product information
├── context/            # React context
│   └── ThemeContext.js # Theme management
└── App.jsx             # Main application component
```

## 🔧 Customization

### Adding New Products
Edit `src/data/products.js` to add new products:
```javascript
{
  id: 7,
  name: 'New Product',
  price: 19.99,
  category: 'Category',
  image: '/images/product.jpg',
  description: 'Product description'
}
```

### Styling
- CSS files are organized by component
- Global styles in `src/index.css`
- Component-specific styles in respective `.css` files

### Images
Place new images in the `public/images/` directory and reference them with `/images/filename.ext`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to GitHub Pages
1. Add homepage to package.json: `"homepage": "https://username.github.io/repo-name"`
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add deploy scripts to package.json
4. Run `npm run deploy`

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Developer

Built as a portfolio project demonstrating React skills and modern web development practices.


**Note**: This is a fictional portfolio website created for demonstration purposes. All products, images, and content are for showcase only.
