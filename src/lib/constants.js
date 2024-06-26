import jsLogo from './assets/javascript.svg';
import goLogo from './assets/go.svg';
import godotLogo from './assets/godot.svg';
import muwg from './assets/muwg.jpeg';
import sololearn from './assets/sololearn.jpeg';
import aiva from './assets/aiva.jpeg';

export const projects = [
	{
		name: 'Double Coconut',
		projectsDescription: [
			{
				client: 'Microsoft',
				info: [
					{
						name: 'Microsoft Ultimate Word Games',
						url: 'https://zone.msn.com/gameplayer/gameplayerHTML.aspx?game=msultimateword',
						description: `Here I developed the game "Wordament" & "Crosswords". The progression map, and the
                    wrapper client that ties all the games together.`,
						techStack: ['TypeScript', 'Angular', 'Phaser.js']
					},
					{
						name: 'Microsoft Solitaire Collection',
						url: 'https://zone.msn.com/gameplayer/gameplayerHTML.aspx?game=mssolitairecollection',
						description: `Here I worked on all of the games. This project was handed out to our team after
                    another team failed to deliver it. So we have pretty much worked on all of the games.
                    And polished them for deployment.`,
						techStack: ['JavaScript', 'PIXI.js']
					}
				]
			}
		]
	},
	{
		name: 'Epam Systems',
		projectsDescription: [
			{
				client: 'Wolters Kluwer',
				info: [
					{
						name: 'CaseWorx',
						url: 'https://www.wolterskluwer.com/en/about-us/organization/germany',
						description: `Caseworx is a platform that helps lawyers to manage their cases. I worked on the client
                        side of the application and was responsible for the integration of the
                         pdf editing tools on web.`,
						techStack: ['TypeScript', 'Angular', 'PDF tron', 'Redux', 'Storybook']
					}
				]
			}
		]
	},
	{
		name: 'Questrade Financial Group',
		projectsDescription: [
			{
				client: 'Questrade',
				info: [
					{
						name: 'Questrade.com',
						url: 'https://www.questrade.com/',
						description: `Questrade is a Canadian trading platform / bank. I worked on
                        the client side of this application as well as the back-end side (on the
                        projects that had nodeJS).
                        The project was setup with micro-frontends/micro-services architecture.
                        Even though the setup wasn't ideal, it still gave the teams flexibility to work on
                        multiple projects at the same time.`,
						techStack: [
							'TypeScript',
							'Angular',
							'Redux',
							'NodeJS',
							'Express',
							'Jasmine',
							'Karma',
							'Jest',
							'npm'
						]
					}
				]
			}
		]
	},
	{
		name: 'Sololearn INC.',
		projectsDescription: [
			{
				client: 'Sololearn web app.',
				info: [
					{
						name: 'Sololearn.com',
						url: 'https://www.sololearn.com/',
						description: `Sololearn is a learning platform, created to help people learn to code.
                         Here I was a platform lead of 13 engineers. I helped in designing and implementing
                          new projects, created a testing framework and assisted the team in integration,
                        review PRs and mentor other developers.`,
						techStack: [
							'TypeScript',
							'React',
							'Redux',
							'NodeJS',
							'Express',
							'Jest',
							'ReactTestingLibary'
						]
					}
				]
			}
		]
	},
	{
		name: 'Aiva technologies',
		projectsDescription: [
			{
				client: 'Aiva S.A.R.L.',
				info: [
					{
						name: 'Aiva.ai',
						url: 'https://www.aiva.ai/',
						description: `AIVA is a generative AI, that helps composers to create music. I worked on the development and revamp of the client application as well as the back-end application.`,
						techStack: [
							'TypeScript',
							'Angular',
							'HTML5Canvas',
							'NodeJS',
							'Express',
							'Jasmine',
							'Karma',
							'Fastify',
							'MongoDB',
							'Akita'
						]
					}
				]
			}
		]
	}
];

export const ACHIEVEMENTS_DATA = [
	`Created multiple games for Microsoft.`,
	`Worked in teams of all sizes, varying from 1-2 developers, to scrum teams of 6-12 people in
				big enterprises`,
	`Contributed to variety of fields including: Medical, FinTech, GameDev, Law & Education.`,
	`I'm comfortable with working in Startups, Outsource companies, big and small teams as well
	as solo`,
	`Throughout my experience I contributed to the CI/CD experience of the teams. As well as came
	up with ideas on how to improve them`,
	`Successfully integrated testing environment and guidelines for a team of front-end engineers
	to improve the quality of the product.`,
	`Lead a team of 13 developers at Sololearn. My responsibilities included: mentoring, code
	reviews, designing new projects and improving the existing ones.`
];

/**
 * @typedef CardInfo
 * @property {Object} icon
 * @property {string} title
 * @property {string} description
 * @property {string} techStackTitle
 * @property {Array.<string>} techStack
 * @property {string} toolsTitle
 * @property {Array.<string>} tools
 */

/**
 * @type {Array.<CardInfo>}
 */
export const HIGHLIGHT_CARDS_DATA = [
	{
		icon: jsLogo,
		title: `Front-End Development`,
		description: `I like seeing how things look after I'm done coding them. I enjoy designing complex front-end systems.`,
		techStackTitle: 'Languages I use:',
		techStack: ['JavaScript', 'TypeScript'],
		toolsTitle: 'Technologies I use frequently:',
		tools: ['Angular', 'React', 'Svelte', 'Webpack', 'Vite']
	},
	{
		icon: goLogo,
		title: `Back-End Development`,
		description: `I also like working without a UI. I enjoy the complexity of back-end systems and the challenges they bring`,
		techStackTitle: 'Languages I code in:',
		techStack: ['JavaScript', 'TypeScript', 'Go'],
		toolsTitle: 'Technologies I use frequently:',
		tools: ['NodeJS', 'Express', 'MongoDB', 'PostgreSQL', 'Docker', 'NestJS']
	},
	{
		icon: godotLogo,
		title: `Game Development`,
		description: `My personal favorite. The problems I face in game dev are always unique and interesting.`,
		techStackTitle: 'Languages I code in:',
		techStack: ['JavaScript', 'TypeScript', 'GDScript'],
		toolsTitle: 'Technologies I use frequently:',
		tools: ['GodotEngine', 'Threejs', 'PhaserJS', 'PixiJS']
	}
];

/**
 * @typedef ProjectCardInfo
 * @property {string} title
 * @property {string} description
 * @property {string} url
 * @property {string} image
 */

/**
 * @type {Array.<ProjectCardInfo>}
 */
export const PROJECTS_CARD_INFO = [
	{
		title: 'Microsoft UWG',
		description: `Microsoft Ultimate Word Games. A platform for multiple fun word games.`,
		url: 'https://zone.msn.com/gameplayer/gameplayerHTML.aspx?game=msultimateword',
		image: muwg
	},
	{
		title: 'Sololearn',
		description: `Sololearn is a learning platform, created to help people learn to code. I lead a team of 13 developers on this project.`,
		url: 'https://www.sololearn.com',
		image: sololearn
	},
	{
		title: 'Aiva',
		description: `AIVA is a generative AI, that helps composers to create music. We created an Electron based live notes editor for it.`,
		url: 'https://www.aiva.ai',
		image: aiva
	}
];
