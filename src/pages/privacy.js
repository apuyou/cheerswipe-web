import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Title = styled.h2`
  margin: 1em;
  padding-top: 0.1em;
`

const Paragraph = styled.p`
  margin: 1em;
  padding-top: 0.1em;
`

const PrivacyPage = () => (
  <Layout>
    <SEO title="Privacy Policy" />
    <Title>Privacy Policy</Title>
    <Paragraph>
      Your privacy is important to us. It is our policy to respect your privacy
      regarding any information we may collect from you through our app,
      Cheerswipe.
    </Paragraph>
    <Paragraph>
      We only ask for personal information when we truly need it to provide a
      service to you. We collect it by fair and lawful means, with your
      knowledge and consent. We also let you know why we’re collecting it and
      how it will be used.
    </Paragraph>
    <Paragraph>
      We only retain collected information for as long as necessary to provide
      you with your requested service. What data we store, we’ll protect within
      commercially acceptable means to prevent loss and theft, as well as
      unauthorised access, disclosure, copying, use or modification.
    </Paragraph>
    <Paragraph>
      We don’t share any personally identifying information publicly or with
      third-parties, except when required to by law.
    </Paragraph>
    <Paragraph>
      Our app may link to external sites that are not operated by us. Please be
      aware that we have no control over the content and practices of these
      sites, and cannot accept responsibility or liability for their respective
      privacy policies.
    </Paragraph>
    <Paragraph>
      You are free to refuse our request for your personal information, with the
      understanding that we may be unable to provide you with some of your
      desired services.
    </Paragraph>
    <Paragraph>
      Your continued use of our website will be regarded as acceptance of our
      practices around privacy and personal information. If you have any
      questions about how we handle user data and personal information, feel
      free to contact us.
    </Paragraph>
    <Paragraph>This policy is effective as of 1 June 2019.</Paragraph>
  </Layout>
)

export default PrivacyPage
