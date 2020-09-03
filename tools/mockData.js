const books = [
	{
		id: 1,
		title: 'The Alibi',
		slug: 'the-alibi',
		authorId: 1,
		category: 'Thriller',
	},
	{
		id: 2,
		title: 'Chill Factor',
		slug: 'chill-factor',
		authorId: 1,
		category: 'Romance',
	},
	{
		id: 3,
		title: 'The Witness',
		slug: 'the-witness',
		authorId: 1,
		category: 'Thriller',
	},
	{
		id: 4,
		title: 'Play Dirty',
		slug: 'play-dirty',
		authorId: 1,
		category: 'Action',
	},
	{
		id: 5,
		title: 'The Switch',
		slug: 'the-switch',
		authorId: 1,
		category: 'Drama',
	},
	{
		id: 6,
		title: 'Slow Heat in Heaven',
		slug: 'slow-heat-in-heaven',
		authorId: 1,
		category: 'Drama',
	},
	{
		id: 7,
		title: 'Best Kept Secrets',
		slug: 'best-kept-secret',
		authorId: 1,
		category: 'Thriller',
	},
	{
		id: 8,
		title: 'Long Time Coming',
		slug: 'long-time-coming',
		authorId: 1,
		category: 'Romance',
	},
	{
		id: 9,
		title: 'In A Class By Itself',
		slug: 'in-a-class-by-itself',
		authorId: 1,
		category: 'Drama',
	},
	{
		id: 10,
		title: 'A Whole New Light',
		slug: 'a-whole-new-light',
		authorId: 1,
		category: 'Romance',
	},
];

const authors = [
	{ id: 1, name: 'Sandra Brown' },
	{ id: 2, name: 'Napoleon Hill' },
	{ id: 3, name: 'Mark Manson' },
];

const newBook = {
	id: null,
	title: '',
	authorId: null,
	category: '',
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
	newBook,
	books,
	authors,
};
