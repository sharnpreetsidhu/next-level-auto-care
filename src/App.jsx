import { useEffect, useState } from 'react';
import './App.css';



function App() {
  const [selectedService, setSelectedService] = useState(null);

if (selectedService) {
  return (
    <ServiceDetailPage
      service={selectedService}
      onBack={() => setSelectedService(null)}
    />
  );
}
  return (
    <div>
      <ScrollReveal />
      <Navbar />
      <Hero />
      <Packages />
      <OurWork />
      <WhyChooseUs />
      <Booking />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}

function ServiceDetailPage({ service, onBack }) {
  return (
    <main className="service-detail-page">
      <button className="back-button" onClick={onBack}>
        ← Back to Services
      </button>

      <section className="service-detail-hero">
        <p className="eyebrow center">Service Details</p>
        <h1>{service.title}</h1>
        <p>{service.text}</p>
      </section>

      <section className="service-detail-grid">
        <div className="detail-panel">
          <h3>{service.title} Includes</h3>
          <ul>
            {service.includes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="detail-panel">
          <h3>Good To Know</h3>
          <ul>
            <li>Prices may vary based on vehicle size and condition.</li>
            <li>Extra charges may apply for heavy dirt, stains, pet hair, or mold.</li>
            <li>Mobile detailing may include an additional travel fee.</li>
            <li>Call or text for the most accurate quote.</li>
          </ul>
        </div>
      </section>

      <section className="detail-section">
        <h2>Base Pricing</h2>
        <p>Pricing depends on vehicle type and condition.</p>

        <div className="pricing-card-grid">
          {service.pricing.map(([label, price]) => (
            <div className="mini-price-card" key={label}>
              <span>{label}</span>
              <strong>{price}</strong>
            </div>
          ))}
        </div>
      </section>

      {service.addons && service.addons.length > 0 && (
  <section className="detail-section">
    <h2>Add-On Services</h2>
    <p>Ask about extras when booking your detail.</p>

    <div className="addon-list">
      {service.addons.map(([label, price]) => (
        <div className="addon-row" key={label}>
          <span>{label}</span>
          <strong>{price}</strong>
        </div>
      ))}
    </div>
  </section>
)}
<>
  {service.showPriceNote !== false && (
    <section className="price-note-box">
      <h3>Prices May Vary Based On:</h3>
      <ul>
        <li>Pet hair</li>
        <li>Sap, moss, or algae on the exterior</li>
        <li>Mold growth</li>
        <li>Stains</li>
        <li>Dirt level and overall vehicle condition</li>
      </ul>
    </section>
  )}

  <section className="quote-cta-box">
    <h3>Want an exact quote?</h3>
    <p>
      Send a quick request and we’ll confirm pricing based on your vehicle and service.
    </p>

    <button
      type="button"
      className="quote-button"
      onClick={() => {
        onBack();

        setTimeout(() => {
          document.getElementById('booking')?.scrollIntoView({
            behavior: 'smooth',
          });
        }, 50);
      }}
    >
      Request a Quote
    </button>
  </section>
</>
    </main>
  );
}

function BackToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setShowButton(window.scrollY > 500);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={showButton ? 'back-to-top show' : 'back-to-top'}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
    >
      ↑
    </button>
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <nav className="navbar">
      <a href="#" className="logo-wrap" onClick={closeMenu}>
        <img src="/images/logo.jpg" alt="Next Level Auto Care logo" />
        <span>Next Level Auto Care</span>
      </a>

      <button
        className={isMenuOpen ? 'menu-toggle active' : 'menu-toggle'}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={isMenuOpen ? 'nav-links open' : 'nav-links'}>
        <a href="#packages" onClick={closeMenu}>Packages</a>
        <a href="#work" onClick={closeMenu}>Our Work</a>
        <a href="#booking" onClick={closeMenu}>Book Now</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
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
          <p className="eyebrow">Professional Auto Detailing</p>
          <h1>Premium Detailing 
            That Comes To You</h1>
          <p>
            Ceramic coating, paint correction, detailing, customization, & more 
            for drivers who expect uncompromising quality.
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


function Packages() {
 const packages = [
  {
    name: ' Maintenance Detail',
    price: 'Starting at $100',
    description: 'A inside-and-out refresh for vehicles that need a clean, simple reset.',
    items: [
      'Exterior hand wash',
      'Interior wipe down',
      'Vacuum',
      'Windows cleaned',
      'Door Jams',
      'Wheels and wheel-wells',
    ],
  },
  {
    name: 'Deap Clean',
    price: 'Starting at $220',
    description: 'A deeper inside-and-out detail for a cleaner, sharper finished look.',
    items: [
      'Deep exterior wash',
      'Enhanced Foam Wash',
      'Steam clean and shampoo',
      'Spray wax',
      'Wheels and Tires',
      'Plus everything from maintenance'
      

    ],
  },
 
  {
  name: 'Ceramic Coating',
  price: 'Starting at $699',
  description: 'Best for restoring gloss, shine, and clarity to your paint.',
  addOnTitle: 'Add ons:',
  addOns: [
    'Wheel Coating',
    'Window Coating',
    'Interior Coating',
    'Trim Coating',
    'Optional 2-step paint correction',
  ],
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
<strong className="package-price">{pkg.price}</strong>

{pkg.items && (
  <ul className="package-items">
    {pkg.items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
)}


{pkg.addOns && (
  <div className="addon-list">
    <p className="addon-title">{pkg.addOnTitle}</p>

    <ul>
      {pkg.addOns.map((addon, index) => (
        <li key={index}>{addon}</li>
      ))}
    </ul>
  </div>
)}
          </div>
        ))}
      </div>
      <p className="package-note">
  *Prices may vary depending on vehicle size and condition.
</p>
    </section>
  );
}


function OurWork() {
  const images = [
    { src: '/images/work-1.jpg', title: 'Auto detailing work 1' },
    { src: '/images/work-2.jpg', title: 'Auto detailing work 2' },
    { src: '/images/work-3.jpg', title: 'Auto detailing work 3' },
    { src: '/images/work-4.jpg', title: 'Auto detailing work 4' },
    { src: '/images/work-5.jpg', title: 'Auto detailing work 5' },
    { src: '/images/work-6.jpg', title: 'Auto detailing work 6' },
    { src: '/images/work-7.jpg', title: 'Auto detailing work 7' },
    { src: '/images/work-8.jpg', title: 'Auto detailing work 8' },
    { src: '/images/work-9.jpg', title: 'Auto detailing work 9' },
    { src: '/images/work-10.jpg', title: 'Auto detailing work 10' },
    { src: '/images/work-11.jpg', title: 'Auto detailing work 11' },
    { src: '/images/work-12.jpg', title: 'Auto detailing work 12' },
    { src: '/images/work-13.jpg', title: 'Auto detailing work 13' },
    { src: '/images/work-14.jpg', title: 'Auto detailing work 14' },
    { src: '/images/work-15.jpg', title: 'Auto detailing work 15' },
    { src: '/images/work-16.jpg', title: 'Auto detailing work 16' },
    { src: '/images/work-17.jpg', title: 'Auto detailing work 17' },
    { src: '/images/work-18.jpg', title: 'Auto detailing work 18' },
    { src: '/images/work-19.jpg', title: 'Auto detailing work 19' },
    { src: '/images/work-20.jpg', title: 'Auto detailing work 20' },
    { src: '/images/work-21.jpg', title: 'Auto detailing work 21' },
    { src: '/images/work-22.jpg', title: 'Auto detailing work 22' },
    { src: '/images/work-23.jpg', title: 'Auto detailing work 23' },
    { src: '/images/work-24.jpg', title: 'Auto detailing work 24' },
    { src: '/images/work-25.jpg', title: 'Auto detailing work 25' },
    { src: '/images/work-26.jpg', title: 'Auto detailing work 26' },
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [isImageOpen, setIsImageOpen] = useState(false);

  // Automatically changes the image every 3.5 seconds.
  useEffect(() => {
    if (isImageOpen) return undefined;

    const timer = setInterval(() => {
      setCurrentImage(
        (previousImage) => (previousImage + 1) % images.length
      );
    }, 3500);

    return () => clearInterval(timer);
  }, [isImageOpen, images.length]);

  // Preloads the next and previous images.
  useEffect(() => {
    const nextIndex = (currentImage + 1) % images.length;
    const previousIndex =
      (currentImage - 1 + images.length) % images.length;

    const nextImage = new Image();
    const previousImage = new Image();

    nextImage.src = images[nextIndex].src;
    previousImage.src = images[previousIndex].src;
  }, [currentImage, images.length]);

  function nextSlide() {
    setCurrentImage(
      (previousImage) => (previousImage + 1) % images.length
    );
  }

  function previousSlide() {
    setCurrentImage(
      (previousImage) =>
        (previousImage - 1 + images.length) % images.length
    );
  }

  function selectImage(index) {
    setCurrentImage(index);
  }

  return (
    <section className="section work-section reveal" id="work">
      <p className="eyebrow center">Results Matter</p>

      <h2>Our Work</h2>

      <p className="section-subtitle">
        View recent detailing, paint correction, ceramic coating, and mobile
        detailing work.
      </p>

      <div className="slideshow reveal">
        <button
          type="button"
          className="slide-btn left"
          onClick={previousSlide}
          aria-label="Previous image"
        >
          ‹
        </button>

        <div className="slide-image-wrap">
          <img
            src={images[currentImage].src}
            alt={images[currentImage].title}
            loading="eager"
            decoding="async"
            onClick={() => setIsImageOpen(true)}
          />
        </div>

        <button
          type="button"
          className="slide-btn right"
          onClick={nextSlide}
          aria-label="Next image"
        >
          ›
        </button>

        <div className="dots">
          {images.map((image, index) => (
            <button
              type="button"
              key={image.src}
              className={currentImage === index ? 'dot active' : 'dot'}
              onClick={() => selectImage(index)}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {isImageOpen && (
        <div
          className="image-modal"
          onClick={() => setIsImageOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Expanded gallery image"
        >
          <button
            type="button"
            className="close-modal"
            onClick={() => setIsImageOpen(false)}
            aria-label="Close image"
          >
            ×
          </button>

          <button
            type="button"
            className="modal-arrow modal-left"
            onClick={(event) => {
              event.stopPropagation();
              previousSlide();
            }}
            aria-label="Previous image"
          >
            ‹
          </button>

          <img
            src={images[currentImage].src}
            alt={images[currentImage].title}
            loading="eager"
            decoding="async"
            onClick={(event) => event.stopPropagation()}
          />

          <button
            type="button"
            className="modal-arrow modal-right"
            onClick={(event) => {
              event.stopPropagation();
              nextSlide();
            }}
            aria-label="Next image"
          >
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
  const [step, setStep] = useState(1);
  const [result, setResult] = useState('');
  const [formData, setFormData] = useState({
    service: '',
    vehicle: '',
    location: '',
    preferred_date: '',
    preferred_time: '',
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const totalSteps = 6;

  function updateField(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  function nextStep() {
    setStep((previousStep) => Math.min(previousStep + 1, totalSteps));
  }

  function previousStep() {
    setStep((previousStep) => Math.max(previousStep - 1, 1));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setResult('Sending...');

    const data = new FormData();
    data.append('access_key', 'c2169b3a-583e-4cfb-8122-fada5070ca61');
    data.append('service', formData.service);
    data.append('vehicle', formData.vehicle);
    data.append('location', formData.location);
    data.append('preferred_date', formData.preferred_date);
    data.append('preferred_time', formData.preferred_time);
    data.append('name', formData.name);
    data.append('phone', formData.phone);
    data.append('email', formData.email);
    data.append('message', formData.message);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });

      const responseData = await response.json();

      if (responseData.success) {
        setResult("Thanks! Your booking request was sent. We'll contact you shortly.");
        setStep(1);
        setFormData({
          service: '',
          vehicle: '',
          location: '',
          preferred_date: '',
          preferred_time: '',
          name: '',
          phone: '',
          email: '',
          message: '',
        });
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
        <h2>Request a Service</h2>
        <p className="section-subtitle">
          Answer a few quick questions and we’ll contact you to confirm pricing,
          availability, and location.
        </p>

        <form className="booking-form booking-step-form" onSubmit={handleSubmit}>
          <div className="step-top">
            <div>
              <p className="step-label">Step {step} of {totalSteps}</p>
              <h3>
                {step === 1 && 'What service do you need?'}
                {step === 2 && 'What vehicle are we detailing?'}
                {step === 3 && 'Where are you located?'}
                {step === 4 && 'When works best?'}
                {step === 5 && 'How can we contact you?'}
                {step === 6 && 'Anything else we should know?'}
              </h3>
            </div>

            <div className="step-progress">
              <span style={{ width: `${(step / totalSteps) * 100}%` }}></span>
            </div>
          </div>

          {step === 1 && (
            <div className="step-screen">
              <div className="choice-grid">
                {[
                  'Interior Detail',
                  'Exterior Detail',
                  'Full Detail',
                  'Paint Correction',
                  'Ceramic Coating',
                  'Customization',
                ].map((service) => (
                  <button
                    type="button"
                    key={service}
                    className={
                      formData.service === service
                        ? 'choice-card selected'
                        : 'choice-card'
                    }
                    onClick={() =>
                      setFormData((previousData) => ({
                        ...previousData,
                        service,
                      }))
                    }
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="step-screen">
              <div className="form-group">
                <label>Vehicle</label>
                <input
                  type="text"
                  name="vehicle"
                  placeholder="Year, make, model"
                  value={formData.vehicle}
                  onChange={updateField}
                  required
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="step-screen">
              <div className="form-group">
                <label>Location / City</label>
                <input
                  type="text"
                  name="location"
                  placeholder="Surrey, Delta, Langley..."
                  value={formData.location}
                  onChange={updateField}
                  required
                />
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="step-screen">
              <div className="form-row">
                <div className="form-group">
                  <label>Preferred Date</label>
                  <input
                    type="date"
                    name="preferred_date"
                    value={formData.preferred_date}
                    onChange={updateField}
                  />
                </div>

                <div className="form-group">
                  <label>Preferred Time</label>
                  <input
                    type="time"
                    name="preferred_time"
                    value={formData.preferred_time}
                    onChange={updateField}
                  />
                </div>
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="step-screen">
              <div className="form-row">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={updateField}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="778-000-0000"
                    value={formData.phone}
                    onChange={updateField}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@email.com"
                  value={formData.email}
                  onChange={updateField}
                  required
                />
              </div>
            </div>
          )}

          {step === 6 && (
            <div className="step-screen">
              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell us about the vehicle condition, stains, pet hair, coating needs, etc."
                  value={formData.message}
                  onChange={updateField}
                ></textarea>
              </div>
            </div>
          )}

          <div className="step-actions">
            {step > 1 && (
              <button
                type="button"
                className="btn secondary step-back"
                onClick={previousStep}
              >
                Back
              </button>
            )}

            {step < totalSteps && (
              <button
                type="button"
                className="btn primary step-next"
                onClick={nextStep}
              >
                Continue
              </button>
            )}

            {step === totalSteps && (
              <button type="submit" className="btn primary step-next">
                Submit Booking Request
              </button>
            )}
          </div>

          <div className="quick-contact-buttons step-contact">
  <p>Prefer talking directly?</p>

  <div className="contact-icon-row">
    <a href="tel:7783255438" className="contact-icon-btn" aria-label="Call Next Level Auto Care">
      📞
    </a>

    <a href="sms:7783255438" className="contact-icon-btn" aria-label="Text Next Level Auto Care">
      💬
    </a>
  </div>
</div>


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

      <a href="tel:7783255438" className="phone-link">
        778-325-5438
      </a>

      <div className="social-links">
  <a
    href="https://www.instagram.com/nextlvlautocare"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
  >
    <img src="/images/Instagram.png" alt="Instagram" />
  </a>

  <a
    href="https://www.tiktok.com/@nextlvlautocare"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="TikTok"
  >
    <img src="/images/tiktok.webp" alt="TikTok" />
  </a>
</div>

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
