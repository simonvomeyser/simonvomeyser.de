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

     <a className="transition duration-300 hover:-translate-y-1 hover:scale-105" href="https://twitter.com/simonvomeyser" target="_blank" rel="noopener noreferrer" title="Twitter"  aria-label="Twitter">
       <TwitterIcon className="w-10 " />
     </a>
     <a className="transition duration-300 hover:-translate-y-1 hover:scale-105" href="mailto:simon.vom.eyser@gmail.com" title="E-Mail"  aria-label="E-Mail">
       <MailIcon className="w-10" />
     </a>
     <a className="transition duration-300 hover:-translate-y-1 hover:scale-105" href="https://twitter.com/simonvomeyser" target="_blank" rel="noopener noreferrer" title="Linkedin"  aria-label="Linkedin">
       <LinkedinIcon className="w-9 h-9" />
     </a>

	</div>
  );
};
