import pg from "pg"
const { Pool } = pg

// Database connection configuration
const getDatabaseConfig = () => {
  if (process.env.DATABASE_URL) {
    // Use the provided DATABASE_URL
    return { connectionString: process.env.DATABASE_URL }
  } else {
    // Fall back to individual parameters
    return {
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      host: process.env.POSTGRES_HOST,
      port: Number.parseInt(process.env.POSTGRES_PORT || "5432"),
      database: "memory_vault", // Updated database name
      ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false,
    }
  }
}

const pool = new Pool(getDatabaseConfig())

// Helper function to execute SQL queries
export async function query(text: string, params?: any[]) {
  const start = Date.now()
  try {
    const res = await pool.query(text, params)
    const duration = Date.now() - start
    console.log("Executed query", { text, duration, rows: res.rowCount })
    return res
  } catch (error) {
    console.error("Error executing query", { text, error })
    throw error
  }
}

// Example of a more specific query function
export async function getUserSettings(userId: string) {
  const text = "SELECT * FROM user_settings WHERE user_id = $1"
  const res = await query(text, [userId])
  return res.rows[0]
}

// Update user settings
export async function updateUserSettings(userId: string, settings: any) {
  const text = `
    UPDATE user_settings 
    SET 
      notification_preferences = $2,
      theme = $3,
      language = $4,
      currency = $5,
      date_format = $6,
      updated_at = NOW()
    WHERE user_id = $1
    RETURNING *
  `
  const values = [
    userId,
    settings.notification_preferences,
    settings.theme,
    settings.language,
    settings.currency,
    settings.date_format,
  ]

  const res = await query(text, values)
  return res.rows[0]
}

// Get user profile
export async function getUserProfile(userId: string) {
  const text = "SELECT * FROM users WHERE id = $1"
  const res = await query(text, [userId])
  return res.rows[0]
}

// Update user profile
export async function updateUserProfile(userId: string, profile: any) {
  const text = `
    UPDATE users 
    SET 
      name = $2,
      email = $3,
      phone = $4,
      business_name = $5,
      profile_picture = $6,
      updated_at = NOW()
    WHERE id = $1
    RETURNING *
  `
  const values = [userId, profile.name, profile.email, profile.phone, profile.business_name, profile.profile_picture]

  const res = await query(text, values)
  return res.rows[0]
}

