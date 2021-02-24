import styled from "styled-components";
import Image from "../../assets/HeaderImage.png";

const Wrapper = styled.div`
  background-image: url(${Image});
  background-size: cover;
  height: 773px;
  .overlay {
    background: linear-gradient(to right, #00000000, #000000b0);
    width: 100%;
    height: 100%;
  }
  .container {
    height: 100%;
    z-index: 99999;
  }
  .content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    & p {
      color: #ffffff;
      font-size: 40px;
      font-weight: bold;
      & span {
        color: #fbbf6d;
      }
    }
  }
`;

export default function Header() {
  return (
    <Wrapper>
      <div className="overlay">
        <div className="container">
          <div className="content">
            <p>
              نحن <span>نحب</span> صناعة المشاريع المميزة والمنافسة
              <br />
              خلول رقمية,إنتاج إعلامي, مواقع ويب, <span>وأكثر</span>
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
