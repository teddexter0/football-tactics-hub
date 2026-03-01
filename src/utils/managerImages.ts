// Wikipedia REST API — free, no auth, CORS-enabled
// Maps manager names to their Wikipedia page slugs for portrait photos
const MANAGER_WIKI_SLUGS: Record<string, string> = {
  "Pep Guardiola":       "Pep_Guardiola",
  "Sir Alex Ferguson":   "Alex_Ferguson",
  "Jürgen Klopp":        "Jürgen_Klopp",
  "Antonio Conte":       "Antonio_Conte",
  "Zinedine Zidane":     "Zinedine_Zidane",
  "Vicente del Bosque":  "Vicente_del_Bosque",
  "Carlo Ancelotti":     "Carlo_Ancelotti",
  "Thomas Tuchel":       "Thomas_Tuchel",
  "Claudio Ranieri":     "Claudio_Ranieri",
  "Luis Enrique":        "Luis_Enrique_(footballer)",
  "Didier Deschamps":    "Didier_Deschamps",
  "José Mourinho":       "José_Mourinho",
  "Joachim Löw":         "Joachim_Löw",
  "Arrigo Sacchi":       "Arrigo_Sacchi",
  "Johan Cruyff":        "Johan_Cruyff",
  "Arsène Wenger":       "Arsène_Wenger",
};

export async function fetchManagerPhoto(
  managerName: string,
  signal?: AbortSignal
): Promise<string | null> {
  const slug = MANAGER_WIKI_SLUGS[managerName];
  if (!slug) return null;

  try {
    const res = await fetch(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(slug)}`,
      { headers: { Accept: 'application/json' }, signal }
    );
    if (!res.ok) return null;
    const data = await res.json();
    return (data.thumbnail?.source as string) ?? null;
  } catch {
    return null;
  }
}
