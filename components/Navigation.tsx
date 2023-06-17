import { useRouter } from 'next/router';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Navigation = () => {
  const router = useRouter();

  const isActive = (pathname: string) => router.pathname === pathname;

  return (
    <div className="border-b-2">
      <div className="flex justify-between items-center text-primary p-4 pb-4">
        <div>
          <h1 className="text-base font-semibold">Tom Swokowski's Blog</h1>
          <h3 className="text-sm">Things About Tech</h3>
        </div>
        <div className="flex space-x-4">
          <a
            href="https://github.com"
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
            href="https://linkedin.com"
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
    </div>
  );
};

export default Navigation;
