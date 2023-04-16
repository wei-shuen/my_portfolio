import ProjectThumbnail from '../../image/project_1.jpg'
import Resume from '../../files/resume.pdf'


const Data = {
	web_app_projects: [
		{
			name: 'Silver Linings',
			year: '2021',
			path: ProjectThumbnail,
			tags: [ 'Case Study', 'Proposal' ],
			link: 'https://www.behance.net/gallery/125468285/Case-Study-'
		},
		{
			name: 'DiveStory',
			year: '2021',
			path: ProjectThumbnail,
			tags: [ 'App Redesign', 'Practice' ],
			link: 'https://www.behance.net/gallery/125627331/App-Redesign-DiveStory'
		},
		{
			name: 'Life Designer',
			year: '2021',
			path: ProjectThumbnail,
			tags: [ 'Web/App', 'Practice' ],
			link: 'https://www.behance.net/gallery/125243883/App-Design-Life-Designer'
		}
	],
	graphic_projects: [
		{
			name: 'Quick Icon Design',
			year: '2022-2023',
			path: ProjectThumbnail,
			tags: [ 'Graphic', 'Banner' ],
			link: 'https://www.behance.net/gallery/166472695/Ruten-E-Commerce-Platform-Quick-Icon-Design'
		},
		{
			name: 'Banner Design',
			year: '2021',
			path: ProjectThumbnail,
			tags: [ 'Graphic', 'Banner' ],
			link: 'https://www.behance.net/gallery/126440711/Banner-Design-Year-of-the-Ox'

		}
	],
	workshop_projects: [
		{
			name: 'UX Workshop Design',
			year: '2020',
			path: ProjectThumbnail,
			tags: [ 'UX Workshop' ],
			link: 'https://www.behance.net/gallery/122954877/UX-Workshop-UX-Campus-Market'
		}
	],
	navItems: [
		{
			name: 'WORKS',
			link: '../'
		},
		{
			name: 'ARTICLES',
			link: 'https://medium.com/@weishuen113/'
		},
		{
			name: 'RESUME',
			link: Resume,
		}
	]
};

export default Data;