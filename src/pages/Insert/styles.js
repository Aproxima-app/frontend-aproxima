import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`;

export const Form = styled.form`
  width: 400px;
  background: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 100px;
    margin: 10px 0 40px;
  }
  p {
    color: #ff3333;
    margin-bottom: 15px;
    border: 1px solid #ff3333;
    padding: 10px;
    width: 100%;
    text-align: center;
  }
  input {
    flex: 1;
    height: 0px;
    padding: 10px 5px;
    margin-bottom: 15px;
    color: #777;
    font-size: 15px;
    width: 316px;
    border: 1.5px solid #22264C;
    &::placeholder {
        width: 170px;
        height: 22px;
        left: 88px;
        top: 269px;

        font-family: Montserrat;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
    }
  }
  button {
    color: #fff;
    font-size: 16px;
    background: #FF851B;
    height: 56px;
    border: 0;
    border-radius: 30px;
    width: 316px;
  }
  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 100%;
  }
  a {
    font-size: 16;
    font-weight: bold;
    color: #999;
    text-decoration: none;
  }
`;