# Create a Service Principal for the Application
resource "azuread_service_principal" "this" {
  client_id                    = azuread_application_registration.this.client_id
  app_role_assignment_required = true
  owners                       = [data.azuread_client_config.current.object_id]
}