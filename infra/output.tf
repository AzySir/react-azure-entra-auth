output "client_id" {
  value       = azuread_application_registration.this.id
  description = "Client ID for the React application"
}

output "tenant_id" {
  value       = data.azuread_client_config.current.tenant_id
  description = "Azure AD Tenant ID"
}

output "group_id" {
  value       = azuread_group.app_users.object_id
  description = "ID of the Azure AD group"
}