import * as React from "react";
import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';
import Capitalize from "@/MyComponents/capitalize";
import { getLangDir } from "rtl-detect";

// React Email Components: https://react.email/components

const data = {
  firstName: "blaze",
  lastName: "hunter",
  email: "blazehunterhp@gmail.com",
  phone: "+1 (404) 111 111",
  projectType: "Normal Construction",
  projectDetails: "I need help constructing this amazing company building. Lorem lorem and more and more lorem till there is no end to this lorem. Please stop the lorem before it's too much!",
};

const EmailPreview = () => {
  const locale = "en"
  const direction = getLangDir(locale);
  
  return (
    <Html lang={locale} dir={direction}>
      <Head />

      <Tailwind>
        <Body className="bg-white font-sans my-0">
          <Preview>Invoice Received from CodeWithAli</Preview>
          
          <Container className="max-w-[600px] mx-auto">
            {/* Modern Header with Blue Accent Bar */}
            <Section className="flex justify-center items-center pt-4">
              <Row>
                  <Img 
                    src="https://codewithali.com/codewithali.png"
                    alt="Logo" 
                    // width="50"
                    // height="50"
                    className="rounded-full w-20 h-auto"
                  />
                {/* <Column className="text-right">
                  <Text className="text-blue-500 text-xs m-0">INVOICE ID</Text>
                  <Text className="text-blue-800 font-bold text-sm m-0">#PR-{Math.floor(1000 + Math.random() * 9000)}</Text>
                </Column> */}
              </Row>
            </Section>
            <Hr className="border-t-4 border-red-600 my-4 w-full ml-0" />

            {/* Client Intro */}
            <Section>
              <Heading as="h1" className="text-xl font-bold mb-0 tracking-tight text-red-900">
                Dear Client,
              </Heading>
              <Text className="text-gray-700 text-sm mt-1 mb-6">
                Attached you will find your Invoice.
              </Text>
            </Section>

            {/* Contact Details */}
            <Section className="bg-gray-50 p-4 border-l-4 border-red-600">
              <Heading as="h3" className="text-sm font-bold m-0 uppercase text-red-700">
                Contact Information
              </Heading>
              <Text className="text-gray-500 italic">Below here you can find our contact information.</Text>
              
              <table className="w-full mt-2 border-collapse">
                <tbody>
                  <tr>
                    <td className="py-1 text-xs text-gray-500 align-top w-20">Name</td>
                    <td className="py-1 text-sm font-medium">
                      CodeWithAli
                    </td>
                  </tr>
                  <tr>
                    <td className="py-1 text-xs text-gray-500 align-top">Email</td>
                    <td className="py-1">
                      <Link href={'mailto:unfold@codewithali.com'} className="text-sm text-red-700 no-underline">
                        unfold@codewithali.com
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-1 text-xs text-gray-500 align-top">Phone</td>
                    <td className="py-1">
                      <Link href={`tel:+1 (408) 690 4009`} className="text-sm text-red-700 no-underline">
                        +1 (408) 690 4009
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Section>

            {/* Footer */}
            <Hr className="border-red-100 my-6" />
            <Section>
              <Text className="text-xs text-red-800 m-0">
                ©CodeWithAli. All rights reserved.
              </Text>
              <Text className="text-xs text-red-400 mt-1">
                This email is auto-generated. Please do not reply directly.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default EmailPreview;