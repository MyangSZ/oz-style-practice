import styled from "styled-components";
import "./styled/styled";
import { contents } from "./assets/data/data";
import Content from "./components/Content";
import Header from "./components/Header";
import { flexMixin  } from "./styled/styled";



const ContentContainer = styled.section`
  ${flexMixin({justify: "center", align: "center", wrap: "wrap", gap: "20px"})}
  padding: 20px 40px;
`;

function App() {
  return (
    <>
      <Header />
      <ContentContainer>
        {contents.map((el) => (
          <Content key={el.id} content={el} />
        ))}
      </ContentContainer>
    </>
  );
}

export default App;
