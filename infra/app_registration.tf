resource "azuread_application" "react_app" {
  display_name = "React AWS Cognito Entra"
  sign_in_audience = "AzureADMyOrg"

  web {
    redirect_uris = ["http://localhost:5173/"]
    implicit_grant {
      access_token_issuance_enabled = true
      id_token_issuance_enabled     = true
    }
  }

  required_resource_access {
    resource_app_id = "00000003-0000-0000-c000-000000000000" // Microsoft Graph API
    resource_access {
      id   = "e1fe6dd8-ba31-4d61-89e7-88639da4683d" // User.Read scope ID
      type = "Scope"
    }
  }
} 