export const randomUsername = () => {
	const users = ['Alice', 'Jane', 'Jo', 'Jules', 'Sam', 'Biddle', 'Charlotte', 'Justin', 'Steve', 'Kelly'];
	return users[Math.floor(Math.random() * Math.floor(users.length))];
};
