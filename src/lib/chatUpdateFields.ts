export interface ToggleChatStatusPayload {
  isPinned?: boolean
  isHidden?: boolean
}

export function buildToggleChatStatusFields(
  currentUserId: string,
  payload: ToggleChatStatusPayload,
): Record<string, boolean> | null {
  const fields: Record<string, boolean> = {}
  if (typeof payload.isPinned === 'boolean') {
    fields[`isPinnedBy.${currentUserId}`] = payload.isPinned
  }
  if (typeof payload.isHidden === 'boolean') {
    fields[`isHiddenBy.${currentUserId}`] = payload.isHidden
  }
  if (Object.keys(fields).length === 0) return null
  return fields
}

export function normalizeStringArray(input: unknown): string[] {
  if (!Array.isArray(input)) return []
  return (input as unknown[]).filter((x): x is string => typeof x === 'string')
}

export function buildUpdateCategoriesFields(currentUserId: string, categories: unknown): Record<string, string[]> {
  const arr = normalizeStringArray(categories)
  return { [`categoriesBy.${currentUserId}`]: arr }
}

export function buildUpdateTagsFields(currentUserId: string, tags: unknown): Record<string, string[]> {
  const arr = normalizeStringArray(tags)
  return { [`tagsBy.${currentUserId}`]: arr }
}

