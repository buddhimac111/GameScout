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
    <Footer container className='bg-primeblue mt-16 mb-4 px-24'>
      <div className='w-full text-center'>
        <FooterDivider />
        <div className='w-full justify-between sm:flex sm:items-center sm:justify-between'>
          <div className='flex'>
            <FooterBrand
              href='/'
              src='/logoGameScout.png'
              alt='GameScout Logo'
            />
            <p className='text-2xl font-semibold text-adminGrey'>GameScout</p>
          </div>

          <FooterCopyright
            href='#'
            by='GameScout All rights reserved'
            year={2024}
            className="text-adminGrey"
          />
          <FooterLinkGroup className="text-adminGrey">
            <FooterLink href='/'>Home</FooterLink>
            <FooterLink href='/about-us'>About us</FooterLink>
          </FooterLinkGroup>
        </div>
      </div>
    </Footer>
  );
}
