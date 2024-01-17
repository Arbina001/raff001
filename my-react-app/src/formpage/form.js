import {
  ContactFormData,
  ContactFormPage,
  ContactFormWrapper,
  ContactPAgeSection,
  ContactTextPage,
  ContactTitle,
  ContactWrapper,
  EmailInput,
  ExtraInformation,
  FormDetailsPage,
  InnerContactPage,
  InnerContactWrapper,
  InnerContainerPage,
  NameInput,
  SendEMail,
  Subtitle,
  TellephoneInput,
} from './form.styled';
import {
  FootLeftBox,
  FootRightBox,
  FooterROw,
  FootrLogo,
  FotterContainer,
  FotterInner,
  FotterWrapper,
  FottermainContainer,
  FooterImage,
  AcceptAgrementBox,
  InputCheckbox,
  FooterMAinLink,
  FooterMenuLink,
  FooteLinkContainer,
  FooterEmailLink,
  FooterHeadMenu,
  LinkPArt,
  HeadForm,
  EmailForm,
  SubmitButton,
  ContactPageIconContainer,
  ContactPageIconinnerContainer,
  SocialMediaIcon,
  StyledCopyWriteSection,
  StyledFooterContainer,
  StyledCopyWriteWrapper,
  StyledCopyWriteTextWrapper,
  StyledCopyWriteText,
  HeartIcon,
  StyledDesignDeveloperText,
} from './footer.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
export function Formpage() {
  return (
    <>
      <ContactPAgeSection>
        <InnerContactPage>
          <InnerContainerPage>
            <ContactWrapper>
              <InnerContactWrapper>
                <ContactTitle>
                  <p>COMMISSIONS</p>
                </ContactTitle>
                <Subtitle>
                  ARE YOU INTERESTED IN PURCHASING A VERY SPECIAL PIECE?
                </Subtitle>
              </InnerContactWrapper>
              <ContactFormPage>
                <ContactFormData>
                  <ContactFormWrapper>
                    Drop your contact details here. We will connect you back !!
                    <FormDetailsPage>
                      <ContactTextPage>What is your</ContactTextPage>
                      <span>
                        <NameInput placeholder="name*"></NameInput>
                      </span>
                      <ContactTextPage>? What is your</ContactTextPage>
                      <span>
                        <TellephoneInput placeholder="Teleform Number"></TellephoneInput>
                      </span>
                      <ContactTextPage>? What is your</ContactTextPage>
                      <span>
                        <EmailInput placeholder="Email Adress"></EmailInput>
                      </span>
                      <ContactTextPage>?</ContactTextPage>
                      <span>
                        <ExtraInformation placeholder="is any thing else what you want to say"></ExtraInformation>
                        <span>
                          <AcceptAgrementBox>
                            <InputCheckbox type="checkbox"></InputCheckbox>
                            Accept privacy policy
                            <span>
                              <SubmitButton value="send Button"></SubmitButton>
                            </span>
                          </AcceptAgrementBox>
                        </span>
                      </span>
                    </FormDetailsPage>
                  </ContactFormWrapper>
                </ContactFormData>
              </ContactFormPage>
            </ContactWrapper>
          </InnerContainerPage>
          {/* footer part  */}
          <FotterContainer>
            <FottermainContainer>
              <FotterInner>
                <FotterWrapper>
                  <FooterROw>
                    <FootRightBox>
                      <FootrLogo>
                        <a>
                          <FooterImage
                            src="https://artbyraff.com/wp-content/uploads/2020/06/artbyraff-logo.png"
                            alt="Footer Logo"
                          />
                        </a>
                      </FootrLogo>
                      <FooterMAinLink>
                        <FooterMenuLink>
                          <FooteLinkContainer>
                            <li>
                              <LinkPArt>About me</LinkPArt>
                            </li>
                            <li>
                              <LinkPArt>Privacy Policy</LinkPArt>
                            </li>
                            <li>
                              <LinkPArt>imprint</LinkPArt>
                            </li>
                          </FooteLinkContainer>
                          <FooterHeadMenu>Subscribe Newsletter</FooterHeadMenu>
                          <HeadForm>
                            <EmailForm>
                              <EmailInput placeholder="your mail"></EmailInput>
                              <SendEMail></SendEMail>
                            </EmailForm>
                          </HeadForm>
                        </FooterMenuLink>
                      </FooterMAinLink>
                    </FootRightBox>
                    <FootLeftBox>
                      Raffaello Djordjevic
                      <FooterEmailLink>
                        <p>
                          <a>raffaello@artbyraff.com</a>
                        </p>
                      </FooterEmailLink>
                      <ContactPageIconContainer>
                        <ContactPageIconinnerContainer>
                          <SocialMediaIcon>
                            <a>
                              <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                          </SocialMediaIcon>
                          <SocialMediaIcon>
                            <a>
                              <FontAwesomeIcon icon={faInstagram} />
                            </a>
                          </SocialMediaIcon>
                        </ContactPageIconinnerContainer>
                      </ContactPageIconContainer>
                    </FootLeftBox>
                  </FooterROw>
                </FotterWrapper>
              </FotterInner>
            </FottermainContainer>
            <StyledCopyWriteSection>
              <StyledFooterContainer>
                <StyledCopyWriteWrapper>
                  <StyledCopyWriteTextWrapper>
                    <StyledCopyWriteText>© 2024 ArtbyRaff</StyledCopyWriteText>
                  </StyledCopyWriteTextWrapper>
                  <StyledCopyWriteTextWrapper>
                    <HeartIcon />
                    <StyledDesignDeveloperText>
                      Designed and developed by Appsandmore24
                    </StyledDesignDeveloperText>
                  </StyledCopyWriteTextWrapper>
                </StyledCopyWriteWrapper>
              </StyledFooterContainer>
            </StyledCopyWriteSection>
          </FotterContainer>
        </InnerContactPage>
      </ContactPAgeSection>
    </>
  );
}
