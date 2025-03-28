export default function NotificationsSettingsPage() {
  return (
    <div>
      <div className="settings-section">
        <h2>Push Notifications</h2>

        <div className="card">
          <div className="card-header">
            <h3 className="card-title">App Notifications</h3>
          </div>

          <div
            className="form-group"
            style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
          >
            <label>Enable Push Notifications</label>
            <label className="toggle-switch">
              <input type="checkbox" checked />
              <span className="toggle-slider"></span>
            </label>
          </div>

          <h4>Notification Preferences</h4>

          <div
            className="form-group"
            style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
          >
            <label>Transaction Alerts</label>
            <label className="toggle-switch">
              <input type="checkbox" checked />
              <span className="toggle-slider"></span>
            </label>
          </div>

          <div
            className="form-group"
            style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
          >
            <label>Budget Alerts</label>
            <label className="toggle-switch">
              <input type="checkbox" checked />
              <span className="toggle-slider"></span>
            </label>
          </div>

          <div
            className="form-group"
            style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
          >
            <label>Bill Reminders</label>
            <label className="toggle-switch">
              <input type="checkbox" checked />
              <span className="toggle-slider"></span>
            </label>
          </div>

          <div
            className="form-group"
            style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
          >
            <label>Financial Insights</label>
            <label className="toggle-switch">
              <input type="checkbox" checked />
              <span className="toggle-slider"></span>
            </label>
          </div>

          <div
            className="form-group"
            style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
          >
            <label>App Updates</label>
            <label className="toggle-switch">
              <input type="checkbox" />
              <span className="toggle-slider"></span>
            </label>
          </div>

          <div className="button-group">
            <button className="button button-primary">Save Notification Settings</button>
          </div>
        </div>
      </div>

      <div className="settings-section">
        <h2>Email Notifications</h2>

        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Email Preferences</h3>
          </div>

          <div
            className="form-group"
            style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
          >
            <label>Enable Email Notifications</label>
            <label className="toggle-switch">
              <input type="checkbox" checked />
              <span className="toggle-slider"></span>
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="notification-email">Notification Email</label>
            <input
              type="email"
              id="notification-email"
              className="form-control"
              defaultValue="user@example.com"
              placeholder="Enter email for notifications"
            />
          </div>

          <h4>Email Notification Types</h4>

          <div className="checkbox-group">
            <input type="checkbox" id="email-weekly-summary" checked />
            <label htmlFor="email-weekly-summary">Weekly Financial Summary</label>
          </div>

          <div className="checkbox-group">
            <input type="checkbox" id="email-monthly-report" checked />
            <label htmlFor="email-monthly-report">Monthly Financial Report</label>
          </div>

          <div className="checkbox-group">
            <input type="checkbox" id="email-budget-alerts" checked />
            <label htmlFor="email-budget-alerts">Budget Alerts</label>
          </div>

          <div className="checkbox-group">
            <input type="checkbox" id="email-bill-reminders" checked />
            <label htmlFor="email-bill-reminders">Bill Payment Reminders</label>
          </div>

          <div className="checkbox-group">
            <input type="checkbox" id="email-security-alerts" checked />
            <label htmlFor="email-security-alerts">Security Alerts</label>
          </div>

          <div className="checkbox-group">
            <input type="checkbox" id="email-product-updates" />
            <label htmlFor="email-product-updates">Product Updates & News</label>
          </div>

          <div className="button-group">
            <button className="button button-primary">Save Email Preferences</button>
          </div>
        </div>
      </div>

      <div className="settings-section">
        <h2>Notification Schedule</h2>

        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Quiet Hours</h3>
          </div>

          <p>Set times when you don't want to receive notifications</p>

          <div
            className="form-group"
            style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
          >
            <label>Enable Quiet Hours</label>
            <label className="toggle-switch">
              <input type="checkbox" checked />
              <span className="toggle-slider"></span>
            </label>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="quiet-start">Start Time</label>
              <input type="time" id="quiet-start" className="form-control" defaultValue="22:00" />
            </div>
            <div className="form-group">
              <label htmlFor="quiet-end">End Time</label>
              <input type="time" id="quiet-end" className="form-control" defaultValue="07:00" />
            </div>
          </div>

          <div className="form-group">
            <label>Days</label>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <div className="checkbox-group">
                <input type="checkbox" id="day-mon" checked />
                <label htmlFor="day-mon">Mon</label>
              </div>
              <div className="checkbox-group">
                <input type="checkbox" id="day-tue" checked />
                <label htmlFor="day-tue">Tue</label>
              </div>
              <div className="checkbox-group">
                <input type="checkbox" id="day-wed" checked />
                <label htmlFor="day-wed">Wed</label>
              </div>
              <div className="checkbox-group">
                <input type="checkbox" id="day-thu" checked />
                <label htmlFor="day-thu">Thu</label>
              </div>
              <div className="checkbox-group">
                <input type="checkbox" id="day-fri" checked />
                <label htmlFor="day-fri">Fri</label>
              </div>
              <div className="checkbox-group">
                <input type="checkbox" id="day-sat" checked />
                <label htmlFor="day-sat">Sat</label>
              </div>
              <div className="checkbox-group">
                <input type="checkbox" id="day-sun" checked />
                <label htmlFor="day-sun">Sun</label>
              </div>
            </div>
          </div>

          <div className="button-group">
            <button className="button button-primary">Save Schedule</button>
          </div>
        </div>
      </div>
    </div>
  )
}

