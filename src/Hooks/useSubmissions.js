// // hooks/useSubmissions.js
// import { useState, useEffect } from 'react';

// export const useSubmissions = () => {
//   const [submissions, setSubmissions] = useState([]);

//   // Load submissions from localStorage
//   useEffect(() => {
//     const savedSubmissions = localStorage.getItem('contactFormSubmissions');
//     if (savedSubmissions) {
//       setSubmissions(JSON.parse(savedSubmissions));
//     }
//   }, []);

//   // Listen for storage events (changes from other tabs/windows)
//   useEffect(() => {
//     const handleStorageChange = () => {
//       const savedSubmissions = localStorage.getItem('contactFormSubmissions');
//       if (savedSubmissions) {
//         setSubmissions(JSON.parse(savedSubmissions));
//       } else {
//         setSubmissions([]);
//       }
//     };

//     window.addEventListener('storage', handleStorageChange);
//     return () => window.removeEventListener('storage', handleStorageChange);
//   }, []);

//   const addSubmission = (newSubmission) => {
//     const updatedSubmissions = [newSubmission, ...submissions];
//     setSubmissions(updatedSubmissions);
//     localStorage.setItem('contactFormSubmissions', JSON.stringify(updatedSubmissions));
    
//     // Dispatch custom event for same-tab communication
//     window.dispatchEvent(new Event('localStorageUpdate'));
//   };

//   const deleteSubmission = (id) => {
//     const updatedSubmissions = submissions.filter(submission => submission.id !== id);
//     setSubmissions(updatedSubmissions);
//     localStorage.setItem('contactFormSubmissions', JSON.stringify(updatedSubmissions));
//     window.dispatchEvent(new Event('localStorageUpdate'));
//   };

//   const clearAllSubmissions = () => {
//     setSubmissions([]);
//     localStorage.removeItem('contactFormSubmissions');
//     window.dispatchEvent(new Event('localStorageUpdate'));
//   };

//   return {
//     submissions,
//     addSubmission,
//     deleteSubmission,
//     clearAllSubmissions
//   };
// };

