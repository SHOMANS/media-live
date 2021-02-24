import styled from "styled-components";
import Image from "../../assets/OurClients.png";

const Section = styled.section`
  margin-top: 86px;
  height: 388px;
  text-align: center;
  & h2 {
    font-size: 50px;
    color: #fab250;
  }
  & p {
    font-size: 30px;
    font-weight: 500;
  }
  & img {
    margin-top: 44px;
  }
`;
export default function OurClients() {
  return (
    <Section>
      <h2>عملاؤنا</h2>
      <p>شركاء نجاحنا، نفتخر بكم</p>
      <img src={Image} alt="" />
    </Section>
  );
}
