import recyclePayRequest from 'apis/index';

const auth = {
  /**
   * Login User
   * @param {{email: string, password: string}} data
   * @returns {Promise<AxiosResponse<any>>}
   */
  login: (data) => recyclePayRequest.post('/auth/login/', data),
  logout: () => recyclePayRequest.get('/auth/logout/'),

  /**
   * Send Forgot password Email
   * @param {{email: string}} data
   * @returns {Promise<AxiosResponse<any>>}
   */
  forgotPassword: (data) => recyclePayRequest.post('/auth/forgot-password', data),
  /**
   * Register User
   * @param {{
   *     email: string,
   *     first_name: string,
   *     last_name: string,
   *     password: string
   * }} data - object to register
   * @returns {Promise<AxiosResponse<{data: {name: string }}>>}
   */
  register: (data) => recyclePayRequest.post('/auth/register/', data),
  /**
   * Reset Password
   * @param {{new_password: string, otp: string, confirm_password: string}} data
   * @param {string} encoded
   * @returns {Promise<AxiosResponse<any>>}
   */
  reset_password: (encoded, data) => recyclePayRequest.post(`/auth/reset-password/${encoded}`, data),
  verify_user: (encodedEmail) => recyclePayRequest.get(`/auth/verify/${encodedEmail}`),
};
const dashboard = {
  main: () => recyclePayRequest.get('/dashboard/'),
};
const routes = { auth, dashboard };
export default routes;
