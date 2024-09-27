import clsx from 'clsx'
import React from 'react'
import LinkedinIcon from '../svg/linkedin.svg'
import MailIcon from '../svg/mail.svg'
import TwitterIcon from '../svg/twitter.svg'

export type SocialLinksProps = {
  className?: string;
};

export const SocialLinks: React.FC<SocialLinksProps> = ({
  className,
}) => {

  return (
	<div className={clsx('flex justify-center items-center gap-6', className)}>

     <a className="transition duration-300 -translate-y-0.5 hover:-translate-y-1.5 hover:scale-105" href="https://twitter.com/simonvomeyser" target="_blank" rel="noopener noreferrer" title="Twitter"  aria-label="Twitter">
       <TwitterIcon className="w-9 " />
     </a>
     <a className="transition duration-300 hover:-translate-y-1 hover:scale-105" href="mailto:hallo@simonvomeyser.de" title="E-Mail"  aria-label="E-Mail">
       <MailIcon className="w-9" />
     </a>
     <a className="transition duration-300 -translate-y-1 hover:-translate-y-2 hover:scale-105" href="https://www.linkedin.com/in/simon-vom-eyser-a07201246/" target="_blank" rel="noopener noreferrer" title="Linkedin"  aria-label="Linkedin">
       <LinkedinIcon className="w-8" />
     </a>

	</div>
  );
};
