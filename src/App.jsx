import { useEffect, useState } from 'react';
import './App.css';



function App() {
  return (
    <div>
      <ScrollReveal />
      <Navbar />
      <Hero />
      <Services />
      <Packages />
      <OurWork />
      <Process />
      <WhyChooseUs />
      <Booking />
      <Contact />
      <Footer />
    </div>
  );
}

function ScrollReveal() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => {
      revealElements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return null;
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
        <a href="#booking">Book Now</a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero">
      <video
  className="hero-video"
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
  onCanPlay={(event) => event.currentTarget.play().catch(() => {})}
>
  <source src="/videos/hero-video.mp4" type="video/mp4" />
</video>

      <div className="hero-overlay">
        <div className="hero-content">
          <p className="eyebrow">Mobile Auto Detailing</p>
          <h1>Premium Detailing That Comes To You</h1>
          <p>
            Ceramic coating, paint correction, customization, and professional
            mobile detailing for vehicles that deserve a cleaner, glossier finish.
          </p>

          <div className="hero-buttons">
  <a href="#booking" className="btn primary">
    Book Now
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
    <section className="section reveal" id="services">
      <p className="eyebrow center">What We Do</p>
      <h2>Detailing Services</h2>
      <p className="section-subtitle">
        Everything your vehicle needs to look cleaner, sharper, and better protected.
      </p>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card reveal" key={index}>
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
    <section className="packages-section reveal" id="packages">
      <p className="eyebrow center">Choose Your Detail</p>
      <h2>Popular Packages</h2>

      <div className="packages-grid">
        {packages.map((pkg, index) => (
          <div className="package-card reveal" key={index}>
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
function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <div className="before-after-card">
      <div className="before-after-slider">
        <img
          src="/images/porsche-after.jpeg"
          alt="After detailing"
          className="compare-image after-image"
        />

        <img
          src="/images/porsche-before.png"
          alt="Before detailing"
          className="compare-image before-image"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        />

        <div
          className="slider-line"
          style={{ left: `${sliderPosition}%` }}
        ></div>

        <span className="before-label">Before</span>
        <span className="after-label">After</span>

        <div className="bottom-slider-track">
          <div
            className="bottom-slider-fill"
            style={{ width: `${sliderPosition}%` }}
          ></div>

          <div
            className="bottom-slider-handle"
            style={{ left: `${sliderPosition}%` }}
          ></div>
        </div>

        <input
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={(event) => setSliderPosition(event.target.value)}
          className="slider-input"
          aria-label="Before and after image slider"
        />
      </div>
    </div>
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
    <section className="section work-section reveal" id="work">
      <p className="eyebrow center">Results Matter</p>
      <h2>Our Work</h2>
      <p className="section-subtitle">
  View recent detailing, paint correction, ceramic coating, and mobile detailing work.
</p>

<BeforeAfterSlider />

<div className="slideshow reveal">

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
    <section className="process-section reveal">
      <p className="eyebrow center">How It Works</p>
      <h2>Simple Booking Process</h2>

      <div className="process-grid">
  <div className="reveal">
    <span>01</span>
    <h3>Call or Text</h3>
    <p>Tell us what vehicle you have and what service you need.</p>
  </div>

  <div className="reveal">
    <span>02</span>
    <h3>Get a Quote</h3>
    <p>We recommend the right detail or protection package.</p>
  </div>

  <div className="reveal">
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
    <section className="why-section reveal">
      <div className="why-content">
        <p className="eyebrow">Why Us</p>
        <h2>Clean Results. Careful Work. Mobile Convenience.</h2>
        <p>
          Next Level Auto Care is built for customers who want their vehicle looking
          sharp without the hassle of dropping it off at a shop. We focus on quality
          workmanship, paint-safe methods, and clean results.
        </p>

     <div className="why-points">
  <div className="reveal">
    <h3>Mobile Service</h3>
    <p>We come directly to your location.</p>
  </div>

  <div className="reveal">
    <h3>Gloss & Protection</h3>
    <p>Services designed to improve shine and protect your finish.</p>
  </div>

  <div className="reveal">
    <h3>Attention To Detail</h3>
    <p>Careful cleaning inside and outside your vehicle.</p>
  </div>
</div>

      </div>
    </section>
  );
}
function Booking() {
  const [result, setResult] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    setResult('Sending...');

    const formData = new FormData(event.target);
    formData.append('access_key', 'c2169b3a-583e-4cfb-8122-fada5070ca61');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Thanks! Your booking request was sent. We'll contact you shortly.");
        event.target.reset();
      } else {
        setResult('Something went wrong. Please call or text us instead.');
      }
    } catch {
      setResult('Something went wrong. Please call or text us instead.');
    }
  }

  return (
    <section className="booking-section reveal" id="booking">
      <div className="booking-content">
        <p className="eyebrow center">Booking Request</p>
        <h2>Request a Detail</h2>
        <p className="section-subtitle">
          Tell us about your vehicle and the service you need. We’ll contact you
          to confirm pricing, availability, and location.
        </p>

        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Name</label>
              <input type="text" name="name" placeholder="Your name" required />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" name="phone" placeholder="778-000-0000" required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" placeholder="you@email.com" required />
            </div>

            <div className="form-group">
              <label>Vehicle</label>
              <input
                type="text"
                name="vehicle"
                placeholder="Year, make, model"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Service Needed</label>
              <select name="service" required>
                <option value="">Select a service</option>
                <option value="Interior Detail">Interior Detail</option>
                <option value="Exterior Detail">Exterior Detail</option>
                <option value="Full Detail">Full Detail</option>
                <option value="Paint Correction">Paint Correction</option>
                <option value="Ceramic Coating">Ceramic Coating</option>
                <option value="Not Sure">Not Sure</option>
              </select>
            </div>

            <div className="form-group">
              <label>Location / City</label>
              <input type="text" name="location" placeholder="Surrey, Delta, Langley..." required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Preferred Date</label>
              <input type="date" name="preferred_date" />
            </div>

            <div className="form-group">
              <label>Preferred Time</label>
              <input type="time" name="preferred_time" />
            </div>
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Tell us about the vehicle condition, stains, pet hair, coating needs, etc."
            ></textarea>
          </div>

          <button type="submit" className="btn primary booking-btn">
            Submit Booking Request
          </button>

          {result && <p className="form-result">{result}</p>}
        </form>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section reveal" id="contact">
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
      <p className="made-by">
        Website by <span>Pacific Tech Solutions</span>
      </p>
    </footer>
  );
}

export default App;
