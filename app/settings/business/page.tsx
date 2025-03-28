export default function BusinessSettingsPage() {
  return (
    <div>
      <div className="settings-section">
        <h2>Business Information</h2>

        <form>
          <div className="form-group">
            <label htmlFor="business-name">Business Name</label>
            <input
              type="text"
              id="business-name"
              className="form-control"
              defaultValue="Acme Corporation"
              placeholder="Enter your business name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="business-type">Business Type</label>
            <select id="business-type" className="form-control">
              <option value="sole-proprietorship">Sole Proprietorship</option>
              <option value="partnership">Partnership</option>
              <option value="llc" selected>
                Limited Liability Company (LLC)
              </option>
              <option value="corporation">Corporation</option>
              <option value="nonprofit">Nonprofit</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="business-address">Business Address</label>
            <input
              type="text"
              id="business-address"
              className="form-control"
              defaultValue="123 Business St"
              placeholder="Enter your business address"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="business-city">City</label>
              <input
                type="text"
                id="business-city"
                className="form-control"
                defaultValue="San Francisco"
                placeholder="City"
              />
            </div>
            <div className="form-group">
              <label htmlFor="business-state">State/Province</label>
              <input
                type="text"
                id="business-state"
                className="form-control"
                defaultValue="CA"
                placeholder="State/Province"
              />
            </div>
            <div className="form-group">
              <label htmlFor="business-zip">ZIP/Postal Code</label>
              <input
                type="text"
                id="business-zip"
                className="form-control"
                defaultValue="94103"
                placeholder="ZIP/Postal Code"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="business-country">Country</label>
            <select id="business-country" className="form-control">
              <option value="us" selected>
                United States
              </option>
              <option value="ca">Canada</option>
              <option value="uk">United Kingdom</option>
              <option value="au">Australia</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="business-phone">Business Phone</label>
              <input
                type="tel"
                id="business-phone"
                className="form-control"
                defaultValue="(555) 123-4567"
                placeholder="Business Phone"
              />
            </div>
            <div className="form-group">
              <label htmlFor="business-email">Business Email</label>
              <input
                type="email"
                id="business-email"
                className="form-control"
                defaultValue="contact@acmecorp.com"
                placeholder="Business Email"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="business-website">Business Website</label>
            <input
              type="url"
              id="business-website"
              className="form-control"
              defaultValue="https://www.acmecorp.com"
              placeholder="Business Website"
            />
          </div>

          <div className="button-group">
            <button type="submit" className="button button-primary">
              Save Changes
            </button>
            <button type="reset" className="button button-secondary">
              Cancel
            </button>
          </div>
        </form>
      </div>

      <div className="settings-section">
        <h2>Tax Information</h2>

        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Tax Settings</h3>
          </div>

          <div className="form-group">
            <label htmlFor="tax-id">Tax Identification Number</label>
            <input
              type="text"
              id="tax-id"
              className="form-control"
              defaultValue="12-3456789"
              placeholder="Enter your tax ID"
            />
          </div>

          <div className="form-group">
            <label htmlFor="default-tax-rate">Default Tax Rate (%)</label>
            <input
              type="number"
              id="default-tax-rate"
              className="form-control"
              defaultValue="8.5"
              step="0.1"
              min="0"
              max="100"
              placeholder="Enter default tax rate"
            />
          </div>

          <div className="form-group">
            <label>Tax Calculation Method</label>
            <div className="checkbox-group">
              <input type="radio" id="tax-inclusive" name="tax-method" />
              <label htmlFor="tax-inclusive">Tax Inclusive (prices include tax)</label>
            </div>
            <div className="checkbox-group">
              <input type="radio" id="tax-exclusive" name="tax-method" checked />
              <label htmlFor="tax-exclusive">Tax Exclusive (tax added to prices)</label>
            </div>
          </div>

          <div className="button-group">
            <button className="button button-primary">Save Tax Settings</button>
          </div>
        </div>

        <div className="card" style={{ marginTop: "20px" }}>
          <div className="card-header">
            <h3 className="card-title">Custom Tax Rates</h3>
            <button className="button button-secondary">Add Tax Rate</button>
          </div>

          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ textAlign: "left", padding: "10px", borderBottom: "1px solid #ddd" }}>Name</th>
                <th style={{ textAlign: "left", padding: "10px", borderBottom: "1px solid #ddd" }}>Rate (%)</th>
                <th style={{ textAlign: "left", padding: "10px", borderBottom: "1px solid #ddd" }}>Region</th>
                <th style={{ textAlign: "right", padding: "10px", borderBottom: "1px solid #ddd" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>State Sales Tax</td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>6.5%</td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>California</td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd", textAlign: "right" }}>
                  <button className="button button-secondary" style={{ marginRight: "5px" }}>
                    Edit
                  </button>
                  <button className="button button-danger">Delete</button>
                </td>
              </tr>
              <tr>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>City Tax</td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>2.0%</td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>San Francisco</td>
                <td style={{ padding: "10px", borderBottom: "1px solid #ddd", textAlign: "right" }}>
                  <button className="button button-secondary" style={{ marginRight: "5px" }}>
                    Edit
                  </button>
                  <button className="button button-danger">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="card" style={{ marginTop: "20px" }}>
          <div className="card-header">
            <h3 className="card-title">Invoice Settings</h3>
          </div>

          <div className="form-group">
            <label htmlFor="invoice-prefix">Invoice Number Prefix</label>
            <input
              type="text"
              id="invoice-prefix"
              className="form-control"
              defaultValue="INV-"
              placeholder="Enter invoice prefix"
            />
          </div>

          <div className="form-group">
            <label htmlFor="next-invoice-number">Next Invoice Number</label>
            <input
              type="number"
              id="next-invoice-number"
              className="form-control"
              defaultValue="1001"
              placeholder="Enter next invoice number"
            />
          </div>

          <div className="form-group">
            <label htmlFor="invoice-notes">Default Invoice Notes</label>
            <textarea
              id="invoice-notes"
              className="form-control"
              rows={4}
              defaultValue="Thank you for your business. Payment is due within 30 days."
              placeholder="Enter default invoice notes"
            ></textarea>
          </div>

          <div className="button-group">
            <button className="button button-primary">Save Invoice Settings</button>
          </div>
        </div>
      </div>
    </div>
  )
}

