import { NextRequest, NextResponse } from 'next/server'
import { submitEnquiry } from '@/lib/google-sheets'
import {
  validateRequired,
  validateIndianMobile,
  formatMobileNumber,
} from '@/lib/validation'

const VALID_VILLA_SIZES = [
  '267 Sq. Yds',
  '300 Sq. Yds',
  '350 Sq. Yds',
  '400 Sq. Yds',
  'Not Decided Yet',
] as const

export async function POST(request: NextRequest) {
  let body: unknown

  try {
    body = await request.json()
  } catch {
    return NextResponse.json(
      { success: false, message: 'Invalid JSON body.' },
      { status: 400 }
    )
  }

  const data = body as Record<string, unknown>

  // --- Server-side validation ---
  const errors: Record<string, string> = {}

  const fullName = typeof data.fullName === 'string' ? data.fullName.trim() : ''
  if (!validateRequired(fullName)) {
    errors.fullName = 'Full name is required.'
  }

  const rawMobile = typeof data.mobileNumber === 'string' ? data.mobileNumber : ''
  if (!validateRequired(rawMobile)) {
    errors.mobileNumber = 'Mobile number is required.'
  } else if (!validateIndianMobile(rawMobile)) {
    errors.mobileNumber = 'Please enter a valid Indian mobile number.'
  }

  const villaSize = typeof data.villaSize === 'string' ? data.villaSize.trim() : ''
  if (!validateRequired(villaSize)) {
    errors.villaSize = 'Please select an interested villa size.'
  } else if (!(VALID_VILLA_SIZES as readonly string[]).includes(villaSize)) {
    errors.villaSize = 'Invalid villa size selection.'
  }

  // Optional fields
  const expectedBudget =
    typeof data.expectedBudget === 'string' ? data.expectedBudget.trim() : ''
  const message = typeof data.message === 'string' ? data.message.trim() : ''

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { success: false, message: 'Validation failed.', errors },
      { status: 400 }
    )
  }

  // --- Submit to Google Apps Script ---
  const result = await submitEnquiry({
    fullName,
    mobileNumber: formatMobileNumber(rawMobile),
    villaSize,
    expectedBudget,
    message,
  })

  if (result.success) {
    return NextResponse.json(
      { success: true, message: "Thank you! We'll be in touch shortly." },
      { status: 200 }
    )
  }

  return NextResponse.json(
    { success: false, message: 'Submission failed. Please call us directly.' },
    { status: 500 }
  )
}

// Return 405 for all other HTTP methods
export async function GET() {
  return NextResponse.json({ message: 'Method not allowed.' }, { status: 405 })
}
export async function PUT() {
  return NextResponse.json({ message: 'Method not allowed.' }, { status: 405 })
}
export async function PATCH() {
  return NextResponse.json({ message: 'Method not allowed.' }, { status: 405 })
}
export async function DELETE() {
  return NextResponse.json({ message: 'Method not allowed.' }, { status: 405 })
}
