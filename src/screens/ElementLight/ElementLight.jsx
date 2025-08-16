import React, { useEffect } from "react";
import "./style.css";
import Ad1 from "../../../public/hero-video.mp4";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
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
    const navOffset = nav.offsetTop;

    window.addEventListener("scroll", () => {
      if (window.scrollY > navOffset) {
        nav.classList.add("sticky");
      } else {
        nav.classList.remove("sticky");
      }
    });
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
              {/* Hero Video Section */}
              <div className="hero-video-container">
                <video className="hero-video" autoPlay muted loop playsInline>
                  <source src={Ad1} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Product Title */}
              <div className="product-title-section">
                <h1 className="product-title">
                  Peeper Perfect Under-Eye Concealer
                </h1>
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
                      ⭐⭐⭐⭐⭐ 966 Reviews | Afterpay Available
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
                      ✅ Free shipping over $30
                    </span>
                    <span className="trust-item">✅ Hassle-free returns</span>
                    <span className="trust-item">✅ Cruelty-free</span>
                  </div>
                </div>
              </section>

              <div className="form">
                <div className="tolstoy-stories">
                  <div className="heading-tolstoy">See It In Action</div>

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

                  <div className="text-wrapper-14">What It Is</div>
                </div>

                <div className="details-slot-summary-2">
                  <div className="overlap-3">
                    <div className="horizontal-divider" />

                    <div className="horizontal-divider-2" />
                  </div>

                  <div className="why-it-s-special">Why It&#39;s Special</div>
                </div>

                <div className="details-slot-summary-3">
                  <div className="overlap-3">
                    <div className="horizontal-divider" />

                    <div className="horizontal-divider-2" />
                  </div>

                  <div className="text-wrapper-15">How To Use It</div>
                </div>

                <div className="details-slot-summary-4">
                  <div className="overlap-3">
                    <div className="horizontal-divider" />

                    <div className="horizontal-divider-2" />
                  </div>

                  <div className="text-wrapper-16">Shade Information</div>
                </div>

                <div className="details-slot-summary-5">
                  <div className="overlap-3">
                    <div className="horizontal-divider" />

                    <div className="horizontal-divider-2" />
                  </div>

                  <div className="text-wrapper-17">Ingredients</div>
                </div>

                <div className="details-slot-summary-6">
                  <div className="overlap-3">
                    <div className="horizontal-divider" />

                    <div className="horizontal-divider-2" />
                  </div>

                  <div className="text-wrapper-18">FAQS</div>
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

                <div className="heading-pairs-well">Pairs Well With</div>

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

              <div id="stickyNav" class="nav-container">
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

                  <div className="testimonial-cta">
                    <h3>Ready to Join Them?</h3>
                    <p>
                      Over 966 customers have discovered their secret to looking
                      refreshed
                    </p>
                    <button
                      className="cta-button primary"
                      data-action="add-to-cart-testimonials"
                    >
                      Get Your Concealer - $18.00
                    </button>
                  </div>
                </div>
              </section>

              <div className="section-3">
                <div className="container-6">
                  <div className="heading-get-to">
                    GET TO KNOW
                    <br />
                    THE KEY
                    <br />
                    INGREDIENTS
                  </div>

                  <div className="overlap-group-8">
                    <div className="strong-collagen">Collagen</div>

                    <div className="background-5" />
                  </div>

                  <p className="hydrolyzed-collagen">
                    <span className="text-wrapper-35">
                      (Hydrolyzed Collagen)
                    </span>

                    <span className="text-wrapper-36">: </span>

                    <span className="text-wrapper-35">Helps improve</span>
                  </p>

                  <p className="skin-elasticity-and">
                    skin elasticity and reduce the appearance of
                    <br />
                    wrinkles while plumping skin for a youthful
                    <br />
                    appearance
                  </p>

                  <div className="strong-hyaluronic-wrapper">
                    <div className="strong-hyaluronic">Hyaluronic acid</div>
                  </div>

                  <p className="strong">
                    <span className="text-wrapper-37">:</span>

                    <span className="text-wrapper-36">&nbsp;</span>

                    <span className="text-wrapper-35">
                      Helps reduce the look of fine lines
                    </span>
                  </p>

                  <p className="and-wrinkles-by">
                    and wrinkles by increasing your skin’s ability to
                    <br />
                    retain moisture to promote a hydrated, supple 
                    <br />
                    appearance
                  </p>

                  <p className="strong-glycerin">
                    <span className="span">Glycerin: </span>

                    <span className="text-wrapper-3">
                      Helps prevent dryness by attracting
                      <br />
                      moisture to the surface layer of the skin
                    </span>
                  </p>

                  <div className="strong-vitamin-e-wrapper">
                    <div className="strong-vitamin-e">Vitamin E</div>
                  </div>

                  <div className="overlap-6">
                    <div className="text-wrapper-38">(Tocopherol)</div>

                    <div className="background-6">
                      <div className="text-wrapper-39">:</div>
                    </div>
                  </div>

                  <div className="text-wrapper-40">
                    Moisturizes and conditions
                  </div>
                </div>

                <div className="overlay-wrapper">
                  <div className="overlay">
                    <div className="winky-lux-image-2" />
                  </div>
                </div>
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
                  <div className="customer-reviews">
                    Customer
                    <br />
                    Reviews
                  </div>

                  <div className="link-trusted-reviews">
                    <div className="text-wrapper-41">Trusted reviews by</div>

                    <div className="SVG-8" />
                  </div>
                </div>

                <img
                  className="img-out-of"
                  alt="Img out of"
                  src="/img/img-4-7-out-of-5-stars.svg"
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
                      src="/img/vector-34.svg"
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
                      src="/img/vector-35.svg"
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
                      src="/img/vector-36.svg"
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
                      src="/img/vector-37.svg"
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
                      src="/img/vector-38.svg"
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
                      src="/img/img-5-out-of-5-stars-2.svg"
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
                      src="/img/img-5-out-of-5-stars-4.svg"
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
                      src="/img/img-5-out-of-5-stars-1.svg"
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
                      src="/img/img-5-out-of-5-stars.svg"
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
                      src="/img/img-5-out-of-5-stars-3.svg"
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
