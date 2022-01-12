import styled from "styled-components";

const ButtonContainer = styled.ul`
  font-family: sans-serif;
  font-size: 0.9rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(6rem, auto));
  grid-gap: 1rem 0.5rem;

  & > li {
    padding: 0.3rem 0;
    cursor: pointer;
    border: 1px solid ${(props) => props.theme.mainColor};
    border-radius: 1rem;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: ${(props) => props.theme.hoverColor};
    }
  }
`;

interface ButtonProps {
  categories: string[];
  filter: (button: string) => void;
}

function Button({ categories, filter }: ButtonProps) {
  return (
    <ButtonContainer>
      {categories.map((category, i) => (
        <li onClick={() => filter(category)} key={i}>
          {category}
        </li>
      ))}
    </ButtonContainer>
  );
}

export default Button;
