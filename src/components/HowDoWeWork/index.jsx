import styled from "styled-components";
import How1 from "../../assets/How1.svg";
import How2 from "../../assets/How2.svg";
import How3 from "../../assets/How3.svg";
import How4 from "../../assets/How4.svg";

const Section = styled.section`
  margin-top: 108px;
  height: 1326px;
  text-align: center;
  & h2 {
    font-size: 50px;
    color: #fab250;
  }
  & p {
    margin-top: 4px;
    font-size: 18px;
    font-weight: 600;
  }
  & article {
    margin-top: 92px;
    position: relative;
  }
  .line {
    height: 1010px;
    background-color: #bbb9b9;
    width: 4px;
    margin: auto;
    padding-top: 90px;
    & div {
      height: 35px;
      width: 35px;
      border-radius: 50%;
      background-color: #fab250;
      border: 5px solid #ffffff;
      /* margin-top: 110px; */
      margin-bottom: 180px;
      left: 15px;
      position: relative;
    }
  }
  .content {
    height: 100%;
    text-align: right;
    margin-top: -930px;
    display: flex;
    & ul {
      margin: auto;
      & li {
        width: 350px;
        height: 250px;
        border-radius: 10px;
        box-shadow: 1px 3px 15px -3px #707070;
        padding: 21px 25px;
        margin-top: -35px;
        position: relative;
        & h5 {
          font-size: 24px;
          font-weight: 500;
          color: #393838;
          margin-top: -10px;
        }
        & p {
          font-size: 18px;
          font-weight: normal;
          color: #8d8a8a;
          line-height: 1.2;
        }
      }
      & li::after {
        border-top: 17px solid transparent;
        border-bottom: 17px solid transparent;
        content: "";
        display: block;
        position: absolute;
        width: 0;
        height: 0;
        top: 45px;
      }
      & li:nth-child(odd) {
      }
      & li:nth-child(even) {
        margin-right: 440px;
      }
      & li:nth-child(odd)::after {
        border-right: 20px solid #dfd9d9;
        left: -20px;
      }
      & li:nth-child(even)::after {
        border-left: 20px solid #dfd9d9;
        right: -20px;
      }
    }
  }
`;

export default function HowDoWeWork() {
  return (
    <Section>
      <div className="container">
        <h2>كيف نعمل؟</h2>
        <p>
          نمتلك في ميديا لايف فريق كبير من الكفاءات الأكاديمية والمهنية حيث نعمل
          على تطوير فريق عملنا بشكل دائم ليواكب آخر التقنيات المستخدمة بما
          يتلائم مع متطلبات السوق وحاجة الزبون.
        </p>
        <article>
          <div className="line">
            <div />
            <div />
            <div />
            <div />
          </div>
          <div className="content">
            <ul>
              <li>
                <img src={How1} alt="" />
                <h5>نكتب</h5>
                <p>
                  نقوم بتحويل الأفكار المميزة إلى كلمات مقروءة، ثم نعيد صياغتها
                  لتصل بأبسط الكلمات وأكثرها تناسيبا مع مفاهيم الجمهور الذي
                  نستهدفه.
                </p>
              </li>
              <li>
                <img src={How2} alt="" />
                <h5>نبحث</h5>
                <p>
                  نستخدم أحدث التقنيات لرصد التفاصيل المحيطة بمحتوى كافة منصات
                  التواصل الإجتماعي وحملاتك الإعلانية، ونخضعها للقراءة والتحليل.
                </p>
              </li>
              <li>
                <img src={How3} alt="" />
                <h5>نتحدث</h5>
                <p>
                  نكون حملات إعلانية متكاملة وشاملة لكل أهدافك مستغلين كافة
                  خبراتنا المتخصصة بعالم التسويق الإلكتروني لمختلف منصات التواصل
                  الاجتماعي.
                </p>
              </li>
              <li>
                <img src={How4} alt="" />
                <h5>نبدع</h5>
                <p>
                  نُشَكِّل المحتوى الخاص بك في مجموعة من التصاميم القادرة على
                  جذب الانتباه والعمل على ايصال وربط فكرتك لعملائك وجمهورك
                  المستهدف بالصورة المطلوبة.
                </p>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </Section>
  );
}
