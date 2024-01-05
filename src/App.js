import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "./feature/Navbar";
import picture from "./images/IMG_5960_2-removebg-preview.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import book from "./images/book.png";
import brain from "./images/brain (1).png";
import light from "./images/light.png";
import spiral from "./images/spiral.webp";
import dots from "./images/frame.webp";
import { useSpring, animated } from "react-spring";
import { Link } from "react-router-dom";
import whiteDots from "./images/whiteDots.png";
import about from "./images/marvin-meyer-SYTO3xs06fU-unsplash.jpg";
import project1 from "./images/Screenshot 2023-04-19 at 12.19.57.png";
import project2 from "./images/Screenshot 2023-05-08 at 18.08.38.png";
import project3 from "./images/img1.png";
import { Button, Snackbar, SnackbarContent, TextField } from "@mui/material";
import whiteSmalldots from "./images/whiteSmalldots.png";
import quote from "./images/quote2.webp";
import { useFormik } from "formik";
import * as Yup from "yup";

function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string().required("Message is required"),
});

function App() {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarColor, setSnackbarColor] = useState("");

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      emailjs
        .send(
          "service_t6exg8s",
          "template_lfjbgap",
          values,
          "3Ap5vY4h11rvt8C3m"
        )
        .then((response) => {
          console.log(
            "Email sent successfully!",
            response.status,
            response.text
          );
          resetForm();
          setSnackbarColor("#4CAF50");
          setSnackbarOpen(true);
        })
        .catch((error) => {
          console.error("Email sending failed:", error);
        });
      console.log("Form submitted:", values);
    },
  });

  return (
    <>
      <Navbar />
      <div>
        <section className="home" id="home">
          <div
            className="flex flex-row font-calistoga pt-20 pl-6  md:pt-52 md:px-28  text-[#24315E] relative overflow-hidden"
            id="home"
            style={{
              backgroundImage:
                "url(http://shtheme.com/demosd/trito/wp-content/uploads/2023/07/1.jpg)",
              height: "90vh",
              width: "",
            }}
          >
            <div className=" flex flex-col   ">
              <div className="flex flex-col ">
                <p className=" text-[35px] font-space ">Hi I'm</p>
                <h2 className=" text-[60px] py-1">Ayomikun Agbeja</h2>
                <p className="text-[21px]">A Web Developer based in Nigeria</p>
              </div>

              <div className="flex flex-row gap-5 py-10 items-center">
                <a href="#contact">
                  <button className="block text-[#24315E]  py-2 px-8  bg-white  border border-[#24315E] hover:bg-[#24315E] hover:text-white">
                    Say Hello
                  </button>
                </a>

                <a
                  href="#portfolio"
                  className="block scroll-smooth  text-[#24315E]  py-1 px-6 underline hover:no-underline "
                >
                  My Work
                </a>
              </div>
              <div>
                <p className="italic font-inter  pt-28   md:w-[80%] absolute z-10 ">
                  "I listen to your needs and thoughtfully interpret your
                  <br />
                  requirements."
                </p>
                <img
                  alt="props"
                  src={quote}
                  className="flex-col   mt-auto lg:flex-row lg:flex hidden absolute bottom-[5rem]  "
                ></img>
              </div>
            </div>

            <div className="flex flex-row">
              <div className=" flex items-center justify-center overflow-hidden">
                <img
                  alt="props"
                  src={picture}
                  className="mt-16 absolute   right-[-5rem]  md:right-[10rem] bottom-0 w-80 md:w-[40%] "
                ></img>{" "}
              </div>
              <div className=" flex-col gap-6 mt-auto pb-4 md:flex-row md:flex hidden  absolute bottom-[3rem] right-[2rem]">
                <Link to="https://github.com/ayomikun2018">
                  <div className="bg-white rounded-full h-10 w-10 ">
                    {" "}
                    <GitHubIcon className="w-10 mt-2 ml-2" />
                  </div>
                </Link>
                <Link to="https://www.linkedin.com/in/ayomikun-agbeja-594079224/">
                  <div className="bg-white rounded-full h-10 w-10 ">
                    {" "}
                    <LinkedInIcon className="w-10 mt-2 ml-2" />
                  </div>
                </Link>
                <Link to="#">
                  <div className="bg-white rounded-full h-10 w-10 ">
                    {" "}
                    <TwitterIcon className="w-10 mt-2 ml-2" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-[#3D4970] flex  items-center justify-center sm:px-0 ">
            <div className="my-[8rem] max-w-[80rem] flex flex-col lg:gap-[4rem]">
              <div className=" grid grid-cols-1 lg:grid-cols-3 sm:ml-0 ml-2  ">
                {[
                  {
                    image: light,
                    title: "Dedication",
                    text: " I'm dedicated to bringing to life high end designs and products.",
                    className: "lg:border-r-2",
                  },
                  {
                    image: book,
                    title: "Smart Work",
                    text: " I work smartly and efficiently within the specified duration of projects.",
                    className: "lg:border-r-2  ",
                  },
                  {
                    image: brain,
                    title: "Intelligence",
                    text: " I'm innovative and intelligent and apply that to projects and services",
                  },
                ].map(({ image, title, text, className }, index) => (
                  <div
                    className={`${className} flex justify-center items-center col-span-1 self-start border-slate-300 hover:border-slate-500 transition duration-300 ease-in-out  p-3`}
                    key={index}
                  >
                    <div className="p-3 lg:p-6">
                      <div className="flex  items-center  font-calistoga text-[#ffff] text-[27px] gap-3 pb-4">
                        <img src={image} alt="props" className=" h-10 w-10" />
                        {title}
                      </div>
                      <p className=" font-inter text-[#abb8c3] ">{text}</p>
                    </div>
                  </div>
                ))}
                <p className=" font-inter text-[#abb8c3]"></p>
              </div>

              <div className="w-full flex flex-col lg:flex-row gap-8 items-center overflow-hidden relative  max-w-[80%] lg:md:max-w-[100%] mx-auto">
                <div className="   mt-20 w-full sm:pt-20  lg:pb-40 lg:px-10 ">
                  <div className="flex flex-row items-center gap-6 text-[#FF4612] divide-orange-600 font-inter">
                    <hr className="w-8 hidden" />
                    <hr className="w-8 " />
                    <p className=" text-lg font-calistoga ">My Skills</p>{" "}
                    <hr className="w-16" />
                  </div>
                  <div className="">
                    <h2 className="font-calistoga text-white  text-[41px]">
                      Everyday develop a skill
                    </h2>
                    <p className="text-[#abb8c3] text-lg ">
                      Over the last few years, I've worked on web and product
                      solutions for a range of startups, in a variety of
                      industries like Fintech and educational spaces. Some of
                      the work skills used
                    </p>
                  </div>
                </div>
                <img
                  alt="props"
                  src={spiral}
                  className="flex-col z-10  lg:flex-row lg:flex hidden absolute bottom-12  right-[1rem] "
                />
                <img
                  alt="props"
                  src={dots}
                  className="flex-col z-10  mt-auto lg:flex-row lg:flex hidden absolute top-[3rem] left-[40rem] "
                />
                <div className="  w-full   ">
                  <div className="flex flex-row font-calistoga lg:px-14 lg:py-16 text-[#24315E] relative bg-[url(https://shtheme.com/demosd/trito/wp-content/uploads/2023/07/1-1.jpg)] ">
                    <div className="p-8  ">
                      <ul className=" font-calistoga text-[#24315E] flex flex-wrap gap-2">
                        {[
                          { skill: "Html" },
                          { skill: "Css" },
                          { skill: "Tailwind Css" },
                          { skill: "Bootstrap" },
                          { skill: "Javascript" },
                          { skill: "Firebase" },
                          { skill: "Git" },
                          { skill: "React Js" },
                          { skill: "Next Js" },
                        ].map(({ skill }, index) => (
                          <li className="border   px-6 py-3 border-[#24315E] bg-white text-center  ">
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" lg:gap-10 gap-4  lg:justify-evenly   grid grid-cols-1 lg:grid-cols-3  md:grid-cols-2 font-space p-10 sm:px-10     ">
                {[
                  {
                    number: <Number n={10} />,
                    symbol: "+",
                    trait: "Open Source Projects",
                  },
                  {
                    number: <Number n={100} />,
                    symbol: "%",
                    trait: "Satisfaction Guaranteed",
                  },
                  {
                    number: <Number n={5} />,
                    symbol: "+",
                    trait: "Live Projects",
                  },
                ].map(({ number, symbol, trait }, index) => (
                  <div
                    className="flex flex-row gap-2 items-center "
                    key={index}
                  >
                    <div className="flex flex-row text-white text-[70px] underline ">
                      {number}
                      {symbol}
                    </div>
                    <h4 className="text-[#abb8c3] text-[20px] w-[10rem]">
                      {trait}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className=" " id="about">
          <div className=" mx-auto p-5 lg:px-20 lg:py-28  relative bg-[url(https://shtheme.com/demosd/trito/wp-content/uploads/2023/07/background.jpg)] ">
            <div className="lg:flex lg:flex- row lg:gap-24 gap-5">
              <img src={about} alt="props" className=" sm:w-[45%] w-full   " />

              <div className="flex  flex-col gap-4 p-3">
                <div className="flex flex-row items-center gap-4 py-5 text-[#FF4612] divide-orange-600 font-inter">
                  <hr className="w-8 hidden" />
                  <hr className="w-8 " />
                  <p className=" text-xl font-calistoga ">About Me</p>{" "}
                  <hr className="w-16" />
                </div>
                <h2 className=" font-calistoga text-[30px]  text-[#24315E]">
                  {" "}
                  I can help bring designs to life
                </h2>
                <h2 className="font-inter text-lg text-[#24315E] ">
                  I'm a Front-end developer with problem solving skills. I love
                  to create beautiful and high performance applications with
                  delightful user experiences. Creating applications that are
                  realistic and solve real life problems is very paramount for
                  me.
                  <h2 className="mt-4">
                    {" "}
                    I am curious about new digital technologies that ultimately
                    combines usability with visual design and use an
                    entrepreneurial mindset in designing systems generally.
                  </h2>
                </h2>
                <a href="#contact" smooth>
                  <button className="  w-[25%] font-inter  text-white bg-[#24315E] px-4 py-4 hover:bg-white hover:outline-dotted hover:text-slate-800  ">
                    Hire Me
                  </button>
                </a>
              </div>
            </div>
            <img
              alt="props"
              src={whiteDots}
              className="flex-col z-10  mt-auto lg:flex-row lg:flex hidden absolute  left-[79rem] top-[30rem]  w-40"
            />
          </div>
        </section>
        <section
          className=" flex items-center justify-center bg-[#24315E]"
          id="portfolio"
        >
          <div class=" my-28  grid md:grid-cols-2 gap-10  ">
            {[
              {
                id: 1,
                image: project1,
                title: "Chat Application",
                description: "Helps connects with friends and family",
                tech: "Built with React.Js, CSS and Firebase",
                url: "https://chat-app-tau-khaki.vercel.app/",
              },
              {
                id: 2,
                image: project2,
                title: "Citrone",
                subtitle: "Learning Management System",
                description: "Ready to go learning",
                tech: "Built with React.Js, TailwindCSS ",
                url: "https://citrone-redesign-group-a.vercel.app/",
              },
              {
                id: 3,
                image: project3,
                title: "React Meals",
                subtitle: "Food Order Application",
                description:
                  "Place an order for your favorite meals and make payments",
                tech: "Built with React.Js, CSS and Firebase Rest API",
                url: "https://react-meals-hho5.vercel.app/",
              },
              {
                id: 4,
                image: project3,
                title: "Citrone",
                subtitle: "Learning Management System",
                description: "Ready to go learning",
                url: "Built with React.Js, TailwindCSS ",
              },
            ].map(({ image, title, subtitle, description, tech, id, url }) => (
              <a href={url} target="_blank" rel="noopener noreferrer">
                <div className="relative group col-span-1 " key={id}>
                  <div className="  overflow-hidden">
                    <img
                      alt="props"
                      src={image}
                      className="w-full  object-cover object-center transition-transform transform scale-100 group-hover:scale-110"
                    ></img>
                  </div>
                  <div class="  absolute top-0 left-0 inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                    <div class=" bg-[#ffc107] w-full h-full text-white flex flex-col gap-4 items-center justify-center hover:opacity-80 font-inter   ">
                      <h3 className=" uppercase font-extrabold">{title}</h3>
                      <span>{subtitle}</span>
                      <span>{description}</span>
                      <span>{tech}</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
        <section className="" id="services">
          <div
            className=" flex flex-col gap-10 items-center text-center font-calistoga   mx-auto p-5 lg:px-20 lg:py-28 py-16 relative bg-[url(https://shtheme.com/demosd/trito/wp-content/uploads/2023/07/1.jpg)] "
            id="home"
          >
            <img
              alt="props"
              src={whiteDots}
              className="flex-col z-10  mt-auto lg:flex-row lg:flex hidden absolute  left-[79rem] top-[10rem]  w-40"
            />
            <img
              alt="props"
              src={whiteDots}
              className="flex-col z-10  mt-auto lg:flex-row lg:flex hidden absolute  left-[2rem] top-[1rem]  w-40"
            />
            <h1 className=" lg:px-40 px-10 text-[#24315E] lg:font-extrabold lg:text-[25px] font-semibold text-[18px]  ">
              I'm open to exciting new opportunities. I would love to hear what
              you are working on and find a way to work together, I'm just a
              click away.
            </h1>
            <a href="#contact">
              <button className="bg-[#24315E] hover:bg-white hover:text-[#24315E]  lg:py-4 lg:px-10  px-3 py-3  text-white font-inter hover:outline-dotted ">
                Get Started
              </button>
            </a>
          </div>
        </section>
        <section className="" id="contact">
          <div
            className=" flex lg:flex-row flex-col lg:gap-40 justify-center   font-inter text-white   mx-auto p-5 lg:px-20 lg:py-28 py-16 relative bg-[url(https://shtheme.com/demosd/trito/wp-content/uploads/2023/07/background-1.jpg)] "
            id="home"
          >
            <img
              src={whiteSmalldots}
              alt="props"
              className="flex-col z-10  mt-auto lg:flex-row lg:flex hidden absolute  left-[82rem] top-[40rem]  w-430"
            />
            <img
              src={whiteSmalldots}
              alt="props"
              className="flex-col z-10  mt-auto lg:flex-row lg:flex hidden absolute  left-[1rem] top-[10rem]  w-30"
            />
            <div className=" font-calistoga  flex flex-col gap-4">
              <div className="flex flex-row items-center gap-4 py-5 text-[#FF4612] divide-orange-600 font-inter">
                <hr className="w-8 hidden" />
                <hr className="w-8 " />
                <p className=" text-xl font-calistoga ">Contact</p>{" "}
                <hr className="w-16" />
              </div>
              <h2 className=" font-calistoga text-[40px]">Drop me a line</h2>
              <div className=" font-inter text-gray-500">
                {" "}
                Call:
                <h2 className="underline  font-inter md:text-[30px] text-[20px] font-light text-white">
                  +234 816 723 8042
                </h2>
              </div>
              <div className=" font-inter text-gray-500">
                {" "}
                Email:
                <h2 className="underline  font-inter md:text-[30px]  font-light text-white text-[20px] ">
                  ayomikunesther12@gmail.com
                </h2>
              </div>

              <div className=" flex flex-col  font-inter mt-10 bg-[rgba(255,255,255,.1)] p-5">
                <span className=" bg-amber-200 italic w-20 text-lg ">
                  {" "}
                  . Mikun
                </span>
                <br />
                <p>2023 Made with &#128155;</p>
              </div>
            </div>

            <form
              className="flex flex-col gap-6 bg-white px-16 pb-10 pt-16 lg:w-[40%] mt-[20px] font-space  "
              onSubmit={formik.handleSubmit}
            >
              <TextField
                label="Name"
                className=" w-[100%] "
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
              <TextField
                label="Email"
                className=" w-[100%]"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
                label="Message"
                rows={5}
                multiline={true}
                className=" w-[100%] h-[100%]"
                name="message"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                error={formik.touched.message && Boolean(formik.errors.message)}
                helperText={formik.touched.message && formik.errors.message}
              />

              <button className=" bg-[#06D8A7] hover:bg-[#24315E] hover:text-white   py-4  text-[#24315E] rounded-md">
                Submit Message
              </button>
              <Snackbar
                open={snackbarOpen}
                autoHideDuration={4000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                severity="success"
              >
                <SnackbarContent
                  style={{ backgroundColor: snackbarColor, color: "white" }}
                  message="Message Sent!"
                  action={
                    <Button
                      color="inherit"
                      size="small"
                      onClick={handleCloseSnackbar}
                    >
                      X
                    </Button>
                  }
                />
              </Snackbar>
              <div className="flex  gap-4  items-center justify-center">
                <div className="bg-[#24315E] rounded-full h-10 w-10 ">
                  {" "}
                  <LinkedInIcon className="w-10 mt-2 ml-2 " />
                </div>
                <div className=" rounded-full h-10 w-10 bg-[#24315E]">
                  {" "}
                  <GitHubIcon className="w-10 mt-2 ml-2 bg-[#24315E]" />
                </div>
                <div className=" rounded-full h-10 w-10 bg-[#24315E] ">
                  {" "}
                  <TwitterIcon className="w-10 mt-2 ml-2 bg-[#24315E]" />
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>

      <div></div>
    </>
  );
}

export default App;
