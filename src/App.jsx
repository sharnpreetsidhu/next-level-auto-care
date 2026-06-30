import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Packages />
      <OurWork />
      <Process />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-wrap">
        <img src="/images/logo.jpg" alt="Next Level Auto Care logo" />
        <span>Next Level Auto Care</span>
      </div>

      <div className="nav-links">
        <a href="#services">Services</a>
        <a href="#packages">Packages</a>
        <a href="#work">Our Work</a>
        <a href="#contact">Book Now</a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <p className="eyebrow">Mobile Auto Detailing</p>
          <h1>Premium Detailing That Comes To You</h1>
          <p>
            Ceramic coating, paint correction, customization, and professional
            mobile detailing for vehicles that deserve a cleaner, glossier finish.
          </p>

          <div className="hero-buttons">
            <a href="tel:7783255428" className="btn primary">
              Call Now
            </a>
            <a href="#work" className="btn secondary">
              See Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      title: 'Ceramic Coating',
      text: 'Long-lasting paint protection with a glossy finish that helps protect your vehicle and makes future washes easier.',
    },
    {
      title: 'Paint Correction',
      text: 'Removes swirl marks, light scratches, oxidation, and dullness to restore shine, depth, and clarity.',
    },
    {
      title: 'Interior Detailing',
      text: 'Deep cleaning for seats, carpets, mats, plastics, cup holders, panels, and high-touch surfaces.',
    },
    {
      title: 'Exterior Detailing',
      text: 'Foam wash, wheel cleaning, tire dressing, paint decontamination, and a clean finished look.',
    },
    {
      title: 'Mobile Detailing',
      text: 'We come to your home, workplace, or location so you do not have to waste time waiting at a shop.',
    },
    {
      title: 'Customization',
      text: 'Finishing touches and appearance upgrades to help your vehicle stand out.',
    },
  ];

  return (
    <section className="section" id="services">
      <p className="eyebrow center">What We Do</p>
      <h2>Detailing Services</h2>
      <p className="section-subtitle">
        Everything your vehicle needs to look cleaner, sharper, and better protected.
      </p>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Packages() {
  const packages = [
    {
      name: 'Maintenance Detail',
      description: 'Best for vehicles that need a regular clean and refresh.',
      items: ['Exterior hand wash', 'Interior wipe down', 'Vacuum', 'Windows cleaned'],
    },
    {
      name: 'Deep Detail',
      description: 'Best for vehicles that need a full interior and exterior reset.',
      items: ['Deep interior clean', 'Foam wash', 'Wheels and tires', 'Paint decontamination'],
    },
    {
      name: 'Paint Protection',
      description: 'Best for gloss, shine, and longer-lasting protection.',
      items: ['Paint correction options', 'Ceramic coating', 'Gloss enhancement', 'Long-term protection'],
    },
  ];

  return (
    <section className="packages-section" id="packages">
      <p className="eyebrow center">Choose Your Detail</p>
      <h2>Popular Packages</h2>

      <div className="packages-grid">
        {packages.map((pkg, index) => (
          <div className="package-card" key={index}>
            <h3>{pkg.name}</h3>
            <p>{pkg.description}</p>

            <ul>
              {pkg.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
function OurWork() {
  const images = [
    {
      src: '/images/work-1.png',
      title: 'Auto detailing work 1',
    },
    {
      src: '/images/work-2.png',
      title: 'Auto detailing work 2',
    },
    {
      src: '/images/work-3.png',
      title: 'Auto detailing work 3',
    },
    {
      src: '/images/work-4.png',
      title: 'Auto detailing work 4',
    },
    {
      src: '/images/work-5.png',
      title: 'Auto detailing work 5',
    },
    {
      src: '/images/work-6.png',
      title: 'Auto detailing work 6',
    },
    {
      src: '/images/work-7.png',
      title: 'Auto detailing work 7',
    },
    {
      src: '/images/work-8.png',
      title: 'Auto detailing work 8',
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [isImageOpen, setIsImageOpen] = useState(false);

  function nextSlide() {
    setCurrentImage((currentImage + 1) % images.length);
  }

  function previousSlide() {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  }

  function nextModalImage(event) {
    event.stopPropagation();
    nextSlide();
  }

  function previousModalImage(event) {
    event.stopPropagation();
    previousSlide();
  }

  return (
    <section className="section work-section" id="work">
      <p className="eyebrow center">Results Matter</p>
      <h2>Our Work</h2>
      <p className="section-subtitle">
        View recent detailing, paint correction, ceramic coating, and mobile detailing work.
      </p>

      <div className="slideshow">
        <button className="slide-btn left" onClick={previousSlide}>
          ‹
        </button>

        <div className="slide-image-wrap">
          <img
            src={images[currentImage].src}
            alt={images[currentImage].title}
            onClick={() => setIsImageOpen(true)}
            className="clickable-slide"
          />

          <div className="slide-caption">
            <p>
              {currentImage + 1} / {images.length}
            </p>
          </div>
        </div>

        <button className="slide-btn right" onClick={nextSlide}>
          ›
        </button>
      </div>

      <div className="dots">
        {images.map((image, index) => (
          <button
            key={index}
            className={currentImage === index ? 'dot active' : 'dot'}
            onClick={() => setCurrentImage(index)}
          ></button>
        ))}
      </div>

      {isImageOpen && (
        <div className="image-modal" onClick={() => setIsImageOpen(false)}>
          <button className="close-modal" onClick={() => setIsImageOpen(false)}>
            ×
          </button>

          <button className="modal-arrow modal-left" onClick={previousModalImage}>
            ‹
          </button>

          <img
            src={images[currentImage].src}
            alt={images[currentImage].title}
            onClick={(event) => event.stopPropagation()}
          />

          <button className="modal-arrow modal-right" onClick={nextModalImage}>
            ›
          </button>

          <div className="modal-counter">
            {currentImage + 1} / {images.length}
          </div>
        </div>
      )}
    </section>
  );
}

function Process() {
  return (
    <section className="process-section">
      <p className="eyebrow center">How It Works</p>
      <h2>Simple Booking Process</h2>

      <div className="process-grid">
        <div>
          <span>01</span>
          <h3>Call or Text</h3>
          <p>Tell us what vehicle you have and what service you need.</p>
        </div>

        <div>
          <span>02</span>
          <h3>Get a Quote</h3>
          <p>We recommend the right detail or protection package.</p>
        </div>

        <div>
          <span>03</span>
          <h3>We Come To You</h3>
          <p>Your vehicle gets detailed at your home, workplace, or location.</p>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="why-section">
      <div className="why-content">
        <p className="eyebrow">Why Us</p>
        <h2>Clean Results. Careful Work. Mobile Convenience.</h2>
        <p>
          Next Level Auto Care is built for customers who want their vehicle looking
          sharp without the hassle of dropping it off at a shop. We focus on quality
          workmanship, paint-safe methods, and clean results.
        </p>

        <div className="why-points">
          <div>
            <h3>Mobile Service</h3>
            <p>We come directly to your location.</p>
          </div>

          <div>
            <h3>Gloss & Protection</h3>
            <p>Services designed to improve shine and protect your finish.</p>
          </div>

          <div>
            <h3>Attention To Detail</h3>
            <p>Careful cleaning inside and outside your vehicle.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <p className="eyebrow center">Book Now</p>
      <h2>Ready For A Cleaner Vehicle?</h2>
      <p>
        Call or text today to book mobile detailing, ceramic coating, paint correction,
        or customization.
      </p>

      <a href="tel:7783255428" className="phone-link">
        778-325-5428
      </a>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p>© 2026 Next Level Auto Care. All rights reserved.</p>
    </footer>
  );
}

export default App;