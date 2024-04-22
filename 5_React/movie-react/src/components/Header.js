import styled from "styled-components";

// 스타일 줄때
const Nav = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
`;

const Header = () => {
  return (
    <Nav>
      <div>
        <a href="/">영화 목록</a>
        <a href="/create">영화 정보</a>
      </div>
    </Nav>
  );
};

export default Header;
