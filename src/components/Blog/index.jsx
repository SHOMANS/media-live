import styled from "styled-components";
import slide1 from "../../assets/slide1.png";
import slide2 from "../../assets/slide2.png";
import slide3 from "../../assets/slide3.png";
import Right from "../../assets/Right.svg";
import Left from "../../assets/Left.svg";

const data = [
  {
    image: slide1,
    title: "النجاح على مواقع التواصل الاجتماعي",
    name: "Israa Ghabayen",
    date: "5/8/2020",
    type: "مقالات",
  },
  {
    image: slide2,
    title: "كيف تستخدم التسويق بالمحتوى لتحقيق أرباحك",
    name: "Israa Ghabayen",
    date: "28/7/2020",
    type: "مقالات",
  },
  {
    image: slide3,
    title: "كيف يمكن تحديد خدمات الاستضافة المناسبة لك",
    name: "Israa Ghabayen",
    date: "28/7/2020",
    type: "مقالات",
  },
];

const Section = styled.section`
  margin-top: 180px;
  height: 672px;
  text-align: center;
  & h2 {
    font-size: 50px;
    color: #fab250;
  }
  .slider {
    margin-top: 85px;
    .slides {
      width: 1440px;
      height: 498px;
      display: flex;
      justify-content: space-between;
      margin: auto;
      z-index: 1;
      .slide {
        width: 440px;
        text-align: right;
        & img {
          width: 100%;
          height: 275px;
        }
        & h3 {
          font-size: 30px;
          font-weight: 500;
        }
        & p {
          font-size: 25px;
          font-weight: 500;
          opacity: 0.7;
        }
        & span {
          font-size: 25px;
          font-weight: 500;
          opacity: 0.5;
          margin-left: 19px;
        }
      }
    }
    .rightLeft {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-top: -275px;
      z-index: 0;
    }
  }
`;

export default function Blog() {
  return (
    <Section>
      <div className="container">
        <h2>المدونة</h2>
        <div className="slider">
          <div className="slides">
            {data.map((slide) => (
              <div className="slide">
                <img src={slide.image} alt="" />
                <h3>{slide.title}</h3>
                <p>{slide.name}</p>
                <span>{slide.date}</span>
                <span>{slide.date}</span>
              </div>
            ))}
          </div>
          <div className="rightLeft">
            <img src={Right} alt="" />
            <img src={Left} alt="" />
          </div>
        </div>
      </div>
    </Section>
  );
}
