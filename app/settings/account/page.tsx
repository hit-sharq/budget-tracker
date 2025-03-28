export default function AccountSettingsPage() {
  return (
    <div>
      <div className="settings-section">
        <h2>Login & Authentication</h2>

        <div className="form-group">
          <label htmlFor="current-password">Current Password</label>
          <input
            type="password"
            id="current-password"
            className="form-control"
            placeholder="Enter your current password"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="new-password">New Password</label>
            <input type="password" id="new-password" className="form-control" placeholder="Enter new password" />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm New Password</label>
            <input type="password" id="confirm-password" className="form-control" placeholder="Confirm new password" />
          </div>
        </div>

        <div className="button-group">
          <button className="button button-primary">Update Password</button>
        </div>

        <div className="card" style={{ marginTop: "20px" }}>
          <div className="card-header">
            <h3 className="card-title">Two-Factor Authentication</h3>
          </div>

          <p>Add an extra layer of security to your account by enabling two-factor authentication.</p>

          <div
            className="form-group"
            style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
          >
            <label>Enable 2FA</label>
            <label className="toggle-switch">
              <input type="checkbox" />
              <span className="toggle-slider"></span>
            </label>
          </div>

          <div className="button-group">
            <button className="button button-secondary">Set Up 2FA</button>
          </div>
        </div>

        <div className="card" style={{ marginTop: "20px" }}>
          <div className="card-header">
            <h3 className="card-title">Connected Accounts</h3>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  marginRight: "10px",
                  background: "#4267B2",
                  borderRadius: "50%",
                }}
              ></div>
              <span>Facebook</span>
            </div>
            <button className="button button-secondary">Connect</button>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  marginRight: "10px",
                  background: "#1DA1F2",
                  borderRadius: "50%",
                }}
              ></div>
              <span>Google</span>
            </div>
            <button className="button button-secondary">Connect</button>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{ width: "30px", height: "30px", marginRight: "10px", background: "#333", borderRadius: "50%" }}
              ></div>
              <span>Apple</span>
            </div>
            <button className="button button-secondary">Connect</button>
          </div>
        </div>
      </div>

      <div className="settings-section">
        <h2>Subscription Plans</h2>

        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Current Plan: Professional</h3>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
            <div>
              <p>
                <strong>Billing Cycle:</strong> Monthly
              </p>
              <p>
                <strong>Next Billing Date:</strong> June 15, 2023
              </p>
            </div>
            <div>
              <p>
                <strong>Amount:</strong> $19.99/month
              </p>
              <p>
                <strong>Status:</strong> <span style={{ color: "green" }}>Active</span>
              </p>
            </div>
          </div>

          <div className="button-group">
            <button className="button button-primary">Upgrade Plan</button>
            <button className="button button-secondary">Change Billing Cycle</button>
            <button className="button button-danger">Cancel Subscription</button>
          </div>
        </div>

        <div className="card" style={{ marginTop: "20px" }}>
          <div className="card-header">
            <h3 className="card-title">Payment Methods</h3>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  width: "40px",
                  height: "30px",
                  marginRight: "10px",
                  background: "#1a1f71",
                  borderRadius: "4px",
                }}
              ></div>
              <span>Visa ending in 4242</span>
            </div>
            <div>
              <button className="button button-secondary" style={{ marginRight: "10px" }}>
                Edit
              </button>
              <button className="button button-danger">Remove</button>
            </div>
          </div>

          <button className="button button-secondary">Add Payment Method</button>
        </div>

        <div className="card" style={{ marginTop: "20px" }}>
          <div className="card-header">
            <h3 className="card-title">Billing History</h3>
          </div>

          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ textAlign: "left", padding: "10px", borderBottom: "1px solid #ddd" }}>Date</th>
                <th style={{ textAlign: "left", padding: "10px", borderBottom: "1px solid #ddd" }}>Description</th>
                <th style={{ textAlign: "right", padding: "10px", borderBottom: "1px solid #ddd" }}>Amount</th>
                <th style={{ textAlign: "right", padding: "10px", borderBottom: "1px solid #ddd" }}>Invoice</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>May 15, 2023</td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Professional Plan - Monthly</td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd", textAlign: "right" }}>$19.99</td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd", textAlign: "right" }}>
                  <a href="#" style={{ color: "#007bff" }}>
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Apr 15, 2023</td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Professional Plan - Monthly</td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd", textAlign: "right" }}>$19.99</td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd", textAlign: "right" }}>
                  <a href="#" style={{ color: "#007bff" }}>
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Mar 15, 2023</td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>Professional Plan - Monthly</td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd", textAlign: "right" }}>$19.99</td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd", textAlign: "right" }}>
                  <a href="#" style={{ color: "#007bff" }}>
                    Download
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

