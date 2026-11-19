'use client'

import { useState } from 'react'
import { validateIndianMobile, validateRequired } from '@/lib/validation'
import { ChevronDown } from 'lucide-react'

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
  initialVillaSize?: string
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
  initialVillaSize = '',
}: EnquiryFormProps) {
  const [formData, setFormData] = useState<FormData>(() => ({
    ...INITIAL_FORM,
    villaSize: initialVillaSize || '',
  }))
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const isDark = variant === 'dark'

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

  // ── Shared input styles ───────────────────────────────────────────────────

  const inputBase = isDark
    ? 'w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/40 focus:border-white/60 focus:outline-none text-sm transition-colors duration-200'
    : 'w-full px-4 py-3 bg-white border border-softgrey text-charcoal placeholder-charcoal/30 focus:border-charcoal/50 focus:outline-none text-sm transition-colors duration-200'

  const selectBase = isDark
    ? 'w-full px-4 py-3 bg-white/10 border border-white/20 text-white focus:border-white/60 focus:outline-none text-sm appearance-none transition-colors duration-200'
    : 'w-full px-4 py-3 bg-white border border-softgrey text-charcoal focus:border-charcoal/50 focus:outline-none text-sm appearance-none transition-colors duration-200'

  const labelBase = isDark
    ? 'block mb-1.5 text-[11px] font-medium uppercase tracking-[0.15em] text-white/50'
    : 'block mb-1.5 text-[11px] font-medium uppercase tracking-[0.15em] text-charcoal/50'

  // ── Success State ─────────────────────────────────────────────────────────

  if (isSubmitted) {
    return (
      <div className={`${className} flex flex-col items-center justify-center gap-6 py-16 px-8 text-center`}>
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-taupe bg-offwhite">
          <svg
            className="h-8 w-8 text-taupe"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <h3 className={`text-2xl font-heading font-semibold mb-3 ${isDark ? 'text-white' : 'text-charcoal'}`}>
            Enquiry Received
          </h3>
          <p className={`text-sm leading-relaxed max-w-sm ${isDark ? 'text-white/60' : 'text-charcoal/60'}`}>
            Our team will reach out to you shortly. Thank you for your interest in Thukkuguda Villas.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setIsSubmitted(false)}
          className={`text-xs underline underline-offset-4 transition-colors ${isDark ? 'text-white/40 hover:text-white/60' : 'text-charcoal/40 hover:text-charcoal/60'}`}
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
      className={`${className} space-y-5`}
    >
      {/* Global submit error */}
      {submitError && (
        <div className="border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {submitError}
        </div>
      )}

      {/* Row 1: Full Name + Mobile Number */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className={labelBase}>
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
            className={inputBase}
          />
          {errors.fullName && (
            <p id="fullName-error" className="mt-1.5 text-xs text-red-500">
              {errors.fullName}
            </p>
          )}
        </div>

        {/* Mobile Number */}
        <div>
          <label htmlFor="mobileNumber" className={labelBase}>
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
            className={inputBase}
          />
          {errors.mobileNumber && (
            <p id="mobileNumber-error" className="mt-1.5 text-xs text-red-500">
              {errors.mobileNumber}
            </p>
          )}
        </div>
      </div>

      {/* Row 2: Villa Size + Expected Budget */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {/* Interested Villa Size */}
        <div>
          <label htmlFor="villaSize" className={labelBase}>
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
              className={selectBase}
            >
              <option value="" disabled>
                Select Villa Size
              </option>
              {VILLA_SIZES.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
              <ChevronDown className={`h-4 w-4 ${isDark ? 'text-white/40' : 'text-charcoal/30'}`} />
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
          <label htmlFor="expectedBudget" className={labelBase}>
            Expected Budget
          </label>
          <div className="relative">
            <select
              id="expectedBudget"
              name="expectedBudget"
              value={formData.expectedBudget}
              onChange={handleChange}
              className={selectBase}
            >
              <option value="">Select Budget Range</option>
              {BUDGET_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
              <ChevronDown className={`h-4 w-4 ${isDark ? 'text-white/40' : 'text-charcoal/30'}`} />
            </div>
          </div>
        </div>
      </div>

      {/* Row 3: Message */}
      <div>
        <label htmlFor="message" className={labelBase}>
          Message / Requirements
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about your requirements, preferred facing, any specific needs…"
          value={formData.message}
          onChange={handleChange}
          className={`${inputBase} resize-none`}
        />
      </div>

      {/* Submit */}
      <div className="pt-1">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`
            w-full md:w-auto md:min-w-[200px]
            inline-flex items-center justify-center gap-2
            px-8 py-3.5
            text-sm font-medium
            transition-all duration-200
            focus:outline-none focus-visible:ring-2 focus-visible:ring-charcoal/40
            disabled:opacity-60 disabled:cursor-not-allowed
            ${isDark
              ? 'bg-white text-charcoal hover:bg-offwhite'
              : 'bg-charcoal text-white hover:bg-charcoal/85'
            }
          `}
        >
          {isSubmitting ? (
            <>
              <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Sending…
            </>
          ) : (
            'Request a Callback'
          )}
        </button>
        <p className={`mt-3 text-xs ${isDark ? 'text-white/30' : 'text-charcoal/40'}`}>
          * Required fields. We respect your privacy.
        </p>
      </div>
    </form>
  )
}
