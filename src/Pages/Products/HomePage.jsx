import "./HomePage.css";

const flashSales = [
  { id: 1, img: "/g92-2-500x500 1.png", name: "HAVIT HV-G92 Gamepad", price: 120, oldPrice: 160, discount: "-40%", rating: 4 },
  { id: 2, img: "/ak-900-01-500x500 1.png", name: "AK-900 Wired Keyboard", price: 960, oldPrice: 1160, discount: "-35%", rating: 5 },
  { id: 3, img: "/g27cq4-500x500 1.png", name: "IPS LCD Gaming Monitor", price: 370, oldPrice: 400, discount: "-30%", rating: 5 },
  { id: 4, img: "/sam-moghadam-khamseh-L_7MQsHl_aU-unsplash 1.png", name: "S-Series Comfort Chair", price: 375, oldPrice: 400, discount: "-25%", rating: 4.5 },
];

const bestSelling = [
  { id: 1, img: "/672462_ZAH9D_5626_002_100_0000_Light-The-North-Face-x-Gucci-coat 1.png", name: "The north coat", price: 260, oldPrice: 360, rating: 5 },
  { id: 2, img: "/547953_9C2ST_8746_001_082_0000_Light-Gucci-Savoy-medium-duffle-bag 1.png", name: "Gucci duffle bag", price: 960, oldPrice: 1160, rating: 4.5 },
  { id: 3, img: "/gammaxx-l240-argb-1-500x500 1.png", name: "RGB liquid CPU Cooler", price: 160, oldPrice: 170, rating: 4.5 },
  { id: 4, img: "/652e82cd70aa6522dd785109a455904c.png", name: "Small BookSelf", price: 360, oldPrice: null, rating: 5 },
];

const exploreProducts = [
  { id: 1, img: "/698717_Z8A1X_3475_001_100_0000_Light-Reversible-quilted-satin-jacket 1.png", name: "Quilted Satin Jacket", price: 660, rating: 4.5 },
  { id: 2, img: "/ideapad-gaming-3i-01-500x500 1.png", name: "ASUS FHD Gaming Laptop", price: 700, rating: 5 },
  { id: 3, img: "/New-Mercedes-Benz-Gtr-Licensed-Ride-on-Car-Kids-Electric-Toy-Car 1.png", name: "Kids Electric Car", price: 960, rating: 5, badge: "New" },
  { id: 4, img: "/g92-2-500x500 1.png", name: "GP11 Shooter USB Gamepad", price: 660, rating: 4.5, badge: "New" },
];

const features = [
  { icon: "/Services (2).png", title: "FREE AND FAST DELIVERY", desc: "Free delivery for all orders over $140" },
  { icon: "/Services (3).png", title: "24/7 CUSTOMER SERVICE", desc: "Friendly 24/7 customer support" },
  { icon: "/Services (4).png", title: "MONEY BACK GUARANTEE", desc: "We reurn money within 30 days" },
];

