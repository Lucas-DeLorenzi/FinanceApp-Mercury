import axios, { AxiosResponse } from "axios"
import AxiosMockAdapter from "axios-mock-adapter"
import { Accounts } from "./api.types"
import { accounts } from "./mockData"

const axiosMockAdapterInstance = new AxiosMockAdapter(axios, {
  delayResponse: 1000,
})

axiosMockAdapterInstance.onGet("/accounts").reply(200, {
  accounts,
})

export function getAllAccounts(): Promise<AxiosResponse<Accounts>> {
  return axios.get("/accounts")
}
