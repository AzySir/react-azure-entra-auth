resource "azuread_application_redirect_uris" "this" {
  application_id = azuread_application_registration.this.id
  type           = "SPA"
  redirect_uris = var.redirect_uris
}

resource "azuread_application_registration" "this" {
  display_name     = var.app_display_name
  description      = "My example application for Entra AD Auth Demo"
  sign_in_audience = "AzureADMyOrg"
}

resource "random_uuid" "this" {}

resource "azuread_application_app_role" "example_administer" {
  application_id = azuread_application_registration.this.id
  role_id        = random_uuid.this.id

  allowed_member_types = ["User"]
  description          = "Role for accessing user data"
  display_name         = "User.Read"
  value                = "User.Read"
}