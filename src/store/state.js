let defaultcity = '苏州'
try {
  if (localStorage.city) {
    defaultcity = localStorage.city
  }
} catch (e) {}

export default {
  city: defaultcity
}
