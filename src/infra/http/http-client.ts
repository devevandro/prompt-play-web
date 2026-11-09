/** Wrapper fino sobre fetch. Troque por axios/ky se preferir. */
export async function http<T>(url: string, init?: RequestInit): Promise<T> {
  const res = await fetch(url, {
    ...init,
    headers: { 'Content-Type': 'application/json', ...init?.headers },
  })
  if (!res.ok) throw new Error(`HTTP ${res.status} - ${res.statusText}`)
  return (await res.json()) as T
}
