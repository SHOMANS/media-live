import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 132px;
  & h1 {
    font-size: 40px;
    font-weight: Bold;
    color: #fab250;
    margin-top: 26.8px;
    margin-left: 106px;
  }
  & ul {
    margin: auto;
    display: flex;
    justify-content: space-around;
    margin-top: 40px;
    .active {
      color: #fab250;
    }
    & li {
      font-size: 25px;
      height: 47px;
      margin-left: 82.6px;
      cursor: pointer;
      transition: 0.2s;
      &:hover {
        color: #fab250;
      }
    }
  }
`;

export default function Navbar({ page }) {
  return (
    <nav>
      <div className="container">
        <Wrapper>
          <h1>Media Live Pro</h1>
          <ul>
            <li className={page === "Home" ? "active" : ""}>الرئيسية</li>
            <li className={page === "" ? "active" : ""}>من نحن</li>
            <li className={page === "" ? "active" : ""}>كيف نعمل</li>
            <li className={page === "" ? "active" : ""}>خدماتنا</li>
            <li className={page === "" ? "active" : ""}>المدونة</li>
            <li className={page === "" ? "active" : ""}>قالو عنا</li>
            <li className={page === "" ? "active" : ""}>تواصل معنا</li>
          </ul>
        </Wrapper>
      </div>
    </nav>
  );
}
