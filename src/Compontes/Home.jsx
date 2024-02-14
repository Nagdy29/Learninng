import * as React from "react";
import "react-slideshow-image/dist/styles.css";
import h1 from "../Images/home.avif";
import h3 from "../Images/h3.webp";
import { Link } from "react-router-dom";
import { Company } from "./Company";
import { Container, Row, Col } from "reactstrap";
import CountUp from "react-countup";
import aboutimg from "../Images/course-3.jpg";
import c1 from "../Images/course-3.jpg";
import c2 from "../Images/cat-2.jpg";
import c3 from "../Images/kids-learning.png";
import c4 from "../Images/kids-learning.png";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import av1 from "../Images/clients/21.jpg";
import av2 from "../Images/clients/6.jpg";
import { FaBook } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import av3 from "../Images/clients//4.jpg";
import av4 from "../Images/clients/3.jpg";
import c5 from "../Images/close-up-hand-writing-notebook-top-view_23-2148888824.avif";
import c6 from "../Images/home.avif";
import { motion } from "framer-motion";
import { fadeIn } from "../Compontes/anamation/variants";
import { Footer } from "./Footer";
import in1 from "../Images/team-1.jpg";
import { FaPlayCircle } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export const Home = () => {
  return (
    <>
      <div>
        <div className="">
          <div
            id="carouselExampleRide"
            class="carousel slide"
            data-bs-ride="true"
          >
            <div class="carousel-inner">
              <div class="carousel-item active position-relative">
                <img src={h1} class="d-block w-100" alt="..." />
                <div class="image-overlay"></div>
                <div className="position-absolute  home-text">
                  <motion.h3
                    variants={fadeIn("up", 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.3 }}
                    className="display-6 my-2"
                  >
                    Best Online Courses
                  </motion.h3>
                  <h1 className="display-3 w-75">
                    The Best Online Learning Platform
                  </h1>
                  <div className=" d-flex gap-3">
                    <Link to="/login">
                      <button className="btn btn-outline-light">JoinNow</button>
                    </Link>
                    <Link to="/contact">
                      <button className="btn btn-success comment">
                        Leava comment
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div class="carousel-item active position-relative">
                <img src={h3} class="d-block w-100" alt="..." />
                <div class="image-overlay"></div>
                <div className="position-absolute  home-text">
                  <h3 className="display-6 my-2">Best Online Courses</h3>
                  <h1 className="display-3 w-75">
                    Get Educated Online From Your Home{" "}
                  </h1>
                  <div className=" d-flex gap-3">
                    <Link to="/login">
                      <button className="btn btn-outline-light">JoinNow</button>
                    </Link>
                    <Link to="/contact">
                      <button className="btn btn-success comment">
                        Leava comment
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleRide"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleRide"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <div className="my-5 mx-2 gap-2">
            <Company />
          </div>

          <div className="about-sec">
            <section className="d-flex align-items-center justify-content-center py-4">
              <Container>
                <Row>
                  <Col lg="6" md="6">
                    <div className="about__img">
                      <motion.img
                        variants={fadeIn("up", 0.4)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.3 }}
                        src={aboutimg}
                        alt=""
                        className="w-100"
                      />
                    </div>
                  </Col>

                  <Col lg="6" md="6">
                    <div className="about__content">
                      <motion.h2
                        variants={fadeIn("up", 0.4)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.3 }}
                        className="fw-lighter"
                      >
                        About Us
                      </motion.h2>
                      <motion.h3
                        variants={fadeIn("up", 0.4)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.3 }}
                        className="fs-2 fw-semibold"
                      >
                        Welcome to eLEARNING
                      </motion.h3>
                      <div className="about__counter">
                        <div className=" d-flex gap-5 align-items-center my-4">
                          <div className="single__counter">
                            <span className="counter">
                              <CountUp
                                start={0}
                                end={25}
                                duration={4}
                                suffix="K"
                              />
                            </span>

                            <p className="counter__title">Completed Projects</p>
                          </div>

                          <div className="single__counter">
                            <span className="counter">
                              <CountUp
                                start={0}
                                end={12}
                                duration={4}
                                suffix="M"
                              />
                            </span>

                            <p className="counter__title">
                              Patient Around World
                            </p>
                          </div>
                        </div>

                        <div className=" d-flex gap-5 align-items-center">
                          <div className="single__counter">
                            <span className="counter">
                              <CountUp
                                start={0}
                                end={95}
                                duration={4}
                                suffix="M"
                              />
                            </span>

                            <p className="counter__title">Ideas Raised Funds</p>
                          </div>

                          <div className="single__counter">
                            <span className="counter">
                              <CountUp
                                start={0}
                                end={5}
                                duration={4}
                                suffix="K"
                              />
                            </span>

                            <p className="counter__title">Categories Served</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
          </div>
        </div>
        <div>
          <div className=" d-flex courses-text align-items-center justify-content-center flex-column my-2">
            <motion.h2
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="mt-4 fw-normal"
            >
              CATEGORIES
            </motion.h2>
            <motion.p
              variants={fadeIn("left", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className=" fw-bold fs-1 mx-3 mb-4 "
            >
              Courses Categories
            </motion.p>{" "}
          </div>
        </div>
        <div className="catagory d-flex align-items-center justify-content-center">
          <div className="container row mx-5">
            <div className="col-lg-6 col-md-12 card-courses ">
              <div className="my-3 position-relative courses-cat">
                <motion.img
                  variants={fadeIn("up", 0.4)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.3 }}
                  src={c1}
                  alt=""
                  className="w-75"
                />
                <motion.div
                  variants={fadeIn("left", 0.4)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.3 }}
                  className="bg-light w-25 position-absolute my-1 px-1 mx-2 py-2 end-0 bottom-0 text-center text-courses"
                >
                  <h2>Web Design</h2>
                  <p>49 Courses</p>
                </motion.div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 card-courses ">
              <motion.div
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="my-3 position-relative courses-cat"
              >
                <img src={c2} alt="" className="w-75" />
                <div className="bg-light w-25 position-absolute my-1 px-1 mx-2 py-2 end-0 bottom-0 text-center text-courses  ">
                  <h2>Graphic Design</h2>
                  <p>25 Courses</p>
                </div>
              </motion.div>
            </div>
            <div className="col-lg-6 col-md-12 card-courses ">
              <motion.div
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="my-3 position-relative courses-cat"
              >
                <img src={c3} alt="" className="w-75" />
                <div className="bg-light w-25 position-absolute my-1 px-1 mx-2 py-2 end-0 bottom-0 text-center text-courses  ">
                  <h2>Graphic Design</h2>
                  <p>22 Courses</p>
                </div>
              </motion.div>
            </div>
            <div className="col-lg-6 col-md-12 ">
              <motion.div
                variants={fadeIn("left", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="my-3 position-relative courses-cat"
              >
                <img src={c4} alt="" className="w-75" />
                <div className="bg-light w-25 position-absolute my-1 px-1 mx-2 py-2 end-0 bottom-0 text-center text-courses  ">
                  <h2>Graphic Design</h2>
                  <p>44 Courses</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="instructor my-3">
          <div className="instructor-text d-flex align-items-center justify-content-center flex-column mb-4">
            <p>Instructor</p>
            <h2>Our Expert Instructor</h2>
          </div>
        </div>
        <div className="container row mx-5 d-flex align-items-center justify-content-center">
          <div className="col-lg-4 col-md-6 col-12 mb-5">
            <div className="tp-instructor position-relative">
              <div>
                <img src={in1} alt="" />
              </div>
              <div class="tp-instructor__content d-flex align-items-center justify-content-center my-3 flex-column">
                <span>Instructor</span>
                <h4>
                  <Link to="/instinfo" className="text-decoration-none name">
                    {" "}
                    Ali Reabe
                  </Link>
                </h4>
              </div>
              <div className="d-flex align-items-center gap-5">
                <div className="d-flex gap-2 align-items-center tp-instructor-icons ">
                  <FaPlayCircle size={25} className="icon" />
                  <h3>35 Classes</h3>
                </div>
                <div className="d-flex gap-2 align-items-center tp-instructor-icons ">
                  <PiStudentBold size={25} className="icon" />
                  <h3>291+ Students</h3>
                </div>
              </div>
              <div className="social-inst position-absolute">
                <div className="d-flex flex-column gap-2">
                  <FaFacebookF size={30} className="icons" />
                  <FaLinkedin size={30} className="icons" />
                  <FaYoutube size={30} className="icons" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12 mb-5">
            <div className="tp-instructor position-relative">
              <div>
                <img src={in1} alt="" />
              </div>
              <div class="tp-instructor__content d-flex align-items-center justify-content-center my-3 flex-column">
                <span>Instructor</span>
                <h4>
                  <Link to="/instinfo" className="text-decoration-none name">
                    {" "}
                    Ali Reabe
                  </Link>
                </h4>
              </div>
              <div className="d-flex align-items-center gap-5">
                <div className="d-flex gap-2 align-items-center tp-instructor-icons ">
                  <FaPlayCircle size={25} className="icon" />
                  <h3>35 Classes</h3>
                </div>
                <div className="d-flex gap-2 align-items-center tp-instructor-icons ">
                  <PiStudentBold size={25} className="icon" />
                  <h3>291+ Students</h3>
                </div>
              </div>
              <div className="social-inst position-absolute">
                <div className="d-flex flex-column gap-2">
                  <FaFacebookF size={30} className="icons" />
                  <FaLinkedin size={30} className="icons" />
                  <FaYoutube size={30} className="icons" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 mb-5">
            <div className="tp-instructor position-relative">
              <div>
                <img src={in1} alt="" />
              </div>
              <div class="tp-instructor__content d-flex align-items-center justify-content-center my-3 flex-column">
                <span>Instructor</span>
                <h4>
                  <a
                    href="https://e-pora-next.vercel.app/instructor"
                    className="text-decoration-none name"
                  >
                    {" "}
                    Ali Reabe
                  </a>
                </h4>
              </div>
              <div className="d-flex align-items-center gap-5">
                <div className="d-flex gap-2 align-items-center tp-instructor-icons ">
                  <FaPlayCircle size={25} className="icon" />
                  <h3>35 Classes</h3>
                </div>
                <div className="d-flex gap-2 align-items-center tp-instructor-icons ">
                  <PiStudentBold size={25} className="icon" />
                  <h3>291+ Students</h3>
                </div>
              </div>
              <div className="social-inst position-absolute">
                <div className="d-flex flex-column gap-2">
                  <FaFacebookF size={30} className="icons" />
                  <FaLinkedin size={30} className="icons" />
                  <FaYoutube size={30} className="icons" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="free-courses my-5">
          <div className="container">
            <Row>
              <motion.Col
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                lg="12"
                className="text-center mb-5"
              >
                <h2 className="fw-bold fs-1">Our Courses</h2>
              </motion.Col>
              <div className="row gap-5 d-flex align-items-center justify-content-center Courses-media">
                <Col lg="3" md="4" className="shadow-lg">
                  <div className="single__free__course">
                    <div className="free__course__img mb-3 mt-2">
                      <Link to="/contactdetials">
                        <img src={c6} alt="" className="w-100" />
                      </Link>
                      <p className="mt-1 fw-bold position-absolute end-0 text-info">
                        Free
                      </p>
                    </div>

                    <div className="free__course__details">
                      <h6>Basic Web Development Course</h6>

                      <div className=" d-flex align-items-center gap-5 justify-content-between mx-3">
                        <span className=" d-flex align-items-center gap-2">
                          <p className="fw-light">
                            {" "}
                            <FaBook className="icons-courses" size={25} />{" "}
                            12Leasons
                          </p>
                        </span>

                        <span className=" d-flex align-items-center gap-2">
                          <p className="fw-medium">
                            {" "}
                            <IoMdPerson className="icons-courses" size={25} />
                            12 k
                          </p>
                        </span>
                      </div>
                      <div className=" d-flex align-items-center gap-5 justify-content-between mx-3">
                        <span className=" d-flex align-items-center gap-2">
                          <p className="fw-light">
                            {" "}
                            <FaStar className="icons-courses" size={25} /> 5.6K
                          </p>
                        </span>

                        <span className=" d-flex align-items-center gap-2 mb-2 p-2">
                          <button className="btn btn-outline-info">
                            ADD Cart
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg="3" md="4" className="shadow-lg">
                  <div className="single__free__course">
                    <div className="free__course__img mb-3 mt-2">
                      <img src={c1} alt="" className="w-100" />
                      <p className="mt-1 fw-bold position-absolute end-0 text-info">
                        Free
                      </p>
                    </div>

                    <div className="free__course__details">
                      <h6>Basic Web Development Course</h6>

                      <div className=" d-flex align-items-center gap-5 justify-content-between mx-3">
                        <span className=" d-flex align-items-center gap-2">
                          <p className="fw-light">
                            {" "}
                            <FaBook className="icons-courses" size={25} />{" "}
                            12Leasons
                          </p>
                        </span>

                        <span className=" d-flex align-items-center gap-2">
                          <p className="fw-medium">
                            {" "}
                            <IoMdPerson className="icons-courses" size={25} />
                            12 k
                          </p>
                        </span>
                      </div>
                      <div className=" d-flex align-items-center gap-5 justify-content-between mx-3">
                        <span className=" d-flex align-items-center gap-2">
                          <p className="fw-light">
                            {" "}
                            <FaStar className="icons-courses" size={25} /> 5.6K
                          </p>
                        </span>

                        <span className=" d-flex align-items-center gap-2 mb-2 p-2">
                          <button className="btn btn-outline-info">
                            ADD Cart
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg="3" md="4" className="shadow-lg">
                  <div className="single__free__course">
                    <div className="free__course__img mb-3 mt-2">
                      <img src={c5} alt="" className="w-100" />
                      <p className="mt-1 fw-bold position-absolute end-0 text-info">
                        15 $
                      </p>
                    </div>

                    <div className="free__course__details">
                      <h6>Basic Web Development Course</h6>

                      <div className=" d-flex align-items-center gap-5 justify-content-between mx-3">
                        <span className=" d-flex align-items-center gap-2">
                          <p className="fw-light">
                            {" "}
                            <FaBook className="icons-courses" size={25} />{" "}
                            12Leasons
                          </p>
                        </span>

                        <span className=" d-flex align-items-center gap-2">
                          <p className="fw-medium">
                            {" "}
                            <IoMdPerson className="icons-courses" size={25} />
                            12 k
                          </p>
                        </span>
                      </div>
                      <div className=" d-flex align-items-center gap-5 justify-content-between mx-3">
                        <span className=" d-flex align-items-center gap-2">
                          <p className="fw-light">
                            {" "}
                            <FaStar className="icons-courses" size={25} /> 5.6K
                          </p>
                        </span>

                        <span className=" d-flex align-items-center gap-2 mb-2 p-2">
                          <button className="btn btn-outline-info">
                            ADD Cart
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                </Col>
              </div>
            </Row>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};
