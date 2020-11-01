export const jobData = [
	{
		"jobTitle": "Full Stack Software Engineer",
		"dateRange": "1/2018 to 7/2020",
		"company": "Hologic Inc.",
		"location": "San Diego, CA",
		"workDetails": [
      "Worked on a commercial scale web application to work alongside Hologic diagnostic devices.",
      "Created endpoints for REST API and Websocket.",
      "Responsive single page web application using Angular 8.",
      "Worked on JWT authentication system that handled user accounts of various authorization levels.",
      "Set up client-side localization infrastructure to support multiple languages.",
      "Automated load testing process that simulated maximum user workload.",
      "Used Sketch app to design mockups of different pages of the application.",
			"Involved in creating and reviewing software requirement specification documents.",
			"Used SignalR to add real time functionality to client application."
		],
		"skills": [
			"Angular",
			".NET Core",
			"HTML",
			"SCSS",
			"Typescript",
			"PostgreSQL",
			"Linux",
			"Git",
			"WPF"
		]
	},
	{
		"jobTitle": "Software Engineer Intern",
		"dateRange": "6/2017 to 12/2017",
		"company": "Hologic Inc.",
		"location": "San Diego, CA",
		"workDetails": [
			"Developed internal tool to visualize assay definition files.",
			"Collaborated with other interns to create a dashboard application to host internal tools.",
			"Frontend Angular app which connects REST API server via HTTP.",
			"Designed user interface which allowed users to upload files and view most relevant information in assay files."
		],
		"skills": [
			"Angular",
			".NET Framework",
			"HTML",
			"SCSS",
			"Typescript",
			"C#"
		]	
	}
];

export const skillData = [
	{
		"title": "UI Design",
		"description": "I'm passionate about UI design and I feel that it's very important to incorporate good user design principles in application development. ",
		"icon": require("./assets/paint.svg"),
		"skills": [
			{
				"icon": require("./assets/figma.png"),
				"background": "#F3F3F4" 
			},
			{
				"icon": require("./assets/sketch.png"),
				"background": "#FFF0D1" 
			},
			{
				"icon": require("./assets/css.png"),
				"background": "#D1E7F3" 
			},
		]
	},
	{
		"title": "Front End Dev",
		"description": "I have several years of experience in developing responsive web applications with modern frameworks such as Angular and React.",
		"icon": require("./assets/console.svg"),
		"skills": [
			{
				"icon": require("./assets/angular.png"),
				"background": "#F9D6D7" 
			},
			{
				"icon": require("./assets/react.png"),
				"background": "#E1F9FF" 
			},
			{
				"icon": require("./assets/javascript.png"),
				"background": "#F2DF1E" 
			},
		]
	},
	{
		"title": "Back End Dev",
		"description": "I'm have experience writing server side code with .NET. I've created and maintained REST APIs with both Node.js and ASP.NET",
		"icon": require("./assets/server.svg"),
		"skills": [
			{
				"icon": require("./assets/git.png"),
				"background": "#FAC7BE" 
			},
			{
				"icon": require("./assets/net.svg"),
				"background": "#CAB9DB" 
			},
			{
				"icon": require("./assets/sql.svg"),
				"background": "#A3BBCD" 
			},
		]
	} 
];

export const projectData = [
	{
		"title": "Range Explorer",
		"subTitle": "Poker Training Application",
		"description": "Application allows users to view preflop ranges and simulate heads up scenarios. Users also log and review session results.",
		"screenshots": [
			require("./assets/range.svg"),
			require("./assets/tracer.svg")
		]
	}
]