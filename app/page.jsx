// app/page.js
export default async function HomePage() {
  // Example "fetched" data
  const profiles = [
    { id: 1, name: "Alicia Martinez", role: "Data Visualizer" },
    { id: 2, name: "Evan Lee", role: "Designer" },
    { id: 3, name: "Maya Chen", role: "Developer" },
  ];

  return (
    <main>
      <h1>Profile Directory</h1>
      <section>
        <h2>Filters</h2>
        <input placeholder="Search profiles..." />
      </section>

      <ul>
        {profiles.map((p) => (
          <li key={p.id}>
            <a href={`/profile/${p.id}`}>{p.name}</a> — {p.role}
          </li>
        ))}
      </ul>
    </main>
  );
}
