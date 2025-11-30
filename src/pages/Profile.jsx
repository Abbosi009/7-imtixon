import React from 'react'
import useAuthStore from '@/stores/authStore'

const Profile = () => {
  const { user } = useAuthStore()

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-200">
        <div className="alert alert-warning">
          <span>Login qilning kerak</span>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-base-200 py-8">
      <div className="container mx-auto px-4 max-w-md">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h1 className="card-title text-2xl mb-4">👤 Profil</h1>

            <div className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  type="text"
                  value={user.username}
                  disabled
                  className="input input-bordered input-disabled"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  value={user.email}
                  disabled
                  className="input input-bordered input-disabled"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Telefon</span>
                </label>
                <input
                  type="tel"
                  value={user.phone}
                  disabled
                  className="input input-bordered input-disabled"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Roll</span>
                </label>
                <div className="badge badge-lg">
                  {user.role === 'admin' ? '👑 Admin' : '👤 User'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
