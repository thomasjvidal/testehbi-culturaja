export function formatCurrentDate(): string {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date())
}

export function formatDate(dateString: string): string {
  return new Intl.DateTimeFormat("pt-BR").format(new Date(dateString))
}
