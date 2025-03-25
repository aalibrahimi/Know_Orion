import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';
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
    <Html lang='en'>
      <Head />

      <Tailwind>
        <Body>
          <Text className="text-2xl font-bold text-red-700">Client Contacted</Text>
          <Hr className="mb-[20px]" />
          <Link href="https://codewithali.com/" className="bg-red-400 rounded-lg p-2 text-black">Click me</Link>
        </Body>
      </Tailwind>

    </Html>
  );
};
