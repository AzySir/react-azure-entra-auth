variable "group_display_name" {
  type        = string
  default     = "ReactAppUsers"
  description = "Display name for the Azure AD group"
}

variable "app_display_name" {
  type        = string
  default     = "ReactLoginApp"
  description = "Display name for the Enterprise Application"
}

variable "redirect_uris" {
  type        = list(string)
  default     = ["http://localhost:5173/"]
  description = "List of redirect URIs for the React application"
}