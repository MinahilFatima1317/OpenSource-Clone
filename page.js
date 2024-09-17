"use client"
import React, { useState } from 'react';
import Link from 'next/link';

// Carousel Component (move this outside of Page component)
const CarouselComponent = () => {
  // State to track the current active slide
  const [activeSlide, setActiveSlide] = useState(1);

  const showSlide = (slideNumber) => {
    setActiveSlide(slideNumber);
  };

  return (
    <div className="relative w-full h-[500px]"> {/* Adjusted the height of the container */}
      <img
        className="object-cover w-[150%] h-[150%] bg-opacity-75"  /* Adjusted the size of the image */
        src="/images/bg1.jpg"
        alt="Background"
      />
      <div className="absolute top-80 inset-0 flex flex-col justify-center items-start text-white p-16 m-16">
        <h1 className="text-6xl font-bold animate__animated animate__backInDown">Open source project<br />management<br /> software</h1>
        <p className="mt-4 text-lg font-thin">Powerful classic, agile or hybrid project management in a  <br /> secure environment.</p>
        <div className="mt-6 flex space-x-4">
          <a
            href="kanban"
            className="animate__animated animate__backInDown bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Started
          </a>

          <a
            href="/intro"
            className="text-white font-thin  py-2 px-4 flex items-center space-x-2 hover:text-blue-400"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 10l-6 4V6l6 4z"
              />
            </svg>
            <span>Watch Introduction</span>
          </a>
        </div>
      </div>
      <div className="absolute top-60 right-0 h-full w-1/2 flex items-center justify-center">
        <img src="images/2bg.jpg" alt="Right Side Background" className="object-cover w-full h-full" />
      </div>
      <div>
        <div className='justify-center text-center font-mono mt-14 mb-6 text-xl'>
          SUCCESSFUL COMPANIES TRUST OPENPROJECT
        </div>
        <div className="flex justify-center flex-wrap gap-4 ">
          <img src="images/siemens.jpg" alt="pic" className="object-contain" />
          <img src="images/stadt.jpg" alt="pic" className="object-contain" />
          <img src="images/bahn.jpg" alt="pic" className="object-contain" />
          <img src="images/fraun.jpg" alt="pic" className="object-contain" />
          <img src="images/linux.jpg" alt="pic" className="object-contain" />
          <img src="images/greenP.jpg" alt="pic" className="object-contain " />
          <img src="images/charite.jpg" alt="pic" className="object-contain " />
          <img src="images/amg.jpg" alt="pic" className="object-contain" />
        </div>
      </div>



      <div className="relative w-full h-[500px]">
        <img
          className="object-cover w-full h-full absolute inset-0"
          src="/images/nodes.jpg"
          alt="Background"
        />
        {/* flex-col md:flex-row */}
        {/* flex flex-col  */}

        <div className="relative inset-0 flex flex-col text-center p-6 md:p-12 h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/images/nodes.jpg")' }}>

          {/* Centered Heading Section */}
          <div className="w-full flex flex-col items-center mb-auto mt-12">
            <p className="text-xl font-semibold text-black mb-2">Data sovereignty</p>
            <h1 className="text-4xl font-bold text-black mb-4">
              Maintain control of your data and stay secure
            </h1>
            <p className="text-lg text-black max-w-lg">
              Keep your data ownership: OpenProject protects your privacy in a secure environment with the highest standards in data security.
            </p>
          </div>

          <div className="flex justify-start mb-60 text-4xl font-semibold">
            <ul className="text-left mb-10 mt-28 ml-10 text-4xl font-semibold text-gray-700 cursor-pointer ">
              <li> Protect your data and privacy </li>
              <li> Keep system and network security </li>
              <li> Gain transparency with open source </li>
              <li> Trust our secure hosting </li>
            </ul>
          </div>



          {/* Image Slider Section */}
          <div className="absolute left-0 w-full   flex  overflow-hidden  p-4">
            <div className=" h-[705px]">
              <div
                className={`absolute  w-[700px] bottom-28 right-0 transition-opacity  duration-500 ${activeSlide === 1 ? 'opacity-100' : 'opacity-0'}`}
              >
                <img
                  src="/images/dataProtection.jpg"
                  className="max-w-full max-h-full rounded-xl object-contain"
                  alt="Data"
                />
              </div>
              <div
                className={`absolute  w-[700px] bottom-28 right-0 transition-opacity duration-500 ${activeSlide === 2 ? 'opacity-100' : 'opacity-0'}`}
              >
                <img
                  src="/images/security.jpg"
                  className="max-w-full max-h-full rounded-xl object-contain"
                  alt="Security"
                />
              </div>
              <div
                className={`absolute  w-[700px] bottom-28 right-0 transition-opacity duration-500 ${activeSlide === 3 ? 'opacity-100' : 'opacity-0'}`}
              >
                <img
                  src="/images/transparency.jpg"
                  className="max-w-full max-h-full rounded-xl object-contain"
                  alt="Transparency"
                />
              </div>
              <div
                className={`absolute  w-[700px] bottom-28 right-0 transition-opacity duration-500 ${activeSlide === 4 ? 'opacity-100' : 'opacity-0'}`}
              >
                <img
                  src="/images/peace.jpg"
                  className="max-w-full max-h-full rounded-xl object-contain"
                  alt="Peace"
                />
              </div>
            </div>

            {/* Slider Dots */}
            <div className="absolute bottom-3   left-0 flex justify-center w-full gap-2 ">
              <button
                className={`w-5 h-5 rounded-full ${activeSlide === 1 ? 'bg-gray-800' : 'bg-gray-400'}`}
                onClick={() => showSlide(1)}
                aria-label="Slide 1"
              ></button>
              <button
                className={`w-5 h-5 rounded-full ${activeSlide === 2 ? 'bg-gray-800' : 'bg-gray-400'}`}
                onClick={() => showSlide(2)}
                aria-label="Slide 2"
              ></button>
              <button
                className={`w-5 h-5 rounded-full ${activeSlide === 3 ? 'bg-gray-800' : 'bg-gray-400'}`}
                onClick={() => showSlide(3)}
                aria-label="Slide 3"
              ></button>
              <button
                className={`w-5 h-5 rounded-full ${activeSlide === 4 ? 'bg-gray-800' : 'bg-gray-400'}`}
                onClick={() => showSlide(4)}
                aria-label="Slide 4"
              ></button>
            </div>
          </div>
        </div>

        <div>
          <section className="relative w-full h-screen flex ">
            <div className="absolute inset-0 overflow-hidden">
              <img
                src="/images/wave.jpg"
                alt="Background Wave"
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
            </div>
            <div className="relative z-10 text-center text-black p-8 max-w-4xl mx-auto mt-6">
              <p className="text-lg mb-4">Project management</p>
              <h1 className="text-4xl font-bold leading-tight">
                Your base for classic, agile or hybrid project management
              </h1>
              <p className="text-lg mb-4 mt-4" >Boost team productivity and satisfaction with OpenProject, your go-to solution for seamless collaboration in any project management approach. Streamline work, enhance goal clarity, and assign tasks efficiently - all in one centralized platform.</p>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8">
                <img
                  className="rounded-xl max-w-max"
                  src="/images/pm2.jpg"
                  alt="Project Management"
                />
              </div>
            </div>
          </section>
          <div className="flex items-center mt-10">
            <img src="images/PPS.jpg" alt="" className=" h-auto max-w-max" />
            <div className="w-1/2 justify-center text-left mb-56 mr-12 text-xl">
              <p className="text-blue-900 mb-2 font-extralight tracking-wide">PROJECT PLANNING AND SECHDULING</p>
              <h1 className="text-3xl font-bold mb-4">Deliver your projects on time</h1>
              <p className="text-gray-800 font-light ">
                Collaboratively create and visualize project plans using Gantt charts in OpenProject. Break down the activities and create a detailed schedule that shows how and when deliverables within the project scope will be accomplished.
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-1/2 justify-center mb-56 ml-32 text-xl">
              <p className="text-blue-900 mb-2 font-extralight tracking-wide">AGLIE, SCRUM & KANBAN</p>
              <h1 className="text-3xl font-bold mb-4">Empower your teams</h1>
              <p className="text-gray-800 font-light">
                Use OpenProject's agile boards for efficient team organization and a clear view of project progress. Tailored for agile methodologies like Scrum and Kanban, it ensures streamlined collaboration.
              </p>
            </div>
            <div className="flex-shrink-0">
              <img src="images/empower.jpg" alt="" />
            </div>
          </div>
          <div className="flex items-start mt-5">
            <div className="flex-shrink-0">
              <img src="images/workload.jpg" alt="" className="h-auto max-w-max" />
            </div>
            <div className="w-1/2 text-left mb-28 mt-32 mr-20 text-xl">
              <p className="text-blue-900 mb-2 font-extralight tracking-wide">TEAM PLANNER</p>
              <h1 className="text-3xl font-bold mb-4">Visualize workload</h1>
              <p className="text-gray-800 font-light">
                Visually assign tasks to team members in a weekly or bi-weekly calendar to plan the activities with your team and to get a better perspective on the topics the team is working on.
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button className="bg-white text-blue-500 border border-blue-500 rounded-full px-6 py-2 w-64 hover:bg-blue-100 transition-colors">
              See all features
            </button>
          </div>

          <div className="relative">
            <img className="h-screen w-full object-cover" src="images/leverage.jpg" alt="Background Image" />

            <div className="absolute inset-0 flex items-center justify-start pl-10 text-white mt-56 ml-7 ">
              <div className="max-w-md ml-12">
                <p className="mb-2 font-extralight tracking-wide">OPEN SOURCE SOFTWARE</p>
                <h1 className="text-4xl font-bold mb-4">Leverage Open Source for yourself</h1>
                <p className="text-base mb-6">
                  OpenProject is home to a big community of open source enthusiasts, developers, businesses, and their projects. Be part of a global community – with open source and open mind.
                </p>
                <button className="text-white border border-white rounded-full px-6 py-2 w-64 hover:bg-blue-100 hover:text-blue-800 transition-colors mb-4">
                  Install OpenProject
                </button>
                <br />
                <a
                  href="https://github.com/opf/openproject"
                  className="text-white hover:text-blue-200 transition-colors mb-4 font-extralight tracking-wide"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  Code repository on Github
                </a>

                <div className="flex space-x-4 mt-4">
                  <a
                    href="/"
                    className="bg-white text-black hover:text-blue-600 hover:bg-gray-100 transition-colors px-4 py-2 rounded-lg flex items-center shadow-md hover:shadow-lg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 mr-2"
                    >
                      <path d="M12 .5a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.3-1.3-1.6-1.3-1.6-1-.6.1-.6.1-.6 1.2.1 1.8 1.2 1.8 1.2 1 .1 1.7.8 1.7.8 1.3 2.3 3.4 1.6 4.2 1.3.1-.9.5-1.6 1-2-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.4 1.3-3.3 0-.3-.6-1.7.1-3.5 0 0 1-.3 3.3 1.3a11 11 0 016 0c2.3-1.6 3.3-1.3 3.3-1.3.7 1.8.1 3.2.1 3.5.8.9 1.3 2 1.3 3.3 0 4.4-2.7 5.4-5.3 5.7.6.5 1 1.4 1 2.8v4.1c0 .3.2.7.8.6A12 12 0 0012 .5z" />
                    </svg>
                    @ opf
                  </a>

                  <a href="/" className="bg-white text-black hover:text-blue-600 hover:bg-gray-100 transition-colors px-3 py-1 rounded-lg flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 mr-2"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    Star
                    <span className="mx-2">|</span>
                    9082
                  </a>

                  <a href="/" className="bg-white hover:text-blue-600 text-black hover:bg-gray-100 transition-colors px-3 py-1 rounded-lg flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 mr-2"
                    >
                      <path d="M12 4a2 2 0 110-4 2 2 0 010 4zm-1 2v6.06a4 4 0 11-2 0V6h2zm7 0v6.06a4 4 0 11-2 0V6h2zM8 15.93a2 2 0 10-2 0 2 2 0 002 0zm8 0a2 2 0 10-2 0 2 2 0 002 0z" />
                    </svg>
                    Fork
                    <span className="mx-2">|</span>
                    2291
                  </a>
                </div>

                <div className='font-bold'>
                  <div className="absolute bottom-64 right-72 mb-8 mr-8 bg-blue-200 text-blue-950 rounded-full w-48 h-48 flex items-center text-center justify-center">
                    84765 <br /> commits
                  </div>
                  <div className="absolute bottom-80 right-1/3 mb-8 mr-8 bg-blue-950 text-white rounded-full w-36 h-36 flex items-center text-center justify-center">
                    20M <br /> downloads
                  </div>
                  <div className="absolute bottom-96 right-28 mb-8 mr-8 bg-blue-700 text-white rounded-full w-40 h-40 flex items-center text-center justify-center">
                    246 <br /> contributors
                  </div>
                  <div className="absolute bottom-32 right-1/3 mb-8 mr-8 bg-blue-100 text-blue-900 rounded-full w-32 h-32 flex items-center text-center justify-center">
                    235 <br /> releases
                  </div>
                  <div className="absolute bottom-32 right-28 mb-8 mr-8 bg-blue-100 text-blue-900 rounded-full w-44 h-44 flex items-center text-center justify-center">
                    16633 <br /> pull requests
                  </div>
                </div>
              </div>
            </div>
            <div>
              <nav className="bg-blue-950 text-white h-20">
                <ul className="flex items-center justify-evenly cursor-pointer h-full">
                  <li className="hover:text-blue-600 cursor-pointer"><Link href="/">Product roadmap</Link></li>
                  <li className="hover:text-blue-600 cursor-pointer"><Link href="/">Release notes</Link></li>
                  <li className="hover:text-blue-600 cursor-pointer"><Link href="/">Powerful API</Link></li>
                  <li className="hover:text-blue-600 cursor-pointer"><Link href="/">Develop and contribute</Link></li>
                  <li className="hover:text-blue-600 cursor-pointer"><Link href="/">Community forum</Link></li>
                  <li className="hover:text-blue-600 cursor-pointer"><Link href="/">Report a bug</Link></li>
                </ul>
              </nav>


            </div>
          </div>
          <div>
            <div className=' justify-center text-center mt-44'>
              <p className='font-normal tracking-wide text-xl'>PRODUCT</p>
              <h1 className='text-3xl font-bold mt-5'>The leading open source <br />
                project management software</h1>
              <p className='font-extralight tracking-wide text-lg mt-5'>Find your perfect set-up and choose between on-premises as well as flexible hosting options.</p>
            </div>
            <div className='flex gap-9 mt-9 justify-around ml-56 ' >
              <p className='ml-20 bg-blue-200 text-black font-light tracking-wide text-base rounded w-44 text-center'>SELF MANAGE</p>
              <p className='ml-64 bg-blue-200 text-black font-light tracking-wide text-base rounded w-80 text-center'>HOSTED BY OPENPROJECT</p>
            </div>
            <div className='flex justify-around mt-20 '>
              <div className="card  w-96 h-[600px] shadow-2xl rounded-3xl overflow-hidden">
                <img
                  src="images/card1.jpg"
                  alt="Shoes"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 text-center m-5">
                  <h2 className="card-title text-black text-2xl font-semibold mb-7 mt-5 flex justify-center text-center">Community</h2>
                  <p className="text-black mb-6 font-extralight tracking-wide mt-5 m-5 flex justify-center text-center">
                    OpenProject is the leading free and open source project management software.
                    Its Community edition covers a wide range of features and plugins and is free of charge.
                    Forever. We promise!
                  </p>
                  <div className="card-actions justify-center mt-7">
                    <button className="btn bg-white border-blue-900 text-blue-900 px-4 py-2 rounded-full hover:bg-blue-300 transition-all duration-300">
                      Free Download
                    </button>
                  </div>
                </div>
              </div>
              <div className="card  w-96 h-[600px] shadow-2xl rounded-3xl overflow-hidden ">
                <img
                  src="images/card2.jpg"
                  alt="Shoes"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 text-center m-5">
                  <h2 className="card-title text-black text-2xl font-semibold mb-7 mt-5 flex justify-center text-center" >Enterprise on-premises</h2>
                  <p className="text-black mb-6 font-extralight tracking-wide mt-5 m-5 flex justify-center text-center">
                    The Enterprise on-premises offers you professional support, Enterprise add-ons and security features for your self-hosted OpenProject. This OpenProject edition requires Linux or Mac experience to install it on your own infrastructure.
                  </p>
                  <div className="card-actions justify-center mt-7">
                    <button className="btn bg-blue-950 text-white px-4 py-2 rounded-full hover:bg-blue-900 transition-all duration-300">
                      Find out More
                    </button>
                  </div>
                </div>
              </div>
              <div className="card  w-96 h-[600px] shadow-2xl rounded-3xl overflow-hidden ">
                <img
                  src="images/card3.jpg"
                  alt="Shoes"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 text-center m-5">
                  <h2 className="card-title text-black text-2xl font-semibold mt-1 flex justify-center text-center">Enterprise Cloud</h2>
                  <p className="text-black mb-6 font-extralight tracking-wide mt-5 m-5 flex justify-center text-center">
                    Concentrate on your business and let the experts do the hosting for you. This SaaS solution does not require any technical setup. The Enterprise Cloud offers you professional OpenProject Hosting and additional Enterprise add-ons and support.
                  </p>
                  <div className="card-actions justify-center mt-7">
                    <button className="btn bg-blue-900  text-white px-4 py-2 rounded-full hover:bg-blue-900 transition-all duration-300">
                      Find out More
                    </button>
                  </div>
                </div>
              </div>


            </div>
            <div>
              <div className="flex justify-center text-center mt-12">
                <button className="text-blue-950 border border-blue-950 rounded-full px-6 py-3 hover:bg-blue-200  transition-all duration-300">
                  Compare All Plans Side by Side
                </button>
              </div>
            </div>
            <div>
              <div className="flex justify-center items-center gap-10 flex-wrap p-4 md:p-10 mt-5 md:mt-9">
                <div className="relative inline-block w-full md:w-[800px]">
                  <img src="images/enhancing1.jpg" alt="" className="block w-full h-56 md:h-72 object-cover" />
                  <div className="absolute inset-0 bg-blue-800 opacity-90 pointer-events-none"></div>

                  {/* Date on Top Right Corner */}
                  <div className="absolute top-2 right-2 text-white text-xs md:text-sm">
                    August 29, 2024
                  </div>

                  {/* Buttons and Content */}
                  <div className="absolute bottom-3 left-3 md:bottom-5 md:left-5 text-white">
                    <div className="flex space-x-2 md:space-x-4 mb-1">
                      <button className="text-white bg-blue-900 rounded px-2 md:px-3 py-1 md:py-2 text-xs md:text-base">Features</button>
                      <button className="text-white bg-blue-900 rounded px-2 md:px-3 py-1 md:py-2 text-xs md:text-base">Learning</button>
                    </div>
                    <h1 className="text-lg md:text-xl font-bold">
                      How to use status transitions for custom workflows
                    </h1>
                    <p className="mt-2 text-xs md:text-sm">
                      OpenProject is a powerful tool, but with great power comes the complexity of customization. If you’re new to OpenProject and having trouble setting up statuses for workflows, you’re not alone. Once you…
                    </p>
                  </div>
                </div>

                {/** Repeat the similar structure for other images with different classes based on their respective colors */}
                <div className="relative inline-block w-full md:w-96">
                  <img src="images/enhancing2.jpg" alt="" className="block w-full h-56 md:h-72 object-cover" />
                  <div className="absolute inset-0 bg-gray-700 opacity-90 pointer-events-none"></div>

                  {/* Date on Top Right Corner */}
                  <div className="absolute top-2 right-2 text-white text-xs md:text-sm">
                    August 22, 2024
                  </div>

                  {/* Buttons and Content */}
                  <div className="absolute bottom-3 left-3 md:bottom-5 md:left-5 text-white">
                    <div className="flex space-x-2 md:space-x-4 mb-1">
                      <button className="text-white bg-gray-900 rounded px-2 md:px-3 py-1 md:py-2 text-xs md:text-base">Features</button>
                    </div>
                    <h1 className="text-lg md:text-xl font-bold">
                      Catch up with confidence: How to quickly understand changes in OpenProject after your absence
                    </h1>
                  </div>
                </div>

                {/* Repeat for the remaining image blocks */}

                <div className="relative inline-block w-full md:w-96">
                  <img src="images/enhancing3.jpg" alt="" className="block w-full h-56 md:h-72 object-cover" />
                  <div className="absolute inset-0 bg-teal-800 opacity-70 pointer-events-none"></div>

                  {/* Date on Top Right Corner */}
                  <div className="absolute top-2 right-2 text-white text-xs md:text-sm">
                    August 20, 2024
                  </div>

                  {/* Buttons and Content */}
                  <div className="absolute bottom-3 left-3 md:bottom-5 md:left-5 text-white">
                    <div className="flex space-x-2 md:space-x-4 mb-1">
                      <button className="text-white bg-teal-900 rounded px-2 md:px-3 py-1 md:py-2 text-xs md:text-base">Features</button>
                    </div>
                    <h1 className="text-lg md:text-xl font-bold">
                      Interview with Birthe Lindenthal on 10 years of OpenProject
                    </h1>
                  </div>
                </div>

                {/* Add other image blocks similarly */}
                <div className="relative inline-block w-96">
                  <img src="images/enhancing4.jpg" alt="" className="block w-full h-72 object-cover" />
                  <div className="absolute inset-0 bg-cyan-900 opacity-90 pointer-events-none"></div>

                  {/* Date on Top Right Corner */}
                  <div className="absolute top-2 right-2 text-white text-sm">
                    August 16, 2024
                  </div>

                  {/* Buttons and Content */}
                  <div className="absolute bottom-5 left-5 text-white">
                    <div className="flex space-x-4 mb-1">
                      <button className="text-white bg-cyan-900 rounded">Features</button>
                    </div>
                    <h1 className="text-xl font-bold">
                      Escalate correctly!
                    </h1>
                  </div>
                </div>
                <div className="relative inline-block w-96">
                  <img src="images/enhancing5.jpg" alt="" className="block w-full h-72 object-cover" />
                  <div className="absolute inset-0 bg-fuchsia-800 opacity-90 pointer-events-none"></div>

                  {/* Date on Top Right Corner */}
                  <div className="absolute top-2 right-2 text-white text-sm">
                    August 14, 2024
                  </div>

                  {/* Buttons and Content */}
                  <div className="absolute bottom-5 left-5 text-white">
                    <div className="flex space-x-4 mb-1">
                      <button className="text-white bg-fuchsia-900 rounded">Features</button>
                    </div>
                    <h1 className="text-xl font-bold">
                      OpenProject 14.4: Dark mode for OpenProject
                    </h1>
                  </div>
              </div>
            </div>

            {/* Buttons at the bottom */}
            <div className="flex justify-center space-x-2 md:space-x-4 mt-5">
              <button className="bg-white text-blue-500 border border-blue-500 rounded-full px-2 md:px-3 py-1 text-xs md:text-sm hover:bg-blue-100">
                Read More on Our Blog
              </button>
              <button className="bg-white text-blue-500 border border-blue-500 rounded-full px-2 md:px-3 py-1 text-xs md:text-sm hover:bg-blue-100">
                Newsletter
              </button>
            </div>
          </div>

        </div>
        <div className="flex  flex-col lg:flex-row">
          <div className="md:ml-40 mt-10 md:mt-56 md:w-1/2 px-4 md:px-0">
            <h1 className="text-3xl md:text-5xl font-bold text-center md:text-left">
              #1 Open Source Project Management Software
            </h1>
            <p className="text-base md:text-lg font-light mt-4 text-center md:text-left">
              Try OpenProject now with your team and get convinced!
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="mt-6 bg-green-600 text-white rounded-full px-6 py-2 hover:bg-green-500">
                Start Free Trial
              </button>
            </div>
            <p className="text-center mt-4 text-lg font-medium relative">
              <span className="inline-block border-t border-b border-gray-400 w-1/4"></span>
              <span className="px-4">OR CONTACT US</span>
              <span className="inline-block border-t border-b border-gray-400 w-1/4"></span>
            </p>
            <div className="flex justify-center space-x-12 mt-6">
              <div className="flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-500 mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.29a10.24 10.24 0 0 1-1.59-.13c-.68-.15-1.22-.54-1.63-1.14l-2.35-2.94a1.6 1.6 0 0 0-2.32-.26l-1.15.88a10.7 10.7 0 0 1-1.64-.15 10.73 10.73 0 0 1-6.86-6.86 10.7 10.7 0 0 1-.15-1.64l.88-1.15a1.6 1.6 0 0 0-.26-2.32L4.86 3.63a1.64 1.64 0 0 0-1.14-1.63A10.24 10.24 0 0 1 3.71 1c-.68 0-1.33.06-1.96.17a1.64 1.64 0 0 0-1.24 2.2l2.7 4.92a1.6 1.6 0 0 0 .48.67l4.64 4.64a1.6 1.6 0 0 0 .67.48l4.92 2.7a1.64 1.64 0 0 0 2.2-1.24A10.24 10.24 0 0 1 22 16.29z" />
                </svg>
                <p className="text-lg font-medium">+49 30 288 777 07</p>
              </div>
              <div className="flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-500 mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 5h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm0 2v10h18V7H3zm9 6L3 7v10l9-6 9 6V7l-9 6z" />
                </svg>
                <p className="text-lg font-medium">sales@openproject.com</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center md:justify-end w-full mt-10 md:mt-0">
            <img src="images/last.jpg" alt="Last" className="w-full md:w-auto" />
          </div>
        </div>



      </div>

    </div>
    </div >
  );
};

// Page Component
const Page = () => {
  return <CarouselComponent />;
};

export default Page;