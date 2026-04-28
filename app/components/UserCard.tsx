type Props = {
  name: string;
  role: string;
};

export default function UserCard({ name, role }: Props) {
  return (
    <div className="border p-4 rounded-lg">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p>{role}</p>
    </div>
  );
}