/**
 * Formata a data atual no formato brasileiro (DD/MM/YYYY)
 * @returns Data formatada em português brasileiro
 */
export function formatCurrentDate(): string {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date())
}

/**
 * Formata uma data específica no formato brasileiro
 * @param dateString - String da data a ser formatada
 * @returns Data formatada em português brasileiro
 */
export function formatDate(dateString: string): string {
  return new Intl.DateTimeFormat("pt-BR").format(new Date(dateString))
}
