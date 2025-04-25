# Create an Azure Entra ID Group
resource "azuread_group" "app_users" {
  display_name     = var.group_display_name
  security_enabled = true
  description      = "Group for users accessing the React application"
}