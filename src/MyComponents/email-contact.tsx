import * as React from "react";

interface EmailContactProps {
  FirstName: string;
  LastName: string;
  email: string;
  phone: string
  projectType: string;
  projectDetails: string;
}

export const EmailContact: React.FC<Readonly<EmailContactProps>> = ({
  FirstName,
  LastName,
  email,
  phone,
  projectType,
  projectDetails
}) => {
  return (
    <>
    <h3 style={{ color: '#e94a4a' }}>A User/Client Contacted!</h3>
    <h5>Client Name: {FirstName} {LastName}</h5>
    <h5>Client Email: {email}</h5>
    <h5>Client Phone: {phone}</h5>
    <h5>Project Type</h5>
    <p style={{ fontStyle: 'italic' }}>{projectType}</p>
    <h5>Project Details</h5>
    <p style={{ fontStyle: 'italic' }}>{projectDetails}</p>
    </>
  );
};
