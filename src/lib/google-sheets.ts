
import 'server-only'

/**
 * Tukkuguda Villas
 * Google Sheets Enquiry Integration
 *
 * Server-side utility only.
 * Sends website enquiry data to the deployed Google Apps Script Web App.
 */

export interface EnquiryData {
  fullName: string
  mobileNumber: string
  villaSize: string
  expectedBudget: string
  message: string
}

interface GoogleAppsScriptResponse {
  success?: boolean
  message?: string
}

interface SubmitEnquiryResult {
  success: boolean
  message: string
}

export async function submitEnquiry(
  data: EnquiryData
): Promise<SubmitEnquiryResult> {
  // Read the deployed Google Apps Script URL from environment variables.
  const scriptUrl = process.env.GOOGLE_SCRIPT_URL?.trim()

  // Do not simulate success if the URL is missing.
  if (!scriptUrl) {
    console.error(
      '[Google Sheets] GOOGLE_SCRIPT_URL is not configured.'
    )

    return {
      success: false,
      message: 'Google Sheets integration is not configured.',
    }
  }

  // Validate the configured URL.
  try {
    const parsedUrl = new URL(scriptUrl)

    if (
      parsedUrl.protocol !== 'https:' ||
      parsedUrl.hostname !== 'script.google.com' ||
      !parsedUrl.pathname.includes('/macros/s/') ||
      !parsedUrl.pathname.endsWith('/exec')
    ) {
      throw new Error('Invalid Google Apps Script Web App URL.')
    }
  } catch (error) {
    console.error('[Google Sheets] Invalid script URL:', error)

    return {
      success: false,
      message: 'Invalid Google Apps Script URL configuration.',
    }
  }

  // Prepare the exact payload expected by doPost(e).
  const payload: EnquiryData = {
    fullName: data.fullName.trim(),
    mobileNumber: data.mobileNumber.trim(),
    villaSize: data.villaSize.trim(),
    expectedBudget: data.expectedBudget.trim(),
    message: data.message.trim(),
  }

  // Basic required-field validation.
  if (
    !payload.fullName ||
    !payload.mobileNumber ||
    !payload.villaSize
  ) {
    return {
      success: false,
      message: 'Name, mobile number and villa size are required.',
    }
  }

  try {
    console.info('[Google Sheets] Sending enquiry to Apps Script.')

    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      redirect: 'follow',
      cache: 'no-store',
      signal: AbortSignal.timeout(20000),
    })

    const responseText = await response.text()

    // Check HTTP response.
    if (!response.ok) {
      console.error(
        '[Google Sheets] HTTP error:',
        response.status,
        responseText.slice(0, 1000)
      )

      return {
        success: false,
        message: `Google Apps Script request failed (HTTP ${response.status}).`,
      }
    }

    // Parse Apps Script JSON response.
    let result: GoogleAppsScriptResponse

    try {
      result = JSON.parse(responseText) as GoogleAppsScriptResponse
    } catch {
      console.error(
        '[Google Sheets] Could not parse Apps Script response:',
        responseText.slice(0, 1000)
      )

      return {
        success: false,
        message: 'Invalid response received from Google Apps Script.',
      }
    }

    // Only report success when Apps Script confirms success.
    if (result.success === true) {
      console.info('[Google Sheets] Enquiry submitted successfully.')

      return {
        success: true,
        message:
          result.message || 'Enquiry submitted successfully.',
      }
    }

    console.error(
      '[Google Sheets] Apps Script returned an error:',
      result.message || 'Unknown error'
    )

    return {
      success: false,
      message:
        result.message || 'Google Sheets could not save the enquiry.',
    }
  } catch (error) {
    console.error(
      '[Google Sheets] Failed to connect to Apps Script:',
      error
    )

    return {
      success: false,
      message:
        error instanceof Error && error.name === 'TimeoutError'
          ? 'Google Sheets request timed out. Please try again.'
          : 'Unable to connect to Google Sheets. Please try again.',
    }
  }
}
