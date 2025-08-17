import React, { useEffect } from "react";
import "./style.css";
import Ad1 from "../../../public/hero-video.mp4";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

export const ElementLight = () => {
  useEffect(() => {
    let deliveryintervalId = null;

    function initDeliveryInfo() {
      setTimeout(() => {
        const deliveryInfoElements = document.querySelectorAll(
          ".troopod_delivery_info"
        );
        const deliveryInfoLength = 3; // Updated to match the actual number of elements

        if (deliveryInfoElements.length === deliveryInfoLength) {
          let currentIndex = 0;

          if (deliveryintervalId) {
            clearInterval(deliveryintervalId);
          }

          const showNextItem = function () {
            const currentItem = deliveryInfoElements[currentIndex];
            const nextIndex = (currentIndex + 1) % deliveryInfoElements.length;
            const nextItem = deliveryInfoElements[nextIndex];

            if (currentItem && nextItem) {
              currentItem.classList.remove("active");
              nextItem.classList.add("active");
              currentIndex = nextIndex;
            }
          };

          deliveryInfoElements.forEach((el) => el.classList.remove("active"));
          deliveryInfoElements[0]?.classList.add("active");

          deliveryintervalId = setInterval(showNextItem, 3000);
        } else {
          initDeliveryInfo();
        }
      }, 500);
    }

    initDeliveryInfo();
  }, []);

  useEffect(() => {
    const nav = document.getElementById("stickyNav");
    if (!nav) return;

    const navOffset = nav.offsetTop;

    const handleScroll = () => {
      console.log("scrolling");
      if (window.scrollY > navOffset) {
        nav.classList.add("sticky");
      } else {
        nav.classList.remove("sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    function setActiveBreadcrumb() {
      const hash = window.location.hash;
      document.querySelectorAll(".breadcrum").forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === hash);
      });
    }

    window.addEventListener("DOMContentLoaded", setActiveBreadcrumb);
    window.addEventListener("hashchange", setActiveBreadcrumb);
  }, []);

  return (
    <div className="element-light">
      <div className="overlap">
        <div className="background">
          <div className="div">
            <div className="main">
              {/* Product Title */}
              <div className="product-title-section">
                <h1 className="product-title">
                  Peeper Perfect Under-Eye Concealer
                </h1>
              </div>

              {/* Hero Video Section */}
              <div className="hero-video-container">
                <video className="hero-video" autoPlay muted loop playsInline>
                  <source src={Ad1} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* New Hero Section */}
              <section className="hero">
                <div className="hero-container">
                  <div className="viral-badge">✨ As Seen on TikTok ✨</div>
                  <h1>Get That "I Just Got 10 Hours of Sleep" Look</h1>
                  <p className="sleep-benefit">
                    Even When You Stayed Up Till 3AM Studying
                  </p>
                  <p className="hero-subtitle">
                    This isn't just concealer—it's your secret to looking
                    refreshed when you're anything but. The viral concealer that
                    gives you all the coverage with none of the cakiness.
                  </p>

                  <div className="price-section">
                    <div className="price">$18.00</div>
                    <div className="reviews-count">
                      ⭐⭐⭐⭐⭐ <b>4.8</b> 966 Reviews | Afterpay Available
                    </div>
                  </div>

                  <div className="cta-group">
                    <button
                      className="cta-button primary"
                      data-action="add-to-cart"
                    >
                      Add to Cart - $18.00
                    </button>
                    <button
                      className="cta-button secondary"
                      data-action="subscribe"
                    >
                      Subscribe & Save 10%
                    </button>
                  </div>

                  <div className="trust-signals">
                    <span className="trust-item">
                      <span className="trust-icon">🚚</span>
                      Free shipping over $30
                    </span>
                    <span className="trust-item">
                      <span className="trust-icon">↩️</span>
                      Hassle-free returns
                    </span>
                    <span className="trust-item">
                      <span className="trust-icon">🐰</span>
                      Cruelty-free
                    </span>
                  </div>
                </div>
              </section>

              {/* Before/After Visual Section */}
              <section className="before-after">
                <div className="container">
                  <div className="section-header">
                    <h2 className="section-title">
                      The Transformation is Real
                    </h2>
                    <p className="section-subtitle">
                      See why millions are obsessed with this viral concealer
                    </p>
                  </div>

                  <div className="before-after-showcase">
                    <div className="image-comparison">
                      <div className="comparison-wrapper">
                        <img
                          src="/before_after.jpg"
                          alt="Before and After comparison showing dramatic improvement in under-eye area"
                          className="before-after-image"
                        />
                        <div className="labels-below">
                          <div className="before-label">
                            <span className="label-text">BEFORE</span>
                            <span className="label-description">
                              Dark circles & tired eyes
                            </span>
                          </div>
                          <div className="after-label">
                            <span className="label-text">AFTER</span>
                            <span className="label-description">
                              Bright & refreshed
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="benefits-grid">
                      <div className="benefit-card">
                        <div className="benefit-icon">
                          <svg width="32" height="32" viewBox="0 0 32 32">
                            <circle
                              cx="16"
                              cy="16"
                              r="14"
                              fill="none"
                              stroke="#ff6b9d"
                              strokeWidth="2"
                            />
                            <path
                              d="M10 16 L14 20 L22 12"
                              stroke="#ff6b9d"
                              strokeWidth="3"
                              fill="none"
                            />
                          </svg>
                        </div>
                        <h3>Instant Coverage</h3>
                        <p>
                          Covers dark circles completely without looking cakey
                          or obvious
                        </p>
                      </div>

                      <div className="benefit-card">
                        <div className="benefit-icon">
                          <svg width="32" height="32" viewBox="0 0 32 32">
                            <circle
                              cx="16"
                              cy="16"
                              r="8"
                              fill="#ff6b9d"
                              opacity="0.2"
                            />
                            <path
                              d="M16 4 L16 8 M16 24 L16 28 M28 16 L24 16 M8 16 L4 16 M25.66 6.34 L22.83 9.17 M9.17 22.83 L6.34 25.66 M25.66 25.66 L22.83 22.83 M9.17 9.17 L6.34 6.34"
                              stroke="#ff6b9d"
                              strokeWidth="2"
                            />
                          </svg>
                        </div>
                        <h3>Natural Glow</h3>
                        <p>
                          Brightens your under-eye area for that "just got 10
                          hours of sleep" look
                        </p>
                      </div>

                      <div className="benefit-card">
                        <div className="benefit-icon">
                          <svg width="32" height="32" viewBox="0 0 32 32">
                            <path
                              d="M6 16 Q16 6 26 16 Q16 26 6 16"
                              fill="none"
                              stroke="#ff6b9d"
                              strokeWidth="2"
                            />
                            <circle
                              cx="11"
                              cy="13"
                              r="2"
                              fill="#ff6b9d"
                              opacity="0.5"
                            />
                            <circle
                              cx="21"
                              cy="13"
                              r="2"
                              fill="#ff6b9d"
                              opacity="0.5"
                            />
                          </svg>
                        </div>
                        <h3>Seamless Blend</h3>
                        <p>
                          Blends effortlessly into your skin tone without any
                          harsh lines
                        </p>
                      </div>

                      <div className="benefit-card">
                        <div className="benefit-icon">
                          <svg width="32" height="32" viewBox="0 0 32 32">
                            <path
                              d="M8 12 L16 4 L24 12 L16 20 Z"
                              fill="none"
                              stroke="#ff6b9d"
                              strokeWidth="2"
                            />
                            <circle
                              cx="16"
                              cy="12"
                              r="3"
                              fill="#ff6b9d"
                              opacity="0.3"
                            />
                            <path
                              d="M12 24 L20 24 M14 28 L18 28"
                              stroke="#ff6b9d"
                              strokeWidth="2"
                            />
                          </svg>
                        </div>
                        <h3>Long-Lasting</h3>
                        <p>
                          Stays put all day without creasing, even through long
                          study sessions
                        </p>
                      </div>
                    </div>

                    <div className="transformation-stats">
                      <div className="stat-item">
                        <span className="stat-number">92%</span>
                        <span className="stat-label">Say it looks natural</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-number">89%</span>
                        <span className="stat-label">No creasing all day</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-number">96%</span>
                        <span className="stat-label">Would recommend</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section
                className="troopod-section"
                data-section="shoppable-videos"
              >
                <div className="troopod-container">
                  {/* Video carousel with lifestyle content */}
                  <Swiper
                    modules={[Navigation, EffectCoverflow]}
                    className="troopod-swiper mySwiper"
                    effect="coverflow"
                    centeredSlides={true}
                    slidesPerView={1.3}
                    spaceBetween={30}
                    navigation={{
                      nextEl: ".swiper-button-next",
                      prevEl: ".swiper-button-prev",
                    }}
                    coverflowEffect={{
                      rotate: 0,
                      stretch: 0,
                      depth: 100,
                      modifier: 1,
                      slideShadows: false,
                    }}
                    loop={false}
                  >
                    <SwiperSlide>
                      <div className="video-card">
                        <video autoPlay muted loop playsInline>
                          <source src={Ad1} type="video/mp4" />
                        </video>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="video-card">
                        <video autoPlay muted loop playsInline>
                          <source src={Ad1} type="video/mp4" />
                        </video>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="video-card">
                        <video autoPlay muted loop playsInline>
                          <source src={Ad1} type="video/mp4" />
                        </video>
                      </div>
                    </SwiperSlide>

                    {/* Navigation arrows */}
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                  </Swiper>
                </div>
              </section>

              <div className="form">
                <div className="tolstoy-stories">
                  <h2 className="heading-tolstoy">See It In Action</h2>

                  <img
                    className="group-tolstoy"
                    alt="Group tolstoy"
                    src="/img/group-tolstoy-stories.svg"
                  />
                </div>

                <div className="details-slot-summary">
                  <div className="overlap-3">
                    <div className="horizontal-divider" />

                    <div className="horizontal-divider-2" />
                  </div>

                  <h3 className="text-wrapper-14">What It Is</h3>
                </div>

                <div className="details-slot-summary-2">
                  <div className="overlap-3">
                    <div className="horizontal-divider" />

                    <div className="horizontal-divider-2" />
                  </div>

                  <h3 className="why-it-s-special">Why It&#39;s Special</h3>
                </div>

                <div className="details-slot-summary-3">
                  <div className="overlap-3">
                    <div className="horizontal-divider" />

                    <div className="horizontal-divider-2" />
                  </div>

                  <h3 className="text-wrapper-15">How To Use It</h3>
                </div>

                <div className="details-slot-summary-4">
                  <div className="overlap-3">
                    <div className="horizontal-divider" />

                    <div className="horizontal-divider-2" />
                  </div>

                  <h3 className="text-wrapper-16">Shade Information</h3>
                </div>

                <div className="details-slot-summary-5">
                  <div className="overlap-3">
                    <div className="horizontal-divider" />

                    <div className="horizontal-divider-2" />
                  </div>

                  <h3 className="text-wrapper-17">Ingredients</h3>
                </div>

                <div className="details-slot-summary-6">
                  <div className="overlap-3">
                    <div className="horizontal-divider" />

                    <div className="horizontal-divider-2" />
                  </div>

                  <h3 className="text-wrapper-18">FAQS</h3>
                </div>

                <img
                  className="product-description"
                  alt="Product description"
                  src="/img/product-description-cruelty-svg.svg"
                />

                <img
                  className="product-description-2"
                  alt="Product description"
                  src="/img/product-description-paraben-svg.svg"
                />

                <img
                  className="product-description-3"
                  alt="Product description"
                  src="/img/product-description-phthalate-svg.svg"
                />

                <img
                  className="product-description-4"
                  alt="Product description"
                  src="/img/product-description-no-harmful-sulfate-svg.svg"
                />

                <img
                  className="product-description-5"
                  alt="Product description"
                  src="/img/product-description-gluten-svg.svg"
                />

                <h3 className="heading-pairs-well">Pairs Well With</h3>

                <div className="link-2" />

                <div className="heading-link">
                  <p className="wakey-wakey-hydrogel">
                    Wakey Wakey Hydrogel Under Eye
                    <br />
                    Patches
                  </p>
                </div>

                <div className="text-wrapper-19">$22.00 USD</div>

                <button className="button-2">
                  <div className="text-wrapper-20">ADD TO CART</div>
                </button>

                <div className="link-3" />

                <div className="heading-link-2">
                  <div className="text-wrapper-21">Peeper Correct</div>
                </div>

                <div className="text-wrapper-22">$14.00 USD</div>

                <div className="image-background-3" />

                <img
                  className="image-border-10"
                  alt="Image border"
                  src="/img/image-border-10.png"
                />

                <button className="button-3">
                  <div className="text-wrapper-20">ADD TO CART</div>
                </button>
              </div>

              <div id="stickyNav" className="nav-container">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "10px",
                    alignItems: "center",
                    width: "100%",
                    // padding: "10px 10px",
                    background: "#FFF",
                  }}
                >
                  <a href="#labdiamonds" className="breadcrum">
                    Concealer
                  </a>
                  <a href="#naturalvslab" className="breadcrum">
                    Complexion
                  </a>
                  <a href="#about" className="breadcrum">
                    Skincare
                  </a>
                  <a href="#reviews" className="breadcrum">
                    Reviews
                  </a>
                </div>
              </div>

              <div className="section">
                <div className="heading-you-may">You may also like</div>

                <div className="container-3">
                  <div className="tabpanel">
                    <div className="link-4">
                      <div className="text-wrapper-23">Peeper Perfect Pair</div>
                    </div>

                    <div className="overlap-4">
                      <div className="text-wrapper-24">$25.00 USD</div>

                      <div className="text-wrapper-25">($32.00 value)</div>
                    </div>

                    <div className="link-5">
                      <div className="text-wrapper-26">VIEW OPTIONS</div>
                    </div>

                    <div className="overlap-group-4">
                      <div className="background-2">
                        <div className="link-peeper-perfect">
                          <div className="peeper-perfect-pair" />
                        </div>
                      </div>

                      <div className="background-3">
                        <div className="text-wrapper-27">Custom Bundle</div>
                      </div>
                    </div>
                  </div>

                  <div className="tabpanel-2">
                    <div className="overlap-group-4">
                      <div className="background-2">
                        <div className="overlap-group-5">
                          <div className="link-white-tea">
                            <div className="white-tea-tinted" />
                          </div>

                          <div className="text-wrapper-28">Fair</div>
                        </div>
                      </div>

                      <div className="background-4">
                        <div className="text-wrapper-29">Best Seller</div>
                      </div>
                    </div>

                    <div className="white-tea-tinted-wrapper">
                      <p className="white-tea-tinted-2">
                        White Tea Tinted Moisturizer
                        <br />
                        SPF 30
                      </p>
                    </div>

                    <div className="overlap-5">
                      <div className="group-wrapper">
                        <div className="group">
                          <div className="img-wrapper">
                            <img
                              className="img-2"
                              alt="Vector"
                              src="/img/vector-10-2.svg"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="SVG-3">
                        <div className="group">
                          <div className="group-2">
                            <img
                              className="img-2"
                              alt="Vector"
                              src="/img/vector-11.svg"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="SVG-4">
                        <div className="group">
                          <div className="group-3">
                            <img
                              className="img-2"
                              alt="Vector"
                              src="/img/vector-12.svg"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="SVG-5">
                        <div className="group">
                          <div className="group-4">
                            <img
                              className="img-2"
                              alt="Vector"
                              src="/img/vector-13.svg"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="SVG-6">
                        <div className="group-5">
                          <div className="group-6">
                            <div className="overlap-group-6">
                              <img
                                className="img-2"
                                alt="Star outline"
                                src="/img/star-outline.svg"
                              />

                              <img
                                className="vector-7"
                                alt="Vector"
                                src="/img/vector-14.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-wrapper-30">181 REVIEWS</div>

                    <div className="text-wrapper-31">$28.00 USD</div>

                    <div className="SVG-wrapper">
                      <div className="SVG-7">
                        <div className="overlap-group-7">
                          <img
                            className="vector-8"
                            alt="Vector"
                            src="/img/vector-15.svg"
                          />

                          <img
                            className="group-wrapper"
                            alt="Vector"
                            src="/img/vector-16.png"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="image-border-shadow-2" />

                    <img
                      className="image-border-11"
                      alt="Image border"
                      src="/img/image-border-11.png"
                    />

                    <img
                      className="image-border-12"
                      alt="Image border"
                      src="/img/image-border-12.png"
                    />

                    <img
                      className="image-border-13"
                      alt="Image border"
                      src="/img/image-border-13.png"
                    />

                    <button className="add-to-cart-wrapper">
                      <div className="add-to-cart-2">ADD TO CART</div>
                    </button>
                  </div>

                  <img
                    className="tabpanel-3"
                    alt="Tabpanel"
                    src="/img/tabpanel.png"
                  />

                  <img
                    className="tabpanel-4"
                    alt="Tabpanel"
                    src="/img/tabpanel-1.png"
                  />
                </div>

                <img
                  className="tablist-2"
                  alt="Tablist"
                  src="/img/tablist-1.svg"
                />
              </div>

              {/* Lifestyle Testimonials Section */}
              <section className="testimonials">
                <div className="container">
                  <h2 className="section-title">Real Students, Real Results</h2>
                  <p className="section-subtitle">
                    Join thousands who've discovered their secret weapon for
                    looking awake
                  </p>

                  <div className="testimonial-swiper-container">
                    <Swiper
                      modules={[Navigation, Pagination, Autoplay]}
                      spaceBetween={20}
                      slidesPerView={1}
                      navigation={{
                        nextEl: ".testimonial-next",
                        prevEl: ".testimonial-prev",
                      }}
                      autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                      }}
                      breakpoints={{
                        390: {
                          slidesPerView: 1,
                          spaceBetween: 15,
                        },
                      }}
                      className="testimonial-swiper"
                    >
                      <SwiperSlide>
                        <div
                          className="testimonial-card featured"
                          data-reviewer="kate"
                        >
                          <div className="testimonial-header">
                            <div className="reviewer-avatar">
                              <span className="avatar-initial">K</span>
                            </div>
                            <div className="reviewer-info">
                              <h4 className="reviewer-name">Kate W.</h4>
                              <p className="reviewer-context">
                                College Student, Daily User
                              </p>
                              <div className="rating">⭐⭐⭐⭐⭐</div>
                            </div>
                          </div>
                          <blockquote className="testimonial-text">
                            "This provides fantastic full coverage for my dark
                            circles and it's a nice silky coverage that I wear
                            every single day. Perfect for those 8am classes
                            after late study sessions!"
                          </blockquote>
                          <div className="testimonial-footer">
                            <span className="verified-badge">
                              ✓ Verified Buyer
                            </span>
                            <span className="usage-time">
                              Used for 6+ months
                            </span>
                          </div>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div
                          className="testimonial-card"
                          data-reviewer="katrina"
                        >
                          <div className="testimonial-header">
                            <div className="reviewer-avatar">
                              <span className="avatar-initial">K</span>
                            </div>
                            <div className="reviewer-info">
                              <h4 className="reviewer-name">Katrina L.</h4>
                              <p className="reviewer-context">
                                Working Professional
                              </p>
                              <div className="rating">⭐⭐⭐⭐⭐</div>
                            </div>
                          </div>
                          <blockquote className="testimonial-text">
                            "The Winky Lux concealer is full coverage without
                            the cakey feel—it's super lightweight and blends
                            like a dream. Saves me every morning!"
                          </blockquote>
                          <div className="testimonial-footer">
                            <span className="verified-badge">
                              ✓ Verified Purchase
                            </span>
                            <span className="usage-time">Daily user</span>
                          </div>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div
                          className="testimonial-card"
                          data-reviewer="veronica"
                        >
                          <div className="testimonial-header">
                            <div className="reviewer-avatar">
                              <span className="avatar-initial">V</span>
                            </div>
                            <div className="reviewer-info">
                              <h4 className="reviewer-name">Veronica A.</h4>
                              <p className="reviewer-context">
                                Graduate Student
                              </p>
                              <div className="rating">⭐⭐⭐⭐⭐</div>
                            </div>
                          </div>
                          <blockquote className="testimonial-text">
                            "It's the perfect match, creamy, blends well and
                            doesn't leave creases. Essential for thesis writing
                            all-nighters - I look human even when I feel like a
                            zombie!"
                          </blockquote>
                          <div className="testimonial-footer">
                            <span className="verified-badge">
                              ✓ Verified Buyer
                            </span>
                            <span className="usage-time">Used for 1+ year</span>
                          </div>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="testimonial-card" data-reviewer="sarah">
                          <div className="testimonial-header">
                            <div className="reviewer-avatar">
                              <span className="avatar-initial">S</span>
                            </div>
                            <div className="reviewer-info">
                              <h4 className="reviewer-name">Sarah M.</h4>
                              <p className="reviewer-context">
                                Young Professional
                              </p>
                              <div className="rating">⭐⭐⭐⭐⭐</div>
                            </div>
                          </div>
                          <blockquote className="testimonial-text">
                            "I needed something hydrating since my skin isn't 20
                            anymore (haha). It blends nicely and you seriously
                            only need a tiny amount. Perfect for early morning
                            meetings!"
                          </blockquote>
                          <div className="testimonial-footer">
                            <span className="verified-badge">
                              ✓ Verified Purchase
                            </span>
                            <span className="usage-time">Daily user</span>
                          </div>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div
                          className="testimonial-card expert-review"
                          data-reviewer="expert"
                        >
                          <div className="testimonial-header">
                            <div className="reviewer-avatar expert-avatar">
                              <span className="avatar-initial">★</span>
                            </div>
                            <div className="reviewer-info">
                              <h4 className="reviewer-name">MILABU Beauty</h4>
                              <p className="reviewer-context">
                                Professional Beauty Reviewer
                              </p>
                              <div className="rating">⭐⭐⭐⭐⭐</div>
                            </div>
                          </div>
                          <blockquote className="testimonial-text">
                            "Peeper Perfect makes it into top 3 Drugstore
                            Concealers list due to the low price and skincare
                            benefits that it offers."
                          </blockquote>
                          <div className="testimonial-footer">
                            <span className="expert-badge">
                              ✓ Beauty Expert
                            </span>
                            <span className="review-source">
                              Professional Review
                            </span>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>

                    {/* Navigation arrows */}
                    <div className="testimonial-navigation">
                      <button className="testimonial-prev">
                        <svg width="20" height="20" viewBox="0 0 20 20">
                          <path
                            d="M12 4 L6 10 L12 16"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                          />
                        </svg>
                      </button>
                      <button className="testimonial-next">
                        <svg width="20" height="20" viewBox="0 0 20 20">
                          <path
                            d="M8 4 L14 10 L8 16"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* Coverage Claims Section */}
              <section className="coverage-claims">
                <div className="container">
                  <h2 className="section-title">
                    All The Coverage, None of The Cakiness
                  </h2>
                  <p className="section-subtitle">
                    The 4 promises that make this concealer go viral
                  </p>

                  <div className="claims-grid">
                    <div className="claim-card" data-claim="coverage">
                      <div className="claim-icon coverage-icon">
                        <svg width="40" height="40" viewBox="0 0 40 40">
                          <circle
                            cx="20"
                            cy="20"
                            r="18"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                          <path
                            d="M12 20 L18 26 L28 14"
                            stroke="currentColor"
                            strokeWidth="3"
                            fill="none"
                          />
                        </svg>
                      </div>
                      <h3>Full Coverage</h3>
                      <p>
                        Covers dark circles, blemishes, and imperfections
                        without looking heavy or obvious
                      </p>
                      <div className="claim-proof">
                        <span className="proof-stat">100% Coverage</span>
                        <span className="proof-desc">
                          Without the mask effect
                        </span>
                      </div>
                    </div>

                    <div className="claim-card" data-claim="glow">
                      <div className="claim-icon glow-icon">
                        <svg width="40" height="40" viewBox="0 0 40 40">
                          <circle
                            cx="20"
                            cy="20"
                            r="10"
                            fill="currentColor"
                            opacity="0.3"
                          />
                          <path
                            d="M20 2 L20 8 M20 32 L20 38 M38 20 L32 20 M8 20 L2 20 M33.14 6.86 L28.28 11.72 M11.72 28.28 L6.86 33.14 M33.14 33.14 L28.28 28.28 M11.72 11.72 L6.86 6.86"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                      <h3>That Glow</h3>
                      <p>
                        Brightening effect that makes you look awake and
                        radiant, not flat or dull
                      </p>
                      <div className="claim-proof">
                        <span className="proof-stat">Instant Radiance</span>
                        <span className="proof-desc">
                          Like you slept 10 hours
                        </span>
                      </div>
                    </div>

                    <div className="claim-card" data-claim="blending">
                      <div className="claim-icon blending-icon">
                        <svg width="40" height="40" viewBox="0 0 40 40">
                          <path
                            d="M5 20 Q20 5 35 20 Q20 35 5 20"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                          <circle
                            cx="15"
                            cy="20"
                            r="3"
                            fill="currentColor"
                            opacity="0.7"
                          />
                          <circle
                            cx="25"
                            cy="20"
                            r="3"
                            fill="currentColor"
                            opacity="0.7"
                          />
                        </svg>
                      </div>
                      <h3>Seamless Blending</h3>
                      <p>
                        Melts into skin like it was meant to be there. No harsh
                        lines or patches
                      </p>
                      <div className="claim-proof">
                        <span className="proof-stat">
                          Effortless Application
                        </span>
                        <span className="proof-desc">Blends like butter</span>
                      </div>
                    </div>

                    <div className="claim-card" data-claim="longevity">
                      <div className="claim-icon longevity-icon">
                        <svg width="40" height="40" viewBox="0 0 40 40">
                          <circle
                            cx="20"
                            cy="20"
                            r="16"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                          <path
                            d="M20 8 L20 20 L28 28"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                          />
                          <circle cx="20" cy="20" r="2" fill="currentColor" />
                        </svg>
                      </div>
                      <h3>Crease-Resistant</h3>
                      <p>
                        Holds up against fine lines and stays put all day
                        without settling or fading
                      </p>
                      <div className="claim-proof">
                        <span className="proof-stat">All-Day Wear</span>
                        <span className="proof-desc">No touch-ups needed</span>
                      </div>
                    </div>
                  </div>

                  <div className="claims-testimonial">
                    <div className="testimonial-content">
                      <blockquote>
                        "All of the coverage, none of the cakiness. Look at that
                        glow!"
                      </blockquote>
                      <cite>— From the Viral TikTok Video</cite>
                    </div>
                    <div className="social-proof-numbers">
                      <div className="proof-number">
                        <span className="number">2.3M+</span>
                        <span className="proof_text">TikTok Views</span>
                      </div>
                      <div className="proof-number">
                        <span className="number">966+</span>
                        <span className="proof_text">5-Star Reviews</span>
                      </div>
                      <div className="proof-number">
                        <span className="number">96%</span>
                        <span className="proof_text">Would Recommend</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <div className="section-3">
                <section className="science-behind-glow">
                  <div className="sbg-header">
                    <h2 className="sbg-title">The Science Behind That Glow</h2>
                    <p className="sbg-subtitle">
                      Premium ingredients that deliver the ‘10 hours of sleep’
                      effect
                    </p>
                  </div>

                  <div className="sbg-intro">
                    <div className="sbg-intro-copy">
                      <h3 className="sbg-intro-title">
                        More Than Just Coverage
                      </h3>
                      <p className="sbg-intro-text">
                        While other concealers just sit on top of your skin,
                        Peeper Perfect works <em>with</em> your skin. Each
                        ingredient is carefully chosen to not only conceal but
                        actually improve your skin while you wear it.
                      </p>
                    </div>
                    <div className="sbg-intro-visual" aria-hidden="true">
                      <svg
                        width="110"
                        height="110"
                        viewBox="0 0 120 120"
                        className="sbg-heart"
                      >
                        <circle
                          cx="60"
                          cy="60"
                          r="50"
                          fill="#FFD1DC"
                          opacity="0.9"
                        />
                        <path
                          d="M60 36 C50 46, 46 66, 60 78 C74 66, 70 46, 60 36 Z"
                          fill="#FF69B4"
                        />
                        <text
                          x="60"
                          y="104"
                          textAnchor="middle"
                          fontSize="10"
                          fill="#FF69B4"
                        >
                          Skincare + Makeup
                        </text>
                      </svg>
                    </div>
                  </div>

                  <div className="sbg-grid">
                    <article className="sbg-card">
                      <div className="sbg-icon">
                        <svg width="36" height="36" viewBox="0 0 48 48">
                          <circle
                            cx="24"
                            cy="24"
                            r="20"
                            fill="#FFE4E8"
                            stroke="#FF6FA3"
                            strokeWidth="2"
                          />
                          <path
                            d="M16 24 Q20 16, 24 24 Q28 16, 32 24 Q28 32, 24 24 Q20 32, 16 24"
                            fill="#FF6FA3"
                          />
                        </svg>
                      </div>
                      <span className="sbg-badge sbg-badge-anti">
                        Anti-Aging
                      </span>
                      <h4 className="sbg-name">Hydrolyzed Collagen</h4>
                      <p className="sbg-line">
                        <strong>What it does:</strong> Plumps and firms delicate
                        under-eye skin for that youthful, well-rested
                        appearance.
                      </p>
                      <hr />
                      <p className="sbg-line">
                        <strong>Why you’ll love it:</strong>
                        <br />
                        <br /> Reduces the appearance of fine lines while giving
                        you instant coverage. It's like a mini eye treatment
                        every time you apply your concealer!
                      </p>
                      <hr />
                      <p className="sbg-line">
                        <strong>Glow Factor:</strong> Creates natural skin
                        plumpness for healthy radiance
                      </p>
                    </article>

                    <article className="sbg-card">
                      <div className="sbg-icon">
                        <svg width="36" height="36" viewBox="0 0 48 48">
                          <circle
                            cx="24"
                            cy="24"
                            r="20"
                            fill="#E6F7FF"
                            stroke="#00BFFF"
                            strokeWidth="2"
                          />
                          <circle cx="18" cy="20" r="3" fill="#00BFFF" />
                          <circle cx="30" cy="20" r="4" fill="#00BFFF" />
                          <circle cx="24" cy="30" r="5" fill="#00BFFF" />
                        </svg>
                      </div>
                      <span className="sbg-badge sbg-badge-hydra">
                        Hydration
                      </span>
                      <h4 className="sbg-name">Hyaluronic Acid</h4>
                      <p className="sbg-line">
                        <strong>What it does:</strong> Holds up to 1000x its
                        weight in water, keeping your under-eye area hydrated
                        and smooth.
                      </p>
                      <hr />
                      <p className="sbg-line">
                        <strong>Why you’ll love it:</strong>
                        <br /> No more cakey, dry concealer!
                      </p>
                      <hr />
                      <p className="sbg-line">
                        <strong>Glow Factor:</strong> Dewy, hydrated finish that
                        catches light beautifully
                      </p>
                    </article>

                    <article className="sbg-card">
                      <div className="sbg-icon">
                        <svg width="36" height="36" viewBox="0 0 48 48">
                          <circle
                            cx="24"
                            cy="24"
                            r="20"
                            fill="#FFF9E6"
                            stroke="#FFC400"
                            strokeWidth="2"
                          />
                          <path
                            d="M24 10 L26 18 L34 16 L28 22 L35 26 L27 26 L29 36 L24 30 L19 36 L21 26 L13 26 L20 22 L14 16 L22 18 Z"
                            fill="#FFC400"
                          />
                        </svg>
                      </div>
                      <span className="sbg-badge sbg-badge-antiox">
                        Antioxidant
                      </span>
                      <h4 className="sbg-name">Vitamin E (Tocopherol)</h4>
                      <p className="sbg-line">
                        <strong>What it does:</strong> Protects and nourishes
                        delicate under-eye skin while providing moisture and
                        conditioning.
                      </p>
                      <hr />
                      <p className="sbg-line">
                        <strong>Why you’ll love it:</strong> <br />
                        Prevents irritation and keeps your skin healthy, even
                        with daily concealer use.
                      </p>
                      <hr />
                      <p className="sbg-line">
                        <strong>Glow Factor:</strong> Healthy skin foundation
                        for natural luminosity
                      </p>
                    </article>

                    <article className="sbg-card">
                      <div className="sbg-icon">
                        <svg width="36" height="36" viewBox="0 0 48 48">
                          <circle
                            cx="24"
                            cy="24"
                            r="20"
                            fill="#F2FFF2"
                            stroke="#28A745"
                            strokeWidth="2"
                          />
                          <path
                            d="M16 24 Q20 16, 24 20 Q28 16, 32 24 Q28 32, 24 28 Q20 32, 16 24"
                            fill="#28A745"
                          />
                          <circle cx="24" cy="24" r="4" fill="#98FB98" />
                        </svg>
                      </div>
                      <span className="sbg-badge sbg-badge-smooth">
                        Smooth Application
                      </span>
                      <h4 className="sbg-name">Glycerin</h4>
                      <p className="sbg-line">
                        <strong>What it does:</strong> Creates that
                        ultra-smooth, seamless application by attracting
                        moisture to your skin's surface.
                      </p>
                      <hr />
                      <p className="sbg-line">
                        <strong>Why you’ll love it:</strong> <br />
                        This is why the concealer "blends like a dream" - it
                        literally helps the formula melt into your skin!
                      </p>
                      <hr />
                      <p className="sbg-line">
                        <strong>Glow Factor:</strong> Smooth canvas for even
                        light reflection
                      </p>
                    </article>
                  </div>

                  <div className="sbg-callout">
                    <div className="sbg-callout-icon" aria-hidden="true">
                      <svg width="54" height="54" viewBox="0 0 60 60">
                        <circle cx="30" cy="30" r="14" fill="#FFD54D" />
                        <path
                          d="M30 4 L31.5 19 M56 30 L41 28.5 M30 56 L28.5 41 M4 30 L19 31.5"
                          stroke="#FFD54D"
                          strokeWidth="3"
                        />
                        <path
                          d="M45 15 L35 25 M45 45 L35 35 M15 45 L25 35 M15 15 L25 25"
                          stroke="#FFD54D"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    <h3 className="sbg-callout-title">
                      The Secret to ‘Look at That Glow’
                    </h3>
                    <p>
                      These four powerhouse ingredients work together to create
                      that enviable glow everyone's talking about. It's not just
                      makeup—it's skincare that makes your skin look naturally
                      radiant and healthy, like you actually got those 10 hours
                      of sleep!
                    </p>
                    <br />
                    <div className="sbg-stats">
                      <div className="sbg-stat">
                        <span className="sbg-num">24hrs</span>
                        <span className="sbg-lbl">Hydration</span>
                      </div>
                      <div className="sbg-stat">
                        <span className="sbg-num">0%</span>
                        <span className="sbg-lbl">Creasing</span>
                      </div>
                      <div className="sbg-stat">
                        <span className="sbg-num">100%</span>
                        <span className="sbg-lbl">Coverage</span>
                      </div>
                    </div>
                  </div>

                  <div className="sbg-compare">
                    <h3 className="sbg-compare-title">
                      Why Premium Ingredients Matter
                    </h3>
                    <div className="sbg-compare-grid">
                      <div className="sbg-col sbg-col-other">
                        <h4 className="sbg-col-title">Other Concealers</h4>
                        <ul className="sbg-list">
                          <li>❌ Sit on skin</li>
                          <li>❌ Cakey finish</li>
                          <li>❌ Dry out skin</li>
                          <li>❌ Need touch-ups</li>
                        </ul>
                      </div>
                      <div className="sbg-col sbg-col-peeper">
                        <h4 className="sbg-col-title">Peeper Perfect</h4>
                        <ul className="sbg-list">
                          <li>✅ Works with skin</li>
                          <li>✅ Seamless finish</li>
                          <li>✅ Hydrates skin</li>
                          <li>✅ All-day confidence</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              <div className="section-4">
                <div className="container-7">
                  <p className="heading-SHARE-YOUR">
                    SHARE YOUR LOOK | #winkylux
                  </p>

                  <img className="list" alt="List" src="/img/list.svg" />

                  <button className="button-load-more-wrapper">
                    <button className="button-load-more">LOAD MORE</button>
                  </button>
                </div>
              </div>

              <div className="section-region">
                <div className="overlap-7">
                  <div className="customer-reviews">Customer Reviews</div>

                  <div className="link-trusted-reviews">
                    <div className="text-wrapper-41">Trusted reviews by</div>

                    <div className="SVG-8" />
                  </div>
                </div>

                <img
                  className="img-out-of"
                  alt="Img out of"
                  src="static\4.7_star.jpg"
                />

                <div className="text-wrapper-42">966 reviews</div>

                <button className="button-4">
                  <div className="SVG-9">
                    <img
                      className="vector-10"
                      alt="Vector"
                      src="/img/vector-33.svg"
                    />
                  </div>

                  <div className="text-wrapper-43">See reviews summary</div>
                </button>

                <div className="button-star-by">
                  <div className="text-wrapper-44">5</div>

                  <div className="SVG-10">
                    <img
                      className="vector-11"
                      alt="Vector"
                      src="/one_star.jpg"
                    />
                  </div>

                  <div className="background-7">
                    <div className="background-8" />
                  </div>

                  <div className="text-wrapper-45">827</div>
                </div>

                <div className="button-star-by-2">
                  <div className="text-wrapper-44">4</div>

                  <div className="SVG-10">
                    <img
                      className="vector-11"
                      alt="Vector"
                      src="/one_star.jpg"
                    />
                  </div>

                  <div className="background-7">
                    <div className="background-9" />
                  </div>

                  <div className="text-wrapper-46">89</div>
                </div>

                <div className="button-star-by-3">
                  <div className="text-wrapper-44">3</div>

                  <div className="SVG-10">
                    <img
                      className="vector-11"
                      alt="Vector"
                      src="/one_star.jpg"
                    />
                  </div>

                  <div className="background-7">
                    <div className="div-2" />
                  </div>

                  <div className="text-wrapper-47">17</div>
                </div>

                <div className="button-star-by-4">
                  <div className="text-wrapper-44">2</div>

                  <div className="SVG-10">
                    <img
                      className="vector-11"
                      alt="Vector"
                      src="/one_star.jpg"
                    />
                  </div>

                  <div className="background-7">
                    <div className="div-2" />
                  </div>

                  <div className="text-wrapper-48">12</div>
                </div>

                <div className="button-star-by-5">
                  <div className="text-wrapper-49">1</div>

                  <div className="SVG-10">
                    <img
                      className="vector-11"
                      alt="Vector"
                      src="/one_star.jpg"
                    />
                  </div>

                  <div className="background-7">
                    <div className="background-10" />
                  </div>

                  <div className="text-wrapper-47">21</div>
                </div>

                <button className="button-5">
                  <div className="text-wrapper-50">Write A Review</div>
                </button>

                <div className="image">
                  <div className="image-fill">
                    <div className="image-2">
                      <img
                        className="vector-12"
                        alt="Vector"
                        src="/img/vector-39.svg"
                      />
                    </div>
                  </div>
                </div>

                <div className="label">
                  <div className="overlap-group-9">
                    <div className="searchbox">
                      <div className="container-8">
                        <div className="text-wrapper-51">Search reviews</div>
                      </div>
                    </div>

                    <div className="SVG-11" />
                  </div>
                </div>

                <div className="combobox">
                  <div className="SVG-12">
                    <img
                      className="vector-13"
                      alt="Vector"
                      src="/img/vector-41.svg"
                    />
                  </div>

                  <div className="text-wrapper-52">Rating</div>
                </div>

                <div className="button-search">
                  <div className="SVG-13">
                    <img
                      className="vector"
                      alt="Vector"
                      src="/img/vector-42.svg"
                    />
                  </div>

                  <div className="text-wrapper-53">With media</div>
                </div>

                <div className="text-wrapper-54">Popular topics</div>

                <div className="checkbox">
                  <div className="text-wrapper-55">shade</div>
                </div>

                <div className="checkbox-2">
                  <div className="text-wrapper-56">color</div>
                </div>

                <div className="checkbox-3">
                  <div className="text-wrapper-57">ingredients</div>
                </div>

                <div className="checkbox-4">
                  <div className="text-wrapper-58">smells</div>
                </div>

                <div className="checkbox-5">
                  <div className="text-wrapper-59">size</div>
                </div>

                <div className="checkbox-6">
                  <div className="text-wrapper-60">spots</div>
                </div>

                <div className="checkbox-7">
                  <div className="text-wrapper-61">circles</div>
                </div>

                <div className="checkbox-8">
                  <div className="text-wrapper-62">problem</div>
                </div>

                <div className="button-show-more">Show more</div>

                <div className="label-combobox">
                  <div className="text-wrapper-63">Sort by:</div>

                  <div className="text-wrapper-64">Most relevant</div>

                  <div className="SVG-14">
                    <img
                      className="vector-13"
                      alt="Vector"
                      src="/img/vector-43.svg"
                    />
                  </div>
                </div>

                <div className="image-fill-wrapper">
                  <div className="image-fill">
                    <div className="image-2">
                      <img
                        className="vector-12"
                        alt="Vector"
                        src="/img/vector-44.svg"
                      />
                    </div>
                  </div>
                </div>

                <div className="overlap-8">
                  <div className="overlap-9">
                    <img className="SVG-15" alt="Svg" src="/img/svg-1.svg" />

                    <div className="SVG-16">
                      <img
                        className="vector-14"
                        alt="Vector"
                        src="/img/vector-46.svg"
                      />
                    </div>

                    <img
                      className="img-out-of-stars"
                      alt="Img out of stars"
                      src="/all_star.jpg"
                    />
                  </div>

                  <div className="text-wrapper-65">Katrina L. 🇺</div>

                  <div className="text-wrapper-66">Verified Buyer</div>
                </div>

                <div className="heading-the-winky">
                  THE WINKY LUX
                  <br />
                  CONCEALER IS
                </div>

                <p className="the-winky-lux">
                  The Winky Lux concealer is full
                  <br />
                  coverage without the cakey feel-it&#39;s
                  <br />
                  super lightweight and blends like a<br />
                  dream. It lasts flawlessty all day and
                  <br />
                  never clings to my dry skin like other
                  <br />
                  concealers Ive tried. If you want a<br />
                  smooth, natural finish with serious
                  <br />
                  coverage, this is it.
                </p>

                <div className="text-wrapper-67">04/10/25</div>

                <div className="group-7">
                  <div className="text-wrapper-68">
                    Was this review helpful?
                  </div>

                  <div className="button-this-review" />

                  <div className="text-wrapper-69">0</div>

                  <div className="button-this-review-2" />

                  <div className="text-wrapper-70">0</div>
                </div>

                <div className="image-3">
                  <div className="image-fill">
                    <div className="image-2">
                      <img
                        className="vector-12"
                        alt="Vector"
                        src="/img/vector-44.svg"
                      />
                    </div>
                  </div>
                </div>

                <div className="overlap-10">
                  <div className="overlap-9">
                    <img className="SVG-15" alt="Svg" src="/img/svg-3.svg" />

                    <div className="SVG-16">
                      <img
                        className="vector-14"
                        alt="Vector"
                        src="/img/vector-46.svg"
                      />
                    </div>

                    <img
                      className="img-out-of-stars"
                      alt="Img out of stars"
                      src="/all_star.jpg"
                    />
                  </div>

                  <div className="text-wrapper-71">Rebecca S. 🇺</div>

                  <div className="text-wrapper-66">Verified Buyer</div>
                </div>

                <div className="heading-i-love-the">
                  I LOVE THE
                  <br />
                  COVERAGE THIS
                </div>

                <p className="i-love-the-coverage">
                  I love the coverage this gives me
                  <br />
                  skin! I’m 50 years old for reference.
                </p>

                <div className="text-wrapper-72">04/30/25</div>

                <div className="group-8">
                  <div className="text-wrapper-68">
                    Was this review helpful?
                  </div>

                  <div className="button-this-review" />

                  <div className="text-wrapper-69">0</div>

                  <div className="button-this-review-2" />

                  <div className="text-wrapper-70">0</div>
                </div>

                <div className="image-4">
                  <div className="image-fill">
                    <div className="image-2">
                      <img
                        className="vector-12"
                        alt="Vector"
                        src="/img/vector-44.svg"
                      />
                    </div>
                  </div>
                </div>

                <div className="overlap-11">
                  <div className="overlap-9">
                    <img className="SVG-15" alt="Svg" src="/img/svg-4.svg" />

                    <div className="SVG-16">
                      <img
                        className="vector-14"
                        alt="Vector"
                        src="/img/vector-46.svg"
                      />
                    </div>

                    <img
                      className="img-out-of-stars"
                      alt="Img out of stars"
                      src="/all_star.jpg"
                    />
                  </div>

                  <div className="text-wrapper-73">Jana A. 🇺</div>

                  <div className="text-wrapper-66">Verified Buyer</div>
                </div>

                <div className="heading-love-the">
                  LOVE THE
                  <br />
                  AMOUNT OF
                  <br />
                  COVERAGE
                </div>

                <p className="love-the-amount-of">
                  Love the amount of coverage this
                  <br />
                  provides while being creamy.
                </p>

                <div className="text-wrapper-74">04/20/25</div>

                <div className="group-9">
                  <div className="text-wrapper-68">
                    Was this review helpful?
                  </div>

                  <div className="button-this-review" />

                  <div className="text-wrapper-69">0</div>

                  <div className="button-this-review-2" />

                  <div className="text-wrapper-70">0</div>
                </div>

                <div className="image-5">
                  <div className="image-fill">
                    <div className="image-2">
                      <img
                        className="vector-12"
                        alt="Vector"
                        src="/img/vector-44.svg"
                      />
                    </div>
                  </div>
                </div>

                <div className="overlap-12">
                  <div className="overlap-9">
                    <img className="SVG-15" alt="Svg" src="/img/svg.svg" />

                    <div className="SVG-16">
                      <img
                        className="vector-14"
                        alt="Vector"
                        src="/img/vector-46.svg"
                      />
                    </div>

                    <img
                      className="img-out-of-stars"
                      alt="Img out of stars"
                      src="/all_star.jpg"
                    />
                  </div>

                  <div className="text-wrapper-75">Susan K. 🇺</div>

                  <div className="text-wrapper-66">Verified Buyer</div>
                </div>

                <div className="heading-the-white">
                  THE WHITE TEA
                  <br />
                  TINTED
                  <br />
                  MOISTURIZER
                </div>

                <p className="the-white-tea-tinted">
                  The white tea tinted moisturizer from
                  <br />
                  Winky Lux is absolutely the best
                  <br />
                  product I&#39;ve found!
                </p>

                <div className="text-wrapper-76">05/25/25</div>

                <div className="group-10">
                  <div className="text-wrapper-68">
                    Was this review helpful?
                  </div>

                  <div className="button-this-review" />

                  <div className="text-wrapper-69">0</div>

                  <div className="button-this-review-2" />

                  <div className="text-wrapper-70">0</div>
                </div>

                <div className="image-6">
                  <div className="image-fill">
                    <div className="image-2">
                      <img
                        className="vector-12"
                        alt="Vector"
                        src="/img/vector-44.svg"
                      />
                    </div>
                  </div>
                </div>

                <div className="overlap-13">
                  <div className="overlap-9">
                    <img className="SVG-15" alt="Svg" src="/img/svg-2.svg" />

                    <div className="SVG-16">
                      <img
                        className="vector-14"
                        alt="Vector"
                        src="/img/vector-46.svg"
                      />
                    </div>

                    <img
                      className="img-out-of-stars"
                      alt="Img out of stars"
                      src="/all_star.jpg"
                    />
                  </div>

                  <div className="text-wrapper-77">Kate W. 🇺</div>

                  <div className="text-wrapper-66">Verified Buyer</div>
                </div>

                <div className="heading-absolutely">
                  ABSOLUTELY THE
                  <br />
                  BEST UNDER EYE
                </div>

                <p className="absolutely-the-best">
                  Absolutely the best under eye
                  <br />
                  concealer out there! This provides
                  <br />
                  fantastic full coverage for my dark
                  <br />
                  circles and it&#39;s a nice silky coverage
                  <br />
                  that I wear every single day. Thank
                  <br />
                  you for creating this wonderful eye
                  <br />
                  concealer. I love it!
                </p>

                <div className="text-wrapper-78">08/09/25</div>

                <div className="group-11">
                  <div className="text-wrapper-68">
                    Was this review helpful?
                  </div>

                  <div className="button-this-review" />

                  <div className="text-wrapper-69">0</div>

                  <div className="button-this-review-2" />

                  <div className="text-wrapper-70">0</div>
                </div>

                <div className="image-7">
                  <div className="image-fill">
                    <div className="image-2">
                      <img
                        className="vector-12"
                        alt="Vector"
                        src="/img/vector-44.svg"
                      />
                    </div>
                  </div>
                </div>

                <div className="navigation">
                  <div className="button-goto-previous">
                    <div className="SVG-17" />
                  </div>

                  <div className="list-2">
                    <div className="item-button-page">
                      <div className="text-wrapper-79">1</div>
                    </div>

                    <div className="item-button-goto">
                      <div className="text-wrapper-80">2</div>
                    </div>

                    <div className="item-button-goto-2">
                      <div className="text-wrapper-80">3</div>
                    </div>

                    <div className="item-button-goto-3">
                      <div className="text-wrapper-80">4</div>
                    </div>

                    <div className="item-button-goto-4">
                      <div className="text-wrapper-80">5</div>
                    </div>
                  </div>

                  <div className="button-goto-next">
                    <div className="SVG-18" />
                  </div>
                </div>
              </div>
            </div>

            <img
              className="container-9"
              alt="Container"
              src="/img/container-2.svg"
            />

            <div className="background-11">
              <div className="container-10">
                <div className="container-11">
                  <div className="background-12" />

                  <div className="background-13" />
                </div>

                <div className="container-12">
                  <div className="background-12" />

                  <div className="background-14" />
                </div>

                <div className="container-13">
                  <div className="background-12" />

                  <div className="background-15" />
                </div>

                <div className="container-14">
                  <div className="background-12" />

                  <div className="background-13" />
                </div>

                <div className="container-15">
                  <div className="background-12" />

                  <div className="give-get-when-wrapper">
                    <p className="give-get-when">
                      GIVE $15, GET $15 WHEN YOU REFER A FRIEND
                    </p>
                  </div>

                  <div className="background-15" />
                </div>

                <div className="container-16">
                  <div className="background-12" />

                  <div className="background-13" />
                </div>

                <div className="container-17">
                  <div className="background-12" />

                  <div className="background-14" />
                </div>

                <div className="container-18">
                  <div className="background-12" />

                  <div className="background-15" />
                </div>

                <div className="container-19">
                  <div className="background-12" />

                  <div className="background-13" />
                </div>

                <div className="container-20">
                  <div className="background-12" />

                  <div className="background-15" />
                </div>

                <div className="container-21">
                  <div className="background-12" />

                  <div className="background-13" />
                </div>
              </div>
            </div>
          </div>

          <footer className="footer">
            <div className="container-22">
              <div className="strong-stay-in-touch">Stay in Touch</div>

              <p className="sign-up-for-emails">
                Sign up for emails &amp; get 15% off your first purchase!
              </p>

              <div className="form-2">
                <div className="input-email">
                  <div className="container-23">
                    <div className="text-wrapper-81">Email</div>
                  </div>
                </div>

                <button className="sign-up-wrapper">
                  <div className="sign-up">SIGN UP</div>
                </button>
              </div>

              <div className="overlap-14">
                <p className="text-wrapper-82">
                  By submitting your email you agree to our
                </p>

                <div className="link-6">
                  <div className="text-wrapper-83">Terms and Conditions</div>
                </div>
              </div>

              <div className="overlap-group-10">
                <div className="and"> and</div>

                <div className="link-7">
                  <div className="text-wrapper-84">Privacy Policy</div>
                </div>
              </div>

              <div className="text-wrapper-85">.</div>

              <div className="link-8">
                <div className="text-wrapper-86">Need Help? Let’s Chat</div>
              </div>

              <div className="link-9">
                <div className="text-wrapper-87">winky@winkylux.com</div>
              </div>

              <p className="text-wrapper-88">
                Catch us online Mon - Fri, 9am - 5pm EST
              </p>
            </div>

            <div className="navigation-footer">
              <div className="text-wrapper-89">Shop</div>

              <div className="SVG-19">
                <div className="overlap-group-11">
                  <img
                    className="vector-15"
                    alt="Vector"
                    src="/img/vector-72.svg"
                  />

                  <img
                    className="vector-16"
                    alt="Vector"
                    src="/img/vector-73.svg"
                  />
                </div>
              </div>
            </div>

            <div className="navigation-secondary">
              <div className="text-wrapper-90">Customer Care</div>

              <div className="SVG-19">
                <div className="overlap-group-11">
                  <img
                    className="vector-15"
                    alt="Vector"
                    src="/img/vector-72.svg"
                  />

                  <img
                    className="vector-16"
                    alt="Vector"
                    src="/img/vector-73.svg"
                  />
                </div>
              </div>
            </div>

            <div className="navigation-tertiary">
              <div className="text-wrapper-91">Explore</div>

              <div className="SVG-19">
                <div className="overlap-group-11">
                  <img
                    className="vector-15"
                    alt="Vector"
                    src="/img/vector-72.svg"
                  />

                  <img
                    className="vector-16"
                    alt="Vector"
                    src="/img/vector-73.svg"
                  />
                </div>
              </div>
            </div>

            <div className="link-10" />

            <img className="list-3" alt="List" src="/img/list-1.svg" />

            <p className="text-wrapper-92">
              © 2025 Glow Concept, Inc. All rights reserved.
            </p>

            <div className="link-11">
              <div className="text-wrapper-93">Privacy Policy</div>
            </div>

            <div className="link-12">
              <div className="text-wrapper-94">Terms of Service</div>
            </div>

            <div className="button-accessibility"> Accessibility</div>

            <div className="text-wrapper-95">Shopping in:</div>

            <div className="options-footer">
              <div className="text-wrapper-96">USD</div>
            </div>
          </footer>
        </div>
      </div>

      <div className="iframe">
        <div className="html-body-button">
          <div className="img-4">
            <img className="vector-18" alt="Vector" src="/img/vector-80.svg" />
          </div>
        </div>
      </div>
      <div className="sticky-cart">
        <button className="primary-cta">ADD TO BAG</button>
        <div className="slide-text-container">
          <div className="slide-texts">
            <div className="troopod_delivery_info">
              30-Day Money-Back Guarantee
            </div>
            <div className="troopod_delivery_info">
              Cruelty-Free & Clean Beauty
            </div>
            <div className="troopod_delivery_info">100% Secure Checkout</div>
          </div>
        </div>
      </div>
    </div>
  );
};
