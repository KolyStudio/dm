export { matchers } from './client-matchers.js';

			export const nodes = [() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8')];

			export const server_loads = [];

			export const dictionary = {
	"": [2],
	"i/[id]": [4],
	"invitation/[id]": [5],
	"invitationi/[id]": [6],
	"invitations/[id]": [7],
	"s/[id]": [8],
	"[id]": [3]
};

			export const hooks = {
				handleError: (({ error }) => { console.error(error) }),
			};