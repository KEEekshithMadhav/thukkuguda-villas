'use client'

import { useState } from 'react'
import { validateIndianMobile, validateRequired } from '@/lib/validation'

// ─── Types ───────────────────────────────────────────────────────────────────

interface FormData {
  fullName: string
  mobileNumber: string
  villaSize: string
  expectedBudget: string
  message: string
}

interface FormErrors {
  fullName?: string
  mobileNumber?: string
  villaSize?: string
}

interface EnquiryFormProps {
  className?: string
  variant?: 'light' | 'dark'
}

// ─── Constants ────────────────────────────────────────────────────────────────

const VILLA_SIZES = [
  '267 Sq. Yds',
  '300 Sq. Yds',
  '350 Sq. Yds',
  '400 Sq. Yds',
  'Not Decided Yet',
] as const

const BUDGET_OPTIONS = [
  'Prefer not to disclose',
  'Under ₹1 Crore',
  '₹1–1.5 Crore',
  '₹1.5–2 Crore',
  'Above ₹2 Crore',
  'Discuss with Sales Team',
] as const

const INITIAL_FORM: FormData = {
  fullName: '',
  mobileNumber: '',
  villaSize: '',
  expectedBudget: '',
  message: '',
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function EnquiryForm({
  className = '',
  variant = 'light',
}: EnquiryFormProps) {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM)
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  // ── Derived styles based on variant ──────────────────────────────────────

  const isDark = variant === 'dark'

  const containerBg = isDark ? 'bg-forest' : 'bg-ivory'
  const labelColor = 'text-gold'
  const inputBg = isDark
    ? 'bg-forest/60 border-gold/40 text-ivory placeholder-ivory/40 focus:border-gold'
    : 'bg-white border-gold/50 text-charcoal placeholder-charcoal/40 focus:border-gold'
  const selectBg = isDark
    ? 'bg-forest border-gold/40 text-ivory focus:border-gold'
    : 'bg-white border-gold/50 text-charcoal focus:border-gold'
  const headingColor = isDark ? 'text-ivory' : 'text-charcoal'

  // ── Validation ───────────────────────────────────────────────────────────

  function validate(): boolean {
    const newErrors: FormErrors = {}

    if (!validateRequired(formData.fullName)) {
      newErrors.fullName = 'Full name is required.'
    }
    if (!validateRequired(formData.mobileNumber)) {
      newErrors.mobileNumber = 'Mobile number is required.'
    } else if (!validateIndianMobile(formData.mobileNumber)) {
      newErrors.mobileNumber =
        'Enter a valid 10-digit Indian mobile number (e.g. 9876543210 or +91 9876543210).'
    }
    if (!validateRequired(formData.villaSize)) {
      newErrors.villaSize = 'Please select an interested villa size.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // ── Handlers ─────────────────────────────────────────────────────────────

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear field error on change
    if (name in errors) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitError(null)

    if (!validate()) return
    if (isSubmitting) return

    setIsSubmitting(true)

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const json = (await res.json()) as { success: boolean; message: string }

      if (res.ok && json.success) {
        setIsSubmitted(true)
        setFormData(INITIAL_FORM)
      } else {
        setSubmitError(
          json.message || 'Submission failed. Please call us directly.'
        )
      }
    } catch {
      setSubmitError(
        'Network error. Please check your connection and try again, or call us directly.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  // ── Shared input class ────────────────────────────────────────────────────

  const baseInput = `w-full px-4 py-3 rounded-sm border text-sm transition-colors duration-200 outline-none focus:ring-1 focus:ring-gold/60 ${inputBg}`
  const baseSelect = `w-full px-4 py-3 rounded-sm border text-sm transition-colors duration-200 outline-none focus:ring-1 focus:ring-gold/60 appearance-none ${selectBg}`
  const labelClass = `block mb-1.5 text-xs font-semibold tracking-widest uppercase ${labelColor}`

  // ── Success State ─────────────────────────────────────────────────────────

  if (isSubmitted) {
    return (
      <div
        className={`${containerBg} ${className} flex flex-col items-center justify-center gap-6 py-16 px-8 text-center rounded-sm`}
      >
        {/* Checkmark icon */}
        <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold bg-gold/10">
          <svg
            className="h-10 w-10 text-gold"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <h3 className={`text-2xl font-heading font-semibold mb-3 ${headingColor}`}>
            Thank You!
          </h3>
          <p className={`text-base leading-relaxed ${isDark ? 'text-ivory/80' : 'text-charcoal/70'}`}>
            Our team will contact you shortly. We look forward to helping you find
            your perfect villa at Thukkuguda Villas.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setIsSubmitted(false)}
          className="mt-2 text-xs text-gold underline underline-offset-4 hover:text-gold/70 transition-colors"
        >
          Submit another enquiry
        </button>
      </div>
    )
  }

  // ── Form ──────────────────────────────────────────────────────────────────

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`${containerBg} ${className} space-y-5`}
    >
      {/* Global submit error */}
      {submitError && (
        <div className="rounded-sm border border-red-400/60 bg-red-50 px-4 py-3 text-sm text-red-700">
          {submitError}
        </div>
      )}

      {/* Row 1: Full Name + Mobile Number — 2-col on md+ */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className={labelClass}>
            Full Name <span className="text-red-400">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            placeholder="e.g. Ravi Kumar"
            value={formData.fullName}
            onChange={handleChange}
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? 'fullName-error' : undefined}
            className={baseInput}
          />
          {errors.fullName && (
            <p id="fullName-error" className="mt-1.5 text-xs text-red-500">
              {errors.fullName}
            </p>
          )}
        </div>

        {/* Mobile Number */}
        <div>
          <label htmlFor="mobileNumber" className={labelClass}>
            Mobile Number <span className="text-red-400">*</span>
          </label>
          <input
            id="mobileNumber"
            name="mobileNumber"
            type="tel"
            autoComplete="tel"
            placeholder="e.g. 9876543210"
            value={formData.mobileNumber}
            onChange={handleChange}
            aria-invalid={!!errors.mobileNumber}
            aria-describedby={errors.mobileNumber ? 'mobileNumber-error' : undefined}
            className={baseInput}
          />
          {errors.mobileNumber && (
            <p id="mobileNumber-error" className="mt-1.5 text-xs text-red-500">
              {errors.mobileNumber}
            </p>
          )}
        </div>
      </div>

      {/* Row 2: Villa Size + Expected Budget — 2-col on md+ */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {/* Interested Villa Size */}
        <div>
          <label htmlFor="villaSize" className={labelClass}>
            Interested Villa Size <span className="text-red-400">*</span>
          </label>
          <div className="relative">
            <select
              id="villaSize"
              name="villaSize"
              value={formData.villaSize}
              onChange={handleChange}
              aria-invalid={!!errors.villaSize}
              aria-describedby={errors.villaSize ? 'villaSize-error' : undefined}
              className={baseSelect}
            >
              <option value="" disabled>
                — Select Villa Size —
              </option>
              {VILLA_SIZES.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
            {/* Chevron icon */}
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
              <svg
                className="h-4 w-4 text-gold"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          {errors.villaSize && (
            <p id="villaSize-error" className="mt-1.5 text-xs text-red-500">
              {errors.villaSize}
            </p>
          )}
        </div>

        {/* Expected Budget */}
        <div>
          <label htmlFor="expectedBudget" className={labelClass}>
            Expected Budget
          </label>
          <div className="relative">
            <select
              id="expectedBudget"
              name="expectedBudget"
              value={formData.expectedBudget}
              onChange={handleChange}
              className={baseSelect}
            >
              <option value="">— Select Budget Range —</option>
              {BUDGET_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
              <svg
                className="h-4 w-4 text-gold"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Row 3: Message — full width */}
      <div>
        <label htmlFor="message" className={labelClass}>
          Message / Requirements
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about your requirements, preferred facing, any specific needs…"
          value={formData.message}
          onChange={handleChange}
          className={`${baseInput} resize-none`}
        />
      </div>

      {/* Submit */}
      <div className="pt-1">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`
            w-full md:w-auto md:min-w-[220px]
            inline-flex items-center justify-center gap-2
            px-8 py-4
            bg-gold text-charcoal
            text-sm font-semibold tracking-widest uppercase
            rounded-sm
            transition-all duration-300
            hover:bg-gold/90 hover:shadow-lg hover:shadow-gold/20
            focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2
            disabled:opacity-60 disabled:cursor-not-allowed
          `}
        >
          {isSubmitting ? (
            <>
              {/* Spinner */}
              <svg
                className="h-4 w-4 animate-spin"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              Sending…
            </>
          ) : (
            'Request a Callback'
          )}
        </button>
        <p className={`mt-3 text-xs ${isDark ? 'text-ivory/50' : 'text-charcoal/50'}`}>
          * Required fields. We respect your privacy and will never share your
          information.
        </p>
      </div>
    </form>
  )
}
