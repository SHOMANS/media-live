import styled from "styled-components";
import something from "../../assets/OBJECTS.svg";

const data = [
  {
    image: "https://via.placeholder.com/421",
    name: "بهاء عابد",
    work: "مدير فريق أصايل ، وكالة أصايل بيكو",
    paragraph:
      "تتقدم اصايل بيقو بجميع أعضائها من ادارة وداعمين ومذيعين من السادة شركة ميديا لايف لخدمات التسويق الرقمي والانتاج الاعلامي بالشكر والتقدير على جهدهم المميز في تصميم وبرمجة موقع اصايل بيقو خلال فترة قياسية . ويسعدنا ما تم الاتفاق بيننا وبينهم عليه من تطوير العلاقات والشراكة للعمل سويا . تمنياتنا لهم دوام التقدم والنجاح ",
  },
  {
    image: "https://via.placeholder.com/421",
    name: "د. عزالدين شلح",
    work: "رئيس مهرجان القدس السينمائي الدولي",
    paragraph:
      "في الحقيقة أن الخدمة المقدمة من قبل مؤسسة ميديا لايف لما تتمتع به من الخدمة الجيدة لدى عملائها، الموقع سرعة في التحميل، ومتابعة ممتازة وفريق ذو خبرة عالية، ونحن سعداء بالتعامل معكم، كل التحية لفريق مؤسسة ميديا لايف، شكراً لكم.",
  },
];

const Section = styled.section`
  margin-top: 162px;
  height: 1207px;
  text-align: center;
  & h2 {
    font-size: 50px;
    color: #fab250;
  }
  & > p {
    font-size: 30px;
  }
  .content {
    display: flex;
    justify-content: center;
    margin-top: 140px;
    & article {
      width: 540px;
      margin-right: 25px;
      margin-left: 25px;
      & h3 {
        font-size: 35px;
        font-weight: 600;
      }
      & p {
        font-size: 25px;
        font-weight: 500;
      }
    }
  }
`;

export default function Testimonials() {
  return (
    <Section>
      <h2>قالو عنا</h2>
      <p>شهاداتكم نفتخر بكم فهي وسام على صدورنا</p>
      <div className="content">
        {data.map((person) => (
          <article>
            <img src={person.image} alt="" />
            <h3>{person.name}</h3>
            <p>{person.work}</p>
            <img src={something} />
            <p>{person.paragraph}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
