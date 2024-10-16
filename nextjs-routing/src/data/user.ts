type User = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
};
  
export const users: User[] = [
    {
        id: '1',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
    },
    {
        id: '2',
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane.smith@example.com',
    },
];