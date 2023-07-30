import * as Styled from './Styled';
import MainImage from '../../../images/NotFound.png';

function MainContainer() {
  return (
    <Styled.MainContainer>
      <Styled.MainImageDiv>
        <img src={MainImage} alt="메인페이지 이미지" />
      </Styled.MainImageDiv>
      <div>
        <h1>todolist에 오신 것을 환영해요!</h1>
      </div>
      <div>
        <p>우측 상단 로그인과 회원가입이 있어요!</p>
        <p>이미 로그인이 되어 있다면 Todo로 이동해볼까요?</p>
        <Styled.LinkToTodo to="/todo">할 일 적으러 가기</Styled.LinkToTodo>
      </div>
    </Styled.MainContainer>
  );
}

export default MainContainer;
