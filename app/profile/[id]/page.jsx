// app/profile/[id]/page.js
export default async function ProfilePage({ params }) {
  const { id } = await params;

  // Fake "database"
  const profiles = {
    1: { name: "Alicia Martinez", bio: "Data Viz Student at Purdue University." },
    2: { name: "Evan Lee", bio: "Designer passionate about UX and typography." },
    3: { name: "Maya Chen", bio: "Developer who loves building accessible interfaces." },
  };

  const profile = profiles[id];

  if (!profile) return <p>Profile not found.</p>;

  return (
    <article>
      <h1>{profile.name}</h1>
      <p>{profile.bio}</p>
      <a href="/">← Back to profiles</a>
    </article>
  );
}
