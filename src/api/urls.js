import config from "../config";

// Users
export const usersData = config.BASE_URL + '/patient/info';
// export const profileData = config.BASE_URL + '/api/users/{id}';

// Auth
export const loadUserData = config.BASE_URL + '/api/auth/user';
export const loginUser = config.BASE_URL + '/patient/login';
export const login_Doctor = config.BASE_URL + '/doctor/login';
export const registerdoctor = config.BASE_URL + "/doctor/register";


// Posts
export const allPostsData = config.BASE_URL + '/doctor/allinstructor_info';

export const appoitment_create = config.BASE_URL + '/patient/appoinment';


export const allPatients = config.BASE_URL + '/patient/appoinment/all';
export const patientsAppointments = config.BASE_URL + '/patient/appoinment';
export const doctorPatients = config.BASE_URL + '/doctor/patients';

export const all_patients = config.BASE_URL + '/patient/all';


export const single_PostData = config.BASE_URL + '/api//';
export const allTagPostsData = config.BASE_URL + '/api/posts/tag/{tagName}';
export const createSinglePost = config.BASE_URL + '/api/posts';
export const deleteSinglePost = config.BASE_URL + '/api/posts/{id}';

// Answers
export const allAnswersData = config.BASE_URL + '/api/posts/answers/';
export const createSingleAnswer = config.BASE_URL + '/api/posts/answers';
export const deleteSingleAnswer = config.BASE_URL + '/api/posts/answers/{AnswerId}';

// Comments
export const allCommentsData = config.BASE_URL + '/api/posts/comments/{id}';
export const createSingleComment = config.BASE_URL + '/api/posts/comments/{postId}';
export const deleteSingleComment = config.BASE_URL + '/api/posts/comments/{CommentId}';

// Tags
export const allTagsData = config.BASE_URL + '/api/tags';
export const singleTagData = config.BASE_URL + '/api/tags/{tagName}';