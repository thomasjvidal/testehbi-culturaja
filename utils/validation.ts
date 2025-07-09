export function validateAge(dateString: string): string | boolean {
  const birthDate = new Date(dateString)
  const today = new Date()
  const age = today.getFullYear() - birthDate.getFullYear()
  const monthDiff = today.getMonth() - birthDate.getMonth()

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    return age - 1 >= 18 || "Você deve ter pelo menos 18 anos"
  }

  return age >= 18 || "Você deve ter pelo menos 18 anos"
}
