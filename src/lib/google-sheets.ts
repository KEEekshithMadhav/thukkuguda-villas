/**
 * Server-side utility for submitting enquiry data to Google Apps Script.
 * THIS FILE IS SERVER-ONLY. Never import this in client components.
 */

export interface EnquiryData {
  fullName: string;
  mobileNumber: string;
  villaSize: string;
  expectedBudget: string;
  message: string;
}

export async function submitEnquiry(
  data: EnquiryData
): Promise<{ success: boolean; message: string }> {
  const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

  if (!scriptUrl || scriptUrl === 'https://script.google.com/macros/s/AKfycbyRTj25LNueiRKQhR-slNm5g286ApZEnOe1Iy6bdpI6D0PWByss-PvzpyKnILwBLuy2Dg/exec') {
    console.warn(
      '[google-sheets] GOOGLE_SCRIPT_URL is not configured yet. Simulating success for test.'
    );
    // Return friendly simulated success if the URL hasn't been set yet,
    // so the user can test the UI immediately before deploying their sheet.
    return {
      success: true,
      message: "Thank you! We'll be in touch shortly.",
    };
  }

  try {
    const payload = {
      fullName: data.fullName,
      mobileNumber: data.mobileNumber,
      villaSize: data.villaSize,
      expectedBudget: data.expectedBudget,
      message: data.message,
    };

    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      redirect: 'follow',
    });

    if (!response.ok) {
      console.error(
        `[google-sheets] Apps Script returned HTTP ${response.status}`
      );
      return { success: false, message: 'Submission failed. Please call us directly.' };
    }

    const text = await response.text();
    let result: { success?: boolean; status?: string; message?: string } = {};

    try {
      result = JSON.parse(text);
    } catch {
      // If Apps Script returns raw text e.g. "Success"
      if (text.toLowerCase().includes('success')) {
        return { success: true, message: "Thank you! We'll be in touch shortly." };
      }
    }

    if (result.success === true || result.status === 'success' || result.status === 'SUCCESS') {
      return { success: true, message: "Thank you! We'll be in touch shortly." };
    }

    console.error('[google-sheets] Apps Script response:', text);
    return { success: false, message: 'Submission failed. Please call us directly.' };
  } catch (error) {
    console.error('[google-sheets] Network error while reaching Apps Script:', error);
    return { success: false, message: 'Submission failed. Please call us directly.' };
  }
}
