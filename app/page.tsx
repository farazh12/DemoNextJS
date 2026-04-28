import UserCard from "./components/UserCard";

const users = [
  { name: "Faraz Hussain", role: "Android Developer 🚀" },
  { name: "Ali Khan", role: "Web Developer 💻" },
  { name: "Sara Ahmed", role: "UI Designer 🎨" },
  { name: "Sara Ahmed", role: "UI Designer 🎨" },
  { name: "Sara Ahmed", role: "UI Designer 🎨" },
  { name: "Sara Ahmed", role: "UI Designer 🎨" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-4xl font-bold">Users</h1>

      {users.map((user, index) => (
        <UserCard key={index} name={user.name} role={user.role} />
      ))}
    </div>
  );
}