"use server"

import prisma from "@/lib/prisma"
import { auth } from "@/auth"

export async function updateProfile(formData: FormData) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return {
        success: false,
        message: "You must be logged in to update your profile",
      }
    }

    const userId = session.user.id

    const profile = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      business_name: formData.get("business_name") as string,
      profile_picture: (formData.get("profile_picture") as string) || null,
    }

    const updatedProfile = await prisma.user.update({
      where: { id: userId },
      data: {
        name: profile.name,
        email: profile.email,
        phone: profile.phone,
        business_name: profile.business_name,
        profile_picture: profile.profile_picture,
      },
    })

    return {
      success: true,
      message: "Profile updated successfully",
      data: updatedProfile,
    }
  } catch (error) {
    console.error("Error updating profile:", error)
    return {
      success: false,
      message: "Failed to update profile",
    }
  }
}

export async function updateNotificationSettings(formData: FormData) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return {
        success: false,
        message: "You must be logged in to update notification settings",
      }
    }

    const userId = session.user.id

    const notificationPreferences = {
      push_enabled: formData.get("push_enabled") === "on",
      transaction_alerts: formData.get("transaction_alerts") === "on",
      budget_alerts: formData.get("budget_alerts") === "on",
      bill_reminders: formData.get("bill_reminders") === "on",
      financial_insights: formData.get("financial_insights") === "on",
      app_updates: formData.get("app_updates") === "on",
      email_enabled: formData.get("email_enabled") === "on",
      weekly_summary: formData.get("weekly_summary") === "on",
      monthly_report: formData.get("monthly_report") === "on",
      email_budget_alerts: formData.get("email_budget_alerts") === "on",
      email_bill_reminders: formData.get("email_bill_reminders") === "on",
      email_security_alerts: formData.get("email_security_alerts") === "on",
      product_updates: formData.get("product_updates") === "on",
    }

    // Update notification settings in the database
    await prisma.userSettings.update({
      where: { userId },
      data: {
        notification_preferences: notificationPreferences,
      },
    })

    return {
      success: true,
      message: "Notification settings updated successfully",
    }
  } catch (error) {
    console.error("Error updating notification settings:", error)
    return {
      success: false,
      message: "Failed to update notification settings",
    }
  }
}

export async function updateBusinessInfo(formData: FormData) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return {
        success: false,
        message: "You must be logged in to update business information",
      }
    }

    const userId = session.user.id

    const businessInfo = {
      business_name: formData.get("business_name") as string,
      business_type: formData.get("business_type") as string,
      address: formData.get("business_address") as string,
      city: formData.get("business_city") as string,
      state: formData.get("business_state") as string,
      zip: formData.get("business_zip") as string,
      country: formData.get("business_country") as string,
      phone: formData.get("business_phone") as string,
      email: formData.get("business_email") as string,
      website: formData.get("business_website") as string,
    }

    // Check if business info exists
    const existingBusinessInfo = await prisma.businessInfo.findUnique({
      where: { userId },
    })

    if (existingBusinessInfo) {
      // Update existing business info
      await prisma.businessInfo.update({
        where: { userId },
        data: businessInfo,
      })
    } else {
      // Create new business info
      await prisma.businessInfo.create({
        data: {
          ...businessInfo,
          userId,
        },
      })
    }

    return {
      success: true,
      message: "Business information updated successfully",
    }
  } catch (error) {
    console.error("Error updating business information:", error)
    return {
      success: false,
      message: "Failed to update business information",
    }
  }
}

export async function updateTaxSettings(formData: FormData) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return {
        success: false,
        message: "You must be logged in to update tax settings",
      }
    }

    const userId = session.user.id

    const taxSettings = {
      tax_id: formData.get("tax_id") as string,
      default_tax_rate: Number.parseFloat(formData.get("default_tax_rate") as string),
      tax_method: formData.get("tax_method") as string,
    }

    // Check if tax settings exist
    const existingTaxSettings = await prisma.taxSettings.findUnique({
      where: { userId },
    })

    if (existingTaxSettings) {
      // Update existing tax settings
      await prisma.taxSettings.update({
        where: { userId },
        data: taxSettings,
      })
    } else {
      // Create new tax settings
      await prisma.taxSettings.create({
        data: {
          ...taxSettings,
          userId,
        },
      })
    }

    return {
      success: true,
      message: "Tax settings updated successfully",
    }
  } catch (error) {
    console.error("Error updating tax settings:", error)
    return {
      success: false,
      message: "Failed to update tax settings",
    }
  }
}

