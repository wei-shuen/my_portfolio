import Project_1 from '../../image/project_1.jpg';
import Project_2 from '../../image/project_2.jpg';
import Project_3 from '../../image/project_3.jpg';
import Project_4 from '../../image/project_4.jpg';
import Graphic_1 from '../../image/graphic_1.jpg';
import Graphic_2 from '../../image/graphic_2.jpg';
import Workshop_1 from '../../image/workshop_1.jpg';

import Resume from '../../files/resume.pdf';


const Data = {
	web_app_projects: [
		{
			name: 'Silver Linings',
			year: '2021',
			path: Project_1,
			tags: [ 'Case Study', 'Proposal' ],
			link: 'https://www.behance.net/gallery/125468285/Case-Study-'
		},
		{
			name: 'DiveStory',
			year: '2021',
			path: Project_2,
			tags: [ 'App Redesign', 'Practice' ],
			link: 'https://www.behance.net/gallery/125627331/App-Redesign-DiveStory'
		},
		{
			name: 'Life Designer',
			year: '2021',
			path: Project_3,
			tags: [ 'Web/App', 'Practice' ],
			link: 'https://www.behance.net/gallery/125243883/App-Design-Life-Designer'
		},
		{
			name: 'Figma 21 Days Challenge',
			year: '2020',
			path: Project_4,
			tags: [ 'Web/App', 'Practice' ],
			link: 'https://www.behance.net/gallery/125994467/Figma-Practice-21-Days-Challenge'
		}
	],
	graphic_projects: [
		{
			name: 'Quick Icon Design',
			year: '2022-2023',
			path: Graphic_1,
			tags: [ 'Ruten', 'Graphic' ],
			link: 'https://www.behance.net/gallery/166472695/Ruten-E-Commerce-Platform-Quick-Icon-Design'
		},
		{
			name: 'Banner Design',
			year: '2021',
			path: Graphic_2,
			tags: [ 'Graphic', 'Banner' ],
			link: 'https://www.behance.net/gallery/126440711/Banner-Design-Year-of-the-Ox'
		},

	],
	workshop_projects: [
		{
			name: 'UX Workshop Design',
			year: '2020',
			path: Workshop_1,
			tags: [ 'UX Workshop' ],
			link: 'https://www.behance.net/gallery/122954877/UX-Workshop-UX-Campus-Market'
		}
	],
	navItems: [
		{
			name: 'WORKS',
			link: '/'
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