function StarRating({ rating }) {
  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((i) => (
        <i key={i} className={`bi ${i <= Math.round(rating) ? "bi-star-fill" : "bi-star"}`}></i>
      ))}
    </div>
  );
}

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        {product.discount && <span className="badge-discount">{product.discount}</span>}
        {product.badge && <span className="badge-new">{product.badge}</span>}
        <div className="product-actions">
          <i className="bi bi-heart"></i>
          <i className="bi bi-eye"></i>
        </div>
        <img src={product.img} alt={product.name} />
        <button className="add-to-cart-overlay">Add To Cart</button>
      </div>
      <div className="product-info">
        <h6>{product.name}</h6>
        <div className="product-price">
          <span className="price-current">${product.price}</span>
          {product.oldPrice && <span className="price-old">${product.oldPrice}</span>}
        </div>
        <StarRating rating={product.rating} />
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <div className="homepage">
      <div className="container">

        {/* Hero Section */}
        <div className="row hero-section">
          <div className="col-lg-3 d-none d-lg-block">
            <ul className="sidebar-categories">
              <li>Woman's Fashion <i className="bi bi-chevron-right"></i></li>
              <li>Men's Fashion <i className="bi bi-chevron-right"></i></li>
              <li>Electronics</li>
              <li>Home & Lifestyle</li>
              <li>Medicine</li>
              <li>Sports & Outdoor</li>
              <li>Baby's & Toys</li>
              <li>Groceries & Pets</li>
              <li>Health & Beauty</li>
            </ul>
          </div>

          <div className="col-lg-9">
            <div className="hero-banner">
              <div className="hero-text">
                <p className="hero-label">
                  <i className="bi bi-apple"></i> iPhone 14 Series
                </p>
                <h2>Up to 10% off Voucher</h2>
                <a href="#" className="hero-shop-link">
                  Shop Now <i className="bi bi-arrow-right"></i>
                </a>
              </div>
              <img src="/hero_endframe__cvklg0xk3w6e_large 2 (1).png" alt="iphone" className="hero-image" />
            </div>
          </div>
        </div>

        {/* Flash Sales */}
        <section className="product-section">
          <div className="section-header">
            <div>
              <p className="section-label">Today's</p>
              <div className="section-title-row">
                <h2>Flash Sales</h2>
                <div className="countdown">
                  <div><span>03</span><small>Days</small></div>
                  <div><span>23</span><small>Hours</small></div>
                  <div><span>19</span><small>Minutes</small></div>
                  <div><span>56</span><small>Seconds</small></div>
                </div>
              </div>
            </div>
            <div className="section-arrows">
              <i className="bi bi-arrow-left"></i>
              <i className="bi bi-arrow-right"></i>
            </div>
          </div>

          <div className="row">
            {flashSales.map((p) => (
              <div className="col-lg-3 col-md-6 col-6" key={p.id}>
                <ProductCard product={p} />
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <button className="btn view-all-btn">View All Products</button>
          </div>
        </section>

        <hr className="section-divider" />

        {/* Categories */}
        <section className="product-section">
          <div className="section-header">
            <div>
              <p className="section-label">Categories</p>
              <h2>Browse By Category</h2>
            </div>
            <div className="section-arrows">
              <i className="bi bi-arrow-left"></i>
              <i className="bi bi-arrow-right"></i>
            </div>
          </div>

          <div className="row">
            {[
              { name: "Phones", icon: "bi-phone" },
              { name: "Computers", icon: "bi-laptop" },
              { name: "SmartWatch", icon: "bi-smartwatch" },
              { name: "Camera", icon: "bi-camera" },
              { name: "HeadPhones", icon: "bi-headphones" },
              { name: "Gaming", icon: "bi-controller" },
            ].map((cat, index) => (
              <div className="col-lg-2 col-md-4 col-4" key={index}>
                <div className="category-card">
                  <i className={`bi ${cat.icon}`}></i>
                  <p>{cat.name}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="section-divider" />

        {/* Best Selling */}
        <section className="product-section">
          <div className="section-header">
            <div>
              <p className="section-label">This Month</p>
              <h2>Best Selling Products</h2>
            </div>
            <button className="btn view-all-btn">View All</button>
          </div>

          <div className="row">
            {bestSelling.map((p) => (
              <div className="col-lg-3 col-md-6 col-6" key={p.id}>
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </section>

        {/* Music Banner */}
        <section className="music-banner">
          <div className="music-text">
            <p className="music-label">Categories</p>
            <h2>Enhance Your Music Experience</h2>
            <div className="countdown light">
              <div><span>05</span><small>Days</small></div>
              <div><span>23</span><small>Hours</small></div>
              <div><span>59</span><small>Minutes</small></div>
              <div><span>35</span><small>Seconds</small></div>
            </div>
            <button className="btn buy-now-btn">Buy Now!</button>
          </div>
          <img src="/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png" alt="speaker" className="music-image" />
        </section>

        {/* Explore Products */}
        <section className="product-section">
          <div className="section-header">
            <div>
              <p className="section-label">Our Products</p>
              <h2>Explore Our Products</h2>
            </div>
            <div className="section-arrows">
              <i className="bi bi-arrow-left"></i>
              <i className="bi bi-arrow-right"></i>
            </div>
          </div>

          <div className="row">
            {exploreProducts.map((p) => (
              <div className="col-lg-3 col-md-6 col-6" key={p.id}>
                <ProductCard product={p} />
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <button className="btn view-all-btn">View All Products</button>
          </div>
        </section>

        <hr className="section-divider" />

        {/* New Arrival */}
        <section className="product-section">
          <div className="section-header">
            <div>
              <p className="section-label">Featured</p>
              <h2>New Arrival</h2>
            </div>
          </div>

          <div className="row new-arrival-row">
            <div className="col-lg-6">
              <div className="arrival-card large">
                <img src="/ps5-slim-goedkope-playstation_large 1.png" alt="playstation" />
                <div className="arrival-overlay">
                  <h4>PlayStation 5</h4>
                  <p>Black and White version of the PS5 coming out on sale.</p>
                  <a href="#">Shop Now</a>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="arrival-card">
                <img src="/attractive-woman-wearing-hat-posing-black-background 1.png" alt="women collection" />
                <div className="arrival-overlay">
                  <h4>Women's Collections</h4>
                  <p>Featured woman collections that give you another vibe.</p>
                  <a href="#">Shop Now</a>
                </div>
              </div>

              <div className="row">
                <div className="col-6">
                  <div className="arrival-card small">
                    <img src="/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1.png" alt="speakers" />
                    <div className="arrival-overlay">
                      <h4>Speakers</h4>
                      <p>Amazon wireless speakers</p>
                      <a href="#">Shop Now</a>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="arrival-card small">
                    <img src="/652e82cd70aa6522dd785109a455904c.png" alt="perfume" />
                    <div className="arrival-overlay">
                      <h4>Perfume</h4>
                      <p>GUCCI INTENSE OUD EDP</p>
                      <a href="#">Shop Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <div className="row features-section">
          {features.map((feature, index) => (
            <div className="col-md-4" key={index}>
              <div className="feature-card">
                <div className="feature-icon">
                  <img src={feature.icon} alt="" />
                </div>
                <h5>{feature.title}</h5>
                <p>{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default HomePage;
