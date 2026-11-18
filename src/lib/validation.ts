/**
 * Validation utilities for Thukkuguda Villas enquiry form
 */

/**
 * Validates an Indian mobile number.
 * Accepts: 10-digit numbers starting with 6-9, with optional +91 or 91 prefix.
 */
export function validateIndianMobile(value: string): boolean {
  if (!value) return false
  const cleaned = value.trim().replace(/[\s\-()]/g, '')
  // Allow optional +91 or 91 prefix followed by 10 digits starting with 6-9
  const regex = /^(\+91|91)?[6-9]\d{9}$/
  return regex.test(cleaned)
}

/**
 * Normalizes a mobile number to 10 digits (strips +91 or 91 prefix if present).
 */
export function formatMobileNumber(value: string): string {
  if (!value) return ''
  const cleaned = value.trim().replace(/[\s\-()]/g, '')
  if (cleaned.startsWith('+91') && cleaned.length === 13) {
    return cleaned.slice(3)
  }
  if (cleaned.startsWith('91') && cleaned.length === 12) {
    return cleaned.slice(2)
  }
  return cleaned
}

/**
 * Validates that a string is non-empty after trimming whitespace.
 */
export function validateRequired(value: string): boolean {
  return typeof value === 'string' && value.trim().length > 0
}
