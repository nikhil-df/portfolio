import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Nikhil",
  initials: "N",
  url: "https://nikhil-phi.vercel.app/",
  location: "New Delhi, India",
  locationUrl: "https://www.google.com/maps/place/newdelhi",
  description:
    "React Native Developer passionate about building impactful mobile applications.",
  summary:
    "I'm a React Native Developer who loves creating mobile apps that make a difference in people's lives. I'm passionate about using modern technologies to solve real-world problems and enhance user experiences. I'm always eager to take on new challenges, learn continuously, and grow as a developer.",
  avatarUrl: "/logo.jpeg",
  skills: [
    "React Native (CLI)",
    "Expo",
    "Typescript",
    "NativeWind",
    "Redux",
    "Python",
    "Docker",
    "Stripe",
    "Google Play Console",
    "Firebase",
    "Supabase",
    "Render",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "shaunikhil11@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/nikhil-df",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nikhil-rn/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/NShau11",
        icon: Icons.x,

        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "mailto:shaunikhil11@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Freelance",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Mobile apps developer",
      logoUrl: "",
      start: "May 2025",
      end: "",
      description:
        "I have been working as a freelance React Native developer for the past few months. I’ve built and shipped mobile applications using technologies like React Native, Expo, TypeScript, and NativeWind CSS. My projects have included cross-platform apps, feature-rich mobile interfaces, and integrations with tools like Firebase and Supabase",
    },
    {
      company: "Get a Pro",
      href: "https://www.getapro.in/",
      badges: [],
      location: "Remote",
      title: "Mobile apps developer & Talent Lead",
      logoUrl: "https://www.getapro.in/_next/static/media/logo.86542487.svg",
      start: "Feb 2025",
      end: "April 2025",
      description:
        "I developed the mobile application for our startup using React Native (Expo), TypeScript, Redux, nativeWind, and React Navigation. I was responsible for building and maintaining the app’s core features, ensuring smooth cross-platform performance. Alongside my technical work, I also led the recruitment and onboarding of professionals into our platform. This was a part of a startup which my friends and I tried to start to help users access legal and financial services from verified professionals."
    },
  ],
  education: [

    {
      school: "Indira Gandhi National Open University",
      href: "https://www.ignou.ac.in/",
      degree: "Bachelor of Computer Applications (BCA)",
      logoUrl: "/images.jpeg",
      start: "2025",
      end: "2028",
    },

  ],
  projects: [
    {
      title: "CircleUp",
      href: "https://github.com/nikhil-df/CircleUp",
      dates: "august 2025",
      active: true,
      description:
        "A simple and intuitive cross-platform mobile app that lets you discover and host meetups—from tech events to community fitness sessions. Built with React Native, TypeScript, and Supabase, it features real-time data, smooth navigation, and a personalized event feed. Designed with NativeWind for a clean UI, it includes bookmarking, pull-to-refresh, and event filtering. Perfect for anyone looking to connect locally or create their own events—all from one place.",
      technologies: [
        "React Native (CLI)",
        "Typescript",
        "NativeWind",
        "Supabase",
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/nikhil-df/CircleUp",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Linkedin post",
          href: "https://www.linkedin.com/feed/update/urn:li:activity:7357810464338153472/",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/ss.png",
      video:
        "",
    },
    {
      title: "ImgReady",
      href: "https://play.google.com/store/apps/details?id=com.nikhil_9_11.imgReady&hl=en_IN",
      dates: "July 2025",
      active: true,
      description:
        "A lightweight Android app that makes image conversion and compression effortless—no desktop or third-party sites needed. Built with Expo and a custom REST API, imgReady lets you capture, convert, compress, and share images in 10+ formats (JPG, PNG, PDF, HEIC, and more). Designed for privacy, it works entirely on-device and integrates smoothly with your favorite apps like WhatsApp, Gmail, and mobile browsers. Ad-supported (via AdMob) and child-safe, it’s built for real-world use—especially when dealing with uploads to government or official portals.",
      technologies: [
        "Expo",
        "Typescript",
        "Google Play Console",
        "Render",
      ],
      links: [
        {
          type: "Play Store",
          href: "https://play.google.com/store/apps/details?id=com.nikhil_9_11.imgReady&hl=en_IN",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Linkedin post",
          href: "https://www.linkedin.com/feed/update/urn:li:activity:7353053527440515073/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Github",
          href: "https://github.com/nikhil-df/ImgReady",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/image.png",
      video:
        "",
    },
    {
      title: "Get a Pro",
      href: "https://getapro.in",
      dates: "Feb 2025-April 2025",
      active: true,
      description:
        "Me and my friends trying to start a startup that helps users to get legal and financial services from professionals. It's website is built with Next.js and Node.js and its app was build on expo. Eventually lack of knowledge and some legal issues we had to stop the project. but we learned a lot from this project. you can check the blog about it on my blog.",
      technologies: [
        "Expo",
        "Typescript",
        "NativeWind",
        "Redux",
        "Supabase",
      ],
      links: [
        {
          type: "Website",
          href: "https://getapro.in",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Blog",
          href: "https://nikhil-phi.vercel.app/blog/get-a-pro",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/getapro.png",
      video:
        "",
    },
    {
      title: "MultiCalc",
      href: "",
      dates: "Feb 2025",
      active: true,
      description:
        "A powerful calculator app that lets you create and switch between multiple calculators—each with its own history and editable past calculations. Built with React Native, Expo, and Redux, MultiCalc is designed for multitaskers who want more than just one static calculator. Easily transfer values between calculators, revisit and modify previous steps, and stay organized with a clean, intuitive interface. Perfect for anyone who juggles multiple math tasks or needs persistent, flexible calculation history.",
      technologies: [
        "Expo",
        "Typescript",
        "Redux",
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/nikhil-df/MultiCalc",
          icon: <Icons.globe className="size-3" />,
        },{
          type: "Linkedin post",
          href: "https://www.linkedin.com/feed/update/urn:li:activity:7350504434411421697/",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/nor.png",
      video:
        "",
    },

  ],

} as const;
