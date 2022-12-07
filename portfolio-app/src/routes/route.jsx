export default function Nav() {
  return (
    <>
      <div id="sidebar">
        <h1>Benjamin Saks Inc.</h1>
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