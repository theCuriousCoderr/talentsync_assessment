import { useState } from "react";
import bg_checkers from "./images/bg_checkers.png";
import logo_name from "./images/logo_name.png";
import robot_head from "./images/robot_head.png";
import avatars from "./images/avatars.png";
import stars from "./images/stars.png";
import grid_avatars from "./images/grid_avatars.png";
import grid_connect_icons from "./images/grid_connect_icons.png";
import arrow_down from "./images/arrow_down.png";
import company_list from "./images/company_list.png";
import grid_images from "./images/grid_images.png";
import video_icon from "./images/video_icon.png";
import recording_icon from "./images/recording_icon.png";
import schedule_icon from "./images/schedule_icon.png";
import lock_icon from "./images/lock_icon.png";
import spiral_arrow from "./images/spiral_arrow.png";
import shopify from "./images/shopify.png";
import avatar from "./images/avatar.png";
import carousel_arrow from "./images/carousel_arrow.png";
import carousel_image from "./images/carousel_image.png";
import contract from "./images/contract.png";
import expand from "./images/expand.png";
import checked from "./images/checked.png";
import video_mock from "./images/video_mock.png";
import app_store from "./images/app_store.png";
import play_store from "./images/play_store.png";
import social_icons from "./images/social_icons.png";

