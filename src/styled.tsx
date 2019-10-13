import styled, { CreateStyled } from '@emotion/styled';

export type Theme = {
  color: {
    navbar: string;
    background: string;
  };
  font: {
    regular: string;
    bold: string;
    super: string;
    medium: string;
    semi: string;
    light: string;
  };
};

export default styled as CreateStyled<Theme>;
