import * as Styled from './Styled';
import NotFoundImage from '../../../images/NotFound.png';

export default function NotFoundContainer() {
  return (
    <Styled.NotFoundContainer>
      <Styled.NotFoundImageDiv>
        <img src={NotFoundImage} alt="404이미지" />
      </Styled.NotFoundImageDiv>
      <div>
        <h1>페이지를 찾을 수 없습니다.</h1>
      </div>
      <div>
        <Styled.LinkToHome to="/todo">돌아갈래요</Styled.LinkToHome>
      </div>
    </Styled.NotFoundContainer>
  );
}
