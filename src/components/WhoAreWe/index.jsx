import styled from "styled-components";
import Image from "../../assets/Who.png";
import Feat1 from "../../assets/Feat1.png";
import Feat2 from "../../assets/Feat2.png";
import Feat3 from "../../assets/Feat3.png";
import Feat4 from "../../assets/Feat4.png";
import Feat5 from "../../assets/Feat5.png";

const Section = styled.div`
  height: 1987px;
`;
const About = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 151px;
  .content {
    width: 620px;
    & h3 {
      font-size: 45px;
      font-weight: bold;
    }
    & p {
      margin-top: 22px;
      font-size: 34px;
      font-weight: bold;
      margin-right: 56px;
      & strong {
        color: #fabb66;
        margin-right: -65px;
        margin-left: 65px;
      }
      & span {
        font-size: 25px;
        font-weight: normal;
        line-height: 0.5;
      }
    }
  }
`;
const Features = styled.div`
  margin-top: 150px;
  & ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    & li {
      width: 33%;
      margin-bottom: 75px;
      text-align: center;
      .imageWrapper {
        height: 280px;
        margin-bottom: 16px;
      }
      & h4 {
        font-size: 25px;
        padding-right: 65px;
        padding-left: 65px;
      }
    }
  }
`;
const Numbers = styled.div`
  background-color: #f9f9f9;
  height: 247px;
  margin-top: 135px;
  & ul {
    display: flex;
    & li {
      width: 25%;
      text-align: center;
      & h2 {
        color: #fab250;
        font-size: 90px;
        font-weight: 600px;
      }
      & p {
        font-size: 40px;
        font-weight: 500px;
      }
    }
  }
`;

export default function WhoAreWe() {
  return (
    <Section>
      <div className="container">
        <About>
          <img src={Image} alt="" />
          <div className="content">
            <h3>من نحن؟</h3>
            <p>
              <strong>Media Live</strong>
              وكالة إعلام وتسويق رقمي بدأت أعمالها منذ بداية يناير عام 2014
              <br />
              <span>
                أنت محور اهتمامنا حيث نسعى إلى تقديم
                <br /> وفهم ما تريد وتحقيق تواجد
              </span>
            </p>
          </div>
        </About>
        <Features>
          <ul>
            <li>
              <div className="imageWrapper">
                <img src={Feat1} alt="" />
              </div>
              <h4>نقدم خدمات التسويق الكتروني محلياً وعالمياً</h4>
            </li>
            <li>
              <div className="imageWrapper">
                <img src={Feat2} alt="" />
              </div>
              <h4>نقدم خدمات الإنتاج الإعلامي وحلول الويب محليا وعالمياً</h4>
            </li>
            <li>
              <div className="imageWrapper">
                <img src={Feat3} alt="" />
              </div>
              <h4>
                نعزز وجودك الرقمي وزيادة الوعي بعلامتك التجارية لجمهور المستهدف
              </h4>
            </li>
            <li>
              <div className="imageWrapper">
                <img src={Feat4} alt="" />
              </div>
              <h4>
                لا داعي للقلق، فريق متكامل يدير كافة خدماتك التسويقية
                الالكترونية
              </h4>
            </li>
            <li>
              <div className="imageWrapper">
                <img src={Feat5} alt="" />
              </div>
              <h4>
                نقدم خدمات تدريب إحترافي متخصصة في مجال التسويق الرقمي والإنتاج
                الإعلامي
              </h4>
            </li>
          </ul>
        </Features>
      </div>
      <Numbers>
        <div className="container">
          <ul>
            <li>
              <h2>+5</h2>
              <p>سنوات من الخبرة</p>
            </li>
            <li>
              <h2>+1000</h2>
              <p>عميل يثق بنا</p>
            </li>
            <li>
              <h2>+100</h2>
              <p>موظف في خدمتكم</p>
            </li>
            <li>
              <h2>24</h2>
              <p>ساعة في خدمتكم</p>
            </li>
          </ul>
        </div>
      </Numbers>
    </Section>
  );
}
