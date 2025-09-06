const API_URL = 'http://127.0.0.1:8000'

type methods = 'GET' | 'POST' | 'PUT' | 'DELETE'

export const apiFetch = async (endpoint: string, method: methods, body?: any) => {
  const headerOptions: any = {
    method,
    headers: {
      "Content-type": "application/json"
    }
  }
  if (method === 'POST' || method === 'PUT') headerOptions.body = JSON.stringify(body)
    console.log(body)
  return await fetch(`${API_URL}${endpoint}`, headerOptions)
        .then(data => data.json())
}
