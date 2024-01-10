// tutorial -> https://youtu.be/ZVnjOPwW4ZA?t=1765

type Users = {
  id: number;
  name: string;
  email: string;
};

export default async function DataFetching() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);

  //   const res = await fetch(`https://jsonplaceholder.typicode.com/users`, {cache: 'no-store}); //if my data changes frequently then use this. Using this data will not be served from the cache

  //   const res = await fetch(`https://jsonplaceholder.typicode.com/users`, {next : {revalidate: 10}}); //if i want to serve new data every 10 seconds

  const users: Users[] = await res.json();
  console.log(users);
  return (
    <div>
      {users.map(({ id, name, email }) => (
        <p key={id}>
          {name} {email}
        </p>
      ))}
    </div>
  );
}
