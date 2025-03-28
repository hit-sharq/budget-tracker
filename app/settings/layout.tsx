import type React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import "./settings.css"

export const metadata: Metadata = {
  title: "Budget Tracker | Settings",
  description: "Manage your account settings",
}

interface SettingsLayoutProps {
  children: React.ReactNode
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <div className="settings-container">
      <div className="settings-header">
        <h1>Settings</h1>
        <p>Manage your account settings and preferences</p>
      </div>
      <div className="settings-layout">
        <div className="settings-sidebar">
          <ul>
            <li>
              <Link href="/settings/profile" className={`${location.pathname === "/settings/profile" ? "active" : ""}`}>
                Profile
              </Link>
            </li>
            <li>
              <Link href="/settings/account" className={`${location.pathname === "/settings/account" ? "active" : ""}`}>
                Account
              </Link>
            </li>
            <li>
              <Link
                href="/settings/business"
                className={`${location.pathname === "/settings/business" ? "active" : ""}`}
              >
                Business
              </Link>
            </li>
            <li>
              <Link
                href="/settings/notifications"
                className={`${location.pathname === "/settings/notifications" ? "active" : ""}`}
              >
                Notifications
              </Link>
            </li>
            <li>
              <Link href="/settings/data" className={`${location.pathname === "/settings/data" ? "active" : ""}`}>
                Data Management
              </Link>
            </li>
            <li>
              <Link
                href="/settings/tracking"
                className={`${location.pathname === "/settings/tracking" ? "active" : ""}`}
              >
                Tracking
              </Link>
            </li>
            <li>
              <Link
                href="/settings/integrations"
                className={`${location.pathname === "/settings/integrations" ? "active" : ""}`}
              >
                Integrations
              </Link>
            </li>
            <li>
              <Link
                href="/settings/security"
                className={`${location.pathname === "/settings/security" ? "active" : ""}`}
              >
                Security
              </Link>
            </li>
            <li>
              <Link
                href="/settings/appearance"
                className={`${location.pathname === "/settings/appearance" ? "active" : ""}`}
              >
                Appearance
              </Link>
            </li>
            <li>
              <Link href="/settings/help" className={`${location.pathname === "/settings/help" ? "active" : ""}`}>
                Help & Support
              </Link>
            </li>
            <li>
              <Link
                href="/settings/preferences"
                className={`${location.pathname === "/settings/preferences" ? "active" : ""}`}
              >
                Preferences
              </Link>
            </li>
            <li>
              <Link
                href="/settings/feedback"
                className={`${location.pathname === "/settings/feedback" ? "active" : ""}`}
              >
                Feedback
              </Link>
            </li>
          </ul>
        </div>
        <div className="settings-content">{children}</div>
      </div>
      <div className="footer">
        <p>© 2024 Budget Tracker by Joshua</p>
      </div>
    </div>
  )
}

