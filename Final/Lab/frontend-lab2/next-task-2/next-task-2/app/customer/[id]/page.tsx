interface AdminPageProps {
  params: { id: string };
}

export default function AdminPage({ params }: AdminPageProps) {
  return (
    <div>
      <h1 className="text-2xl font-bold">Customer Profile</h1>
      <p>Showing details for Customer ID: {params.id}</p>
    </div>
  );
}
