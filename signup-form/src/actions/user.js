import axios from 'axios';
const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080', // Base URL for your Spring Boot backend
  });
  
export const saveUserSignupData=(userFormData)=>{
     console.log("first code")
     axiosInstance.post('/auth/signup', userFormData)
      .then(response => {
        console.log('Response:', response.data);
        
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
    
}