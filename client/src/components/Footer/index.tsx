import React from 'react';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Styled from './Footer.styled';
import {links} from './links';

function Footer() {
  return (
    <Styled.FooterWrapper className="footer">
      <Styled.FooterPadding className="sb__footer section__padding">
        <Styled.FooterLinks className="sb__footer-links">
          <Styled.FooterLinksDiv className="sb__footer-links_div">
            <Styled.H4>For Business</Styled.H4>
            <Styled.Link2>
              <Styled.P>Employer</Styled.P>
            </Styled.Link2>
            <Styled.Link2>
              <Styled.P>Health Plan</Styled.P>
            </Styled.Link2>
            <Styled.Link2>
              <Styled.P>Individual</Styled.P>
            </Styled.Link2>
          </Styled.FooterLinksDiv>

          <Styled.FooterLinksDiv className="sb__footer-links_div">
            <Styled.H4>Resources</Styled.H4>
            <Styled.Link2>
              <Styled.P>resource center</Styled.P>
            </Styled.Link2>
            <Styled.Link2>
              <Styled.P>Testimonials</Styled.P>
            </Styled.Link2>
            <Styled.Link2>
              <Styled.P>STV</Styled.P>
            </Styled.Link2>
          </Styled.FooterLinksDiv>

          <Styled.FooterLinksDiv className="sb__footer-links_div">
            <Styled.H4>Partners</Styled.H4>
            <Styled.Link2>
              <Styled.P>Swing Tech</Styled.P>
            </Styled.Link2>
          </Styled.FooterLinksDiv>
          <Styled.FooterLinksDiv className="sb__footer-links_div">
            <Styled.H4>Company</Styled.H4>
            <Styled.Link2>
              <Styled.P>About</Styled.P>
            </Styled.Link2>
            <Styled.Link2>
              <Styled.P>Prress</Styled.P>
            </Styled.Link2>
            <Styled.Link2>
              <Styled.P>Career</Styled.P>
            </Styled.Link2>
            <Styled.Link2>
              <Styled.P>Contact</Styled.P>
            </Styled.Link2>
          </Styled.FooterLinksDiv>
          <Styled.FooterLinksDiv className="sb__footer-links_div">
            <Styled.H4>SNS</Styled.H4>
            <Styled.Socialmedia className="socialmedia">
              <Styled.Img
                onClick={() => {
                  window.open(links[0]);
                }}
                color="#1da1f2"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </Styled.Img>
              <Styled.Img
                onClick={() => {
                  window.open(links[1]);
                }}
                color="#ff0000"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </Styled.Img>
              <Styled.Img
                onClick={() => {
                  window.open(links[2]);
                }}
                color="#0077b5"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </Styled.Img>
              <Styled.Img
                onClick={() => {
                  window.open(links[3]);
                }}
                color="#c32aa3"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </Styled.Img>
              <Styled.Img
                onClick={() => {
                  window.open(links[4]);
                }}
                color="#1877f2"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </Styled.Img>
            </Styled.Socialmedia>
          </Styled.FooterLinksDiv>
        </Styled.FooterLinks>
        <Styled.Hr></Styled.Hr>
        <Styled.FooterBelow className="sb__footer-below">
          <div className="sb__footer-copyright">
            <Styled.FooterCopyrightP>
              Copyrightⓒ {new Date().getFullYear()} TeamFinalInc. All right reserved.
            </Styled.FooterCopyrightP>
          </div>
          <Styled.FooterBelowLinks className="sb__footer-below-links">
            <Styled.Link2>
              <div>
                <Styled.BelowP>Terms &Conditions</Styled.BelowP>
              </div>
            </Styled.Link2>
            <Styled.Link2>
              <div>
                <Styled.BelowP>Privacy</Styled.BelowP>
              </div>
            </Styled.Link2>
            <Styled.Link2>
              <div>
                <Styled.BelowP>Security</Styled.BelowP>
              </div>
            </Styled.Link2>
            <Styled.Link2>
              <div>
                <Styled.BelowP>Cookie Declaration</Styled.BelowP>
              </div>
            </Styled.Link2>
          </Styled.FooterBelowLinks>
        </Styled.FooterBelow>
      </Styled.FooterPadding>
    </Styled.FooterWrapper>
  );
}

export default Footer;
