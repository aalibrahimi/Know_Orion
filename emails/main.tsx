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
  Markdown,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';
import Capitalize from "@/MyComponents/capitalize";

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
  return (
    <Html>
      <Head />

      <Tailwind>
        <Body className="text-black">
          <Preview>New Client Message</Preview>
          <Container>
            <Heading as="h2" className="text-red-700">Client Contacted</Heading>
            <Text className="italic text-sm text-gray-700">{`${Capitalize(data.firstName)} ${Capitalize(data.lastName)} would like to start a project.`}</Text>

            <Hr />

            {/* Client Message */}
            <Section>
              <Heading as="h3" className="mb-1">Project Details</Heading>
              <Heading as="h4" className="mb-1 inline italic text-gray-900">Project Type:</Heading>
              <Text className="mt-0 inline text-xs italic text-gray-900">{data.projectType}</Text>
              <Section className="bg-black/20 text-sm max-w-[600px] p-2 h-auto rounded-md m-0 mt-[5px]">
              <Markdown
                markdownContainerStyles={{
                  maxWidth: "600px",
                  overflowWrap: "break-word",
                  marginLeft: "-20px",
                  boxSizing: "border-box"
                }}
                markdownCustomStyles={{
                  blockQuote: {color: "black", borderLeft: "4px solid #db2e2e", paddingLeft: "5px", fontSize: "12px", fontWeight: "600", lineHeight: "20px"}
                }}
              >{`>${data.projectDetails}`}</Markdown>
              </Section>
            </Section>

            {/* Client Details */}
            <Section>
              <Heading as="h3" className="mb-1">Client Details</Heading>
              <Hr />
              <Section className="ml-4">
                <Row>
                  <Column className="w-[80px] h-auto text-sm font-semibold">First Name:</Column>
                  <Column>{Capitalize(data.firstName)}</Column>
                </Row>

                <Row>
                  <Column className="w-[80px] h-auto text-sm font-semibold">Last Name:</Column>
                  <Column>{Capitalize(data.lastName)}</Column>
                </Row>

                <Row>
                  <Column className="w-[80px] h-auto text-sm font-semibold">Email:</Column>
                  <Column>{data.email}</Column>
                </Row>

                <Row>
                  <Column className="w-[80px] h-auto text-sm font-semibold">Phone:</Column>
                  <Column>{data.phone}</Column>
                </Row>

              </Section>
            </Section>
          </Container>

          {/* <Img src="/buildingMobileframe-960x540.svg" /> */}
        </Body>
      </Tailwind>

    </Html>
  );
};

export default EmailPreview;