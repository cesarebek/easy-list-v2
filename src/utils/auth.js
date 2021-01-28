import cookies from 'vue-cookies';

 export default authRoute(to, from, next){
  if (cookies.get('access_token') !== null) {
    console.log('user allowed');
    next();
  } else {
    console.log('Please login');
    next('/login');
  }
}
