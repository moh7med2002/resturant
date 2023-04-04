import React from 'react'
import AdminLayout from '../../components/AdminLayout'
import AdminUsersTable from '../../components/admin/AdminUsersTable'

export default function AllUsers() {
  return (
    <AdminLayout>
        <AdminUsersTable/>
    </AdminLayout>
  )
}
