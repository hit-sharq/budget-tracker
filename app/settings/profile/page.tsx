import { auth } from "@/auth"
import prisma from "@/lib/prisma"

export default async function ProfileSettingsPage() {
  const session = await auth()

  if (!session?.user?.id) {
    return <div>Please log in to view this page</div>
  }

  // Fetch user profile from the database
  const userProfile = await prisma.user.findUnique({
    where: { id: session.user.id },
  })

  return (
    <div>
      <div className="settings-section">
        <h2>User Profile Management</h2>

        <div className="avatar-upload">
          <div className="avatar-preview">
            <img
              src={userProfile?.profile_picture || userProfile?.image || "/placeholder.svg?height=100&width=100"}
              alt="Profile"
            />
          </div>
          <div>
            <button className="button button-secondary">Change Picture</button>
            <p className="text-muted">Recommended size: 200x200px</p>
          </div>
        </div>

        <form>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                className="form-control"
                defaultValue={userProfile?.name || ""}
                placeholder="Enter your full name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                className="form-control"
                defaultValue={userProfile?.email || ""}
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                className="form-control"
                defaultValue={userProfile?.phone || ""}
                placeholder="Enter your phone number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="business-name">Business Name</label>
              <input
                type="text"
                id="business-name"
                className="form-control"
                defaultValue={userProfile?.business_name || ""}
                placeholder="Enter your business name"
              />
            </div>
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
        <h2>User Roles and Permissions</h2>

        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Current Role: {userProfile?.role || "User"}</h3>
          </div>

          <div className="form-group">
            <label htmlFor="role">Change Role</label>
            <select id="role" className="form-control">
              <option value="admin">Admin</option>
              <option value="manager">Manager</option>
              <option value="employee">Employee</option>
              <option value="viewer">Viewer</option>
            </select>
          </div>

          <h4>Permissions</h4>
          <div className="checkbox-group">
            <input type="checkbox" id="perm-view" checked disabled />
            <label htmlFor="perm-view">View Financial Data</label>
          </div>
          <div className="checkbox-group">
            <input type="checkbox" id="perm-edit" checked />
            <label htmlFor="perm-edit">Edit Transactions</label>
          </div>
          <div className="checkbox-group">
            <input type="checkbox" id="perm-delete" checked />
            <label htmlFor="perm-delete">Delete Transactions</label>
          </div>
          <div className="checkbox-group">
            <input type="checkbox" id="perm-export" checked />
            <label htmlFor="perm-export">Export Data</label>
          </div>
          <div className="checkbox-group">
            <input type="checkbox" id="perm-users" checked />
            <label htmlFor="perm-users">Manage Users</label>
          </div>

          <div className="button-group">
            <button className="button button-primary">Update Permissions</button>
          </div>
        </div>
      </div>
    </div>
  )
}

