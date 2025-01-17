import { Icons } from "@/components/icons/Icons";

export const DATA = {
	initials: "NT",
	name: "Nitin Tripathi",

	url: "https://www.google.com/",

	location: "Lucknow, INDIA",
	locationLink: "https://www.google.com/maps/place/lucknow",

	description:
		"3rd-year 🎓 grad with a knack for creating 💡 and constantly learning 📚. Obsessed with tech 💻, design systems 🎨, and that new framework smell 🚀.",
	summary:
		"I began my engineering journey in 2021 and am currently Learning Gen-AI . I’m also enhancing my Competetive programming skills.",
	avatarUrl: "/profile.jpg",

	navbar: [
		{ href: "/", icon: Icons.home, label: "Home" },
		{ href: "/projects", icon: Icons.projects, label: "Projects" },
	],

	contact: {
		email: "nitinbusiness2602@gmail.com",
		tel: "+91 96169*****",
		social: {
			GitHub: {
				name: "GitHub",
				url: "https://github.com/nitin2602",
				icon: Icons.github,

				navbar: true,
			},

			LinkedIn: {
				name: "LinkedIn",
				url: "https://www.linkedin.com/in/nitintripathi26/",
				icon: Icons.linkedin,

				navbar: true,
			},
		},
	},

	

	skills: [
		[
			{ icon: Icons.javascript(), name: "JavaScript" },
			{ icon: Icons.typescript(), name: "TypeScript" },
			{ icon: Icons.python(), name: "Python" },
		],
		[
			{ icon: Icons.node(), name: "Node.js" },
			{ icon: Icons.react(), name: "React" },
			{ icon: Icons.nestjs(), name: "Nest.js" },
			{ icon: Icons.express(), name: "Express" },
			{ icon: Icons.fastify(), name: "Fastify" },
			{ icon: Icons.nextjs(), name: "Next.js" },
		],
		[
			{ icon: Icons.postgres(), name: "Postgres" },
			{ icon: Icons.mongo(), name: "MongoDB" },

			{ icon: Icons.firebase(), name: "Firebase" },
		],
		[
			{ icon: Icons.docker(), name: "Docker" },
			{ icon: Icons.vercel(), name: "Vercel" },
			{ icon: Icons.aws(), name: "AWS" },
			{ icon: Icons.actions(), name: "Github Actions" },
		],
	],

	projects: [
		{
			title: "WiseWallet",
			href: "https://github.com/nitin2602/WiseWallet",
			dates: "August 2024",
			featured: true,
			description:
				"A secure and scalable wallet management system built with Next.js, PostgreSQL, Prisma, and TypeScript, featuring SSR, Clerk authentication, and a responsive ShadCN UI.",
			technologies: ["Nextjs", "PostgreSQL", "Prisma", "TypeScript"],
			links: [
				{
					type: "Source",
					href: "https://github.com/nitin2602/WiseWallet",
					icon: Icons.github(),
				},
				{
					type: "Website",
					href: "https://wise-wallet-eight.vercel.app/",
					icon: Icons.link(),
				},
			],
			image: "",
			video: "",
		},
		{
			title: "IdeaDump Platform",
			href: "https://github.com/nitin2602/Project-ideas",
			dates: "May 2024 - August 2025",
			featured: true,
			description:
				"A collaborative idea-sharing platform built with React.js, PostgreSQL, Node.js, and Prisma, featuring seamless navigation and an intuitive user experience.",
			technologies: ["React.js", "PostgreSQL", "Node.js"],
			links: [
				{
					type: "Source",
					href: "https://github.com/nitin2602/Project-ideas",
					icon: Icons.github(),
				},
				{
					type: "Website",
					href: "https://project-ideas-frontend-theta.vercel.app/",
					icon: Icons.link(),
				},
			],
			image: "",
			video: "",
		},
		{
			title: "StreamSpeak: Text-to-Speech",
			href: "https://github.com/nitin2602/text-speech_conversion",
			dates: "November 2024 - December 2024",
			featured: true,
			description:
				"A real-time text-to-speech web app built with React.js, Node.js, and Deepgram API, featuring async streaming, responsive UI, and seamless audio processing.",
			technologies: ["React.js", "Node.js", "Deepgram API"],
			links: [
				{
					type: "Source",
					href: "https://github.com/nitin2602/text-speech_conversion",
					icon: Icons.github(),
				},
				{
					type: "Website",
					href: "https://text-speech-conversion-frontend-new.vercel.app/",
					icon: Icons.link(),
				},
			],
			image: "",
			video: "",
		},
		{
			title: "ChatterAI",
			href: "https://github.com/nitin2602/chatterAI",
			dates: "April 2024",
			featured: false,
			description:
				"An AI-powered chat app built with React, ChakraUI, and Node.js, integrating Google Gemini API for NLP and Axios for seamless frontend-backend communication.",
			technologies: ["Reactjs", "ChakraUI", "Node.js", "TailwindCSS", "Vercel"],
			links: [
				{
					type: "Source",
					href: "https://github.com/nitin2602/chatterAI",
					icon: Icons.github(),
				},
				{
					type: "Website",
					href: "https://chatter-ai-amber.vercel.app/",
					icon: Icons.link(),
				},
			],
			image: "",
			video: "",
		},
		{
			title: "CodeArena ",
			href: "https://github.com/nitin2602/codeeditoronline",
			dates: "February 2024",
			featured: false,
			description:
				"An interactive online code editor built with React and ChakraUI, leveraging Piston API for multi-language code execution and Axios for seamless backend integration.",
			technologies: ["NodeJs", "React", "Express", "ChakraUI"],
			links: [
				{
					type: "Source",
					href: "https://github.com/nitin2602/codeeditoronline",
					icon: Icons.github(),
				},
			],
			image: "",
			video: "",
		},
		{
			title: "DisneyPlus UI Clone",
			href: "https://github.com/nitin2602/DisneyUIclone",
			dates: "January 2024",
			featured: false,
			description:
				"A React and TailwindCSS-based replica of the Disney+ homepage, integrating TMDB API via Axios for dynamic movie data and an immersive user experience.",
			technologies: ["NodeJs", "React", "Prettier"],
			links: [
				{
					type: "Source",
					href: "https://github.com/nitin2602/DisneyUIclone",
					icon: Icons.github(),
				},
				{
					type: "Clone",
					href: "",
					icon: Icons.template(),
				},
			],
			image: "",
			video: "",
		},
	],

	education: [
		{
			school: "Institute of Engineering & Technology, Lucknow",
			href: "https://www.ietlucknow.ac.in/",
			degree: "Bachelor of Technology, Computer Engineering",
			logoUrl: "/ietlogo.png",
			start: "November 2022",
			end: "August 2026",
		},
	],
} as const;
