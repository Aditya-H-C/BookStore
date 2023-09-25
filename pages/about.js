// pages/about.js
import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl text-center my-8 font-bold">About Me</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
      <p className="text-2xl text-center my-4">Hello, This is Pratishtha Rana.</p>
        <p className="text-xl my-4">
           I have created this small book management web application
           as part of an internship task. The application is built using Next.js for the frontend and
            Python for the backend. I've also used Tailwind CSS for styling.
        </p>
        <p className="text-xl my-4">
          This project was an amazing learning experience for me. Although I didn't incorporate Redux
           into the frontend due to time constraints to learn it from scratch,but I'm always eager to learn new technologies. 
           I hope the application meets the user's requirements and I would appreciate your feedback on the same.
        </p>
        <p className="text-xl my-4">
          Thanking you once again for giving me this opportunity to work with technologies which are new to me,in which
          I got a lot to learn.
        </p>
        <p className="text-xl my-4">
          Thanking You,<br />
          Yours Sincerely,<br />
          Pratishtha<br />
          Email: pratishtha19081@cse.ssn.edu.in<br />
          Phone: 9368691028
        </p>
      </div>
    </div>
  );
};

export default About;
