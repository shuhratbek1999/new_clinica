import httpClient from './http.service'

const END_POINT = '/food'

class FoodService {
  getAll() {
    return httpClient.get(END_POINT + '/get-all').then((res) => {
      return res.data
    })
  }
  create(data) {
    return httpClient
      .post(END_POINT + '/create', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        return res.data
      })
  }
  update(id, data) {
    return httpClient
      .patch(END_POINT + `/update?id=${id}`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        return res.data
      })
  }
  getOne(id) {
    return httpClient.get(END_POINT + `/get-one?id=${id}`).then((res) => {
      return res.data
    })
  }
  delete(id) {
    return httpClient.delete(END_POINT + `/delete?id=${id}`).then((res) => {
      return res.data
    })
  }
}
export default new FoodService()
