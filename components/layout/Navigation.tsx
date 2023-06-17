import Link from 'next/link';

const Navigation = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <h1>Tom Swokowski's Blog</h1>
          <h3>Thoughts About Software Development</h3>
        </div>
        <div className="flex space-x-4">
          <a href="github.com">GitHub</a>
          <a href="linkedin.com">LinkedIn</a>
          <a href="twitter.com">Twitter</a>
        </div>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
