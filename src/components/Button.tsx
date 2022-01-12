import styled from "styled-components";

const ButtonContainer = styled.ul``;

interface ButtonProps {
  categories: string[];
  filter: (button: string) => void;
}

function Button({ categories, filter }: ButtonProps) {
  return (
    <ButtonContainer>
      {categories.map((category, i) => (
        <li>
          <button type="button" onClick={() => filter(category)} key={i}>
            {category}
          </button>
        </li>
      ))}
    </ButtonContainer>
  );
}

export default Button;
