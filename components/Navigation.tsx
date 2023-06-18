import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// Custom hook for detecting the direction of the scroll
function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState('up');

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      // Only updating the scroll direction if there is a substantial scroll (more than 5 pixels)
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener('scroll', updateScrollDirection);
    // Cleaning up the listener when the component unmounts
    return () => window.removeEventListener('scroll', updateScrollDirection);
  }, [scrollDirection]);

  return scrollDirection;
}

// Navigation component
const Navigation = () => {
  const router = useRouter();
  const scrollDirection = useScrollDirection();

  // Helper function to determine if the current route matches the provided path
  const isActive = (pathname: string) => router.pathname === pathname;

  // LinkedIn and GitHub URLs
  const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL;
  const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL;

  // Check if current page is a slug page
  const isSlugPage = router.pathname.includes('[slug]');

  // Determine if the page is a project slug
  const isProjectSlug = router.pathname.includes('projects');

  // Decide the back path based on the type of slug
  const backPath = isProjectSlug ? '/projects' : '/';

  return (
    <div
      className={`border-b-2 bg-white w-full z-10 transition-all duration-500 sticky ${
        scrollDirection === 'down' ? '-top-28' : 'top-0'
      }`}
    >
      <div className="flex justify-between items-center text-primary p-4 pb-4">
        {isSlugPage && (
          <Link
            className="mr-4"
            href={backPath}
          >
            Back
          </Link>
        )}
        <div>
          <h1 className="text-base font-semibold">
            Tom Swokowski&rsquo;s Blog
          </h1>
          <h3 className="text-sm">Tech and Other Things</h3>
        </div>
        <div className="flex space-x-4">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="text-primary"
              size="xl"
            />
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-primary"
              size="xl"
            />
          </a>
          <FontAwesomeIcon
            icon={faSearch}
            className="text-primary cursor-pointer"
            size="xl"
          />
        </div>
      </div>
      {!isSlugPage && (
        <nav className="px-4">
          <ul className="flex space-x-8 text-primary font-semibold">
            <li
              className={
                isActive('/')
                  ? 'pb-2 border-b-2 border-secondary text-secondary'
                  : 'pb-2 border-b-2 border-transparent'
              }
            >
              <Link href="/">Posts</Link>
            </li>
            <li
              className={
                isActive('/projects')
                  ? 'pb-2 border-b-2 border-secondary text-secondary'
                  : 'pb-2 border-b-2 border-transparent'
              }
            >
              <Link href="/projects">Projects</Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Navigation;
