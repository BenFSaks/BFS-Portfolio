export default function Nav() {
  return (
    <>
      <div id="sidebar">
        <h1>Benjamin Saks Inc.</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="cool"
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden={true}
            />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <a href={`projects`}>Projects</a>
            </li>
            <li>
              <a href={`socials`}>Socials</a>
            </li>
            <li>
              <a href={`club`}>Club</a>
            </li>
            <li>
              <a href={`experience`}>Experience</a>
            </li>
            <li>
              <a href={`resume`}>Resume</a>
            </li>
          </ul>
        </nav>
      </div>
      {/* <div id="detail"></div> */}
    </>
  );
}