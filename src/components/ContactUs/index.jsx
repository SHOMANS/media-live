import styled from "styled-components";
import icon1 from "../../assets/icon1.svg";
import icon2 from "../../assets/icon2.svg";
import icon3 from "../../assets/icon3.svg";
import icon4 from "../../assets/icon4.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
import linkedin from "../../assets/linkedin.svg";
import { useState } from "react";

const Section = styled.section`
  margin-top: 80px;
  margin-bottom: 37px;
  height: 965px;
  text-align: center;
  padding-right: 82px;
  padding-left: 82px;
  background-color: #f8f8f8;
  & h2 {
    font-size: 50px;
    color: #fab250;
  }
  & > p {
    margin-top: 44px;
    font-weight: 500;
    font-size: 30px;
  }
  .content {
    display: flex;
    & article {
      width: 50%;
    }
    .info {
      text-align: right;
      font-size: 20px;
      margin-top: 26px;
      & h3 {
        font-size: 30px;
        font-weight: 500;
      }
      .call {
        margin-top: 70px;
        & li {
          margin-top: 40px;
          & span {
            margin-right: 14px;
            position: relative;
            top: -10px;
          }
        }
      }
      .social {
        display: flex;
        margin-top: 64px;
        & li {
          margin-left: 25px;
        }
      }
    }
    & form {
      width: 600px;
      margin-top: 75px;
      margin-right: 139px;
      text-align: left;
      & input {
        width: 280px;
        margin-right: 40px;
        height: 54px;
        border-radius: 10px;
        margin-bottom: 44px;
        padding: 4px 19px;
        border: 1px solid #707070;
        &:first-of-type {
          margin: 0;
        }
        &:last-of-type {
          width: 100%;
          margin: 0;
          margin-bottom: 44px;
        }
      }
      & textarea {
        width: 100%;
        height: 252px;
        border-radius: 10px;
        margin-bottom: 28px;
        resize: none;
        padding: 4px 19px;
        border: 1px solid #707070;
      }
      & button {
        background-color: #fab250;
        width: 101px;
        height: 34px;
        outline: 0;
        border-radius: 5px;
        border: 1px solid #707070;
      }
    }
  }
`;

export default function ContactUs() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div className="container">
      <Section>
        <h2>تواصل معنا</h2>
        <p>
          إذا كان لديك أي مشكلة أو استفسار يمكنك إرسال رسالة وسنرد عليك في أقرب
          وقت
        </p>
        <div className="content">
          <article className="info">
            <h3>تواصل معنا</h3>
            <p>
              عزيزي العميل: يسعدنا تواصلك معنا😀، لا تتردد في التواصل معنا أو
              ترك رسالتك🤔 وسنقوم بالرد عليك في أقرب وقت ممكن
            </p>
            <ul className="call">
              <li>
                <img src={icon1} alt="" />
                <span>
                  101 عمارة الغرابلي ، شارع عبدالقادر الحسيني، الرمال، غزة،
                  فلسطين
                </span>
              </li>
              <li>
                <img src={icon2} alt="" />
                <span>0097082839898</span>
              </li>
              <li>
                <img src={icon3} alt="" />
                <span>00970593404303</span>
              </li>
              <li>
                <img src={icon4} alt="" />
                <span>info@medialive.pro</span>
              </li>
            </ul>
            <ul className="social">
              <li>
                <a href="">
                  <img src={facebook} alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={instagram} alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={twitter} alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={linkedin} alt="" />
                </a>
              </li>
            </ul>
          </article>
          <article>
            <form action="">
              <input
                placeholder="الإسم"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                placeholder="رقم الجوال"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                placeholder="البريد الإلكتروني"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                placeholder="رسالتك"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit">إرسال</button>
            </form>
          </article>
        </div>
      </Section>
    </div>
  );
}