function App() {
  const [expandState, setExpandState] = useState("");

  return (
    <div className="">
      <div className="relative w-full h-screen overflow-hidden px-20 xs:max-lg:p-0">
        <div className="absolute w-full h-full -z-10">
          <img
            src={bg_checkers}
            alt="checkers background image"
            className="object-cover xs:max-lg:w-full xs:max-lg:h-full"
          />
        </div>
        <div className="w-full mx-auto mt-5 h-16 rounded-full bg-[#F2F4F7] py-[16px] px-[32px] flex items-center justify-between xs:max-lg:hidden">
          <a
            href="#"
            className="bg-red-30 w-28 h-5 object-cover flex items-center"
          >
            <img
              src={logo_name}
              alt="logo and name"
              className="object-cove w-full h-full"
            />
          </a>
          <div className="flex items-center gap-[40px] ">
            {["Products", "Solutions", "Resources"].map((item) => {
              return (
                <button className="flex items-center gap-[6px]">
                  <p className="text-[#667085] font-semibold text-sm font-[Inter]">
                    {item}
                  </p>
                  <div className="size-2 bg-red-30 flex items-center justify-center">
                    <img src={arrow_down} alt="arrow down icon" />
                  </div>
                </button>
              );
            })}
            <button className="flex items-center gap-[6px]">
              <p className="text-[#667085] font-semibold text-sm font-[Inter]">
                Pricing
              </p>
            </button>
          </div>
          <div className="flex items-center gap-5">
            <div>
              <button className=" h-[52px rounded-[100px] py-[14px] px-[24px] bg-white font-[Inter] text-sm">
                Talk to sales
              </button>
            </div>
            <div>
              <button className=" h-[52px rounded-[100px] py-[14px] px-[24px] bg-[#175CD3] text-white font-[Inter] text-sm">
                Sign up for free
              </button>
            </div>
          </div>
        </div>

        <div className="lg:hidden mt-5  px-2">
          <div className="bg-[#F2F4F7] rounded-[100px] p-5">
          <a href="#" className="bg-red-30 w-24 object-cover flex items-center">
          <img src={logo_name} alt="logo and name" className="object-cover" />
        </a>

          </div>
       

        </div>

        <div className="xs:max-lg:h-scree p-10 xs:max-lg:p-3 mt-20 xs:max-lg:mt-5 bg-red-40 flex items-center xs:max-lg:items-start justify-center">
          <div className="flex xs:max-lg:flex-col xs:max-lg:gap-10 justify-between bg-red-60">
            <div className="w-[50%] xs:max-lg:w-full bg-blue-40 space-y-7 xs:max-lg:space-y-5 flex items-start justify-center flex-col">
              <p className="font-[Inter] text-[#1D2939] font-semibold text-[2.5rem] xs:max-lg:text-3xl leading-[3rem] ">
                Uniting the world,
                <br /> one video call at a time
              </p>
              <p className="font-[Inter] text-[#667085] font-normal text-xl xs:max-lg:text-sm leading-6   ">
                Experience the future of communication with ClearLink – where
                crystal-clear video conferencing meets unparalleled simplicity.
              </p>

              <div className="flex xs:max-lg:w-full xs:max-lg:gap-5 bg-red-30">
                <div>
                  <button className="rounded-[100px] xs:max-lg:rounded-md py-[14px] px-[24px] xs:max-lg:p-2 bg-[#175CD3] text-white font-semibold font-[Inter] text-base xs:max-lg:text-xs">
                    Start your free trial
                  </button>
                </div>
                <div className="">
                  <button className="flex items-center gap-3 bg-red-40 rounded-[100px] xs:max-lg:rounded-md py-[14px] px-[24px] xs:max-lg:p-2 font-semibold text-[#175CD3] font-[Inter] text-base xs:max-lg:text-xs">
                    <div className="size-7 xs:max-lg:size-4 flex items-center justify-center bg-red-40 -mt-1">
                      <img src={robot_head} alt="blue robot head" />
                    </div>
                    <p>Discover AI assistant</p>
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-4 xs:max-lg:gap-2 bg-red-40">
                <div className="h-10 w-40 xs:max-lg:h-8 xs:max-lg:w-24">
                  <img src={avatars} alt="avatar images" />
                </div>
                <div className="">
                  <div className="h-5 w-40 xs:max-lg:w-16 xs:max-lg:h-3 flex items-cente gap-2">
                    <img src={stars} alt="five stars" />
                    <p className="font-semibold font-[Inter] text-base xs:max-lg:text-xs text-[#344054] ">
                      5.0
                    </p>
                  </div>
                  <p className="font-medium font-[Inter] text-[#475467] text-sm xs:max-lg:text-[10px] ">
                    from 3,000+ reviews
                  </p>
                </div>
              </div>
            </div>

            <div className="w-[40%] xs:max-lg:w-full bg-[#EFF8FF] p-5 space-y-5 rounded-xl shadow-2xl border border-[#B2DDFF]">
              <div className="flex items-center justify-center w-ful h-ful bg-red-40">
                <img
                  src={grid_avatars}
                  alt="grid avatars"
                  className="w-ful object-cover bg-red-40"
                />
              </div>
              <div className="w-2/3 mx-auto">
                <img src={grid_connect_icons} alt="grid_connect_icons" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-red-40 space-y-10 p-20 xs:max-lg:p-5">
        <p className="font-medium font-[Inter] text-center text-[#475467] xs:max-lg:txt-balance ">
          Join 1,500+ companies already video conferencing the ClearLink way
        </p>
        <div className="xs:max-lg:w-full xs:max-lg:mx-auto">
          <img src={company_list} alt="company list" className="xs:max-lg:h-full xs:max-lg:w-full xs:max-lg:object-cover" />
        </div>
      </div>

      <div className="h-scree p-20 xs:max-lg:p-5 xs:max-lg:mt-10 bg-red-40 space-y-10">
        <div className="w-[60%] xs:max-lg:w-full space-y-5 xs:max-lg:space-y-2">
          <p className="font-semibold font-[Inter] text-[#175CD3] text-[18px] xs:max-lg:text-sm ">
            The ClearLink Advantage
          </p>
          <p className="font-semibold font-[Inter] text-[48px] xs:max-lg:text-2xl text-[#1D2939]">
            Why choose ClearLink?
          </p>
          <p className="font-normal font-[Inter] text-[#667085] text-[24px] xs:max-lg:text-base ">
            {" "}
            In a world where connection is everything, ClearLink takes the lead.
            Our cutting-edge video conferencing app offers:
          </p>
        </div>

        <div className="flex bg-red-40 xs:max-lg:flex-col justify-between">
          <div className="w-[60%] xs:max-lg:w-full bg-red-40 space-y-10 flex xs:max-lg:flex-wrap bg-blue-40 items-center justify-center flex-col">
            <div className="flex xs:max-lg:gap-10 xs:max-lg:w-full xs:max-lg:flex-wrap bg-blue-40 justify-between">
              <div className="w-[45%] xs:max-lg:w-full bg-red-30">
                <div className="size-10 bg-red-40 mb-5 xs:max-lg:mb-2 flex items-center justify-center rounded-full bg-[#F9FAFB] border border-[#EAECF0] ">
                  <img src={video_icon} alt="video icon" className="w-4 h-3" />
                </div>

                <p className="font-[Inter] bg-blue-30 font-semibold text-xl text-[#101828] ">
                  Crystal-clear HD video
                </p>
                <p className="font-[Inter] font-normal text-base text-[#475467] ">
                  No more pixelation or blurriness – just stunning, lifelike
                  clarity that brings your team closer in meetings.
                </p>
              </div>
              <div className="w-[45%] xs:max-lg:w-full bg-red-30">
                <div className="size-10 bg-red-40 mb-5 xs:max-lg:mb-2 flex items-center justify-center rounded-full bg-[#F9FAFB] border border-[#EAECF0] ">
                  <img
                    src={recording_icon}
                    alt="recording icon"
                    className="w-4 h-4"
                  />
                </div>
                <p className="font-[Inter] font-semibold text-xl text-[#101828] ">
                  Noise-canceling audio
                </p>
                <p className="font-[Inter] font-normal text-base text-[#475467] ">
                  Say goodbye to distractions with our advanced audio tech for
                  crisp, interruption-free conversations.
                </p>
              </div>
            </div>
            <div className="flex xs:max-lg:gap-10 xs:max-lg:flex-col justify-between">
              <div className="w-[45%] xs:max-lg:w-full bg-red-30">
                <div className="size-10 bg-red-40 mb-5 xs:max-lg:mb-2 flex items-center justify-center rounded-full bg-[#F9FAFB] border border-[#EAECF0] ">
                  <img
                    src={schedule_icon}
                    alt="schedule icon"
                    className="w-4 h-4"
                  />
                </div>
                <p className="font-[Inter] font-semibold text-xl text-[#101828] ">
                  Scheduling made easy
                </p>
                <p className="font-[Inter] font-normal text-base text-[#475467] ">
                  Streamline your agenda with ClearLink's intuitive scheduling.
                  Set up meetings, send invitations, and receive reminders in
                  one place.
                </p>
              </div>
              <div className="w-[45%] xs:max-lg:w-full bg-red-30">
                <div className="size-10 bg-red-40 mb-5 xs:max-lg:mb-2 flex items-center justify-center rounded-full bg-[#F9FAFB] border border-[#EAECF0] ">
                  <img src={lock_icon} alt="lock icon" className="w-4 h-5" />
                </div>
                <p className="font-[Inter] font-semibold text-xl text-[#101828] ">
                  Bank-grade security
                </p>
                <p className="font-[Inter] font-normal text-base text-[#475467] ">
                  Your privacy is our priority with bank-grade security
                  protocols safeguarding your meetings and data from unwanted
                  intruders.
                </p>
              </div>
            </div>
          </div>

          <div className="relative w-[30%] xs:max-lg:w-full xs:max-lg:mt-20 flex items-center justify-center bg-red-40">
            <div className="absolute h-48 xs:max-lg:h-20 bottom-[95%] w-56 xs:max-lg:w-20 bg-red-40 right-[45%]">
              <img src={spiral_arrow} alt="spiral arrow" />
            </div>
            <img src={grid_images} alt="grid_images" className="object-cover" />
          </div>
        </div>
      </div>

      <div className="bg-[#F9FAFB] p-20 xs:max-lg:p-5 xs:max-lg:mt-20 flex xs:max-lg:flex-col-reverse xs:max-lg:gap-10 justify-between items-center">
        <div className="w-[48%] xs:max-lg:w-full bg-red-40 space-y-10 xs:max-lg:space-y-5">
          <div className="w-20">
            <img src={shopify} alt="shopify logo" />
          </div>
          <div className="w-20">
            <img src={stars} alt="five stars" />
          </div>

          <p className="font-[Inter] font-medium text-[2rem] xs:max-lg:text-lg text-[#101828] text-wrap">
            ClearLink has upgraded our remote meetings. High-quality video,
            screen sharing, and top-notch security make it essential for our
            team.
          </p>

          <div className="flex xs:max-lg:gap-5 xs:max-lg:flex-col bg-red-40 justify-between items-center">
            <div className="flex xs:max-lg:w-full bg-red-40 gap-2 items-center">
              <div className="w-10">
                <img src={avatar} alt="review image" />
              </div>
              <div>
                <p className="font-[Inter] font-semibold text-lg text-[#101828]">
                  Sarah Thompson
                </p>
                <p className="font-[Inter] font-normal text-sm text-[#475467]">
                  Project Manager, Shopify
                </p>
              </div>
            </div>

            <div className="flex xs:max-lg:w-full xs:max-lg:justify-end gap-5">
              <button className="w-10 rounded-full">
                <img src={carousel_arrow} alt="back arrow" />
              </button>
              <button className="w-10 rotate-180 rounded-full">
                <img src={carousel_arrow} alt="back arrow" />
              </button>
            </div>
          </div>
        </div>

        <div className="w-[48%] xs:max-lg:w-full bg-red-40 flex items-center justify-center">
          <img src={carousel_image} alt="carousel image" />
        </div>
      </div>

      <div
        onClick={() => setExpandState("")}
        className="p-20 xs:max-lg:p-5 flex xs:max-lg:flex-col xs:max-lg:gap-10 justify-between"
      >
        <div className="w-[30%] xs:max-lg:w-full bg-red-40 space-y-2 xs:max-lg:space-y-1">
          <p className="font-[Inter] font-semibold text-base xs:max-lg:text-sm text-[#175CD3] ">
            Support
          </p>
          <p className="font-[Inter] font-semibold text-4xl xs:max-lg:text-3xl text-[#1D2939]">
            FAQS
          </p>
          <p className="font-[Inter] font-light text-sm text-pretty text-[#667085]">
            Everything you need to know about the product and billing. Can’t
            find the answer you’re looking for? Please{" "}
            <button className="underline underline-offset-2">
              chat to our friendly team.
            </button>
          </p>
        </div>
        <div className="w-[65%] xs:max-lg:w-full bg-red-40">
          {[
            {
              faq: "How many participants can join a ClearLink video conference?",
              answer:
                "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
            },
            {
              faq: "Can I use ClearLink on multiple devices?",
              answer:
                "Yes, ClearLink is designed to be accessible across multiple devices for your convenience. Whether you're using a computer, tablet, or smartphone, you can easily access ClearLink and enjoy its features seamlessly. The platform is optimized for a responsive and user-friendly experience, allowing you to switch between devices without any hassle. So, feel free to use ClearLink on your preferred devices and stay connected wherever you go! If you have any specific concerns or questions about using ClearLink on multiple devices, our support team is always here to assist you.",
            },
            {
              faq: "Is ClearLink compatible with other video conferencing platforms?",
              answer:
                "Yes, ClearLink is designed to enhance your video conferencing experience by providing compatibility with a wide range of video conferencing platforms. Whether you use popular services like Zoom, Microsoft Teams, Google Meet, or any other major video conferencing platform, ClearLink seamlessly integrates with them to optimize your audio and video quality. ",
            },
            {
              faq: "How does ClearLink ensure the security of my video conferences?",
              answer:
                "ClearLink prioritizes the security of your video conferences through robust measures implemented at various levels. The platform employs end-to-end encryption to safeguard the confidentiality of your communication. This means that your audio and video data is encrypted from the moment it leaves your device until it reaches its destination, preventing unauthorized access. ",
            },
            {
              faq: "Do I need to download any software to use ClearLink?",
              answer:
                "No, you typically do not need to download any software to use ClearLink. ClearLink is designed to be a user-friendly, browser-based platform, allowing you to access its features directly from your web browser without the need for additional downloads or installations. This means you can initiate and join ClearLink sessions without any hassle, making it a convenient option for users who prefer not to install software on their devices. ",
            },
            {
              faq: "What kind of customer support does ClearLink provide?",
              answer:
                "ClearLink takes pride in offering comprehensive and responsive customer support to ensure a positive user experience. Our dedicated support team is available to assist you with any inquiries or issues you may encounter.  Some key features of ClearLink's customer support includes; 24/7 Availability, Multichannel Support,Knowledge Base, Personalized Assistance, Regular Updates.   ",
            },
          ].map((items, index) => {
            return (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setExpandState(index);
                }}
                className={`transition-all flex flex-wrap justify-between items-center xs:max-lg:items-start w-full p-5 xs:max-lg:p-0 xs:max-lg:py-5 xs:max-lg:px-2 bg-red-70 ${
                  expandState === index
                    ? "border bg-[#F9FAFB] rounded-2xl outline-[#EAECF0]"
                    : "border-t"
                }  border-[#EAECF0]`}
              >
                <p className="font-[Inter] font-semibold text-[20px] xs:max-lg:w-[90%] xs:max-lg:text-left  xs:max-lg:text-sm bg-red-40 text-[#101828] ">
                  {items.faq}
                </p>
                <div className="w-5 xs:max-lg:w-[10%] flex justify-center items-center">
                  {expandState === index ? (
                    <img src={contract} alt="contract arrow" className="xs:max-lg:w-2/3" />
                  ) : (
                    <img src={expand} alt="expand arrow" className="xs:max-lg:w-2/3"   />
                  )}
                </div>
                {expandState === index && (
                  <div className="w-[95%] xs:max-lg:w-[90%] text-left text-pretty font-normal text-[#475467] text-base xs:max-lg:text-sm mt-2">
                    {items.answer}
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex xs:max-lg:flex-col xs:max-lg:mt-10">
        <div className="w-1/2 xs:max-lg:w-full py-28 px-20 xs:max-lg:p-5 space-y-5 xs:max-lg:space-y-2 flex items-start justify-center flex-col bg-red-40">
          <p className="font-[Inter] font-semibold text-4xl xs:max-lg:text-2xl text-[#101828] ">
            Ready to clear the path to perfect communication?
          </p>
          <div className="p-2 bg-red-40 space-y-2">
            {[
              "30 days free trial",
              "Cancel at any time",
              "Access to all features",
              "Personalized onboarding",
            ].map((items) => {
              return (
                <div className="flex justify-start gap-3 items-center">
                  <div className="size-5">
                    <img src={checked} alt="check mark" />
                  </div>
                  <p className="font-[Inter] font-light text-sm text-[#475467] ">
                    {items}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="flex gap-3">
            <div>
              <button className="rounded-[100px] py-[14px] px-[24px] xs:max-lg:p-2 xs:max-lg:rounded-md xs:max-lg:text-xs bg-white text-[#101828] font-light font-[Inter] text-base border border-[#98A2B3] ">
                Talk to sales
              </button>
            </div>
            <div>
              <button className="rounded-[100px] py-[14px] px-[24px] xs:max-lg:p-2 xs:max-lg:rounded-md xs:max-lg:text-xs bg-[#175CD3] text-white font-light font-[Inter] text-base">
                Start your free trial
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/2 xs:max-lg:w-full p-0 xs:max-lg:pt-10 pt-20">
          <img src={video_mock} alt="video mock" />
        </div>
      </div>

      <footer className="px-20 xs:max-lg:p-5 xs:max-lg:mt-20 pt-20 flex xs:max-lg:flex-col flex-wrap justify-between items-start">
        <div className="w-[30%] xs:max-lg:w-full space-y-3">
          <div className="w-40">
            <img src={logo_name} alt="company logo" />
          </div>
          <p className="font-[Inter] font-light text-sm text-[#475467] text-balanc ">
            ClearLink is your gateway to effortless, high-quality video
            conferencing. Join us in shaping the future of communication!
          </p>
        </div>
        <div className="w-[65%] xs:max-lg:w-full xs:max-lg:mt-5 flex xs:max-lg:flex-wrap justify-between bg-red-30">
          <div className="w-[18%] xs:max-lg:w-1/3 space-y-3">
            <p className="font-[Inter] font-semibold text-xs text-[#667085] ">
              Product
            </p>
            {["Overview", "Features", "Solutions", "Tutorials", "Pricing"].map(
              (items) => {
                return (
                  <p className="font-[Inter] font-semibold text-sm text-[#475467] ">
                    {items}
                  </p>
                );
              }
            )}
          </div>
          <div className="w-[18%] xs:max-lg:w-1/3 space-y-3">
            <p className="font-[Inter] font-semibold text-xs text-[#667085] ">
              Company
            </p>
            {["About Us", "Careers", "Press", "News", "Contact"].map(
              (items) => {
                return (
                  <p className="font-[Inter] font-semibold text-sm text-[#475467] ">
                    {items}
                  </p>
                );
              }
            )}
          </div>
          <div className="w-[18%] xs:max-lg:w-1/3 space-y-3">
            <p className="font-[Inter] font-semibold text-xs text-[#667085] ">
              Resources
            </p>
            {["Blog", "Events", "Help centre", "Tutorials", "Support"].map(
              (items) => {
                return (
                  <p className="font-[Inter] font-semibold text-sm text-[#475467] ">
                    {items}
                  </p>
                );
              }
            )}
          </div>
          <div className="w-[18%] xs:max-lg:w-1/2 xs:max-lg:mt-10 space-y-3">
            <p className="font-[Inter] font-semibold text-xs text-[#667085] ">
              Legal
            </p>
            {["Terms", "Privacy", "Cookies", "License", "Contact"].map(
              (items) => {
                return (
                  <p className="font-[Inter] font-semibold text-sm text-[#475467] ">
                    {items}
                  </p>
                );
              }
            )}
          </div>
          <div className="w-[18%] xs:max-lg:w-1/2 xs:max-lg:mt-10 bg-red-40 space-y-3">
            <p className="font-[Inter] font-normal text-xs text-[#004EEB] ">
              Get the app
            </p>
            <button className="w-24">
              <img src={app_store} alt="IOS app store download" />
            </button>
            <button className="w-24">
              <img src={play_store} alt="android app store download" />
            </button>
          </div>
        </div>
      </footer>
      <div className="w-full bg-[#F9FAFB] py-10 px-20 xs:max-lg:p-2 mt-10 flex xs:max-lg:flex-col-reverse xs:max-lg:gap-3 justify-between items-center">
        <p className="font-[Inter] font-normal text-[16px] xs:max-lg:text-xs text-[#667085] ">
          &copy; {new Date().getFullYear()} ClearLink. All rights reserved.
        </p>
        <div className="w-40">
          <img src={social_icons} alt="social media icons" />
        </div>
      </div>
    </div>
  );
}

export default App;
