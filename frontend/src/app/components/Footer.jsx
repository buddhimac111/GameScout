import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";

export default function FooterSection() {
  return (
    <Footer container className="bg-primeblue mt-16">
      <div className='w-full text-center'>
        <div className='w-full justify-between sm:flex sm:items-center sm:justify-between'>
          <FooterBrand
            href='/'
            src='/logoGameScout.png'
            alt='GameScout Logo'
            name='GameScout'
          />
          <FooterLinkGroup>
            <FooterLink href='#'>About</FooterLink>
            <FooterLink href='#'>Privacy Policy</FooterLink>
            <FooterLink href='#'>Licensing</FooterLink>
            <FooterLink href='#'>Contact</FooterLink>
          </FooterLinkGroup>
        </div>
        <FooterDivider />
        <FooterCopyright href='#' by='BUDDHIMA All rights reserved' year={2024} />
      </div>
    </Footer>
  );
}
