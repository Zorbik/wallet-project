import styled from "styled-components";


export const Box = styled.div`
width: 533px;
height: 616px;
`

export const LogoSvg = styled.svg`
margin-right: 20px;
`
export const Logo = styled.h1`
display: flex;
align-items: center; 
justify-content: center;
`


export const Input = styled.input `
    width: 410px;
    margin-top: 20px;
    margin-bottom: 20px;
    outline: none;
    height: 34px;
    padding-left: 55px;
    font-size: 18px;
    line-height: 27px;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 0.5px, solid;
    border-color: #e7eaf2;

    ::placeholder {
        color: #bdbdbd;
      }
`;

export const InputIcon = styled.svg `
  position: absolute;
  left: 10px;
  bottom: 3px;
`

export const AuthLabel = styled.label `
  position: relative;
  width: 280px;
  margin-left: auto;
    margin-right: auto;
`

export const LogBtn = styled.button `
    display: block;
    width: 280px;
    height: 50px;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
    box-sizing: border-box;
    border-radius: 20px;
    text-transform: uppercase;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: 0.1em;
    background-color: #24cca7;
    border-color: transparent;
    outline: none;
    color: white;
    margin-top: 30px;
    margin-bottom: 30px;
`

export const RegBtn = styled.button `
  display: block;
  width: 280px;
  height: 50px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  border-radius: 20px;
  text-transform: uppercase;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 0.1em;
  background-color: #ffffff;
  color: #4a56e2;
  border: 1px solid #4a56e2;
`

export const Form = styled.form `
margin-left: 65px;
margin-right: 65px;
`

export const AuthForm = styled.form `

margin-top: 60px;
margin-bottom: 62px;
margin-right: auto;
margin-left: auto;
`