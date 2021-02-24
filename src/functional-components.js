import { useState } from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
`;

const StyledInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #d0d0d0;
  font-size: 1rem;

  ${props => props.isEmpty && `
    border: 1px solid red;
  `}
`;

const ErrorMessage = styled.p`
  color: palevioletred;
`;

const InputGroup = ({ label, type, name, value, onChange, onBlur, isEmpty }) => (
  <div>
    <StyledLabel htmlFor={name}>{label}</StyledLabel>
    <StyledInput type={type} name={name} id={name} value={value} onChange={onChange} onBlur={onBlur} isEmpty={isEmpty} />
    {isEmpty && <ErrorMessage>Please fill out this field</ErrorMessage>}
  </div>
);

function Form() {
  const [userInputs, setUserInputs] = useState({
    nickname: {
      content: '',
      isEmpty: false,
      isValid: true,
    },
    email: {
      content: '',
      isEmpty: false,
      isValid: true,
    },
    phoneNumber: {
      content: '',
      isEmpty: false,
      isValid: true,
    },
    applyType: {
      content: '',
      isEmpty: false,
      isValid: true,
    },
  });

  const handleSubmit = event => {
    console.log(userInputs);
    event.preventDefault();
  }

  const handleInputChange = event => {
    const { name, value } = event.target;
    console.log(value);

    setUserInputs({
      ...userInputs,
      [name]: {
        content: value,
        isEmpty: false,
        isValid: true,
      }
    });
  }

  const handleInputBlur = event => {
    const { name, value } = event.target;

    setUserInputs({
      ...userInputs,
      [name]: {
        content: value,
        isEmpty: value ? false : true,
        isValid: true,
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>新拖延運動報名表單</h1>
      <p>活動日期：2020/12/10 ~ 2020/12/11</p>
      <p>活動地點：台北市大安區新生南路二段1號</p>
      <p>* 必填</p>

      <InputGroup label="暱稱" type="text" name="nickname" value={userInputs.nickname.content} onChange={handleInputChange} onBlur={handleInputBlur} isEmpty={userInputs.nickname.isEmpty} />

      <InputGroup label="電子郵件" type="email" name="email" value={userInputs.email.content} onChange={handleInputChange} onBlur={handleInputBlur} isEmpty={userInputs.email.isEmpty} />

      <InputGroup label="手機號碼" type="tel" name="phoneNumber" value={userInputs.phoneNumber.content} onChange={handleInputChange} onBlur={handleInputBlur} isEmpty={userInputs.phoneNumber.isEmpty} />

      <div>
        <p>報名類型</p>
        <div>
          <input
            type="radio"
            name="applyType"
            id="applyTypeOne"
            value="applyTypeOne"
            onChange={handleInputChange}
            checked={userInputs.applyType.content === 'applyTypeOne'}
          />
          <label htmlFor="applyTypeOne">躺在床上用想像力實作</label>
        </div>
        <div>
          <input
            type="radio"
            name="applyType"
            id="applyTypeTwo"
            value="applyTypeTwo"
            onChange={handleInputChange}
            checked={userInputs.applyType.content === 'applyTypeTwo'}
          />
          <label htmlFor="applyTypeTwo">趴在地上滑手機找現成的</label>
        </div>
        <p>請選擇報名類型</p>
      </div>

      <div>
        <label htmlFor="howDidYouKnow">怎麼知道這個活動的？</label>
        <input type="text" name="怎麼知道這個活動的" id="howDidYouKnow" placeholder="不好說⋯⋯" />
        <p>請填寫內容</p>
      </div>

      <div>
        <label htmlFor="otherSuggestions">其他</label>
        <p>對活動的一些建議</p>
        <input type="text" name="其他" id="otherSuggestions" placeholder="超讚" />
      </div>

      <input type="submit" value="提交" />
      <p>請勿透過表單送出您的密碼。</p>
    </form>
  )
}

export default Form;
