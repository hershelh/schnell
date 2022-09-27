import { service } from '..'
import type {
  Login,
  LoginRes,
} from '@/types/auth'

export function login(params: Login): Promise<LoginRes> {
  return service.post('/user/login', params)
}
