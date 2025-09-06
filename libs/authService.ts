import { apiFetch } from "./singletonFetch"

import { LoginDTO } from "@/interfaces/login"

export const loginService = (body: LoginDTO) => {
  console.log("el body es:" + body);
  return apiFetch('/auth/login', 'POST', body)
}