import request from '@/utils/request'

export function getPreferredArticle(query) {
  return request({
    url: '/website/common/getPreferredArticle',
    method: 'get',
    params: query
  })
}
export function getArticle(query) {
  return request({
    url: '/website/common/getArticle',
    method: 'get',
    params: query
  })
}
export function getRelativeArticle(query) {
  return request({
    url: '/website/common/getRelativeArticle',
    method: 'get',
    params: query
  })
}
export function getFirstAnaswer(query) {
  return request({
    url: '/website/common/getFirstAnaswer',
    method: 'get',
    params: query
  })
}
export function insertLeaveMessage(query) {
  return request({
    url: '/website/common/insertLeaveMessage',
    method: 'get',
    params: query
  })
}
export function getArticleInfo(query) {
  return request({
    url: '/website/common/getArticleInfo',
    method: 'get',
    params: query
  })
}
export function getFiveArticle(query) {
  return request({
    url: '/website/common/getFiveArticle',
    method: 'get',
    params: query
  })
}
export function getFiveAnswer(query) {
  return request({
    url: '/website/common/getFiveAnswer',
    method: 'get',
    params: query
  })
}


export function fetchArticle(id) {
  return request({
    url: '/vue-element-admin/article/detail',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/vue-element-admin/article/pv',
    method: 'get',
    params: { pv }
  })
}

export function createArticle(data) {
  return request({
    url: '/vue-element-admin/article/create',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: '/vue-element-admin/article/update',
    method: 'post',
    data
  })
}

export function getAnswer(query) {
  return request({
    url: '/website/common/getAnswer',
    method: 'get',
    params: query
  })
}
export function getRecommendUser(query) {
  return request({
    url: '/website/common/getRecommendUser',
    method: 'get',
    params: query
  })
}export function getHotAnswer(query) {
  return request({
    url: '/website/common/getHotAnswer',
    method: 'get',
    params: query
  })
}export function getAnswerInfo(query) {
  return request({
    url: '/website/common/getAnswerInfo',
    method: 'get',
    params: query
  })
}
export function getTransactionCategory(query) {
  return request({
    url: '/website/common/getTransactionCategory',
    method: 'get',
    params: query
  })
}
export function getTransactionData(query) {
  return request({
    url: '/website/common/getTransactionData',
    method: 'get',
    params: query
  })
}
export function getTransactionData1(query) {
  return request({
    url: '/website/common/getTransactionData',
    method: 'get',
    params: query,
    responseType: 'blob'
  })
}
export function getOtherTypeAnswer(query) {
  return request({
    url: '/website/common/getOtherTypeAnswer',
    method: 'get',
    params: query
  })
}
export function getUsers(query) {
  return request({
    url: '/website/common/getUsers',
    method: 'get',
    params: query
  })
}
export function getLatestAnswer(query) {
  return request({
    url: '/website/common/getLatestAnswer',
    method: 'get',
    params: query
  })
}
export function getLasterAnswerII(query) {
  return request({
    url: '/website/common/getLasterAnswerII',
    method: 'get',
    params: query
  })
}
export function getUserInfo(query) {
  return request({
    url: '/website/common/getUserInfo',
    method: 'get',
    params: query
  })

}
export function getExchangeInfo(query) {
  return request({
    url: '/website/common/getExchangeInfo',
    method: 'get',
    params: query
  })
}
export function getBreedInfo(query) {
  return request({
    url: '/website/common/getBreedInfo',
    method: 'get',
    params: query
  })
}
export function userLogin(query) {
  return request({
    url: '/website/userLogin',
    method: 'get',
    params: query
  })
}

export function getAlertInfo(query) {
  return request({
    url: '/website/common/getCustomerServiceUserInfo',
    method: 'get',
    params: query
  })
}

//获取客服信息