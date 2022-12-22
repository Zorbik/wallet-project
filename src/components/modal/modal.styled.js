import styled from 'styled-components';
import Datetime from 'react-datetime';
import Switch from 'react-switch';
// import { NavLink } from 'react-router-dom';
import 'react-datetime/css/react-datetime.css';

export const ModalBox = styled.div`
  position: absolute;
  margin: 0 auto;
  max-height: 540px;
  top: 60px;
  background-color: #fff;

  @media screen and (max-width: $tablet) {
    max-height: 600px;
    width: 100%;
    padding: 20px 0px 268px 0px;
  }
  @media screen and (min-width: 768px) {
    max-height: 508px;
    min-width: 500px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px 20px 60px 20px;
    border-radius: 20px;
  }
`;

export const ModalTitle = styled.title`
  font-family: 'Poppins';
  justify-content: center;
  font-weight: 400;
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 24px;
  line-height: 1.5;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    font-size: 30px;
    line-height: 45px;
  }
  color: #000000;
`;

export const CloseAddModal = styled.button`
  position: absolute;
  display: flex;
  cursor: pointer;
  right: 20px;
  top: 20px;
  background-color: #fff;
  border: none;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const SwitchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  @media screen and (max-width: 768px) {
    max-width: 257px;
  }
  @media screen and (min-width: 768px) {
    width: 280px;
  }
`;

export const CheckBox = styled.span`
  font-family: 'Circe';
  font-weight: 700;
  font-style: 16px;
  line-height: 1.5;
  color: #e0e0e0;
  &.active-income {
    color: #24cca7;
  }
  &.active-expense {
    color: #ff6596;
  }
`;

export const MainSwitch = styled(Switch)`
  margin: 0 20px;
  margin-left: 15px;
  margin-right: 15px;
  background-color: none;
  border: 1px solid #e0e0e0;
  border-radius: 30px;
  box-shadow: 0px 6px 15px rgba(156, 156, 158, 0.5);
`;

export const CheckBoxIcon = styled.svg`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const AddTransactionForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContextMenuIcon = styled.svg`
  position: absolute;
  right: 15px;
  top: 15px;
  width: 18px;
  height: 9px;
  cursor: pointer;
  pointer-events: none;
`;
export const VolumeTransactionWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    display: grid;
  }
`;

export const FormInputSum = styled.label`
  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const SumInput = styled.input`
  outline: none;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  cursor: pointer;
  max-width: 188px;
  height: 32px;
  font-size: 18px;
  line-height: 27px;
  font-weight: 400;
  margin-right: 32px;
  padding: 0;

  @media screen and (max-width: 768px) {
    min-width: 280px;
    margin: 0;
  }
  &::placeholder {
    color: #bdbdbd;
    padding-bottom: 8px;
    padding-left: 20px;
    font-weight: 700;
    @media screen and (min-width: 768px) {
      text-align: center;
      text-align: center;
    }
  }
`;
export const SelectDateWrapper = styled.div`
  width: 100%;
  margin-bottom: 40px;
  max-width: 288px;
  height: 30px;
  @media screen and (min-width: 768px) {
    width: 200px;
  }
`;


export const DateWrapper = styled.label`
  display: flex;
  position: relative;
  padding: 0;
  flex-direction: row;
  max-width: 181px;
  height: 33px;
  border: none;
  outline: none;
  background-color: #fff;
  outline: none;
  border: none;
  input,
  textarea {
    padding: 0;
    font-weight: 400;
    line-height: 1.5;
    border: none;
  }
  @media screen and (max-width: 768px) {
    min-width: 280px;
    height: 32px;
    padding: 18px 0px 0px 0px;
  }
`;

export const DateIcon = styled.svg`
  position: absolute;
  top: 3px;
  width: 24px;
  height: 24px;
  fill: black;
  right: 0;
  cursor: pointer;
  vertical-align: baseline;

  @media screen and (max-width: 768px) {
    top: 19px;
    right: 15px;
  }
`;

export const TimeInput = styled(Datetime)`
  width: 100%;
  height: 30px;
  outline: none;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  cursor: pointer;
`;

export const CommentInput = styled.input`
  display: block;
  position: relative;
  font-family: 'Circe';
  width: 396px;
  height: 32px;
  font-size: 18px;
  line-height: 1.5;
  font-weight: 400;
  padding-bottom: 5px;
  outline: none;
  border: none;
  resize: none;
  border-bottom: 1px solid #e0e0e0;
  color: black;
  &::placeholder {
    color: #bdbdbd;
    margin: 0 0 5px 20px;
  }
  @media screen and (max-width: 768px) {
    height: 84px;
    max-width: 260px;
    margin-right: 0;
  }
`;



export const SelectCategoryWrapper = styled.div`
  position: relative;
  margin-bottom: 30px;
  outline: none;
  border: none;
  color: black;

  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }
`;

export const ContextMenuStyles = {
  option: (items, state) => ({
    ...items,
    paddingLeft: 20,
    // paddingTop: 13,
    height: 44,
    border: 'none',
    cursor: 'pointer',
    color: state.isSelected || state.isFocused ? '#FF6596' : '#000000',
    backgroundColor:
      state.isSelected || state.isFocused
        ? '#FFFFFF'
        : 'rgba(255, 255, 255, 0.7);',
  }),
  valueContainer: items => ({
    ...items,
    maxHeight: 34,
    paddingLeft: 20,
    paddingBottom: 9,
  }),
  menu: items => ({
    ...items,
    borderRadius: 20,
    boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1);',
    backgroundColor: 'rgba(255, 255, 255, 0.7);',
    backdropFilter: 'blur(25px)',
  }),
  menuList: items => ({
    ...items,
    '@media screen and (min-width: 320px)': {
      maxHeight: 352,
    },
    '@media screen and (min-width: 768px)': {
      maxHeight: 411,
    },
    padding: 0,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    filter:
      'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
  }),
  control: () => ({
    '@media screen and (min-width: 320px)': {
      width: 280,
    },
    '@media screen and (min-width: 768px)': {
      width: 408,
    },
    height: 34,
  }),
  placeholder: items => ({
    ...items,
    fontSize: 18,
    lineHeight: 1.44,
    fontFamily: 'Circe',
    color: '#BDBDBD',
  }),

  indicatorsContainer: () => ({
    display: 'none',
  }),
  container: items => ({
    ...items,
    cursor: 'pointer',
    borderBottom: '1px solid #E0E0E0',
  }),
  singleValue: (items, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 150ms';
    return { ...items, opacity, transition };
  },
};

export const SubmitBtn = styled.button`
  width: 300px;
  height: 50px;
  margin-top: 40px;
  background: #24cca7;
  border-radius: 20px;
  border: none;
  font-family: 'Circe';
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #ffffff;
`;
export const StyledNavLink = styled.button`
  margin-top: 20px;
  width: 300px;
  height: 50px;
  background: #fff;
  border-radius: 20px;
  border: 1px solid #4a56e2;
  font-family: 'Circe';
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #4a56e2;
`;
