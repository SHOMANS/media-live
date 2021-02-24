import styled from "styled-components";
import { data } from "./data";

const Section = styled.section`
  margin-top: 134.5px;
  background-color: #f9f9f9;
  text-align: center;
  & h2 {
    font-size: 50px;
    color: #fab250;
  }
  & ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 138px;
    & li {
      width: 33.3333%;
      margin-bottom: 104px;
      height: 360px;
      & img {
        height: 125px;
      }
      & h3 {
        margin-top: 17.5px;
        font-size: 30px;
        font-weight: normal;
      }
      & p {
        margin-top: 5px;
        font-weight: normal;
        font-size: 20px;
        padding-left: 42px;
        padding-right: 42px;
      }
    }
  }
`;

export default function OurSevices() {
  return (
    <Section>
      <div className="container">
        <h2>خدماتنا</h2>
        <ul>
          {data.map((serv) => (
            <li>
              <img src={serv.image} alt="" />
              <h3>{serv.title}</h3>
              <p>{serv.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
